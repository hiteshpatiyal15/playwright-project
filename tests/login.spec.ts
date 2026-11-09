import { test, expect } from '@playwright/test';

declare const process: {
  env: Record<string, string | undefined>;
};
  
test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('#email').fill(process.env.EMAIL ?? '');
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD ?? '');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('link', { name: 'Hitesh Patiyal' })).toHaveText('Hitesh Patiyal');
  await expect(page.getByRole('link', { name: 'Hitesh Patiyal' })).toBeVisible();
  await page.getByRole('link', { name: 'Sign out' }).click();
});