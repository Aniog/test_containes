import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, TrendingUp, Clock, Package } from 'lucide-react';

const cases = [
  {
    id: 'electronics-us',
    category: 'Electronics',
    client: 'US Electronics Distributor',
    country: 'United States',
    title: 'Reducing Defect Rate by 60% for a California Electronics Importer',
    challenge: 'A California-based electronics distributor was importing Bluetooth speakers and LED lighting from a factory they found online. Defect rates were running at 12%, causing returns, customer complaints, and margin erosion.',
    solution: 'We audited their existing supplier, identified gaps in the factory\'s QC process, and implemented in-line inspections at key production stages plus a full pre-shipment inspection. We also renegotiated the defect liability clause in their purchase agreement.',
    result: 'Defect rate dropped from 12% to under 5% within two orders. The client saved an estimated $28,000 in returns and rework costs in the first year.',
    metrics: [
      { label: 'Defect Rate Reduction', value: '60%' },
      { label: 'Estimated Annual Savings', value: '$28K' },
      { label: 'Orders Managed', value: '6' },
    ],
    titleId: 'cs-full-electronics-title',
    descId: 'cs-full-electronics-desc',
    imgId: 'cs-full-electronics-img-a1b2c3',
  },
  {
    id: 'furniture-uk',
    category: 'Furniture',
    client: 'UK Furniture Brand',
    country: 'United Kingdom',
    title: 'Cutting Sourcing Time by 40% for a London Furniture Startup',
    challenge: 'A London-based furniture startup needed FSC-certified wood furniture manufacturers for their sustainable product line. They had spent 3 months searching online with no verified results and were running behind their launch timeline.',
    solution: 'We identified and audited 4 FSC-certified furniture factories in Foshan within 3 weeks. We arranged samples, reviewed quality, and negotiated pricing. The client selected their preferred supplier and placed their first order within 5 weeks of engaging us.',
    result: 'The client launched on schedule, 6 weeks ahead of their original timeline. They have since placed 4 repeat orders with the same verified supplier.',
    metrics: [
      { label: 'Time to First Order', value: '5 weeks' },
      { label: 'Sourcing Time Saved', value: '40%' },
      { label: 'Repeat Orders', value: '4' },
    ],
    titleId: 'cs-full-furniture-title',
    descId: 'cs-full-furniture-desc',
    imgId: 'cs-full-furniture-img-d4e5f6',
  },
  {
    id: 'apparel-au',
    category: 'Apparel',
    client: 'Australian Fashion Label',
    country: 'Australia',
    title: 'Achieving Consistent Quality Across 8 Orders for an Australian Apparel Brand',
    challenge: 'An Australian fashion label was experiencing inconsistent sizing, fabric weight variations, and color discrepancies across orders from their Guangzhou supplier. Each shipment required significant rework after arrival.',
    solution: 'We introduced a structured production follow-up process with milestone check-ins, fabric inspection at the start of each production run, and AQL-based pre-shipment inspections. We also worked with the factory to establish a written quality standard document.',
    result: 'The brand has completed 8 consecutive orders with no significant quality issues. Post-arrival rework costs dropped to near zero.',
    metrics: [
      { label: 'Consecutive Clean Orders', value: '8' },
      { label: 'Rework Cost Reduction', value: '~100%' },
      { label: 'Client Relationship', value: '3 years' },
    ],
    titleId: 'cs-full-apparel-title',
    descId: 'cs-full-apparel-desc',
    imgId: 'cs-full-apparel-img-g7h8i9',
  },
  {
    id: 'hardware-de',
    category: 'Hardware',
    client: 'German Hardware Retailer',
    country: 'Germany',
    title: 'Verifying a New Supplier Network for a German Hardware Importer',
    challenge: 'A German hardware retailer wanted to diversify their supplier base for hand tools and power tools but had no contacts in China and no way to verify factory claims about certifications and production capacity.',
    solution: 'We conducted factory audits on 6 shortlisted manufacturers across Yongkang and Wenzhou, verified CE and GS certifications, and produced detailed audit reports for each. The client selected 3 suppliers for trial orders.',
    result: 'All 3 trial orders passed pre-shipment inspection. The client now has a diversified, verified supplier base and has reduced their per-unit cost by 15% compared to their previous European sourcing.',
    metrics: [
      { label: 'Factories Audited', value: '6' },
      { label: 'Suppliers Selected', value: '3' },
      { label: 'Cost Reduction', value: '15%' },
    ],
    titleId: 'cs-full-hardware-title',
    descId: 'cs-full-hardware-desc',
    imgId: 'cs-full-hardware-img-j1k2l3',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selected]);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-china font-semibold text-sm uppercase tracking-wider">Case Studies</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-white">
              Real Results for Real Buyers
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              These case studies show how we've helped importers across different industries solve sourcing challenges and achieve measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((cs) => (
              <div
                key={cs.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelected(selected?.id === cs.id ? null : cs)}
              >
                <div className="h-52 bg-slate-bg overflow-hidden">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-navy text-white text-xs font-semibold px-2.5 py-1 rounded-full">{cs.category}</span>
                    <span className="text-text-muted text-xs">{cs.country}</span>
                  </div>
                  <h2 id={cs.titleId} className="font-bold text-navy text-lg mb-3 leading-snug">{cs.title}</h2>
                  <p id={cs.descId} className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">{cs.challenge}</p>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="bg-slate-bg rounded-lg p-3 text-center">
                        <div className="font-bold text-navy text-lg">{m.value}</div>
                        <div className="text-text-muted text-xs mt-0.5 leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <button className="text-navy text-sm font-semibold hover:text-red-china transition-colors flex items-center gap-1">
                    {selected?.id === cs.id ? 'Show Less' : 'Read Full Case Study'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Expanded Detail */}
                {selected?.id === cs.id && (
                  <div className="border-t border-gray-200 p-6 bg-slate-bg">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-navy mb-2 text-sm uppercase tracking-wider">The Challenge</h3>
                        <p className="text-text-muted text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy mb-2 text-sm uppercase tracking-wider">Our Solution</h3>
                        <p className="text-text-muted text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy mb-2 text-sm uppercase tracking-wider">The Result</h3>
                        <p className="text-text-muted text-sm leading-relaxed">{cs.result}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-bg">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Want Results Like These?</h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            Tell us about your sourcing challenge. We'll put together a plan to address it.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-red-china text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-red-china-dark transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
