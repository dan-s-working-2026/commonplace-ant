export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": "https://commonplace-61f.pages.dev",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const url = new URL(request.url);
    const body = await request.text();

    if (url.pathname === "/relay") {
      const res = await fetch(env.SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
      });
      const data = await res.text();
      return new Response(data, {
        status: res.status,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.ANTHROPIC_KEY,
        "anthropic-version": "2023-06-01",
      },
      body,
    });

    const data = await res.text();
    return new Response(data, {
      status: res.status,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  },
};
