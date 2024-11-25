module.exports = function(eleventyConfig) {

     eleventyConfig.addWatchTarget("./_src/sass/");
     eleventyConfig.addWatchTarget("./_src/img/");
     eleventyConfig.addPassthroughCopy("./_src/img/");


     return {
          dir: {
               input: "_src"
               }
     }
}

