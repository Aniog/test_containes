import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'Electronics Sourcing for European Distributor',
    client: 'Consumer Electronics Distributor, Germany',
    industry: 'Electronics',
    challenge: 'A German electronics distributor needed reliable PCB and LED lighting suppliers that could meet EU market compliance standards. Previous suppliers had inconsistent quality and lacked CE certification documentation.',
    approach: 'We identified and verified 5 factories in Shenzhen and Dongguan, conducted full factory audits, arranged sample evaluations, and implemented a multi-stage QC process with AQL inspections.',
    result: 'Selected 3 verified factories, reduced defect rate from 8% to under 1%, achieved full CE certification compliance, and established a long-term supply relationship with consistent quality.',
    imgId: 'case-page-electronics-p1q2r3',
    titleId: 'case-page-electronics-title',
    descId: 'case-page-electronics-desc',
  },
  {
    title: 'Home Textile Quality Improvement',
    client: 'Home Goods Retailer, USA',
    industry: 'Home & Garden',
    challenge: 'A US home goods retailer experienced inconsistent fabric quality and color matching issues with their Chinese suppliers, leading to high return rates and customer complaints.',
    approach: 'We sourced alternative suppliers with better color management systems, established standardized color reference libraries, implemented pre-production color approval processes, and set up during-production quality checks.',
    result: 'Reduced customer returns by 65%, established consistent color matching across production runs, and improved supplier communication with documented quality standards.',
    imgId: 'case-page-textile-s4t5u6',
    titleId: 'case-page-textile-title',
    descId: 'case-page-textile-desc',
  },
  {
    title: 'Custom Machinery Parts for Australian Buyer',
    client: 'Industrial Equipment Company, Australia',
    industry: 'Industrial',
    challenge: 'An Australian industrial company required precision-machined components with tight tolerances and full material traceability for mining equipment, but struggled to find suppliers capable of meeting their specifications.',
    approach: 'We sourced certified machining shops with ISO 9001 certification, implemented incoming material inspection with material test certificates, and established a dimensional inspection protocol using CMM equipment.',
    result: 'Delivered 100% on-spec parts across 12 production runs, established full material traceability, and reduced lead times by 20% through production scheduling optimization.',
    imgId: 'case-page-machinery-v7w8x9',
    titleId: 'case-page-machinery-title',
    descId: 'case-page-machinery-desc',
  },
  {
    title: 'Multi-Category Sourcing for E-commerce Brand',
    client: 'E-commerce Brand, UK',
    industry: 'Multi-category',
    challenge: 'A UK-based e-commerce brand needed to source multiple product categories (home, kitchen, outdoor) from different suppliers while maintaining consistent quality and managing complex logistics.',
    approach: 'We set up a dedicated sourcing team, identified specialized suppliers for each category, consolidated quality standards, and coordinated consolidated shipping to reduce logistics costs.',
    result: 'Successfully launched 45 SKUs across 4 product categories, reduced per-unit logistics costs by 30% through consolidation, and maintained a 97% quality pass rate across all suppliers.',
    imgId: 'case-page-ecommerce-y1z2a3',
    titleId: 'case-page-ecommerce-title',
    descId: 'case-page-ecommerce-desc',
  },
  {
    title: 'Cosmetics Compliance for Middle East Importer',
    client: 'Beauty Products Distributor, UAE',
    industry: 'Health & Beauty',
    challenge: 'A UAE cosmetics distributor needed to source skincare products from China that met Gulf Cooperation Council (GCC) regulatory requirements, with proper documentation and halal certification.',
    approach: 'We identified GMP-certified cosmetics factories, verified halal certification bodies, managed documentation for GCC customs clearance, and conducted pre-shipment testing for prohibited ingredients.',
    result: 'Successfully imported 3 product lines with full regulatory compliance, achieved smooth customs clearance on first shipment, and established a reliable supply chain for ongoing orders.',
    imgId: 'case-page-cosmetics-b4c5d6',
    titleId: 'case-page-cosmetics-title',
    descId: 'case-page-cosmetics-desc',
  },
  {
    title: 'Furniture Sourcing for Scandinavian Retailer',
    client: 'Furniture Retail Chain, Sweden',
    industry: 'Home & Garden',
    challenge: 'A Swedish furniture retailer needed to source flat-pack furniture that met strict Scandinavian design standards and European safety regulations while maintaining competitive pricing.',
    approach: 'We sourced furniture factories experienced in European market requirements, implemented FSC certification verification, conducted load testing and safety inspections, and managed packaging optimization for flat-pack shipping.',
    result: 'Launched 12 furniture lines meeting all European safety standards, achieved 40% cost reduction vs. previous suppliers, and reduced shipping damage rate to under 2%.',
    imgId: 'case-page-furniture-e7f8g9',
    titleId: 'case-page-furniture-title',
    descId: 'case-page-furniture-desc',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Case Studies</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Real results from real sourcing projects. See how we've helped global buyers overcome challenges and build reliable supply chains.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
          {caseStudies.map((cs, index) => (
            <div
              key={cs.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="aspect-[4/3] bg-surface rounded-lg overflow-hidden">
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
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="inline-block px-3 py-1 bg-primary/5 text-primary text-xs font-medium rounded mb-3">
                  {cs.industry}
                </span>
                <h2 id={cs.titleId} className="text-2xl font-bold text-primary mb-2">
                  {cs.title}
                </h2>
                <p id={cs.descId} className="text-text-secondary text-sm mb-6">{cs.client}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm mb-1">Challenge</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm mb-1">Our Approach</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{cs.approach}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">Result</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{cs.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Want Similar Results?</h2>
          <p className="text-text-secondary mb-8">
            Tell us about your sourcing challenge and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-7 py-3.5 bg-accent text-white font-semibold rounded-md hover:bg-accent-hover transition-colors"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
