import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'furniture-uk',
    client: 'UK Furniture Retailer',
    country: 'United Kingdom',
    category: 'Furniture & Home Decor',
    challenge: 'Needed to source 500 units of custom wooden shelving with specific dimensions and finish, within a tight 8-week timeline.',
    result: 'Identified 3 qualified factories, negotiated 18% below initial quotes, delivered on time with zero defects.',
    saving: '18% cost reduction',
    imgId: 'case-furniture-uk-4a5b6c',
    titleId: 'case-furniture-uk-title',
    descId: 'case-furniture-uk-desc',
  },
  {
    id: 'electronics-us',
    client: 'US Electronics Brand',
    country: 'United States',
    category: 'Electronics & Components',
    challenge: 'Previous supplier failed quality standards. Needed a verified replacement with CE and FCC certifications.',
    result: 'Audited 6 factories, selected 1 with full certifications, completed pre-shipment inspection with 99.2% pass rate.',
    saving: '99.2% QC pass rate',
    imgId: 'case-electronics-us-5b6c7d',
    titleId: 'case-electronics-us-title',
    descId: 'case-electronics-us-desc',
  },
  {
    id: 'apparel-au',
    client: 'Australian Apparel Brand',
    country: 'Australia',
    category: 'Clothing & Textiles',
    challenge: 'Launching a new activewear line and needed a reliable OEM manufacturer with sustainable fabric options.',
    result: 'Sourced 2 certified OEM factories, managed sample rounds, and coordinated first production run of 2,000 units.',
    saving: 'First order delivered in 10 weeks',
    imgId: 'case-apparel-au-6c7d8e',
    titleId: 'case-apparel-au-title',
    descId: 'case-apparel-au-desc',
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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Client Results</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Case Studies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Real sourcing projects, real outcomes. Here's how we've helped buyers across different industries.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-44 bg-gray-100 overflow-hidden">
                <img
                  alt={c.client}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-lightblue px-2.5 py-1 rounded-full">{c.category}</span>
                  <span className="text-xs text-gray-400">{c.country}</span>
                </div>
                <h3 id={c.titleId} className="font-semibold text-navy text-base mb-2">{c.client}</h3>
                <p id={c.descId} className="text-gray-500 text-sm leading-relaxed mb-3">{c.challenge}</p>
                <div className="bg-green-50 border border-green-100 rounded-lg px-3 py-2 mb-4">
                  <p className="text-green-700 text-xs font-medium">✓ {c.saving}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{c.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
