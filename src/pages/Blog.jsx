import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";
import PageHeader from "../components/site/PageHeader";
import CtaBanner from "../components/site/CtaBanner";

const posts = [
  {
    id: "verify-china-supplier",
    title: "How to verify a China supplier before paying a deposit",
    excerpt:
      "Five practical checks every buyer should run before sending money — from business license verification to a structured factory audit.",
    category: "Supplier verification",
    date: "May 28, 2026",
    read: "8 min read",
    imgId: "blog-verify-1c2d34",
  },
  {
    id: "factory-vs-trading-company",
    title: "Factory vs. trading company: how to tell the difference",
    excerpt:
      "What the differences actually mean for your price, MOQ and quality, and the questions that quickly reveal who you're really talking to.",
    category: "Sourcing fundamentals",
    date: "May 14, 2026",
    read: "6 min read",
    imgId: "blog-factory-2e9f47",
  },
  {
    id: "qc-inspection-types",
    title: "IPC, DUPRO, PSI: choosing the right QC inspections",
    excerpt:
      "A short guide to the four main inspection types, what each one catches, and when to use them in a typical production cycle.",
    category: "Quality control",
    date: "April 30, 2026",
    read: "7 min read",
    imgId: "blog-qc-3a8b91",
  },
  {
    id: "incoterms-explained",
    title: "EXW, FOB, CIF, DDP: incoterms explained for new importers",
    excerpt:
      "Plain-English explanation of the most common incoterms, what each one covers, and the typical pitfalls that surprise first-time buyers.",
    category: "Shipping & logistics",
    date: "April 16, 2026",
    read: "9 min read",
    imgId: "blog-incoterms-7d4c12",
  },
  {
    id: "negotiating-moq",
    title: "How to negotiate MOQ with Chinese factories",
    excerpt:
      "Practical tactics for getting realistic minimum order quantities — and how to spot when 'flexible MOQ' is actually a red flag.",
    category: "Negotiation",
    date: "April 2, 2026",
    read: "5 min read",
    imgId: "blog-moq-9f1e58",
  },
  {
    id: "private-label-packaging",
    title: "Building private-label packaging that actually arrives intact",
    excerpt:
      "A short field guide to packaging design, proof approvals and drop-test thinking — written for brands shipping internationally.",
    category: "Private label",
    date: "March 19, 2026",
    read: "10 min read",
    imgId: "blog-packaging-4c2e83",
  },
];

export default function Blog() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="Blog"
        title="Practical guides for buying from China"
        description="No fluff, no exaggerated claims. Just the playbooks and lessons our team uses on real projects."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article
                key={p.id}
                className="rounded-xl overflow-hidden border border-line bg-white hover:shadow-card transition flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden bg-surface-100">
                  <img
                    alt={p.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[blog-${p.id}-excerpt] [blog-${p.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-500">
                    {p.category}
                  </p>
                  <h3
                    id={`blog-${p.id}-title`}
                    className="mt-3 text-lg font-semibold text-brand-800 leading-snug"
                  >
                    {p.title}
                  </h3>
                  <p
                    id={`blog-${p.id}-excerpt`}
                    className="mt-2 text-sm text-ink-700 leading-relaxed"
                  >
                    {p.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-4 text-xs text-ink-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {p.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      {p.read}
                    </span>
                  </div>
                  <div className="mt-5 pt-5 border-t border-line">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                    >
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a sourcing question we should write about?"
        description="Send it our way. If it's something many buyers ask, we'll publish a clear answer here."
        primaryLabel="Contact our team"
        secondaryLabel="See services"
        secondaryTo="/services"
      />
    </div>
  );
}
