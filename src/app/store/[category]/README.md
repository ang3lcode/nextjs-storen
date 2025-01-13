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

Cómo crear Layout en Next.js?

1. Usando la carpeta app (Next.js 13 y posteriores)
   En la carpeta app, los layouts son anidados y se configuran automáticamente según la estructura de las carpetas. Puedes crear un archivo layout.tsx en cualquier nivel de tu proyecto para envolver las páginas dentro de esa carpeta y sus subcarpetas.

Pasos para crear un layout básico:

-  Crea un archivo layout.tsx en la carpeta deseada (por ejemplo, app/layout.tsx).
-  Define el layout como un componente que acepte children.

```
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <header>
                    <h1>My Website</h1>
                </header>
                <main>{children}</main>
                <footer>
                    <p>© 2025 My Website</p>
                </footer>
            </body>
        </html>
    );
}
```

Estructura del proyecto:

```
app/
├── layout.tsx         (Layout principal)
├── page.tsx           (Página raíz)
├── store/
│   ├── layout.tsx     (Layout secundario para las rutas bajo /store)
│   ├── page.tsx       (Página en /store)
│   ├── [category]/
│       ├── page.tsx   (Página dinámica en /store/[category])
```

El layout en app/layout.tsx se aplicará a todo el proyecto.
Si necesitas un layout diferente para las páginas dentro de /store, usa app/store/layout.tsx.
Ejemplo con layout anidado:
tsx
Copiar código
// app/store/layout.tsx
export default function StoreLayout({ children }: { children: React.ReactNode }) {
return (
<div>
<nav>
<a href="/store/electronics">Electronics</a>
<a href="/store/fashion">Fashion</a>
</nav>
<div>{children}</div>
</div>
);
} 2. Usando la carpeta pages
En la carpeta pages, los layouts no se configuran automáticamente, pero puedes crearlos fácilmente envolviendo las páginas en un componente layout.

Pasos para crear un layout básico:
Crea un componente de layout en la carpeta components (o donde prefieras):

```
// components/Layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header>
                <h1>My Website</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>© 2025 My Website</p>
            </footer>
        </div>
    );
}
```

Envuelve tus páginas con este layout:

```
// pages/_app.tsx
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
```
