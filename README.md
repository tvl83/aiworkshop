# Thomas Le — Personal Resume Website

Single-page personal resume website for **Thomas Le**, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Live Site

https://tvl83-aiworkshop.vercel.app

## Repository

https://github.com/tvl83/aiworkshop

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — start the production server
- `npm run lint` — run ESLint

## Features

- Static / server-rendered single page, no client-side data fetching
- Light/dark theme toggle, defaulting to the visitor&apos;s system preference
- Semantic HTML with a sensible heading hierarchy
- Responsive layout (readable on phone and laptop)

## What was deliberately skipped

- Contact form (deferred to phase 2 per the brief)
- Analytics / third-party tracking
- Privacy: no residential address and no phone number are published; the resume&apos;s contact section only listed city/state, email, GitHub, LinkedIn, and portfolio links.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4