import {expect, type Locator, type Page} from '@playwright/test';
import { pageLinks, dashboardPageTexts } from './testConstants';

export class DashboardPage {

    readonly page: Page;

    readonly mainHeaderText: Locator;
    readonly welcomeMessage:Locator;
    readonly welcomeMessage2: Locator;
    readonly apiDocumentationLinkButton: Locator;
    readonly logInTitle: Locator;
    readonly emailPlaceholder: Locator;
    readonly passwordPlaceholder: Locator;
    readonly buttonSubmit: Locator;
    readonly signUpTitle: Locator;
    readonly signUpButton: Locator;
    readonly footerMessage: Locator;
    readonly footerLogo: Locator;


    constructor (page: Page) {

        this.page = page;
        this.mainHeaderText = page.locator('//body/h1');
        this.welcomeMessage = page.locator('');
        this.welcomeMessage2 = page.locator('');
        this.apiDocumentationLinkButton = page.locator('');
        this.logInTitle = page.locator('');
        this.emailPlaceholder = page.locator('');
        this.passwordPlaceholder = page.locator('');
        this.buttonSubmit = page.locator('');
        this.signUpTitle = page.locator('');
        this.signUpButton = page.locator('');
        this.footerMessage = page.locator('');
        this.footerLogo = page.locator('');
        
    }

    async goToDashboardPage(){

        await this.page.goto(pageLinks.dashboardLink);
    }

    async checkHeaderText() {

        await expect(this.mainHeaderText).toHaveText(dashboardPageTexts.mainHeaderText);
    }
}