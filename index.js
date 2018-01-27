const fs = require('hexo-fs')
const path = require('path')
function insertSearchResult (args) {
  return fs.readFile(path.join(__dirname, './client.js')).then(content => {
    return '<div id="plugin-search-result"></div>' +
      '<script>' + content + '</script>'
  })
}

hexo.extend.tag.register('search_result', insertSearchResult, {
  async: true
})

