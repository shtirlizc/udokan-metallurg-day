# Astro Starter Kit: Minimal

## Деплой на GitHub Pages

Workflow `.github/workflows/deploy.yml` собирает сайт на Node.js 24 и публикует
его при push в `main`. Запуск вручную доступен во вкладке Actions через
`Deploy to GitHub Pages` → `Run workflow`.

В настройках репозитория откройте **Settings → Pages → Build and deployment**
и выберите **Source: GitHub Actions**.

Адрес сайта: https://shtirlizc.github.io/udokan-metallurg-day/.
Параметры `site` и `base` заданы в `astro.config.mjs`; внутренние ссылки и
ресурсы из `public/` учитывают `base` через `src/utils/paths.ts`.

При подключении собственного домена замените `site` на его URL и уберите
`base`. Если автодеплой Vercel больше не нужен, отключите его в Vercel.

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
