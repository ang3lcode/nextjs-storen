// "use client"
import { ProductView } from "app/Components/product/ProductView"
// import { useParams, useSearchParams } from "next/navigation"
import { getProducts } from "app/services/shopify/products"
import { redirect } from "next/navigation"

interface ProductPageProps {
	searchParams: {
		id: string
	}
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
	const id = searchParams.id
	const products = await getProducts(id)
	const product = products[0]

	return {
		title: product.title,
		description: product.description,
		keywords: product.tags,
		openGraph: {
			images: [product.image]
		}
	}
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
	// const params = useParams()
	// const searchParams = useSearchParams()
	// const id = searchParams.get("id")

	const id = searchParams.id
	const products = await getProducts(id)
	const product = products[0]

	if (!id) {
		redirect('/')
	}

	// console.log('searchParams', id)
	return <ProductView product={product} />
}
