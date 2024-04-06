import { test, expect } from '@playwright/test';

test('QuickStartTest', async ({page}) => {
    
    await page.goto("https://docs.github.com/en/actions");

    await expect(page.locator("xpath=//*[@id='/actions/quickstart']")).toBeVisible();

    const QuickStart = page.locator("xpath=//*[@id='/actions/quickstart']")
    
    await QuickStart.click();
    await expect(page.locator("xpath=//*[@id='title-h1']")).toHaveText("Quickstart for GitHub Actions");
});
