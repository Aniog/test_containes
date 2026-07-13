import { useEffect, useRef } from 'react';
import { ArrowRight, Star, CheckCircle, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SectionHeader, CTAButton, Card, Badge } from '@/components/ui/SharedComponents';

const caseStudies = [
  {
    id: 'case-1',
    client: 'UK Outdoor Furniture Retailer',
    country: 'United Kingdom',
    category: 'Furniture',
    challenge: 'The client had previously received a shipment of garden furniture that didn\'t match the approved samples. They needed a reliable sourcing partner to prevent this from happening again.',
    solution: 'We conducted factory audits at 4 shortlisted manufacturers in Foshan, identified the best fit, and implemented a strict pre-shipment inspection protocol with detailed photo documentation.',
    result: 'The client received 2,000 units that matched specifications exactly. Zero defects reported. They have since placed 3 additional orders through us.',
    services: ['Factory Audit', 'Quality Inspection', 'Shipping Coordination'],
    savings: '18% cost reduction vs. previous supplier',
    imgId: 'case-img-1-ss1',
    titleId: 'case-title-1',
    descId: 'case-desc-1',
  },
  {
    id: 'case-2',
    client: 'French E-commerce Brand',
    country: 'France',
    category: 'Electronics',
    challenge: 'A fast-growing French e-commerce brand needed to source private-label Bluetooth speakers at competitive prices without compromising on quality or CE certification compliance.',
    solution: 'We sourced 6 qualified manufacturers in Shenzhen, arranged samples, verified CE certification documentation, and negotiated pricing. We also coordinated third-party lab testing.',
    result: 'The brand launched their product line on time with full CE compliance. Unit cost was 22% below their initial budget. They now source 4 product lines through us.',
    services: ['Supplier Sourcing', 'Factory Verification', 'Quality Inspection'],
    savings: '22% below initial budget',
    imgId: 'case-img-2-ss2',
    titleId: 'case-title-2',
    descId: 'case-desc-2',
  },
  {
    id: 'case-3',
    client: 'Mexican Industrial Importer',
    country: 'Mexico',
    category: 'Industrial Parts',
    challenge: 'The client needed to source precision-machined hydraulic components from China but had no existing supplier relationships and was concerned about quality consistency.',
    solution: 'We identified specialized manufacturers in Ningbo, conducted technical audits to verify CNC machining capabilities, and implemented in-process inspections at key production milestones.',
    result: 'First order of 5,000 components delivered with 99.6% acceptance rate. Production follow-up service prevented a 2-week delay by identifying a material issue early.',
    services: ['Supplier Sourcing', 'Factory Audit', 'Production Follow-up'],
    savings: '2-week delay prevented',
    imgId: 'case-img-3-ss3',
    titleId: 'case-title-3',
    descId: 'case-desc-3',
  },
  {
    id: 'case-4',
    client: 'Australian Apparel Brand',
    country: 'Australia',
    category: 'Textiles',
    challenge: 'A sustainable fashion brand needed to find manufacturers in China that could meet their ethical sourcing standards and produce organic cotton garments with GOTS certification.',
    solution: 'We researched certified manufacturers in Hangzhou and Guangzhou, conducted social compliance audits, and verified GOTS certification. We also arranged fabric testing at an accredited lab.',
    result: 'The brand successfully launched their China-sourced collection with full certification compliance. Lead times were reduced by 3 weeks compared to their previous supplier.',
    services: ['Supplier Sourcing', 'Factory Audit', 'Quality Inspection'],
    savings: '3-week lead time reduction',
    imgId: 'case-img-4-ss4',
    titleId: 'case-title-4',
    descId: 'case-desc-4',
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
      {/* Header */}
      <section className="bg-brand-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Real Results for Real Buyers
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              See how we've helped importers and brands across the world source products from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, index) => (
              <div key={cs.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}] China sourcing`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.client}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-3 p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge variant="blue">{cs.category}</Badge>
                      <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <Globe className="w-3 h-3" />
                        <span>{cs.country}</span>
                      </div>
                    </div>
                    <h2 id={cs.titleId} className="text-2xl font-bold text-brand-dark mb-1">{cs.client}</h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cs.services.map((s) => (
                        <span key={s} className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">{s}</span>
                      ))}
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1">Challenge</h4>
                        <p id={cs.descId} className="text-gray-600 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1">Our Solution</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1">Result</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{cs.result}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-green-50 text-green-700 text-sm font-semibold px-4 py-2 rounded-lg w-fit">
                      <CheckCircle className="w-4 h-4" />
                      {cs.savings}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to become our next success story?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your sourcing project and we'll show you how we can help.
          </p>
          <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
