# Credifacil Website Agent Guide

This project is the foundation for the public Credifacil website refactor.

## Stack

- Next.js App Router
- JavaScript and JSX
- Tailwind CSS
- CSS design tokens
- `next/font` with Manrope
- ESLint and Prettier

## Rules

- Do not use TypeScript or TSX.
- Do not use MUI.
- Do not use inline styles as the main styling approach.
- Use Tailwind classes backed by CSS tokens from `src/styles/tokens.css`.
- Use base UI components from `src/components/ui`.
- Use section components from `src/components/sections`.
- Use feature-specific logic from `src/features`.
- Use static content from `src/content`.
- Keep visible website copy in Spanish.
- Keep agent documentation in English.
- BFF endpoints live under `src/app/api`.
- Never call internal APIs directly from client components.
- Prefer Server Components by default.
- Use Client Components only for interactive features.
- Keep components reusable, but do not over-abstract.

## Visual Direction

Follow the Credifacil PDF direction:

- dark green brand color
- lime accent for CTAs and icons
- light blue badges
- white cards
- rounded corners
- institutional footer
- legal and antifraud messaging

When adding new sections, follow `src/components/sections/ComoFunciona` as the reference pattern.
