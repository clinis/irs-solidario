module.exports = function(eleventyConfig) {

  // site is not on root of domain. because github pages
  const pathPrefix = "/irs-solidario/";

  // copy favicon files to site root
  eleventyConfig.addPassthroughCopy({ "./favicon": "/" });

  return {
    dir: {
      input: './',
      output: './_site'
    },
    pathPrefix: pathPrefix
  }
}
