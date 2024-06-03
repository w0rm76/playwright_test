import { expect, type Locator, type Page } from '@playwright/test';

export class CoinmarketcapComPage {
    readonly coin: string;
    readonly page: Page;
    readonly searchCoinFieldButtonDesktop: Locator;
    readonly searchCoinField: Locator;
    readonly searchCoinFieldItem: Locator;
/*     readonly chooseLanguageButton: Locator;
    readonly chooseLanguageSearchField: Locator;
    readonly chooseLanguageDropdown: Locator;
    readonly popularLanguagesSection: Locator;
    readonly allLanguagesSection: Locator; */

    constructor(page: Page, coin: string) {
        this.coin = coin;
        this.page = page;
        this.searchCoinFieldButtonDesktop = page.locator('div.sc-e20acb0c-1');
        this.searchCoinField = page.getByPlaceholder('Search coin, pair, NFT, contract address, exchange, or post'); 
        this.searchCoinFieldItem = page.locator(`a[href="/currencies/${coin.toLowerCase()}/"].bwRagp`);
/*         this.chooseLanguageButton = page.locator('span.iymbsY');//('//*[@id="__next"]/div[2]/div[1]/div[1]/div[2]/div[1]/section/div/div[1]/div/div[2]/div[1]/div[1]/div');//('div.cmc-popover').filter({ hasText: /^English$/ });//(`div.cmc-popover`);//'button[title="Change your language"]');
        this.chooseLanguageDropdown = page.locator(`div.cmc-popover__dropdown`);
        this.popularLanguagesSection = page.locator(`div > p, {hasText: Popular languages}`);
        this.allLanguagesSection = page.locator(`div > p, {hasText: All languages}`); */
    }

    async goto() {
        await this.page.goto('https://coinmarketcap.com/');
    }

    async openCoinPage(coin: string) {
        await this.searchCoinFieldButtonDesktop.click();
        await this.searchCoinField.fill(coin);
        await this.searchCoinFieldItem.click();
    }

/*     async changeLanguage(language: string) {
        await console.log(`it/'s done 1!`);
        await this.chooseLanguageButton.click();
        await console.log(`it/'s done 2!`);
        await this.chooseLanguageSearchField.click();
        // dropdown has 2 subsections: popular and all languages, and also has 11 languages 
        //await expect (this.popularLanguagesSection.isVisible && this.allLanguagesSection.isVisible);
        await console.log(`it/'s done 3!`);
    } */
}