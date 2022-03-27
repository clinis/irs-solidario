const htmlnano = require('htmlnano')

module.exports = function(eleventyConfig) {

  // site is not on root of domain. because github pages
  const pathPrefix = "/irs-solidario/";

  // copy favicon files to site root
  eleventyConfig.addPassthroughCopy({ "./src/favicon": "/" });

  // copy Simple Datatables javascript file to site root
  eleventyConfig.addPassthroughCopy({ "node_modules/simple-datatables/dist/umd/simple-datatables.js": "/simple-datatables-script.js" });

  // Set watch targets for CSS changes
  eleventyConfig.addWatchTarget('**/*.css')

  /* Transform to minify HTML and CSS */
  eleventyConfig.addTransform("htmlmin", async function(content, outputPath) {
    if( outputPath.endsWith(".html") && process.env.ELEVENTY_ENV === 'production' ) {
      const options = {
        collapseWhitespace: 'aggressive',
        minifyCss: {
          preset: ['default', {
            discardComments: {
              removeAll: true,
            },
          }]
        }
      };
      const { html } = await htmlnano.process(content, options)
      return html
    }
    return content;
  });

  return {
    dir: {
      input: './src',
      output: './dist'
    },
    pathPrefix: pathPrefix,
    htmlTemplateEngine: "njk"
  }
}
