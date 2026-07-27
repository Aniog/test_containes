import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MapPin, TrendingUp } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const cases = [
  {
    id: 'case-furniture',
    title: 'UK Furniture Retailer Cuts Sourcing Costs by 28%',
    category: 'Furniture',
    country: 'United Kingdom',
    result: '28% cost reduction',
    imgId: 'case-img-ss001',
    titleId: 'case-title-furniture',
    descId: 'case-desc-furniture',
    desc: 'We sourced 3 verified furniture manufacturers in Foshan, negotiated pricing, and managed QC for a UK retailer expanding their product range.',
  },
  {
    id: 'case-electronics',
    title: 'US Electronics Brand Launches Private Label Line',
    category: 'Electronics',
    country: 'United States',
    result: 'On-time delivery, 0 defects',
    imgId: 'case-img-ss002',
    titleId: 'case-title-electronics',
    descId: 'case-desc-electronics',
    desc: 'Full OEM coordination for a US electronics brand — from factory selection and sample approval to pre-shipment inspection and freight.',
  },
  {
    id: 'case-apparel',
    title: 'Australian Apparel Brand Scales Production',
    category: 'Apparel',
    country: 'Australia',
    result: '3x production volume',
    imgId: 'case-img-ss003',
    titleId: 'case-title-apparel',
    descId: 'case-desc-apparel',
    desc: 'We helped an Australian fashion brand scale from a single factory to a multi-supplier network while maintaining consistent quality standards.',
  },
];

const CaseStudiesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real Results for Real Buyers"
          subtitle="See how we've helped businesses across industries source smarter from China."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((c) => (
            <div key={c.id} className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}] [case-studies-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-brand-navy text-white text-xs font-semibold px-2.5 py-1 rounded-full">{c.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 id={c.titleId} className="text-lg font-bold text-neutral-900 mb-2 leading-snug">{c.title}</h3>
                <p id={c.descId} className="text-neutral-600 text-sm leading-relaxed mb-4">{c.desc}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-neutral-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{c.country}</span>
                  </div>
                  <div className="flex items-center gap-1 text-brand-blue font-semibold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{c.result}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-navy transition-colors"
          >
            View All Case Studies →
          </Link>
        </div>
      </div>
      <span id="case-studies-section-title" className="sr-only">China sourcing case studies results buyers</span>
    </section>
  );
};

export default CaseStudiesSection;
