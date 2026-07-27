import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'electronics-us',
    client: 'US Electronics Brand',
    industry: 'Consumer Electronics',
    challenge: 'Needed to find a reliable LED lighting manufacturer with UL certification and competitive pricing for the US market.',
    solution: 'We identified 5 factories, conducted audits, arranged samples, and negotiated a 22% cost reduction compared to their previous supplier.',
    results: ['22% cost reduction per unit', 'Zero defects on first 3 shipments', 'UL-certified manufacturer secured', 'Lead time reduced from 45 to 30 days'],
    imgId: 'cs-electronics-full-2a8c4f',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
  },
  {
    id: 'furniture-eu',
    client: 'European Furniture Retailer',
    industry: 'Home & Garden',
    challenge: 'Required multiple furniture suppliers capable of producing FSC-certified products with consistent quality for monthly container shipments.',
    solution: 'We sourced 3 verified factories in Foshan, set up quality protocols, and managed monthly 40ft container shipments with ongoing QC.',
    results: ['3 verified suppliers onboarded', '40ft containers shipped monthly', 'FSC certification maintained', '98.5% quality pass rate'],
    imgId: 'cs-furniture-full-7d3e9b',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
  },
  {
    id: 'apparel-au',
    client: 'Australian Apparel Startup',
    industry: 'Fashion & Textiles',
    challenge: 'First-time importer needed help launching a private label activewear line with small initial MOQs and strict fabric quality requirements.',
    solution: 'We found a factory willing to work with lower MOQs, managed fabric testing, production QC, and coordinated air freight for their launch deadline.',
    results: ['Private label launched on time', 'Zero defect rate on first order', 'MOQ negotiated down 60%', 'Repeat orders placed within 3 months'],
    imgId: 'cs-apparel-full-5f1a8c',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
  },
  {
    id: 'industrial-de',
    client: 'German Industrial Distributor',
    industry: 'Industrial Equipment',
    challenge: 'Needed to replace an unreliable valve supplier while maintaining ISO 9001 standards and tight delivery schedules.',
    solution: 'We audited 8 factories, identified 2 ISO-certified alternatives, managed trial orders, and transitioned supply without disrupting their delivery schedule.',
    results: ['Seamless supplier transition', 'ISO 9001 compliance maintained', '15% cost savings achieved', 'On-time delivery rate improved to 99%'],
    imgId: 'cs-industrial-full-9c2d6e',
    titleId: 'cs-industrial-title',
    descId: 'cs-industrial-desc',
  },
];

const CaseStudies = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="bg-brand-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
            Real sourcing projects, real results. See how we have helped global buyers overcome sourcing challenges.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, idx) => (
              <div key={cs.id} className="bg-white border border-brand-gray-200 rounded-xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className={`aspect-video lg:aspect-auto ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.client}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-6 md:p-8 lg:p-10 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className="text-xs font-medium text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-full w-fit mb-4">
                      {cs.industry}
                    </span>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-brand-navy mb-3">
                      {cs.client}
                    </h2>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-brand-gray-900 mb-1">Challenge</h4>
                      <p id={cs.descId} className="text-sm text-brand-gray-600 leading-relaxed m-0">{cs.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-brand-gray-900 mb-1">Our Solution</h4>
                      <p className="text-sm text-brand-gray-600 leading-relaxed m-0">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-gray-900 mb-2">Results</h4>
                      <ul className="space-y-1.5 list-none p-0 m-0">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-brand-green flex-shrink-0" />
                            <span className="text-sm text-brand-gray-600">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-navy text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Your Success Story Starts Here
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join hundreds of global buyers who trust SSourcing China for their sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-orange text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-orange-600 transition-colors no-underline"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
