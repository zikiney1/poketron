const puppeteer = require("puppeteer");
const creds = require("./creds.json");
const delayMT = 1.3;

(async function main(){
    const pokekaomojis = ['<(￣︶￣)↗' , "( 'w')o-" , '( *・*)0-' , "(づ > u < )づ ~♡" , '(˶ ˘ ³˘)']
    const browser = await puppeteer.launch()//{headless: false,args:['--start-maximized']});
    const page = await browser.newPage();

    await page.goto('https://www.facebook.com/');
    await page.setViewport({width: 1600, height: 900});

    await delay(3)
    await page.type('#email',creds.email)
    await page.type('#pass',creds.password)

    await delay(1)
    await page.waitForSelector('button[class="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy"]');
    const nd = await page.$('button[class="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy"]');
    await nd.click();

    await page.waitForSelector('div[class="xds687c xixxii4 x17qophe x13vifvy x1vjfegm"]')
    console.log('logado com sucesso ૮ ˶ᵔ ᵕ ᵔ˶ ა ')

    await delay(2)
    await page.goto('https://www.facebook.com/pokes');
    await delay(2)
    console.log('começando a cutucagem...  (˙༥˙(👈')
    while(true){
        try{
            const t = 'div[class="x6s0dn4 x78zum5 xl56j7k x1608yet xljgi0e x1e0frkt"]'
            //const n = 'span[class=class="x1lliihq x6ikm8r x10wlt62 x1n2onr6"]'
            await page.waitForSelector(t)
            const pokers = await page.$$(t);
            if(pokers.length === 0){
                await delay(5);
                continue;
            }
            for(poke of pokers){
                try{
                    const n = await page.evaluate(el => el.textContent, poke)
                    console.log(pokekaomojis[getRandomInt(pokekaomojis.length)] + "(' > n <) <= " + n + ' foi cutucado (੭˃ᴗ˂)੭')
                    await poke.click();
                    await delay(1)
                }catch(e){
                }
            }
            await page.goto('https://www.facebook.com/pokes');
            await delay(3);
        }catch(e){
        }
    }
})();
function delay (time){
    return new Promise(function (resolve){setTimeout(resolve,time * 1000 * delayMT)});
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
