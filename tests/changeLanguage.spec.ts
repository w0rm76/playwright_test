import { test, expect } from '@playwright/test';
import { CoinmarketcapComPage } from '../coinmarketcap-com-page'; 

//  === NOT PAGE OBJECT ===
//
// test(`change language`, async ({ page })=> {
//     page.goto('https://coinmarketcap.com/');
//     await page.locator('span.iymbsY').click();
//     await expect(page.locator('div.cmc-popover__dropdown')).toBeVisible();
//     // check sub-headers
//     await expect(page.locator(`div.cmc-popover__dropdown`)).toHaveText(/Popular languages/);
//     await expect(page.locator(`div.cmc-popover__dropdown`)).toHaveText(/All languages/);
//     // check laguages quantity
//     await expect(page.locator(`a.cmc-language-picker__option`)).toHaveCount(36);
//     // change language to russian
//     await page.locator('input[placeholder="Search"]').fill('r');
//     await expect(page.locator(`div.cmc-popover__dropdown`)).toHaveText(/Русский/);
//     await page.locator(`a.cmc-language-picker__option > span`).filter({hasText: "ru"}).first().click();
//     await expect(page).toHaveTitle('Цены, графики и рыночная капитализация криптовалют | CoinMarketCap');
//     // change language to english back
//     await page.locator('span.iymbsY').click();
//     await page.locator('input[placeholder="Поиск"]').fill('eng');
//     await expect(page.locator(`div.cmc-popover__dropdown`)).toHaveText(/English/);
//     await page.locator(`a.cmc-language-picker__option > span`).filter({hasText: "en"}).first().click();
//     await expect(page).toHaveTitle('Cryptocurrency Prices, Charts And Market Capitalizations | CoinMarketCap');
//   })

  test('check change language button', async ({ page }) => {
    const coinmarketcapComPage = new CoinmarketcapComPage(page);
    await coinmarketcapComPage.goto();
    await expect(coinmarketcapComPage.chooseLanguageButton).toBeVisible();
  })

  test('check change language dropdown', async ({ page }) => {
    const coinmarketcapComPage = new CoinmarketcapComPage(page);
    await coinmarketcapComPage.goto();
    await coinmarketcapComPage.findLanguageDropdown();
    await expect(coinmarketcapComPage.chooseLanguageDropdown).toBeVisible();
    await expect(coinmarketcapComPage.popularLanguagesSection).toBeVisible();
    await expect(coinmarketcapComPage.allLanguagesSection).toBeVisible();
    await expect(coinmarketcapComPage.chooseLanguageDropdownItem).toHaveCount(36);
  });

  test('check language changing', async ({ page }) => {
    const coinmarketcapComPage = new CoinmarketcapComPage(page);
    await coinmarketcapComPage.goto();
    await coinmarketcapComPage.changeLanguageEngToRu();
    await expect(page).toHaveTitle('Цены, графики и рыночная капитализация криптовалют | CoinMarketCap');
    await coinmarketcapComPage.changeLanguageRuToEng();
    await expect(page).toHaveTitle('Cryptocurrency Prices, Charts And Market Capitalizations | CoinMarketCap');
  });