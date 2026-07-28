import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, Clock, Award, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    id: 'furniture-brand',
    title: 'European Furniture Brand Reduces Cost by 32%',
    client: 'Mid-sized furniture retailer, Germany',
    challenge: 'The client was sourcing wooden furniture through trading companies at inflated prices with inconsistent quality and frequent delays.',
    solution: 'We identified 3 solid wood furniture factories in Foshan, conducted full factory audits, coordinated samples, and negotiated directly with the top candidate. We implemented a DUPRO inspection protocol at 30% and 70% production completion.',
    results: [
      'Unit cost reduced by 32% compared to previous trading company',
      'Quality consistency improved — defect rate dropped from 8% to under 1%',
      'On-time delivery rate improved from 65% to 96%',
      'Client expanded product line from 12 to 35 SKUs within 12 months',
    ],
    imgId: 'cs-detail-furniture-h5i6j7',
    titleId: 'cs-pg-title-furniture',
    descId: 'cs-pg-desc-furniture',
  },
  {
    id: 'electronics-startup',
    title: 'US Startup Launches 3 Months Faster with Full QC Support',
    client: 'Consumer electronics startup, California, USA',
    challenge: 'A hardware startup needed custom PCB assemblies and injection-molded enclosures. They had no prior experience sourcing from China and needed end-to-end supplier management.',
    solution: 'We sourced 3 specialized suppliers across Shenzhen (PCB assembly) and Dongguan (plastic injection molding). We managed the entire sampling process across 5 iterations, coordinated between the two factories for fit compatibility, and conducted inline QC at both facilities.',
    results: [
      'Product launched 3 months ahead of original timeline',
      'First production run pass rate of 98.5%',
      'Total sourcing cost 18% under the startup\'s initial budget',
      'Established long-term supplier relationships for subsequent production runs',
    ],
    imgId: 'cs-detail-electronics-i6j7k8',
    titleId: 'cs-pg-title-electronics',
    descId: 'cs-pg-desc-electronics',
  },
  {
    id: 'packaging-distributor',
    title: 'UK Distributor Achieves Defect Rate Below 0.5%',
    client: 'Packaging distribution company, United Kingdom',
    challenge: 'The client sourced custom-branded packaging from multiple Chinese factories but struggled with color consistency, printing quality, and late deliveries.',
    solution: 'We audited and qualified 4 packaging factories in Zhejiang and Guangdong. We established detailed QC checklists with color calibration standards, implemented pre-production sample approval, and conducted 100% pre-shipment inspection for the first 3 orders.',
    results: [
      'Defect rate reduced from 12% to below 0.5%',
      'Color consistency improved to Delta E < 2 across all production batches',
      'Average lead time reduced by 15 days through better production planning',
      'Client consolidated from 7 unverified suppliers to 2 qualified partners',
    ],
    imgId: 'cs-detail-packaging-j7k8l9',
    titleId: 'cs-pg-title-packaging',
    descId: 'cs-pg-desc-packaging',
  },
  {
    id: 'sports-equipment',
    title: 'Australian Sports Brand Scales Production 3x',
    client: 'Fitness equipment brand, Melbourne, Australia',
    challenge: 'Rapid growth required scaling from small-batch production to container-volume orders while maintaining quality. The client\'s existing supplier couldn\'t keep up.',
    solution: 'We found and audited 5 fitness equipment factories in Shandong and Fujian provinces. We selected a top-tier manufacturer with ISO 9001 certification, negotiated volume-based pricing tiers, and set up a dedicated production line with weekly progress reporting.',
    results: [
      'Production capacity scaled from 500 to 1,500 units per month',
      'Per-unit cost decreased by 22% at higher volumes',
      'Zero quality returns across 12 consecutive container shipments',
      'Client became the factory\'s preferred partner with priority production scheduling',
    ],
    imgId: 'cs-detail-sports-k8l9m0',
    titleId: 'cs-pg-title-sports',
    descId: 'cs-pg-desc-sports',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy-950 text-white">
        <div className="section-container py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 id="cs-pg-title" className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Case Studies
            </h1>
            <p id="cs-pg-subtitle" className="mt-4 text-lg text-slate-300 max-w-xl leading-relaxed">
              Real sourcing projects with measurable results. See how we help businesses source better from China.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl">
          <div className="space-y-16">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="aspect-[21/9] overflow-hidden bg-slate-100">
                  <img
                    alt={cs.title}
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}] [cs-pg-subtitle] [cs-pg-title]`}
                    data-strk-img-ratio="21x9"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h2 id={cs.titleId} className="text-2xl font-bold text-navy-950 mb-2">{cs.title}</h2>
                  <p className="text-sm text-brand-600 font-medium mb-6">{cs.client}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Challenge</h4>
                      <p id={cs.descId} className="text-slate-700 leading-relaxed text-sm">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Our Solution</h4>
                      <p className="text-slate-700 leading-relaxed text-sm">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                    <h4 className="text-sm font-semibold text-green-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <TrendingDown className="w-4 h-4" />
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {cs.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                          <span className="text-green-600 mt-0.5">&#x2713;</span>
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

      <section className="section-padding bg-brand-600">
        <div className="section-container text-center">
          <div className="max-w-2xl mx-auto">
            <Award className="w-12 h-12 text-white/70 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Want to Be Our Next Success Story?
            </h2>
            <p className="mt-4 text-lg text-brand-100 leading-relaxed">
              Share your sourcing requirements and we'll create a plan tailored to your business.
            </p>
            <Link to="/contact" className="btn-white text-base px-8 py-3.5 gap-2 mt-8 inline-flex">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
