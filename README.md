# MindTalk with Aarushi

Marketing site for MindTalk with Aarushi — a counselling practice in Gole
Market, New Delhi. Astro + Tailwind CSS.

The original design brief, chat transcript, and Claude Design HTML
prototypes this build implements live in `design/` for reference.

## Status

**11 pages**: Home, About, a Services hub, three service pages
(Hypnotherapy, Counselling Psychology, Expressive Arts Therapy) on a
reusable template, and five concern pages (Anxiety & Stress, Depression &
Low Mood, Trauma & PTSD, Relationships & Family, Work Stress & Burnout)
on a second reusable template — all responsive across three tiers
(mobile / tablet / desktop). Home was implemented from three Claude
Design exports; every other page was built from written specs + copy (no
Claude Design mockups), reusing the same components, tokens, and
breakpoint system for visual consistency.

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
page, now a **two-group layout** per its revised copy doc: "How I work"
(the 3 modality cards, primary/full-size — unchanged) then "What I help
with" (5 lighter, secondary link rows to the concern pages, visually
subordinate to the modality cards on purpose). Deliberately dense, not
airy — a signpost page, not a landing hero — with a compressed one-line
"blend" note under the modality cards and a single compact format line
(no standalone fees/format section; that lives on the future Fees page).
Coexists as an Astro static route alongside `services/[slug]` with no
conflict.

**Fee correction:** the Services hub copy specified a flat ₹1,200 for
both in-person and online sessions, which contradicted the homepage's
previous ₹1,500 (in-person) / ₹1,200 (online) split. The user confirmed
₹1,200 flat is correct — `site.fees` now reflects that, so the homepage's
Fees section updated automatically (it reads from the same config).

**Concern pages** (`src/config/concerns.ts` + root-level
`src/pages/[slug].astro`, e.g. `/anxiety-stress`) are a *second* reusable
template, distinct from the service-page one — deliberately root-level
slugs rather than nested under `/services/`, per the design brief's own
"concerns are a distinct group from services" framing. More emotionally
led than the service pages (recognition hero → "What it can feel like"
grid → a compact reassurance band → "How I can help" with inline links to
the 3 modality pages → a compact "working together" band → a conditionally-
rendered "Related reading" section → soft CTA → a crisis note that's a
touch more present/careful than the service pages' foot note, per the
brief). Each page gets a subtle blob-accent lean (`calm` / `warm` /
`soft` in `concerns.ts`) — e.g. Depression uses `soft`, a deliberately
muted/low-contrast treatment via Tailwind opacity modifiers on the
existing sage/clay tokens, rather than a new color.

**Cross-linking is bidirectional and verified both ways:** each concern
page links inline to the 3 relevant service pages (all 3 modalities are
referenced in every concern page's own copy); each service page links
back to all 5 concern pages via a compact "Wondering if this fits…" band
before its closing CTA. The Services hub's "What I help with" group links
to all 5 concern pages too. The homepage's own "Does any of this feel
familiar?" cards (`site.concerns` in `site.ts`) now link through to their
matching concern pages as well — the highest-authority page on the site
linking directly into each one, which is the actual SEO-correct way to
signal these pages matter (a redundant `/concerns` index page was
considered and deliberately skipped — would have cannibalized the same
keywords `/services` already targets, and it wouldn't have added any
content a search engine or visitor doesn't already get from `/services`'
"What I help with" group). The homepage's own catch-all tile ("Something
else?") intentionally stays unlinked, same as the equivalent tiles on
About and the service pages.

**`src/config/blog.ts`** is a stub (`posts: []` + `getPostsByTag`) so
concern pages' "Related reading" section can render conditionally now —
it correctly renders nothing today — without needing template changes
once a real blog/CMS exists.

The rest of the sitemap (Online Therapy, How I Work, Fees, FAQ, Blog,
Contact/Book, Privacy Policy) is planned per the Website Plan and Build
Spec docs but not yet built.

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
│   ├── services.ts    service-page content keyed by slug (hypnotherapy,
│   │                  counselling-psychology, expressive-arts-therapy),
│   │                  plus servicesHub for the /services overview page
│   ├── concerns.ts    concern-page content keyed by slug (anxiety-stress,
│   │                  depression-low-mood, trauma-ptsd,
│   │                  relationships-family, work-stress-burnout)
│   └── blog.ts        stub (empty posts[] + getPostsByTag) for concern
│                      pages' conditional "Related reading" section
├── layouts/Layout.astro  page chrome: meta tags, nav, footer, sticky CTA bar
├── pages/
│   ├── index.astro         Home
│   ├── about.astro         About Aarushi
│   ├── [slug].astro        reusable concern-page template (root-level,
│   │                        e.g. /anxiety-stress)
│   └── services/
│       ├── index.astro     Services hub/overview (two-group layout)
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

Per the Build Spec's build order, still ahead: Online Therapy, How I
Work, Fees, FAQ, Contact/Book, Privacy Policy, the actual blog/CMS (Tina)
that `blog.ts` is stubbed for, enquiry form + serverless email (Resend),
paid booking flow (payment rail — Stripe vs Razorpay — still undecided),
analytics, JSON-LD structured data, sitemap/robots, and Netlify deploy.
None of these need guessing at; the three docs in `design/` (or wherever
the Design Brief / Website Plan / Build Spec live) spell out the
decisions already made and what's still open.
