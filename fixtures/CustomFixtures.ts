import { test as baseTest, Page } from '@playwright/test';
import {OrangeHRMLoginPage } from '../pages/OrangeHRMLoginPage'

// Custom Datatype
type CustomFixtures = {
  loggedInPage: Page, 
  navigateToLogin: Page
  navigateToAdmin: Page
};

export const test = baseTest.extend<CustomFixtures>({
  
  navigateToLogin: async({page},use)=>{
    // Navigate to login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await use(page);
    page.close();
  },
  loggedInPage: async ({ navigateToLogin }, use) => {
    const loginPage = new OrangeHRMLoginPage(navigateToLogin);
    // Navigate to login page
    //await navigateToLogin.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    loginPage.loginToPortal('Admin','admin123');
    await use(navigateToLogin);
    //navigateToLogin.close();
  },
  navigateToAdmin: async({loggedInPage},use)=>{
    // Navigate to Admin page
    await loggedInPage.getByRole('link', { name: 'Admin' }).click();
    await use(loggedInPage);
   // loggedInPage.close();
  },
});

export { expect } from '@playwright/test';
