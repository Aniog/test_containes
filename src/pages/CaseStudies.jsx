import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '@/components/SectionHeader';
import CTAButton from '@/components/CTAButton';
import { CheckCircle, MapPin, Package } from 'lucide-react';

const cases = [
  {
    id: 'furniture-us',
    industry: 'Home Furniture',
    country: 'United States',
    flag: '🇺🇸',
    challenge: 'A US-based furniture retailer needed to diversify their supply chain away from a single unreliable supplier. They required CE-certified products at a lower unit cost without compromising quality.',
    solution: 'We audited 8 furniture factories in Guangdong and shortlisted 3 that met CE certification requirements. After sample review and negotiation, the client selected a new primary supplier.',
    result: '22% reduction in unit cost. CE certification maintained. Lead time reduced from 75 to 55 days. Zero quality rejections in the first three orders.',
    services: ['Supplier Sourcing', 'Factory Verification', 'Quality Inspection'],
    titleId: 'cs-furniture-us-title',
    descId: 'cs-furniture-us-desc',
    imgId: 'cs-furniture-us-img-a1b2c3',
  },
  {
    id: 'electronics-de',
    industry: 'Consumer Electronics',
    country: 'Germany',
    flag: '🇩🇪',
    challenge: 'A German electronics distributor needed a reliable PCB manufacturer capable of producing to IPC Class 2 standards with RoHS compliance. Previous suppliers had failed quality audits.',
    solution: 'We identified 5 PCB manufacturers in Shenzhen and Dongguan, conducted factory audits, and arranged engineering samples. We managed the qualification process and first-batch inspection.',
    result: 'Qualified 2 approved suppliers. First production batch passed QC with zero critical defects. RoHS compliance documentation provided. Ongoing production monitoring in place.',
    services: ['Supplier Sourcing', 'Factory Verification', 'Quality Inspection', 'Production Follow-up'],
    titleId: 'cs-electronics-de-title',
    descId: 'cs-electronics-de-desc',
    imgId: 'cs-electronics-de-img-d4e5f6',
  },
  {
    id: 'apparel-au',
    industry: 'Apparel & Textiles',
    country: 'Australia',
    flag: '🇦🇺',
    challenge: 'An Australian fashion brand wanted to source sustainable fabrics and manufacture a new activewear line in China. They had no existing supplier relationships and needed end-to-end support.',
    solution: 'We sourced OEKO-TEX certified fabric suppliers in Zhejiang and identified a garment factory in Guangzhou with experience in activewear. We managed sampling, production, and logistics.',
    result: 'OEKO-TEX certified fabric secured. Lead time cut from 90 to 45 days. First production run of 5,000 units delivered on schedule with 99.2% pass rate on inspection.',
    services: ['Supplier Sourcing', 'Quality Inspection', 'Production Follow-up', 'Shipping Coordination'],
    titleId: 'cs-apparel-au-title',
    descId: 'cs-apparel-au-desc',
    imgId: 'cs-apparel-au-img-g7h8i9',
  },
  {
    id: 'industrial-uk',
    industry: 'Industrial Equipment',
    country: 'United Kingdom',
    flag: '🇬🇧',
    challenge: 'A UK industrial distributor needed to source hydraulic fittings and valves at competitive prices. They required ISO 9001 certified manufacturers and consistent quality across large volumes.',
    solution: 'We sourced ISO 9001 certified manufacturers in Wenzhou and Ningbo, conducted factory audits, and established a quality control protocol for ongoing orders.',
    result: '18% cost saving versus previous European suppliers. ISO 9001 certification verified. Ongoing QC protocol established. 12 successful shipments completed in the first year.',
    services: ['Supplier Sourcing', 'Factory Verification', 'Quality Inspection', 'Shipping Coordination'],
    titleId: 'cs-industrial-uk-title',
    descId: 'cs-industrial-uk-desc',
    imgId: 'cs-industrial-uk-img-j1k2l3',
  },
  {
    id: 'packaging-ca',
    industry: 'Custom Packaging',
    country: 'Canada',
    flag: '🇨🇦',
    challenge: 'A Canadian e-commerce brand needed custom-printed packaging boxes with specific Pantone colours and FSC-certified materials. They had experienced colour inconsistency with a previous supplier.',
    solution: 'We sourced FSC-certified packaging manufacturers in Guangdong, managed colour approval samples, and implemented a colour-matching QC protocol for each production run.',
    result: 'FSC certification confirmed. Colour consistency achieved across 3 production runs. 30% cost reduction versus previous supplier. Packaging delivered 2 weeks ahead of schedule.',
    services: ['Supplier Sourcing', 'Quality Inspection', 'Shipping Coordination'],
    titleId: 'cs-packaging-ca-title',
    descId: 'cs-packaging-ca-desc',
    imgId: 'cs-packaging-ca-img-m4n5o6',
  },
  {
    id: 'consumer-nl',
    industry: 'Consumer Goods',
    country: 'Netherlands',
    flag: '🇳🇱',
    challenge: 'A Dutch retailer wanted to launch a private-label kitchenware range. They needed a manufacturer capable of custom branding, food-safe materials, and EU compliance documentation.',
    solution: 'We identified a kitchenware factory in Zhejiang with EU food-contact compliance experience, managed the private-label development process, and coordinated CE and LFGB testing.',
    result: 'Private-label range launched on schedule. CE and LFGB compliance achieved. 8,000 units delivered to Rotterdam warehouse. Repeat order placed within 3 months.',
    services: ['Supplier Sourcing', 'Factory Verification', 'Quality Inspection', 'Trade Compliance', 'Shipping Coordination'],
    titleId: 'cs-consumer-nl-title',
    descId: 'cs-consumer-nl-desc',
    imgId: 'cs-consumer-nl-img-p7q8r9',
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
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real Sourcing Projects, Real Results
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              A selection of sourcing projects we have completed for international buyers across different industries and countries.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((cs) => (
              <div key={cs.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="h-52 bg-lightblue overflow-hidden">
                  <img
                    alt={cs.industry}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{cs.flag}</span>
                    <span className="text-xs font-semibold text-mutedtext uppercase tracking-wider">{cs.country}</span>
                  </div>
                  <h3 id={cs.titleId} className="font-bold text-darktext text-xl mb-3">{cs.industry}</h3>

                  <div className="space-y-3 mb-4 flex-1">
                    <div>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Challenge</p>
                      <p id={cs.descId} className="text-mutedtext text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-success uppercase tracking-wider mb-1">Result</p>
                      <p className="text-darktext text-sm leading-relaxed font-medium">{cs.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-auto pt-4 border-t border-gray-100">
                    {cs.services.map((s) => (
                      <span key={s} className="text-xs bg-lightblue text-primary px-2 py-1 rounded-md font-medium">
                        {s}
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
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Sourcing Project
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Tell us what you need and we will put together a sourcing plan tailored to your product and market.
          </p>
          <CTAButton to="/contact" variant="white" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
