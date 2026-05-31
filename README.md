# site-blog

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

**Study project** — affiliate landing page + markdown blog built with Next.js App Router, Contentlayer, TypeScript, Tailwind CSS, and shadcn/ui.

> Built while studying the [**Next.js Fundamentals**](https://github.com/rocketseat-education/nextjs-fundamentos-do-next) course by [Rocketseat](https://www.rocketseat.com.br/) — a learning and practice repository.

---

## About

**site-blog** is a course project focused on Next.js fundamentals: routing, server components, static generation, and content-driven pages.

It includes a **Site.Set** landing page (hero, features, testimonials, CTA) and a **blog** with Markdown posts, search, social sharing, and dynamic routes — the same scope as the Rocketseat course repo, adapted for study and experimentation.

Not my main portfolio — see [vinicius-portfolio](https://github.com/viniciusdatti/vinicius-portfolio) for production-grade work.

---

## ✨ Features

- App Router (`/`, `/blog`, `/blog/[slug]`, `/user`)
- Markdown blog powered by Contentlayer
- Responsive layout with Tailwind CSS
- shadcn/ui components
- Route boundaries: `loading`, `error`, `not-found`

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
