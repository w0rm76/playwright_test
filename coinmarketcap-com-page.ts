import { expect, type Locator, type Page } from '@playwright/test';

export class CoinmarketcapComPage {
    readonly coin: string | undefined;
    readonly page: Page;
    private searchCoinFieldButtonDesktop: Locator;
    private searchCoinField: Locator;
    private searchCoinFieldItem: Locator;
    readonly chooseLanguageButton: Locator;
    readonly chooseLanguageSearchField: Locator;
    readonly chooseLanguageDropdown: Locator;
    readonly popularLanguagesSection: Locator;
    readonly allLanguagesSection: Locator;
    readonly chooseLanguageDropdownItem: Locator;

    constructor(page: Page, coin?: string) {
        this.coin = coin;
        this.page = page;
        this.chooseLanguageSearchField = page.locator('input[placeholder="Search"]');
        this.chooseLanguageButton = page.locator('span.iymbsY');
        this.chooseLanguageDropdown = page.locator('div.cmc-popover__dropdown');
        this.popularLanguagesSection = page.locator('div > p').filter({hasText: 'Popular languages'});
        this.allLanguagesSection = page.locator('div > p').filter({hasText: 'All languages'});
        this.chooseLanguageDropdownItem = page.locator('a.cmc-language-picker__option');
    }



    async goto() {
        await this.page.goto('https://coinmarketcap.com/');
    }

    async openCoinPage(coin: string) {
        this.searchCoinFieldButtonDesktop = this.page.locator('div.sc-e20acb0c-1');
        this.searchCoinField = this.page.getByPlaceholder('Search coin, pair, NFT, contract address, exchange, or post'); 
        this.searchCoinFieldItem = this.page.locator(`a[href="/currencies/${coin?.toLowerCase()}/"].bwRagp`);

        await this.searchCoinFieldButtonDesktop.click();
        await this.searchCoinField.fill(coin);
        await this.searchCoinFieldItem.click();
    }

    async findLanguageDropdown() {
        await this.chooseLanguageButton.click();
    } 

    async changeLanguageEngToRu() {
        await this.chooseLanguageButton.click();
        await this.chooseLanguageDropdown.locator(`a.cmc-language-picker__option > span`).filter({hasText: 'ru'}).first().click();
    }

    async changeLanguageRuToEng() {
        await this.chooseLanguageButton.click();
        await this.chooseLanguageDropdown.locator(`a.cmc-language-picker__option > span`).filter({hasText: 'en'}).first().click();
    }
}