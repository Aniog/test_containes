import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2, BarChart3, Clock, ShieldCheck } from 'lucide-react';

const caseStudies = [
  {
    title: 'Electronics Importer Reduces Defect Rate by 73%',
    industry: 'Consumer Electronics',
    country: 'United States',
    challenge: 'A US-based electronics importer was experiencing a 12% defect rate from their Chinese supplier, resulting in costly returns and customer complaints. They had no on-the-ground presence to verify quality before shipment.',
    solution: 'We implemented a three-stage inspection program: pre-production material verification, during-production in-line checks, and pre-shipment AQL inspection. We also identified a better-qualified backup supplier.',
    results: ['Defect rate reduced from 12% to under 3%', 'Customer complaints decreased by 85%', 'Return processing costs cut by $150K/year', 'Backup supplier secured for supply chain resilience'],
    imgId: 'cs-electronics-d1e2f3',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
  },
  {
    title: 'Furniture Retailer Cuts Lead Time by 40%',
    industry: 'Home & Garden',
    country: 'Germany',
    challenge: 'A German furniture retailer was facing 90-day average lead times, with frequent delays causing stock shortages and missed seasonal windows. Communication with suppliers was inconsistent.',
    solution: 'We consolidated their 8 suppliers into 4 verified factories, implemented weekly production tracking, and set up a consolidation warehouse to combine shipments for faster delivery.',
    results: ['Average lead time reduced from 90 to 54 days', 'On-time delivery rate improved from 65% to 92%', 'Shipping costs reduced by 28% through consolidation', 'Seasonal stock availability improved significantly'],
    imgId: 'cs-furniture-g4h5i6',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
  },
  {
    title: 'Auto Parts Buyer Avoids $200K Loss',
    industry: 'Automotive',
    country: 'Australia',
    challenge: 'An Australian auto parts distributor was about to place a $200K order with a supplier they found online. The supplier claimed to be a manufacturer with ISO certification, but something felt off.',
    solution: 'Our factory verification team visited the supposed manufacturer and discovered it was a trading company with no production facility. The "factory photos" on their website were from a different company. We found and verified a real manufacturer with actual ISO certification.',
    results: ['Avoided $200K order with a fraudulent supplier', 'Found a genuine ISO-certified manufacturer', 'Negotiated 15% better pricing by working direct', 'Established ongoing quality monitoring program'],
    imgId: 'cs-auto-j7k8l9',
    titleId: 'cs-auto-title',
    descId: 'cs-auto-desc',
  },
  {
    title: 'Startup Successfully Launches First Product Line',
    industry: 'Health & Personal Care',
    country: 'United Kingdom',
    challenge: 'A UK startup wanted to launch a line of premium water bottles but had no experience sourcing from China. They were concerned about quality, communication, and the complexity of their first import.',
    solution: 'We guided them through the entire process: sourcing 5 potential suppliers, verifying 2 top candidates, coordinating sample production, conducting pre-shipment inspection, and managing their first sea freight shipment.',
    results: ['First order delivered on time with 0.5% defect rate', 'Product launched on schedule for target season', 'Established a reliable ongoing supply relationship', 'Total sourcing cost 40% below UK manufacturing alternative'],
    imgId: 'cs-startup-m1n2o3',
    titleId: 'cs-startup-title',
    descId: 'cs-startup-desc',
  },
  {
    title: 'Textile Company Secures Sustainable Supply Chain',
    industry: 'Apparel & Textiles',
    country: 'Netherlands',
    challenge: 'A Dutch textile company needed to transition to sustainable and certified organic fabric suppliers to meet EU regulations and customer demand, but struggled to find verified sources in China.',
    solution: 'We sourced and verified 3 GOTS-certified organic textile manufacturers, conducted environmental compliance audits, and set up a quality monitoring program for ongoing orders.',
    results: ['3 GOTS-certified suppliers verified and onboarded', 'Full EU regulatory compliance achieved', 'Sustainable product line launched within 6 months', 'Customer sustainability rating improved to A+'],
    imgId: 'cs-textile-p4q5r6',
    titleId: 'cs-textile-title',
    descId: 'cs-textile-desc',
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
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-blue-light font-medium text-sm uppercase tracking-wider mb-3">Case Studies</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Real Results for Real Buyers</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            See how we've helped companies across industries and countries source better, reduce risk, and save money.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((cs, idx) => (
        <section key={cs.title} className={`py-16 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-navy-50 text-navy-800 text-xs font-medium px-2.5 py-1 rounded">{cs.industry}</span>
                  <span className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded">{cs.country}</span>
                </div>
                <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">{cs.title}</h2>
                <p id={cs.descId} className="text-slate-600 text-sm font-medium mb-3">Challenge</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{cs.challenge}</p>
                <p className="text-slate-600 text-sm font-medium mb-3">Our Solution</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{cs.solution}</p>
                <p className="text-slate-600 text-sm font-medium mb-3">Results</p>
                <ul className="space-y-2">
                  {cs.results.map((r) => (
                    <li key={r} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="rounded-lg overflow-hidden bg-slate-100 aspect-[4/3]">
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
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want Similar Results for Your Business?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Let us understand your sourcing challenges and propose a tailored solution. Free consultation, no commitment.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition-colors no-underline">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
