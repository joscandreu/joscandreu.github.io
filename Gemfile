source "https://rubygems.org"

# Use the official GitHub Pages meta-gem so your local environment matches
# exactly what GitHub Pages runs in production. This pins the version of
# Jekyll and of every allowed plugin.
gem "github-pages", group: :jekyll_plugins

# Plugins (already included in github-pages, listed here for clarity).
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
end

# Dependencies needed on Windows / Ruby >= 3 ---------------------------
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Needed on Ruby 3.0+ because webrick is no longer a default dependency.
gem "webrick", "~> 1.8"
