import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import PageHero from "@/components/sections/PageHero.jsx";
import { blogPosts } from "@/data/content.js";

const Blog = () => {
  const [featured, ...rest] = blogPosts;
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical guides for buyers sourcing from China"
        subtitle="Short, honest articles from our project managers and QC leads. The same advice we give our clients on the phone, written down."
        primaryCta={{ to: "/contact", label: "Get a Free Sourcing Quote" }}
        secondaryCta={{ to: "/how-it-works", label: "See How It Works" }}
      />

      <section className="bg-white">
        <div className="container-page section-pad">
          <article className="grid grid-cols-1 gap-8 rounded-2xl border border-ink-200 bg-white p-6 md:p-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7 lg:order-2">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-600">
                  Featured
                </span>
                <span className="font-semibold text-ink-700">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1 text-ink-500">
                  <Calendar className="h-3.5 w-3.5" />
                  {featured.date}
                </span>
              </div>
              <h2
                id={`post-${featured.id}-title`}
                className="mt-4 text-2xl md:text-3xl font-bold text-ink-900 tracking-tight leading-snug"
              >
                {featured.title}
              </h2>
              <p
                id={`post-${featured.id}-excerpt`}
                className="mt-3 text-base text-ink-700 leading-relaxed"
              >
                {featured.excerpt}
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Read the full article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-5 lg:order-1">
              <div className="aspect-[4/3] w-full rounded-xl border border-ink-200 bg-gradient-to-br from-ink-100 to-ink-200 grid place-items-center text-ink-500 text-sm font-medium">
                Article cover
              </div>
            </div>
          </article>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.id}
                className="card card-hover overflow-hidden flex flex-col"
              >
                <div className="aspect-[3/2] w-full bg-ink-100 grid place-items-center text-ink-500 text-sm font-medium">
                  Article cover
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-600">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-ink-500">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                  </div>
                  <h3
                    id={`post-${post.id}-title`}
                    className="mt-3 text-base font-semibold text-ink-900 leading-snug"
                  >
                    {post.title}
                  </h3>
                  <p
                    id={`post-${post.id}-excerpt`}
                    className="mt-2 text-sm text-ink-700 leading-relaxed flex-1"
                  >
                    {post.excerpt}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 border-t border-ink-200">
        <div className="container-page section-pad text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 tracking-tight">
            Have a specific question we haven't covered?
          </h2>
          <p className="mt-3 text-base text-ink-700 max-w-2xl mx-auto">
            We answer reader questions by email. If your situation is
            interesting enough, it may become the next blog post (with your
            permission and details anonymized).
          </p>
          <Link to="/contact" className="btn-primary mt-6">
            Ask a question
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;
