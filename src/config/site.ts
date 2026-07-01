// Central place for contact details & facts that must stay byte-identical
// with Google Business Profile / Practo (NAP consistency — see Build Spec §SEO).
//
// PLACEHOLDER VALUES — swap before launch:
//   - whatsappNumber / callNumber: placeholder Indian mobile number.
//   - credentials: RCI registration number + degree are not yet confirmed
//     by Aarushi (see Website Plan §"Still open"). Do not invent these.

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

  address: {
    line1: "Doctor Lane, Gole Market",
    line2: "New Delhi 110001",
    short: "Gole Market, New Delhi",
  },

  // PLACEHOLDER — replace with Aarushi's real numbers/inbox before launch.
  whatsappNumber: "919000000000",
  callNumber: "+919000000000",
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

  navLinks: [
    { href: "#concerns", label: "How I help" },
    { href: "#about", label: "About" },
    { href: "#process", label: "How it works" },
    { href: "#fees", label: "Fees" },
  ],
} as const;

export function waLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:${site.callNumber}`;
}
