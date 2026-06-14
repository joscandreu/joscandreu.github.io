# Micro — a *microsiervos.com*-style Jekyll theme

A minimalist [Jekyll](https://jekyllrb.com) theme inspired by the classic
blog [microsiervos.com](https://www.microsiervos.com): two-column layout,
careful typography, category sections, search and an RSS feed.

Designed to run **directly on GitHub Pages**, using only plugins from the
official allow-list.

![Style: clean, two columns, white background](assets/img/favicon.svg)

---

## ✨ Features

- **microsiervos look**: header with a logo + sections menu, main content
  and a sidebar, collapsing to one column on mobile.
- **Sections (categories)** each with their own archive page and a count.
- **Paginated home page** with `jekyll-paginate`.
- **Client-side search** (`search.json` + JS, no server).
- **Archive by year** and a custom 404 page.
- **SEO + sitemap + RSS** out of the box.
- **Related posts** by category (no `--lsi` needed).
- **Share** links and **optional comments** (giscus/Disqus).
- 100% free of external JS dependencies.

---

## 🚀 Quick start

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

### Configuration

Edit `_config.yml`:

```yaml
title:    My blog
tagline:  My tagline
author:   My name
url:      "https://username.github.io"
baseurl:  ""          # "/repo-name" for a Project Page
```

> **Project Pages** (`username.github.io/repo`): set `baseurl: "/repo"`.
> **User/Org Pages or a custom domain**: leave `baseurl: ""`.

### Social links

These are configurable in `_config.yml` and shown in the **sidebar** and
the **footer**. Add, remove or reorder whatever you like:

```yaml
social:
  - name: Twitter / X
    url: https://twitter.com/username
  - name: Mastodon
    url: https://mastodon.social/@username
  - name: GitHub
    url: https://github.com/username
show_rss: true        # adds a link to the RSS feed next to the social links
```

To hide all social links, use `social: []` and `show_rss: false`.

### Writing posts

Create `_posts/YYYY-MM-DD-title.md`:

```yaml
---
title: "Post title"
date: 2026-06-08
categories: [technology]     # must exist in _data/navigation.yml
tags: [web, jekyll]
image: /assets/img/photo.jpg  # optional: thumbnail and header
---

Content in Markdown.
```

Posts are shown **in full** on the home page and in sections. To trim a
long post and show only the beginning + a **"Read more"** link, add
`<!--more-->` at the cut point.

### Adding or changing sections

1. Edit `_data/navigation.yml` (name, `category`, `url`).
2. Create the page in `categories/<slug>.md` with `layout: category`.

The category `slug` is what appears in post URLs, because the permalink is
`/:categories/:title/`. So a post with `categories: [technology]` named
`2026-06-08-my-post.md` ends up at `/technology/my-post/`, and its section
archive lives at `/technology/`.

---

## ⚠️ GitHub Pages limitations and how this theme handles them

GitHub Pages only runs an [allow-list of plugins][whitelist] and disables
custom `_plugins/`. The theme therefore avoids what doesn't work and
provides alternatives:

| Need | GitHub Pages limitation | Solution in this theme |
|---|---|---|
| Plugins | Allow-list only; ignores `_plugins/` | Uses only `jekyll-feed`, `jekyll-seo-tag`, `jekyll-sitemap`, `jekyll-paginate` |
| Advanced pagination | `jekyll-paginate-v2` **not** allowed | Home page with v1; categories listed via Liquid |
| Category/tag pages | `jekyll-archives` **not** allowed | Manual category pages (`categories/*.md`) iterating `site.categories` |
| Search | No backend | `search.json` index + `search.js` (client-side) |
| Related posts | `--lsi` doesn't run | Related by category via Liquid |
| Comments | No backend | Optional giscus/Disqus integration |

### Optional improvements

If you want features the allow-list doesn't permit, **build with GitHub
Actions** instead of the default builder. The repo ships a ready-to-use
`.github/workflows/jekyll.yml`. That would let you add:

- `jekyll-paginate-v2` → pagination on categories and tags too.
- `jekyll-archives` → automatically generated tag and date pages.
- CSS/JS minification, image optimization, etc.

To enable it: add the gems to your `Gemfile` and under **Settings → Pages
→ Source** choose **GitHub Actions**.

---

## 📁 Structure

```
├─ _config.yml          Configuration
├─ _data/navigation.yml Menu and sections
├─ _layouts/            default, home, post, page, category
├─ _includes/           head, header, sidebar, footer, cards…
├─ _sass/               variables, base, layout, components, responsive
├─ assets/              css/, js/, img/
├─ categories/          one page per section
├─ _posts/              sample posts
├─ index.html           paginated home page
├─ search.md            search
├─ archive.html         archive by year
├─ about.md             about page
├─ search.json          search index (generated)
└─ .github/workflows/   optional build with Actions
```

---

## 📄 License

[MIT](LICENSE). Inspired by the spirit of microsiervos.com; not affiliated
with it.

[whitelist]: https://pages.github.com/versions/
