# Commonplace

Commonplace is a static GitHub Pages app that interprets a user’s expression through selected “oracle” voices across philosophy, sacred traditions, science, and pop culture.

The frontend is intentionally static. The oracle engine runs through a secure backend proxy so API keys are never exposed in browser code.

## Architecture

```txt
GitHub Pages frontend
        ↓
Cloudflare Worker backend
        ↓
OpenAI Responses API
