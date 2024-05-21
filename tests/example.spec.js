// tests/app.spec.js
const { test, expect } = require('@playwright/test');

test.describe('My Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should display the header', async ({ page }) => {
    const header = await page.locator('.Header');
    await expect(header).toBeVisible();
    await expect(header).toContainText('My Website');
  });

  test('should navigate to the About section', async ({ page }) => {
    await page.click('text=About');
    const aboutSection = await page.locator('#about');
    await expect(aboutSection).toBeVisible();
    await expect(aboutSection).toContainText('This is the about section.');
  });

  test('should navigate to the Contact section', async ({ page }) => {
    await page.click('text=Contact');
    const contactSection = await page.locator('#contact');
    await expect(contactSection).toBeVisible();
    await expect(contactSection).toContainText('Get in touch with us.');
  });

  test('should increment and decrement the counter', async ({ page }) => {
    await page.click('text=Counter');
    const counterSection = await page.locator('#counter');
    await expect(counterSection).toBeVisible();

    const counterValue = await page.locator('text=Counter:');
    await expect(counterValue).toHaveText('Counter: 0');

    await page.click('text=Increment');
    await expect(counterValue).toHaveText('Counter: 1');

    await page.click('text=Decrement');
    await expect(counterValue).toHaveText('Counter: 0');

    await page.click('text=Reset');
    await expect(counterValue).toHaveText('Counter: 0');
  });
});
