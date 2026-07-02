// Content for the reusable concern-page template (src/pages/[slug].astro).
// Root-level slugs (not nested under /services/) per the Concern Page Design
// Brief's own URL note — concerns ("what I help with") are framed as a
// distinct group from services ("how I work"). Add a new key + the template
// picks it up automatically via getStaticPaths.

import type { TextSegment } from "./services";

interface ConcernCardItem {
  title: string;
  description: string;
  color: string;
  radius?: string;
}

// Subtle per-page decorative-blob lean, per the design brief: "calm" for
// anxiety/trauma (sage), "soft" muted/low-contrast for depression, "warm"
// clay for relationships/burnout. Consistency first — kept subtle.
export type ConcernAccent = "calm" | "warm" | "soft";

export interface ConcernContent {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  lead: string;
  accent: ConcernAccent;

  feelsLike: {
    heading: string;
    intro: string;
    items: ConcernCardItem[];
    closing: string;
  };

  // Compact reassurance band (section 3) — a heading + short body, never a
  // full screen-height section (see Services hub density fix).
  reassurance: {
    heading: string;
    body: string;
  };

  howICanHelp: {
    heading: string;
    paragraph: TextSegment[];
  };

  workingTogether: {
    heading: string;
    body: string;
  };

  // Matches blog post tags (src/config/blog.ts). Section renders only when
  // matching posts exist.
  relatedReadingTag: string;

  cta: {
    heading: string;
    subhead: string;
  };

  // Slightly more careful/present than the service pages' foot note —
  // visitors here may be in more distress — but still calm, not alarming.
  crisisNote: string;
}

export const concerns: Record<string, ConcernContent> = {
  "anxiety-stress": {
    slug: "anxiety-stress",
    seoTitle: "Anxiety & Stress Therapy in Delhi — Gole Market & Online | MindTalk with Aarushi",
    seoDescription:
      "Struggling with anxiety, worry, or stress? Warm, professional therapy with Aarushi Sabharwal in Gole Market, Delhi & online. A calmer mind is possible — reach out today.",
    eyebrow: "Anxiety & Stress",
    headline: "When your mind won't switch off",
    lead: "If your thoughts race, your body stays tense, and switching off feels impossible, you're not alone — and you're not overreacting. Anxiety and stress are exhausting, and they're also very treatable. This can get lighter.",
    accent: "calm",

    feelsLike: {
      heading: "What it can feel like",
      intro: "Anxiety shows up differently for everyone. You might recognise some of these:",
      items: [
        {
          title: "Racing thoughts",
          description: "Spiralling thoughts that won't quiet down.",
          color: "var(--color-clay-100)",
          radius: "50% 50% 46% 54%",
        },
        {
          title: "A sense of dread",
          description: "Like something's wrong, all the time.",
          color: "var(--color-sage-50)",
          radius: "52% 48% 50% 50%",
        },
        {
          title: "Physical tension",
          description: "A racing heart, or a tight chest.",
          color: "var(--color-sage-100)",
          radius: "48% 52% 55% 45%",
        },
        {
          title: "Overthinking",
          description: "Replaying every decision or conversation.",
          color: "var(--color-clay-100)",
          radius: "54% 46% 48% 52%",
        },
        {
          title: "Sleep trouble",
          description: "Or waking up already anxious.",
          color: "var(--color-sage-50)",
          radius: "50% 50% 45% 55%",
        },
        {
          title: "On edge",
          description: "Irritable, or unable to relax.",
          color: "var(--color-sage-100)",
          radius: "50% 50% 48% 52%/48% 52% 50% 50%",
        },
      ],
      closing: "None of this means something is wrong with you. It means you've been carrying a lot.",
    },

    reassurance: {
      heading: "You don't have to manage it alone",
      body: "Anxiety is one of the most common reasons people reach out — and one of the most responsive to support. With the right help, the noise quietens, and you get room to breathe again. Reaching out is a strong, kind first step.",
    },

    howICanHelp: {
      heading: "How I can help",
      paragraph: [
        {
          text: "Together, we'll gently understand what's driving the anxiety and find practical, lasting ways to ease it. There's no single \"right\" approach — I tailor it to you. For many people I draw on ",
        },
        { text: "counselling", href: "/services/counselling-psychology" },
        { text: " to work things through, and " },
        { text: "hypnotherapy", href: "/services/hypnotherapy" },
        { text: ", which can be especially calming for an overactive mind. Where it helps, " },
        { text: "expressive arts therapy", href: "/services/expressive-arts-therapy" },
        { text: " offers another gentle way in." },
      ],
    },

    workingTogether: {
      heading: "What working together looks like",
      body: "We go at your pace, in a safe and unhurried space. You share only what you're ready to — there's no pressure, and no judgement.",
    },

    relatedReadingTag: "anxiety",

    cta: {
      heading: "A calmer mind is possible.",
      subhead: 'Reaching out is often the hardest part. A first message can be as simple as "hi."',
    },

    crisisNote:
      "If you're struggling right now, please reach out for immediate support — Tele-MANAS is free and available 24/7: 14416. This page isn't for emergencies.",
  },

  "depression-low-mood": {
    slug: "depression-low-mood",
    seoTitle: "Depression & Low Mood Therapy in Delhi — Gole Market & Online | MindTalk with Aarushi",
    seoDescription:
      "Feeling low, flat, or not yourself? Compassionate therapy for depression and low mood with Aarushi Sabharwal in Gole Market, Delhi & online. You don't have to face it alone.",
    eyebrow: "Depression & Low Mood",
    headline: "When everything feels heavy",
    lead: "When low mood settles in, even small things can feel like too much — and it can be hard to remember that this isn't permanent. If you've been feeling flat, heavy, or just not yourself, you deserve support. Things can feel lighter than they do right now.",
    accent: "soft",

    feelsLike: {
      heading: "What it can feel like",
      intro: "Low mood and depression look different for everyone. Some of this may feel familiar:",
      items: [
        {
          title: "Heaviness",
          description: "Persistent sadness or emptiness.",
          color: "var(--color-sage-50)",
          radius: "50% 50% 46% 54%",
        },
        {
          title: "Low energy",
          description: "Everything feels like an effort.",
          color: "var(--color-clay-100)",
          radius: "52% 48% 50% 50%",
        },
        {
          title: "Losing interest",
          description: "In things you used to enjoy.",
          color: "var(--color-sage-100)",
          radius: "48% 52% 55% 45%",
        },
        {
          title: "Feeling flat",
          description: "Numb, or disconnected.",
          color: "var(--color-sage-50)",
          radius: "54% 46% 48% 52%",
        },
        {
          title: "Sleep changes",
          description: "Trouble sleeping, or sleeping too much.",
          color: "var(--color-clay-100)",
          radius: "50% 50% 45% 55%",
        },
        {
          title: "Being hard on yourself",
          description: "Feeling like you're “not enough.”",
          color: "var(--color-sage-100)",
          radius: "50% 50% 48% 52%/48% 52% 50% 50%",
        },
      ],
      closing: "If this has been going on for a while, it's worth reaching out. You don't have to wait until it's “bad enough.”",
    },

    reassurance: {
      heading: "You don't have to carry this alone",
      body: "Depression can make reaching out feel pointless — but support genuinely helps, and you don't have to find your way through it by yourself. Small steps, taken with someone alongside you, add up.",
    },

    howICanHelp: {
      heading: "How I can help",
      paragraph: [
        {
          text: "Together, we'll make gentle sense of what you're feeling and find ways to move toward feeling more like yourself — at a pace that never overwhelms. I often work through ",
        },
        { text: "counselling", href: "/services/counselling-psychology" },
        { text: ", and where it helps, draw on " },
        { text: "hypnotherapy", href: "/services/hypnotherapy" },
        { text: " or " },
        { text: "expressive arts therapy", href: "/services/expressive-arts-therapy" },
        { text: " — especially when feelings are hard to put into words." },
      ],
    },

    workingTogether: {
      heading: "What working together looks like",
      body: "No pressure, no rush, no judgement — just a warm, steady space, and support shaped around you.",
    },

    relatedReadingTag: "depression",

    cta: {
      heading: "You don't have to feel this way forever.",
      subhead: 'Reaching out is a brave first step. A first message can be as simple as "hi."',
    },

    crisisNote:
      "If you're struggling right now, please reach out for immediate support — Tele-MANAS is free and available 24/7: 14416. This page isn't for emergencies.",
  },

  "trauma-ptsd": {
    slug: "trauma-ptsd",
    seoTitle: "Trauma & PTSD Therapy in Delhi — Gentle, Paced Support | MindTalk with Aarushi",
    seoDescription:
      "Compassionate, paced trauma and PTSD therapy with Aarushi Sabharwal in Gole Market, Delhi & online. Heal at your own pace, in a safe space — you're in control throughout.",
    eyebrow: "Trauma & PTSD",
    headline: "Healing, gently and at your pace",
    lead: "When something painful stays with you — in your thoughts, your body, your reactions — it can feel like part of you is still living it. Trauma support isn't about reliving what happened. It's about helping you feel safe, steady, and free of its grip, at a pace that's always yours.",
    accent: "calm",

    feelsLike: {
      heading: "What it can feel like",
      intro: "Trauma can show up long after the event, in many forms:",
      items: [
        {
          title: "Intrusive memories",
          description: "Flashbacks, or nightmares.",
          color: "var(--color-clay-100)",
          radius: "50% 50% 46% 54%",
        },
        {
          title: "Feeling unsafe",
          description: "On edge, or easily startled.",
          color: "var(--color-sage-50)",
          radius: "52% 48% 50% 50%",
        },
        {
          title: "Avoidance",
          description: "Steering clear of reminders.",
          color: "var(--color-sage-100)",
          radius: "48% 52% 55% 45%",
        },
        {
          title: "Feeling numb",
          description: "Disconnected, or “not here.”",
          color: "var(--color-clay-100)",
          radius: "54% 46% 48% 52%",
        },
        {
          title: "Trust is hard",
          description: "Or feeling close to others.",
          color: "var(--color-sage-50)",
          radius: "50% 50% 45% 55%",
        },
        {
          title: "Big reactions",
          description: "That feel bigger than the situation.",
          color: "var(--color-sage-100)",
          radius: "50% 50% 48% 52%/48% 52% 50% 50%",
        },
      ],
      closing:
        "If any of this resonates, please know: these are normal responses to abnormal experiences, and healing is possible.",
    },

    reassurance: {
      heading: "You don't have to face it alone",
      body: "You never have to go back through the details before you're ready — and you may not need to at all. Trauma work moves at your pace, always with your safety first. Reaching out, when you're ready, is a courageous step.",
    },

    howICanHelp: {
      heading: "How I can help",
      paragraph: [
        {
          text: "I offer a safe, unhurried space to work through what you've carried — gently, and never faster than feels right. I draw on ",
        },
        { text: "counselling", href: "/services/counselling-psychology" },
        { text: " for steady, supportive space, and " },
        { text: "expressive arts therapy", href: "/services/expressive-arts-therapy" },
        { text: " can be especially helpful for feelings that are hard to say out loud. Where suitable, " },
        { text: "hypnotherapy", href: "/services/hypnotherapy" },
        { text: " can support calm and grounding." },
      ],
    },

    workingTogether: {
      heading: "What working together looks like",
      body: "You stay in control the whole way — how much you share, how fast we go. Safety and trust come first, always.",
    },

    relatedReadingTag: "trauma",

    cta: {
      heading: "You deserve to feel safe again.",
      subhead: 'There\'s no pressure and no rush. A first message can be as simple as "hi."',
    },

    crisisNote:
      "If you're struggling right now, please reach out for immediate support — Tele-MANAS is free and available 24/7: 14416. This page isn't for emergencies.",
  },

  "relationships-family": {
    slug: "relationships-family",
    seoTitle: "Relationship & Family Therapy in Delhi — Gole Market & Online | MindTalk with Aarushi",
    seoDescription:
      "Support for relationship and family difficulties with Aarushi Sabharwal, Counselling Psychologist in Gole Market, Delhi & online. Understand patterns, communicate better, feel closer.",
    eyebrow: "Relationships & Family",
    headline: "When the people closest to us are the hardest",
    lead: "Our relationships shape so much of how we feel — and when they're strained, it touches everything. Whether it's conflict, distance, loneliness, or patterns that keep repeating, you don't have to make sense of it alone.",
    accent: "warm",

    feelsLike: {
      heading: "What it can feel like",
      intro: "Relationship and family struggles take many forms:",
      items: [
        {
          title: "Recurring conflict",
          description: "Arguments that go nowhere.",
          color: "var(--color-clay-200)",
          radius: "50% 50% 46% 54%",
        },
        {
          title: "Feeling unheard",
          description: "Distant, or disconnected.",
          color: "var(--color-clay-100)",
          radius: "52% 48% 50% 50%",
        },
        {
          title: "Loneliness",
          description: "Even around other people.",
          color: "var(--color-sage-50)",
          radius: "48% 52% 55% 45%",
        },
        {
          title: "Repeating patterns",
          description: "From the past, in the present.",
          color: "var(--color-clay-200)",
          radius: "54% 46% 48% 52%",
        },
        {
          title: "Boundaries",
          description: "Hard to set, or hard to trust.",
          color: "var(--color-sage-100)",
          radius: "50% 50% 45% 55%",
        },
        {
          title: "Family expectations",
          description: "Roles, or change to navigate.",
          color: "var(--color-clay-100)",
          radius: "50% 50% 48% 52%/48% 52% 50% 50%",
        },
      ],
      closing: "These difficulties are common, and they don't mean you've failed. They mean something's worth understanding.",
    },

    reassurance: {
      heading: "You don't have to untangle it alone",
      body: "Relationship patterns can feel stuck — but with support, they can shift. Understanding why things play out the way they do is often the first step to changing them. Reaching out is a good, hopeful move.",
    },

    howICanHelp: {
      heading: "How I can help",
      paragraph: [
        {
          text: "Together, we'll explore what's happening beneath the surface — the patterns, needs, and feelings involved — and find healthier ways to relate and communicate. I work primarily through ",
        },
        { text: "counselling", href: "/services/counselling-psychology" },
        { text: ", and where it helps, draw on " },
        { text: "expressive arts therapy", href: "/services/expressive-arts-therapy" },
        { text: " or " },
        { text: "hypnotherapy", href: "/services/hypnotherapy" },
        { text: " to support the deeper work." },
      ],
    },

    workingTogether: {
      heading: "What working together looks like",
      body: "A warm, non-judgemental space to understand yourself and your relationships more clearly — at your pace, with no pressure.",
    },

    relatedReadingTag: "relationships",

    cta: {
      heading: "Things can feel closer again.",
      subhead: 'Reaching out is a good first step. A first message can be as simple as "hi."',
    },

    crisisNote:
      "If you're struggling right now, please reach out for immediate support — Tele-MANAS is free and available 24/7: 14416. This page isn't for emergencies.",
  },

  "work-stress-burnout": {
    slug: "work-stress-burnout",
    seoTitle: "Work Stress & Burnout Therapy in Delhi — Gole Market & Online | MindTalk with Aarushi",
    seoDescription:
      "Feeling burnt out or overwhelmed by work? Supportive therapy with Aarushi Sabharwal in Gole Market, central Delhi & online. Find balance, calm, and yourself again.",
    eyebrow: "Work Stress & Burnout",
    headline: "When you're running on empty",
    lead: "When work takes more than you have to give, exhaustion stops being just tiredness — it starts to touch everything. If you feel drained, overwhelmed, or like you've lost yourself in the pressure, that's worth taking seriously. You can find your footing again.",
    accent: "warm",

    feelsLike: {
      heading: "What it can feel like",
      intro: "Burnout and chronic work stress build up quietly. You might notice:",
      items: [
        {
          title: "Constant exhaustion",
          description: "That rest doesn't fix.",
          color: "var(--color-clay-200)",
          radius: "50% 50% 46% 54%",
        },
        {
          title: "Work dread",
          description: "Sunday-night anxiety.",
          color: "var(--color-clay-100)",
          radius: "52% 48% 50% 50%",
        },
        {
          title: "Feeling detached",
          description: "Going through the motions.",
          color: "var(--color-sage-50)",
          radius: "48% 52% 55% 45%",
        },
        {
          title: "Can't switch off",
          description: "Difficulty concentrating, too.",
          color: "var(--color-clay-200)",
          radius: "54% 46% 48% 52%",
        },
        {
          title: "Tension",
          description: "Irritability, trouble sleeping.",
          color: "var(--color-sage-100)",
          radius: "50% 50% 45% 55%",
        },
        {
          title: "Losing yourself",
          description: "What you enjoy outside work fades.",
          color: "var(--color-clay-100)",
          radius: "50% 50% 48% 52%/48% 52% 50% 50%",
        },
      ],
      closing: "This isn't weakness or a lack of resilience. It's a sign you've been running too hard for too long.",
    },

    reassurance: {
      heading: "You don't have to push through alone",
      body: "Burnout rarely fixes itself by pushing harder — that's usually what caused it. With support, you can find sustainable ways to work and live, and reconnect with yourself. Reaching out is a smart, self-respecting step.",
    },

    howICanHelp: {
      heading: "How I can help",
      paragraph: [
        {
          text: "Together, we'll look at what's driving the burnout — the pressures, patterns, and boundaries involved — and find realistic ways to ease it and protect your wellbeing. I work through ",
        },
        { text: "counselling", href: "/services/counselling-psychology" },
        { text: ", and " },
        { text: "hypnotherapy", href: "/services/hypnotherapy" },
        { text: " can be especially good for switching off an overstretched mind. " },
        { text: "Expressive arts therapy", href: "/services/expressive-arts-therapy" },
        { text: " offers another restorative way in." },
      ],
    },

    workingTogether: {
      heading: "What working together looks like",
      body: "A calm, judgement-free space to step back, breathe, and figure out what needs to change — at your pace.",
    },

    relatedReadingTag: "burnout",

    cta: {
      heading: "You deserve to feel like yourself again.",
      subhead: 'Reaching out is a good first step. A first message can be as simple as "hi."',
    },

    crisisNote:
      "If you're struggling right now, please reach out for immediate support — Tele-MANAS is free and available 24/7: 14416. This page isn't for emergencies.",
  },
};
