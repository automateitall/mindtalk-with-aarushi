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
  // Short badge labels for compact UI (hero trust strip, etc).
  roleBadges: ["Counselling Psychologist", "Hypnotherapist"],

  address: {
    line1: "Doctor Lane, Gole Market",
    line2: "New Delhi 110001",
    short: "Gole Market, New Delhi",
  },

  // PLACEHOLDER — replace with Aarushi's real numbers before launch.
  whatsappNumber: "919000000000",
  callNumber: "+919000000000",
  whatsappMessage: "Hi Aarushi, I'd like to book a session…",

  rating: {
    value: "4.7",
    reviewCount: "120+",
  },

  fees: {
    inPerson: { label: "In-person", price: "₹1,500", note: "Gole Market, New Delhi" },
    online: { label: "Online", price: "₹1,200", note: "Video, anywhere in India" },
  },

  // Credentials block for hero/about — RCI number & degree pending (Website Plan, "Still open" #1).
  credentialsPending: true,

  crisis: {
    teleManas: { label: "Tele-MANAS (national, 24/7, free)", numbers: ["14416", "1-800-891-4416"] },
    vandrevala: { label: "Vandrevala Foundation (24/7)", number: "1860-2662-345", note: "verify before publishing" },
    emergency: { label: "Emergency", number: "112" },
  },
} as const;

export function waLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:${site.callNumber}`;
}
