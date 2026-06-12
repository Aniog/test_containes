import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../shared/SectionHeader';

const cases = [
  {
    id: 'led-lighting',
    client: 'Australian Retailer',
    product: 'LED Lighting Products',
    result: 'Reduced unit cost by 28% while meeting CE and RoHS certification requirements.',
    country: '🇦🇺',
    titleId: 'case-led-lighting-title',
    descId: 'case-led-lighting-desc',
  },
  {
    id: 'office-furniture',
    client: 'UK Office Supplies Distributor',
    product: 'Office Furniture Range',
    result: 'Sourced 3 verified factories, coordinated 40-foot container shipments over 18 months.',
    country: '🇬🇧',
    titleId: 'case-office-furniture-title',
    descId: 'case-office-furniture-desc',
  },
  {
    id: 'sports-apparel',
    client: 'US Sports Brand',
    product: 'Custom Sports Apparel',
    result: 'Managed sampling, bulk production, and QC for a 10,000-unit launch order.',
    country: '🇺🇸',
    titleId: 'case-sports-apparel-title',
    descId: 'case-sports-apparel-desc',
  },
];

export default function CaseStudiesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Case Studies"
          title="Real Results for Real Buyers"
          subtitle="A selection of sourcing projects we have completed for clients across different industries and countries."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
              <div className="relative h-48 bg-neutral-100 overflow-hidden">
                <img
                  data-strk-img-id={`case-${c.id}-img-5e2b`}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.product}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 text-xs font-semibold text-neutral-700 shadow-sm">
                  {c.country} {c.client}
                </div>
              </div>
              <div className="p-5">
                <h3 id={c.titleId} className="text-neutral-900 font-bold text-base mb-2">{c.product}</h3>
                <p id={c.descId} className="text-neutral-600 text-sm leading-relaxed">{c.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-sky transition-colors"
          >
            View all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
