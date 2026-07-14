import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'case-1',
    client: 'UK Furniture Retailer',
    product: 'Office Chairs',
    result: 'Reduced unit cost by 22% while maintaining EN 1335 certification compliance.',
    country: '🇬🇧',
    imgId: 'case-1-img-x1y2z3',
    titleId: 'case-1-title',
    descId: 'case-1-desc',
  },
  {
    id: 'case-2',
    client: 'US Electronics Brand',
    product: 'LED Lighting',
    result: 'Sourced 3 qualified factories, passed UL certification, and shipped 50,000 units on schedule.',
    country: '🇺🇸',
    imgId: 'case-2-img-a4b5c6',
    titleId: 'case-2-title',
    descId: 'case-2-desc',
  },
  {
    id: 'case-3',
    client: 'Australian Apparel Brand',
    product: 'Sportswear',
    result: 'Identified a compliant factory, managed 3 sample rounds, and delivered 10,000 units within 60 days.',
    country: '🇦🇺',
    imgId: 'case-3-img-d7e8f9',
    titleId: 'case-3-title',
    descId: 'case-3-desc',
  },
];

export default function CaseStudiesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-2">Client Results</p>
          <h2 id="cases-section-title" className="text-neutral-900 text-3xl md:text-4xl font-bold">
            Case Studies
          </h2>
          <p id="cases-section-subtitle" className="text-neutral-500 text-lg mt-4 max-w-2xl mx-auto">
            Real sourcing projects, real outcomes. Here's how we've helped buyers across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-neutral-50 border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={c.product}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}] [cases-section-subtitle] [cases-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white rounded-lg px-2.5 py-1 text-xs font-semibold text-neutral-700 shadow">
                  {c.country} {c.client}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 id={c.titleId} className="text-neutral-900 font-semibold text-base mb-1">{c.product}</h3>
                <p id={c.descId} className="text-neutral-500 text-sm leading-relaxed">{c.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy transition-colors"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
