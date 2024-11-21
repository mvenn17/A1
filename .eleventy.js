module.exports = function(eleventyConfig) {

     eleventyConfig.addWatchTarget("./src/sass/");
     eleventyConfig.addWatchTarget("./src/img/");
     eleventyConfig.addPassthroughCopy("./src/img/");


     return {
          dir: {
               input: "_src"
               }
     }
}

