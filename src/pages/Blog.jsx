import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const POSTS = [
  {
    id: "verify-china-supplier",
    title: "How to verify a Chinese supplier before placing your first order",
    excerpt:
      "A practical checklist covering business license validation, factory vs. trading company red flags, capacity assessment, and reference checks.",
    date: "May 22, 2026",
    readMin: 8,
    category: "Sourcing",
  },
  {
    id: "qc-aql-explained",
    title: "AQL inspections explained: levels, sample sizes, and what to ask for",
    excerpt:
      "Why AQL II is usually the right baseline, how sample sizes scale with order quantity, and how to interpret a defect classification report.",
    date: "May 8, 2026",
    readMin: 7,
    category: "Quality Control",
  },
  {
    id: "fob-cif-landed-cost",
    title: "FOB vs CIF vs landed cost: how to read a sourcing quote properly",
    excerpt:
      "What is hidden behind a low FOB number, how to estimate landed cost honestly, and the questions that prevent surprises at customs.",
    date: "April 24, 2026",
    readMin: 6,
    category: "Logistics",
  },
  {
    id: "moq-negotiation",
    title: "Negotiating MOQ with Chinese factories without losing leverage",
    excerpt:
      "When to push on minimum order quantity, when to pay a tooling fee instead, and how to set up a credible volume roadmap with a new supplier.",
    date: "April 11, 2026",
    readMin: 5,
    category: "Negotiation",
  },
  {
    id: "amazon-fba-prep",
    title: "Amazon FBA prep from China: avoiding the most common rejections",
    excerpt:
      "Carton labelling, FNSKU placement, polybag suffocation warnings, and how to plan FBA shipments to avoid expensive last-minute rework.",
    date: "March 27, 2026",
    readMin: 7,
    category: "Amazon FBA",
  },
  {
    id: "private-label-packaging",
    title: "Private label packaging: realistic timelines and tooling costs",
    excerpt:
      "What custom color boxes, mailers, and inserts actually cost, why three sample rounds is normal, and how to avoid printing surprises.",
    date: "March 12, 2026",
    readMin: 6,
    category: "Packaging",
  },
];

export default function Blog() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Blog"
        title="Practical guides on sourcing from China"
        description="Working notes from our team — checklists, frameworks, and lessons learned across categories. No fluff, no exaggeration."
        bgId="blog-page-bg"
        bgQuery="[blog-page-bg-title] [blog-page-bg-desc]"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {POSTS.map((p) => (
              <article
                key={p.id}
                className="group rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    alt={p.title}
                    data-strk-img-id={`post-${p.id}-img`}
                    data-strk-img={`[post-${p.id}-excerpt] [post-${p.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-slate-700 text-xs font-medium border border-slate-200">
                    {p.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {p.date}
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {p.readMin} min read
                    </span>
                  </div>
                  <h2 id={`post-${p.id}-title`} className="mt-3 text-lg font-semibold text-slate-900 leading-snug">
                    {p.title}
                  </h2>
                  <p id={`post-${p.id}-excerpt`} className="mt-3 text-slate-600 text-sm leading-relaxed flex-1">
                    {p.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center text-amber-600 font-semibold text-sm">
                    Read article <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-slate-500">
            More articles coming soon. Have a topic you would like us to cover? <a href="/contact" className="text-amber-600 font-semibold hover:underline">Tell us</a>.
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
