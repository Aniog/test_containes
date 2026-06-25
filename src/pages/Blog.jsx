import { useEffect, useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "@/components/sections/PageHeader";
import CTABanner from "@/components/sections/CTABanner";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const POSTS = [
  {
    id: "verify-china-factory",
    title: "How to verify a Chinese factory before paying a deposit",
    excerpt:
      "Six concrete checks — business license, export rights, on-site audit, sample matching, reference customers, and trial orders — to reduce supplier risk.",
    category: "Sourcing 101",
    date: "2026-05-12",
    readingMinutes: 8,
  },
  {
    id: "aql-inspection-guide",
    title: "Understanding AQL inspection: a buyer's plain-English guide",
    excerpt:
      "What AQL 2.5 actually means, how sample sizes are chosen, and how to read a pre-shipment inspection report without getting lost in the spreadsheet.",
    category: "Quality Control",
    date: "2026-04-22",
    readingMinutes: 10,
  },
  {
    id: "ddp-vs-fob",
    title: "DDP vs FOB vs CIF: which Incoterm should you use?",
    excerpt:
      "A practical comparison for buyers shipping under USD 200k per order. When DDP is worth the premium, and when FOB still wins.",
    category: "Shipping",
    date: "2026-03-30",
    readingMinutes: 6,
  },
  {
    id: "moq-negotiation",
    title: "How to negotiate MOQ with a Chinese factory (without losing pricing)",
    excerpt:
      "Tactics for first-time buyers and small brands. Three angles to negotiate from, and what factories actually care about behind the MOQ number.",
    category: "Negotiation",
    date: "2026-03-08",
    readingMinutes: 7,
  },
  {
    id: "amazon-fba-prep-china",
    title: "Shipping straight from China to Amazon FBA: what to prepare",
    excerpt:
      "Labels, polybags, carton dimensions and PO numbers — the small details that get a shipment rejected or accepted at the FBA warehouse.",
    category: "Amazon FBA",
    date: "2026-02-14",
    readingMinutes: 9,
  },
  {
    id: "supplier-shortlist",
    title: "What a good supplier shortlist looks like",
    excerpt:
      "An anatomy of the comparison sheet our team sends to clients — and why three solid options are better than ten mediocre ones.",
    category: "Sourcing 101",
    date: "2026-01-20",
    readingMinutes: 5,
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
        title="Practical articles for buyers sourcing from China"
        description="Field notes from our sourcing and QC team. No fluff, no marketing tricks — just how things actually work in Chinese factories."
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-2xl bg-surface border border-line shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="aspect-[16/9] bg-bg overflow-hidden">
                  <img
                    alt={post.title}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`blog-${post.id}-img`}
                    data-strk-img={`[blog-${post.id}-excerpt] [blog-${post.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-muted">
                    <span className="rounded-md bg-accent/10 text-accent px-2 py-0.5 font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.date)}
                    </span>
                    <span>{post.readingMinutes} min read</span>
                  </div>
                  <h3
                    id={`blog-${post.id}-title`}
                    className="mt-3 text-lg font-semibold text-ink leading-snug"
                  >
                    {post.title}
                  </h3>
                  <p
                    id={`blog-${post.id}-excerpt`}
                    className="mt-2 text-sm leading-relaxed text-muted"
                  >
                    {post.excerpt}
                  </p>
                  <div className="mt-5 pt-5 border-t border-line">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-700"
                    >
                      Ask us about this topic
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want a topic covered?"
        description="Tell us what you'd like to read about. We write based on the questions buyers actually send us."
        buttonLabel="Suggest a Topic"
      />
    </div>
  );
}
