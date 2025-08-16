import { Locator, Page } from "@playwright/test";

export class productdetails_locator {
	readonly Val_SpesifikasiProduk: Locator;
	readonly Input_Qty: Locator;
	readonly Button_PopulateQty: Locator;
	readonly Button_BeliSekarang: Locator;
	readonly Text_ProductName: Locator;
	readonly Modal_dialog: Locator;

	constructor(public readonly page: Page) {
		this.Val_SpesifikasiProduk = page.locator(
			`xpath=//button[normalize-space()='Spesifikasi Produk']`
		);
		this.Input_Qty = page.locator(
			`xpath=(//input[@name='X105843-qty' and contains(@class,'product-quantity__input')])[last()]`
		);
		this.Button_PopulateQty = page.locator(
			`xpath=(//button[@id='populate-stock-tour'])[last()]`
		);
		this.Button_BeliSekarang = page.locator(
			`xpath=(//button[normalize-space()='Beli Sekarang'])[last()]`
		);
		this.Text_ProductName = page.locator(
			`xpath=//div[@class='main-pdp_title__mS56o']`
		);
		this.Modal_dialog = page.locator(`xpath=//*[contains(@class,'modal')]`);
	}
}
