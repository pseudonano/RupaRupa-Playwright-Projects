import { Locator, Page } from "@playwright/test";

export class checkout_locators {
	readonly Text_ProductDetailsName: Locator;
	readonly Text_ProductDetailsQty: Locator;

	constructor(public readonly page: Page) {
		this.Text_ProductDetailsName = page.locator(
			`xpath=//a[@id='txtItemName-2']`
		);
		this.Text_ProductDetailsQty = page.locator(
			`xpath=//span[@id='txtItemQty-2']`
		);
	}
}
