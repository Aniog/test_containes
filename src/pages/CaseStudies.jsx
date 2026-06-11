import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { Quote } from "lucide-react";

const CASES = [
  {
    id: "eu-kitchenware",
    industry: "Home & Kitchen",
    region: "EU buyer",
    title: "Kitchenware brand cuts unit cost 18% with verified factory switch",
    challenge:
      "An EU mid-size kitchenware brand was facing rising defect rates and unstable lead times from its existing stainless cookware supplier. Pricing was climbing faster than category averages, and customer returns were starting to show in reviews.",
    approach:
      "We re-sourced the line across three Zhejiang factories, ran a full on-site audit on the top two candidates, and managed three rounds of pre-production samples before tooling. Pre-shipment inspections were carried out under AQL II.",
    metrics: [
      { k: "Unit cost", v: "−18%" },
      { k: "Defect rate", v: "<1.2%" },
      { k: "Lead time", v: "42 days" },
      { k: "Repeat orders", v: "3 in 9 months" },
    ],
    quote:
      "The audit report was the most useful document we received this year. It changed how we evaluate every new factory.",
    quoteAuthor: "Operations Director, EU kitchenware brand",
  },
  {
    id: "us-electronics",
    industry: "Consumer Electronics",
    region: "US buyer",
    title: "Amazon FBA seller scales SKUs with weekly QC reporting",
    challenge:
      "A US Amazon seller was running 14 SKUs across two factories in Shenzhen with no on-the-ground QC. Returns were creeping up and FBA rejections were costing weeks per shipment.",
    approach:
      "We took over production follow-up, ran in-line and pre-shipment inspections, and standardized FBA-ready packaging. Weekly English reports went directly to the seller and their 3PL.",
    metrics: [
      { k: "SKUs launched", v: "14" },
      { k: "Returns rate", v: "<2.4%" },
      { k: "On-time ship", v: "97%" },
      { k: "FBA rejections", v: "0 in 6 months" },
    ],
    quote:
      "Going from a once-a-quarter call with the factory to a structured weekly report changed how we plan launches.",
    quoteAuthor: "Founder, US Amazon brand",
  },
  {
    id: "au-apparel",
    industry: "Apparel",
    region: "AU buyer",
    title: "Uniform supplier consolidated 4 factories into one program",
    challenge:
      "An Australian uniform distributor was juggling four suppliers with different fabric quality and inconsistent delivery. Reorder cycles were too slow for their corporate clients.",
    approach:
      "We sourced and verified one consolidated manufacturer with the right fabric capabilities, ran fabric and colorfastness tests, and set up an AQL pre-shipment inspection program for every order.",
    metrics: [
      { k: "Suppliers", v: "4 → 1" },
      { k: "Reorder time", v: "−35%" },
      { k: "Fabric test", v: "Pass" },
      { k: "Color variance", v: "ΔE < 1.5" },
    ],
    quote:
      "We finally have one factory we trust, and one English contact who actually answers our questions same day.",
    quoteAuthor: "Procurement Lead, AU uniform distributor",
  },
  {
    id: "uk-promotional",
    industry: "Promotional & Gifts",
    region: "UK buyer",
    title: "Promo agency launches 9 branded products in one peak season",
    challenge:
      "A UK promotional products agency had multiple parallel launches before Q4 and no internal capacity to manage Chinese suppliers, packaging design, and QC at the same time.",
    approach:
      "We ran parallel sourcing tracks across three factory clusters, coordinated logo printing and packaging, and consolidated nine SKUs into two sea shipments to hit the agency’s warehouse before peak.",
    metrics: [
      { k: "SKUs delivered", v: "9" },
      { k: "On-time at port", v: "100%" },
      { k: "Cost vs. budget", v: "−7%" },
      { k: "Sample rounds", v: "2 avg" },
    ],
    quote:
      "Without an on-the-ground partner, this Q4 launch simply would not have happened on schedule.",
    quoteAuthor: "Director, UK promotional agency",
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Case Studies"
        title="Real outcomes from real B2B buyers"
        description="A snapshot of recent engagements across categories and regions. We can share additional reference details under NDA on request."
        bgId="cases-page-bg"
        bgQuery="[cases-page-bg-title] [cases-page-bg-desc]"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {CASES.map((c, idx) => (
            <article
              key={c.id}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3]">
                  <img
                    alt={c.title}
                    data-strk-img-id={`cs-${c.id}-img`}
                    data-strk-img={`[cs-${c.id}-challenge] [cs-${c.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">
                    {c.industry}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">{c.region}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">Case {String(idx + 1).padStart(2, "0")}</span>
                </div>
                <h2 id={`cs-${c.id}-title`} className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                  {c.title}
                </h2>

                <h3 className="mt-6 font-semibold text-slate-900 text-sm uppercase tracking-wider">Challenge</h3>
                <p id={`cs-${c.id}-challenge`} className="mt-2 text-slate-600 leading-relaxed">{c.challenge}</p>

                <h3 className="mt-6 font-semibold text-slate-900 text-sm uppercase tracking-wider">Approach</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{c.approach}</p>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
                  {c.metrics.map((m) => (
                    <div key={m.k}>
                      <div className="text-xl md:text-2xl font-bold text-slate-900">{m.v}</div>
                      <div className="text-xs text-slate-500 mt-1">{m.k}</div>
                    </div>
                  ))}
                </div>

                <figure className="mt-6 rounded-xl border-l-4 border-amber-500 bg-slate-50 p-5">
                  <Quote className="w-5 h-5 text-amber-500" />
                  <blockquote className="mt-2 text-slate-800 italic">“{c.quote}”</blockquote>
                  <figcaption className="mt-2 text-sm text-slate-500">— {c.quoteAuthor}</figcaption>
                </figure>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
