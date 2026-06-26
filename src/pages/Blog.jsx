import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHero from "@/components/shared/PageHero.jsx";
import InquiryCTA from "@/components/home/InquiryCTA.jsx";

const FEATURED = {
  category: "Sourcing Guide",
  date: "May 18, 2026",
  read: "8 min read",
  title: "How to verify a Chinese factory before you place an order",
  summary:
    "Practical steps international buyers can take to confirm a Chinese factory is real, capable, and export-ready — including what to ask for, what to verify in person, and the red flags to watch out for.",
  imgId: "blog-feature-verify-1c8b22",
};

const POSTS = [
  {
    category: "Quality Control",
    date: "Apr 30, 2026",
    read: "6 min read",
    title: "AQL sampling explained: choosing the right inspection level for your product",
    summary: "A practical, plain-English guide to AQL inspection levels, sample sizes, and how to decide which level fits your product category.",
    imgId: "blog-aql-2a3b40",
  },
  {
    category: "Shipping & Logistics",
    date: "Apr 12, 2026",
    read: "7 min read",
    title: "FOB, CIF, or DDP? Choosing the right Incoterm when importing from China",
    summary: "A side-by-side comparison of the three most common shipping terms for China imports, including who pays for what and where risk transfers.",
    imgId: "blog-incoterms-3c4d50",
  },
  {
    category: "Supplier Selection",
    date: "Mar 28, 2026",
    read: "5 min read",
    title: "Trading company vs. factory: why the difference matters for your business",
    summary: "How to tell whether you are talking to a manufacturer or an intermediary, and why it affects pricing, MOQ, lead time, and quality control.",
    imgId: "blog-trading-vs-factory-4d5e60",
  },
  {
    category: "Cost & Negotiation",
    date: "Mar 10, 2026",
    read: "6 min read",
    title: "5 ways to reduce your unit cost without sacrificing quality",
    summary: "Practical levers you can pull during sourcing and negotiation — from material substitution to packaging optimization — without compromising on what matters.",
    imgId: "blog-cost-reduction-5e6f70",
  },
  {
    category: "Compliance",
    date: "Feb 22, 2026",
    read: "9 min read",
    title: "Product certifications for EU and US markets: a buyer's checklist",
    summary: "An overview of CE, RoHS, FDA, FCC, Prop 65, and other certifications you may need depending on your product and destination market.",
    imgId: "blog-certifications-6f7a80",
  },
  {
    category: "Sourcing Guide",
    date: "Feb 03, 2026",
    read: "5 min read",
    title: "When does it make sense to hire a sourcing agent?",
    summary: "The honest case for and against using a sourcing partner — based on order size, product complexity, and how much time you can realistically spend in China.",
    imgId: "blog-when-agent-7a8b90",
  },
];

const CATEGORIES = ["All", "Sourcing Guide", "Quality Control", "Shipping & Logistics", "Compliance", "Cost & Negotiation", "Supplier Selection"];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="page-fade">
      <PageHero
        eyebrow="Blog & Insights"
        title="Practical guides for buyers sourcing from China"
        subtitle="Honest, experience-based articles on sourcing, quality control, shipping, and supplier management. No fluff, no exaggerated claims — just what we have learned from real projects."
        breadcrumb={[
          { label: "Home", to: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Featured */}
          <article className="grid gap-8 lg:grid-cols-12 items-center card overflow-hidden">
            <div className="lg:col-span-7">
              <img
                alt={FEATURED.title}
                data-strk-img-id={FEATURED.imgId}
                data-strk-img="[blog-feature-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-72 lg:h-full object-cover"
              />
            </div>
            <div className="lg:col-span-5 p-7 md:p-10">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#C8553D]">{FEATURED.category}</p>
              <h2 id="blog-feature-title" className="mt-3 font-display text-2xl md:text-3xl font-semibold text-[#0F172A] leading-tight">
                {FEATURED.title}
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-[#475569]">{FEATURED.summary}</p>
              <div className="mt-5 flex items-center gap-4 text-[12.5px] text-[#64748B]">
                <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" /> {FEATURED.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {FEATURED.read}</span>
              </div>
              <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#0E2A47] hover:text-[#C8553D]">
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          {/* Categories */}
          <div className="mt-14 flex flex-wrap gap-2">
            {CATEGORIES.map((c, i) => (
              <span
                key={c}
                className={`text-[13px] font-medium px-3 py-1.5 rounded-full border ${
                  i === 0
                    ? "bg-[#0E2A47] text-white border-[#0E2A47]"
                    : "bg-white text-[#475569] border-[#E5E1D8] hover:border-[#0E2A47] hover:text-[#0E2A47]"
                } transition-colors cursor-pointer`}
              >
                {c}
              </span>
            ))}
          </div>

          {/* Posts grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p, i) => (
              <article key={p.title} className="card overflow-hidden flex flex-col hover:-translate-y-0.5 transition-transform">
                <img
                  alt={p.title}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[blog-post-${i}-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#C8553D]">{p.category}</p>
                  <h3 id={`blog-post-${i}-title`} className="mt-3 text-[17px] font-semibold text-[#0F172A] leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[#475569] flex-1">{p.summary}</p>
                  <div className="mt-4 flex items-center gap-4 text-[12px] text-[#64748B]">
                    <span className="flex items-center gap-1.5"><CalendarDays className="h-3 w-3" /> {p.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {p.read}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center text-[14px] text-[#64748B]">
            Showing 7 of 24 articles. <Link to="/blog" className="text-[#C8553D] font-semibold hover:underline">View all</Link>
          </div>
        </div>
      </section>

      <InquiryCTA />
    </div>
  );
}