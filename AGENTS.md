# Project notes

## Workflow preferences

- **Do not run `git commit` or `git push`.** The user reviews changes and commits
  themselves. It's fine to stage files and draft suggested commit messages.

## Project context

- Site is a reconstruction of weatherfortheblind.org from Internet Archive
  (Wayback Machine) captures, rebuilt on Eleventy (eleventy-netlify-boilerplate).
- The home page (`_includes/layouts/home.njk`) is a standalone HTML document —
  it does NOT use `layouts/base.njk`, and loads salvaged assets directly from
  `/_includes/assets/{css,js}/`.
- `weatherfortheblind.org/` contains raw archived pages (source material for
  post pages) and is intentionally gitignored.
- Audio archive tracks (SLEEP/RELAX/WORK/SUNRISE/STORM) link to Wayback
  captures, not local files.
- Live audio is a Mixlr embed: https://mixlr.com/weather-for-the-blind/embed
- Deploy target: weatherfortheblind.netlify.app
- Build: `npx @11ty/eleventy` (output: `_site/`); dev: `npx @11ty/eleventy --serve`
