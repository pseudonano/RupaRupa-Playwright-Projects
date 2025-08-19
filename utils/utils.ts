import { APIRequestContext } from "@playwright/test";

export async function getProductsAPI(
	request: APIRequestContext,
	api: string
): Promise<string[]> {
	const response = await request.get(api);
	if (!response.ok()) {
		throw new Error(`API request failed with status ${response.status()}`);
	}

	const data: any = await response.json();
	return data.data.products.map((p) => p.name.trim().toLowerCase());
}
