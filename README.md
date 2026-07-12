# Clarity Associates

Informational website for Clarity Associates, a chamber of advocates practicing
before the Madurai Bench of the Madras High Court and other forums in Tamil
Nadu, India.

This website is built to comply with the Rules of the Bar Council of India
concerning advocate websites: it is informational in nature and contains no
advertising, promotional language, testimonials, or claims of results.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React (icons)
- React Helmet Async (SEO)
- Swiper (carousels)
- React CountUp (animated statistics)

## Getting Started

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

## Building for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/
    layout/       Navbar, Footer, DisclaimerGate, Layout wrapper, WhatsApp FAB
    home/         Home page sections (Hero, Stats, Practice Areas, etc.)
    shared/       Reusable pieces (SEO, PageHeader, Reveal animation)
  data/
    cases.ts      Representative matters — add new matters here
    services.ts   Practice areas and courts of practice
    team.ts       Advocate profiles
    site.ts       Contact details, FAQ, statistics
  pages/          One file per route
```

## Managing Content

- **Representative Matters**: edit `src/data/cases.ts`. Each entry requires a
  title, date, role, court, and optionally a link to a public judgment. Only
  factual information should be added — do not describe outcomes.
- **Practice Areas**: edit `src/data/services.ts`.
- **Team**: edit `src/data/team.ts`. Photos live in `public/images/team/`.
- **Contact details / FAQ**: edit `src/data/site.ts`.

## Deployment (GitHub Pages)

1. Update the `base` path in `vite.config.ts` to match your repository name
   (e.g. `/clarity-associates/`), or set it to `/` if using a custom domain.
2. Update the `basename` prop on `BrowserRouter` in `src/main.tsx` to match.
3. Push to the `main` branch — the included GitHub Actions workflow
   (`.github/workflows/deploy.yml`) will build and publish the site to
   GitHub Pages automatically. Enable Pages in the repository settings with
   source set to "GitHub Actions".

Alternatively, deploy manually with:

```bash
npm run deploy
```

(requires the `gh-pages` package, already included in devDependencies)

## Compliance Notes

- No advertising or promotional language is used anywhere on the site.
- No testimonials, client reviews, success rates, or superlative claims
  ("Best Lawyer", "Top Advocate", etc.) are present.
- The Representative Matters section lists only factual case information
  (parties, date, role, court) without describing results.
- A disclaimer gate requires users to acknowledge the informational nature
  of the site before proceeding, on every new browser session.
- SEO metadata, structured data, and copy avoid solicitation language,
  consistent with Rule 36 (and related rules) under the Bar Council of
  India Rules.

## Accessibility

- Semantic landmarks, skip-to-content link, and visible focus states.
- All interactive elements are keyboard operable.
- Images include descriptive alt text.
- Reduced-motion preference is respected site-wide.
