const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
	const browser = await puppeteer.launch({
		headless: false,
	});

	const page = await browser.newPage();

	await page.setViewport({
		width: 1000,
		height: 700,
	});

	await page.goto("https://www.luck-d.com/release-raffle/");

	// const content = await page.content();

	const data = await page.$$eval(".gallery_cell_layer", (e) => {
		e.map((e) => {
			if (e.getElementsByClassName("card_cell ended").length === 0) {
				console.log(e);
			}
		});
	});
})();
