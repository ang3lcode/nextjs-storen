import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"
import styles from './StoreLayout.module.sass'

export default async function Layout({ children }: { children: React.ReactNode }) {
	const collections: Array<{ id: string, handle: string, title: string }> = await getCollections()
	// console.log('collections', collections);

	return (
		<main className={styles.StoreLayout}>
			<h1>Explore</h1>
			<nav>
				<ul className={styles.StoreLayout__list}>
					{
						collections.map((collection) => (
							<Link key={collection.id} href={'/store/' + collection.handle} className={styles.StoreLayout__chip}>
								{collection.title}
							</Link>
						))
					}
				</ul>
			</nav>
			{children}
		</main>
	)
}