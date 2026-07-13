import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, MapPin } from 'lucide-react';

const cases = [
  {
    id: 'led-lighting',
    title: 'LED Lighting Importer — Germany',
    category: 'Electronics',
    result: 'Reduced unit cost by 22% and eliminated quality defects through pre-shipment inspection.',
    imgId: 'case-led-4a8c2f',
    titleId: 'case-led-title',
    descId: 'case-led-desc',
  },
  {
    id: 'office-furniture',
    title: 'Office Furniture Buyer — Australia',
    category: 'Furniture',
    result: 'Sourced 3 verified factories, negotiated 15% lower pricing, and delivered on schedule.',
    imgId: 'case-furniture-7b3e1d',
    titleId: 'case-furniture-title',
    descId: 'case-furniture-desc',
  },
  {
    id: 'sportswear',
    title: 'Sportswear Brand — USA',
    category: 'Apparel',
    result: 'Full production monitoring and QC for a 10,000-unit order with zero returns.',
    imgId: 'case-sportswear-2c9f5a',
    titleId: 'case-sportswear-title',
    descId: 'case-sportswear-desc',
  },
];

export default function CaseStudiesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-14">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Client Results</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            Case Studies
          </h2>
          <p className="text-brand-body text-lg max-w-2xl mx-auto">
            Real sourcing projects, real outcomes. See how we've helped buyers around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <Link
              key={c.id}
              to="/case-studies"
              className="group rounded-xl overflow-hidden border border-brand-border hover:shadow-md transition-shadow bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-brand-navy text-white text-xs font-medium px-3 py-1 rounded-full">
                    {c.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 id={c.titleId} className="text-base font-semibold text-brand-dark mb-2">
                  {c.title}
                </h3>
                <p id={c.descId} className="text-brand-body text-sm leading-relaxed mb-3">
                  {c.result}
                </p>
                <div className="flex items-center gap-1 text-brand-navy text-sm font-medium">
                  <span>Read case study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/case-studies" className="btn-secondary inline-flex items-center gap-2">
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
