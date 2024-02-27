import {expect, type Locator, type Page} from '@playwright/test';
import { pageLinks, headerText } from './testConstants';

export class DashboardPage {

    readonly page: Page;

    readonly mainHeaderText: Locator;
    readonly welcomeMessage:Locator;
    readonly welcomeMessage2: Locator;
    readonly logInTitle: Locator;
    readonly emailPlaceholder: Locator;
    


    constructor (page: Page) {

        this.page = page;
        this.mainHeaderText = page.locator('(//div/main//h3)[1]');
    }

    async goToDashboardPage(){

        await this.page.goto(pageLinks.dashboardLink);
    }

    async checkHeaderText() {

        await expect(this.mainHeaderText).toHaveText(headerText.mainHeaderText);
    }
}