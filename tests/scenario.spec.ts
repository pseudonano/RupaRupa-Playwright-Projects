import { test, expect } from "../utils/fixtures";

test.describe(`Product search and filtering workflow`, () => {
	test.beforeEach(async ({ homePage }) => {
		await homePage.page.goto("https://beta.www.ruparupastg.my.id/");
	});
	test(`Scenario #1-1`, async ({ homePage, loginPage }) => {
		await homePage.navigateToLoginPage();
		await loginPage.performLogin("shimarin@tes.cc", "Abcd1234!");
		await homePage.hoverMenu("Furnitur");
		await homePage.homepagelocator.ThirdChild_KursiMakan.click();
		await expect(homePage.homepagelocator.Val_Banner_KursiMakan).toBeVisible({
			timeout: 50 * 1000,
		});
		await expect(homePage.homepagelocator.Val_ProductCard).toHaveCount(50);
	});
	test(`Scenario #1-2`, async ({ homePage, loginPage }) => {
		await homePage.navigateToLoginPage();
		await loginPage.performLogin("shimarin@tes.cc", "Abcd1234!");
		await homePage.hoverMenu("Furnitur");
		await homePage.homepagelocator.ThirdChild_KursiMakan.click();
		await homePage.setFilterHarga("100000", "900000");
		await homePage.setFilterLokasi();
		await homePage.setFilterBrand();
	});
	test(`Scenario #1-3`, async ({ homePage, loginPage }) => {
		await homePage.navigateToLoginPage();
		await loginPage.performLogin("shimarin@tes.cc", "Abcd1234!");
		await homePage.hoverMenu("Furnitur");
		await homePage.homepagelocator.ThirdChild_KursiMakan.click();
		await homePage.setFilterHarga("100000", "900000");
		await homePage.setFilterLokasi();
		await homePage.setFilterBrand();
		await homePage.sortDropdown("Harga Terendah");
	});
});

test.describe(`Shopping cart operations`, () => {
	test.beforeEach(async ({ homePage }) => {
		await homePage.page.goto("https://beta.www.ruparupastg.my.id/");
	});
	test(`Scenario #2-1`, async ({ homePage, loginPage, productDetailsPage }) => {
		await homePage.navigateToLoginPage();
		await loginPage.performLogin("shimarin@tes.cc", "Abcd1234!");
		await homePage.searchProductSKU("X105843");
		await productDetailsPage.successRedirectToProductDetails();
	});
	test(`Scenario #2-2`, async ({
		homePage,
		loginPage,
		productDetailsPage,
		checkoutPage,
	}) => {
		await homePage.navigateToLoginPage();
		await loginPage.performLogin("shimarin@tes.cc", "Abcd1234!");
		await homePage.searchProductSKU("X105843");
		await productDetailsPage.successRedirectToProductDetails();
		await productDetailsPage.page.waitForTimeout(5000);
		await productDetailsPage.setQty("5");
		await productDetailsPage.klikBeliSekarang();
		await expect(
			checkoutPage.checkoutlocator.Text_ProductDetailsName
		).toBeVisible({ timeout: 50 * 1000 });
		await expect(
			checkoutPage.checkoutlocator.Text_ProductDetailsName
		).toHaveText(`Informa Beta Kursi Makan Kulit - Hitam`);
		await expect(
			checkoutPage.checkoutlocator.Text_ProductDetailsQty
		).toHaveText(/5\s*$/);
	});
});
