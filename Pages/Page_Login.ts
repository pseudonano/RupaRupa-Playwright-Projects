import { Page, expect } from "@playwright/test";
import { login_locator } from "../Locators/login_loc";

export class LoginPage {
	readonly page: Page;
	readonly loginlocator: login_locator;

	constructor(page: Page) {
		this.page = page;
		this.loginlocator = new login_locator(page);
	}

	async performLogin(username: string, password: string) {
		await this.loginlocator.Field_Identifier.fill(username);
		await expect(this.loginlocator.Field_Identifier).toHaveValue(username);
		await this.loginlocator.Button_Lanjutkan.click();
		await expect(this.loginlocator.Val_Account).toBeVisible({
			timeout: 50 * 1000,
		});
		await this.loginlocator.Field_Password.fill(password);
		await expect(this.loginlocator.Field_Password).toHaveValue(password);
		await this.loginlocator.Button_Masuk.click();
		await this.page.waitForLoadState("networkidle");
		await expect(this.loginlocator.Val_UserLoggedIn).toBeVisible({
			timeout: 50 * 1000,
		});
	}
}
