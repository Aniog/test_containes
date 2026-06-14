import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../shared/SectionHeader';

const cases = [
  {
    id: 'furniture-uk',
    client: 'UK Furniture Retailer',
    category: 'Furniture',
    result: 'Reduced unit cost by 22% and cut lead time from 16 to 10 weeks',
    titleId: 'case-furniture-uk-title',
    descId: 'case-furniture-uk-desc',
  },
  {
    id: 'electronics-us',
    client: 'US Electronics Brand',
    category: 'Electronics',
    result: 'Identified 3 compliant suppliers and passed CE/FCC certification on first attempt',
    titleId: 'case-electronics-us-title',
    descId: 'case-electronics-us-desc',
  },
  {
    id: 'apparel-au',
    client: 'Australian Apparel Brand',
    category: 'Apparel',
    result: 'Resolved quality defect issue mid-production, saving a $120,000 order',
    titleId: 'case-apparel-au-title',
    descId: 'case-apparel-au-desc',
  },
];

export default function HomeCaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real Results for Real Buyers"
          subtitle="See how we've helped businesses like yours source smarter from China."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
              <div className="h-48 bg-gray-100 overflow-hidden relative">
                <img
                  data-strk-img-id={`case-img-${c.id}-g7h8i9`}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.client}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-brand-red text-white text-xs font-semibold px-2 py-1 rounded">
                  {c.category}
                </span>
              </div>
              <div className="p-5">
                <h3 id={c.titleId} className="text-brand-navy font-semibold mb-2">{c.client}</h3>
                <p id={c.descId} className="text-brand-slate text-sm leading-relaxed">{c.result}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-red transition-colors"
          >
            Read all case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
