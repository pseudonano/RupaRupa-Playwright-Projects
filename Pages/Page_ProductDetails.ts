import { expect, Page } from "@playwright/test";
import { productdetails_locator } from "../Locators/productdetail_loc";

export class ProductDetailsPage {
	readonly page: Page;
	readonly productdetaillocator: productdetails_locator;

	constructor(page: Page) {
		this.page = page;
		this.productdetaillocator = new productdetails_locator(page);
	}

	async successRedirectToProductDetails() {
		await expect(this.productdetaillocator.Val_SpesifikasiProduk).toBeVisible(
			{}
		);
	}

	async setQty(text: string) {
		const count = parseInt(text, 10);
		for (let i = 1; i < count; i++) {
			await this.productdetaillocator.Button_PopulateQty.click({});
		}
	}

	async klikBeliSekarang() {
		await this.productdetaillocator.Button_BeliSekarang.click();
	}

	async closeModal() {
		let allModal = this.productdetaillocator.Modal_dialog;
		let countModal = await allModal.count();
	}
}
