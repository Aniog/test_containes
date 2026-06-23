import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { blogPosts } from '../data/content';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const [featured, ...rest] = blogPosts;

  return (
    <div ref={containerRef}>
      <PageHeader
        breadcrumb="Blog"
        eyebrow="Sourcing insights"
        title="Practical guides for buyers sourcing from China"
        description="Sourcing strategy, supplier verification, quality control, and shipping. Written by our team based on real project experience."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-slate-100 overflow-hidden">
              <img
                alt={featured.title}
                className="w-full h-full object-cover"
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="p-8 md:p-10">
              <span className="inline-block px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs font-semibold">
                {featured.category}
              </span>
              <h2 id={featured.titleId} className="mt-3 text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                {featured.title}
              </h2>
              <p id={featured.descId} className="mt-3 text-base text-slate-600 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {featured.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {featured.readTime}
                </span>
              </div>
              <div className="mt-6">
                <span className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </article>

          {/* Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <article
                key={p.id}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-block self-start px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs font-semibold">
                    {p.category}
                  </span>
                  <h3 id={p.titleId} className="mt-3 text-lg font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p id={p.descId} className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {p.excerpt}
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {p.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {p.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Need help applying these ideas to your project?
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            We translate sourcing strategy into a working plan for your specific product and market.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Talk to a sourcing specialist
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
