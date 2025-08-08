export class HomePage {
  constructor(page) {
    this.page = page;
    this.signUpButton = page.getByText('Sign Up');
    this.signInButton = page.getByText('Sign In');
    this.logoutButton = page.getByText(' Log out ');
  }

  async open() {
    await this.page.goto('https://qauto.forstudy.space', { timeout: 60000 });
  }

  async clickSignUp() {
    await this.signUpButton.click();
  }
  async clickSignIn() {
    await this.signInButton.click();
  }

  async clickLogout() {
    await this.logoutButton.click();
  }
}
import { test } from '@playwright/test';
