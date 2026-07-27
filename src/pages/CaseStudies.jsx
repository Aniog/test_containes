import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Globe, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'us-furniture',
    category: 'Furniture',
    country: 'United States',
    client: 'Mid-size US furniture retailer',
    title: 'US Retailer Saves 28% on Furniture Sourcing',
    challenge: 'The client was sourcing furniture from a domestic wholesaler at high margins and wanted to move to direct factory sourcing from China but had no contacts or experience.',
    solution: 'We identified 5 verified furniture factories in Foshan, conducted on-site audits, arranged samples, and negotiated pricing. We managed the first two container shipments end-to-end.',
    result: '28% reduction in unit cost, zero defects on first shipment, ongoing relationship with 2 factories.',
    metrics: [
      { label: 'Cost Reduction', value: '28%' },
      { label: 'Factories Audited', value: '5' },
      { label: 'Defect Rate', value: '0%' },
    ],
    titleId: 'cs-us-furniture-title',
    descId: 'cs-us-furniture-desc',
    imgId: 'cs-us-furniture-img-a1b2c3',
  },
  {
    id: 'uk-electronics',
    category: 'Electronics',
    country: 'United Kingdom',
    client: 'UK consumer electronics brand',
    title: 'UK Brand Launches Private Label Electronics Line',
    challenge: 'A UK startup wanted to launch a private label line of smart home devices under their own brand. They needed OEM factories, CE certification support, and Amazon FBA-ready packaging.',
    solution: 'We sourced 3 OEM factories in Shenzhen, managed sample development, coordinated CE testing, designed retail packaging, and arranged FBA-compliant shipments.',
    result: 'Full product line launched in 90 days, CE certified, delivered to Amazon FBA on schedule.',
    metrics: [
      { label: 'Time to Launch', value: '90 days' },
      { label: 'SKUs Developed', value: '6' },
      { label: 'On-Time Delivery', value: '100%' },
    ],
    titleId: 'cs-uk-electronics-title',
    descId: 'cs-uk-electronics-desc',
    imgId: 'cs-uk-electronics-img-d4e5f6',
  },
  {
    id: 'au-apparel',
    category: 'Apparel',
    country: 'Australia',
    client: 'Australian activewear brand',
    title: 'Australian Brand Scales Clothing Production',
    challenge: 'An activewear brand was struggling with inconsistent quality across multiple factories and needed to scale from 500 to 5,000 units per month while maintaining quality standards.',
    solution: 'We audited 8 factories, selected 2 primary and 1 backup supplier, implemented a quality inspection protocol, and set up a production monitoring system.',
    result: 'Scaled to 5,000 units/month with consistent quality, defect rate below 1.5%, 6-month production plan in place.',
    metrics: [
      { label: 'Monthly Capacity', value: '5,000 units' },
      { label: 'Defect Rate', value: '<1.5%' },
      { label: 'Factories Managed', value: '3' },
    ],
    titleId: 'cs-au-apparel-title',
    descId: 'cs-au-apparel-desc',
    imgId: 'cs-au-apparel-img-g7h8i9',
  },
  {
    id: 'de-machinery',
    category: 'Machinery',
    country: 'Germany',
    client: 'German industrial distributor',
    title: 'German Distributor Sources Industrial Equipment',
    challenge: 'A German distributor needed to source hydraulic equipment components at competitive prices while meeting strict EU safety and quality standards.',
    solution: 'We identified ISO-certified factories in Wenzhou and Shanghai, arranged technical audits, coordinated CE testing, and managed a pilot order of 50 units.',
    result: 'Pilot order completed with full CE compliance, 22% cost saving vs. previous European supplier.',
    metrics: [
      { label: 'Cost Saving', value: '22%' },
      { label: 'CE Compliance', value: '100%' },
      { label: 'Lead Time', value: '35 days' },
    ],
    titleId: 'cs-de-machinery-title',
    descId: 'cs-de-machinery-desc',
    imgId: 'cs-de-machinery-img-j1k2l3',
  },
  {
    id: 'ca-toys',
    category: 'Toys',
    country: 'Canada',
    client: 'Canadian toy importer',
    title: 'Canadian Importer Passes ASTM Safety Testing',
    challenge: 'A Canadian toy importer had previously failed ASTM safety tests on a shipment from a new supplier, resulting in a costly recall. They needed a reliable sourcing partner.',
    solution: 'We sourced ASTM-compliant factories in Shantou, conducted pre-production material testing, and implemented a strict inspection protocol before every shipment.',
    result: 'Zero failed safety tests across 4 subsequent shipments, supplier relationship maintained for 2+ years.',
    metrics: [
      { label: 'Safety Test Pass Rate', value: '100%' },
      { label: 'Shipments Managed', value: '4+' },
      { label: 'Recalls', value: '0' },
    ],
    titleId: 'cs-ca-toys-title',
    descId: 'cs-ca-toys-desc',
    imgId: 'cs-ca-toys-img-m4n5o6',
  },
  {
    id: 'fr-beauty',
    category: 'Health & Beauty',
    country: 'France',
    client: 'French cosmetics brand',
    title: 'French Brand Sources OEM Skincare Line',
    challenge: 'A French cosmetics brand wanted to develop a private label skincare line manufactured in China with EU-compliant formulations and premium packaging.',
    solution: 'We sourced GMP-certified cosmetics factories in Guangzhou, coordinated EU compliance testing, developed custom packaging, and managed the full OEM process.',
    result: 'Full skincare line of 8 SKUs launched within 4 months, EU compliant, sold in 3 European markets.',
    metrics: [
      { label: 'SKUs Launched', value: '8' },
      { label: 'Time to Market', value: '4 months' },
      { label: 'EU Compliance', value: '100%' },
    ],
    titleId: 'cs-fr-beauty-title',
    descId: 'cs-fr-beauty-desc',
    imgId: 'cs-fr-beauty-img-p7q8r9',
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
      {/* Header */}
      <section className="bg-brand-blue pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">Client Results</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Real results from real buyers. See how we've helped businesses across industries source smarter from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`relative h-64 lg:h-auto overflow-hidden bg-slate-200 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-brand-blue text-white text-xs font-semibold px-2.5 py-1 rounded-full">{cs.category}</span>
                      <span className="bg-white/90 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Globe className="w-3 h-3" /> {cs.country}
                      </span>
                    </div>
                  </div>
                  <div className={`p-8 lg:p-10 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <p className="text-xs text-slate-500 mb-2">{cs.client}</p>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{cs.title}</h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-brand-red mb-1">Challenge</p>
                        <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">Our Solution</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-green-700 mb-1">Result</p>
                        <p className="text-slate-700 text-sm font-medium leading-relaxed">{cs.result}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="bg-slate-50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-brand-blue">{m.value}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Results Like These?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Tell us about your sourcing needs and we'll put together a plan for your business.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
