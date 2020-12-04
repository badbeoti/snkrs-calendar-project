const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1000,
    height: 700,
  });

  await page.goto('https://www.luck-d.com/release-raffle/');

  await page.mouse.wheel({ deltaY: 2000 });

  await page.waitForTimeout(2000).then(() => console.log('data load'));
  // const content = await page.content();

  const drawDatas = await page.$$eval('.gallery_cell_layer', (e) => {
    let mapDatas = [];

    e.map((e, i) => {
      if (e.getElementsByClassName('card_cell ended').length === 0) {
        mapDatas.push({
          index: i,
          link: e.getElementsByTagName('img')[0].getAttribute('src'),
        });
      }
    });

    return mapDatas;
  });

  console.log(drawDatas);

  fs.writeFile('data.json', JSON.stringify(drawDatas), (err) => {
    try {
      console.log('done');
    } catch {
      console.log(err);
      throw err;
    }
  });

  browser.close();
})();
