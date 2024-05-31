import { test, expect } from '@playwright/test';

/* test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
}); */

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
