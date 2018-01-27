# hexo-search-result

Add a search result page for [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search).

![](https://lh3.googleusercontent.com/VSdABBp3kUfHI59r9Eef3Sul-ZO8A90_Y5jO40FRPJYaMi4Easa8TvqMD89bzMw8d6KbPew_BYCajxRghNYbXj6mn81xVjWcRKac0iSUg_HDKbwvO6wQGAOHIDoDgm-efmflL-QlYKe2yc3Ss81ZDjagVfYfwEu-ehw3qUq39kJESKAek6i53Tqq3T6hlkv55BorFNes8M24SuHQc5ODJJVYCSwPHc5moSyX7LWRijRfcnoBVqzut1h1tWcU8wn23nugLcz-e03A7y_v0KTKZ-9pGSrPOB1zVdMUxywo2YUqPRak-qcImjueqktzbbhgLBsySj1zWMx8x7lsQz2Ymp4yuF7_LFvZrSp4YZ9vfKtzqQ7kLfwqEUt9ZxyOpAN8q2qX_EMQFuUFJRDASqRg4FV8hvxSJYyx_XQxPIuhvsKZDuw1h-Lxq5HyTchsUUqudnkqPipKFO395_URD6SHTUQq3qqqzshjV50HvdAVDN0HB8w9WQCczzIkCo1pdk9XyOYWE42AKJHJKj5d9XwmPXz8NyNLPcLlbRPjyCNSgMkJOQO3l7cpLF-T6ePOGgT_ZLDigvFknBZnrfAX1QlHuj0pJ2R7Egt73nZlqeolsFJ7ZPTWr-eKJgmklgAWKVJaRvUu2XFQFGHZpuYujDco9Oz3B2ca256v=w1239-h679-no)

## Install

```
$ npm install hexo-search-result
```

## Usage

### Add a new page

```
$ hexo new page search
```

### Write a tag

Open `source/search/index.md` and insert a tag like this.

```
{% search_result %}
```

### Access to the page

By using url parameters, you can use the search result page.

For example:

```
https://www.example.com/search/?search=foo
```

This will let the page show the pages matching `foo`.

### Add a search box

Add a search box for your website by editing your theme.

For example:

```html
<input type="text" id="search-text" />
<button id="search-submit">Search</button>
```

```js
const text = document.getElementById("search-text")
const submit = document.getElementById("search-submit")
submit.addEventListener("click", () => {
  window.location.href = "/search/?search=" + text.value
})
```

## Customize

Please fork one!

## License

MIT License
