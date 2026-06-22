import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, MapPin } from 'lucide-react';

const cases = [
  {
    id: 'case-led',
    title: 'LED Lighting Importer — UK',
    category: 'Electronics',
    result: 'Reduced unit cost by 22% and eliminated quality rejections through pre-shipment inspection.',
    country: 'United Kingdom',
    titleId: 'case-led-title',
    descId: 'case-led-desc',
    imgId: 'case-led-img-j1k2l3',
  },
  {
    id: 'case-furniture',
    title: 'Office Furniture Brand — USA',
    category: 'Furniture',
    result: 'Sourced 3 new suppliers in 6 weeks, cutting lead time by 30% for a seasonal product launch.',
    country: 'United States',
    titleId: 'case-furniture-title',
    descId: 'case-furniture-desc',
    imgId: 'case-furniture-img-m4n5o6',
  },
  {
    id: 'case-apparel',
    title: 'Sportswear Startup — Australia',
    category: 'Apparel',
    result: 'Verified factory compliance with international labor standards and secured competitive pricing for small MOQs.',
    country: 'Australia',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
    imgId: 'case-apparel-img-p7q8r9',
  },
];

export default function HomeCaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-light-blue" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-white text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4 shadow-sm">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Real Results for Real Clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses across the globe source smarter from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-light-blue text-primary text-xs font-semibold px-2 py-1 rounded mb-3">
                  {c.category}
                </span>
                <h3 id={c.titleId} className="font-semibold text-primary-dark mb-2">{c.title}</h3>
                <p id={c.descId} className="text-gray-600 text-sm leading-relaxed mb-4">{c.result}</p>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <MapPin className="w-3 h-3" />
                  <span>{c.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
