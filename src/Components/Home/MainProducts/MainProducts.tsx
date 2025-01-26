import Image from 'next/image'
import styles from './MainProducts.module.sass'
// import { getProducts } from 'app/services/shopify'


export const MainProducts = async () => {
	// const products: { id: string; title: string; images: { src: string }[] }[] = await getProducts()
	// console.log(products)
	const reponse = await fetch('http://localhost:3000/api')
	const { products } = await reponse.json()



	return (
		<section className={styles.MainProducts}>
			<h3>✨ New products released!</h3>
			<div className={styles.MainProducts__grid}>
				{products?.map((product: { id: string; title: string; images: { src: string }[] }) => {
					const imageSrc = product.images[0].src;
					// console.log("imageSrc", imageSrc);

					return (
						<article key={product.id}>
							<p>{product.title}</p>
							<Image src={imageSrc} fill alt={product.title} loading="eager" />
						</article>
					)
				})}
			</div>
		</section>
	)
}
