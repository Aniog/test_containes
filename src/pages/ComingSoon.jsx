import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Generic "coming soon" page used for secondary marketing/help pages that
// share the same quiet-luxury layout. Title and subtitle derive from the
// route so each URL feels intentional without needing a separate page.

const ROUTE_META = {
  "/sustainability": {
    eyebrow: "OUR PROMISE",
    title: "Sustainability",
    subtitle:
      "We're documenting every step — recycled metals, fair workshops, and packaging that composts. Full page arriving with our next studio note.",
  },
  "/press": {
    eyebrow: "IN THE PRESS",
    title: "Press",
    subtitle:
      "For media inquiries, please write to press@velmora.com. Our press kit and recent features will be available here soon.",
  },
  "/careers": {
    eyebrow: "JOIN THE STUDIO",
    title: "Careers",
    subtitle:
      "We're a small team of designers, bench jewelers, and writers building something patient and careful. Open roles will be posted here.",
  },
  "/help/shipping": {
    eyebrow: "HELP",
    title: "Shipping",
    subtitle:
      "Worldwide shipping is free over $75. Most orders ship within 1–2 business days from our studio in Lisbon. Full shipping policy coming soon.",
  },
  "/help/returns": {
    eyebrow: "HELP",
    title: "Returns",
    subtitle:
      "We offer 30-day returns on unworn pieces in their original packaging. Detailed return instructions will be available here.",
  },
  "/help/care": {
    eyebrow: "HELP",
    title: "Jewelry Care",
    subtitle:
      "A few simple habits will keep your gold plate beautiful for years — keep it dry, store it soft, and avoid lotions on the metal. Full care guide arriving soon.",
  },
  "/help/faq": {
    eyebrow: "HELP",
    title: "Frequently Asked",
    subtitle:
      "Common questions about materials, sizing, gifting, and orders. Full FAQ coming soon — in the meantime, write to us at hello@velmora.com.",
  },
  "/help/contact": {
    eyebrow: "HELP",
    title: "Contact",
    subtitle:
      "We reply within one business day. Email hello@velmora.com or use the form on our main page.",
  },
};

const DEFAULT_META = {
  eyebrow: "VELMORA",
  title: "Arriving soon",
  subtitle:
    "This page is being prepared. Thank you for your patience — it's worth the wait.",
};

export default function ComingSoon() {
  const { pathname } = useLocation();
  const meta = ROUTE_META[pathname] || DEFAULT_META;

  return (
    <main className="bg-ivory pt-24 md:pt-28 min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-[11px] uppercase tracking-eyebrow font-medium text-gold-deep">
        {meta.eyebrow}
      </p>
      <h1 className="mt-4 font-serif text-5xl md:text-6xl text-ink">
        {meta.title}
      </h1>
      <p className="mt-6 text-sm md:text-base text-ink-muted max-w-xl leading-relaxed">
        {meta.subtitle}
      </p>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <Link to="/shop">
          <Button variant="primary" size="md">Shop the collection</Button>
        </Link>
        <Link to="/">
          <Button variant="outlineDark" size="md">Back home</Button>
        </Link>
      </div>
      <div className="mt-16 flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-ink-muted">
        <span className="h-px w-8 bg-ink/20" />
        <span>From the studio</span>
        <span className="h-px w-8 bg-ink/20" />
      </div>
    </main>
  );
}