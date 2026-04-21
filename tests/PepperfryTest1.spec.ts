import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.pepperfry.com/');
  await page.locator('.close-modal').click();
});