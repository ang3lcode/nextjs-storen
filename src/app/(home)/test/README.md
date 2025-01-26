# Layout vs Template en Next.js

En **Next.js**, puedes usar **Layouts** y **Templates** para estructurar tu aplicación y reutilizar componentes comunes. La elección depende del caso de uso y del nivel de personalización necesario.

---

## 1. Layouts (Diseños)

### ¿Qué son?

-  Un **Layout** es una estructura compartida entre páginas que contiene elementos comunes, como encabezados, menús de navegación, barras laterales o pies de página.
-  Son ideales para mantener consistencia en la interfaz de usuario.

### Cuándo usarlos

-  **Estructura común para varias páginas:** Por ejemplo, un encabezado y pie de página compartido en todo el sitio.
-  **Simplicidad y consistencia:** Cuando todas las páginas tienen un diseño similar o solo cambian ciertas secciones.
-  **Navegación persistente:** Si deseas mantener ciertos componentes (como menús) visibles al cambiar de página.

### Ejemplo básico de Layout

**`components/Layout.js`**

```javascript
export default function Layout({ children }) {
   return (
      <div>
         <header>
            <h1>Mi Sitio Web</h1>
            <nav>
               <a href="/">Inicio</a>
               <a href="/about">Acerca de</a>
            </nav>
         </header>
         <main>{children}</main>
         <footer>© 2025 Mi Sitio Web</footer>
      </div>
   );
}
```
