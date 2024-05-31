import { expect, type Locator, type Page } from '@playwright/test';

export class CoinmarketcapComPage {
    readonly coin: string;
    readonly page: Page;
    readonly searchCoinFieldButtonDesktop: Locator;
    readonly searchCoinField: Locator;
    readonly searchCoinFieldItem: Locator;

    constructor(page: Page, coin: string) {
        this.coin = coin;
        this.page = page;
        this.searchCoinFieldButtonDesktop = page.locator('div.sc-e20acb0c-1');
        this.searchCoinField = page.getByPlaceholder('Search coin, pair, NFT, contract address, exchange, or post'); 
        this.searchCoinFieldItem = page.locator('a>span', { hasText: `${coin}` });
    }

    async goto() {
        await this.page.goto('https://coinmarketcap.com/');
    }

    async openCoinPage(coin: string) {
        await this.searchCoinFieldButtonDesktop.click();
        await this.searchCoinField.fill(coin);
        await this.searchCoinFieldItem.click();
    }
}