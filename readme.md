# hexo-search-result

Add a search result page for [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search).

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

## License

MIT License
