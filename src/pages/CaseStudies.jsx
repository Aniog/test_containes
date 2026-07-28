import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, Quote } from 'lucide-react';

const caseStudies = [
  {
    id: 'led-lighting-usa',
    title: 'Custom LED Lighting for US Retailer',
    client: 'Mid-size lighting retailer, United States',
    challenge: 'Needed to find UL-certified LED panel manufacturers with competitive pricing and consistent quality for ongoing orders of 5,000+ units per month.',
    solution: 'We identified 8 potential suppliers, conducted factory audits on 5, and shortlisted 3 for sample evaluation. After negotiation, we secured a 22% cost reduction compared to their previous supplier.',
    results: ['22% unit cost reduction', 'UL certification maintained', '3 verified backup suppliers', 'Zero quality claims in 12 months'],
    testimonial: 'SSourcing China found us better suppliers in 2 weeks than we managed in 6 months of searching on our own.',
    imgId: 'cs-led-img-4a7b2c',
    titleId: 'cs-led-title',
    descId: 'cs-led-desc',
  },
  {
    id: 'furniture-germany',
    title: 'Custom Furniture Production for German Brand',
    client: 'Premium furniture brand, Germany',
    challenge: 'Required a manufacturer capable of producing custom solid wood furniture with European-grade finishes and FSC-certified materials.',
    solution: 'We sourced FSC-certified wood suppliers and matched them with a furniture factory experienced in European export standards. We managed the entire production cycle including 3 rounds of QC inspections.',
    results: ['0% defect rate across 3 shipments', 'FSC certification compliance', 'On-time delivery for all orders', '15% cost savings vs. European production'],
    testimonial: 'The quality control process gave us complete confidence in the production. Every piece arrived exactly as specified.',
    imgId: 'cs-furniture-img-8d3e5f',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
  },
  {
    id: 'apparel-australia',
    title: 'Organic Cotton Apparel Launch',
    client: 'Sustainable fashion startup, Australia',
    challenge: 'First-time importer needed to find GOTS-certified organic cotton suppliers and a manufacturer capable of small initial runs with scale-up potential.',
    solution: 'We identified certified organic cotton mills, matched them with a garment factory accepting MOQ of 300 pieces per style, and managed the entire development process from fabric sourcing to final QC.',
    results: ['Launched 12-piece collection in 12 weeks', 'GOTS certification verified', 'Scalable supplier relationship established', 'Repeat orders placed within 3 months'],
    testimonial: 'As a first-time importer, having SSourcing China guide us through the entire process was invaluable. We couldn\'t have launched on time without them.',
    imgId: 'cs-apparel-img-1c6a9d',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
  },
  {
    id: 'auto-parts-uk',
    title: 'Aftermarket Auto Parts Sourcing',
    client: 'Auto parts distributor, United Kingdom',
    challenge: 'Needed to diversify supplier base for brake components while maintaining ISO/TS 16949 certification requirements and competitive pricing.',
    solution: 'We audited 6 brake component manufacturers, verified ISO certifications, conducted material testing, and established a dual-supplier strategy to ensure supply continuity.',
    results: ['Dual-supplier strategy implemented', 'ISO/TS 16949 compliance verified', '18% cost improvement', 'Supply chain risk reduced'],
    testimonial: 'The factory audit reports were thorough and professional. We now have full confidence in our Chinese supply chain.',
    imgId: 'cs-auto-img-5e2b7a',
    titleId: 'cs-auto-title',
    descId: 'cs-auto-desc',
  },
];

const CaseStudies = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Case Studies
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Real sourcing projects we've managed for global buyers. See how we deliver results across different industries and challenges.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs) => (
              <article key={cs.id} className="bg-white rounded-xl border border-brand-border overflow-hidden">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-56 md:h-72 object-cover"
                />
                <div className="p-6 md:p-8">
                  <span className="text-brand-muted text-sm">{cs.client}</span>
                  <h2 id={cs.titleId} className="text-2xl font-bold text-brand-text mt-1 mb-4">{cs.title}</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-brand-text uppercase tracking-wider mb-1">Challenge</h3>
                      <p id={cs.descId} className="text-brand-muted text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-brand-text uppercase tracking-wider mb-1">Our Solution</h3>
                      <p className="text-brand-muted text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <h3 className="text-sm font-semibold text-green-800 mb-2">Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cs.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-green-800 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-l-4 border-brand-blue pl-4">
                    <p className="text-brand-text text-sm italic leading-relaxed">"{cs.testimonial}"</p>
                    <p className="text-brand-muted text-xs mt-2">— {cs.client}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-navy text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-slate-300 mb-8">Tell us about your sourcing challenge and let's discuss how we can help.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
