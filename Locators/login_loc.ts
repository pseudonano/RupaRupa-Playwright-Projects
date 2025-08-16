import { Locator, Page } from "@playwright/test";

export class login_locator {
	readonly Field_Identifier: Locator;
	readonly Button_Lanjutkan: Locator;
	readonly Val_Account: Locator;
	readonly Field_Password: Locator;
	readonly Button_Masuk: Locator;
	readonly Val_UserLoggedIn: Locator;

	constructor(public readonly page: Page) {
		this.Field_Identifier = page.locator(`xpath=//input[@name='identifier']`);
		this.Button_Lanjutkan = page.locator(
			`xpath=//button[normalize-space()='Lanjutkan']`
		);
		this.Val_UserLoggedIn = page.locator(
			`xpath=//div[contains(@class,'user-login')]`
		);
		this.Val_Account = page.locator(
			`xpath=//div[contains(@class,'_main_bu-box__container')]`
		);
		this.Field_Password = page.locator(`xpath=//input[@name='password']`);
		this.Button_Masuk = page.locator(
			`xpath=//button[normalize-space()='Masuk']`
		);
	}
}
