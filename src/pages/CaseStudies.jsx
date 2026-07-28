import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2, TrendingDown, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const caseStudies = [
  {
    title: 'US Electronics Brand Cuts Defect Rate by 85%',
    industry: 'Consumer Electronics',
    challenge: 'A US-based electronics brand was experiencing a 12% defect rate from their Chinese supplier, leading to high return rates and customer complaints.',
    solution: 'We conducted a full factory audit, identified root causes in the soldering and assembly process, implemented in-line QC checkpoints, and transitioned to a higher-capability manufacturer.',
    results: ['Defect rate reduced from 12% to under 2%', 'Return rate dropped by 90%', 'Customer satisfaction improved by 35%'],
    imgId: 'cs-elec-page-a1b2',
    titleId: 'cs-elec-p-title',
    descId: 'cs-elec-p-desc',
  },
  {
    title: 'European Furniture Retailer Saves 30% on Procurement',
    industry: 'Home Furniture',
    challenge: 'A European furniture retailer was working with 8 different suppliers, resulting in inconsistent quality, fragmented logistics, and above-market pricing.',
    solution: 'We consolidated the supply base to 3 verified factories, negotiated volume-based pricing, and implemented standardized quality inspection protocols across all production.',
    results: ['Procurement costs reduced by 30%', 'Quality consistency improved significantly', 'Lead times shortened by 2 weeks'],
    imgId: 'cs-furn-page-c3d4',
    titleId: 'cs-furn-p-title',
    descId: 'cs-furn-p-desc',
  },
  {
    title: 'Australian Auto Parts Importer Eliminates Delays',
    industry: 'Auto Parts',
    challenge: 'An Australian auto parts distributor faced chronic production delays averaging 3 weeks past agreed deadlines, disrupting their inventory planning.',
    solution: 'We implemented weekly production monitoring, established milestone-based progress tracking, and created an early warning system for potential delays with corrective action protocols.',
    results: ['Average delay reduced from 3 weeks to under 3 days', 'On-time delivery rate improved to 95%', 'Inventory planning accuracy improved by 40%'],
    imgId: 'cs-auto-page-e5f6',
    titleId: 'cs-auto-p-title',
    descId: 'cs-auto-p-desc',
  },
  {
    title: 'UK Kitchenware Brand Launches Private Label Line',
    industry: 'Home & Kitchen',
    challenge: 'A UK kitchenware brand wanted to launch a private label product line but had no experience sourcing from China and needed end-to-end support.',
    solution: 'We provided full-service sourcing from supplier identification through to delivery, including product development support, sample coordination, and first-order production management.',
    results: ['Product line launched within 4 months', 'First order delivered with 0% defect rate', 'Unit cost 45% lower than UK manufacturing'],
    imgId: 'cs-kitch-page-g7h8',
    titleId: 'cs-kitch-p-title',
    descId: 'cs-kitch-p-desc',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-950 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Case Studies</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Real results from real clients. See how we have helped businesses across different industries solve their China sourcing challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {caseStudies.map((cs, i) => (
              <div key={cs.title} className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <div className="lg:w-2/5">
                  <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden sticky top-28">
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-3/5">
                  <span className="inline-block text-xs font-medium text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full mb-4">{cs.industry}</span>
                  <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">{cs.title}</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Challenge</h3>
                    <p id={cs.descId} className="text-slate-600 leading-relaxed">{cs.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Our Solution</h3>
                    <p className="text-slate-600 leading-relaxed">{cs.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Results</h3>
                    <ul className="space-y-2">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-slate-700">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-600 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Want Similar Results?
          </h2>
          <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing challenges and we will propose a solution tailored to your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-brand-700 px-8 py-4 rounded-lg text-base font-semibold hover:bg-brand-50 transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
