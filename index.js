const puppeteer = require("puppeteer");
const creds = require("./creds.json");
const delayMT = 1.2;

const ok = 'body > div.x1n2onr6.x1vjfegm > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div > div.x1jx94hy.xh8yej3.x1hlgzme.xvcs8rp.x1bpvpm7.xefnots.x13xjmei.xv7j57z > div > div > div > div > div > div > div > div.x6s0dn4.x78zum5.xl56j7k.x1608yet.xljgi0e.x1e0frkt > div > span';
(async function main(){
    const pokekaomojis = ['<(￣︶￣)↗' , "( 'w')o-" , '( *・*)0-' , "(づ > u < )づ ~♡" , '(˶ ˘ ³˘)'];
    const browser = await puppeteer.launch({headless: false,args:['--start-maximized']});
    const page = await browser.newPage();

    await page.goto('https://www.facebook.com/');
    await page.setViewport({width: 1300, height: 900});

    await delay(3);
    await page.type('#email',creds.email);
    await page.type('#pass',creds.password);

    await delay(1);
    await page.waitForSelector('button[class="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy"]');
    const nd = await page.$('button[class="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy"]');
    await nd.click();

    await page.waitForSelector('div[class="xds687c xixxii4 x17qophe x13vifvy x1vjfegm"]')
    console.log('logado com sucesso (^w^)b')

    await delay(2);
    await page.goto('https://www.facebook.com/pokes');
    await delay(2);
    console.log('começando a cutucagem...  \(˙u˙)/');
    while(true){
        try{
            const pokeBtn = 'div[class="x16n37ib x1n2onr6 x1e56ztr x1xmf6yo xamitd3"]';
            const name = 'a[class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 xggy1nq x1a2a7pz xt0b8zv x1hl2dhg xzsf02u x1s688f"]';
            
            await page.waitForSelector(pokeBtn);
            const pokers = await page.$$(pokeBtn);

            if(pokers.length === 0){
                await delay(5);
                continue;
            }
            await page.waitForSelector(name);
            const pokersName = await page.$$(name);
            let i = 0

            for(poke of pokers){
                try{
                    if (await page.$(ok) !== null){
                        await page.waitForSelector(ok);
                        const okNd = await page.$(ok);
                        await okNd.click(); 
                    }
                    await poke.click();
                    const nom = await page.evaluate(el => el.textContent, pokersName[i]);
                    console.log(pokekaomojis[getRandomInt(pokekaomojis.length)] + "(' > n <) <= " + nom + ' foi cutucado (੭˃ᴗ˂)੭');
                    await delay(1);
                }catch(e){
                }
                i++;
            }
        }catch(e){
        }
	await page.goto('https://www.facebook.com/pokes');
        await delay(3);
    }
})();
function delay (time){
    return new Promise(function (resolve){setTimeout(resolve,time * 1000 * delayMT)});
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
