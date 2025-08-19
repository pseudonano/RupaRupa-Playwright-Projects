import { homepage_locator } from "../Locators/homepage_loc";
import { expect, Page } from "@playwright/test";

export class HomePage {
	readonly page: Page;
	readonly homepagelocator: homepage_locator;

	constructor(page: Page) {
		this.page = page;
		this.homepagelocator = new homepage_locator(page);
	}

	async navigateToLoginPage() {
		await this.homepagelocator.Button_Login.click();
		await this.page.waitForLoadState("networkidle");
	}

	async hoverMenu(megamenu: string) {
		const megaMenuItem = this.homepagelocator.getMegaMenuItem(`${megamenu}`);
		await megaMenuItem.hover();
		await this.page.waitForTimeout(500);
	}

	async setFilterHarga(hargaMinimum: string, hargaMaksimum: string) {
		await this.homepagelocator.Span_Harga.click();
		await expect(this.homepagelocator.Field_HargaMinimum).toBeVisible({
			timeout: 50 * 1000,
		});
		await this.homepagelocator.Field_HargaMinimum.fill(`${hargaMinimum}`);
		await this.homepagelocator.Field_HargaMaksimum.fill(`${hargaMaksimum}`);
	}

	async setFilterLokasi() {
		await this.homepagelocator.Span_Lokasi.click();
		await expect(this.homepagelocator.Val_LihatSemuaLokasi).toBeVisible({
			timeout: 50 * 1000,
		});
		await this.homepagelocator.Check_DKIjakarta.first().evaluate(
			(node) => node.onclick
		);
		await this.homepagelocator.Check_KotaTangerang.first().evaluate(
			(node) => node.onclick
		);
	}

	async setFilterBrand() {
		await this.homepagelocator.Span_Brand.click();
		await this.homepagelocator.Check_Informa.first().evaluate(
			(node) => node.onclick
		);
	}

	async sortDropdown(text: string) {
		await this.homepagelocator.Sort_Dropdown.click();
		const dropdownItem = this.homepagelocator.selectDropdown(`${text}`);
		await dropdownItem.click();
	}

	async searchProductSKU(text: string) {
		await this.homepagelocator.Field_MainSearchBar.click();
		await this.homepagelocator.Field_MainSearchBar.fill(`${text}`);
		await this.homepagelocator.Link_FirstSearchResult.click();
	}

	async getHomepageProductNames(): Promise<string[]> {
		await this.homepagelocator.Text_HomepageProductName.last().isVisible();
		return this.homepagelocator.Text_HomepageProductName.allInnerTexts();
	}
}
