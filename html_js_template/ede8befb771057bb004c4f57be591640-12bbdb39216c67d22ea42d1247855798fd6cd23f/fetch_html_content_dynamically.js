// Create template set to variable template 
// Then modify the template by adding a div element 
// add that div elemnt to the template so that the newly fetched template text is added to the html documnet
// Step 1 (dynamically)

const template = document.createElement('template')
// modify the template's content
template.content.append(document.createElement('div'))
// add it to the document so it is parsed and ready to be used
document.head.append(template)


// Step 2 (dynamically)
// Parse the incoming text and add it to our template.content:

const text = fetchTemplateSomehowAsText('my-template.html')
const parsedDocument = new DOMParser().parseFromString(text, 'text/html')
template.content.append(parsedDocument.querySelector('#my-snippet'))