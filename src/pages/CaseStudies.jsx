import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 'case-1',
    title: 'Electronics Accessories for European Retailer',
    client: 'Mid-size electronics retailer, Germany',
    challenge: 'Needed to find a reliable supplier for custom USB-C hubs and docking stations with CE certification. Previous supplier had quality issues and missed delivery deadlines.',
    solution: 'We identified 5 potential factories in Shenzhen, conducted on-site audits of the top 3, and arranged sample production. After selecting the best match, we negotiated a 22% lower unit price and managed 3 production runs with pre-shipment inspections.',
    results: ['22% reduction in unit cost', 'CE certification maintained', 'Zero quality complaints from end customers', 'On-time delivery for all 3 orders'],
    titleId: 'cs-1-title',
    descId: 'cs-1-desc',
    imgId: 'cs-1-img-7a2b3c',
  },
  {
    id: 'case-2',
    title: 'Custom Office Furniture for US Importer',
    client: 'Office furniture distributor, United States',
    challenge: 'Required custom-designed standing desks and ergonomic chairs meeting BIFMA standards. Needed a factory capable of producing 2,000 units per month with consistent quality.',
    solution: 'We sourced from Foshan furniture manufacturing cluster, verified 4 factories, and selected one with BIFMA testing capability. We managed the entire production of the first 2,000-unit order with 3 quality inspections.',
    results: ['0% defect rate on final inspection', 'BIFMA compliance verified', 'Production completed 5 days ahead of schedule', 'Ongoing monthly orders established'],
    titleId: 'cs-2-title',
    descId: 'cs-2-desc',
    imgId: 'cs-2-img-4d5e6f',
  },
  {
    id: 'case-3',
    title: 'Apparel Line for Australian Fashion Brand',
    client: 'Emerging fashion brand, Australia',
    challenge: 'Launching a new activewear line with specific fabric requirements and sustainable packaging. Needed to coordinate production across 2 factories (garments + packaging) with tight launch deadline.',
    solution: 'We sourced both a garment factory in Guangzhou and a packaging supplier in Dongguan. Coordinated timelines between both, conducted fabric testing, and managed a 10,000-piece first order with container loading supervision.',
    results: ['On-time delivery for brand launch', 'Fabric quality matched approved samples', 'Sustainable packaging requirements met', 'Second order placed within 60 days'],
    titleId: 'cs-3-title',
    descId: 'cs-3-desc',
    imgId: 'cs-3-img-8g9h0i',
  },
  {
    id: 'case-4',
    title: 'Industrial Hardware for UK Distributor',
    client: 'Hardware wholesale distributor, United Kingdom',
    challenge: 'Sourcing custom stainless steel fasteners and brackets with specific tolerances. Previous supplier could not maintain dimensional accuracy across large batches.',
    solution: 'We identified CNC machining specialists in Ningbo, verified their quality management systems, and arranged trial production with dimensional inspection reports. Established ongoing QC protocol for monthly orders.',
    results: ['Dimensional accuracy within ±0.05mm', '15% cost savings vs. previous supplier', 'Monthly supply chain established', 'Consistent quality across 12 shipments'],
    titleId: 'cs-4-title',
    descId: 'cs-4-desc',
    imgId: 'cs-4-img-1j2k3l',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
              Case Studies
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Real Projects, Real Results
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how we've helped businesses across different industries source successfully from China.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((cs, idx) => (
              <div key={cs.id} className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full min-h-[300px] object-cover"
                    />
                  </div>
                  <div className={`p-8 lg:p-10 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h2 id={cs.titleId} className="text-xl font-bold text-slate-900 mb-2">{cs.title}</h2>
                    <p className="text-sm text-navy font-medium mb-4">{cs.client}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Challenge</h4>
                      <p id={cs.descId} className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">Our Solution</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Results</h4>
                      <ul className="space-y-1.5">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-center gap-2 text-sm text-slate-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Tell us about your sourcing needs and let's discuss how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-dark transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
