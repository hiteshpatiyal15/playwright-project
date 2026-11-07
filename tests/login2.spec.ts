
import { test, expect } from '@playwright/test';
import { getUserData } from '../data/user.data'
test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('#email').fill(getUserData().emailAddress);
  await page.getByRole('textbox', { name: 'Password' }).fill(getUserData().password);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('link', { name: 'Hitesh Patiyal' })).toHaveText('Hitesh Patiyal');
  await expect(page.getByRole('link', { name: 'Hitesh Patiyal' })).toBeVisible();
  await page.getByRole('link', { name: 'Sign out' }).click();
});