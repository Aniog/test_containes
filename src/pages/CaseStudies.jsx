import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, TrendingUp, Globe, CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const caseStudies = [
  {
    id: 'furniture-uk',
    industry: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Retailer Cuts Sourcing Costs by 28%',
    challenge: 'A UK home goods retailer was sourcing furniture from a single supplier in Foshan with no quality oversight. They experienced inconsistent quality and rising prices with no leverage to negotiate.',
    solution: 'We audited 6 factories in Foshan, shortlisted 2 qualified alternatives, and negotiated pricing across 3 production runs. We implemented a pre-shipment inspection protocol for every order.',
    result: '28% cost reduction, zero defect shipments over 18 months, and a second qualified backup supplier identified.',
    services: ['Supplier Sourcing', 'Factory Audit', 'Quality Inspection', 'Production Follow-up'],
    titleId: 'cs-furniture-uk-title',
    descId: 'cs-furniture-uk-desc',
    imgId: 'cs-furniture-uk-img-a1b2c3',
  },
  {
    id: 'electronics-us',
    industry: 'Electronics',
    country: 'United States',
    title: 'US Brand Launches Private Label Electronics On Time',
    challenge: 'An American startup needed to develop a custom consumer electronics product with OEM manufacturing in Shenzhen. They had no China contacts and a tight 6-month launch deadline.',
    solution: 'We identified a certified Shenzhen manufacturer with relevant OEM experience, managed the sampling and tooling process, coordinated FCC pre-compliance testing, and arranged air freight for the launch shipment.',
    result: 'Product launched on schedule, passed FCC certification on first submission, and the client secured retail distribution within 3 months of launch.',
    services: ['Supplier Sourcing', 'Factory Audit', 'OEM Coordination', 'Shipping Coordination'],
    titleId: 'cs-electronics-us-title',
    descId: 'cs-electronics-us-desc',
    imgId: 'cs-electronics-us-img-d4e5f6',
  },
  {
    id: 'apparel-fr',
    industry: 'Apparel',
    country: 'France',
    title: 'French Fashion Brand Achieves Consistent Quality',
    challenge: 'A French fashion label was receiving garments with inconsistent sizing, stitching defects, and incorrect colorways. Their existing supplier in Guangzhou was unresponsive to complaints.',
    solution: 'We conducted a social and quality audit of the existing factory, identified the root causes of defects, and implemented an in-line inspection protocol. We also sourced a backup factory with OEKO-TEX certification.',
    result: 'Defect rate reduced by 85% within two production runs. The brand successfully completed 4 seasons with consistent quality and on-time delivery.',
    services: ['Factory Audit', 'Quality Inspection', 'Supplier Sourcing', 'Production Follow-up'],
    titleId: 'cs-apparel-fr-title',
    descId: 'cs-apparel-fr-desc',
    imgId: 'cs-apparel-fr-img-g7h8i9',
  },
  {
    id: 'hardware-au',
    industry: 'Hardware',
    country: 'Australia',
    title: 'Australian Distributor Streamlines Multi-Supplier Logistics',
    challenge: 'An Australian hardware distributor was importing from 5 different Chinese suppliers with separate shipments, resulting in high freight costs and complex customs documentation.',
    solution: 'We consolidated all 5 suppliers into a single monthly sea freight shipment from our Guangzhou warehouse, standardised export documentation, and implemented a unified QC checklist across all suppliers.',
    result: '35% reduction in freight costs, simplified customs process, and a single point of contact for all China-side operations.',
    services: ['Supplier Management', 'Shipping Coordination', 'Quality Inspection'],
    titleId: 'cs-hardware-au-title',
    descId: 'cs-hardware-au-desc',
    imgId: 'cs-hardware-au-img-j1k2l3',
  },
  {
    id: 'toys-de',
    industry: 'Toys',
    country: 'Germany',
    title: 'German Toy Brand Achieves EN71 Compliance',
    challenge: 'A German toy importer needed to ensure their Chinese-manufactured toys met EN71 safety standards for the European market. Their previous supplier had failed lab tests twice.',
    solution: 'We sourced a factory with prior EN71 experience, coordinated pre-production material testing, and managed the lab testing process with an accredited testing body in China.',
    result: 'EN71 certification achieved on first submission. The client successfully launched in 3 European retail chains.',
    services: ['Supplier Sourcing', 'Factory Audit', 'Quality Inspection', 'Compliance Coordination'],
    titleId: 'cs-toys-de-title',
    descId: 'cs-toys-de-desc',
    imgId: 'cs-toys-de-img-m4n5o6',
  },
  {
    id: 'cosmetics-ca',
    industry: 'Cosmetics',
    country: 'Canada',
    title: 'Canadian Beauty Brand Sources Private Label Skincare',
    challenge: 'A Canadian beauty startup wanted to launch a private label skincare line manufactured in China. They needed a factory with GMP certification and experience with Health Canada requirements.',
    solution: 'We identified 3 GMP-certified cosmetics factories in Guangzhou, coordinated formula development and sample testing, and managed the full OEM process including custom packaging.',
    result: 'Product line launched with 8 SKUs, all meeting Health Canada requirements. The brand achieved profitability within 6 months of launch.',
    services: ['Supplier Sourcing', 'Factory Audit', 'OEM Coordination', 'Quality Inspection'],
    titleId: 'cs-cosmetics-ca-title',
    descId: 'cs-cosmetics-ca-desc',
    imgId: 'cs-cosmetics-ca-img-p7q8r9',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          data-strk-bg-id="cs-hero-bg-v1w2x3"
          data-strk-bg="China factory production business success"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Client Results</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            Case Studies
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Real sourcing projects we have managed for international buyers. Each case study outlines the challenge, our approach, and the measurable outcome.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">{cs.industry}</span>
                    <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Globe className="w-3 h-3" /> {cs.country}
                    </span>
                  </div>
                  <h2 id={cs.titleId} className="text-slate-900 font-bold text-xl mb-4 leading-snug">{cs.title}</h2>

                  <div className="space-y-4 mb-5">
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Challenge</p>
                      <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Our Approach</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 mb-5 flex items-start gap-3">
                    <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-0.5">Result</p>
                      <p className="text-green-800 text-sm font-medium">{cs.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cs.services.map((svc) => (
                      <span key={svc} className="bg-slate-100 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full">
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want Results Like These?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your sourcing challenge and we'll put together a plan tailored to your product and market.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-10 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
