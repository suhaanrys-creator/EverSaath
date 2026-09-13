
# EverSaath

A polished, frontend-only MVP for EverSaath, a senior lifestyle and care startup.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The static output is written to `out/`. For local development, use `npm run dev`; `next start` is not used with the static export configuration.

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push the repository to GitHub.
2. In the repository, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` or run **Deploy to GitHub Pages** from the Actions tab.

The site will be available at `https://suhaanrys-creator.github.io/EverSaath/` after the workflow completes. If the repository is renamed, update `basePath` in `next.config.mjs` to match the new repository name.

The app uses Next.js App Router, TypeScript, Tailwind CSS, Lucide React, Framer Motion and local mock data in `data/mock.ts`. Bookings, RSVPs, SOS actions and contact submissions are demonstrations only; there is no payment, emergency dispatch, location tracking, medical diagnosis or backend integration.

## Routes

- `/` Home
- `/services` Services with category filtering and mock booking
- `/companions` Companion discovery with search filters
- `/community` Events with mock RSVP
- `/family` Family dashboard
- `/safety` Safety and SOS demo
- `/about` About EverSaath
- `/contact` Join/contact form with validation
