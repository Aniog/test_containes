import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTABanner from '../components/shared/CTABanner';
import SectionHeader from '../components/shared/SectionHeader';

const caseStudies = [
  {
    id: 'cs-furniture-uk',
    titleId: 'cs-furniture-uk-title',
    descId: 'cs-furniture-uk-desc',
    tag: 'Furniture & Home',
    country: '🇬🇧 United Kingdom',
    title: 'Reducing Defect Rates for a UK Furniture Importer',
    summary: 'A UK-based furniture retailer was experiencing a 12% defect rate with their existing Chinese supplier, leading to costly returns and customer complaints.',
    challenge: 'The buyer had no local presence in China and relied entirely on the factory\'s own quality reports. Defects were only discovered upon arrival in the UK.',
    solution: 'We conducted audits on 4 alternative factories, selected the best-fit supplier, and implemented a structured QC process including pre-production, DUPRO, and pre-shipment inspections.',
    result: 'Defect rate dropped from 12% to under 1% within two shipment cycles. The buyer saved an estimated £40,000 in returns and rework costs in the first year.',
    results: ['Defect rate: 12% → <1%', 'Estimated savings: £40,000/year', '3 new verified suppliers identified', 'Full QC process implemented'],
  },
  {
    id: 'cs-electronics-usa',
    titleId: 'cs-electronics-usa-title',
    descId: 'cs-electronics-usa-desc',
    tag: 'Electronics',
    country: '🇺🇸 United States',
    title: 'OEM Electronics Product Launch for a US Brand',
    summary: 'A US consumer electronics startup needed to develop and manufacture a custom Bluetooth audio product for their first product launch.',
    challenge: 'The team had no manufacturing experience and needed a factory capable of custom product development, CE/FCC certification, and reliable mass production.',
    solution: 'We identified 3 qualified OEM electronics factories, coordinated prototype development, managed the certification process, and oversaw a 10,000-unit production run.',
    result: 'Product launched on schedule. CE and FCC certifications obtained. First shipment of 10,000 units delivered with a 0.3% defect rate.',
    results: ['10,000-unit first production run', 'CE & FCC certifications obtained', '0.3% defect rate on delivery', 'On-time launch achieved'],
  },
  {
    id: 'cs-apparel-au',
    titleId: 'cs-apparel-au-title',
    descId: 'cs-apparel-au-desc',
    tag: 'Apparel & Textiles',
    country: '🇦🇺 Australia',
    title: 'Cost Reduction for an Australian Apparel Brand',
    summary: 'An Australian fashion startup was paying above-market prices to their existing Chinese garment factory and had no visibility into production timelines.',
    challenge: 'The buyer was sourcing through a trading company with no direct factory access, resulting in high margins, poor communication, and frequent delays.',
    solution: 'We identified 5 direct garment factories, conducted compliance audits, negotiated directly with the best-fit factory, and set up a production monitoring process.',
    result: 'Unit cost reduced by 30% through direct factory access. Production delays eliminated with weekly status updates. First sea freight shipment coordinated successfully.',
    results: ['30% unit cost reduction', 'Direct factory relationship established', 'Production delays eliminated', 'First sea freight shipment coordinated'],
  },
  {
    id: 'cs-industrial-de',
    titleId: 'cs-industrial-de-title',
    descId: 'cs-industrial-de-desc',
    tag: 'Industrial Equipment',
    country: '🇩🇪 Germany',
    title: 'Industrial Hardware Sourcing for a German Distributor',
    summary: 'A German industrial distributor needed to source a range of hydraulic components and safety equipment from China to expand their product catalog.',
    challenge: 'The buyer required ISO-certified factories with documented quality management systems and specific technical certifications for the European market.',
    solution: 'We sourced and audited 6 factories across Zhejiang and Jiangsu, verified ISO 9001 certifications, and coordinated sample testing at a third-party lab.',
    result: 'Three new suppliers onboarded with full documentation. All products passed third-party testing. First order of €120,000 shipped without issues.',
    results: ['3 ISO-certified suppliers onboarded', '€120,000 first order shipped', 'Third-party lab testing passed', 'Full compliance documentation provided'],
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Real Results for Real Buyers</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            See how we've helped businesses across different industries source successfully from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((cs, idx) => (
              <div key={cs.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 h-56 lg:h-auto bg-slate-100">
                    <img
                      data-strk-img-id={`${cs.id}-img-cs`}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="bg-navy-700 text-white text-xs font-semibold px-2 py-1 rounded">
                        {cs.tag}
                      </span>
                      <span className="text-slate-500 text-sm">{cs.country}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                      {cs.title}
                    </h2>
                    <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed mb-4">
                      {cs.summary}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5 text-sm">
                      <div>
                        <p className="font-semibold text-slate-700 mb-1">Challenge</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-700 mb-1">Our Solution</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-700 mb-1">Outcome</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{cs.result}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cs.results.map((r) => (
                        <div key={r} className="flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                          <CheckCircle className="w-3 h-3" />
                          {r}
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

      <CTABanner />
    </div>
  );
}
