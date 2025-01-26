interface CategoryProps {
	params: {
		categorys: string[],
		searchParams?: string,
	};
}

export default async function CategoryPage(props: CategoryProps) {

	const { categorys } = await props.params;

	// throw new Error('Error: booom!'); // esto es un error 

	return (
		<div>
			<h1>Category Page</h1>
			<p>Category: {categorys}</p>
		</div>
	);
}
