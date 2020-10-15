const sitemap = require('nextjs-sitemap-generator');  

module.exports = {
    devIndicators: {
      autoPrerender: false,
    },
  }

  sitemap({  
    baseUrl: 'www.flipbooks.co.in',  
    pagesDirectory: __dirname + "/pages",  
    targetDirectory : 'public/static'  
  });
