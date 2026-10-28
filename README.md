# yusufmisdaq.com

The website of Yusuf Misdaq: plain HTML, CSS and JavaScript, hosted free on GitHub Pages.

## Editing (no code needed)
Open **https://app.pagescms.org**, sign in with GitHub, and pick this repository. Everything you can change is in the left-hand menu:
Ticker (people, releases, diary moments, news), Selected works, Opportunities, Inspirations wall, Homepage (excerpts, songs) and Site settings (footer links, menu names).
Save, and the live site updates in about a minute.

## Project pages
Each work in **Selected works** is its own entry: the tile fields at the top, then its project page built from blocks (text, poster, image, wrap, split, quote, poem, gallery, video, clip, audio, pinned, buttons, divider, credits). Its page lives at `work.html?w=<file name>`.

## Publishing
`.github/workflows/deploy.yml` publishes the site after every change: it runs `tools/build.mjs` (which prepares the works for the pages) and puts the result on GitHub Pages. In Settings → Pages the source must be **GitHub Actions**.

## Where things live
- `content/` — all the editable lists (JSON), and `content/works/` with one file per work. The editor writes these.
- `media/` — uploaded images and audio.
- `index.html`, `works.html`, `opportunities.html`, `inspirations.html` — the pages.
- `assets/js/` — page code. Generated from the design canvas; change designs there, not by hand.

## Previewing a date
Add `?tickerDate=nov+24` to the homepage address to see the ticker as it will look on that day.
