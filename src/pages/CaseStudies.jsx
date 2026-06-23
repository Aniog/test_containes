import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, MapPin } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { caseStudies } from '../data/content';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        breadcrumb="Case Studies"
        eyebrow="Case studies"
        title="Selected sourcing projects"
        description="Examples drawn from real client work. Some details have been generalized to protect commercial confidentiality."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {caseStudies.map((c, idx) => (
            <article
              key={c.id}
              className={`bg-white rounded-xl border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 ${
                idx % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto bg-slate-100 overflow-hidden">
                <img
                  alt={c.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="lg:col-span-7 p-6 md:p-10 flex flex-col">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded bg-blue-50 text-blue-700 font-semibold">
                    {c.industry}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3 h-3" /> {c.location}
                  </span>
                </div>
                <h2 id={c.titleId} className="mt-3 text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                  {c.title}
                </h2>
                <p id={c.descId} className="mt-3 text-base text-slate-600 leading-relaxed">
                  {c.summary}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-xl font-bold text-slate-900">{m.value}</p>
                      <p className="text-xs text-slate-500 mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Could your project be next?
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
            Tell us about your product and timeline. We will share an honest assessment and a clear next step.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
