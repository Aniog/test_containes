import { useMemo, useRef, useState } from "react";
import { ArrowRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/data/blogPosts";
import { cn } from "@/lib/utils";

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

function PageHero() {
  const ref = useRef(null);
  useStrkImages(ref, []);
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))],
    []
  );
  return (
    <Section size="lg" tone="paper">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="eyebrow text-brand-teal">Blog</span>
          <h1
            id="blog-hero-title"
            className="mt-4 font-bold tracking-tight text-brand-navy text-4xl md:text-5xl leading-[1.08]"
          >
            Practical sourcing and QC, written from the factory floor
          </h1>
          <p
            id="blog-hero-subtitle"
            className="mt-5 text-base md:text-lg leading-relaxed text-brand-ink-muted max-w-2xl"
          >
            Short, practical articles for overseas buyers sourcing from China.
            No generic listicles, no AI-generated filler.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-line bg-brand-mist">
            <StrkImage
              imgId="blog-hero-b2c3d4"
              query="[blog-hero-title] [blog-hero-subtitle] sourcing manager reading report with laptop and coffee factory floor"
              ratio="4x3"
              width={1200}
              alt="Sourcing manager reading a report with a laptop on a factory floor"
            />
          </div>
        </div>
        <div className="lg:col-span-12 sr-only">
          <span>{categories.join(", ")}</span>
        </div>
      </div>
    </Section>
  );
}

function PostCard({ post, featured = false }) {
  return (
    <article
      id={post.slug}
      className={cn(
        "flex flex-col h-full rounded-2xl border border-brand-line bg-white overflow-hidden hover:shadow-md transition-shadow",
        featured && "lg:flex-row lg:h-auto"
      )}
    >
      <Link
        to={`/blog/${post.slug}`}
        className={cn(
          "block relative w-full overflow-hidden bg-brand-mist",
          featured ? "lg:w-1/2 aspect-[16/9] lg:aspect-auto" : "aspect-[16/9]"
        )}
      >
        <StrkImage
          imgId={`blog-card-${post.slug}-img`}
          query={`[blog-card-${post.slug}-title] [blog-card-${post.slug}-excerpt] [blog-card-${post.slug}-category] ${post.image}`}
          ratio={featured ? "16x9" : "16x9"}
          width={featured ? 1200 : 800}
          alt={post.title}
        />
      </Link>
      <div className={cn("flex flex-col flex-1 p-6", featured && "lg:p-10 lg:w-1/2 lg:justify-center")}>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.14em]">
          <span
            id={`blog-card-${post.slug}-category`}
            className="text-brand-teal font-semibold"
          >
            {post.category}
          </span>
          <span className="text-brand-ink-soft">·</span>
          <span className="text-brand-ink-muted">{formatDate(post.date)}</span>
        </div>
        <h2
          id={`blog-card-${post.slug}-title`}
          className={cn(
            "mt-3 font-semibold tracking-tight text-brand-navy leading-snug",
            featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
          )}
        >
          <Link to={`/blog/${post.slug}`} className="hover:text-brand-red transition-colors">
            {post.title}
          </Link>
        </h2>
        <p
          id={`blog-card-${post.slug}-excerpt`}
          className={cn(
            "mt-3 text-brand-ink-muted leading-relaxed",
            featured ? "text-base md:text-lg" : "text-sm"
          )}
        >
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red-2"
          >
            Read article
            <ArrowRight className="h-4 w-4" />
          </Link>
          <span className="inline-flex items-center gap-1.5 text-xs text-brand-ink-muted">
            <Clock3 className="h-3.5 w-3.5" />
            {post.readingMinutes} min read
          </span>
        </div>
      </div>
    </article>
  );
}

function PostGrid() {
  const [active, setActive] = useState("All");
  const containerRef = useRef(null);
  useStrkImages(containerRef, [active]);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))],
    []
  );

  const filtered = useMemo(
    () =>
      active === "All"
        ? blogPosts
        : blogPosts.filter((p) => p.category === active),
    [active]
  );

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <Section size="default" tone="default">
      <div ref={containerRef} className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SectionHeader
            eyebrow="Articles"
            title="The latest from our team"
            description="Six practical guides on sourcing, QC and shipping from China."
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  active === c
                    ? "bg-brand-navy text-white border-brand-navy"
                    : "bg-white text-brand-navy border-brand-line hover:border-brand-navy/50"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {featured ? <PostCard post={featured} featured /> : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {rest.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function NewsletterCTA() {
  return (
    <Section size="default" tone="navy">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Sourcing newsletter"
            title="One short email a month with new articles and practical guides"
            description="No marketing fluff. We send a single digest at the start of each month with new articles and the occasional buying-side checklist. You can unsubscribe in one click."
            invert
          />
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Work email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@yourcompany.com"
              className="h-12 flex-1 rounded-md border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-amber/40"
              required
            />
            <Button variant="primary" size="lg" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
        <div className="lg:col-span-5">
          <ul className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 divide-y divide-white/10">
            {[
              "AQL sampling cheat sheet (PDF)",
              "RFQ template for Chinese factories",
              "Pre-shipment inspection checklist",
              "Container loading photo SOP",
            ].map((r) => (
              <li key={r} className="py-3 flex items-center gap-3 text-white/85 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-red/20 text-brand-red">
                  →
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default function Blog() {
  return (
    <>
      <PageHero />
      <PostGrid />
      <NewsletterCTA />
    </>
  );
}
