import { test, expect } from '@playwright/test';
import { CoinmarketcapComPage } from '../coinmarketcap-com-page'; 
import { coins, randomCoin as coin } from '../coins';

/* // === NOT PAGE OBJECT ===

test('has title', async ({ page }) => {
  await page.goto('https://coinmarketcap.com/');
  await expect(page).toHaveTitle('Cryptocurrency Prices, Charts And Market Capitalizations | CoinMarketCap');
});

test('search coin', async ({ page }) => {
  //await page.locator('div[class="sc-a8231d78-1 kNerue"]').click();
  await page.goto('https://coinmarketcap.com/');
  await page.locator('div.sc-e20acb0c-1').click();
  await page.getByPlaceholder('Search coin, pair, NFT, contract address, exchange, or post').fill('Notcoin');
  await page.locator(`a[href="/currencies/notcoin/"].bwRagp`).click();

  await expect(page).toHaveTitle('Notcoin price today, NOT to USD live price, marketcap and chart | CoinMarketCap');
}) */

// === USING CLASSES ===

test(`search coin page`, async ({ page }) => {
  const coinmarketcapComPage = new CoinmarketcapComPage(page,coin.name);
  await coinmarketcapComPage.goto();
  await coinmarketcapComPage.openCoinPage(coin.name);
  await expect(page).toHaveTitle(`${coin.name} price today, ${coin.abbr} to USD live price, marketcap and chart | CoinMarketCap`);
});