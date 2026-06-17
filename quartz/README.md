# Awakening from the Meaning Crisis — Knowledge Graph

A knowledge graph of the ideas in John Vervaeke's *Awakening from the Meaning
Crisis* lecture series: concepts, thinkers, traditions, and practices, linked by
typed relationships (`builds_on`, `contrasts_with`, `responds_to`, `part_of`,
`exemplified_by`, `developed_by`).

**Live site:** https://touyette.github.io/AMC-KG/

This is a derivative study aid built from Vervaeke's lectures. All credit for the
ideas themselves belongs to him — notes here paraphrase his framing and never
reproduce transcript text.

## What's in this repo

This repo only contains the **published site**, built with [Quartz
5](https://quartz.jzhao.xyz/). The source Obsidian vault (the actual notes,
transcripts, and authoring tooling) lives outside of this published folder and
is not part of the public site.

```
content/        the notes that make up the site (concepts, thinkers, traditions,
                 practices, episodes, MOCs)
quartz.config.yaml   site configuration (title, theme, plugins)
```

## Building locally

```bash
npm ci
npx quartz plugin install
npx quartz build --serve
```

Then open http://localhost:8080.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which rebuilds the
site with Quartz and publishes it to GitHub Pages automatically.

## Known limitation

Typed relationships are authored as Dataview inline fields (`predicate::
[[Target]]`) in the source vault, which require the Obsidian Dataview plugin.
On this static site, the wikilinks still work (they feed the graph view and
backlinks), but the field syntax itself renders as literal text rather than
styled prose.
