/**
 * Configure PostCSS with plugins.
 * 
 * Docs:
 * https://github.com/postcss/postcss
 * https://tailwindcss.com/docs/installation/
 * https://github.com/postcss/autoprefixer
 * https://github.com/FullHuman/postcss-purgecss
 */

const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project 
    content: [ './src/**/*.html' ],
  
    // Include any special characters in this regular expression beyond what Tailwind CSS uses.
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],

    // Prevent the purge from removing this Font Awesome class.
    whitelist: ['fa-globe-americas'],
});

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('postcss-preset-env')({ autoprefixer: { grid: true }}),
        ...process.env.NODE_ENV === 'production' ? [purgecss] : []
    ],
};
