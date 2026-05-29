import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '../shared/SectionHeader';

const cases = [
  {
    id: 1,
    client: 'US-based e-commerce brand',
    country: '🇺🇸 United States',
    product: 'Custom LED lighting fixtures',
    challenge: 'Previous supplier delivered non-compliant goods. Needed a verified replacement fast.',
    result: 'Found 3 qualified suppliers in 5 days. First order of 2,000 units passed inspection with zero defects.',
    imgId: 'case-img-1a2b3c',
    imgQuery: '[case-product-1] LED lighting factory China manufacturing quality',
  },
  {
    id: 2,
    client: 'Australian furniture retailer',
    country: '🇦🇺 Australia',
    product: 'Flat-pack office furniture',
    challenge: 'Needed a supplier who could handle large volumes with consistent quality and on-time delivery.',
    result: 'Established a long-term supplier relationship. 4 shipments completed on schedule over 18 months.',
    imgId: 'case-img-2b3c4d',
    imgQuery: '[case-product-2] office furniture factory China production',
  },
  {
    id: 3,
    client: 'European health brand',
    country: '🇩🇪 Germany',
    product: 'OEM supplement packaging',
    challenge: 'Required FDA-compliant packaging with custom branding and strict labeling requirements.',
    result: 'Sourced a certified packaging factory. All materials passed EU compliance checks before shipment.',
    imgId: 'case-img-3c4d5e',
    imgQuery: '[case-product-3] supplement packaging factory China compliance',
  },
];

export default function CaseStudiesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="section-white" ref={containerRef}>
      <div className="container-xl">
        <SectionHeader
          label="Case Studies"
          title="Real Results for Real Buyers"
          subtitle="Here are a few examples of how we've helped international buyers source successfully from China."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="card flex flex-col hover:shadow-md transition-shadow duration-200">
              <div className="rounded-lg overflow-hidden mb-5 h-44">
                <img
                  alt={c.product}
                  className="w-full h-full object-cover"
                  data-strk-img-id={c.imgId}
                  data-strk-img={c.imgQuery}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-slate-500">{c.country}</span>
                <span className="text-slate-300">·</span>
                <span id={`case-product-${c.id}`} className="text-sm font-semibold text-blue-600">{c.product}</span>
              </div>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">Challenge</p>
              <p className="text-slate-700 text-sm mb-4 leading-relaxed">{c.challenge}</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">Result</p>
              <p className="text-slate-700 text-sm leading-relaxed flex-1">{c.result}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/case-studies" className="btn-primary">
            Read More Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
