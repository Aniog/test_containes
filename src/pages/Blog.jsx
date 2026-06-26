import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { format, parseISO } from "date-fns";
import strkImgConfig from "@/strk-img-config.json";
import { POSTS } from "@/lib/site-data";
import PageHero from "@/components/site/PageHero";

export default function Blog() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  const [featured, ...rest] = POSTS;

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Blog & Insights"
        title="Practical guides for buyers sourcing from China"
        description="Honest, no-fluff articles on supplier verification, QC, shipping and negotiation — written from our day-to-day experience on the ground."
        titleId="blog-page-title"
        descId="blog-page-desc"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <article className="grid grid-cols-1 lg:grid-cols-5 gap-6 rounded-2xl overflow-hidden border border-slate-200 bg-white">
            <div className="lg:col-span-3 aspect-[16/10] lg:aspect-auto bg-slate-100 overflow-hidden">
              <img
                alt={featured.title}
                className="h-full w-full object-cover"
                data-strk-img-id={featured.imgId}
                data-strk-img={`[blog-featured-desc] [blog-featured-title] china sourcing manufacturing`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
              />
            </div>
            <div className="lg:col-span-2 p-7 md:p-9 flex flex-col">
              <span className="inline-flex w-fit items-center rounded-full bg-amber-50 text-amber-700 text-xs font-semibold px-2.5 py-1">
                Featured · {featured.category}
              </span>
              <h2
                id="blog-featured-title"
                className="mt-4 text-2xl md:text-3xl font-bold text-navy-900 leading-tight"
              >
                {featured.title}
              </h2>
              <p
                id="blog-featured-desc"
                className="mt-3 text-slate-600 leading-relaxed flex-1"
              >
                {featured.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {format(parseISO(featured.date), "MMM d, yyyy")}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-1.5 text-navy-700 hover:text-navy-900 font-semibold text-sm w-fit"
              >
                Read article
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>

          {/* Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <article
                key={p.id}
                className="group rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-md transition flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={p.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[blog-${p.id}-desc] [blog-${p.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="inline-flex w-fit items-center rounded-full bg-navy-50 text-navy-700 text-xs font-semibold px-2.5 py-1">
                    {p.category}
                  </span>
                  <h3
                    id={`blog-${p.id}-title`}
                    className="mt-3 text-lg font-semibold text-navy-900 leading-snug"
                  >
                    {p.title}
                  </h3>
                  <p
                    id={`blog-${p.id}-desc`}
                    className="mt-2 text-sm text-slate-600 leading-relaxed flex-1"
                  >
                    {p.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {format(parseISO(p.date), "MMM d, yyyy")}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {p.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-navy-50 border border-navy-100 px-6 py-10 md:px-12 md:py-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy-900">
              Need help applying this to your project?
            </h2>
            <p className="mt-4 text-slate-700 text-lg max-w-2xl mx-auto">
              We can walk you through your sourcing plan in a 30-minute call,
              free of charge.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3.5 transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
