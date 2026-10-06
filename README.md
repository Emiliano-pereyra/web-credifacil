# Credifacil Website

Base frontend para el refactor del sitio publico de Credifacil.

## Stack

- Next.js App Router
- JavaScript y JSX
- Tailwind CSS
- CSS variables para tokens de diseño
- `next/font` con Manrope
- ESLint y Prettier

## Instalacion

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Tambien estan disponibles:

```bash
npm run lint
npm run format
```

## Estructura

- `src/app`: rutas, layout, paginas y endpoints BFF.
- `src/components/ui`: componentes base reutilizables.
- `src/components/layout`: header, footer y piezas estructurales.
- `src/components/sections`: secciones visuales del sitio.
- `src/features`: logica por dominio y servicios.
- `src/content`: textos y contenido estatico centralizado.
- `src/styles/tokens.css`: tokens de color, radios, sombras y contenedores.

El proyecto usa JavaScript/JSX, Tailwind y estilos basados en tokens. Los endpoints BFF viven bajo `src/app/api` para evitar exponer APIs internas desde el cliente.
