# site-blog

Projeto desenvolvido durante o curso **Fundamentos do Next.js** ([Rocketseat](https://github.com/rocketseat-education/nextjs-fundamentos-do-next)).

Landing page + blog com App Router, Contentlayer e TypeScript. Repositório de **estudo e prática** — não é meu portfólio principal.

## ✨ Features

- App Router (`/`, `/blog`, `/blog/[slug]`, `/user`)
- Blog com posts em Markdown (Contentlayer)
- Layout responsivo com Tailwind CSS
- Componentes com shadcn/ui
- Boundaries: `loading`, `error`, `not-found`

## 🛠 Tech Stack

![Next JS](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/viniciusdatti/site-blog.git
cd site-blog
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
npm run build
```

## 📁 Project Structure

```
site-blog/
├── posts/              # Markdown blog posts (Contentlayer)
├── public/
└── src/
    ├── app/            # App Router routes
    ├── components/
    ├── templates/
    └── styles/
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
