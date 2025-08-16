// fixtures.ts
import { test as base } from "@playwright/test";
import { HomePage } from "../Pages/Page_Home";
import { LoginPage } from "../Pages/Page_Login";
import { ProductDetailsPage } from "../Pages/Page_ProductDetails";
import { CheckoutPage } from "../Pages/Page_Checkout";

interface PageFixtures {
	homePage: HomePage;
	loginPage: LoginPage;
	productDetailsPage: ProductDetailsPage;
	checkoutPage: CheckoutPage;
}

export const test = base.extend<PageFixtures>({
	homePage: async ({ page }, use) => {
		const homePage = new HomePage(page);
		await use(homePage);
	},
	loginPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page);
		await use(loginPage);
	},
	productDetailsPage: async ({ page }, use) => {
		const productDetailsPage = new ProductDetailsPage(page);
		await use(productDetailsPage);
	},
	checkoutPage: async ({ page }, use) => {
		const checkoutPage = new CheckoutPage(page);
		await use(checkoutPage);
	},
});

export { expect } from "@playwright/test";
