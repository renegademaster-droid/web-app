# Web App

Demo website that uses the **design system** (chakra-app) components and Figma tokens.

- **Separate project** — Lives in `gds/web-app`; does not modify the design system.
- **Automatic updates** — Depends on the design system via `file:../chakra-app`. After pulling design system changes, run `npm install` in web-app (and restart dev server if needed) to pick up token and component updates.

## Setup

```bash
cd web-app
npm install
npm run dev
```

## Scripts

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build

## Design system dependency

The app depends on the design system as a local package:

```json
"design-system": "file:../chakra-app"
```

- **Theme** is loaded from `design-system/theme`.
- **Components** are imported from `design-system` (Button, Card, Input, Checkbox, Radio, etc.).
- **Figma tokens** (e.g. `figma.fg`, `figma.bg`, `figma.borderDefault`) are used via the theme.

Keep the design system (chakra-app) and web-app in the same parent folder (`gds/`) so the `file:../chakra-app` path stays valid.
