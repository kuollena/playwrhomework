import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { SignUpPage } from '../pages/SignUpPage';
import { SignInPage } from '../pages/SignInPage';

test('should register and login successfully (POM)', async ({ page }) => {
  const uniqueEmail = `test+${Date.now()}@test.com`;
  const password = 'Password123';

  const homePage = new HomePage(page);
  const signUpPage = new SignUpPage(page);
  const signInPage = new SignInPage(page);

  await homePage.open();
  await homePage.clickSignUp();

  await signUpPage.register('John', 'Doe', uniqueEmail, password);

  await homePage.clickLogout();

  await homePage.clickSignIn();
  await signInPage.login(uniqueEmail, password);
});