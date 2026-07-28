import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Package } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'case-furniture',
    title: 'Furniture Importer Reduces Defect Rate by 60%',
    category: 'Quality Control',
    country: 'United Kingdom',
    excerpt: 'A UK-based furniture retailer was experiencing high defect rates from their existing Chinese supplier. We conducted a factory audit, implemented a QC checklist, and switched them to a verified manufacturer.',
    result: '60% reduction in defects, 15% cost saving',
    imgId: 'case-furniture-img-2a3b4c',
    titleId: 'case-furniture-title',
    descId: 'case-furniture-desc',
  },
  {
    id: 'case-electronics',
    title: 'Electronics Brand Launches New Product Line',
    category: 'Supplier Sourcing',
    country: 'United States',
    excerpt: 'A US consumer electronics brand needed to source a new line of smart home devices. We identified 4 qualified manufacturers, arranged samples, and managed the first production run.',
    result: 'On-time delivery, passed all compliance tests',
    imgId: 'case-electronics-img-5d6e7f',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    id: 'case-apparel',
    title: 'Apparel Brand Scales Production Safely',
    category: 'Production Follow-up',
    country: 'Australia',
    excerpt: 'An Australian fashion brand needed to scale from 500 to 5,000 units per order. We managed supplier negotiations, production monitoring, and pre-shipment inspections across two factories.',
    result: 'Successful scale-up with zero shipment rejections',
    imgId: 'case-apparel-img-8g9h0i',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
  },
];

export default function HomeCaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-brand-light" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Case Studies
          </span>
          <h2 id="cases-section-title" className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Real Results for Real Buyers
          </h2>
          <p id="cases-section-subtitle" className="text-brand-mid text-lg max-w-2xl mx-auto">
            See how we've helped businesses like yours source smarter from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cases.map((c) => (
            <div key={c.id} className="bg-white rounded-xl overflow-hidden border border-brand-border hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}] [cases-section-subtitle] [cases-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-brand-blue text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {c.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-brand-mid text-xs mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {c.country}
                </div>
                <h3 id={c.titleId} className="font-semibold text-brand-dark mb-2 leading-snug">{c.title}</h3>
                <p id={c.descId} className="text-brand-mid text-sm leading-relaxed mb-4">{c.excerpt}</p>
                <div className="flex items-center gap-2 bg-green-50 text-brand-green text-xs font-semibold px-3 py-2 rounded-lg">
                  <Package className="w-3.5 h-3.5" />
                  {c.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            View All Case Studies <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
