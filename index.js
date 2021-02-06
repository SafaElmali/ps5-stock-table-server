const Crawler = require("crawler");
const { CRAWLER_URLS } = require("./constants");
const { vatanCrawler } = require("./crawlerFunctions");

const c = new Crawler({
  maxConnections: 10,
});

// Queue URLs with custom callbacks & parameters
c.queue([
  {
    uri: CRAWLER_URLS.VATAN_BLUE_RAY,
    // The global callback won't be called
    callback: vatanCrawler,
  },
  {
    uri: CRAWLER_URLS.VATAN_DIGITAL,
    // The global callback won't be called
    callback: vatanCrawler,
  },
  {
    uri: CRAWLER_URLS.TEKNOSA_BLUE_RAY,
    // The global callback won't be called
    callback: function (error, res, done) {
      if (error) {
        console.log(error);
      } else {
        var $ = res.$;
        // $ is Cheerio by default
        //a lean implementation of core jQuery designed specifically for the server
        console.log($("title").text());
      }
      done();
    },
  },
  {
    uri: CRAWLER_URLS.MEDIA_MARKT_BLUE_RAY,
    // The global callback won't be called
    callback: function (error, res, done) {
      if (error) {
        console.log(error);
      } else {
        var $ = res.$;
        // $ is Cheerio by default
        //a lean implementation of core jQuery designed specifically for the server
        console.log($("title").text());
      }
      done();
    },
  },
]);
