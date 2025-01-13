2. Rutas dinámicas
   Las rutas dinámicas son útiles cuando el contenido de la página depende de un parámetro en la URL, como el ID de un producto o el nombre de un usuario.

Pasos:

-  Crea un archivo con corchetes en el nombre dentro de la carpeta pages. Por ejemplo:

```
pages/product/[id].js
```

-  El nombre dentro de los corchetes (id) será el parámetro dinámico de la URL.
-  En el archivo, utiliza useRouter para capturar el parámetro de la URL:

```
export default async function CategoryPage({ params }: CategoryProps) {
	const { category } = await params;

	return (
		<div>
			<h1>Category Page</h1>
			<p>Category: {category}</p>
		</div>
	);
}
```

-  Ahora, puedes acceder a rutas como:

```
http://localhost:3000/product/1
http://localhost:3000/product/42
```
