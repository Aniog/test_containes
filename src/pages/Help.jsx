import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/SectionHeading";

const SECTIONS = [
  {
    id: "shipping",
    eyebrow: "01",
    title: "Shipping",
    body: [
      "Free worldwide shipping on every order, with no minimum.",
      "US orders ship in 2–4 business days via tracked carrier. You'll receive a tracking link by email the moment your order leaves our studio.",
      "International orders arrive in 5–10 business days. Local duties and taxes are included in the price at checkout — no surprise fees on delivery.",
    ],
  },
  {
    id: "returns",
    eyebrow: "02",
    title: "Returns & Exchanges",
    body: [
      "30-day returns, no questions asked.",
      "Items must be unworn and in their original packaging. We provide a prepaid return label — just request one at returns@velmora.co.",
      "Refunds are issued to the original payment method within 5 business days of the return being received.",
    ],
  },
  {
    id: "care",
    eyebrow: "03",
    title: "Care Guide",
    body: [
      "Our demi-fine pieces are made to be lived in — but a few small habits keep them glowing.",
      "Avoid contact with water, perfume and lotion. Put your jewelry on last when getting ready, and off first at the end of the day.",
      "Wipe gently with the included polishing cloth between wears and store in the Velmora pouch to prevent tarnish.",
    ],
  },
  {
    id: "size",
    eyebrow: "04",
    title: "Size Guide",
    body: [
      "Huggies are designed to sit snugly on the lobe — most wearers take the standard 10mm.",
      "Ear cuffs are one-size and gently adjustable; a soft squeeze tightens the fit, a gentle flex loosens it.",
      "Necklaces are 16\" with a 2\" extender, so they layer at 16\", 17\" or 18\".",
    ],
  },
  {
    id: "contact",
    eyebrow: "05",
    title: "Contact",
    body: [
      "Our team replies within one business day.",
      "Email: hello@velmora.co · DM: @velmora on Instagram.",
      "Studio hours: Monday–Friday, 9am–6pm GMT.",
    ],
  },
  {
    id: "sustainability",
    eyebrow: "06",
    title: "Sustainability",
    body: [
      "We make in small batches. Every piece is produced to demand — never overstocked, never landfilled.",
      "Our packaging is 100% recyclable: cotton pouch, recycled card box, soy-based ink.",
      "We're working toward 100% recycled brass across the line by 2027.",
    ],
  },
];

export default function Help() {
  return (
    <main className="bg-bone text-ink">
      {/* Hero */}
      <section className="border-b border-ink/10">
        <div className="container-editorial py-20 md:py-28 max-w-3xl">
          <p className="label-eyebrow text-ink/50">Help &amp; Information</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight mt-6">
            We're here to help.
          </h1>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-ink/70 max-w-xl">
            From shipping to care, everything you need to know about your Velmora piece. Can't find what you're looking for? Email us at{" "}
            <a href="mailto:hello@velmora.co" className="underline decoration-gold/60 underline-offset-4 hover:text-ink">
              hello@velmora.co
            </a>
            .
          </p>
        </div>
      </section>

      {/* TOC */}
      <section className="border-b border-ink/10 bg-ivory/40">
        <div className="container-editorial py-8">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-[0.18em] uppercase">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-ink/70 hover:text-gold transition-colors">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sections */}
      <section className="container-editorial py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-x-12">
          {SECTIONS.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 scroll-mt-32"
            >
              <div className="md:col-span-4">
                <p className="label-eyebrow text-gold">{s.eyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl mt-3 leading-tight">
                  {s.title}
                </h2>
              </div>
              <div className="md:col-span-7 md:col-start-6 max-w-prose space-y-4 text-base leading-relaxed text-ink/75">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-ivory">
        <div className="container-editorial py-20 md:py-24 text-center max-w-2xl">
          <h3 className="font-display text-3xl md:text-4xl leading-tight">
            Still have a question?
          </h3>
          <p className="mt-4 text-ivory/70">
            Our team is one message away. We usually reply within an hour during studio hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:hello@velmora.co"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-gold text-ink text-xs tracking-[0.18em] uppercase font-medium hover:bg-gold/90 transition-colors"
            >
              Email us
            </a>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-ivory/30 text-ivory text-xs tracking-[0.18em] uppercase font-medium hover:border-ivory hover:bg-ivory/5 transition-colors"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
