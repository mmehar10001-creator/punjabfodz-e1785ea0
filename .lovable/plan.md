## Problem

The published site (`punjabfood.lovable.app`) shows a white page. Browser console reports:

> `main.tsx:1 Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "text/html".`

## Root cause

`index.html` at the project root is:

1. **Duplicated** — the entire `<!DOCTYPE html>…</html>` block appears twice in the same file (visible in the current file contents).
2. **References a file that doesn't exist** — `<script type="module" src="/src/main.tsx">`. This project is a **TanStack Start** app; there is no `src/main.tsx`. The SSR shell lives in `src/routes/__root.tsx` and the worker entry is `src/server.ts`.

In dev, Vite + TanStack Start intercept the request and SSR the page directly, so the broken `index.html` is never used → preview looks fine. In production the broken HTML can be served, the browser then requests `/src/main.tsx`, the server returns an HTML 404 page, the browser rejects it due to MIME type, and nothing mounts → **white page**.

## Fix

1. **Delete `index.html`** at the project root. TanStack Start does not use it — the HTML shell is produced by `RootShell` inside `src/routes/__root.tsx` (which already renders `<html><head><HeadContent /></head><body>{children}<Scripts /></body></html>`). Keeping a stale `index.html` only causes drift and bugs like this one.
2. Leave everything else untouched — `src/routes/__root.tsx`, `src/server.ts`, `vite.config.ts`, route files, menu data, and images all stay exactly as they are. No content, layout, image, or routing changes.
3. After the edit, **republish** the project (Publish → Update) so the production worker is rebuilt without the broken HTML.

## What will NOT change

- No route changes, no menu edits, no image swaps.
- No design, color, font, or layout changes.
- No edits to `src/routeTree.gen.ts`, `src/styles.css`, `src/server.ts`, `vite.config.ts`, `wrangler.jsonc`, or any route file.
- Dev preview will continue to look identical to today.

## Verification after build

- Reload `punjabfood.lovable.app` — homepage renders with the hero, "House Favourites", menu preview, and catering CTA exactly as in the preview.
- DevTools → Console: the `main.tsx` MIME-type error is gone.
- DevTools → Network: no 404 for `/src/main.tsx`.
