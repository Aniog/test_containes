import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight, Globe, TrendingDown, Clock, ShieldCheck } from 'lucide-react';

const caseStudies = [
  {
    id: 'case-led',
    title: 'LED Lighting for European Distributor',
    client: 'Lighting distributor, Germany',
    challenge: 'Client needed CE-certified LED panels at competitive pricing. Previous supplier had quality inconsistencies and missed delivery deadlines.',
    solution: 'We identified 5 potential factories, conducted audits, arranged samples, and selected a manufacturer with ISO 9001 and CE certifications. We managed QC for the first 3 orders.',
    results: ['22% cost reduction vs. previous supplier', 'Zero defects across 15,000 units', 'On-time delivery for all shipments', 'Ongoing relationship established'],
    industry: 'Lighting',
    imgId: 'cs-led-img-4b7e1a',
  },
  {
    id: 'case-furniture',
    title: 'Custom Office Furniture for US Retailer',
    client: 'Office furniture retailer, United States',
    challenge: 'Client wanted to launch a private-label office furniture line but had no existing supplier relationships in China.',
    solution: 'We sourced 8 factories specializing in office furniture, conducted on-site audits, managed sample development over 3 iterations, and supervised the first production run of 3,000 units.',
    results: ['3,000 units delivered on schedule', '99.2% QC pass rate', '35% savings vs. domestic manufacturing', 'Scalable supply chain established'],
    industry: 'Furniture',
    imgId: 'cs-furniture-img-8c2d5f',
  },
  {
    id: 'case-apparel',
    title: 'Private Label Sportswear for UK Brand',
    client: 'Activewear brand, United Kingdom',
    challenge: 'Startup brand needed a reliable garment manufacturer capable of small MOQs with consistent quality and quick turnaround.',
    solution: 'We found 3 factories willing to work with lower MOQs, verified their capabilities through audits, and managed sample development. We continue to handle QC for each production run.',
    results: ['3 verified factories within 2 weeks', 'MOQ negotiated down from 3,000 to 500 units', 'Consistent quality across 6 production runs', 'Lead time reduced from 45 to 30 days'],
    industry: 'Apparel',
    imgId: 'cs-apparel-img-6a9e3b',
  },
  {
    id: 'case-electronics',
    title: 'Consumer Electronics Accessories for Australian Importer',
    client: 'Electronics accessories importer, Australia',
    challenge: 'Client was dealing with high defect rates (8%) from their existing supplier and needed a more reliable alternative with proper testing capabilities.',
    solution: 'We audited the existing supplier, identified root causes of defects, then sourced 4 alternative factories with in-house testing labs. We implemented a stricter QC protocol.',
    results: ['Defect rate reduced from 8% to 0.5%', 'New supplier with in-house testing lab', 'Comprehensive QC protocol implemented', '15% cost improvement'],
    industry: 'Electronics',
    imgId: 'cs-electronics-img-2f8a4c',
  },
  {
    id: 'case-packaging',
    title: 'Custom Packaging for Canadian E-commerce Brand',
    client: 'E-commerce brand, Canada',
    challenge: 'Brand needed high-quality custom packaging (boxes, inserts, tissue paper) with consistent color matching and fast turnaround for seasonal launches.',
    solution: 'We sourced specialized packaging factories with digital printing capabilities, managed color proofing, and set up a streamlined reorder process.',
    results: ['Color consistency within Delta E < 2', '2-week turnaround for repeat orders', '40% cost savings vs. local printing', 'Flexible MOQs for seasonal variations'],
    industry: 'Packaging',
    imgId: 'cs-packaging-img-5e2a8c',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="cs-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Case Studies
          </h1>
          <p id="cs-page-subtitle" className="text-lg text-slate-300 max-w-2xl">
            Real sourcing projects, real results. See how we've helped businesses worldwide source from China successfully.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {caseStudies.map((cs) => (
              <article key={cs.id} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-2/5">
                    <div className="aspect-video lg:aspect-auto lg:h-full relative">
                      <img
                        data-strk-img-id={cs.imgId}
                        data-strk-img={`[${cs.id}-title] [cs-page-subtitle] [cs-page-title]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={cs.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-3/5 p-6 md:p-8">
                    <span className="text-xs font-medium text-orange uppercase tracking-wide">{cs.industry}</span>
                    <h2 id={`${cs.id}-title`} className="text-xl md:text-2xl font-bold text-slate-900 mt-2 mb-1">
                      {cs.title}
                    </h2>
                    <p className="text-sm text-slate-500 mb-4">{cs.client}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Challenge:</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Our Solution:</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Results:</h4>
                      <ul className="space-y-1.5">
                        {cs.results.map((result, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Let's Write Your Success Story
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Every project starts with a conversation. Tell us what you need and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange text-white px-7 py-3.5 rounded-lg font-semibold no-underline hover:bg-orange-dark transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
