// Content for the Privacy Policy page (src/pages/privacy-policy.astro).
//
// IMPORTANT: this is a DPDP-aligned TEMPLATE, not final legal text — see
// the source copy doc's own warning. Every `pending` marker here is a
// `[[CONFIRM]]` from that doc: a real data-handling practice that must be
// checked with Aarushi before this page can be considered accurate. Do
// not fill these in with invented answers. This page is also noindex'd
// (see privacy-policy.astro) and excluded from the sitemap, and it's
// strongly recommended this gets reviewed by someone familiar with
// India's DPDP Act before launch — see README "Pending inputs".

export type Part = string | { pending: string };

interface ListItem {
  lead: string;
  parts: Part[];
}

interface PrivacySection {
  heading: string;
  paragraphs?: Part[][];
  intro?: string;
  list?: ListItem[] | string[];
  closing?: Part[];
  callout?: string;
}

export const privacy = {
  seoTitle: "Privacy Policy | MindTalk with Aarushi",
  seoDescription:
    "How MindTalk with Aarushi collects, uses, and protects your personal information, in line with India's Digital Personal Data Protection Act.",
  lastUpdated: { pending: "date" } satisfies Part,

  intro: [
    [
      "Your privacy matters — especially given the sensitive nature of the support offered here. This policy explains what personal information is collected through this website, how it's used, and your rights, in line with India's Digital Personal Data Protection (DPDP) Act, 2023.",
    ],
    [
      "This policy covers the website only. Information you share within therapy sessions is governed separately by professional confidentiality and Aarushi's clinical record-keeping practices.",
    ],
  ] satisfies Part[][],

  sections: [
    {
      heading: "Who is responsible for your data",
      paragraphs: [
        [
          'This website is operated by Aarushi Sabharwal ("MindTalk with Aarushi"), based in Gole Market, New Delhi. For any questions about your data or this policy, contact ',
          { pending: "email / phone for data queries" },
          ".",
        ],
      ],
    },
    {
      heading: "What information we collect",
      intro: "We aim to collect as little as possible. Depending on how you use the site, this may include:",
      list: [
        {
          lead: "Contact details you provide",
          parts: [
            " — for example, if you message via the enquiry form or WhatsApp, your name and contact information and anything you choose to share.",
          ],
        },
        {
          lead: "Testimonials you submit",
          parts: [
            " — if you choose to submit a testimonial, the content and the display preference you select. ",
            { pending: "only if the testimonial submission feature is live" },
          ],
        },
        {
          lead: "Basic technical/usage data",
          parts: [
            " — like most websites, we may collect limited, non-identifying analytics (e.g. pages visited) to understand how the site is used. ",
            { pending: "which analytics tool, if any, is actually used — e.g. Plausible, Google Analytics, or none" },
          ],
        },
      ],
      callout:
        "Please do not share sensitive health information or clinical details through the website (enquiry form, testimonials). Those conversations belong in a session, not on the site.",
    },
    {
      heading: "How we use your information",
      intro: "We use your information only to:",
      list: [
        "Respond to your enquiry and arrange sessions",
        "Display testimonials you've explicitly consented to share",
        "Understand and improve how the website works",
        "Meet any legal obligations",
      ],
      closing: [
        "We do not sell your data, and we do not share it with third parties except the service providers needed to run the site (e.g. ",
        { pending: "hosting, form/email provider, CMS, scheduler, payment gateway — the actual ones used" },
        "), who process it on our behalf under appropriate safeguards.",
      ],
    },
    {
      heading: "Consent",
      paragraphs: [
        [
          "Where we collect personal data (e.g. via the enquiry form or testimonial submission), we ask for your clear consent first. You can withdraw that consent at any time by contacting us.",
        ],
      ],
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        [
          "We keep personal information only as long as needed for the purpose it was collected, or as required by law, and then delete it. ",
          { pending: "Aarushi's actual retention approach — e.g. enquiries deleted after a set period" },
        ],
      ],
    },
    {
      heading: "How we protect it",
      paragraphs: [
        [
          "We take reasonable measures to keep your information secure, including ",
          { pending: "e.g. HTTPS, secure storage" },
          ". No system is perfectly secure, but we work to protect your data appropriately.",
        ],
      ],
    },
    {
      heading: "Your rights",
      intro: "Under the DPDP Act, you have the right to:",
      list: [
        "Access the personal data we hold about you",
        "Ask us to correct or update it",
        "Ask us to delete it",
        "Withdraw consent you've given",
        "Raise a grievance about how your data is handled",
      ],
      closing: [
        "To exercise any of these, contact ",
        { pending: "grievance/data contact — required under DPDP" },
        ". We'll respond within a reasonable time.",
      ],
    },
    {
      heading: "Children",
      paragraphs: [
        [
          "This website and its services are intended for adults. ",
          {
            pending:
              "if Aarushi sees clients under 18, this section needs parental-consent handling per DPDP (which defines a child as under 18)",
          },
        ],
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        ['We may update this policy from time to time. The "last updated" date above shows the latest version.'],
      ],
    },
    {
      heading: "Contact",
      paragraphs: [
        [
          "For any questions about this policy or your data: ",
          { pending: "name, email, phone as data contact / grievance officer" },
        ],
      ],
    },
  ] satisfies PrivacySection[],
};
