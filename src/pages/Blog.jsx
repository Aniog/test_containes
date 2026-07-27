import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";
import PageHero from "@/components/shared/PageHero.jsx";
import SectionHeader from "@/components/shared/SectionHeader.jsx";
import CtaBanner from "@/components/shared/CtaBanner.jsx";

const CATEGORIES = ["All", "Sourcing strategy", "Supplier vetting", "Quality control", "Logistics", "Compliance"];

const POSTS = [
  {
    category: "Sourcing strategy",
    title: "How to write an RFQ that actually gets quoted",
    excerpt:
      "A clean RFQ saves you a week of email back-and-forth. Here is the structure we share with every new buyer, with examples.",
    readTime: "6 min read",
    author: "Mei Chen",
    date: "Jul 18, 2026",
  },
  {
    category: "Supplier vetting",
    title: "Trading company vs factory: how to tell the difference",
    excerpt:
      "A surprising share of suppliers who present as a factory are actually trading companies. Five questions that expose the difference.",
    readTime: "8 min read",
    author: "Daniel Wu",
    date: "Jul 04, 2026",
  },
  {
    category: "Quality control",
    title: "AQL sampling, explained without the jargon",
    excerpt:
      "Acceptable Quality Limit sounds complicated. It is not. Here is how to choose the right level for your product and order size.",
    readTime: "7 min read",
    author: "Sara Lin",
    date: "Jun 21, 2026",
  },
  {
    category: "Logistics",
    title: "FOB, CIF, and DDP: which one do you actually want?",
    excerpt:
      "Each incoterm puts a different party in charge of risk. A practical breakdown for first-time importers, with real numbers.",
    readTime: "9 min read",
    author: "Daniel Wu",
    date: "Jun 12, 2026",
  },
  {
    category: "Compliance",
    title: "CE, FCC, RoHS, UKCA: a quick map for electronics importers",
    excerpt:
      "Most consumer electronics need more than one mark to ship globally. Here is which marks matter and which can wait.",
    readTime: "10 min read",
    author: "Mei Chen",
    date: "Jun 02, 2026",
  },
  {
    category: "Sourcing strategy",
    title: "When to skip China (and when to commit harder)",
    excerpt:
      "Not every product belongs in China. A short, honest framework for choosing between China, Vietnam, India, and local sourcing.",
    readTime: "5 min read",
    author: "Sara Lin",
    date: "May 24, 2026",
  },
];

export default function Blog() {
  useEffect(() => {
    document.title = "Blog | China Sourcing Insights | SSourcing China";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Practical articles on China sourcing, supplier vetting, quality control, logistics, and compliance — written by our sourcing team in China.",
      );
    } else {
      const tag = document.createElement("meta");
      tag.name = "description";
      tag.content =
        "Practical articles on China sourcing, supplier vetting, quality control, logistics, and compliance.";
      document.head.appendChild(tag);
    }
  }, []);

  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical notes on sourcing from China"
        description="Short, clear articles written by our team. No recycled listicles, no fake scarcity — just the things we wish every buyer knew on day one."
        primaryCta={{ to: "/contact", label: "Get a Free Sourcing Quote" }}
      />

      <section className="bg-white">
        <div className="container-x py-20">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((c, i) => (
              <button
                key={c}
                type="button"
                className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  i === 0
                    ? "border-brand-primary bg-brand-primary text-white"
                    : "border-brand-line bg-white text-brand-text hover:border-brand-primary/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <article className="mt-10 grid grid-cols-1 gap-8 rounded-xl border border-brand-line bg-brand-surface p-6 md:grid-cols-12 md:p-10">
            <div className="md:col-span-7 flex flex-col justify-center">
              <span className="inline-flex w-fit items-center rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-brand-primary">
                Featured · {featured.category}
              </span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-muted">{featured.excerpt}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-brand-muted">
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" /> {featured.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                </span>
                <span>{featured.date}</span>
              </div>
              <div className="mt-6">
                <a href="#" className="btn-ghost">
                  Read article <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="md:col-span-5 aspect-[4/3] rounded-lg bg-white border border-brand-line flex items-center justify-center text-brand-muted-2 text-sm">
              Article cover image
            </div>
          </article>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <article
                key={p.title}
                className="card card-hover flex h-full flex-col"
              >
                <div className="aspect-[3/2] w-full rounded-md bg-brand-surface flex items-center justify-center text-xs text-brand-muted-2">
                  Article cover image
                </div>
                <span className="mt-4 inline-flex w-fit items-center rounded-full bg-brand-surface px-2.5 py-0.5 text-xs font-semibold text-brand-primary">
                  {p.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-brand-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{p.excerpt}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-brand-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" /> {p.author}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {p.readTime}
                  </span>
                </div>
                <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:text-brand-primary-hover">
                  Read article <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-surface border-y border-brand-line">
        <div className="container-x py-16">
          <div className="rounded-xl border border-brand-line bg-white p-8 md:p-10">
            <SectionHeader
              eyebrow="Newsletter"
              title="One short email, once a month"
              description="Sourcing tips, new compliance rules, and the occasional case study. No spam, no upsell. Unsubscribe in one click."
            />
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:max-w-md"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="input-base"
              />
              <button type="submit" className="btn-primary sm:w-auto">
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs text-brand-muted">
              We send one email per month. Your email is never shared.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Reading is good, sourcing is better"
        description="Take the next step. Send us your product details and we will reply within one business day with a sourcing plan."
        primaryLabel="Get a Free Sourcing Quote"
        primaryTo="/contact"
      />
    </>
  );
}
