import { test, expect } from '@playwright/test';

test('test 2', async ({ page }) => {
  await test.step('Access Link', async () => {
    await page.goto('https://material.playwrightvn.com');

    await page.click("//a[@href='02-xpath-product-page.html']");
  });  
  await test.step('Chon san pham', async () => {
    await page.locator("//button[@data-product-id='1']").click({
    clickCount: 2,
    delay: 50
    });

    await page.locator("//button[@data-product-id='2']").click({
    clickCount: 3,
    delay: 50 
    });

    await page.locator("//button[@data-product-id='3']").click({
    clickCount: 1,
    delay: 50  
    });

  });
});
