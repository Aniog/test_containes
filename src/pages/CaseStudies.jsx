import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2, TrendingUp, DollarSign, Clock, ShieldCheck } from 'lucide-react';

const caseStudies = [
  {
    title: 'Electronics Manufacturer Saves 23% on Component Costs',
    category: 'Electronics',
    client: 'US-based electronics company',
    challenge: 'A US-based electronics company needed reliable PCB manufacturers with competitive pricing. Their existing supplier had quality inconsistencies and rising costs.',
    solution: 'We identified three verified PCB manufacturers in Shenzhen and Dongguan, conducted on-site audits, and negotiated pricing based on volume commitments. We managed sample production and implemented a multi-stage quality inspection process.',
    results: [
      { icon: DollarSign, value: '23%', label: 'Cost reduction' },
      { icon: Clock, value: '15%', label: 'Faster delivery' },
      { icon: ShieldCheck, value: '99.2%', label: 'Quality pass rate' },
    ],
  },
  {
    title: 'Fashion Brand Launches Sustainable Clothing Line',
    category: 'Textiles',
    client: 'European fashion brand',
    challenge: 'A European fashion brand wanted to source organic cotton garments with GOTS certification. They needed a manufacturer with proven sustainability practices and fair labor standards.',
    solution: 'We audited five textile factories in Guangdong and Zhejiang for GOTS certification, labor practices, and environmental compliance. We managed the entire production process from fabric sourcing to final inspection.',
    results: [
      { icon: ShieldCheck, value: 'GOTS', label: 'Certified production' },
      { icon: CheckCircle2, value: 'Zero', label: 'Defect rate' },
      { icon: TrendingUp, value: '2', label: 'Year partnership' },
    ],
  },
  {
    title: 'Automotive Supplier Secures ISO-Certified Partner',
    category: 'Automotive',
    client: 'German automotive parts distributor',
    challenge: 'A German automotive parts distributor needed an ISO 9001-certified manufacturer in China for precision-machined components. Quality consistency and documentation were critical.',
    solution: 'We conducted thorough audits of eight potential manufacturers, verifying ISO 9001 certification, production capabilities, and quality management systems. We facilitated a trial order before the long-term partnership.',
    results: [
      { icon: ShieldCheck, value: 'ISO 9001', label: 'Verified' },
      { icon: Clock, value: '3', label: 'Year partnership' },
      { icon: TrendingUp, value: '50K+', label: 'Units per month' },
    ],
  },
  {
    title: 'Retailer Consolidates Shipping from Multiple Suppliers',
    category: 'Logistics',
    client: 'Australian home goods retailer',
    challenge: 'An Australian retailer was sourcing from six different suppliers across China, managing separate shipments with high freight costs and complex coordination.',
    solution: 'We coordinated production timelines across all six suppliers, consolidated shipments at our warehouse in Shenzhen, and arranged a single container shipment to Sydney. We handled all customs documentation.',
    results: [
      { icon: DollarSign, value: '35%', label: 'Shipping cost savings' },
      { icon: Clock, value: '10', label: 'Days faster delivery' },
      { icon: CheckCircle2, value: '100%', label: 'On-time delivery' },
    ],
  },
  {
    title: 'Startup Launches First Product with Zero Prior Experience',
    category: 'Consumer Goods',
    client: 'UK-based startup',
    challenge: 'A UK startup wanted to manufacture a new consumer product in China but had no prior sourcing experience or supplier contacts.',
    solution: 'We guided them through the entire process: from product specification refinement to supplier identification, sample evaluation, production management, and first shipment coordination.',
    results: [
      { icon: TrendingUp, value: 'First', label: 'Product launched' },
      { icon: DollarSign, value: '18%', label: 'Under budget' },
      { icon: ShieldCheck, value: 'Zero', label: 'Quality issues' },
    ],
  },
  {
    title: 'Industrial Equipment Buyer Avoids Fraudulent Supplier',
    category: 'Supplier Verification',
    client: 'Canadian industrial equipment buyer',
    challenge: 'A Canadian company found a supplier online offering industrial pumps at unusually low prices. They wanted verification before placing a large order.',
    solution: 'We conducted an on-site audit and discovered the supplier was a trading company, not a manufacturer, with no production facilities. We identified an alternative verified manufacturer with better pricing and quality.',
    results: [
      { icon: ShieldCheck, value: 'Fraud', label: 'Avoided' },
      { icon: DollarSign, value: '12%', label: 'Better pricing' },
      { icon: CheckCircle2, value: 'Verified', label: 'Manufacturer' },
    ],
  },
];

export default function CaseStudiesPage() {
  const containerRef = useRef(null);

  // useEffect(() => {
    // return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  // }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Case Studies</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Real results from real clients. See how we have helped businesses source from China successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div
                    className="w-full aspect-video rounded-xl overflow-hidden"
                    data-strk-bg-id={`case-study-bg-${index}-p7q8r9`}
                    data-strk-bg={`[case-study-title-${index}] [case-study-category-${index}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="inline-block bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {study.category}
                  </span>
                  <h2 id={`case-study-title-${index}`} className="text-2xl font-bold text-slate-900 mb-2">
                    {study.title}
                  </h2>
                  <p className="text-sm text-slate-500 mb-4">Client: {study.client}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Challenge</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Solution</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center">
                        <result.icon className="w-5 h-5 text-blue-800 mx-auto mb-1" />
                        <div className="text-lg font-bold text-slate-900">{result.value}</div>
                        <div className="text-xs text-slate-500">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Want Similar Results?</h2>
          <p className="mt-4 text-lg text-slate-600">
            Tell us about your sourcing needs and we will show you how we can help.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
