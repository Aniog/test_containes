import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Star, CheckCircle2, TrendingDown, Clock, Shield } from 'lucide-react';

const caseStudies = [
  {
    id: 'led-lighting',
    industry: 'Electronics',
    title: 'LED Lighting for European Distributor',
    client: 'A mid-size lighting distributor based in Germany',
    challenge: 'The client needed to source high-quality LED panel lights at competitive prices but had been burned by unreliable suppliers who delivered inconsistent quality.',
    solution: 'We audited 8 factories, shortlisted 3, arranged samples, and conducted pre-production inspections. We negotiated a 22% cost reduction while maintaining CE/RoHS compliance.',
    results: ['22% cost reduction per unit', 'Zero defects across 50,000 units', 'On-time delivery for 6 consecutive orders', 'Long-term supplier relationship established'],
    imgId: 'case-led-img-a1b2c3',
    metric: '22%',
    metricLabel: 'Cost Reduction',
  },
  {
    id: 'furniture',
    industry: 'Home & Garden',
    title: 'Custom Furniture for US Retailer',
    client: 'An e-commerce furniture brand selling in the United States',
    challenge: 'The client wanted to launch a new line of solid wood furniture but had no existing supplier relationships in China and tight launch deadlines.',
    solution: 'We sourced 5 furniture factories in Foshan, arranged custom samples, managed production of the first 2 containers, and coordinated sea freight to Los Angeles.',
    results: ['3 verified factories identified in 10 days', 'First container delivered in 45 days', 'Passed all US safety standards', 'Ongoing monthly orders established'],
    imgId: 'case-furniture-img-d4e5f6',
    metric: '45',
    metricLabel: 'Days to First Delivery',
  },
  {
    id: 'auto-parts',
    industry: 'Automotive',
    title: 'Auto Parts for Australian Importer',
    client: 'An automotive parts wholesaler in Melbourne, Australia',
    challenge: 'Previous supplier had quality issues causing returns and customer complaints. The client needed a reliable alternative with proper certifications.',
    solution: 'We conducted factory audits focused on IATF 16949 certification, arranged test samples, and implemented a strict QC protocol with 100% inspection on critical dimensions.',
    results: ['Zero defects on first shipment', 'IATF 16949 certified supplier found', '18% savings vs. previous supplier', 'Monthly reorders for 12+ months'],
    imgId: 'case-auto-img-g7h8i9',
    metric: '0',
    metricLabel: 'Defects Reported',
  },
  {
    id: 'packaging',
    industry: 'Packaging',
    title: 'Custom Packaging for UK Brand',
    client: 'A premium skincare brand launching in the UK market',
    challenge: 'The brand needed luxury custom packaging (boxes, bottles, pumps) from multiple suppliers, all coordinated to arrive together for their product launch.',
    solution: 'We managed 4 different suppliers simultaneously, coordinated production timelines, consolidated all components into one shipment, and ensured brand consistency across all items.',
    results: ['4 suppliers managed simultaneously', 'All components delivered together', 'Launch deadline met with 5 days to spare', '30% savings vs. UK packaging suppliers'],
    imgId: 'case-packaging-img-j0k1l2',
    metric: '30%',
    metricLabel: 'Cost Savings',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Case Studies
            </h1>
            <p className="text-lg text-white/80">
              Real results from real sourcing projects. See how we have helped businesses source successfully from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, idx) => (
              <div key={study.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2">
                    <div className="aspect-[4/3] lg:h-full overflow-hidden">
                      <img
                        data-strk-img-id={study.imgId}
                        data-strk-img={`[case-${study.id}-title] [case-${study.id}-industry]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <span id={`case-${study.id}-industry`} className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                      {study.industry}
                    </span>
                    <h2 id={`case-${study.id}-title`} className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">
                      {study.title}
                    </h2>
                    <p className="text-sm text-neutral-600 mb-4">{study.client}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900 mb-1">Challenge</h4>
                        <p className="text-sm text-neutral-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-900 mb-1">Our Solution</h4>
                        <p className="text-sm text-neutral-600">{study.solution}</p>
                      </div>
                    </div>

                    <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                      <h4 className="text-sm font-semibold text-neutral-900 mb-2">Results</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                            <span className="text-sm text-neutral-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">{study.metric}</span>
                      <span className="text-sm text-neutral-600">{study.metricLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want Similar Results?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Tell us about your sourcing needs and let us show you what we can do.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors"
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
