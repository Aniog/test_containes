import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Package } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'us-electronics',
    client: 'US Electronics Retailer',
    country: 'United States',
    product: 'LED Lighting Products',
    result: 'Reduced unit cost by 22% and cut lead time from 90 to 55 days through supplier consolidation.',
    titleId: 'case-us-electronics-title',
    descId: 'case-us-electronics-desc',
    imgId: 'case-img-us-electronics-v1x2',
  },
  {
    id: 'uk-furniture',
    client: 'UK Home Goods Brand',
    country: 'United Kingdom',
    product: 'Flat-Pack Furniture',
    result: 'Identified 3 compliant factories, passed all UK safety certifications, and launched on schedule.',
    titleId: 'case-uk-furniture-title',
    descId: 'case-uk-furniture-desc',
    imgId: 'case-img-uk-furniture-y3z4',
  },
  {
    id: 'au-apparel',
    client: 'Australian Apparel Brand',
    country: 'Australia',
    product: 'Sustainable Activewear',
    result: 'Sourced GOTS-certified fabric suppliers and reduced defect rate from 8% to under 1.5%.',
    titleId: 'case-au-apparel-title',
    descId: 'case-au-apparel-desc',
    imgId: 'case-img-au-apparel-a5b6',
  },
];

export default function CaseStudiesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">Client Results</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Case Studies
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
            Real sourcing projects, real outcomes. Here's how we've helped buyers across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-44 bg-slate-100 overflow-hidden">
                <img
                  alt={c.product}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="w-3 h-3" /> {c.country}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    <Package className="w-3 h-3" /> {c.product}
                  </span>
                </div>
                <h3 id={c.titleId} className="font-semibold text-slate-800 mb-2">{c.client}</h3>
                <p id={c.descId} className="text-slate-600 text-sm leading-relaxed mb-4">{c.result}</p>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:text-brand-orange transition-colors"
                >
                  Read full case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
