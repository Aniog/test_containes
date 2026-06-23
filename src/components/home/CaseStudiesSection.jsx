import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, MapPin } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { caseStudies } from '../../data/content';

const CaseStudiesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case studies"
          title="Real sourcing projects we delivered"
          description="A snapshot of how we have helped buyers across categories run successful production runs from China."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.slice(0, 4).map((c) => (
            <article
              key={c.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow"
            >
              <div className="md:w-2/5 aspect-[4/3] md:aspect-auto bg-slate-100 overflow-hidden">
                <img
                  alt={c.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="md:w-3/5 p-6 flex flex-col">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded bg-blue-50 text-blue-700 font-semibold">
                    {c.industry}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3 h-3" /> {c.location}
                  </span>
                </div>
                <h3 id={c.titleId} className="mt-3 text-lg font-semibold text-slate-900">
                  {c.title}
                </h3>
                <p id={c.descId} className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {c.summary}
                </p>
                <div className="mt-auto pt-4 grid grid-cols-3 gap-2 border-t border-slate-100">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-base font-bold text-slate-900">{m.value}</p>
                      <p className="text-xs text-slate-500">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            See more case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
