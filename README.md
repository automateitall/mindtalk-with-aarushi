# MindTalk with Aarushi

Marketing site for MindTalk with Aarushi — a counselling practice in Gole
Market, New Delhi. Astro + Tailwind CSS.

The original design brief, chat transcript, and Claude Design HTML
prototypes this build implements live in `design/` for reference.

## Status

**Home page only**, implemented from `design/project/MindTalk Homepage.dc.html`
(the "2b — Warm Organic" direction locked in during design review). The
rest of the sitemap (About, Services, specialty pages, How I Work, Fees,
FAQ, Blog, Contact/Book, Privacy Policy) is planned per the Website Plan
and Build Spec docs but not yet built.

## Running locally

```sh
npm install
npm run dev       # http://localhost:4321
```

| Command           | Action                                    |
| :----------------- | :----------------------------------------- |
| `npm run dev`      | Start the dev server                       |
| `npm run build`    | Production build to `./dist/`              |
| `npm run preview`  | Preview the production build locally       |
| `npx astro check`  | Type-check `.astro`/`.ts` files            |

No environment variables are required yet — there's no serverless
function, CMS, or payment integration wired up. See "Not yet built" below.

## Project structure

```
src/
├── assets/images/    real photos (hero + about) extracted from the design tool
├── components/       Button, WhatsAppCTA, CallCTA, TrustStrip, ConcernCard,
│                      StepItem, FeeCard, TestimonialCard, CrisisNote,
│                      Section, Header, Footer, StickyCtaBar
├── config/site.ts     contact numbers, NAP, fees, crisis line, rating —
│                      single source of truth, referenced by components
├── layouts/Layout.astro  page chrome: meta tags, footer, sticky CTA bar
├── pages/index.astro  the Home page
└── styles/global.css  design tokens (color/font) as Tailwind v4 @theme
```

## Pending inputs (do not guess these)

Tracked in `src/config/site.ts` and inline comments:

- **WhatsApp / call numbers** — currently a placeholder (`+91 90000 00000`).
  Swap `whatsappNumber` / `callNumber` in `src/config/site.ts`.
- **Credentials wording** — RCI registration number and degree institution
  are not yet confirmed by Aarushi (Website Plan, "Still open" #1). The
  hero/about copy only uses what's already confirmed (role titles,
  CHI-USA, UNESCO-CIDS); don't add registration numbers or degrees without
  her sign-off.
- **Rating figure** — using 4.7★ per the Website Plan's locked homepage
  copy; the earlier design mockup showed 4.9★. Confirm the real aggregate
  rating before launch.
- **Testimonials** — the two shown are placeholder/sample copy, not real
  client quotes. Build Spec §5: individual testimonials stay unpublished
  until Aarushi confirms permissibility with her professional body.
- **Vandrevala Foundation crisis number** — marked "verify before
  publishing" in the Build Spec; carried through as-is.

## Not yet built

Per the Build Spec's build order, still ahead: remaining launch-minimum
pages (About, Services, How I Work, Fees, Contact/Book, Privacy Policy),
specialty pages, enquiry form + serverless email (Resend), Tina CMS for
blog + testimonials, paid booking flow (payment rail — Stripe vs Razorpay
— still undecided), analytics, JSON-LD structured data, sitemap/robots,
and Netlify deploy. None of these need guessing at; the three docs in
`design/` (or wherever the Design Brief / Website Plan / Build Spec live)
spell out the decisions already made and what's still open.
