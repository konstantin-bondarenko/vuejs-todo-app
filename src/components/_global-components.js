// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

import Vue from 'vue'

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  '.',
  // Look in subdirectories
  true,
  // Match .vue viles
  /[\w-]+\.vue$/
)

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name

  const componentName = fileName
    // Remove the "./_" from the beginning
    // .replace(/^\.\/_/, '')
    // // Remove the file extension from the end
    // .replace(/\.\w+$/, '')
    // // Split up kebabs
    // .split('-')
    // // Upper case
    // .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    // // Concatenated
    // .join('')
    .split('/')
    .pop()
    .replace(/\B([A-Z])/g, '-$1').toLowerCase()
    // .map((kebab) => kebab.charAt(0).toLowerCase() + kebab.slice(1))
    .replace(/\.\w+$/, '') // remove file extension

    console.log('Component name', `c-${componentName}`)

  // Globally register the component
  Vue.component(`c-${componentName}`, componentConfig.default || componentConfig)
})
