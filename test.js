// a simple test using `console.log`

fetchData('https://gist.githubusercontent.com/shundroid/586d39c62de31a68e0e17f62507e5f21/raw/b10b91862fd6de0d443de177bda8acdcee9492f9/search-test.xml').then(document => {
  const entries = analyzeData(document, 'unity')
  console.log(entries)
})
