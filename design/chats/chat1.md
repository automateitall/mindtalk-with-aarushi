# MindTalk with Aarushi

_Started 2026-07-01 10:34 UTC_

---

## User

MindTalk with Aarushi — Design Brief

For visual exploration in Claude Design. Paste this in to start from a considered direction rather than a blank canvas.


The practice in one line

A warm, established counselling practice in central Delhi (Gole Market) run by Aarushi Sabharwal — Counselling Psychologist, Hypnotherapist, and Expressive Arts Therapist — offering in-person and online therapy. The site must feel safe, warm, and human — not clinical.

Who it's for

People often arriving stressed, anxious, or hesitant (mental-health stigma is still real in India). Also referrers and peers who'll judge credibility in seconds. The design must reassure both: "you're safe here" and "she's qualified and trustworthy."

The one job of the design

In under 5 seconds, a visitor should feel calm, understand who she helps, and see an easy way to reach out. Warmth and clarity beat cleverness.


Mood & feeling


Calm, soft, grounded, reassuring
Warm and human, like a well-lit, comfortable therapy room — not a hospital or a corporate clinic
Quietly professional: credible without being cold or sterile
Approachable and unintimidating — lowers the barrier to reaching out


Avoid: clinical/medical sterility, harsh corporate blues, stocky "sad person by a window" imagery, anything busy, loud, or high-pressure.

Colour direction

Soft, muted, natural palette. Explore:


Warm neutrals (cream, sand, warm off-white) as the base
Gentle earthy accents: sage/soft green, terracotta/muted clay, or a dusty warm blue
One calm accent colour for buttons/CTAs — inviting, not aggressive
Generous white space; let it breathe


Pick a palette that feels like a calm, sunlit room. Nothing neon, nothing stark.

Typography


Readable and warm — a humanist sans-serif, or a soft serif for headings paired with a clean sans for body
Comfortable sizes (generous body text), ample line spacing
Approachable, not corporate, not overly delicate
Prioritise legibility for someone reading while stressed


Imagery


A real, warm headshot of Aarushi is the hero anchor (genuine, gentle eye contact, soft natural light) — NOT stock, NOT synthetic
Supporting imagery: calm, uplifting, hopeful — soft natural textures, gentle light, the welcoming clinic space. Suggest transformation and safety, not suffering
Optional: subtle nature-inspired or organic graphic touches (soft shapes, leaves) for warmth


Layout priorities (homepage)


Hero: warm photo + a clear, specific headline naming who she helps (e.g. "Therapy for anxiety, stress & relationships — in central Delhi & online") + trust strip (qualifications · experience · rating · location) + a prominent, friendly "Book on WhatsApp" button and a Call button.
"Is this you?" — a few soft cards naming concerns (anxiety, low mood, relationships, stress/burnout, trauma) so visitors self-identify fast.
Short About — warm intro + photo + credentials, human voice.
How therapy works — 3 simple, reassuring steps.
Fees & format — in-person (Gole Market) + online, transparent.
Client experiences — gentle, privacy-respecting testimonials / rating.
Calm crisis note + footer.


Non-negotiables


Mobile-first — most visitors are on mid-range Android phones, often browsing privately. It must look and load beautifully on a small screen.
Sticky "Book on WhatsApp" + Call buttons on mobile, always reachable.
Fast and light — patchy networks; keep it quick.
Distinctive, not templated — it should feel personal to her, not like a generic therapy template.
Accessible — good contrast, scalable text, readable for stressed users.


Tone of any placeholder copy

Warm, plain, human. Speak to "you." Sound like a caring real person, not a clinical intake form. Reassuring and unpressured.


Brand name to use: MindTalk with Aarushi. Location: Gole Market, New Delhi. Explore 2–3 distinct visual directions for the homepage hero first, then iterate on the one that feels most calm-yet-credible.

## Assistant

This is a rich, well-considered brief — you've essentially given me the art direction. Rather than run you through a questionnaire, I'll do exactly what you asked: build **3 distinct hero directions** side by side, mobile-first (rendered as phone screens, since that's where your visitors are), so you can pick the one that feels most calm-yet-credible before we iterate into the full homepage.

Let me set the project up and build.

_[tool: set_project_title]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

## User

Show me more pages before i lockin on a design

## Assistant

You've got it — you shouldn't commit to a direction from the hero alone. I'll build out the **full mobile homepage** for each of the three directions (all the sections from your brief: hero → "Is this you?" → About → How it works → Fees → Experiences → crisis note + footer), so you can judge each aesthetic across the whole scroll. Keeping the hero row below for reference.

_[tool: read_file]_

_[tool: str_replace_edit]_

Now the three full homepages as a new turn at the top:

_[tool: dc_html_str_replace]_

I left a typo in one color value — let me fix it.

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

## User

2b

## Assistant

Locking in **2b — Warm Organic**. I'll build it out as a proper, standalone mobile-first homepage (real sticky CTA, drop-in slots for the real headshot, refined polish) rather than leaving it in the exploration canvas.

_[tool: copy_starter_component]_

_[tool: dc_write]_

_[tool: show_html]_

I want to confirm the organic photo mask clips correctly — that's a real rendering risk, so one check.

_[tool: show_html]_

The stray placeholder box on the left is the registration mount rendering visibly. I'll load the script in `<helmet>` instead, and wrap the slots so the organic blob shape actually clips the photo.

_[tool: str_replace_edit]_

_[tool: show_html]_

Clean now — stray box gone, organic blob mask clips the photo slot, sticky bar in place. Handing to verification.

_[tool: ready_for_verification]_

## User

1. CTA (Whatsapp) at the say hello card
2. Reaching out is the hardest step. A first message can be as simple as “hi”. A CTA there too (Whatsapp).

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

Added a WhatsApp button to the "Say hello" step card and a prominent "Book on WhatsApp" button under the closing "Whenever you're ready" line.

_[tool: ready_for_verification]_

Both WhatsApp CTAs are in.

