const puppeteer = require('puppeteer')
const chalk = require('chalk')
const {mn} = require('./config/default')
const srcToImg = require('./helper/srcToImg')


const mnFn = async () => {
    const brower = await puppeteer.launch();
    const page = await brower.newPage();
    await page.setViewport({
        width: 2559,
        height: 1439
    })
    console.log(`page setViewport => ${chalk.green(`width:2559 height:1439`)}`)

    await page.goto('https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=result&fr=&sf=1&fmq=1542793789654_R&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&word=%E7%A7%91%E6%AF%94&f=3&oq=kebi&rsp=0')
    console.log(`page goto => ${chalk.green(`https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=result&fr=&sf=1&fmq=1542793789654_R&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&word=%E7%A7%91%E6%AF%94&f=3&oq=kebi&rsp=0`)}`)

    // 模拟人为操作
    // await page.focus('#topkeyword');
    // const searchKey = '科比'
    // await page.keyboard.sendCharacter(searchKey);
    // await page.click('.search-btnTab')
    // console.log(`page search => ${chalk.green(`${searchKey}`)}`)

    // page.on('load', async () => {
    //     console.log(`${chalk.green(`search-load`)}`)
    //     const srcs = await page.evaluate(() => {
    //         const images = document.querySelectorAll('img.main_img')
    //         return Array.prototype.map.call(images, img => img.src)
    //     })
    //     console.log(srcs)
    // })

    const srcs = await page.evaluate(() => {
        const images = document.querySelectorAll('img.main_img')
        return Array.prototype.map.call(images, img => img.src)
    })
    srcs.forEach(async (src) => {
        await srcToImg(src, mn)
    })

    await brower.close();
}

mnFn()
