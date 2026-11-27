---
title: "Markdown & Typography Showcase"
pubDate: 2026-01-10
tags: ["Markdown", "Typography"]
wip: true
---

This sample post demonstrates the built-in prose styling, sticky table of contents, code copy buttons, and WIP notice banner.

## Typography

Body copy uses **Fira Sans** paired with **Lora** / **Fraunces** headings and **Fira Code** for inline `code` snippets.

> Good design is as little design as possible. Less, but better.

### Lists & Task Rhythm

1. Automatic heading anchors via `rehype-autolink-headings`
2. Sticky desktop TOC with a spring-animated active indicator rail
3. Click-to-zoom lightbox on any image inside `.prose`

## Code Blocks

Hover over any code block to reveal the M3E copy button:

```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Matcha"));
```

## Tables

| Token | Default (Light) | Role |
| --- | --- | --- |
| `--primary` | `oklch(0.54 0.165 var(--hue-primary))` | Primary accent |
| `--tertiary` | `oklch(0.64 0.145 var(--hue-tertiary))` | Expressive badge accent |
| `--background` | `oklch(0.98 0.012 calc(var(--hue-primary) - 29))` | Warm paper canvas |
