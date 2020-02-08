const cssnano = require('cssnano')({
  preset: [
    'default',
    { "discardComments": { "removeAll": false } }
  ],
}) 
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.css',
    // etc.
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
    plugins: [
      require('postcss-easy-import')({}),
      require('postcss-normalize')({}),
      require('postcss-preset-env')({
        stage: 0,
      }),
      require('postcss-custom-media')({
        importFrom: [
          './tailwind.config.js',
        ]
      }),
      require('tailwindcss')('./tailwind.config.js'),
      ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : [],
      ...process.env.NODE_ENV === 'production'
      ? [cssnano] : [],
    ],

  }