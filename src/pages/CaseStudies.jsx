import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    tag: 'Consumer Electronics',
    title: 'Sourcing Bluetooth Speakers for European Retail Chain',
    challenge: 'A German retailer needed a reliable supplier for Bluetooth speakers with specific audio quality standards, CE/RoHS certifications, and the ability to produce 10,000 units monthly.',
    solution: 'We screened 12 potential factories, audited 4 shortlisted suppliers, and selected a Shenzhen-based manufacturer with proven export experience. We managed sampling, certification verification, and ongoing QC.',
    results: [
      'Supplier found within 2 weeks',
      '30% cost savings versus previous supplier',
      '99.2% pass rate on pre-shipment inspections',
      'On-time delivery for all 6 monthly shipments',
    ],
    industry: 'Consumer Electronics',
  },
  {
    tag: 'Industrial Equipment',
    title: 'Verifying a Hydraulic Pump Manufacturer',
    challenge: 'A South African mining company received suspicious quotes from multiple Chinese suppliers for hydraulic pumps. They needed a trusted partner to verify legitimacy and quality.',
    solution: 'We conducted full factory audits on 3 suppliers, discovering one was a trading company posing as a manufacturer. We helped select the verified factory and negotiated better payment terms.',
    results: [
      'Exposed fraudulent supplier before payment',
      'Verified factory with 15 years of export experience',
      'Negotiated 15% price reduction',
      'Established direct OEM relationship',
    ],
    industry: 'Industrial Equipment',
  },
  {
    tag: 'Packaging',
    title: 'Custom Packaging for US Beauty Brand',
    challenge: 'A US cosmetics brand needed custom rigid boxes with foil stamping, embossing, and precise color matching across multiple SKUs. Previous sourcing attempts resulted in inconsistent quality.',
    solution: 'We sourced 5 specialized packaging manufacturers, conducted sample evaluations, and selected a supplier with advanced printing capabilities. We implemented a color management protocol and conducted 100% pre-shipment inspection.',
    results: [
      'Consistent color accuracy across all 24 SKUs',
      '40% cost reduction from US-based production',
      'Zero defect rate on first 3 shipments',
      'Reduced lead time from 8 to 4 weeks',
    ],
    industry: 'Packaging',
  },
  {
    tag: 'Apparel',
    title: 'Managing Production for Australian Activewear Line',
    challenge: 'An Australian activewear startup needed a manufacturer capable of producing technical fabrics with moisture-wicking properties, consistent sizing, and ethical labor practices.',
    solution: 'We identified factories with relevant certifications (WRAP, OEKO-TEX), conducted social compliance audits, and managed the entire production process including fabric sourcing, sample approval, and final QC.',
    results: [
      'Supplier with WRAP certification selected',
      'Sample approval in first iteration',
      'Scaled from 2,000 to 15,000 units/order',
      'Maintained less than 1% return rate',
    ],
    industry: 'Apparel',
  },
];

export default function CaseStudies() {
  const bannerRef = useRef(null);

  useEffect(() => {
    if (bannerRef.current) ImageHelper.loadImages(strkImgConfig, bannerRef.current);
  }, []);

  return (
    <div>
      {/* Banner */}
      <section ref={bannerRef} className="relative bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="case-studies-banner-bg"
          data-strk-bg="[cs-subtitle] [cs-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p id="cs-subtitle" className="text-brand-400 font-semibold text-sm mb-3">Our Work</p>
          <h1 id="cs-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Real examples of how we have helped global buyers source successfully from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {cases.map((c) => (
            <article key={c.title} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-brand-600 bg-brand-50 rounded-full px-3 py-1">
                    {c.industry}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">{c.title}</h2>
                
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">The Challenge</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Our Solution</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{c.solution}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Results</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {c.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            We Can Help You Too
          </h2>
          <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto">
            Share your sourcing challenge with us and we will show you how we can deliver results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg px-8 py-4 text-base transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}