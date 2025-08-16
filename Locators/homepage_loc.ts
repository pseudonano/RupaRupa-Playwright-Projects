import { Locator, Page } from "@playwright/test";

export class homepage_locator {
	readonly Button_Login: Locator;
	readonly MegaMenu_Furniture: Locator;
	readonly ThirdChild_KursiMakan: Locator;
	readonly Val_Banner_KursiMakan: Locator;
	readonly Val_ProductCard: Locator;
	readonly Span_Harga: Locator;
	readonly Field_HargaMinimum: Locator;
	readonly Field_HargaMaksimum: Locator;
	readonly Span_Lokasi: Locator;
	readonly Val_LihatSemuaLokasi: Locator;
	readonly Check_DKIjakarta: Locator;
	readonly Check_KotaTangerang: Locator;
	readonly Span_Brand: Locator;
	readonly Check_Informa: Locator;
	readonly Sort_Dropdown: Locator;
	readonly Field_MainSearchBar: Locator;
	readonly Link_FirstSearchResult: Locator;

	constructor(public readonly page: Page) {
		this.Button_Login = page.locator(
			`xpath=//button[normalize-space()='Masuk']`
		);
		this.ThirdChild_KursiMakan = page.locator(
			`xpath=//div[contains(@class,'third-child__content__ruparupa') and normalize-space()='Kursi Makan']`
		);
		this.Val_Banner_KursiMakan = page.locator(
			`xpath=//div[contains(@class, 'heading-1 banner__title') and normalize-space()='Kursi Makan']`
		);
		this.Val_ProductCard = page.locator(".product-card");
		this.Span_Harga = this.filterSpan("Harga");
		this.Field_HargaMinimum = page.locator(
			`xpath=//input[@class='form-input' and @placeholder='Harga Minimum']`
		);
		this.Field_HargaMaksimum = page.locator(
			`xpath=//input[@class='form-input' and @placeholder='Harga Maksimum']`
		);
		this.Span_Lokasi = this.filterSpan("Lokasi");
		this.Val_LihatSemuaLokasi = page.locator(
			`xpath=//button[normalize-space()='Lihat Semua Lokasi']`
		);
		this.Check_DKIjakarta = page.locator(`xpath=//input[@id='undefined-0']`);
		this.Check_KotaTangerang = page.locator(`xpath=//input[@id='undefined-1']`);
		this.Span_Brand = this.filterSpan("Brand");
		this.Check_Informa = page.locator(
			`xpath=//input[@id='brand-filter-modal-2']`
		);
		this.Sort_Dropdown = page.locator(
			`xpath=//div[@class='col-xs-2']/div[@class='dropdown']`
		);
		this.Field_MainSearchBar = page.locator(
			`xpath=//input[@id='main-searchbar']`
		);
		this.Link_FirstSearchResult = page.locator(
			`xpath=(//a[contains(@class,'tw-shadow-card')])[1]`
		);
	}

	getMegaMenuItem(text: string): Locator {
		return this.page.locator(
			`xpath=//div[@class='subcategory-trigger']/div/div[normalize-space()='${text}']`
		);
	}

	filterSpan(text: string) {
		return this.page.locator(
			`xpath=//div[normalize-space()='${text}' and @class='heading-3']/following-sibling::span`
		);
	}

	selectDropdown(text: string) {
		return this.page.locator(
			`xpath=//li[@class='list-dropdown']/span[normalize-space()='${text}']`
		);
	}
}
