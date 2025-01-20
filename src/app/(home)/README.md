la funcionalidad de App Router, puedes usar Route Groups para organizar tus rutas y configurar ciertos comportamientos sin afectar la URL visible al usuario. Esto es útil para mantener un código más limpio y modular.

¿Qué es un Route Group?
Un Route Group es una carpeta envuelta en paréntesis dentro de la estructura de tu directorio app. Todo lo que esté dentro de esa carpeta sigue las reglas de enrutamiento de Next.js, pero no agrega su nombre a la URL final.

Estructura de carpetas:

```
app/
  (admin)/
    dashboard/
      page.js
    settings/
      page.js
  home/
    page.js

```

En este caso, (admin) es un Route Group.

-  URL Final:
-  /dashboard (corresponde a app/(admin)/dashboard/page.js)
-  /settings (corresponde a app/(admin)/settings/page.js)
-  /home (corresponde a app/home/page.js)

Casos de uso comunes

1. Agrupar rutas sin afectar la URL
   Esto es útil para organizar archivos relacionados, como paneles administrativos o secciones de configuración.

-  Estructura:

```
app/
  (dashboard)/
    reports/
      page.js
    users/
      page.js
```

Aunque las rutas están organizadas bajo (dashboard), la URL final no incluirá ese prefijo:

/reports
/users

2. Configurar layouts compartidos por grupo
   Si tienes un diseño específico para un conjunto de páginas, puedes usar un layout.js dentro del grupo para compartirlo entre esas páginas.

-  Estructura:

```
app/
  (admin)/
    layout.js
    dashboard/
      page.js
    settings/
      page.js

```

-  Código (layout.js):

```
export default function AdminLayout({ children }) {
  return (
    <div>
      <nav>Admin Navigation</nav>
      <main>{children}</main>
    </div>
  );
}
```

}

-  Resultados:
   Las páginas en dashboard y settings compartirán el layout definido en (admin)/layout.js.

3. Separar rutas protegidas (autenticación)
   Puedes agrupar rutas que requieran autenticación bajo un Route Group y aplicar lógica de validación de acceso.

Estructura:

```
app/
  (protected)/
    layout.js
    profile/
      page.js
    settings/
      page.js

```

Código (layout.js):

```
import { useRouter } from 'next/navigation';

export default function ProtectedLayout({ children }) {
  const router = useRouter();
  const isAuthenticated = false; // Lógica de autenticación

  if (!isAuthenticated) {
    router.push('/login');
    return null;
  }

  return <>{children}</>;
}

```

Ventajas de los Route Groups

-  Organización del código sin afectar las URLs.
-  Soporte para layouts compartidos dentro del grupo.
-  Posibilidad de aplicar configuraciones específicas (p. ej., middlewares o metadatos).
