import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';

const CaseStudies = () => {
  const cases = [
    {
      client: 'Mid-Size Home Goods Retailer',
      location: 'United States',
      industry: 'Retail',
      product: 'Kitchenware Collection (Cookware, Utensils, Storage)',
      challenge: 'Previous supplier delivered inconsistent quality. Defect rate averaged 8% on arrival, leading to returns and customer complaints. No visibility into production issues until goods arrived.',
      approach: 'Conducted factory audit of current supplier and identified root causes. Implemented pre-shipment inspection protocol with AQL sampling. Added during-production check for first two production runs.',
      results: [
        'Defect rate reduced from 8% to under 1% within 3 orders',
        'Zero container rejections in 18 months',
        'Established documented quality standard accepted by factory',
      ],
      quote: 'We finally have visibility and accountability. The inspection reports give us leverage and the factory knows we will catch issues before shipment.',
      quoteAttribution: 'VP of Sourcing',
      duration: 'Ongoing retainer, 18+ months',
    },
    {
      client: 'E-commerce Brand',
      location: 'Germany',
      industry: 'Direct-to-Consumer',
      product: 'Wireless Earbuds and Charging Accessories',
      challenge: 'Needed to qualify 2-3 new suppliers for product line expansion. Had received samples from several factories but lacked confidence in their production capability and export compliance.',
      approach: 'Ran a structured supplier search across 3 product categories. Audited 4 shortlisted factories. Coordinated sample production and compliance documentation review. Presented comparison with risk assessment.',
      results: [
        '3 suppliers qualified and approved within 6 weeks',
        'Identified one factory with overstated capacity before order placement',
        'Documentation package prepared for CE and WEEE compliance',
      ],
      quote: 'The audit reports saved us from committing to a supplier that could not actually deliver at our volume. We moved forward with confidence.',
      quoteAttribution: 'Head of Product',
      duration: 'Project-based, 8 weeks',
    },
    {
      client: 'Wholesale Distributor',
      location: 'Australia',
      industry: 'Wholesale / Import',
      product: 'Outdoor Furniture (Aluminum and Wicker Collections)',
      challenge: 'Managing 4 separate suppliers for different product lines. Each order shipped individually, resulting in high freight costs and complex coordination. Quality issues varied by supplier.',
      approach: 'Audited all 4 factories. Consolidated orders where possible and negotiated combined shipping. Implemented standardized inspection protocol across suppliers. Coordinated consolidated container bookings.',
      results: [
        '22% reduction in logistics cost through consolidation',
        'Single point of coordination for all 4 factories',
        'Consistent quality standard applied across product lines',
      ],
      quote: 'We went from managing 4 relationships to one point of contact. The consolidated shipping alone paid for the service.',
      quoteAttribution: 'Import Manager',
      duration: 'Retainer, 12 months',
    },
    {
      client: 'Specialty Retail Chain',
      location: 'Canada',
      industry: 'Retail',
      product: 'Private Label Beauty Tools and Accessories',
      challenge: 'Launching a new private label line. Needed a supplier capable of custom packaging, consistent quality, and documentation for Canadian market requirements. No prior sourcing experience in China.',
      approach: 'Conducted category-specific supplier search. Verified 2 factories with relevant export experience. Coordinated packaging development and sample iterations. Managed first production order with full inspection.',
      results: [
        'Supplier qualified and first order delivered on schedule',
        'Packaging and labeling met Canadian retail requirements',
        'Established process for seasonal reorder cycles',
      ],
      quote: 'As a first-time importer, having a partner who handled the details gave us the confidence to move forward with the launch.',
      quoteAttribution: 'Merchandising Director',
      duration: 'Project + retainer transition',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-slate-500 mb-3">CASE STUDIES</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Client Outcomes</h1>
            <p className="text-lg text-slate-600">
              Real examples of sourcing and quality management projects. Client names withheld for confidentiality.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {cases.map((cs, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm mb-6">
                <div><span className="text-slate-500">Client:</span> <span className="font-medium">{cs.client}</span></div>
                <div><span className="text-slate-500">Location:</span> {cs.location}</div>
                <div><span className="text-slate-500">Industry:</span> {cs.industry}</div>
                <div><span className="text-slate-500">Duration:</span> {cs.duration}</div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">{cs.product}</h3>

              <div className="grid md:grid-cols-3 gap-8 text-sm">
                <div>
                  <div className="uppercase tracking-widest text-xs font-semibold text-slate-500 mb-2">CHALLENGE</div>
                  <p className="text-slate-700 leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <div className="uppercase tracking-widest text-xs font-semibold text-slate-500 mb-2">APPROACH</div>
                  <p className="text-slate-700 leading-relaxed">{cs.approach}</p>
                </div>
                <div>
                  <div className="uppercase tracking-widest text-xs font-semibold text-slate-500 mb-2">RESULTS</div>
                  <ul className="space-y-1.5 text-slate-700">
                    {cs.results.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">•</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 text-sm italic text-slate-600">
                "{cs.quote}"
                <div className="not-italic text-slate-500 mt-2">— {cs.quoteAttribution}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border-y border-slate-200 py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-3">Have a similar challenge?</h2>
          <p className="text-slate-600 mb-6">We can discuss your specific situation and whether our approach would be a fit.</p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800">Start a Conversation</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CaseStudies;
