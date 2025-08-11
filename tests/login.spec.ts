import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('should login successfully', async ({ page }) => {
  await page.goto('/'); 

  await page.getByText('Sign In').click();
  await page.locator('#signinEmail').fill(process.env.DEFAULT_USERNAME || 'default_username');
  await page.locator('#signinPassword').fill(process.env.DEFAULT_PASSWORD || 'default_password');
  await page.getByRole('button', { name: 'Login' }).click();

});
