import { test, expect } from '@playwright/test';
import { DashboardPage } from '../POM/dashboardpage';

test('Check Page Elements', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);


    await dashboardPage.goToDashboardPage();
    
    await dashboardPage.checkHeaderText();

  });