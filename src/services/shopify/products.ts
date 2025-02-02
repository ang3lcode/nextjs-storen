import { env } from "app/config/env"
import { shopifyUrls } from "./urls"

export const getProducts = async (id?: string): Promise<ProductType[]> => {
  try {
    const apiUrl = id ? `${shopifyUrls.products.all}?ids=${id}` : shopifyUrls.products.all
    const response = await fetch(apiUrl, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
      })
    })
    const { products } = await response.json()

    const transformedProducts = products.map((product: { id: string; variants: { admin_graphql_api_id: string; price: string; inventory_quantity: number; }[]; title: string; body_html: string; images: { src: string; }[]; handle: string; tags: string[]; }) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price,
        image: product.images[0].src,
        quantity: product.variants[0].inventory_quantity,
        handle: product.handle,
        tags: product.tags,
      }
    })
    return transformedProducts
  } catch (error) {
    console.log(error)
    return [];
  }
}

export const getMainProducts = async () => {
  const response = await fetch(shopifyUrls.products.mainProducts, {
    headers: new Headers({
      'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
    }),
    cache: 'force-cache',
    next: {
      tags: ['main-products']
    }
  })

  const {products} = await response.json()

  return products
}