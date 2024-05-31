import { test, expect } from '@playwright/test';
import { CoinmarketcapComPage } from '../coinmarketcap-com-page'; 

/*
// === NO PAGE OBJECT ===

  test('has title', async ({ page }) => {
  await page.goto('https://coinmarketcap.com/');
  await expect(page).toHaveTitle('Cryptocurrency Prices, Charts And Market Capitalizations | CoinMarketCap');
});

test('search coin', async ({ page }) => {
  //await page.locator('div[class="sc-a8231d78-1 kNerue"]').click();
  await page.goto('https://coinmarketcap.com/');
  await page.locator('div.sc-e20acb0c-1').click();
  await page.getByPlaceholder('Search coin, pair, NFT, contract address, exchange, or post').fill('notcoin');
  await page.locator('a>span', { hasText: 'Notcoin' }).click();

  await expect(page).toHaveTitle('Notcoin price today, NOT to USD live price, marketcap and chart | CoinMarketCap');
})
 */

test('search notcoin page', async ({ page, coin }) => {
  const NOT = 'NOT';
  const coinmarketcapComPage = new CoinmarketcapComPage(page, coin);
  await coinmarketcapComPage.goto();
  await coinmarketcapComPage.openCoinPage(coin);
  await expect(a.toHaveTitle(`${coin} price today, ${NOT} to USD live price, marketcap and chart | CoinMarketCap`));
})