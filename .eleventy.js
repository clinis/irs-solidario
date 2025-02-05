import { EleventyHtmlBasePlugin } from '@11ty/eleventy';
import htmlnano from 'htmlnano';

export default async function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

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
}

export const config = {
  dir: {
    input: './src',
    output: './dist'
  },
  htmlTemplateEngine: 'njk',
  // Deploy to a subdirectory (e.g.: /dev/test). Is the case on GitHub pages. If on root, leave blank ("")
  pathPrefix: '/irs-solidario/',
};
