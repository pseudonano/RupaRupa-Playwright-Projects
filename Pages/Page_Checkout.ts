import { Page } from "@playwright/test";
import { checkout_locators } from "../Locators/checkoutpage_loc";

export class CheckoutPage {
	readonly page: Page;
	readonly checkoutlocator: checkout_locators;

	constructor(page: Page) {
		this.page = page;
		this.checkoutlocator = new checkout_locators(page);
	}
}
