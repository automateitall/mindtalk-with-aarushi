// Central place for contact details & facts that must stay byte-identical
// with Google Business Profile / Practo (NAP consistency — see Build Spec §SEO).
//
// Still PLACEHOLDER — swap before launch:
//   - credentials: RCI registration number + degree are not yet confirmed
//     by Aarushi (see Website Plan §"Still open"). Do not invent these.

const experienceYears = "3+";

export const site = {
  name: "MindTalk with Aarushi",
  practitioner: "Aarushi Sabharwal",
  roles: [
    "Counselling Psychologist",
    "Hypnotherapist (CHI-USA)",
    "Expressive Arts Therapist (UNESCO-CIDS)",
  ],
  // Short badge labels for compact UI (hero trust strip, nav, etc).
  roleBadges: ["Counselling Psychologist", "Hypnotherapist", "Expressive Arts Therapist"],
  availability: "Taking new clients this week",
  experienceYears,

  address: {
    line1: "Doctor Lane, Gole Market",
    line2: "New Delhi 110001",
    short: "Gole Market, New Delhi",
  },

  // Confirmed number (Hypnotherapy Page Copy notes, "Notes / open items").
  whatsappNumber: "919717078394",
  callNumber: "+919717078394",
  // PLACEHOLDER — swap for Aarushi's real inbox before launch.
  email: "hello@mindtalkwitharushi.example",
  whatsappMessage: "Hi Aarushi, I'd like to book a session…",

  rating: {
    value: "4.7",
    reviewCount: "120+",
  },

  fees: {
    intro: "50-minute sessions, no hidden costs. Choose whatever feels most comfortable for you.",
    inPerson: { label: "In-person", price: "₹1,500", note: "Gole Market, New Delhi · 50 min" },
    online: { label: "Online", price: "₹1,200", note: "Video, anywhere in India · 50 min" },
  },

  // Credentials block for hero/about — RCI number & degree pending (Website Plan, "Still open" #1).
  credentialsPending: true,

  concerns: [
    {
      title: "Anxiety & worry",
      description: "Racing thoughts, tension, trouble switching off.",
      color: "var(--color-clay-100)",
      radius: "50% 50% 46% 54%",
    },
    {
      title: "Low mood",
      description: "Heaviness, low motivation, not feeling yourself.",
      color: "var(--color-sage-50)",
      radius: "52% 48% 50% 50%",
    },
    {
      title: "Relationships",
      description: "Conflict, loneliness, patterns that keep repeating.",
      color: "var(--color-sage-100)",
      radius: "48% 52% 55% 45%",
    },
    {
      title: "Stress & burnout",
      description: "Exhausted, overstretched, running on empty.",
      color: "var(--color-clay-100)",
      radius: "54% 46% 48% 52%",
    },
    {
      title: "Trauma",
      description: "Gentle, paced support — no need to relive it all.",
      color: "var(--color-sage-50)",
      radius: "50% 50% 45% 55%",
    },
  ],

  testimonials: [
    {
      quote:
        "I was so nervous to start. Aarushi made it feel safe from minute one. I finally feel like myself again.",
      attribution: "— Client, Delhi · shared with permission",
    },
    {
      quote: "Warm, patient and genuinely kind. I never once felt judged.",
      attribution: "— Client, online · shared with permission",
    },
    {
      quote:
        "She gave me practical tools that actually helped, at a pace that never felt overwhelming.",
      attribution: "— Client, Delhi · shared with permission",
    },
  ],

  crisis: {
    teleManas: { label: "Tele-MANAS (national, 24/7, free)", numbers: ["14416", "1-800-891-4416"] },
    vandrevala: { label: "Vandrevala Foundation (24/7)", number: "1860-2662-345", note: "verify before publishing" },
    emergency: { label: "Emergency", number: "112" },
  },

  about: {
    seoTitle: "About Aarushi Sabharwal — Counselling Psychologist in Gole Market, Delhi",
    seoDescription:
      "Meet Aarushi Sabharwal — Counselling Psychologist, Hypnotherapist & Expressive Arts Therapist offering warm, personalised therapy in central Delhi and online.",
    eyebrow: "About Aarushi",
    headline: "Warm, judgement-free support — at your pace",
    lead: "I'm Aarushi Sabharwal, a Counselling Psychologist, Hypnotherapist, and Expressive Arts Therapist based in Gole Market, central Delhi. I work with people who are feeling anxious, low, overwhelmed, or simply stuck — offering a calm, steady space to be heard, and gentle, practical ways forward.",

    approach: [
      "Reaching out for support isn't easy, and I never take it lightly when someone does. My work is built on one simple idea: you should feel safe enough to be honest. No judgement, no rushing, no pressure to share more than you're ready to.",
      "Every person I work with is different, so therapy with me isn't one-size-fits-all. Some people want practical tools to manage anxiety or stress. Others need space to make sense of what they're feeling. Together, we find an approach that fits you — not the other way around.",
    ],

    modalitiesIntro:
      "Alongside talk-based counselling, I draw on two approaches that let us work in more than just words:",
    modalitiesOutro:
      "Having these alongside conventional counselling means we're never limited to one path. We use whatever helps you move forward.",
    modalities: [
      {
        title: "Talk-based counselling",
        description: "A steady, conversational space to talk through what's going on — at your pace.",
        color: "var(--color-clay-100)",
        radius: "50% 50% 46% 54%",
        href: "/services/counselling-psychology",
      },
      {
        title: "Hypnotherapy",
        description:
          "A gentle, relaxed state that can help ease anxiety, shift unhelpful patterns, and access calm that's hard to reach when the mind is racing.",
        color: "var(--color-sage-50)",
        radius: "52% 48% 50% 50%",
        href: "/services/hypnotherapy",
      },
      {
        title: "Expressive arts therapy",
        description:
          'Using creativity as a way in, for the things that are hard to put into words. You don’t need to be "artistic" — it’s about expression, not skill.',
        color: "var(--color-sage-100)",
        radius: "48% 52% 55% 45%",
        href: "/services/expressive-arts-therapy",
      },
    ],

    // Credentials still pending confirmation from Aarushi are marked with
    // `pending` — rendered as a clearly-flagged placeholder, never invented.
    credentials: [
      { label: "Counselling Psychologist" },
      { label: "Certified Hypnotherapist", note: "CHI-USA — pending confirmation" },
      { label: "Expressive Arts Therapist", note: "UNESCO-CIDS — pending confirmation" },
      {
        label: `${experienceYears} years supporting clients through anxiety, low mood, relationships and life transitions`,
      },
      {
        label: "RCI registration & core degree",
        note: "pending confirmation with Aarushi before publishing",
        pending: true,
      },
    ],

    whereHow:
      "I see clients in person at my practice in Gole Market, New Delhi, and online across India — whichever feels more comfortable for you. Sessions are 50 minutes, and we can move at whatever pace feels right.",

    closingSubhead:
      'A first message can be as simple as "hi." No pressure, no commitment — just a starting point.',
  },

  // Root-relative so they resolve correctly from any page, not just "/".
  navLinks: [
    { href: "/#concerns", label: "How I help" },
    { href: "/about", label: "About" },
    { href: "/#process", label: "How it works" },
    { href: "/#fees", label: "Fees" },
  ],
} as const;

export function waLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:${site.callNumber}`;
}
