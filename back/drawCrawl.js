const puppeteer = require('puppeteer');
const fs = require('fs');

export default async function drawCrawl() {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1000,
    height: 700,
  });

  await page.goto('https://www.luck-d.com/release-raffle/');

  await page.mouse.wheel({ deltaY: 2000 });

  await page.waitForTimeout(1000).then(() => console.log('data load'));
  // const content = await page.content();

  const drawDatas = await page.$$eval('.gallery_cell_layer', (e) => {
    return e.map((e, i) => {
      if (e.getElementsByClassName('card_cell ended').length === 0) {
        return {
          index: i,
          link: e.getElementsByTagName('a')[0].getAttribute('href'),
          imgLink: e.getElementsByTagName('img')[0].getAttribute('src'),
        };
      }
    });
  });

  const filterDatas = await drawDatas.filter((e) => e !== null);

  console.log(filterDatas);

  await browser.close();

  // fs 파트 나중에 사용
  fs.writeFile('drawLoadData.json', JSON.stringify(filterDatas), (err) => {
    try {
      console.log('done');
    } catch {
      console.log(err);
      throw err;
    }
  });

  return {
    status: 200,
    body: JSON.stringify(filterDatas),
  };
}
