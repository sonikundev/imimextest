# Integración del prototipo en Nuxt

Se recuperó el contenido del proyecto HTML `PROTOTIPO/EBO_BMS` en páginas nativas de Nuxt. La carpeta original se conserva como referencia. La migración prioriza los textos, preguntas frecuentes, diagramas, formularios y relaciones entre servicios y sectores.

## Rutas

| Contenido del prototipo | Ruta en Nuxt |
| --- | --- |
| Página principal de la línea | `/edificios-inteligentes` |
| Gestión y automatización de edificios | `/edificios-inteligentes/building-automation` |
| Monitoreo y gestión de energía | `/edificios-inteligentes/power-automation` |
| Mantenimiento y recuperación BMS | `/edificios-inteligentes/mantenimiento-bms` |
| Hoteles | `/edificios-inteligentes/sectores/hoteles` |
| Hospitales | `/edificios-inteligentes/sectores/hospitales` |
| Data centers | `/edificios-inteligentes/sectores/data-centers` |
| Industria | `/edificios-inteligentes/sectores/industria` |

Las rutas anteriores `/`, `/about`, `/consultancy` y `/contact` siguen disponibles. Los enlaces relativos del HTML se sustituyeron por enlaces de Nuxt. Las anclas de cada página se conservan.

## Información fusionada

- **Inicio:** presenta software y la nueva línea de Edificios Inteligentes, con acceso a las soluciones y a los cuatro sectores.
- **Servicios y software:** los detalles originales se conservan en `SoftwareServices.vue` y `SoftwarePortfolio.vue`, compartidos entre inicio y consultoría. El menú Software abre `/consultancy#software`.
- **Nosotros:** reúne el perfil original de software industrial y administrativo con la experiencia en instrumentación, integración y las competencias EcoXpert del prototipo.
- **Contacto:** mantiene las sedes, mapas y canales originales, y organiza las solicitudes por servicio. Las preguntas técnicas se mantienen en la página del servicio correspondiente.
- **Navegación y pie:** un solo layout con los enlaces del sitio y los sellos EcoXpert, en lugar de repetir encabezados y pies del HTML.
- **Building Automation:** incorpora una sección sobre operación unificada, información por equipo, ingeniería, administración centralizada, accesos y Building Activate, recuperada del material de redes. Los 22 textos originales de las campañas se conservan en `data/building-campaigns.json`, con sus enlaces, hashtags e inventario de imágenes; no se repiten como bloques de publicidad en las vistas.

## Assets y estilos

`public/assets/edificios-inteligentes/` contiene el imagotipo, los sellos y las imágenes originales de referencia. `redes/` recupera las 44 imágenes incrustadas en el archivo de campañas. Los SVG de diagramas permanecen en los componentes de sus páginas; los sellos que estaban en base64 ahora usan archivos compartidos.

Se utiliza la variante RGB válida de Building Automation incluida en `BA Master`. El archivo `EcoXpert Building Automation Badge_Master_RGB.jpg` de esa carpeta contiene metadatos AppleDouble, no una imagen: se conserva en el original y no se usa como imagen web.

Los estilos base compartidos están en `scss/buildings/common.css`. Los estilos específicos de cada vista se limitan a su contenedor. Se retiraron las reglas de modo oscuro; todo el sitio permanece claro.

Los documentos PDF son referencias internas de estructura e identidad. Se conserva su ubicación original; no se publican como contenido del sitio.

## Interacciones y formularios

Se mantienen las pestañas con teclado, los escenarios de Building Automation, las lecturas ilustrativas, el autodiagnóstico BMS, la cadena de continuidad de data centers y el caso de referencia Megacable. Este caso conserva su atribución a Schneider Electric.

Las consultas al DOM se limitan al contenedor de la vista. Los temporizadores se limpian al salir de la ruta.

Los formularios comparten `BuildingsContactFields` y `BuildingsLeadForm`, conservando las preguntas propias de cada servicio y sector. Validan los campos y preparan un correo a `contacto@imimex.com`; el visitante revisa y envía el mensaje desde su aplicación de correo. Se ofrece una vista del mensaje y una opción para copiarlo. No hay una integración con el CRM ni una confirmación falsa de recepción.

## Pendientes del material original

Estas notas son referencias del prototipo, no tareas nuevas ejecutadas durante la migración:

- El aviso de privacidad y algunos casos de referencia no tienen documentos fuente. Sus controles indican que están pendientes; no se inventaron páginas ni casos.
- El prototipo incluye promesas comerciales de diagnóstico sin costo y plazos de atención. Se conservaron como contenido proporcionado; su validación comercial queda pendiente según el README original.
- Los indicadores, escenarios y lecturas conservan su carácter ilustrativo.
- Una conexión real al CRM necesita un servicio de recepción de solicitudes que este proyecto no incluye.

## Verificación

`npm run check:content` compara 701 bloques de contenido del prototipo con las ocho vistas migradas y comprueba las rutas y referencias de assets locales. El aviso ficticio de aceptación de privacidad del formulario se sustituye por la explicación del flujo por correo.

También se comprobaron en navegador las 12 rutas en escritorio y móvil, el modo claro con preferencia del sistema oscura y las principales interacciones: escenarios, pestañas, autodiagnóstico, solicitud por correo, cadena de continuidad y apertura/cierre del caso Megacable.
