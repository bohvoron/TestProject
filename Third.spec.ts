import { test, expect } from '@playwright/test';

test('QuickStartTest', async ({page}) => {
    
    await page.goto("https://docs.github.com/en");

    await expect(page.locator("xpath=//*[@href='/en/actions']")).toBeVisible();

    const QuickStart = page.locator("xpath=//*[@href='/en/actions']")
    
    await QuickStart.click({
        timeout: 100,
    });

    
    await expect(page.locator("xpath=//*[@id='title-h1']")).toHaveText("GitHub Actions documentation");
});
