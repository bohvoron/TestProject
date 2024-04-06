import { test, expect } from '@playwright/test';

test('overviewTest', async ({page}) => {

    await page.goto("https://docs.github.com/en/actions");

    await expect(page.locator("xpath=//*[@id='/actions/learn-github-actions/understanding-github-actions']")).toBeVisible();

    const buttonOverview = page.locator("xpath=//*[@id='/actions/learn-github-actions/understanding-github-actions']")
    
    await buttonOverview.click();
    await expect(page.locator("xpath=//*[@id='title-h1']")).toHaveText("Understanding GitHub Actions");
    
});

