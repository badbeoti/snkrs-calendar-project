const puppeteer = require('puppeteer');
const drawLoadData = require('./drawLoadData.json');

export default async function drawPages(id) {
  const selectLink = drawLoadData[id].link;

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1000,
    height: 700,
  });

  await page.goto(`https://www.luck-d.com${selectLink}`);

  console.log(id);

  // const drawElement = {
  //   id: i,
  //   imgLink: e.getElementsByTagName('img')[0].getAttribute('src'),
  //   title: e.getElementsByClassName('agent_site_title'),
  //   date: e.getElementsByClassName('release_date_time'),
  //   country: e.getElementsByTagName('p')[0].textContent,
  //   link: e.getElementsByTagName('a')[0].getAttribute('href'),
  // };

  // await page.mouse.wheel({ deltaY: 2000 });

  // await page.waitForTimeout(1000).then(() => console.log('data load'));

  const drawDatas = await page.$$eval('[class~=site_card_wrap]', (e) => {
    return e.map((e, i) => {
      return {
        id: i,
        imgLink: e.getElementsByTagName('img')[0].getAttribute('src'),
        title: e.querySelector('.agent_site_title').textContent,
        date:
          e.querySelector('.release_date_time') === null
            ? '종료'
            : e.querySelector('.release_date_time').textContent,
        country: e.getElementsByTagName('p')[0].textContent,
        link: e.getElementsByTagName('a')[0].getAttribute('href'),
      };
    });
  });

  // const filterDatas = await drawDatas.filter((e) => e !== null);

  console.log(drawDatas);

  await browser.close();

  return {
    status: 200,
    body: JSON.stringify(drawDatas),
  };
}
