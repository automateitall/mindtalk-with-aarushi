# MindTalk with Aarushi

Marketing site for MindTalk with Aarushi — a counselling practice in Gole
Market, New Delhi. Astro + Tailwind CSS.

The original design brief, chat transcript, and Claude Design HTML
prototypes this build implements live in `design/` for reference.

## Status

**Home, About, a Services hub, and three service pages** (Hypnotherapy,
Counselling Psychology, Expressive Arts Therapy) on a reusable template,
all responsive across three tiers (mobile / tablet / desktop). Home was
implemented from three Claude Design exports; every other page was built
from written specs + copy (no Claude Design mockups), reusing the same
components, tokens, and breakpoint system for visual consistency.

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

The three homepage designs had some real content differences between them
(desktop added a 3rd hero trust badge, an availability badge, a 6th
"Something else?" concern card, a 2nd About paragraph, a 3rd testimonial;
tablet omitted the availability badge entirely). Per-item, the richer
version was used across **all three** tiers — see `src/config/site.ts`
for the unified content.

The homepage's "8+ yrs" experience figure was replaced with "3+ years"
sitewide (`site.experienceYears`) to match the About page copy, which the
user confirmed as the correct figure.

`/about` reuses `ConcernCard` for the three-modalities section and a new
`CredentialsList` component (understated, with a clearly-flagged "pending
confirmation" treatment for the RCI/degree placeholder — no invented
credentials). `Nav`'s link set is now root-relative (`/#concerns` etc.) so
it resolves correctly from non-home pages, and the closing CTA block is
now a shared `ClosingCta` component (heading is now a prop — Home/About
use "Whenever you're ready, I'm here.", service pages use their own
question-style heading).

**`src/pages/services/[slug].astro`** is a single reusable template driven
by `src/config/services.ts` (keyed by slug: `hypnotherapy`,
`counselling-psychology`, `expressive-arts-therapy`) — adding another
specialty page later is just a new config entry, no new page code.
`ConcernCard` gained an optional `href` so it can act as a link — About's
three modality cards now link through to their respective service pages,
and the service pages cross-link each other inline within "Working with
me" (e.g. Hypnotherapy → Counselling, Counselling → Hypnotherapy +
Expressive Arts) per each page's own copy notes.

Per the design notes for these two pages, each service page gets a
distinct decorative-blob lean (`heroAccent` in `services.ts`) while
keeping identical structure/tokens: Hypnotherapy is "balanced" (its
original treatment), Expressive Arts Therapy is "warm" (clay/terracotta,
a touch more expressive), Counselling Psychology is "calm" (restrained,
sage-leaning). Counselling also skips the boxed myth-vs-reality card in
favour of a plain, unboxed "worth knowing" list — its copy doc explicitly
asked for this page to be more prose-led than the other two, and it's the
only one of the three with a 7th "catch-all" card in the concerns grid
(dashed border, matching the homepage's "Something else?" tile pattern).

`ServiceContent`'s `workingWithMe.paragraphs` is an array of `TextSegment`
arrays (`{ text, href?, emphasis? }`) rather than plain strings, so a
paragraph can mix plain text, inline links, and the muted "(… — pending
confirmation)" aside in any order — that's what makes the cross-linking
and the CHI-USA/UNESCO-CIDS/RCI pending notes work without a markdown
parser.

The confirmed real WhatsApp/call number (**+91 97170 78394**, from the
Hypnotherapy Page Copy doc) replaced the placeholder sitewide — every page
now shares the same working number.

**Unlike Hypnotherapy's copy (explicitly pre-approved, only CHI-USA
pending), the Counselling Psychology and Expressive Arts Therapy pages
were built from copy docs the user did supply in full** — so all three
service pages are implemented from user-provided copy, not drafted by
Claude. The only pending items across all three are the credential
expansions each copy doc itself flagged (CHI-USA, UNESCO-CIDS, RCI
registration/degree).

**`/services`** (`servicesHub` in `services.ts`) is the overview/index
page: a tight hero, three clickable service cards (color-echoing each
page's own `heroAccent`) as the visual centrepiece, a compressed one-line
"blend" note sitting directly under the cards, and a closing CTA.
Deliberately built dense rather than airy — it's a signpost page, not a
landing hero — so it skips the homepage's generous section spacing, and
has no standalone format/fees section (that content lives on the future
Fees page, not duplicated here per the redesign notes). Coexists as an
Astro static route alongside the `services/[slug]` dynamic route with no
conflict.

**Fee correction:** the Services hub copy specified a flat ₹1,200 for
both in-person and online sessions, which contradicted the homepage's
previous ₹1,500 (in-person) / ₹1,200 (online) split. The user confirmed
₹1,200 flat is correct — `site.fees` now reflects that, so the homepage's
Fees section updated automatically (it reads from the same config).

The rest of the sitemap (remaining specialty pages — Anxiety & Stress,
Depression, Trauma/PTSD, Relationships/Family, Work Stress & Burnout,
Online Therapy — How I Work, Fees, FAQ, Blog, Contact/Book, Privacy
Policy) is planned per the Website Plan and Build Spec docs but not yet
built.

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
│                      StepItem, FeeCard, TestimonialCard, CredentialsList,
│                      CrisisNote, AvailabilityBadge, ClosingCta, Section,
│                      Header (mobile), Nav (tablet+desktop), Footer,
│                      StickyCtaBar (mobile)
├── config/
│   ├── site.ts        contact numbers, NAP, fees, crisis line, rating,
│   │                  concerns/testimonials/about content — single source
│   │                  of truth
│   └── services.ts    service-page content keyed by slug (hypnotherapy,
│                      counselling-psychology, expressive-arts-therapy),
│                      plus servicesHub for the /services overview page
├── layouts/Layout.astro  page chrome: meta tags, nav, footer, sticky CTA bar
├── pages/
│   ├── index.astro         Home
│   ├── about.astro         About Aarushi
│   └── services/
│       ├── index.astro     Services hub/overview
│       └── [slug].astro    reusable service-page template
└── styles/global.css  design tokens + the `.wrap` container (three tiers:
                       480px mobile column below `md`, the tablet design's
                       834px card from `md` to `lg`, the desktop design's
                       1160px content width at `lg` and up)
```

## Pending inputs (do not guess these)

Tracked in `src/config/site.ts` and inline comments:

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
- **Portraits reused across pages** — Home, About, and the Hypnotherapy
  page all reuse the same real photo (different crops/shapes). The About
  brief asked for a "softer, more personal" portrait distinct from the
  homepage's — no second photo was available to extract, so this needs a
  real replacement from Aarushi before launch.
- **About page credentials** — RCI registration and core degree are a
  clearly-flagged placeholder row in `src/config/site.ts` (`about.credentials`,
  last item, `pending: true`) — same "do not invent" rule as above.
- **Credential expansions on the service pages** — each is the only
  placeholder its own copy doc flagged: CHI-USA (Hypnotherapy),
  UNESCO-CIDS (Expressive Arts Therapy), RCI registration/core degree
  (Counselling Psychology). All in `src/config/services.ts`, rendered as
  a muted "(… — pending confirmation)" aside inline in "Working with me" —
  same "do not invent" rule as above.

## Not yet built

Per the Build Spec's build order, still ahead: remaining launch-minimum
pages (About, Services, How I Work, Fees, Contact/Book, Privacy Policy),
specialty pages, enquiry form + serverless email (Resend), Tina CMS for
blog + testimonials, paid booking flow (payment rail — Stripe vs Razorpay
— still undecided), analytics, JSON-LD structured data, sitemap/robots,
and Netlify deploy. None of these need guessing at; the three docs in
`design/` (or wherever the Design Brief / Website Plan / Build Spec live)
spell out the decisions already made and what's still open.
