import { test, expect } from '@playwright/test';

test('should register and login successfully', async ({ page }) => {
  const uniqueEmail = `test+${Date.now()}@test.com`;
  const password = 'Password123';

await page.goto('https://qauto.forstudy.space', { timeout: 60000 });
await page.getByText('Sign Up').click();
  
  await page.locator('#signupName').fill('John');
  await page.locator('#signupLastName').fill('Doe');
  await page.locator('#signupEmail').fill(uniqueEmail);
  await page.locator('#signupPassword').fill(password);
  await page.locator('#signupRepeatPassword').fill(password);

  await page.getByRole('button', { name: 'Register' }).click();


  await page.getByText(' Log out ').click();

  await page.getByText('Sign In').click();
  await page.locator('#signinEmail').fill(uniqueEmail);
  await page.locator('#signinPassword').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

});
