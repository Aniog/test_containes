import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTABanner from '../components/shared/CTABanner';

const cases = [
  {
    id: 1,
    client: 'US E-Commerce Brand',
    country: '🇺🇸 United States',
    industry: 'Electronics',
    product: 'Custom LED Lighting Fixtures',
    challenge: 'The buyer had received a shipment of LED fixtures from a previous supplier that failed UL certification testing. They needed a verified replacement supplier quickly to avoid stockout.',
    solution: 'We identified 4 qualified LED manufacturers within 3 days, conducted a factory audit on the top candidate, and arranged sample production. The new supplier held UL and CE certifications.',
    result: 'First production order of 2,000 units completed in 6 weeks. Pre-shipment inspection passed with zero critical defects. The buyer has since placed 3 repeat orders.',
    metrics: ['2,000 units, first order', '0 critical defects', '3 repeat orders placed', '6-week production time'],
    imgId: 'cs-img-1a2b3c',
    imgQuery: '[cs-product-1] LED lighting factory China manufacturing quality inspection',
  },
  {
    id: 2,
    client: 'Australian Furniture Retailer',
    country: '🇦🇺 Australia',
    industry: 'Furniture',
    product: 'Flat-Pack Office Furniture Range',
    challenge: 'A mid-size furniture retailer needed a reliable Chinese manufacturer for a new flat-pack office furniture line. Previous attempts to source independently had resulted in inconsistent quality and missed delivery dates.',
    solution: 'We sourced and audited 3 furniture factories in Foshan, negotiated pricing and payment terms, and set up a production monitoring schedule with weekly photo updates.',
    result: '4 shipments completed over 18 months, all on schedule. Quality consistency improved significantly. The buyer expanded the product range to 12 SKUs.',
    metrics: ['4 shipments on schedule', '18-month partnership', '12 SKUs sourced', 'Foshan-based factory'],
    imgId: 'cs-img-2b3c4d',
    imgQuery: '[cs-product-2] office furniture factory China flat-pack production',
  },
  {
    id: 3,
    client: 'German Health Brand',
    country: '🇩🇪 Germany',
    industry: 'Health & Beauty',
    product: 'OEM Supplement Packaging',
    challenge: 'A European health supplement brand needed custom packaging that met EU food contact material regulations and specific branding requirements. They had struggled to find a supplier who understood compliance requirements.',
    solution: 'We sourced a certified packaging factory with experience in EU export, reviewed material compliance documentation, and coordinated sample production with the brand\'s design team.',
    result: 'All packaging materials passed EU compliance checks. First order of 50,000 units delivered on time. The brand now uses the same factory for 4 product lines.',
    metrics: ['50,000 units, first order', 'EU compliance verified', '4 product lines', 'On-time delivery'],
    imgId: 'cs-img-3c4d5e',
    imgQuery: '[cs-product-3] supplement packaging factory China compliance printing',
  },
  {
    id: 4,
    client: 'UK Outdoor Retailer',
    country: '🇬🇧 United Kingdom',
    industry: 'Sports & Outdoor',
    product: 'Private Label Camping Equipment',
    challenge: 'A UK outdoor retailer wanted to launch a private label camping range but had no experience sourcing from China. They needed end-to-end support from product development to delivery.',
    solution: 'We managed the full sourcing process: product specification development, supplier identification, sample coordination, branding application, quality inspection, and sea freight to the UK.',
    result: 'Successfully launched 8 private label SKUs. Total project from inquiry to delivery: 14 weeks. The range achieved sell-through of 85% in the first season.',
    metrics: ['8 SKUs launched', '14-week total timeline', '85% first-season sell-through', 'Full end-to-end management'],
    imgId: 'cs-img-4d5e6f',
    imgQuery: '[cs-product-4] camping outdoor equipment factory China private label',
  },
  {
    id: 5,
    client: 'Canadian Wholesale Distributor',
    country: '🇨🇦 Canada',
    industry: 'Consumer Products',
    product: 'Kitchenware & Home Accessories',
    challenge: 'A wholesale distributor needed to diversify their supplier base and reduce costs on a range of kitchenware products. They were paying above-market prices through a trading company.',
    solution: 'We identified direct factory sources for 6 product categories, eliminating the trading company markup. We negotiated pricing, conducted factory audits, and set up direct purchasing relationships.',
    result: 'Average cost reduction of 18% across the product range. Direct factory relationships established with 3 manufacturers. Annual order volume increased by 40%.',
    metrics: ['18% average cost reduction', '3 direct factory relationships', '40% volume increase', '6 product categories'],
    imgId: 'cs-img-5e6f7g',
    imgQuery: '[cs-product-5] kitchenware home accessories factory China wholesale',
  },
  {
    id: 6,
    client: 'Middle East Construction Company',
    country: '🇦🇪 UAE',
    industry: 'Building Materials',
    product: 'Ceramic Tiles & Flooring',
    challenge: 'A construction company needed large volumes of ceramic tiles with specific technical specifications and required documentation for local building code compliance.',
    solution: 'We sourced from certified tile manufacturers in Foshan, verified technical specifications, arranged third-party testing, and coordinated sea freight with full documentation.',
    result: 'Three container loads delivered on schedule. All technical documentation provided for local compliance. The company has since placed orders for 2 additional projects.',
    metrics: ['3 containers delivered', 'Full compliance documentation', '2 follow-on projects', 'Foshan ceramic district'],
    imgId: 'cs-img-6f7g8h',
    imgQuery: '[cs-product-6] ceramic tiles flooring factory China construction materials',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = 'Case Studies | SSourcing China';
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-[#1A3C6E] py-16 md:py-20">
        <div className="container-xl text-center">
          <p className="section-label text-amber-400 mb-3">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results for Real Buyers
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Here's how we've helped international buyers source successfully from China across different industries and product categories.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="section-white">
        <div className="container-xl">
          <div className="flex flex-col gap-10">
            {cases.map((c, i) => (
              <div key={c.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Image */}
                  <div className="lg:col-span-1">
                    <img
                      alt={c.product}
                      className="w-full h-56 lg:h-full object-cover"
                      data-strk-img-id={c.imgId}
                      data-strk-img={c.imgQuery}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-sm text-slate-500">{c.country}</span>
                      <span className="text-slate-300">·</span>
                      <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{c.industry}</span>
                    </div>

                    <h2 id={`cs-product-${c.id}`} className="text-xl md:text-2xl font-bold text-slate-900 mb-1">{c.product}</h2>
                    <p className="text-slate-500 text-sm mb-5">{c.client}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                      {[
                        { label: 'Challenge', text: c.challenge, color: 'border-amber-200 bg-amber-50' },
                        { label: 'Our Solution', text: c.solution, color: 'border-blue-200 bg-blue-50' },
                        { label: 'Result', text: c.result, color: 'border-green-200 bg-green-50' },
                      ].map((block) => (
                        <div key={block.label} className={`rounded-lg border p-4 ${block.color}`}>
                          <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">{block.label}</p>
                          <p className="text-slate-700 text-sm leading-relaxed">{block.text}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {c.metrics.map((m) => (
                        <span key={m} className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want Results Like These?"
        subtitle="Tell us about your sourcing project and we'll show you how we can help."
        ctaText="Get a Free Sourcing Quote"
      />
    </div>
  );
}
