const templates = Object.create(null, {
  load: {
    value: async function(fileName) {
      const url = new URL(fileName,
        document.currentScript && document.currentScript.src || location.href)
      if (url in this) return this[url]
      // fetch and parse template as string
      let template = await fetch(url)
      template = await template.text()
      template = new DOMParser().parseFromString(template, 'text/html')
        .querySelector('template')
      if (!template) throw new TypeError('No template element found')
      // overwrite link tags' hrefs asuming they're always relative to the template
      for (let link of template.content.querySelectorAll('link')) {
        let href = document.importNode(link).href
        href = new URL(href).pathname.substr(1)
        link.href = new URL(href, url).href
      }
      document.head.append(template)
      this[url] = template
      return template
    }
  }
})


// If my-template.html already comes wrapped in <template> tag we ca avoid teh part of creating the template element manually because the DOMParser already creates the tempate element for us.

// psudo

// document.head.append(
//   new DOMParter().parseFromString(text, 'text/html')
//   .querySelector('template')
// )
