// "use client"
import { ProductView } from "app/Components/product/ProductView"
// import { useParams, useSearchParams } from "next/navigation"
import { getProducts } from "app/services/shopify/products"

interface ProductPageProps {
	searchParams: {
		id: string
	}
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
	// const params = useParams()
	// const searchParams = useSearchParams()
	// const id = searchParams.get("id")

	const id = searchParams.id
	const products = await getProducts(id)
	const product = products[0]

	// console.log('searchParams', id)
	return <ProductView product={product} />
}
