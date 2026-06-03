# Commonplace

Commonplace is a static GitHub Pages app that interprets a user’s expression through selected “oracle” voices across philosophy, sacred traditions, science, and pop culture.

## Architecture

```txt
GitHub Pages frontend
        ↓
Cloudflare Worker backend
        ↓
OpenAI Responses API
