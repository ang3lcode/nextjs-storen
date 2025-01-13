interface CategoryProps {
	params: { category: string };
}

export default async function CategoryPage({ params }: CategoryProps) {
	const { category } = await params;

	return (
		<div>
			<h1>Category Page</h1>
			<p>Category: {category}</p>
		</div>
	);
}
