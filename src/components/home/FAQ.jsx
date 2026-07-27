import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/shared/SectionHeader";

const FAQS = [
  {
    q: "What does SSourcing China actually do?",
    a: "We are an independent sourcing agent based in Shanghai. We help overseas buyers find Chinese suppliers, verify their factories, manage production, run quality inspections and coordinate shipping. We work on your side of the table, not the factory's.",
    qId: "faq-what-q",
    aId: "faq-what-a",
  },
  {
    q: "How is SSourcing different from a trading company?",
    a: "A trading company is a reseller. We never take title to your goods. We charge a transparent agent fee, you pay the factory directly, and we hold the relationship on your behalf. You keep supplier contact records and own the IP.",
    qId: "faq-trader-q",
    aId: "faq-trader-a",
  },
  {
    q: "How quickly will I get a quote?",
    a: "For most RFQs we send a shortlist of 3–5 verified Chinese factories with prices, MOQs and lead times within 48 hours. Complex custom projects (tooling, OEM/ODM, certification) may take 3–5 business days.",
    qId: "faq-quote-q",
    aId: "faq-quote-a",
  },
  {
    q: "What is the cost of your service?",
    a: "Sourcing and supplier verification is free for most buyers — we are paid by the factory as a referral partner. Quality inspection is a flat fee per man-day. Production follow-up and project management are quoted per project.",
    qId: "faq-cost-q",
    aId: "faq-cost-a",
  },
  {
    q: "Do you handle small orders or only large containers?",
    a: "We work with both. We can arrange LCL shipments, consolidated air freight and even small parcel sample shipping. Many of our Amazon FBA clients start with samples and grow into FCLs over time.",
    qId: "faq-size-q",
    aId: "faq-size-a",
  },
  {
    q: "Can you protect my product design and IP?",
    a: "Yes. We sign an NDA before sharing your product details, control who sees drawings inside the factory, and can arrange tooling exclusivity, mould ownership transfers and confidentiality agreements with the supplier.",
    qId: "faq-ip-q",
    aId: "faq-ip-a",
  },
  {
    q: "Which product categories do you cover?",
    a: "We cover most consumer goods categories — electronics, apparel, home and furniture, sports and outdoor, hardware, beauty, packaging. We do not handle food, live plants, weapons or anything restricted for export.",
    qId: "faq-cat-q",
    aId: "faq-cat-a",
  },
  {
    q: "Where are your clients based?",
    a: "Around 60% of our buyers are in North America, 25% in Europe and 15% in Australia, the Middle East and Latin America. We speak English, Mandarin, Spanish, German and French internally.",
    qId: "faq-where-q",
    aId: "faq-where-a",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-white transition-colors",
        isOpen && "border-primary/30",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span
          id={item.qId}
          className="text-sm font-semibold text-primary sm:text-base"
        >
          {item.q}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform",
            isOpen && "rotate-180 text-primary",
          )}
        />
      </button>
      {isOpen ? (
        <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
          <p id={item.aId}>{item.a}</p>
        </div>
      ) : null}
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section bg-muted">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions buyers ask before their first RFQ"
            titleId="home-faq-title"
            description="If you have a question we have not covered, send us a note and one of our agents will reply within one business day."
            descriptionId="home-faq-desc"
          />
          <div className="mt-6 rounded-xl border border-border bg-white p-5">
            <p className="text-sm font-semibold text-primary">
              Prefer to talk it through?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Book a 20-minute intro call. No slides, no sales pitch.
            </p>
            <a
              href="mailto:hello@ssourcing-china.com"
              className="mt-4 inline-flex items-center text-sm font-semibold text-accent hover:text-accent-500"
            >
              hello@ssourcing-china.com →
            </a>
          </div>
        </div>

        <div className="space-y-3 lg:col-span-8">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.qId}
              item={item}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
