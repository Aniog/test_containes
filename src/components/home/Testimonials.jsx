import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const testimonials = [
  {
    id: 'test-1',
    quote:
      'The ARTITECT double folding machine transformed our production line. Precision is unmatched and the support team is always available.',
    name: 'Marco Bianchi',
    role: 'Production Director',
    company: 'Bianchi Metal Works, Italy',
    imgId: 'test-1-img-4a7c2e',
    titleId: 'test-1-name',
    descId: 'test-1-role',
  },
  {
    id: 'test-2',
    quote:
      'We have installed 12 ARTITECT machines across our facilities. Reliability and after-sales service are second to none.',
    name: 'Sarah Thompson',
    role: 'Operations Manager',
    company: 'Thompson Fabrications, UK',
    imgId: 'test-2-img-8b3d1f',
    titleId: 'test-2-name',
    descId: 'test-2-role',
  },
  {
    id: 'test-3',
    quote:
      'Outstanding build quality and intuitive controls. Our operators were up and running within a day of installation.',
    name: 'Hiroshi Tanaka',
    role: 'Chief Engineer',
    company: 'Tanaka Industries, Japan',
    imgId: 'test-3-img-6e5a9c',
    titleId: 'test-3-name',
    descId: 'test-3-role',
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-surface" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
            Client Testimonials
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy mb-5">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 flex flex-col"
            >
              {/* Quote mark */}
              <div className="text-gold font-display text-5xl leading-none mb-4 select-none">"</div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{t.quote}</p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  alt={t.name}
                  data-strk-img-id={t.imgId}
                  data-strk-img={`[${t.descId}] [${t.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="80"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0 bg-gray-100"
                />
                <div>
                  <p id={t.titleId} className="font-semibold text-navy text-sm">{t.name}</p>
                  <p id={t.descId} className="text-gray-400 text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
