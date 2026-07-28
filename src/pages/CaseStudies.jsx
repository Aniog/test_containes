import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionCTA from '../components/shared/SectionCTA';
import SectionHeader from '../components/shared/SectionHeader';

const cases = [
  {
    id: 'uk-furniture',
    titleId: 'cs-uk-furniture-title',
    descId: 'cs-uk-furniture-desc',
    imgId: 'cs-uk-furniture-img-a1b2c3',
    title: 'Office Furniture Importer — United Kingdom',
    category: 'Furniture',
    country: '🇬🇧 United Kingdom',
    challenge: 'A UK-based furniture retailer had been working with a supplier that repeatedly delivered goods with quality defects — wrong dimensions, poor finishing, and inconsistent materials. They needed to switch suppliers quickly without disrupting their supply chain.',
    solution: 'We identified 4 alternative factories in Foshan, conducted on-site audits, and shortlisted 2 that met the buyer\'s quality and price requirements. We managed sample development, negotiated a 23% price reduction vs. the previous supplier, and oversaw the first production run.',
    result: '23% cost reduction. Zero quality defects on first order. New supplier relationship established.',
    services: ['Supplier Sourcing', 'Factory Audit', 'Sample Management', 'Production Follow-up'],
  },
  {
    id: 'us-electronics',
    titleId: 'cs-us-electronics-title',
    descId: 'cs-us-electronics-desc',
    imgId: 'cs-us-electronics-img-d4e5f6',
    title: 'LED Lighting Distributor — United States',
    category: 'Electronics',
    country: '🇺🇸 United States',
    challenge: 'An American electronics distributor needed CE and FCC-certified LED products for the European and US markets. Previous attempts to source independently had resulted in non-compliant products being rejected at customs.',
    solution: 'We sourced 3 factories with existing CE/FCC certifications, verified their test reports, and coordinated additional third-party testing for the specific product models. We also reviewed all export documentation before shipment.',
    result: 'Zero compliance issues on first shipment. Products cleared customs in both EU and US without delays.',
    services: ['Supplier Sourcing', 'Compliance Support', 'Quality Inspection', 'Shipping Coordination'],
  },
  {
    id: 'fr-apparel',
    titleId: 'cs-fr-apparel-title',
    descId: 'cs-fr-apparel-desc',
    imgId: 'cs-fr-apparel-img-g7h8i9',
    title: 'Private Label Fashion Brand — France',
    category: 'Apparel',
    country: '🇫🇷 France',
    challenge: 'A French fashion startup was launching their first private-label collection and had no experience sourcing from China. They needed a reliable OEM factory that could handle small MOQs and deliver consistent quality.',
    solution: 'We identified 5 apparel factories in Guangzhou, audited 3, and recommended 1 that specialized in small-batch OEM production. We managed the full sample development process, negotiated a 500-unit MOQ, and supervised production.',
    result: 'On-time delivery. 98% quality pass rate on pre-shipment inspection. Ongoing relationship with the factory.',
    services: ['Supplier Sourcing', 'Factory Audit', 'Sample Management', 'Quality Inspection', 'Production Follow-up'],
  },
  {
    id: 'au-packaging',
    titleId: 'cs-au-packaging-title',
    descId: 'cs-au-packaging-desc',
    imgId: 'cs-au-packaging-img-j1k2l3',
    title: 'Eco Packaging Brand — Australia',
    category: 'Packaging',
    country: '🇦🇺 Australia',
    challenge: 'An Australian sustainable packaging company needed custom-printed, FSC-certified paper packaging at competitive prices. They had received several quotes from online suppliers but had no way to verify their certifications or production quality.',
    solution: 'We verified FSC certifications for 4 shortlisted factories, visited 2 in person, and confirmed their printing capabilities and environmental compliance. We also negotiated a 15% price reduction from the initial quotes.',
    result: '15% price reduction. FSC certification verified. First order delivered on schedule.',
    services: ['Supplier Sourcing', 'Factory Audit', 'Compliance Support', 'Quality Inspection'],
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 block">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Real Results for Real Buyers</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            See how we've helped businesses across different industries and countries source successfully from China.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {cases.map((c) => (
              <div key={c.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="h-64 bg-slate-100 overflow-hidden">
                  <img
                    alt={c.title}
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[${c.descId}] [${c.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{c.category}</span>
                    <span className="text-slate-500 text-sm">{c.country}</span>
                  </div>
                  <h2 id={c.titleId} className="text-2xl font-bold text-slate-900 mb-6">{c.title}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Challenge</h4>
                      <p id={c.descId} className="text-slate-600 text-sm leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Our Approach</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Outcome</h4>
                      <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                        <p className="text-green-700 text-sm font-medium leading-relaxed">{c.result}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Services Used</p>
                    <div className="flex flex-wrap gap-2">
                      {c.services.map((s) => (
                        <span key={s} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Ready to Write Your Own Success Story?"
        subtitle="Tell us about your sourcing project and we'll show you how we can help."
        ctaLabel="Get a Free Sourcing Quote"
      />
    </>
  );
}
