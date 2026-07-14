import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, Clock, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'case-uk-furniture',
    client: 'UK Furniture Retailer',
    country: '🇬🇧 United Kingdom',
    product: 'Office Chairs',
    category: 'Furniture',
    challenge: 'The client was sourcing office chairs from a European distributor at high cost and needed to reduce unit price while maintaining EN 1335 certification compliance.',
    solution: 'We identified 4 qualified Chinese manufacturers with EN 1335 certification, conducted factory audits, and managed a 3-round sample process. We negotiated a 22% cost reduction versus their previous supplier.',
    result: '22% cost reduction, EN 1335 certified, 5,000 units delivered on schedule.',
    metrics: [
      { label: 'Cost Reduction', value: '22%', icon: TrendingDown },
      { label: 'Units Delivered', value: '5,000', icon: CheckCircle },
      { label: 'Lead Time', value: '45 days', icon: Clock },
    ],
    imgId: 'case-uk-furniture-img-a1b2',
    titleId: 'case-uk-furniture-title',
    descId: 'case-uk-furniture-desc',
  },
  {
    id: 'case-us-electronics',
    client: 'US Electronics Brand',
    country: '🇺🇸 United States',
    product: 'LED Lighting',
    category: 'Electronics',
    challenge: 'A US brand needed to source UL-certified LED lighting for retail distribution. Previous attempts with unverified suppliers resulted in failed certification tests and wasted samples.',
    solution: 'We sourced 3 factories with existing UL certification experience, managed the certification process, and conducted pre-shipment inspections on 50,000 units before container loading.',
    result: 'UL certification passed, 50,000 units shipped, zero defects reported.',
    metrics: [
      { label: 'Units Shipped', value: '50,000', icon: CheckCircle },
      { label: 'Defect Rate', value: '0%', icon: TrendingDown },
      { label: 'On-Time Delivery', value: '100%', icon: Clock },
    ],
    imgId: 'case-us-electronics-img-c3d4',
    titleId: 'case-us-electronics-title',
    descId: 'case-us-electronics-desc',
  },
  {
    id: 'case-au-apparel',
    client: 'Australian Apparel Brand',
    country: '🇦🇺 Australia',
    product: 'Sportswear',
    category: 'Apparel',
    challenge: 'A growing Australian activewear brand needed a reliable OEM manufacturer for private label sportswear. They had no prior China sourcing experience and needed end-to-end support.',
    solution: 'We identified a compliant factory with OEKO-TEX certification, managed 3 sample rounds, coordinated packaging design, and oversaw production of the first 10,000-unit order.',
    result: '10,000 units delivered in 60 days, OEKO-TEX certified, ongoing partnership established.',
    metrics: [
      { label: 'Units Delivered', value: '10,000', icon: CheckCircle },
      { label: 'Lead Time', value: '60 days', icon: Clock },
      { label: 'Sample Rounds', value: '3', icon: TrendingDown },
    ],
    imgId: 'case-au-apparel-img-e5f6',
    titleId: 'case-au-apparel-title',
    descId: 'case-au-apparel-desc',
  },
  {
    id: 'case-de-packaging',
    client: 'German E-Commerce Company',
    country: '🇩🇪 Germany',
    product: 'Custom Packaging',
    category: 'Packaging',
    challenge: 'A German e-commerce company needed custom printed boxes and poly mailers for their subscription box service. They required FSC-certified materials and specific Pantone color matching.',
    solution: 'We sourced 2 FSC-certified packaging manufacturers, managed color proofing, and coordinated a 3-month rolling production schedule to match their subscription box dispatch calendar.',
    result: 'FSC certified, Pantone-matched, 30% cost saving vs. European suppliers.',
    metrics: [
      { label: 'Cost Saving', value: '30%', icon: TrendingDown },
      { label: 'Color Accuracy', value: '100%', icon: CheckCircle },
      { label: 'On-Time Rate', value: '98%', icon: Clock },
    ],
    imgId: 'case-de-packaging-img-g7h8',
    titleId: 'case-de-packaging-title',
    descId: 'case-de-packaging-desc',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-2">Client Results</p>
          <h1 id="cases-page-title" className="text-white text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p id="cases-page-subtitle" className="text-blue-200 text-lg max-w-2xl mx-auto">
            Real sourcing projects, real outcomes. Here's how we've helped buyers across different industries and countries.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {cases.map((c) => (
            <div key={c.id} className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    alt={c.product}
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[${c.descId}] [${c.titleId}] [cases-page-subtitle] [cases-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-neutral-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                      {c.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <div className="text-sm text-neutral-500 mb-1">{c.country}</div>
                  <h2 id={c.titleId} className="text-neutral-900 text-xl font-bold mb-1">{c.client}</h2>
                  <div className="text-brand-blue text-sm font-medium mb-4">Product: {c.product}</div>

                  <div className="mb-4">
                    <h3 className="text-neutral-700 text-xs font-semibold uppercase tracking-wider mb-1">Challenge</h3>
                    <p id={c.descId} className="text-neutral-500 text-sm leading-relaxed">{c.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-neutral-700 text-xs font-semibold uppercase tracking-wider mb-1">Our Solution</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{c.solution}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-5">
                    {c.metrics.map((m) => {
                      const Icon = m.icon;
                      return (
                        <div key={m.label} className="bg-neutral-50 rounded-lg p-3 text-center">
                          <div className="text-brand-navy font-bold text-lg">{m.value}</div>
                          <div className="text-neutral-500 text-xs mt-0.5">{m.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-white text-3xl font-bold mb-4">Want Results Like These?</h2>
          <p className="text-blue-200 text-lg mb-8">Tell us about your sourcing project and we'll put together a plan.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-red-700 transition-colors text-base"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
