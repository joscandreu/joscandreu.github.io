---
layout: page
title: Search
permalink: /search/
subtitle: Search the whole blog archive.
---

<input type="search"
       id="search-input"
       class="search-box"
       placeholder="Type to search…"
       data-index="{{ '/search.json' | relative_url }}"
       autocomplete="off"
       autofocus>

<p id="search-status" class="search-status"></p>
<ul id="search-results"></ul>

<script src="{{ '/assets/js/search.js' | relative_url }}" defer></script>
