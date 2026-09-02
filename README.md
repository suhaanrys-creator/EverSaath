
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
npm start
```

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
