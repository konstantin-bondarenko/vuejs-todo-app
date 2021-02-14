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
  const componentName = fileName
    // Remove the "./_" from the beginning
    .split('/')
    .pop()
    // Split up kebabs
    .replace(/\B([A-Z])/g, '-$1').toLowerCase()
    // Remove file extension
    .replace(/\.\w+$/, '')

  // Globally register the component
  Vue.component(`c-${componentName}`, componentConfig.default || componentConfig)
})
