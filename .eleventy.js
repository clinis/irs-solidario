const htmlnano = require('htmlnano')
const CleanCSS = require('clean-css')

module.exports = function(eleventyConfig) {

  // site is not on root of domain. because github pages
  const pathPrefix = "/irs-solidario/";

  // copy favicon files to site root
  eleventyConfig.addPassthroughCopy({ "./src/favicon": "/" });

  // copy Simple Datatables javascript files to site root
  eleventyConfig.addPassthroughCopy({ "node_modules/simple-datatables/dist/umd/simple-datatables.js": "/simple-datatables-scripts.js" });

  // Set watch targets for CSS changes
  eleventyConfig.addWatchTarget('**/*.css')


  /* Filter to minify CSS styles */
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({ level: 2 }).minify(code).styles;
  });

  /* Transform to minify HTML */
  eleventyConfig.addTransform("htmlmin", async function(content, outputPath) {
    if( outputPath.endsWith(".html") && process.env.ELEVENTY_ENV === 'production' ) {
      const options = {
        collapseWhitespace: 'conservative'
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
