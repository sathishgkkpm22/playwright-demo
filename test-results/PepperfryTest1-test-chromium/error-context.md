# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PepperfryTest1.spec.ts >> test
- Location: tests\PepperfryTest1.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.close-modal')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Access Denied" [level=1] [ref=e2]
  - text: You don't have permission to access "http://www.pepperfry.com/" on this server.
  - paragraph [ref=e3]: "Reference #18.d4d70b17.1776583161.21aea89e"
  - paragraph [ref=e4]: https://errors.edgesuite.net/18.d4d70b17.1776583161.21aea89e
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | 
  3 | test('test', async ({ page }) => {
  4 |   await page.goto('https://www.pepperfry.com/');
> 5 |   await page.locator('.close-modal').click();
    |                                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  6 | });
```