import { test } from '@playwright/test';

test('test 1', async ({ page }) => {
    await test.step('Dang nhap vao trang web Register', async () => {
        await page.goto('https://material.playwrightvn.com');

        await page.click("//a[@href='01-xpath-register-page.html']");

    });

    await test.step('Test cac chung nang trong trang web', async () => {
        await page.locator("//label[@id='preceding']").fill("Huy Hoang");

        await page.locator("//label[@for='email']").fill("HuyHoang@gmail.com");

        await page.locator("//input[@id='male']").click();

        await page.locator("//input[@id='traveling']").click();

        await page.locator("//option[@value='sports']").click();

        await page.locator("//select[@id='country']").selectOption({ value: "canada" });

        await page.locator("//input[@id='dob']").fill("1999-02-10");

        await page.locator("//input[@id='profile']").setInputFiles("tests/Lesson-5/Images/pikachu.jpg");

        await page.locator("//textarea[@id='bio']").fill("Huy Hoang. Ho Chi Minh");

        await page.locator("//input[@id='rating']").fill("8");

        await page.locator("//input[@id='favcolor']").fill("#00aaff");

        await page.locator("//div[@class='tooltip']").hover();

        await page.locator("//input[@id='newsletter']").click();

        // await page.locator("//input[@id='toggleOption']").click(); // khong click duoc luon 

        await page.locator("//div[@id='starRating']").click({ position: { x: 50, y: 5 } });

        // await page.locator("//input[@id='customDate']").fill("10/02/1999"); // co defect o element nay vi khong fill duoc ?
    });

    await test.step('Click Sumbit', async () => {
        await page.locator("//button[@type='submit']").click({});

    });

});