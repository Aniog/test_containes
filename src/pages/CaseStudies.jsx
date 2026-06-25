import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '../components/ui/CTAButton';
import SectionHeader from '../components/ui/SectionHeader';

const cases = [
  {
    id: 'furniture-uk',
    industry: 'Furniture',
    country: 'United Kingdom',
    client: 'UK Furniture Retailer',
    product: 'Upholstered Sofas',
    challenge: 'A mid-sized UK furniture retailer had experienced two failed supplier relationships — one delivered goods with incorrect dimensions, another disappeared after receiving a deposit. They needed a reliable sofa manufacturer with consistent quality and on-time delivery.',
    solution: 'We sourced and audited 4 factories in Foshan, Guangdong — China\'s furniture manufacturing hub. We assessed production capacity, quality management systems, and export experience. One factory was selected based on its ISO 9001 certification and track record with European buyers.',
    result: 'The client placed an initial order of 500 units. Pre-shipment inspection confirmed all dimensions and materials matched specifications. Delivery was on time. The client has since placed 3 repeat orders and reduced their unit cost by 38% compared to their previous supplier.',
    metrics: ['38% cost reduction', '500 units first order', '3 repeat orders placed', 'Zero quality rejections'],
    imgId: 'cs-furniture-uk-img-a1b2c3',
    titleId: 'cs-furniture-uk-title',
    descId: 'cs-furniture-uk-desc',
  },
  {
    id: 'electronics-us',
    industry: 'Electronics',
    country: 'United States',
    client: 'US IoT Startup',
    product: 'Smart Home Sensor Modules',
    challenge: 'A US-based IoT startup needed a PCB assembly partner for their smart home sensor product. They required strict quality standards, NDA compliance, and the ability to scale from 1,000 to 50,000 units within 12 months.',
    solution: 'We identified 3 qualified EMS (Electronics Manufacturing Services) factories in Shenzhen with experience in IoT products. We managed the NDA process, arranged engineering samples, and coordinated DFM (Design for Manufacturability) feedback. The selected factory had IPC-A-610 certified inspectors.',
    result: 'First production run of 2,000 units completed within 6 weeks of sample approval. Defect rate was under 0.3%. The client has since scaled to 15,000 units per quarter and is on track for their 50,000-unit target.',
    metrics: ['0.3% defect rate', '6-week first production', 'Scaled to 15K units/quarter', 'IPC-A-610 certified QC'],
    imgId: 'cs-electronics-us-img-d4e5f6',
    titleId: 'cs-electronics-us-title',
    descId: 'cs-electronics-us-desc',
  },
  {
    id: 'apparel-au',
    industry: 'Apparel',
    country: 'Australia',
    client: 'Australian Sustainable Fashion Brand',
    product: 'Organic Cotton Activewear',
    challenge: 'An Australian activewear brand wanted to source OEKO-TEX certified organic cotton fabrics and manufacture garments in ethically audited factories. Previous attempts to source independently had resulted in misleading certifications.',
    solution: 'We sourced OEKO-TEX Standard 100 certified fabric mills in Jiangsu and audited 4 garment factories in Guangzhou for BSCI compliance. We verified all certifications directly with the issuing bodies and arranged fabric samples for approval.',
    result: 'The brand launched their first China-sourced collection on schedule. All certifications were verified and valid. The client achieved a 25% margin improvement while maintaining their sustainability commitments.',
    metrics: ['OEKO-TEX verified fabrics', 'BSCI compliant factory', '25% margin improvement', 'On-time collection launch'],
    imgId: 'cs-apparel-au-img-g7h8i9',
    titleId: 'cs-apparel-au-title',
    descId: 'cs-apparel-au-desc',
  },
  {
    id: 'hardware-de',
    industry: 'Hardware',
    country: 'Germany',
    client: 'German Hardware Distributor',
    product: 'Professional Hand Tools',
    challenge: 'A German hardware distributor needed a reliable source for professional-grade hand tools that could meet CE marking requirements and their customers\' quality expectations. They had concerns about consistency across large orders.',
    solution: 'We identified 2 factories in Zhejiang with CE certification and experience supplying European distributors. We conducted factory audits, arranged samples for testing in Germany, and set up a quality control protocol for ongoing orders.',
    result: 'Initial order of 10,000 units passed all CE compliance checks. The client now places quarterly orders and has expanded the product range to 45 SKUs. No quality complaints from end customers in 18 months.',
    metrics: ['CE compliance verified', '10,000 unit first order', '45 SKUs now sourced', '18 months zero complaints'],
    imgId: 'cs-hardware-de-img-j1k2l3',
    titleId: 'cs-hardware-de-title',
    descId: 'cs-hardware-de-desc',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#0d2b4e] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#e8621a] text-sm font-semibold uppercase tracking-wider">Client Results</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">Case Studies</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Real sourcing projects, real outcomes. Here's how we've helped buyers across different industries source successfully from China.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {cases.map((cs, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-50 text-[#1a4f8a] text-xs font-semibold px-3 py-1 rounded-full">{cs.industry}</span>
                    <span className="text-gray-500 text-sm">{cs.country}</span>
                  </div>
                  <h2 id={cs.titleId} className="text-2xl md:text-3xl font-bold text-[#0d2b4e] mb-2">{cs.client}</h2>
                  <p className="text-[#e8621a] font-medium text-sm mb-6">Product: {cs.product}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-[#0d2b4e] mb-1 text-sm uppercase tracking-wide">Challenge</h3>
                      <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0d2b4e] mb-1 text-sm uppercase tracking-wide">Our Approach</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0d2b4e] mb-1 text-sm uppercase tracking-wide">Result</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{cs.result}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {cs.metrics.map((m) => (
                      <div key={m} className="bg-[#f4f6f9] rounded-lg px-4 py-3 border border-slate-200">
                        <span className="text-[#1a4f8a] font-semibold text-sm">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`rounded-2xl overflow-hidden shadow-lg ${!isEven ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.client}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f4f6f9]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="Your Project"
            heading="Ready to Write Your Own Success Story?"
            subtext="Tell us about your sourcing challenge and we'll put together a plan tailored to your product and market."
          />
          <div className="mt-8">
            <CTAButton to="/contact" variant="primary">Get a Free Sourcing Quote</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
