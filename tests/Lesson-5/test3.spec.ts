import { test, expect } from '@playwright/test';

test('test 3', async ({ page }) => {
    await test.step('Access Link', async () => {
        await page.goto('https://material.playwrightvn.com');

        await page.click("//a[@href='03-xpath-todo-list.html']");
    });

    await test.step('Them 100 todo ', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`To do ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });

    await test.step('Xoa cac To do so le', async () => {
        page.on('dialog', async dialog => dialog.accept())

        for (let i = 1; i <= 100; i++) {
            if (i % 2 != 0){
            await page.locator(`//button[@id='to-do-${i}-delete']`).click();
            }
        }
    });
    
});