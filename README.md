# MindTalk with Aarushi

Marketing site for MindTalk with Aarushi — a counselling practice in Gole
Market, New Delhi. Astro + Tailwind CSS.

The original design brief, chat transcript, and Claude Design HTML
prototypes this build implements live in `design/` for reference.

## Status

**Home page only**, responsive across three tiers. Implemented from three
Claude Design exports:

- `design/project/MindTalk Homepage.dc.html` — mobile ("2b — Warm Organic",
  locked in during design review)
- `design/project-tablet/MindTalk Homepage Tablet.html` — tablet
- `design/project-desktop/MindTalk Homepage Desktop.html` — desktop

Breakpoints match what each source design actually targets, not generic
Tailwind defaults: below `md` (768px) is the mobile design; `md` to `lg`
(768–1024px) is the tablet design (an 834px shadowed card, its own sticky
nav without the "How I help" link or standalone Call link); `lg` and up
(1024px+) is the desktop design (full-bleed, 1160px content width, full
nav). Mobile keeps its own hero header + sticky bottom WhatsApp/Call bar
rather than adopting a nav — tablet and desktop both get `Nav.astro`
instead, which is why the sticky bar and mobile header both switch off at
`md`, not `lg`.

The three designs had some real content differences between them (desktop
added a 3rd hero trust badge, an availability badge, a 6th "Something
else?" concern card, a 2nd About paragraph, a 3rd testimonial; tablet
omitted the availability badge entirely). Per-item, the richer version was
used across **all three** tiers — see `src/config/site.ts` for the
unified content.

The rest of the sitemap (About, Services, specialty pages, How I Work,
Fees, FAQ, Blog, Contact/Book, Privacy Policy) is planned per the Website
Plan and Build Spec docs but not yet built.

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
│                      AvailabilityBadge, Section, Header (mobile), Nav
│                      (desktop), Footer, StickyCtaBar (mobile)
├── config/site.ts     contact numbers, NAP, fees, crisis line, rating,
│                      concerns/testimonials data — single source of truth
├── layouts/Layout.astro  page chrome: meta tags, nav, footer, sticky CTA bar
├── pages/index.astro  the Home page
└── styles/global.css  design tokens + the `.wrap` container (three tiers:
                       480px mobile column below `md`, the tablet design's
                       834px card from `md` to `lg`, the desktop design's
                       1160px content width at `lg` and up)
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
