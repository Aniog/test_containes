import { useEffect, useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

import PageHero from "@/components/site/PageHero";
import CtaBanner from "@/components/site/CtaBanner";

const POSTS = [
  {
    id: "verify-china-supplier",
    title: "How to verify a Chinese supplier before placing an order",
    excerpt:
      "A practical checklist for confirming the supplier you're talking to is the actual factory — not a trading company in disguise.",
    date: "May 14, 2026",
    category: "Supplier Verification",
  },
  {
    id: "aql-inspection-explained",
    title: "AQL inspection explained: a buyer's guide",
    excerpt:
      "What AQL means in practice, how to choose the right sampling level, and how to read a pre-shipment inspection report.",
    date: "Apr 28, 2026",
    category: "Quality Control",
  },
  {
    id: "ddp-vs-fob",
    title: "DDP vs FOB: which Incoterm is right for your shipment?",
    excerpt:
      "A clear comparison of FOB, CIF, and DDP for first-time importers. Which one actually saves money — and which hides the risk.",
    date: "Apr 10, 2026",
    category: "Shipping &amp; Logistics",
  },
  {
    id: "private-label-china",
    title: "Starting a private-label brand with Chinese factories",
    excerpt:
      "What to ask for in your first OEM project: tooling, packaging, certifications, and how to protect your designs.",
    date: "Mar 22, 2026",
    category: "OEM &amp; Private Label",
  },
  {
    id: "moq-negotiation",
    title: "How to negotiate MOQ without breaking the deal",
    excerpt:
      "Six practical tactics that work with real Chinese factories — and the ones that just damage trust.",
    date: "Mar 5, 2026",
    category: "Sourcing Strategy",
  },
  {
    id: "factory-audit-what-to-look-for",
    title: "What to look for during a factory audit",
    excerpt:
      "The five things experienced sourcing agents always check on-site — and the red flags that should stop the deal.",
    date: "Feb 18, 2026",
    category: "Factory Audits",
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Blog"
        title="Practical guides for B2B buyers sourcing from China"
        description="Field-tested articles on supplier verification, quality control, shipping, and private label — written by our China-based sourcing team."
      />

      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {POSTS.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-xl overflow-hidden border border-border-soft shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    alt={p.title}
                    data-strk-img-id={`blog-${p.id}-img-58a3e7`}
                    data-strk-img={`[blog-${p.id}-title] [blog-${p.id}-category] china sourcing import business`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span
                      id={`blog-${p.id}-category`}
                      className="font-semibold text-accent uppercase tracking-wider"
                      dangerouslySetInnerHTML={{ __html: p.category }}
                    />
                    <span aria-hidden>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {p.date}
                    </span>
                  </div>
                  <h2
                    id={`blog-${p.id}-title`}
                    className="mt-3 text-lg md:text-xl font-semibold text-brand leading-snug"
                  >
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                    {p.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm text-accent font-semibold">
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};

export default Blog;
