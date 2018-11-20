const puppeteer = require('puppeteer')
const {screenshot} = require('./config/default')

const reptile = async function () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.qq.com')
    await page.screenshot({
        path: `${screenshot}/${Date.now()}.png`
    })

    await browser.close();
}
reptile()

// 报错
// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.qq.com')
//     await page.screenshot({
//         path: `${screenshot}/${Date.now()}.png`
//     })
//
//     await browser.close();
// })()
