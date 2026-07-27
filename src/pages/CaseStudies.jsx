import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'led-uk',
    title: 'LED Lighting Importer — United Kingdom',
    category: 'Electronics',
    challenge:
      'A UK-based electrical distributor had received a shipment of LED panels from a Chinese supplier that failed CE certification testing on arrival. They needed a new, compliant supplier urgently.',
    approach:
      'We identified 4 CE-certified LED manufacturers in Guangdong, conducted factory audits at 2 shortlisted facilities, and arranged sample testing. We negotiated pricing and confirmed the supplier within 6 weeks.',
    result: [
      'New CE-certified supplier confirmed in 6 weeks',
      'Unit cost 12% lower than previous supplier',
      'Zero compliance issues on first shipment',
      'Ongoing relationship — 4 orders placed to date',
    ],
    imgId: 'cs-led-uk-4a2b8c',
    titleId: 'cs-led-uk-title',
    descId: 'cs-led-uk-desc',
  },
  {
    id: 'furniture-au',
    title: 'Office Furniture Brand — Australia',
    category: 'Furniture',
    challenge:
      'An Australian furniture brand wanted to move production from a local manufacturer to China to reduce costs. They had no existing China contacts and were concerned about quality consistency.',
    approach:
      'We sourced 3 furniture manufacturers in Foshan, managed two rounds of sample development, and oversaw the first production run with in-line and pre-shipment inspections.',
    result: [
      '22% cost reduction vs. previous local manufacturer',
      'On-time delivery for first production run',
      'Quality matched approved samples',
      'Client now sources 3 product lines from China',
    ],
    imgId: 'cs-furniture-au-7d3e1f',
    titleId: 'cs-furniture-au-title',
    descId: 'cs-furniture-au-desc',
  },
  {
    id: 'apparel-us',
    title: 'Sportswear Label — United States',
    category: 'Apparel',
    challenge:
      'A US sportswear startup was launching their first private-label collection and needed a factory for a 2,000-unit order. They had no experience sourcing from China and needed full support.',
    approach:
      'We managed the full process: supplier identification, sample development, fabric sourcing, price negotiation, production monitoring, and pre-shipment inspection.',
    result: [
      'First collection delivered on spec and on time',
      'Client reordered within 3 months',
      'Expanded to 5 SKUs on second order',
      'Ongoing sourcing relationship established',
    ],
    imgId: 'cs-apparel-us-2c9f4a',
    titleId: 'cs-apparel-us-title',
    descId: 'cs-apparel-us-desc',
  },
  {
    id: 'packaging-de',
    title: 'E-Commerce Brand — Germany',
    category: 'Packaging',
    challenge:
      'A German e-commerce brand needed custom printed packaging for their product range. Their existing supplier had long lead times and inconsistent print quality.',
    approach:
      'We sourced 3 packaging manufacturers in Guangzhou and Shenzhen, managed print proofing, and coordinated a consolidated shipment with their other China orders.',
    result: [
      'Lead time reduced from 8 weeks to 5 weeks',
      'Print quality consistent across all SKUs',
      'Consolidated shipment saved on freight costs',
      'Supplier now handles all packaging needs',
    ],
    imgId: 'cs-packaging-de-8b5d2e',
    titleId: 'cs-packaging-de-title',
    descId: 'cs-packaging-de-desc',
  },
  {
    id: 'machinery-ca',
    title: 'Industrial Equipment Importer — Canada',
    category: 'Machinery',
    challenge:
      'A Canadian industrial equipment importer needed to source hydraulic components from China but had concerns about technical specifications and supplier reliability.',
    approach:
      'We identified specialist manufacturers in Zhejiang, arranged technical specification reviews, conducted factory audits, and managed a pilot order with in-line inspections.',
    result: [
      'Pilot order completed to specification',
      'Factory audit confirmed ISO 9001 compliance',
      'Technical documentation provided in English',
      'Ongoing supply relationship established',
    ],
    imgId: 'cs-machinery-ca-3f7a1c',
    titleId: 'cs-machinery-ca-title',
    descId: 'cs-machinery-ca-desc',
  },
  {
    id: 'health-nl',
    title: 'Health & Wellness Brand — Netherlands',
    category: 'Health & Beauty',
    challenge:
      'A Dutch wellness brand wanted to source private-label supplements and personal care products from China. They needed suppliers with GMP certification and proper documentation.',
    approach:
      'We identified GMP-certified manufacturers, reviewed product formulations, managed regulatory documentation, and coordinated sample testing before production.',
    result: [
      'GMP-certified supplier confirmed',
      'Full regulatory documentation provided',
      'Products passed EU import requirements',
      'Brand launched on schedule',
    ],
    imgId: 'cs-health-nl-5e8b3c',
    titleId: 'cs-health-nl-title',
    descId: 'cs-health-nl-desc',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="container-xl">
          <div className="max-w-2xl">
            <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Client Results</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Case Studies
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Real projects, real outcomes. Here's how we've helped global buyers source
              successfully from China across a range of industries.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="flex flex-col gap-12">
            {cases.map((c, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={c.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start bg-brand-light rounded-2xl overflow-hidden"
                >
                  {/* Image */}
                  <div className={`h-64 md:h-full min-h-64 bg-gray-200 ${!isEven ? 'lg:order-2' : ''}`}>
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={c.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={c.imgId}
                      data-strk-img={`[${c.descId}] [${c.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                    />
                  </div>

                  {/* Content */}
                  <div className={`p-8 ${!isEven ? 'lg:order-1' : ''}`}>
                    <span className="bg-blue-100 text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full">
                      {c.category}
                    </span>
                    <h2 id={c.titleId} className="text-xl font-bold text-brand-dark mt-3 mb-4">
                      {c.title}
                    </h2>

                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-1.5">Challenge</h4>
                      <p id={c.descId} className="text-brand-mid text-sm leading-relaxed">{c.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-1.5">Our Approach</h4>
                      <p className="text-brand-mid text-sm leading-relaxed">{c.approach}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-brand-mid uppercase tracking-wider mb-2">Results</h4>
                      <ul className="flex flex-col gap-1.5">
                        {c.result.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-brand-dark">
                            <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16">
        <div className="container-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Tell us what you need and we'll put together a tailored sourcing plan.
          </p>
          <Link to="/contact#quote" className="btn-primary inline-flex items-center gap-2">
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
