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
- `npm run deploy` — Build and publish to GitHub Pages (`gh-pages` branch)

## Design system dependency

The app depends on the design system as a local package:

```json
"design-system": "file:../chakra-app"
```

- **Theme** is loaded from `design-system/theme`.
- **Components** are imported from `design-system` (Button, Card, Input, Checkbox, Radio, etc.).
- **Figma tokens** (e.g. `figma.fg`, `figma.bg`, `figma.borderDefault`) are used via the theme.

Keep the design system (chakra-app) and web-app in the same parent folder (`gds/`) so the `file:../chakra-app` path stays valid.

---

## Push to GitHub and view publicly

### 1. Create the repo on GitHub

1. Go to [GitHub](https://github.com/new).
2. Create a **new repository** named `web-app` (or another name; if different, update `base` in `vite.config.ts` to `"/your-repo-name/"`).
3. Leave it **empty** (no README, .gitignore, or license).

### 2. Push from your machine

From the `web-app` folder:

```bash
cd /Users/tomi.putto/Documents/gds/web-app
git remote add origin https://github.com/YOUR_USERNAME/web-app.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username. Use `git@github.com:YOUR_USERNAME/web-app.git` if you use SSH.

### 3. Enable GitHub Pages

1. On GitHub: **Settings** → **Pages**.
2. Under **Source**, choose **Deploy from a branch**.
3. Branch: **gh-pages** (or **main** and folder **/ (root)** if you prefer).
4. Save.

### 4. Deploy the built site

Build and push the site to the `gh-pages` branch (run from a machine where `chakra-app` is at `../chakra-app`):

```bash
cd /Users/tomi.putto/Documents/gds/web-app
npm install
npm run deploy
```

After a few minutes the site will be at:

**https://YOUR_USERNAME.github.io/web-app/**

If you used a different repo name, the URL is `https://YOUR_USERNAME.github.io/REPO_NAME/`.
