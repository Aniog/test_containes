import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, TrendingDown, Shield, Clock, Award } from 'lucide-react';

const caseStudies = [
  {
    id: 'electronics-retail',
    category: 'Electronics',
    title: 'Consumer Electronics Sourcing for European Retail Chain',
    client: 'A European retailer with 200+ stores',
    challenge: 'The client needed to source Bluetooth speakers and smart home devices with consistent quality at competitive prices. Previous attempts to source directly resulted in quality issues and communication barriers.',
    solution: 'We identified 8 potential factories, audited 4 on-site, and shortlisted 3. We negotiated pricing, managed sampling, and implemented a rigorous QC process with in-line and pre-shipment inspections.',
    results: [
      '22% cost reduction vs. previous supplier',
      '99.2% order quality acceptance rate',
      'On-time delivery for all 6 orders in 12 months',
      'Client expanded to 3 additional product lines',
    ],
    imgId: 'case-electronics-retail-1a2b3c',
    titleId: 'case-title-electronics',
    descId: 'case-desc-electronics',
  },
  {
    id: 'cnc-machinery',
    category: 'Machinery',
    title: 'CNC Machinery Procurement for US Manufacturer',
    client: 'A mid-size US manufacturing company',
    challenge: 'The client needed to source CNC milling machines and lathes. Concerns about equipment quality, after-sales support, and international shipping of heavy machinery.',
    solution: 'We verified 5 factories through on-site audits, evaluated equipment specifications against client requirements, arranged factory visits for the client, and managed the complete shipping process.',
    results: [
      '35% cost savings vs. domestic alternatives',
      'All equipment met or exceeded specifications',
      'Successful installation and training coordination',
      'Established long-term parts supply agreement',
    ],
    imgId: 'case-cnc-machinery-4d5e6f',
    titleId: 'case-title-cnc',
    descId: 'case-desc-cnc',
  },
  {
    id: 'textile-brand',
    category: 'Textiles',
    title: 'Sportswear Line Development for Australian Brand',
    client: 'An emerging Australian sportswear brand',
    challenge: 'The client needed to develop a complete sportswear line with custom fabrics, logos, and packaging. They had no prior experience sourcing from China.',
    solution: 'We sourced fabric suppliers, identified 4 garment factories, managed the entire sampling process (3 rounds), and oversaw production of 15,000 units across 8 SKUs.',
    results: [
      'Full collection delivered in 10 weeks',
      'Fabric quality exceeded client expectations',
      '40% lower cost vs. local manufacturing',
      'Client now runs quarterly production cycles',
    ],
    imgId: 'case-textile-brand-7g8h9i',
    titleId: 'case-title-textile',
    descId: 'case-desc-textile',
  },
  {
    id: 'packaging-food',
    category: 'Packaging',
    title: 'Food Packaging for North American Distributor',
    client: 'A food packaging distributor in Canada',
    challenge: 'The client required food-grade packaging materials with FDA compliance. Previous supplier had inconsistent quality and missed delivery deadlines.',
    solution: 'We audited 6 factories with food-grade certifications, verified material compliance documentation, and implemented a production monitoring system with weekly progress reports.',
    results: [
      'FDA-compliant packaging delivered consistently',
      '15% cost reduction from previous supplier',
      '100% on-time delivery over 18 months',
      'Zero quality rejections at customs',
    ],
    imgId: 'case-packaging-food-0j1k2l',
    titleId: 'case-title-packaging',
    descId: 'case-desc-packaging',
  },
  {
    id: 'auto-parts',
    category: 'Automotive',
    title: 'Automotive Aftermarket Parts for German Distributor',
    client: 'A German automotive parts distributor',
    challenge: 'The client needed ISO/TS 16949 certified manufacturers for brake components and electrical parts. Strict quality and documentation requirements.',
    solution: 'We identified and audited 4 certified factories, managed PPAP documentation, coordinated sample testing at a third-party lab, and oversaw initial production runs.',
    results: [
      'All suppliers passed ISO/TS 16949 audit',
      'First-article approval achieved in one round',
      '20% cost reduction vs. European suppliers',
      'Long-term supply agreement established',
    ],
    imgId: 'case-auto-parts-3m4n5o',
    titleId: 'case-title-auto',
    descId: 'case-desc-auto',
  },
  {
    id: 'solar-energy',
    category: 'Renewable Energy',
    title: 'Solar Panel Procurement for African Project',
    client: 'A renewable energy company in Kenya',
    challenge: 'The client needed high-efficiency solar panels and lithium batteries for a large-scale installation. Required IEC certification and competitive pricing.',
    solution: 'We identified 5 Tier-1 solar manufacturers, verified certifications, negotiated volume pricing, arranged third-party inspection, and managed logistics to Mombasa port.',
    results: [
      '28% cost savings on total procurement',
      'All panels passed IEC certification verification',
      'Complete shipment delivered in 8 weeks',
      'After-sales warranty support secured',
    ],
    imgId: 'case-solar-energy-6p7q8r',
    titleId: 'case-title-solar',
    descId: 'case-desc-solar',
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
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              <span id="cases-hero-label">Case Studies</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              <span id="cases-hero-heading">Real Sourcing Projects, Real Results</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span id="cases-hero-subtitle">
                Detailed examples of how we've helped businesses source successfully from China.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-start`}>
                <div className="lg:w-1/2">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}] [cases-hero-subtitle] [cases-hero-heading]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div className="lg:w-1/2">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{cs.category}</span>
                  <h2 id={cs.titleId} className="text-2xl font-bold text-b2b-text mt-2 mb-4">{cs.title}</h2>
                  <p id={cs.descId} className="text-sm text-b2b-text-light mb-4">Client: {cs.client}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-b2b-text mb-1">Challenge</h4>
                      <p className="text-sm text-b2b-text-medium leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-b2b-text mb-1">Our Solution</h4>
                      <p className="text-sm text-b2b-text-medium leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="bg-b2b-light rounded-lg p-5">
                    <h4 className="text-sm font-semibold text-b2b-text mb-3">Results</h4>
                    <ul className="space-y-2">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-b2b-text-medium">
                          <Award className="w-4 h-4 text-b2b-success shrink-0 mt-0.5" />
                          {r}
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
      <section className="py-16 md:py-24 bg-b2b-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-b2b-text mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-b2b-text-medium mb-8 max-w-2xl mx-auto">
            Share your sourcing requirements and we'll create a tailored plan for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-md transition-colors duration-200 shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}