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
            const n = 'a[class="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv xzsf02u x1s688f"]'
            
            await page.waitForSelector(t)
            const pokers = await page.$$(t);

            if(pokers.length === 0){
                await delay(5);
                continue;
            }

            const pokersName = await page.$$(n);
            let i = -1;
            const PokersCount = Array.from(pokers,element => i++);

            for(I of PokersCount){
                try{
                    const nom = await page.evaluate(el => el.textContent, pokersName[I])
                    console.log(pokekaomojis[getRandomInt(pokekaomojis.length)] + "(' > n <) <= " + nom + ' foi cutucado (੭˃ᴗ˂)੭')
                    await pokers[I].click();
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
