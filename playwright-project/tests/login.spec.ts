import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

test('login test', async ({ page }) => {
  //https://automationpractice.techwithjatin.com
  dotenv.config();
  await page.goto('/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('input#email').fill(process.env.EMAIL ?? '');
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD ?? '');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Hitesh Patiyal' }).click();
});