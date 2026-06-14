import { useEffect, useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Clock, Search, Tag } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/sections/PageHero.jsx"
import CTASection from "@/components/sections/CTASection.jsx"

const TOPICS = [
  "All",
  "Sourcing strategy",
  "Supplier verification",
  "Quality control",
  "Logistics & shipping",
  "Compliance & legal",
  "Pricing & negotiation",
]

const POSTS = [
  {
    slug: "china-sourcing-guide",
    title: "The first-time buyer's guide to sourcing from China in 2026",
    excerpt:
      "A practical end-to-end overview: where to look, how to verify, what to ask, and the most common mistakes first-time importers make.",
    topic: "Sourcing strategy",
    readTime: "12 min read",
    date: "Updated June 2026",
    image: {
      id: "blog-sourcing-guide-1a2b",
      query: "[blog-sourcing-guide-title] China sourcing agent guide factory",
      ratio: "16x9",
      width: 1200,
    },
    imageTextId: "blog-sourcing-guide-title",
  },
  {
    slug: "verify-a-factory",
    title: "How to verify a Chinese factory before you wire a deposit",
    excerpt:
      "Six practical checks that take 2-3 days and can save you tens of thousands of dollars, including license, export history, and capacity.",
    topic: "Supplier verification",
    readTime: "8 min read",
    date: "May 2026",
    image: {
      id: "blog-verify-factory-2b3c",
      query: "[blog-verify-factory-title] China factory audit verification inspection",
      ratio: "16x9",
      width: 1200,
    },
    imageTextId: "blog-verify-factory-title",
  },
  {
    slug: "qc-checklist",
    title: "The QC checklist we use for every pre-shipment inspection",
    excerpt:
      "Carton, labeling, dimensions, function, cosmetic, and packaging checks — plus how to choose the right AQL level for your product.",
    topic: "Quality control",
    readTime: "10 min read",
    date: "May 2026",
    image: {
      id: "blog-qc-checklist-3c4d",
      query: "[blog-qc-checklist-title] China quality control inspector checklist",
      ratio: "16x9",
      width: 1200,
    },
    imageTextId: "blog-qc-checklist-title",
  },
  {
    slug: "incoterms",
    title: "FOB vs CIF vs DDP: a plain-English guide for overseas buyers",
    excerpt:
      "What each Incoterm actually means in practice, who pays for what, and how to choose the right one for your shipment.",
    topic: "Logistics & shipping",
    readTime: "9 min read",
    date: "April 2026",
    image: {
      id: "blog-incoterms-4d5e",
      query: "[blog-incoterms-title] China shipping container freight forwarder",
      ratio: "16x9",
      width: 1200,
    },
    imageTextId: "blog-incoterms-title",
  },
  {
    slug: "alibaba-vs-agent",
    title: "Alibaba vs. a sourcing agent: when each one makes sense",
    excerpt:
      "The cost, time, and risk tradeoffs of going direct through a marketplace versus working with an independent sourcing partner.",
    topic: "Sourcing strategy",
    readTime: "7 min read",
    date: "April 2026",
    image: {
      id: "blog-alibaba-vs-agent-5e6f",
      query: "[blog-alibaba-vs-agent-title] China sourcing agent Alibaba comparison",
      ratio: "16x9",
      width: 1200,
    },
    imageTextId: "blog-alibaba-vs-agent-title",
  },
  {
    slug: "negotiate-prices",
    title: "How to negotiate factory prices without damaging the relationship",
    excerpt:
      "Five negotiation tactics that work in the Chinese manufacturing context, with real examples from apparel, electronics, and home goods.",
    topic: "Pricing & negotiation",
    readTime: "8 min read",
    date: "March 2026",
    image: {
      id: "blog-negotiate-prices-6f7a",
      query: "[blog-negotiate-prices-title] China factory price negotiation",
      ratio: "16x9",
      width: 1200,
    },
    imageTextId: "blog-negotiate-prices-title",
  },
  {
    slug: "compliance-eu",
    title: "A simple checklist for selling consumer products in the EU",
    excerpt:
      "CE marking, REACH, GPSR, packaging waste, EPR — what each one means and which apply to your product category.",
    topic: "Compliance & legal",
    readTime: "11 min read",
    date: "March 2026",
    image: {
      id: "blog-compliance-eu-7a8b",
      query: "[blog-compliance-eu-title] China EU compliance CE marking",
      ratio: "16x9",
      width: 1200,
    },
    imageTextId: "blog-compliance-eu-title",
  },
  {
    slug: "amazon-fba-prep",
    title: "Amazon FBA prep in China: a 9-step checklist for sellers",
    excerpt:
      "From box labels and suffocation warnings to carton weight and pallet specs — what to get right before your goods leave the factory.",
    topic: "Logistics & shipping",
    readTime: "9 min read",
    date: "February 2026",
    image: {
      id: "blog-amazon-fba-8b9c",
      query: "[blog-amazon-fba-title] China Amazon FBA shipping prep warehouse",
      ratio: "16x9",
      width: 1200,
    },
    imageTextId: "blog-amazon-fba-title",
  },
  {
    slug: "private-label-packaging",
    title: "Private label packaging: the most common questions, answered",
    excerpt:
      "MOQs, lead times, materials, sustainability claims, and how to keep packaging costs under control without sacrificing shelf appeal.",
    topic: "Sourcing strategy",
    readTime: "8 min read",
    date: "February 2026",
    image: {
      id: "blog-private-label-9c0d",
      query: "[blog-private-label-title] China private label packaging retail box",
      ratio: "16x9",
      width: 1200,
    },
    imageTextId: "blog-private-label-title",
  },
]

export default function Blog() {
  const containerRef = useRef(null)
  const [topic, setTopic] = useState("All")
  const [query, setQuery] = useState("")

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const visible = useMemo(() => {
    return POSTS.filter((p) => {
      const topicOk = topic === "All" || p.topic === topic
      const q = query.trim().toLowerCase()
      const queryOk =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q)
      return topicOk && queryOk
    })
  }, [topic, query])

  const featured = POSTS[0]
  const rest = visible.filter((p) => p.slug !== featured?.slug)

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Resources"
        title="Practical guides for buying from China with confidence"
        subtitle="We write about the topics our clients ask us about most: how to find suppliers, how to verify them, how to inspect quality, and how to get goods home without surprises."
        bullets={["Written by sourcing managers", "Updated regularly", "No affiliate links"]}
      />

      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid items-end gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="eyebrow">Featured</p>
              <h2 id={featured.imageTextId} className="h2 mt-3">
                {featured.title}
              </h2>
              <p className="lead mt-4">{featured.excerpt}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="pill-accent">{featured.topic}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                </span>
                <span>{featured.date}</span>
              </div>
              <Link
                to={`/blog/${featured.slug}`}
                className="btn-primary mt-6"
              >
                Read the guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <img
                alt={featured.title}
                data-strk-img-id={featured.image.id}
                data-strk-img={`[${featured.imageTextId}] China sourcing agent blog`}
                data-strk-img-ratio={featured.image.ratio}
                data-strk-img-width={featured.image.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="aspect-[16/9] w-full rounded-2xl object-cover shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-wide">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow">All articles</p>
              <h2 className="h2 mt-3">Filter by topic or search</h2>
            </div>
            <div className="flex w-full items-center gap-2 md:max-w-sm">
              <div className="relative w-full">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles"
                  className="form-input pl-9"
                  aria-label="Search articles"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {TOPICS.map((t) => {
              const active = t === topic
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTopic(t)}
                  className={
                    active
                      ? "rounded-full bg-navy-900 px-3.5 py-1.5 text-xs font-semibold text-white"
                      : "rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-navy-500 hover:text-navy-700"
                  }
                >
                  {t}
                </button>
              )
            })}
          </div>

          {rest.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
              No articles match this search yet. Try a different topic.
            </div>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <article
                  key={p.slug}
                  className="card flex h-full flex-col p-0"
                >
                  <img
                    alt={p.title}
                    data-strk-img-id={`blog-${p.slug}-img`}
                    data-strk-img={`[${p.imageTextId}] China sourcing agent blog article`}
                    data-strk-img-ratio={p.image.ratio}
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="aspect-[16/9] w-full rounded-t-xl object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="pill-accent">
                        <Tag className="h-3 w-3" />
                        {p.topic}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-500">
                        <Clock className="h-3 w-3" /> {p.readTime}
                      </span>
                    </div>
                    <h3
                      id={p.imageTextId}
                      className="mt-3 text-lg font-semibold text-slate-900"
                    >
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
                    <Link
                      to={`/blog/${p.slug}`}
                      className="btn-ghost mt-auto pt-4 self-start"
                    >
                      Read article <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Newsletter</p>
            <h2 className="h2 mt-3">One short email a month, useful links only</h2>
            <p className="lead mt-4">
              New guides, a couple of supplier red flags we are seeing in the market,
              and the occasional regulatory update. No spam, unsubscribe anytime.
            </p>
            <form
              className="mx-auto mt-6 flex w-full max-w-md flex-col gap-2 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@company.com"
                aria-label="Email"
                className="form-input flex-1"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500">
              We use this only for the newsletter. We never share your email.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
