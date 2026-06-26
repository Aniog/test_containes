import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const posts = [
  {
    id: "factory-audit-checklist",
    category: "Quality",
    date: "2026-05-14",
    title: "A practical factory audit checklist for first-time buyers",
    excerpt:
      "What to actually look for during an on-site visit in China — beyond business license checks. Production capacity, workforce, QC stations and the questions that matter.",
    keywords: "factory audit checklist Chinese manufacturer production floor",
  },
  {
    id: "aql-inspection-explained",
    category: "Inspection",
    date: "2026-04-22",
    title: "AQL inspection explained: how to read a QC report",
    excerpt:
      "Understanding sampling levels, major vs minor defects, and how to set realistic AQL levels for your product category before a pre-shipment inspection.",
    keywords: "AQL quality inspection report QC inspector Chinese factory",
  },
  {
    id: "incoterms-fob-exw-ddp",
    category: "Logistics",
    date: "2026-03-30",
    title: "FOB, EXW, DDP — choosing the right Incoterm for China imports",
    excerpt:
      "A short, practical guide to the most common Incoterms used in China-to-overseas trade, with examples of when each one actually makes sense.",
    keywords: "shipping container port crane export logistics China",
  },
  {
    id: "avoid-bad-suppliers",
    category: "Sourcing",
    date: "2026-03-04",
    title: "Five signs you might be talking to a trading company, not a factory",
    excerpt:
      "How to spot the difference between a manufacturer and a middleman before you place a deposit — and when working with a trading company is actually fine.",
    keywords: "Chinese factory production line manufacturer warehouse",
  },
  {
    id: "moq-negotiation",
    category: "Sourcing",
    date: "2026-02-12",
    title: "How to negotiate MOQ with Chinese suppliers without burning bridges",
    excerpt:
      "A practical framework for negotiating minimum order quantities — and when it's smarter to consolidate orders across multiple suppliers instead.",
    keywords: "negotiation Chinese factory office meeting supplier",
  },
  {
    id: "production-followup-mistakes",
    category: "Production",
    date: "2026-01-25",
    title: "Production follow-up: three mistakes overseas buyers keep making",
    excerpt:
      "What goes wrong between deposit and delivery, and the simple weekly check-in process that prevents most production delays and quality surprises.",
    keywords: "factory production floor manager checking schedule China",
  },
];

export default function Blog() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Practical guides on sourcing from China"
        description="Field notes and playbooks from our sourcing managers in Shenzhen — focused on what actually works for overseas buyers."
      />

      <section ref={containerRef} className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article
                key={p.id}
                className="group overflow-hidden rounded-2xl border border-brand-line bg-white transition-shadow hover:shadow-md"
              >
                <img
                  alt={p.title}
                  className="aspect-[3/2] w-full object-cover"
                  data-strk-img-id={`blog-${p.id}-img`}
                  data-strk-img={`[blog-${p.id}-excerpt] [blog-${p.id}-title] ${p.keywords}`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-brand-muted">
                    <span className="rounded-full bg-brand-accent-soft px-2.5 py-1 font-semibold text-brand-accent">
                      {p.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(p.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3
                    id={`blog-${p.id}-title`}
                    className="mt-3 text-lg font-semibold text-brand-ink"
                  >
                    {p.title}
                  </h3>
                  <p
                    id={`blog-${p.id}-excerpt`}
                    className="mt-2 text-sm leading-relaxed text-brand-muted"
                  >
                    {p.excerpt}
                  </p>
                  <Link
                    to="/blog"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:underline"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
