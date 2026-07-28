import { useEffect, useMemo, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, Calendar, Clock, Search, BookOpen } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import InquiryForm from "@/components/shared/InquiryForm";
import Seo from "@/components/ui/Seo";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

const POSTS = [
  {
    title: "How to verify a Chinese supplier without leaving your office",
    excerpt:
      "A practical checklist for first-pass due diligence on a Chinese factory: business license, export history, references, and the small signals that tell you a lot.",
    category: "Supplier Verification",
    date: "2026-07-12",
    readTime: "8 min read",
    image: "blog-verify-1c2a3d",
    body: "verification-checklist",
  },
  {
    title: "FOB vs CIF vs DDP: a plain-English guide for first-time importers",
    excerpt:
      "Three shipping terms that sound similar but change who pays for what. We break down the cost, the risk, and the right choice for your first few orders.",
    category: "Shipping & Logistics",
    date: "2026-07-05",
    readTime: "10 min read",
    image: "blog-incoterms-4d5e6f",
    body: "incoterms",
  },
  {
    title: "AQL 2.5 vs 4.0: choosing the right inspection level for your product",
    excerpt:
      "Most buyers accept the factory's default AQL without thinking. Here is how to pick the right one based on product type, price point, and target market.",
    category: "Quality Inspection",
    date: "2026-06-28",
    readTime: "7 min read",
    image: "blog-aql-7a8b9c",
    body: "aql",
  },
  {
    title: "Sample approval: how to lock a golden sample that protects your order",
    excerpt:
      "The golden sample is your best defense against 'sample-vs-bulk drift'. A short, practical workflow to set it up with your supplier.",
    category: "Production",
    date: "2026-06-20",
    readTime: "6 min read",
    image: "blog-samples-1d2e3f",
    body: "samples",
  },
  {
    title: "Payment terms that protect you: 30/70, L/C, and escrow in China",
    excerpt:
      "The default 30/70 split is not always the safest option. We compare common payment structures for new and ongoing supplier relationships.",
    category: "Risk & Compliance",
    date: "2026-06-12",
    readTime: "9 min read",
    image: "blog-payment-4f5a6b",
    body: "payment",
  },
  {
    title: "10 questions to ask a Chinese factory on the first call",
    excerpt:
      "A short, well-structured list of questions that separate a serious manufacturer from a trading company or a marginal operation.",
    category: "Supplier Verification",
    date: "2026-06-04",
    readTime: "5 min read",
    image: "blog-call-7c8d9e",
    body: "questions",
  },
  {
    title: "How to read a pre-shipment inspection report (and what to push back on)",
    excerpt:
      "Inspection reports can look like noise if you have not seen one before. Here is how to read one, what 'critical / major / minor' really means, and when to reject.",
    category: "Quality Inspection",
    date: "2026-05-28",
    readTime: "8 min read",
    image: "blog-report-2b3c4d",
    body: "report",
  },
  {
    title: "Yiwu, Shenzhen, or Guangzhou: which cluster suits your product?",
    excerpt:
      "An overview of the main industrial clusters, the products they are strong for, and how we decide which one to start with.",
    category: "Sourcing Strategy",
    date: "2026-05-20",
    readTime: "11 min read",
    image: "blog-clusters-5e6f7a",
    body: "clusters",
  },
  {
    title: "When to use a sourcing agent (and when not to)",
    excerpt:
      "Sourcing agents are not for every buyer or every order. An honest look at the cases where an agent adds value — and the cases where you do not need one.",
    category: "Sourcing Strategy",
    date: "2026-05-12",
    readTime: "7 min read",
    image: "blog-agent-8b9c1d",
    body: "agent",
  },
];

const CATEGORIES = [
  "All",
  ...Array.from(new Set(POSTS.map((p) => p.category))),
];

export default function Blog() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      const inCategory = active === "All" || p.category === active;
      const q = query.trim().toLowerCase();
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [query, active]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <Seo
        title="Blog & Insights | China Sourcing Guides | SSourcing China"
        description="Practical guides on supplier verification, quality inspection, shipping terms, payment terms, and clustering — written by working sourcing specialists."
      />

      <PageHero
        eyebrow="Blog & insights"
        title="Practical guides from working sourcing specialists"
        description="Short, no-fluff articles on the parts of importing from China that are hardest to get right: supplier verification, QC, shipping terms, and payment structures."
        imageId="blog-hero-img-3a4b5c"
        backgroundId="blog-hero-bg-6d7e8f"
      />

      <Section ref={ref} tone="surface">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Latest articles"
            title="The China sourcing playbook"
            lead="Updated monthly. Filter by topic or search for what you need."
          />
          <div className="flex w-full max-w-sm items-center gap-2 rounded-md border border-line bg-surface px-3 py-2 shadow-card">
            <Search className="h-4 w-4 text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="w-full bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                active === cat
                  ? "border-primary bg-primary text-white"
                  : "border-line bg-surface text-ink hover:border-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {featured && (
          <article className="mt-10 grid overflow-hidden rounded-lg border border-line bg-surface shadow-card lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden bg-primary-100 lg:aspect-auto">
              <img
                alt={featured.title}
                className="h-full w-full object-cover"
                data-strk-img-id={`${featured.image}-feat`}
                data-strk-img={`[featured-post-excerpt] [featured-post-title]`}
                data-strk-img-ratio="16x10"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'/%3E"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Featured · {featured.category}
              </span>
              <h3
                id="featured-post-title"
                className="mt-3 text-2xl font-bold tracking-tight text-primary md:text-3xl"
              >
                {featured.title}
              </h3>
              <p
                id="featured-post-excerpt"
                className="mt-4 text-base leading-relaxed text-muted"
              >
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(featured.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <div className="mt-6">
                <Button variant="primary" size="md">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </article>
        )}

        {rest.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <PostCard key={p.title} post={p} index={i + 1} />
            ))}
          </div>
        ) : (
          !featured && (
            <div className="mt-12 rounded-lg border border-dashed border-line bg-surface p-12 text-center">
              <BookOpen className="mx-auto h-8 w-8 text-muted" />
              <h3 className="mt-3 text-lg font-semibold text-primary">
                No articles found
              </h3>
              <p className="mt-1 text-sm text-muted">
                Try a different keyword or clear the filter.
              </p>
            </div>
          )
        )}
      </Section>

      <Section tone="primaryDark">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Newsletter
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              One short email, once a month
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              New articles, supplier alerts, and a monthly roundup of the
              things we are seeing in the market. No spam, unsubscribe in one
              click.
            </p>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm
              variant="dark"
              title="Subscribe to the sourcing newsletter"
              subtitle="Or skip the newsletter and tell us about your project — we will reply within one business day."
            />
          </div>
        </div>
      </Section>
    </>
  );
}

function PostCard({ post, index }) {
  const slug = post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-card transition-shadow hover:shadow-card-hover">
      <div className="relative aspect-[3/2] overflow-hidden bg-primary-100">
        <img
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          data-strk-img-id={`${post.image}-${index}`}
          data-strk-img={`[post-${slug}-excerpt] [post-${slug}-title]`}
          data-strk-img-ratio="3x2"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 2'/%3E"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {post.category}
        </span>
        <h3
          id={`post-${slug}-title`}
          className="mt-2 text-lg font-semibold leading-snug text-primary"
        >
          {post.title}
        </h3>
        <p
          id={`post-${slug}-excerpt`}
          className="mt-2 text-sm leading-relaxed text-muted"
        >
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-4 border-t border-line pt-4 text-xs text-muted">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>
      </div>
    </article>
  );
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
