import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingDown, TrendingUp, Award } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const caseStudies = [
  {
    id: 'case-1',
    title: 'Electronics Brand Reduces Component Costs by 30%',
    client: 'Mid-size US electronics brand',
    challenge: 'The client was sourcing PCB assemblies from a trading company with high markups and inconsistent quality. They needed direct factory relationships to reduce costs and improve quality control.',
    solution: 'We identified 3 qualified PCB assembly factories in Shenzhen, conducted on-site audits, and negotiated direct pricing. We implemented in-line QC inspections and weekly production reports.',
    results: ['30% reduction in unit cost', 'Defect rate dropped from 5% to under 0.5%', 'Lead time reduced from 12 to 8 weeks', 'Established long-term direct factory relationship'],
    imgId: 'cs-page-1-a1b2c3',
    titleId: 'cs-page-title-1',
    descId: 'cs-page-desc-1',
  },
  {
    id: 'case-2',
    title: 'European Furniture Retailer Expands to 5 Product Lines',
    client: 'Growing furniture retailer in Germany',
    challenge: 'The client wanted to expand from 1 to 5 product lines but lacked the supplier network and quality control infrastructure in China. EU safety compliance was a key requirement.',
    solution: 'We sourced 5 specialized factories across different furniture categories, ensured all products met EU REACH and formaldehyde standards, and managed the full QC process from sampling to pre-shipment inspection.',
    results: ['Successfully launched 5 new product lines', 'All products passed EU safety certification', 'First-year revenue from new lines exceeded projections by 40%', 'Established reliable multi-supplier supply chain'],
    imgId: 'cs-page-2-a1b2c4',
    titleId: 'cs-page-title-2',
    descId: 'cs-page-desc-2',
  },
  {
    id: 'case-3',
    title: 'First-Time Importer Launches Kitchen Gadget with Zero Defects',
    client: 'Startup founder from Australia',
    challenge: 'The client had no prior China sourcing experience and needed to launch a silicone kitchen gadget. They were concerned about quality, intellectual property, and managing the process remotely.',
    solution: 'We guided the client through the entire process: supplier selection, mold development, material specification, IP protection (NDA with factory), and multi-stage QC. We handled all factory communication.',
    results: ['0% defect rate on first production run', 'Product launched on schedule within 10 weeks', 'IP protected through signed NDA and mold ownership', 'Client now sources 3 additional products through us'],
    imgId: 'cs-page-3-a1b2c5',
    titleId: 'cs-page-title-3',
    descId: 'cs-page-desc-3',
  },
  {
    id: 'case-4',
    title: 'UK Brand Achieves 99.5% On-Time Delivery Rate',
    client: 'Established UK home goods brand',
    challenge: 'The client was experiencing frequent production delays and missed shipping deadlines with their existing supplier, causing stockouts and lost revenue during peak seasons.',
    solution: 'We audited their supply chain, identified the bottlenecks (inconsistent raw material supply and poor production planning), and implemented a structured production follow-up system with weekly milestone tracking.',
    results: ['On-time delivery rate improved from 70% to 99.5%', 'Production lead time reduced by 25%', 'Zero stockouts during peak season', 'Improved supplier relationship and communication'],
    imgId: 'cs-page-4-a1b2c6',
    titleId: 'cs-page-title-4',
    descId: 'cs-page-desc-4',
  },
  {
    id: 'case-5',
    title: 'US Distributor Cuts Logistics Costs by 20%',
    client: 'US-based wholesale distributor',
    challenge: 'The client was importing from multiple Chinese suppliers with fragmented logistics, resulting in high shipping costs, frequent customs delays, and poor shipment visibility.',
    solution: 'We consolidated their shipments from 5 factories into consolidated containers, negotiated better freight rates, streamlined export documentation, and provided real-time shipment tracking.',
    results: ['20% reduction in total logistics costs', 'Customs clearance time reduced from 7 to 2 days', 'Full shipment visibility with real-time tracking', 'Simplified receiving process at destination warehouse'],
    imgId: 'cs-page-5-a1b2c7',
    titleId: 'cs-page-title-5',
    descId: 'cs-page-desc-5',
  },
  {
    id: 'case-6',
    title: 'Scandinavian Design Brand Maintains Premium Quality Standards',
    client: 'Premium Scandinavian home accessories brand',
    challenge: 'The client required extremely high quality standards and precise finishing for their premium brand positioning. Previous suppliers failed to consistently meet their aesthetic and quality requirements.',
    solution: 'We identified factories with experience in premium European brands, implemented detailed QC checklists with photographic standards, and conducted both in-line and pre-shipment inspections with strict AQL 1.0 criteria.',
    results: ['Quality acceptance rate of 99.2%', 'Consistent premium finishing across all batches', 'Long-term supplier relationship established', 'Brand reputation maintained and strengthened'],
    imgId: 'cs-page-6-a1b2c8',
    titleId: 'cs-page-title-6',
    descId: 'cs-page-desc-6',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 id="cs-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Case Studies
            </h1>
            <p id="cs-page-subtitle" className="mt-4 text-lg text-slate-600">
              Real results from real clients. See how we have helped businesses across industries source successfully from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, index) => (
              <div key={cs.id} className="grid md:grid-cols-2 gap-10 items-start">
                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                  <div
                    data-strk-bg-id={cs.imgId}
                    data-strk-bg={`[${cs.descId}] [${cs.titleId}] [cs-page-subtitle] [cs-page-title]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="700"
                  >
                    <div className="aspect-[16/9] rounded-xl bg-slate-200 overflow-hidden" />
                  </div>
                </div>
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h2 id={cs.titleId} className="text-xl font-bold text-slate-900 leading-snug">{cs.title}</h2>
                  <p className="mt-2 text-sm text-brand-navy font-medium">{cs.client}</p>
                  <div className="mt-4 space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700">Challenge</h4>
                      <p id={cs.descId} className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700">Our Solution</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700">Results</h4>
                      <ul className="mt-1.5 space-y-1.5">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-slate-600">
                            <Award className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
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

      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Your Success Story Starts Here
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Tell us about your sourcing needs and we will create a tailored plan for your business.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold text-white bg-brand-orange hover:bg-brand-orange-dark transition-colors shadow-lg shadow-brand-orange/25"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}