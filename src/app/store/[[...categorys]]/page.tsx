import { ProductsWrapper } from "app/Components/Store/ProductsWrapper";
import { getCollectionProducts, getCollections } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products";


interface CategoryProps {
	params: {
		categories: string[],
	}
	searchParams?: string
}

export default async function Category(props: CategoryProps) {
	// console.log('props', props);

	const { categories } = props.params
	// console.log('categories', categories)
	let products = []
	const collections = await getCollections()


	if (categories?.length > 0) {
		const selectedCollectionId = collections.find((collection: { handle: string; id: string }) => collection.handle === categories[0])?.id
		products = await getCollectionProducts(selectedCollectionId)
	} else {
		products = await getProducts()
	}

	console.log('products', products)

	return (
		<ProductsWrapper products={products} />
	)
}