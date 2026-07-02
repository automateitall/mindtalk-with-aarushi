// Content for the FAQ page (src/pages/faq.astro).
import type { TextSegment } from "./services";

export interface FaqItem {
  question: string;
  answer: TextSegment[];
}

export const faq = {
  seoTitle: "FAQ — Therapy with Aarushi Sabharwal | MindTalk, Gole Market Delhi",
  seoDescription:
    "Common questions about therapy with Aarushi Sabharwal — first sessions, confidentiality, fees, online therapy, and what to expect. In Gole Market, Delhi & online.",
  eyebrow: "Questions & answers",
  headline: "Everything you might be wondering",
  lead: "Reaching out for the first time can feel uncertain, so here are answers to the things people most often ask. If your question isn't here, just message me — I'm happy to help.",

  items: [
    {
      question: "How do I book a session?",
      answer: [
        {
          text: "The easiest way is to message me on WhatsApp or call. We'll have a short, no-pressure chat, find a time that works, and go from there. There's no long form to fill in.",
        },
      ],
    },
    {
      question: "What happens in the first session?",
      answer: [
        {
          text: "Mostly, we talk. I'll ask a little about what's brought you here and what you're hoping for, and you share only what you feel ready to. There's nothing you need to prepare — the first session is really about getting comfortable and seeing if we're a good fit.",
        },
      ],
    },
    {
      question: "How long is a session, and how much does it cost?",
      answer: [{ text: "Sessions are 50 minutes and ₹1,200, whether in person or online." }],
    },
    {
      question: "Is everything I share confidential?",
      answer: [
        {
          text: "Yes. What you share with me stays private. There are rare, legally-defined exceptions where confidentiality may be limited (for example, if there's a serious risk of harm), and I'll always be transparent about those. Your privacy and trust matter deeply to me.",
        },
      ],
    },
    {
      question: "Do you offer online sessions?",
      answer: [
        { text: "Yes — I see clients both in person in Gole Market, central Delhi, and " },
        { text: "online across India by video", href: "/online-therapy" },
        {
          text: ". Many people find online just as helpful, and it's often more convenient.",
        },
      ],
    },
    {
      question: "How many sessions will I need?",
      answer: [
        {
          text: "It's different for everyone — some people come for a few sessions around a specific issue, others for longer, ongoing support. There's no fixed commitment; we'll find what works for you, and you're always free to decide the pace.",
        },
      ],
    },
    {
      question: "What if I don't know where to start, or can't explain what's wrong?",
      answer: [
        {
          text: "That's completely okay, and very common. You don't need the right words or a clear reason. We'll figure it out together — that's part of what therapy is for.",
        },
      ],
    },
    {
      question: "Do you prescribe medication?",
      answer: [
        {
          text: "No — as a Counselling Psychologist, I offer talk-based and therapeutic support, not medication. If medication might help, I can discuss that with you and, where appropriate, suggest seeing a psychiatrist alongside our work.",
        },
      ],
    },
    {
      question: "Can I switch between in-person and online?",
      answer: [
        {
          text: "Yes, absolutely — many people mix the two depending on their week. Whatever's most comfortable for you.",
        },
      ],
    },
    {
      question: "How do I pay?",
      answer: [{ text: "Payment details are shared when you book — it's simple and I'll walk you through it." }],
    },
  ] satisfies FaqItem[],

  cta: {
    heading: "Still have a question?",
    subhead: 'Just ask — there\'s no such thing as a silly question, and a first message can be as simple as "hi."',
  },
};
