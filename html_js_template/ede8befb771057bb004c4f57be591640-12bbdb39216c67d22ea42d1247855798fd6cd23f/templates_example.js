// #my-snippet

(async () => {
  const template = await templates.load('my-template.html')
  console.assert('my-template.html' in templates)
  console.assert(template === document.head.lastElementChild)
  console.assert(template instanceof HTMLTemplateElement)
})()