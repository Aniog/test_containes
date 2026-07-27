import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import InquiryForm from "@/components/shared/InquiryForm";

const POSTS = [
  {
    id: "verify-chinese-factory",
    category: "Sourcing",
    categoryId: "blog-verify-cat",
    title: "How to verify a Chinese factory before you place an order",
    titleId: "blog-verify-title",
    desc: "A practical 10-step checklist for vetting any Chinese supplier — covering business license checks, on-site audits, reference calls and the red flags we have learned to spot.",
    descId: "blog-verify-desc",
    date: "Jun 12, 2026",
    dateId: "blog-verify-date",
    read: "9 min read",
    readId: "blog-verify-read",
    imageId: "blog-verify-1a2b3c",
    image:
      "[blog-verify-desc] [blog-verify-title] [blog-page-eyebrow] [blog-page-title]",
  },
  {
    id: "aql-inspection",
    category: "Quality",
    categoryId: "blog-aql-cat",
    title: "AQL inspection explained: what importers actually need to know",
    titleId: "blog-aql-title",
    desc: "Most buyers default to AQL 2.5 for general goods — but the right level depends on your product, market and tolerance for risk. Here is how we help clients pick the right standard.",
    descId: "blog-aql-desc",
    date: "May 28, 2026",
    dateId: "blog-aql-date",
    read: "7 min read",
    readId: "blog-aql-read",
    imageId: "blog-aql-2b3c4d",
    image:
      "[blog-aql-desc] [blog-aql-title] [blog-page-eyebrow] [blog-page-title]",
  },
  {
    id: "fcl-vs-lcl",
    category: "Logistics",
    categoryId: "blog-fcl-cat",
    title: "FCL vs LCL vs air freight: how to pick the right mode from China",
    titleId: "blog-fcl-title",
    desc: "A simple decision tree for choosing between full container, less-than-container and air freight — with break-even volumes, typical 2026 rates and our recommendation for first-time importers.",
    descId: "blog-fcl-desc",
    date: "May 10, 2026",
    dateId: "blog-fcl-date",
    read: "8 min read",
    readId: "blog-fcl-read",
    imageId: "blog-fcl-3c4d5e",
    image:
      "[blog-fcl-desc] [blog-fcl-title] [blog-page-eyebrow] [blog-page-title]",
  },
  {
    id: "amazon-fba-sourcing",
    category: "E-commerce",
    categoryId: "blog-fba-cat",
    title: "Sourcing for Amazon FBA: how to avoid the most common pitfalls",
    titleId: "blog-fba-title",
    desc: "From FNSKU labels and box dimensions to hazmat and IP complaints — a field guide for sellers sourcing private-label products from China to Amazon fulfillment centers.",
    descId: "blog-fba-desc",
    date: "Apr 22, 2026",
    dateId: "blog-fba-date",
    read: "10 min read",
    readId: "blog-fba-read",
    imageId: "blog-fba-4d5e6f",
    image:
      "[blog-fba-desc] [blog-fba-title] [blog-page-eyebrow] [blog-page-title]",
  },
  {
    id: "nda-china",
    category: "Legal",
    categoryId: "blog-nda-cat",
    title: "Should you sign an NDA with a Chinese supplier? Practical advice",
    titleId: "blog-nda-title",
    desc: "NDAs are easy to sign and hard to enforce in China. We explain what is enforceable, what is not, and the practical steps that actually protect your product and tooling.",
    descId: "blog-nda-desc",
    date: "Apr 04, 2026",
    dateId: "blog-nda-date",
    read: "6 min read",
    readId: "blog-nda-read",
    imageId: "blog-nda-5e6f7a",
    image:
      "[blog-nda-desc] [blog-nda-title] [blog-page-eyebrow] [blog-page-title]",
  },
  {
    id: "trade-fairs-2026",
    category: "Sourcing",
    categoryId: "blog-fairs-cat",
    title: "China trade fairs 2026: which ones are worth attending",
    titleId: "blog-fairs-title",
    desc: "Canton Fair, East China Fair, Cosmoprof, Canton Furniture Fair — a short, practical guide to the trade shows that actually deliver new suppliers, and how to plan a sourcing trip.",
    descId: "blog-fairs-desc",
    date: "Mar 18, 2026",
    dateId: "blog-fairs-date",
    read: "8 min read",
    readId: "blog-fairs-read",
    imageId: "blog-fairs-6f7a8b",
    image:
      "[blog-fairs-desc] [blog-fairs-title] [blog-page-eyebrow] [blog-page-title]",
  },
];

const CATEGORIES = [
  "All",
  "Sourcing",
  "Quality",
  "Logistics",
  "E-commerce",
  "Legal",
];

export function Blog() {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filter]);

  const visible =
    filter === "All" ? POSTS : POSTS.filter((p) => p.category === filter);
  const [featured, ...rest] = visible;

  return (
    <>
      <PageHero
        eyebrow="Blog & insights"
        title="Practical guides for buyers sourcing from China"
        titleId="blog-page-title"
        description="Articles written by our agents based on real orders. No recycled content, no SEO filler — just what we have learned moving 4,800+ inspections a year."
        descriptionId="blog-page-desc"
        imageId="blog-page-hero-7a8b9c"
        imageQuery="[blog-page-desc] [blog-page-title] [blog-page-eyebrow]"
        imageAlt="Notebook with notes and laptop showing China sourcing data on a desk"
        breadcrumb={[{ label: "Blog" }]}
        primaryCta={{ label: "Get a Free Sourcing Quote", to: "/contact" }}
        secondaryCta={{ label: "See case studies", to: "/case-studies" }}
      />

      <section ref={containerRef} className="section bg-white">
        <div className="container-x">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <SectionHeader
              eyebrow="Latest articles"
              title="Field notes from the SSourcing team"
              titleId="blog-list-title"
              description="Browse by topic or read the latest post first."
              descriptionId="blog-list-desc"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  filter === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {featured ? (
            <article className="mt-10 grid gap-6 overflow-hidden rounded-2xl border border-border bg-white shadow-card lg:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted lg:aspect-auto">
                <img
                  alt={featured.title}
                  data-strk-img-id={featured.imageId}
                  data-strk-img={featured.image}
                  data-strk-img-ratio="16x10"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
                <span
                  id={featured.categoryId}
                  className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground"
                >
                  {featured.category}
                </span>
              </div>
              <div className="flex flex-col gap-4 p-6 sm:p-8">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span
                    id={featured.dateId}
                    className="inline-flex items-center gap-1.5"
                  >
                    <CalendarDays className="h-3.5 w-3.5" />
                    {featured.date}
                  </span>
                  <span
                    id={featured.readId}
                    className="inline-flex items-center gap-1.5"
                  >
                    <Clock className="h-3.5 w-3.5" />
                    {featured.read}
                  </span>
                </div>
                <h3
                  id={featured.titleId}
                  className="text-2xl font-semibold leading-snug text-primary sm:text-3xl"
                >
                  {featured.title}
                </h3>
                <p
                  id={featured.descId}
                  className="text-base text-muted-foreground"
                >
                  {featured.desc}
                </p>
                <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
                  <span className="text-sm font-semibold text-primary">
                    SSourcing Team
                  </span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span className="text-xs text-muted-foreground">
                    Field guide
                  </span>
                </div>
              </div>
            </article>
          ) : null}

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <article
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition-shadow hover:shadow-card-hover"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    alt={p.title}
                    data-strk-img-id={p.imageId}
                    data-strk-img={p.image}
                    data-strk-img-ratio="16x10"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span
                    id={p.categoryId}
                    className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span
                      id={p.dateId}
                      className="inline-flex items-center gap-1.5"
                    >
                      <CalendarDays className="h-3.5 w-3.5" />
                      {p.date}
                    </span>
                    <span
                      id={p.readId}
                      className="inline-flex items-center gap-1.5"
                    >
                      <Clock className="h-3.5 w-3.5" />
                      {p.read}
                    </span>
                  </div>
                  <h3
                    id={p.titleId}
                    className="text-base font-semibold leading-snug text-primary"
                  >
                    {p.title}
                  </h3>
                  <p
                    id={p.descId}
                    className="line-clamp-3 text-sm text-muted-foreground"
                  >
                    {p.desc}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read article
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Stay updated"
              title="Get one short sourcing tip in your inbox each month"
              titleId="blog-newsletter-title"
              description="No spam. We share one practical lesson from our agent team — unsubscribe with one click."
              descriptionId="blog-newsletter-desc"
            />
            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="input flex-1"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">
              By subscribing you agree to receive monthly emails from
              SSourcing China. We do not share your email.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/case-studies" className="btn-ghost">
                See case studies
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm
              eyebrow="Request a quote"
              title="Get a free sourcing quote"
              description="Tell us what you need. A senior agent will reply within 1 business day with a shortlist, pricing and a sample plan."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
