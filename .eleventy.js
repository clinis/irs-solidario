module.exports = function(eleventyConfig) {

  // copy favicon files to site root
  eleventyConfig.addPassthroughCopy({ "./favicon": "/" });

  return {
    dir: {
      input: './',
      output: './_site',
    }
  }
}
