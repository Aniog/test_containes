import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle2 } from 'lucide-react';
import { trustPoints } from '../../data/content';

const TrustSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] w-full max-w-md rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
              <img
                alt="QC inspector checking products at a factory"
                className="w-full h-full object-cover"
                data-strk-img-id="trust-img-qc-3f8d2a"
                data-strk-img="[trust-section-desc] [trust-section-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
              Why buyers choose us
            </span>
            <h2 id="trust-section-title" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              A practical, on-the-ground partner in China
            </h2>
            <p id="trust-section-desc" className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              We are not a marketplace and not a broker. We are an independent sourcing team
              based in China, working directly for the buyer.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustPoints.map((t) => (
                <div key={t.id} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-slate-900">{t.stat}</span>
                    <span className="text-sm text-slate-500">{t.statLabel}</span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-slate-900">{t.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{t.description}</p>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-2">
              {[
                'Independent of factories — we represent the buyer',
                'Bilingual contracts and clear payment milestones',
                'Photo and video reports at every step',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
