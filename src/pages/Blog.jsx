import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, ChevronRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import CtaBanner from "../components/CtaBanner";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

const POSTS = [
  {
    id: "factory-vs-trading",
    title: "How to tell a factory from a trading company on Alibaba",
    excerpt:
      "Six concrete signals — from business license details to factory address consistency — that help buyers identify the real manufacturer instead of an intermediary.",
    category: "Sourcing 101",
    date: "May 28, 2026",
    readTime: "7 min read",
  },
  {
    id: "aql-explained",
    title: "AQL inspection levels explained for first-time importers",
    excerpt:
      "What AQL 2.5 / 4.0 mean in practice, how sample sizes are calculated, and how to choose the right inspection level for your product and risk profile.",
    category: "Quality Control",
    date: "May 14, 2026",
    readTime: "9 min read",
  },
  {
    id: "deposit-protection",
    title: "Protecting your deposit: payment terms that actually work",
    excerpt:
      "Why 30/70 deposit terms are risky for new suppliers, and how milestone-based payments and trade assurance can dramatically reduce buyer exposure.",
    category: "Negotiation",
    date: "Apr 30, 2026",
    readTime: "6 min read",
  },
  {
    id: "moq-negotiation",
    title: "Negotiating MOQ down for new product launches",
    excerpt:
      "Practical tactics for getting Chinese factories to accept lower minimum order quantities — without paying a 30% premium that kills your margin.",
    category: "Negotiation",
    date: "Apr 12, 2026",
    readTime: "5 min read",
  },
  {
    id: "shipping-modes",
    title: "Air, sea, or rail: choosing the right freight for your product",
    excerpt:
      "A framework for deciding between air, sea, and China-Europe rail freight, with real cost and lead-time examples for typical 1-3 CBM and 1 FCL shipments.",
    category: "Shipping",
    date: "Mar 29, 2026",
    readTime: "8 min read",
  },
  {
    id: "ip-protection",
    title: "NDAs are not enough: why you also need an NNN agreement",
    excerpt:
      "How NNN agreements (non-disclosure, non-use, non-circumvention) drafted under Chinese law give buyers real recourse where Western NDAs typically fall short.",
    category: "Legal & IP",
    date: "Mar 15, 2026",
    readTime: "7 min read",
  },
];

const Blog = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Blog"
        title="Practical guides for buyers sourcing in China"
        description="Field notes from twelve years of factory visits, QC inspections, and shipments. No fluff — just the playbook we wish we had when we started."
      />

      <section className="section-y bg-white">
        <div className="container-x">
          <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[16/10] lg:aspect-auto bg-slate-100">
                <img
                  alt={featured.title}
                  data-strk-img-id={`blog-feat-${featured.id}-img-94d2f1`}
                  data-strk-img={`[blog-feat-${featured.id}-title] [blog-feat-${featured.id}-cat]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    id={`blog-feat-${featured.id}-cat`}
                    className="rounded-full bg-red-600 px-2.5 py-1 text-xs font-semibold text-white"
                  >
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="h-3.5 w-3.5" /> {featured.date}
                  </span>
                  <span className="text-xs text-slate-500">{featured.readTime}</span>
                </div>
                <h2
                  id={`blog-feat-${featured.id}-title`}
                  className="mt-4 text-2xl md:text-3xl font-semibold text-slate-900"
                >
                  {featured.title}
                </h2>
                <p className="mt-3 text-slate-600">{featured.excerpt}</p>
                <div className="mt-auto pt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-red-600"
                  >
                    Read article
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <article
                key={p.id}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    alt={p.title}
                    data-strk-img-id={`blog-${p.id}-img-3f9128`}
                    data-strk-img={`[blog-${p.id}-title] [blog-${p.id}-cat]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      id={`blog-${p.id}-cat`}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
                    >
                      {p.category}
                    </span>
                    <span className="text-xs text-slate-500">{p.date}</span>
                  </div>
                  <h3
                    id={`blog-${p.id}-title`}
                    className="mt-3 text-lg font-semibold text-slate-900"
                  >
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
                  <div className="mt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-red-600"
                    >
                      Read more <ChevronRight className="h-3.5 w-3.5" />
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
        description="Send it our way. The best questions from buyers usually become our most-read articles."
        button="Contact us"
      />
    </div>
  );
};

export default Blog;
