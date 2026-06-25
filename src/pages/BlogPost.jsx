import { useRef } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock3, CalendarDays, Tag } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage";
import { blogPosts } from "@/data/blogPosts";

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const containerRef = useRef(null);
  useStrkImages(containerRef, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      <article>
        <Section size="default" tone="paper" className="border-b border-brand-line">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-teal hover:text-brand-navy"
            >
              <ArrowLeft className="h-4 w-4" />
              All articles
            </Link>
            <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-brand-ink-muted">
              <span className="inline-flex items-center gap-1.5 text-brand-teal font-semibold">
                <Tag className="h-3.5 w-3.5" />
                {post.category}
              </span>
              <span className="text-brand-ink-soft">·</span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-3.5 w-3.5" />
                {formatDate(post.date)}
              </span>
              <span className="text-brand-ink-soft">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5" />
                {post.readingMinutes} min read
              </span>
            </div>
            <h1 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight text-brand-navy leading-[1.1]">
              {post.title}
            </h1>
            <p className="mt-5 text-base md:text-lg text-brand-ink-muted leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </Section>

        <Section size="default" tone="default" containerClassName="!max-w-4xl">
          <div ref={containerRef} className="grid grid-cols-1 gap-10">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-brand-line bg-brand-mist">
              <StrkImage
                imgId={`blog-post-${post.slug}-hero`}
                query={`${post.image}`}
                ratio="16x9"
                width={1400}
                alt={post.title}
              />
            </div>
            <div className="prose max-w-none text-brand-ink">
              {post.body.map((para, idx) => (
                <p
                  key={idx}
                  className="text-base md:text-lg leading-[1.75] mb-6"
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-brand-line bg-brand-mist p-6 md:p-7">
              <p className="text-sm font-semibold text-brand-navy">
                Need this handled for your next order?
              </p>
              <p className="mt-1.5 text-sm text-brand-ink-muted leading-relaxed">
                Tell us about your product and we will map the process to your
                project.
              </p>
              <div className="mt-4">
                <Button to="/contact" variant="primary" size="md">
                  Get a Free Sourcing Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </article>

      <Section size="default" tone="paper">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="eyebrow text-brand-teal">More from the blog</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-brand-navy">
                Related reading
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red-2"
            >
              All articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/blog/${p.slug}`}
                className="flex flex-col h-full rounded-xl border border-brand-line bg-white p-5 hover:border-brand-navy/40 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em]">
                  <span className="text-brand-teal font-semibold">
                    {p.category}
                  </span>
                  <span className="text-brand-ink-soft">·</span>
                  <span className="text-brand-ink-muted">
                    {p.readingMinutes} min
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold text-brand-navy leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-brand-ink-muted line-clamp-3">
                  {p.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
