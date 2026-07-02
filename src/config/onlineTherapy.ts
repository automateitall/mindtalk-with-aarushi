// Content for the Online Therapy page (src/pages/online-therapy.astro).
import { site } from "./site";

export const onlineTherapy = {
  seoTitle: "Online Therapy in India — Video Counselling with Aarushi Sabharwal | MindTalk",
  seoDescription:
    "Warm, professional online therapy with Aarushi Sabharwal — video counselling from anywhere in India. Same care as in-person, from the comfort of your own space.",
  eyebrow: "Online Therapy",
  headline: "Support from wherever you are",
  lead: "You don't have to be in the room to be truly supported. Online therapy offers the same warmth, care, and confidentiality as meeting in person — from the comfort and privacy of your own space, anywhere in India.",

  howItWorks: {
    heading: "How online therapy works",
    body: "It's simpler than you might think. We meet by video call at your scheduled time, just as we would in person — you find a private, comfortable spot, and we talk. All you need is a phone, tablet, or computer and a stable internet connection. I'll share everything you need when we book.",
  },

  whoItsFor: {
    heading: "Who it's good for",
    intro: "Online therapy can be a good fit if you:",
    items: [
      {
        title: "Live outside Delhi",
        description: "Or anywhere travel is difficult.",
        color: "var(--color-clay-100)",
        radius: "50% 50% 46% 54%",
      },
      {
        title: "Have a busy schedule",
        description: "And value the convenience.",
        color: "var(--color-sage-50)",
        radius: "52% 48% 50% 50%",
      },
      {
        title: "Prefer your own space",
        description: "Feel more comfortable opening up from home.",
        color: "var(--color-sage-100)",
        radius: "48% 52% 55% 45%",
      },
      {
        title: "Value privacy",
        description: "Prefer not visiting a clinic in person.",
        color: "var(--color-clay-100)",
        radius: "54% 46% 48% 52%",
      },
      {
        title: "Want convenience",
        description: "Simply find it easier to fit into your life.",
        color: "var(--color-sage-50)",
        radius: "50% 50% 45% 55%",
      },
    ],
    closing:
      "Many people find that once they settle in, an online session feels just as personal and safe as being in the same room.",
  },

  effectiveness: {
    heading: "Is it as effective as in person?",
    body: "For most people and most concerns, yes. Research and experience both show online therapy can be just as effective as face-to-face — what matters most is the relationship and the work we do together, and that carries across a screen. If in-person ever feels better for you, we can switch anytime.",
  },

  privateSpace: {
    heading: "A private, comfortable space",
    body: "The one thing worth arranging is somewhere you won't be interrupted, where you feel free to speak openly. Beyond that, there's nothing to prepare — just show up as you are.",
  },

  howIWorkOnline: {
    heading: "How I work online",
    body: `I bring the same warmth, pace, and care to online sessions as I do in person. We can also mix the two — some weeks in person, some online — whatever suits your life. Sessions are 50 minutes and ${site.fees.online.price}, the same as in person.`,
  },

  cta: {
    heading: "Ready to talk, from wherever you are?",
    subhead: "Reaching out is the first step, and it can be as simple as a message. I'm happy to answer any questions first.",
  },
};
