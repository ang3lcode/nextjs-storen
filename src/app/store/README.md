1. Rutas estáticas
   Las rutas estáticas son aquellas que no cambian, es decir, tienen un nombre fijo.

Pasos:

-  Dentro de la carpeta pages, crea un archivo con el nombre de la ruta. Por ejemplo:
   bash
   //Copiar código
   pages/about.js
-  En el archivo, exporta un componente de React:

```
// pages/about.js
export default function AboutPage() {
    return (
        <div>
            <h1>About Us</h1>
            <p>This is a static page.</p>
        </div>
    );
}

```

-  Al iniciar el servidor (npm run dev o yarn dev), podrás acceder a la ruta en:
   bash

http://localhost:3000/about
