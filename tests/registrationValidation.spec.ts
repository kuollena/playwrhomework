import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://qauto.forstudy.space', { timeout: 60000 });
  await page.getByText('Sign Up').click();
});


// ------------------- NAME FIELD ----------------------
test('Name field required', async ({ page }) => {
  const nameField = page.locator('#signupName');
  await nameField.focus();
  await nameField.blur();
  await expect(nameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(page.getByText('Name required')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Register' })).toBeDisabled();
});

test('Name field - non-English characters', async ({ page }) => {
  const nameField = page.locator('#signupName');
  await nameField.fill('Олена');
  await nameField.blur();
  await expect(page.getByText('Name is invalid')).toBeVisible();
});

// ------------------- LAST NAME FIELD ----------------------
test('Last name field required', async ({ page }) => {
  const nameField = page.locator('#signupLastName');
  await nameField.focus();
  await nameField.blur();
  await expect(nameField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(page.getByText('Last name required')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Register' })).toBeDisabled();
});

// ------------------- EMAIL FIELD ----------------------
test('Email field required', async ({ page }) => {
  const emailField = page.locator('#signupEmail');
  await emailField.focus();
  await emailField.blur();
  await expect(emailField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(page.getByText('Email required')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Register' })).toBeDisabled();
});

// ------------------- PASSWORD FIELD ----------------------
test('Password field required', async ({ page }) => {
  const passwordField = page.locator('#signupPassword');
  await passwordField.focus();
  await passwordField.blur();
  await expect(passwordField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(page.getByText('Password required')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Register' })).toBeDisabled();
});

const invalidPasswords = [
  { value: 'short1A', reason: 'too short' },
  { value: 'thisisaverylongpassword1A', reason: 'too long' },
  { value: 'alllowercase1', reason: 'no uppercase' },
  { value: 'ALLUPPERCASE1', reason: 'no lowercase' },
  { value: 'NoDigitsHere', reason: 'no number' },
];
for (const { value, reason } of invalidPasswords) {
  test(`Invalid password (${reason})`, async ({ page }) => {
    const passwordField = page.locator('#signupPassword');
    await passwordField.fill(value);
    await passwordField.blur();
    await expect(passwordField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
    await expect(
      page.getByText(
        'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
      )
    ).toBeVisible();
  });
}

// ------------------- CONFIRM PASSWORD FIELD ----------------------
test('Confirm password field required', async ({ page }) => {
  const confirmPasswordField = page.locator('#signupRepeatPassword');
  await confirmPasswordField.focus();
  await confirmPasswordField.blur();
  await expect(confirmPasswordField).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  await expect(page.getByText('Re-enter password required')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Register' })).toBeDisabled();
});

test('Repeat password mismatch', async ({ page }) => {
  const confirmPasswordField = page.locator('#signupRepeatPassword');
  const passwordField = page.locator('#signupPassword');
  await passwordField.fill('Test1234');
  await confirmPasswordField.fill('Test12345');
  await confirmPasswordField.blur();
  await expect(page.getByText('Passwords do not match')).toBeVisible();
});


