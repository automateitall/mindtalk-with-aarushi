// Content for the reusable service-page template (src/pages/services/[slug].astro).
// Add a new key here + the template picks it up automatically via getStaticPaths.
// Keep each entry's shape identical so future pages can reuse the same template.

import { site } from "./site";

interface ConcernItem {
  title: string;
  description: string;
  color: string;
  radius?: string;
}

interface MythItem {
  pre: string;
  strong: string;
  post: string;
}

// One paragraph = one array of segments. Plain text is `{ text }`; an inline
// link is `{ text, href }`; a muted "pending confirmation" aside (rendered
// as " (…)") is `{ text, emphasis: "pending" }`.
export interface TextSegment {
  text: string;
  href?: string;
  emphasis?: "pending";
}

// Per-page decorative-blob lean, per the Expressive Arts / Counselling
// design notes: "balanced" is Hypnotherapy's original treatment, "warm"
// leans clay/terracotta and a touch more expressive, "calm" is more
// restrained and sage/neutral-leaning.
export type HeroAccent = "balanced" | "warm" | "calm";

export interface ServiceContent {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  headline: string;
  lead: string;
  heroAccent: HeroAccent;

  whatItIs: {
    heading: string;
    intro: string;
    // Boxed myth-vs-reality card (Hypnotherapy, Expressive Arts).
    mythsIntro?: string;
    myths?: MythItem[];
    // Prose-led plain list, no box, no bold emphasis (Counselling).
    notesIntro?: string;
    notes?: string[];
    closing: string;
  };

  whoItHelps: {
    heading: string;
    intro: string;
    items: ConcernItem[];
    // Optional 7th catch-all tile, styled like the homepage's "Something else?" card.
    catchAll?: { title: string; description: string };
    closing: string;
    crisisCaveat: string;
  };

  howItHelps: {
    heading: string;
    intro: string;
    points: string[];
    closing: string;
  };

  workingWithMe: {
    heading: string;
    paragraphs: TextSegment[][];
  };

  cta: {
    heading: string;
    subhead: string;
  };

  // Short reminder at the foot of the page, above the full sitewide footer
  // (which already carries the full crisis block via CrisisNote).
  footCrisisNote: string;
}

const teleManasName = site.crisis.teleManas.label.split(" (")[0];
const teleManasNumber = site.crisis.teleManas.numbers[0];
const footCrisisNote = `This page isn't for emergencies. If you need urgent support, ${teleManasName} is free and available 24/7: ${teleManasNumber}.`;

export const services: Record<string, ServiceContent> = {
  hypnotherapy: {
    slug: "hypnotherapy",
    seoTitle: "Hypnotherapy in Delhi — Gentle Support for Anxiety & Change | MindTalk with Aarushi",
    seoDescription:
      "Clinical hypnotherapy with Aarushi Sabharwal in Gole Market, Delhi & online. A calm, safe, evidence-informed way to ease anxiety and shift stuck patterns — you stay in control throughout.",
    eyebrow: "Hypnotherapy",
    headline: "A calmer mind, gently guided",
    lead: "Hypnotherapy is one of the most misunderstood forms of support — and one of the most gentle. It isn't stage tricks, mind control, or being “put under.” It's a focused, deeply relaxed state that helps you access calm and make changes that feel out of reach when your mind is racing. You stay aware, in control, and able to stop at any point.",
    heroAccent: "balanced",

    whatItIs: {
      heading: "What hypnotherapy really is",
      intro:
        "Hypnotherapy uses guided relaxation to bring you into a naturally focused, calm state — similar to being lost in a book or a daydream. In that relaxed state, the mind becomes more open to helpful suggestions and new ways of thinking.",
      mythsIntro: "Let me clear up what it isn't, because the myths put a lot of people off:",
      myths: [
        { pre: "You're ", strong: "not", post: " unconscious or asleep — you're relaxed but fully aware." },
        { pre: "You ", strong: "can't", post: " be made to do anything against your will." },
        { pre: "You ", strong: "won't", post: " reveal secrets or lose control." },
        { pre: "You'll ", strong: "remember", post: " the session afterwards." },
      ],
      closing:
        "Think of it less as something done to you, and more as a calm state I help you reach — so you can work on things with less of the usual mental noise in the way.",
    },

    whoItHelps: {
      heading: "Who it can help",
      intro: "Hypnotherapy may be a good fit if you're dealing with:",
      items: [
        {
          title: "Anxiety & overthinking",
          description: "A mind that won't switch off.",
          color: "var(--color-clay-100)",
          radius: "50% 50% 46% 54%",
        },
        {
          title: "Stress & tension",
          description: "Tension that sits in the body.",
          color: "var(--color-sage-50)",
          radius: "52% 48% 50% 50%",
        },
        {
          title: "Unhelpful patterns",
          description: "Habits and patterns you'd like to shift.",
          color: "var(--color-sage-100)",
          radius: "48% 52% 55% 45%",
        },
        {
          title: "Low confidence",
          description: "Self-doubt that holds you back.",
          color: "var(--color-clay-100)",
          radius: "54% 46% 48% 52%",
        },
        {
          title: "Sleep & relaxation",
          description: "Trouble sleeping or relaxing.",
          color: "var(--color-sage-50)",
          radius: "50% 50% 45% 55%",
        },
        {
          title: "Feeling stuck",
          description: "When talking alone hasn't resolved it.",
          color: "var(--color-sage-100)",
          radius: "50% 50% 48% 52%/48% 52% 50% 50%",
        },
      ],
      closing:
        "It's especially helpful if you feel you understand your problem intellectually, but still can't seem to change how you feel or react. Hypnotherapy works a little beneath that thinking layer.",
      crisisCaveat:
        "If you're in crisis or dealing with severe symptoms, hypnotherapy isn't a first step — reaching out for immediate support is. See the crisis resources at the bottom of this page.",
    },

    howItHelps: {
      heading: "How it helps",
      intro: "When the body and mind are deeply relaxed, a few useful things happen:",
      points: [
        "The constant mental chatter quietens, so you can think more clearly.",
        "You can approach difficult feelings from a calmer, safer distance.",
        "New, healthier responses become easier to absorb and rehearse.",
        "The relaxation itself is restorative — many people leave feeling lighter.",
      ],
      closing:
        "It's not magic, and it's not instant. It's a gentle, repeatable way to work with your mind rather than fighting it — often alongside talk-based counselling, so the two support each other.",
    },

    workingWithMe: {
      heading: "Working with me",
      paragraphs: [
        [
          { text: "As a trained hypnotherapist" },
          { text: "CHI-USA — pending confirmation", emphasis: "pending" },
          { text: " and " },
          { text: "Counselling Psychologist", href: "/services/counselling-psychology" },
          {
            text: ", I combine hypnotherapy with warm, grounded counselling — so you're never just handed a technique. Every session is paced around you, in a safe and unhurried space, and you're always in control of how far and how fast we go.",
          },
        ],
        [
          {
            text: "I'll explain everything before we begin, answer any worries (this is new for most people), and make sure you feel comfortable at each step. We can meet in person in Gole Market, New Delhi, or online across India.",
          },
        ],
      ],
    },

    cta: {
      heading: "Curious whether hypnotherapy could help you?",
      subhead:
        "There's no pressure — a quick message is a good place to start, and I'm happy to answer questions before you decide anything.",
    },

    footCrisisNote,
  },

  "counselling-psychology": {
    slug: "counselling-psychology",
    seoTitle: "Counselling Psychology in Delhi — Talk Therapy with Aarushi Sabharwal | MindTalk",
    seoDescription:
      "Warm, professional counselling with Aarushi Sabharwal, Counselling Psychologist in Gole Market, Delhi & online. A safe space to talk through anxiety, low mood, relationships and more.",
    eyebrow: "Counselling Psychology",
    headline: "A space to talk, and be truly heard",
    lead: "Sometimes what helps most is simply being heard — properly, without judgement, by someone trained to help you make sense of it all. Counselling is the heart of what I do: a warm, confidential space to talk through what's weighing on you, understand it more clearly, and find gentle, practical ways forward.",
    heroAccent: "calm",

    whatItIs: {
      heading: "What counselling really is",
      intro:
        "Counselling is a collaborative, talk-based process. Together we explore what's going on for you — your thoughts, feelings, patterns, and the things that feel stuck — in a space that's safe, private, and free of judgement.",
      notesIntro: "A few things worth knowing if you've never been to counselling:",
      notes: [
        "You don't need to have it all figured out, or know where to start.",
        "You share only what you're ready to — nothing is forced.",
        "It's confidential, and it's your space.",
        "It's not about being “told what to do” — it's about working things through together.",
      ],
      closing:
        "Think of it as a steady, supportive place to untangle what's on your mind, at a pace that feels right for you.",
    },

    whoItHelps: {
      heading: "Who it can help",
      intro: "Counselling can help with a wide range of things, including:",
      items: [
        {
          title: "Anxiety & overthinking",
          description: "Worry that won't settle.",
          color: "var(--color-clay-100)",
          radius: "50% 50% 46% 54%",
        },
        {
          title: "Low mood",
          description: "Sadness, or feeling not quite yourself.",
          color: "var(--color-sage-50)",
          radius: "52% 48% 50% 50%",
        },
        {
          title: "Relationships & family",
          description: "Difficulties that weigh on you.",
          color: "var(--color-sage-100)",
          radius: "48% 52% 55% 45%",
        },
        {
          title: "Stress & burnout",
          description: "Feeling overwhelmed.",
          color: "var(--color-clay-100)",
          radius: "54% 46% 48% 52%",
        },
        {
          title: "Life transitions",
          description: "Loss and change.",
          color: "var(--color-sage-50)",
          radius: "50% 50% 45% 55%",
        },
        {
          title: "Low self-worth",
          description: "Confidence that's taken a hit.",
          color: "var(--color-sage-100)",
          radius: "50% 50% 48% 52%/48% 52% 50% 50%",
        },
      ],
      catchAll: {
        title: "Or simply needing space to think",
        description: "With someone alongside you.",
      },
      closing:
        "You don't need a diagnosis or a “big enough” reason to come. If something's weighing on you, that's reason enough.",
      crisisCaveat:
        "If you're in crisis or dealing with severe symptoms, please reach out for immediate support first — see the crisis resources at the bottom of this page.",
    },

    howItHelps: {
      heading: "How it helps",
      intro: "Talking things through with a trained, caring professional can help you:",
      points: [
        "Feel genuinely heard and less alone with it.",
        "Understand your feelings and patterns more clearly.",
        "Find practical ways to cope and move forward.",
        "Build confidence, steadiness, and self-understanding over time.",
      ],
      closing:
        "It's not about quick fixes. It's a supportive relationship that helps you feel more like yourself — gradually, and at your own pace.",
    },

    workingWithMe: {
      heading: "Working with me",
      paragraphs: [
        [
          { text: "As a Counselling Psychologist" },
          {
            text: "RCI registration / core degree — pending confirmation",
            emphasis: "pending",
          },
          {
            text: ", I offer warm, grounded, judgement-free support tailored to you. No two people are the same, so I don't work from a script — I listen, we go at your pace, and together we find what actually helps.",
          },
        ],
        [
          { text: "Where it's useful, I can also draw on " },
          { text: "hypnotherapy", href: "/services/hypnotherapy" },
          { text: " and " },
          { text: "expressive arts therapy", href: "/services/expressive-arts-therapy" },
          {
            text: " alongside our conversations — so we're never limited to a single approach. We can meet in person in Gole Market, New Delhi, or online across India.",
          },
        ],
      ],
    },

    cta: {
      heading: "Whenever you're ready, I'm here.",
      subhead:
        'Reaching out is often the hardest part. A first message can be as simple as "hi" — no pressure, no commitment.',
    },

    footCrisisNote,
  },

  "expressive-arts-therapy": {
    slug: "expressive-arts-therapy",
    seoTitle: "Expressive Arts Therapy in Delhi — Healing Beyond Words | MindTalk with Aarushi",
    seoDescription:
      "Expressive arts therapy with Aarushi Sabharwal in Gole Market, Delhi & online. A gentle, creative way to process feelings that are hard to put into words. No artistic skill needed.",
    eyebrow: "Expressive Arts Therapy",
    headline: "When words aren't enough",
    lead: "Some feelings are hard to talk about — or hard to reach through talking at all. Expressive arts therapy offers another way in: using creativity, movement, imagery, and play to explore what's going on inside, gently and at your own pace. And no, you don't need to be “good at art.” This isn't about making something beautiful. It's about expression, not skill.",
    heroAccent: "warm",

    whatItIs: {
      heading: "What expressive arts therapy really is",
      intro:
        "Expressive arts therapy uses creative processes — drawing, colour, movement, sound, writing, imagery — as a way to explore and express feelings that can be difficult to put into words. The focus is never on the finished product; it's on what the process opens up.",
      mythsIntro: "Let me clear up a common worry, because it stops a lot of people from trying it:",
      myths: [
        { pre: "You ", strong: "don't", post: " need any artistic talent or experience." },
        { pre: "It's ", strong: "not", post: " an art class, and nothing you make is judged." },
        { pre: "There's ", strong: "no", post: " “right” way to do it." },
        { pre: "You're always ", strong: "in charge", post: " of what you explore and share." },
      ],
      closing:
        "For many people, working this way reaches something that talking alone can't — especially when feelings are tangled, stuck, or hard to name.",
    },

    whoItHelps: {
      heading: "Who it can help",
      intro: "Expressive arts therapy may be a good fit if you:",
      items: [
        {
          title: "Struggle to find words",
          description: "For feelings that are hard to put into words.",
          color: "var(--color-clay-200)",
          radius: "50% 50% 46% 54%",
        },
        {
          title: "Feel stuck talking",
          description: "In circles about the same things.",
          color: "var(--color-clay-100)",
          radius: "52% 48% 50% 50%",
        },
        {
          title: "Grief & change",
          description: "Processing difficult experiences.",
          color: "var(--color-sage-50)",
          radius: "48% 52% 55% 45%",
        },
        {
          title: "Feeling numb",
          description: "Overwhelmed or disconnected.",
          color: "var(--color-clay-200)",
          radius: "54% 46% 48% 52%",
        },
        {
          title: "Want a gentler way in",
          description: "Less direct than talking alone.",
          color: "var(--color-sage-100)",
          radius: "50% 50% 45% 55%",
        },
        {
          title: "Feel creatively drawn",
          description: "To a more exploratory kind of support.",
          color: "var(--color-clay-100)",
          radius: "50% 50% 48% 52%/48% 52% 50% 50%",
        },
      ],
      closing:
        "It can be especially helpful for feelings that live underneath words — the ones that are easier to show than to say.",
      crisisCaveat:
        "If you're in crisis or dealing with severe symptoms, this isn't a first step — reaching out for immediate support is. See the crisis resources at the bottom of this page.",
    },

    howItHelps: {
      heading: "How it helps",
      intro: "Working creatively can open up a few things that talking alone sometimes can't:",
      points: [
        "Feelings that are hard to name can be expressed and externalised.",
        "Difficult emotions can be approached safely, at a comfortable distance.",
        "The process itself can be calming, grounding, and even restorative.",
        "New insight often surfaces gently, without having to force it into words.",
      ],
      closing:
        "It's not about analysing your art or “getting it right.” It's a softer, more intuitive path — one that meets you where words run out.",
    },

    workingWithMe: {
      heading: "Working with me",
      paragraphs: [
        [
          { text: "As an Expressive Arts Therapist" },
          { text: "UNESCO-CIDS — pending confirmation", emphasis: "pending" },
          { text: " and " },
          { text: "Counselling Psychologist", href: "/services/counselling-psychology" },
          {
            text: ", I hold a safe, unhurried, judgement-free space for you to explore in whatever way feels right. You don't need to prepare anything or be creative “on demand” — I'll guide you gently, and you stay in control of how far you go.",
          },
        ],
        [
          {
            text: "I often weave expressive arts together with talk-based counselling, so we can move between words and creativity as suits you. We can meet in person in Gole Market, New Delhi, or online across India.",
          },
        ],
      ],
    },

    cta: {
      heading: "Curious whether this way of working might suit you?",
      subhead:
        "There's no pressure, and no art skills required — a quick message is a good place to start, and I'm happy to answer any questions first.",
    },

    footCrisisNote,
  },
};
