import { ProductsWrapper } from "app/Components/Store/ProductsWrapper";
import { getProducts } from "app/services/shopify/products";

interface CategoryProps {
	params: {
		categorys: string[],
		searchParams?: string,
	};
}

export default async function CategoryPage(props: CategoryProps) {

	const products = await getProducts()
	const { categorys } = await props.params;

	// throw new Error('Error: booom!'); // esto es un error 

	return (
		<div>
			<p>Category: {categorys}</p>
			<ProductsWrapper products={products} />
		</div>
	);
}
