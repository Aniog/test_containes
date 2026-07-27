import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, TrendingDown, Clock, CheckCircle, Shield } from 'lucide-react';

const caseStudies = [
  {
    id: 'case-1',
    title: 'US Electronics Retailer Reduces Component Costs by 30%',
    industry: 'Electronics',
    challenge: 'A mid-size US electronics company was paying premium prices to domestic distributors for PCB assemblies and needed to source directly from China but lacked local contacts and quality assurance capabilities.',
    solution: 'We identified 5 qualified PCB manufacturers, conducted factory audits, arranged samples, and negotiated pricing. After selecting the best supplier, we managed quality inspections for the first 3 orders.',
    results: ['30% cost reduction per unit', '99.2% quality pass rate', 'On-time delivery for all shipments', 'Long-term supplier relationship established'],
    resultIcon: TrendingDown,
    titleId: 'cs-1-title',
    descId: 'cs-1-desc',
    imgId: 'cs-1-img-l4m5n6',
  },
  {
    id: 'case-2',
    title: 'Australian Furniture Brand Launches 12-SKU Product Line',
    industry: 'Furniture',
    challenge: 'An Australian furniture startup needed to source a complete product line of 12 SKUs from China but had no experience with Chinese manufacturers and tight budget constraints.',
    solution: 'We sourced manufacturers across 3 furniture categories, managed the entire sampling process over 8 weeks, negotiated consolidated shipping, and supervised container loading.',
    results: ['12 SKUs launched on schedule', '15% under budget', 'Zero defects on first shipment', 'Repeat orders placed within 3 months'],
    resultIcon: Clock,
    titleId: 'cs-2-title',
    descId: 'cs-2-desc',
    imgId: 'cs-2-img-o7p8q9',
  },
  {
    id: 'case-3',
    title: 'UK Fashion Brand Scales Production from 500 to 5,000 Units',
    industry: 'Apparel',
    challenge: 'A growing UK fashion brand needed to scale from small-batch local production to larger volumes in China while maintaining their quality standards and brand identity.',
    solution: 'We found garment factories experienced with Western brands, managed tech pack communication, supervised sample development, and conducted pre-shipment inspections for each production run.',
    results: ['10x production volume increase', 'Consistent quality across batches', '40% cost savings vs. local production', '4-week lead time reduction'],
    resultIcon: CheckCircle,
    titleId: 'cs-3-title',
    descId: 'cs-3-desc',
    imgId: 'cs-3-img-r1s2t3',
  },
  {
    id: 'case-4',
    title: 'German Auto Parts Distributor Verifies New Supplier Network',
    industry: 'Automotive',
    challenge: 'A German automotive parts distributor needed to verify the legitimacy and quality systems of 8 potential Chinese suppliers before committing to large orders.',
    solution: 'We conducted comprehensive factory audits across 4 provinces, verified ISO certifications, assessed production capabilities, and provided detailed comparison reports.',
    results: ['8 factories audited in 2 weeks', '3 suppliers approved for orders', '2 fraudulent operations identified', 'Risk avoided on $200K+ in orders'],
    resultIcon: Shield,
    titleId: 'cs-4-title',
    descId: 'cs-4-desc',
    imgId: 'cs-4-img-u4v5w6',
  },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Case Studies
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real sourcing projects, real results. See how we've helped businesses worldwide source successfully from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs) => (
              <article key={cs.id} className="border border-brand-border rounded-xl overflow-hidden">
                <div className="h-64 md:h-80 overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1000"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-10">
                  <span className="text-xs font-medium text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
                    {cs.industry}
                  </span>
                  <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-brand-navy mt-4 mb-4">
                    {cs.title}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-brand-navy uppercase tracking-wider mb-2">Challenge</h4>
                      <p id={cs.descId} className="text-sm text-brand-muted leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-navy uppercase tracking-wider mb-2">Our Solution</h4>
                      <p className="text-sm text-brand-muted leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="bg-brand-light rounded-lg p-5">
                    <h4 className="text-sm font-semibold text-brand-navy uppercase tracking-wider mb-3">Results</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cs.results.map((result, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                          <span className="text-sm text-brand-dark">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-gray-300 mb-8">
            Every project starts with a conversation. Tell us what you need and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
