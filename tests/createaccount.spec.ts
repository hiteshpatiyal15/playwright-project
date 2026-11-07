import { test, expect } from '@playwright/test';
import { getCreateAccountData } from '../data/createuser.data';

test('test', async ({ page }) => {
  const accountData = getCreateAccountData();
  await page.goto('/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('#email_create').fill(accountData.emailaddress);
  await page.getByRole('button', { name: ' Create an account' }).click();
  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).fill(accountData.firstname);
  await page.getByRole('textbox', { name: 'Last name *' }).fill(accountData.lastname);
  await page.getByRole('textbox', { name: 'Password *' }).fill(accountData.password);
  await page.locator('#days').selectOption(accountData.day);
  await page.locator('#months').selectOption(accountData.month);
  await page.locator('#years').selectOption(accountData.year);
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.getByRole('button', { name: 'Register ' }).click();
  await page.getByText('Your account has been created.').click();
});