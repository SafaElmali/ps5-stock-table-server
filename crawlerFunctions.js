const vatanCrawler = (err, res, done) => {
  if (err) console.log(err);
  else {
    // $ is Cheerio by default
    //a lean implementation of core jQuery designed specifically for the server
    const $ = res.$;

    // Get product button's parent div
    const buttonParentDiv = $(
      "body > main > div.container-fluid.wrapper-linear > div > div > div > div > div.col-xs-12.col-sm-12.col-md-12.col-lg-6.pd-right > div.container-fluid > div > div > div.d-table.hidden-xs > div.d-cell.product-button--cell"
    );

    // Get product button
    const productButton = buttonParentDiv[0].childNodes.find(
      (node) => node.name === "button"
    );

    // Get product button text child node
    const textList = productButton.childNodes.filter(
      (node) => node.name !== "span"
    )[0].data;

    // check button child node inner text
    if (textList.includes("SEPETE EKLE")) {
      console.log("Product on SALE! GO GO GO!");
      return 2;
    } else if (textList.includes("ÇOK YAKINDA")) {
      console.log("Product not on sale still..");
      return 1;
    } else if (textList.includes("TÜKENDİ")) {
      console.log("You missed it....");
      return 0;
    }
  }
  done();
};

const mediaMarktCrawler = () => {};

const teknosaCrawler = () => {};

module.exports = {
  vatanCrawler,
  mediaMarktCrawler,
  teknosaCrawler,
};
