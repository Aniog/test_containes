import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '@/components/shared/SectionHeader.jsx';

const caseStudies = [
  {
    title: 'US Electronics Brand Cuts Defect Rate by 85%',
    industry: 'Consumer Electronics',
    country: 'United States',
    challenge: 'A US-based electronics company was experiencing a 12% defect rate from their Chinese supplier, leading to high return rates and customer complaints. They needed a sourcing partner who could find a better factory and implement quality controls.',
    solution: 'We identified three verified electronics factories in Shenzhen with proven track records in similar products. After factory audits and sample evaluation, the client selected a supplier with ISO 9001 certification. We implemented a three-stage inspection process: pre-production, during-production, and pre-shipment.',
    results: [
      'Defect rate reduced from 12% to under 2%',
      'Return rate decreased by 90%',
      'On-time delivery improved to 95%',
      'Cost savings of 15% through better negotiation',
    ],
    imgId: 'cs-page-elec-q1r2',
  },
  {
    title: 'European Retailer Sources 200 SKUs in 6 Months',
    industry: 'Home & Garden',
    country: 'Germany',
    challenge: 'A European home goods retailer needed to diversify their supply chain beyond their existing suppliers. They required 200 new SKUs across 15 product categories, with consistent quality and competitive pricing.',
    solution: 'We assembled a dedicated sourcing team to manage the project. We identified and verified 28 suppliers across Guangdong, Zhejiang, and Fujian provinces. Our team coordinated sampling, negotiated pricing, and managed the entire order process from initial inquiry to shipment.',
    results: [
      '200 SKUs sourced and shipped within 6 months',
      '15 product categories covered',
      'Average cost reduction of 22% vs. previous suppliers',
      'Zero quality-related returns in first shipment',
    ],
    imgId: 'cs-page-retail-s3t4',
  },
  {
    title: 'Auto Parts Importer Saves 30% on Logistics',
    industry: 'Auto Parts',
    country: 'Brazil',
    challenge: 'A Brazilian auto parts distributor was paying premium rates for fragmented shipping from multiple Chinese suppliers. They needed a partner who could consolidate shipments and optimize their logistics costs.',
    solution: 'We consolidated orders from 8 suppliers into weekly shipments, negotiated volume freight rates, and implemented a warehouse consolidation system in Shenzhen. We also coordinated customs documentation for Brazilian import requirements.',
    results: [
      'Shipping costs reduced by 30%',
      'Transit time reduced from 45 to 35 days',
      'Customs clearance time reduced by 50%',
      'Order visibility improved with weekly tracking reports',
    ],
    imgId: 'cs-page-auto-u5v6',
  },
  {
    title: 'Australian Startup Launches Private Label Brand',
    industry: 'Health & Beauty',
    country: 'Australia',
    challenge: 'An Australian startup wanted to launch a private label skincare brand but had no experience sourcing from China. They needed help finding manufacturers, developing formulations, and managing the entire production process.',
    solution: 'We connected them with GMP-certified cosmetic factories in Guangzhou, coordinated formulation development and stability testing, managed packaging design and production, and oversaw the entire order from sampling to shipment.',
    results: [
      'Product launched within 4 months of initial inquiry',
      '3 SKUs in first production run',
      'All products passed Australian regulatory requirements',
      'Unit cost 40% lower than local manufacturing',
    ],
    imgId: 'cs-page-beauty-w7x8',
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
  <div>
    <section className="bg-navy py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Case Studies</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          See how we've helped global buyers source better from China. Real projects, real results.
        </p>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="space-y-20">
          {caseStudies.map((cs, i) => (
            <div key={cs.title} className="border-b border-gray-200 pb-20 last:border-0 last:pb-0">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">{cs.industry}</span>
                    <span className="text-gray-300">|</span>
                    <span className="text-xs font-medium text-body">{cs.country}</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">{cs.title}</h2>
                </div>
                <div className="flex-1">
                  <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gray-100">
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[cs-page-${cs.imgId}-challenge] [cs-page-${cs.imgId}-title]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p id={`cs-page-${cs.imgId}-title`} className="hidden">{cs.title}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-red-100 rounded flex items-center justify-center">
                      <span className="text-red-600 text-xs font-bold">!</span>
                    </div>
                    Challenge
                  </h4>
                  <p id={`cs-page-${cs.imgId}-challenge`} className="text-sm text-body leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-navy/10 rounded flex items-center justify-center">
                      <span className="text-navy text-xs font-bold">S</span>
                    </div>
                    Solution
                  </h4>
                  <p className="text-sm text-body leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-3 flex items-center gap-2">
                    <div className="w-6 h-6 bg-emerald-100 rounded flex items-center justify-center">
                      <span className="text-emerald-600 text-xs font-bold">R</span>
                    </div>
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {cs.results.map((r) => (
                      <li key={r} className="flex gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-body">{r}</span>
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

    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          title="Want Results Like These?"
          subtitle="Tell us about your sourcing challenge and we'll show you how we can help."
        />
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          Get a Free Sourcing Quote
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  </div>
  );
};

export default CaseStudies;
