import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingDown, Clock, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'led-lighting',
    client: 'UK Electrical Distributor',
    flag: '🇬🇧',
    industry: 'Electronics / LED Lighting',
    challenge: 'The client was sourcing LED panels from a Alibaba supplier but faced inconsistent quality and no response when defects were found. They needed a reliable, audited factory.',
    solution: 'We identified 4 alternative factories in Guangdong, conducted on-site audits, and arranged samples. The client selected a factory with ISO 9001 certification and a dedicated export team.',
    result: '32% cost reduction, zero defect rate over 3 orders, on-time delivery every time.',
    metrics: [
      { label: 'Cost Reduction', value: '32%' },
      { label: 'Defect Rate', value: '0%' },
      { label: 'Orders Completed', value: '3' },
    ],
    imgId: 'case-led-lighting-a1b2c3',
    titleId: 'case-led-lighting-title',
    descId: 'case-led-lighting-desc',
  },
  {
    id: 'office-furniture',
    client: 'German Office Furniture Retailer',
    flag: '🇩🇪',
    industry: 'Furniture',
    challenge: 'The client had experienced a failed shipment with a previous agent — wrong dimensions, poor packaging, and a 6-week delay. They needed a trustworthy partner for their next order.',
    solution: 'We sourced 3 verified furniture factories in Foshan, conducted a factory audit, and implemented a strict production monitoring schedule with weekly photo updates.',
    result: 'Goods delivered on time, passed EU safety standards, and the client has since placed 4 repeat orders.',
    metrics: [
      { label: 'On-Time Delivery', value: '100%' },
      { label: 'Repeat Orders', value: '4' },
      { label: 'Compliance', value: 'EU Passed' },
    ],
    imgId: 'case-office-furniture-d4e5f6',
    titleId: 'case-office-furniture-title',
    descId: 'case-office-furniture-desc',
  },
  {
    id: 'sporting-goods',
    client: 'US Amazon FBA Seller',
    flag: '🇺🇸',
    industry: 'Sporting Goods',
    challenge: 'A first-time importer needed to source branded yoga mats and resistance bands for Amazon FBA. They had no China contacts and were concerned about Amazon\'s strict packaging requirements.',
    solution: 'We sourced 5 factories, arranged samples, and coordinated custom packaging and labeling to meet Amazon FBA requirements. A pre-shipment inspection was conducted before release.',
    result: 'Products passed Amazon FBA inspection on first attempt. The seller launched on time and achieved a 4.7-star rating.',
    metrics: [
      { label: 'FBA Inspection', value: 'Passed' },
      { label: 'Amazon Rating', value: '4.7★' },
      { label: 'Time to Launch', value: 'On Schedule' },
    ],
    imgId: 'case-sporting-goods-g7h8i9',
    titleId: 'case-sporting-goods-title',
    descId: 'case-sporting-goods-desc',
  },
  {
    id: 'apparel',
    client: 'Australian Fashion Brand',
    flag: '🇦🇺',
    industry: 'Apparel & Textiles',
    challenge: 'The brand needed a factory capable of producing small-batch private label activewear with custom labels and packaging. Previous factories had poor communication and missed deadlines.',
    solution: 'We identified a Guangzhou factory specializing in small-batch activewear, managed sample revisions, and provided weekly production updates with photos.',
    result: 'First order of 300 units delivered in 45 days. The brand has since scaled to 2,000 units per order.',
    metrics: [
      { label: 'First Order', value: '300 units' },
      { label: 'Current Order Size', value: '2,000 units' },
      { label: 'Lead Time', value: '45 days' },
    ],
    imgId: 'case-apparel-j1k2l3',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="bg-white" ref={containerRef}>
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Client Results</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              Case Studies
            </h1>
            <p className="text-slate-400 text-lg">
              Real projects, real results. Here's how we've helped global buyers source smarter from China.
            </p>
          </div>
        </div>
      </div>

      {/* Cases */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="space-y-16">
          {cases.map((cs, index) => (
            <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start border-b border-slate-100 pb-16 last:border-0 last:pb-0">
              {/* Image */}
              <div className={`rounded-2xl overflow-hidden bg-slate-100 aspect-video ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  alt={cs.industry}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{cs.industry}</span>
                </div>
                <h2 id={cs.titleId} className="text-2xl font-bold text-slate-900 mb-1">
                  {cs.client} {cs.flag}
                </h2>
                <p id={cs.descId} className="sr-only">{cs.industry} sourcing case study</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 my-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
                      <div className="text-lg font-bold text-blue-700">{m.value}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Challenge</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Our Solution</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                    <h3 className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-1">Result</h3>
                    <p className="text-green-800 text-sm font-medium">{cs.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Want results like these?</h2>
          <p className="text-slate-500 mb-8 text-lg">Tell us about your sourcing project and we'll show you how we can help.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
