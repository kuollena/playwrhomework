export class SignInPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#signinEmail');
    this.passwordInput = page.locator('#signinPassword');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}