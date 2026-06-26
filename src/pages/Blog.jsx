import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { BLOG_POSTS } from "@/data/site";
import { format, parseISO } from "date-fns";

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3C/svg%3E";

const Blog = () => {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <>
      <section className="bg-paper-soft border-b border-line">
        <div className="container-x py-14 md:py-20 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-ink-600 mb-3">
            Blog & Resources
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-ink-900 leading-tight max-w-3xl mx-auto">
            Practical guides on sourcing from China
          </h1>
          <p className="mt-5 text-lg text-ink-700 leading-relaxed max-w-2xl mx-auto">
            Written by our sourcing managers and quality engineers. No fluff,
            no exaggerated claims — just the things we wish every buyer knew.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-12 md:py-16">
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-line rounded-lg overflow-hidden">
            <div className="lg:col-span-7 aspect-[16/9] lg:aspect-auto lg:h-full bg-paper-muted">
              <img
                alt={featured.title}
                data-strk-img-id={`blog-feat-${featured.id}-img-5a82bc`}
                data-strk-img={`[${featured.id}-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1100"
                src={placeholder}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-5 p-7 md:p-10">
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-1 bg-accent-soft text-accent rounded-full font-semibold">
                  Featured
                </span>
                <span className="px-2 py-1 bg-ink-100 text-ink-900 rounded-full font-semibold">
                  {featured.tag}
                </span>
              </div>
              <h2 id={`${featured.id}-title`} className="mt-4 text-2xl md:text-3xl font-bold text-ink-900">
                {featured.title}
              </h2>
              <p className="mt-3 text-ink-700 leading-relaxed">{featured.excerpt}</p>
              <div className="mt-5 text-xs text-ink-600">
                {format(parseISO(featured.date), "MMMM d, yyyy")} · {featured.readTime}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-paper-soft border-t border-line">
        <div className="container-x py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-line rounded-lg overflow-hidden hover:border-ink-700 transition-colors flex flex-col"
              >
                <div className="aspect-[16/9] bg-paper-muted">
                  <img
                    alt={post.title}
                    data-strk-img-id={`blog-${post.id}-img-9c41de`}
                    data-strk-img={`[${post.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src={placeholder}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 bg-ink-100 text-ink-900 rounded-full font-semibold">
                      {post.tag}
                    </span>
                    <span className="text-ink-600">{post.readTime}</span>
                  </div>
                  <h3 id={`${post.id}-title`} className="mt-3 text-base font-bold text-ink-900">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-700 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-xs text-ink-600">
                    {format(parseISO(post.date), "MMMM d, yyyy")}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button as={Link} to="/contact#quote" variant="outline">
              Have a question? Ask a sourcing manager <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;