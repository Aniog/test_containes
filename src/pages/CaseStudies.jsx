import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle2, TrendingUp, Clock, DollarSign } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';

const caseStudies = [
  {
    id: 'case-eu-furniture',
    title: 'Custom Office Furniture for European Retailer',
    client: 'Mid-size furniture retailer, Germany',
    challenge: 'The client needed to find a reliable manufacturer for custom office desks with specific European safety certifications (EN 527). Previous suppliers had quality inconsistencies and missed delivery deadlines.',
    solution: 'We audited 8 factories in Foshan, shortlisted 3, and managed sample development over 4 weeks. After approval, we monitored production of 2,000 units with 3 in-line inspections.',
    results: ['35% cost reduction vs. previous supplier', 'Zero defects at final inspection', 'On-time delivery within 45 days', 'EN 527 certification achieved'],
    metrics: { savings: '35%', units: '2,000', timeline: '45 days' },
    category: 'Furniture',
    titleId: 'case-eu-furniture-title',
    descId: 'case-eu-furniture-desc',
    imgId: 'case-eu-furniture-img-q1r2s3',
  },
  {
    id: 'case-us-electronics',
    title: 'Electronics Components for US Tech Startup',
    client: 'Hardware startup, California, USA',
    challenge: 'A startup needed custom PCB assemblies and enclosures for their IoT device. They had no China sourcing experience and needed a partner to manage the entire supply chain.',
    solution: 'We sourced PCB manufacturers in Shenzhen and injection mold makers in Dongguan. We managed DFM reviews, prototype iterations, and coordinated between 3 suppliers for the final assembly.',
    results: ['10,000 units delivered in 6 weeks', 'Passed FCC compliance testing', '3 prototype iterations managed', 'Ongoing production partnership established'],
    metrics: { savings: '28%', units: '10,000', timeline: '6 weeks' },
    category: 'Electronics',
    titleId: 'case-us-electronics-title',
    descId: 'case-us-electronics-desc',
    imgId: 'case-us-electronics-img-t4u5v6',
  },
  {
    id: 'case-au-textiles',
    title: 'Sustainable Textile Sourcing for Australian Brand',
    client: 'Eco-fashion brand, Melbourne, Australia',
    challenge: 'The brand required GOTS-certified organic cotton suppliers with transparent supply chains. They needed to verify sustainability claims and ensure ethical manufacturing practices.',
    solution: 'We identified 5 GOTS-certified mills in Jiangsu province, conducted social compliance audits, and verified organic certifications. We managed sampling of 12 fabric types and coordinated the first bulk order.',
    results: ['Passed all GOTS compliance audits', 'Verified ethical manufacturing', '12 fabric types sampled and approved', 'Long-term supplier relationship secured'],
    metrics: { savings: '22%', units: '5,000m', timeline: '8 weeks' },
    category: 'Textiles',
    titleId: 'case-au-textiles-title',
    descId: 'case-au-textiles-desc',
    imgId: 'case-au-textiles-img-w7x8y9',
  },
  {
    id: 'case-uk-packaging',
    title: 'Custom Packaging for UK E-commerce Brand',
    client: 'D2C skincare brand, London, UK',
    challenge: 'The brand needed premium custom packaging (boxes, bottles, pumps) that met EU cosmetics regulations. They required small initial MOQs with the ability to scale quickly.',
    solution: 'We sourced packaging suppliers in Guangzhou and Yiwu, negotiated reduced MOQs for the initial order, and managed artwork proofing across 15 SKUs. Quality inspections ensured print color accuracy.',
    results: ['15 SKUs launched on time', 'MOQ reduced from 10,000 to 3,000 units', 'EU cosmetics regulation compliance', 'Reorder lead time reduced to 3 weeks'],
    metrics: { savings: '40%', units: '15 SKUs', timeline: '5 weeks' },
    category: 'Packaging',
    titleId: 'case-uk-packaging-title',
    descId: 'case-uk-packaging-desc',
    imgId: 'case-uk-packaging-img-z1a2b3',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        title="Case Studies"
        subtitle="Real sourcing projects we have managed for global buyers. See how we deliver results."
        showCTA={false}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20">
            {caseStudies.map((study) => (
              <article key={study.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                <div className="grid lg:grid-cols-5">
                  <div className="lg:col-span-2 h-64 lg:h-auto bg-neutral-100">
                    <img
                      data-strk-img-id={study.imgId}
                      data-strk-img={`[${study.descId}] [${study.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8 lg:p-10">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">{study.category}</span>
                    <h2 id={study.titleId} className="text-xl md:text-2xl font-bold text-neutral-900 mt-2 mb-2">
                      {study.title}
                    </h2>
                    <p className="text-sm text-neutral-500 mb-4">{study.client}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-800 mb-1">Challenge</h4>
                        <p id={study.descId} className="text-sm text-neutral-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-800 mb-1">Our Solution</h4>
                        <p className="text-sm text-neutral-600">{study.solution}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-neutral-800 mb-2">Results</h4>
                      <ul className="space-y-1.5">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-neutral-700">
                            <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-neutral-200">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{study.metrics.savings}</div>
                        <div className="text-xs text-neutral-500">Cost Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{study.metrics.units}</div>
                        <div className="text-xs text-neutral-500">Units/Volume</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{study.metrics.timeline}</div>
                        <div className="text-xs text-neutral-500">Delivery Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want Similar Results?"
        subtitle="Tell us about your sourcing needs and we will create a tailored plan for your project."
      />
    </div>
  );
};

export default CaseStudies;
