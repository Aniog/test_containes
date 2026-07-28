import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, Globe, TrendingDown, Clock, ShieldCheck } from 'lucide-react';

const caseStudies = [
  {
    id: 'case-led',
    title: 'LED Lighting for European Distributor',
    client: 'Lighting distributor, Germany',
    challenge: 'Needed to find a reliable LED panel light manufacturer with CE/RoHS certification and competitive pricing for ongoing orders of 5,000+ units per quarter.',
    solution: 'We shortlisted 4 certified factories, arranged samples, negotiated a 35% cost reduction from their previous supplier, and set up quarterly production monitoring.',
    results: ['35% cost reduction vs. previous supplier', 'Zero defect rate across 3 shipments', 'On-time delivery for all orders', 'Long-term supply agreement established'],
    icon: TrendingDown,
    titleId: 'cs-led-title',
    descId: 'cs-led-desc',
    imgId: 'cs-led-img-7a3b2c',
  },
  {
    id: 'case-furniture',
    title: 'Custom Office Furniture for US Retailer',
    client: 'Office furniture retailer, United States',
    challenge: 'Required custom-designed standing desks with specific materials and finishes, 2,000 unit initial order with strict quality requirements.',
    solution: 'We identified a factory specializing in office furniture, managed the sample development process, conducted during-production inspections, and coordinated container loading.',
    results: ['2,000 units delivered on schedule', 'Less than 0.5% defect rate', 'Custom packaging per retailer specs', 'Repeat orders placed within 3 months'],
    icon: ShieldCheck,
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-4d8e1f',
  },
  {
    id: 'case-sportswear',
    title: 'Sportswear Line for Australian Brand',
    client: 'Activewear brand, Australia',
    challenge: 'Launching a new sportswear line requiring OEKO-TEX certified fabrics, custom designs, and small initial MOQ of 500 pieces per style.',
    solution: 'We found a factory with OEKO-TEX certification willing to accept lower MOQ for a new brand. Managed fabric sourcing, sample development, and pre-shipment QC.',
    results: ['OEKO-TEX certified production', 'MOQ reduced from 1,000 to 500 per style', 'All samples approved on second iteration', 'Brand launched on schedule'],
    icon: Globe,
    titleId: 'cs-sportswear-title',
    descId: 'cs-sportswear-desc',
    imgId: 'cs-sportswear-img-9c2a5d',
  },
  {
    id: 'case-tools',
    title: 'Hand Tools for UK Hardware Chain',
    client: 'Hardware retail chain, United Kingdom',
    challenge: 'Needed to consolidate 12 different tool SKUs from multiple suppliers into one reliable factory with consistent quality and private labeling.',
    solution: 'We audited 6 factories, selected one with capacity for all SKUs, negotiated volume pricing, and implemented monthly quality inspections.',
    results: ['Consolidated from 4 suppliers to 1', '22% overall cost savings', 'Consistent quality across all SKUs', 'Simplified logistics and documentation'],
    icon: Clock,
    titleId: 'cs-tools-title',
    descId: 'cs-tools-desc',
    imgId: 'cs-tools-img-6b4f3a',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-primary-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">Client Results</p>
          <h1 id="cs-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
            Case Studies
          </h1>
          <p id="cs-page-subtitle" className="mt-4 text-neutral-500 max-w-2xl mx-auto text-lg">
            Real sourcing projects we've managed for clients across industries and regions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {caseStudies.map((cs, idx) => {
              const Icon = cs.icon;
              return (
                <div key={cs.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}] [cs-page-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="p-6 md:p-10">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">{cs.client}</span>
                      </div>
                      <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight mb-3">
                        {cs.title}
                      </h2>
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-neutral-900 mb-1">Challenge</h4>
                          <p id={cs.descId} className="text-neutral-500 text-sm leading-relaxed">{cs.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-neutral-900 mb-1">Our Solution</h4>
                          <p className="text-neutral-500 text-sm leading-relaxed">{cs.solution}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900 mb-2">Results</h4>
                        <ul className="space-y-2">
                          {cs.results.map((result, rIdx) => (
                            <li key={rIdx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                              <span className="text-sm text-neutral-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
            Want Similar Results?
          </h2>
          <p className="text-primary-light mb-8 max-w-xl mx-auto">
            Tell us about your sourcing project and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-accent-dark transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
