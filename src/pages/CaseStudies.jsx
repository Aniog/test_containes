import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../components/ui/CTAButton';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      client: 'European Home Retailer',
      location: 'Germany',
      category: 'Home Textiles',
      challenge: 'High defect rates from existing supplier were causing returns and damaging brand reputation. Previous attempts to improve quality through remote communication had limited success.',
      approach: 'We conducted a full factory audit of the current supplier and identified gaps in their quality control process. We implemented a structured inspection protocol with defined acceptance criteria and trained the supplier on the new requirements.',
      results: [
        'Defect rate reduced from 8.2% to 0.8% within 4 months',
        'Return rate dropped 65% year-over-year',
        'Established ongoing inspection program for 42 SKUs',
      ],
      timeline: '6 months from initial engagement to stable quality',
    },
    {
      id: 2,
      client: 'Industrial Equipment Distributor',
      location: 'United States',
      category: 'Industrial Components',
      challenge: 'Needed to identify qualified suppliers for a new product line within a compressed timeline. No existing supplier relationships in the category.',
      approach: 'We searched suppliers across three provinces, conducted on-site verification of six candidates, and coordinated sample production from three finalists. We provided detailed comparison reports on capability, pricing, and lead times.',
      results: [
        'Three qualified suppliers identified in 5 weeks',
        'Sample approval completed in 8 weeks total',
        'Negotiated 12% cost reduction through volume commitment',
      ],
      timeline: '10 weeks from inquiry to first production order',
    },
    {
      id: 3,
      client: 'Consumer Electronics Importer',
      location: 'Australia',
      category: 'Consumer Electronics',
      challenge: 'Production delays and inconsistent communication with existing supplier were causing missed seasonal deadlines. Needed better visibility and accountability.',
      approach: 'We established weekly production monitoring with photo documentation and milestone tracking. We conducted mid-production inspections and worked with the supplier to resolve bottlenecks as they occurred.',
      results: [
        'Lead time reduced by 3 weeks through process improvements',
        'On-time delivery improved from 60% to 95%',
        'Client received weekly updates with actionable information',
      ],
      timeline: 'Ongoing retainer relationship, 18 months',
    },
    {
      id: 4,
      client: 'Automotive Aftermarket Supplier',
      location: 'Canada',
      category: 'Automotive Parts',
      challenge: 'Needed to verify a potential supplier for a high-volume component before committing to a significant order. Previous experience with unverified suppliers had been costly.',
      approach: 'We performed a comprehensive factory audit including production capacity assessment, quality system review, and reference checks. We also coordinated sample production and third-party testing.',
      results: [
        'Supplier verified as legitimate with adequate capacity',
        'Quality system gaps identified and addressed before production',
        'Client proceeded with confidence on a 50,000-unit order',
      ],
      timeline: '4 weeks from audit request to final report',
    },
    {
      id: 5,
      client: 'Specialty Retail Chain',
      location: 'United Kingdom',
      category: 'Consumer Goods',
      challenge: 'Expanding product range required sourcing multiple new categories simultaneously. Limited internal resources to manage supplier search and qualification.',
      approach: 'We managed parallel sourcing projects across four product categories. Each project followed our standard process with dedicated supplier search, verification, and sampling phases.',
      results: [
        '12 new suppliers qualified across 4 categories',
        'First orders placed within 12 weeks of project start',
        'Consistent documentation and process across all categories',
      ],
      timeline: '14 weeks for complete sourcing program',
    },
    {
      id: 6,
      client: 'Medical Supply Distributor',
      location: 'Netherlands',
      category: 'Medical Supplies',
      challenge: 'Needed to identify suppliers for PPE and related products during a period of high global demand. Quality and certification verification was critical.',
      approach: 'We prioritized suppliers with relevant certifications and conducted expedited verification. We reviewed documentation thoroughly and coordinated third-party testing where required.',
      results: [
        'Two certified suppliers identified and verified',
        'Documentation reviewed for regulatory compliance',
        'First shipment delivered within 7 weeks',
      ],
      timeline: '7 weeks from inquiry to delivery (expedited)',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#F9FAFB] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold text-[#0A2540] mb-4">Case Studies</h1>
            <p className="text-lg text-[#4B5563] mb-6">
              Examples of sourcing projects completed for international buyers. Each case reflects the specific challenges and outcomes of that engagement.
            </p>
            <CTAButton />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 md:p-8">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-[#EFF6FF] text-[#1E40AF] rounded">
                    {study.category}
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-[#4B5563] rounded">
                    {study.location}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-[#0A2540] mb-1">{study.client}</h3>
                <p className="text-sm text-[#6B7280] mb-6">{study.timeline}</p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-[#0A2540] mb-2 uppercase tracking-wider">Challenge</h4>
                    <p className="text-sm text-[#4B5563]">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0A2540] mb-2 uppercase tracking-wider">Approach</h4>
                    <p className="text-sm text-[#4B5563]">{study.approach}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#0A2540] mb-2 uppercase tracking-wider">Results</h4>
                    <ul className="space-y-1.5">
                      {study.results.map((result, i) => (
                        <li key={i} className="text-sm text-[#4B5563] flex items-start gap-2">
                          <span className="text-[#059669] mt-1">•</span>
                          {result}
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

      {/* Note */}
      <section className="py-12 bg-[#F9FAFB]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-[#4B5563]">
            These case studies represent actual projects with identifying details modified to protect client confidentiality. Results vary based on product category, supplier capabilities, and project scope.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A2540] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Discuss your sourcing requirements</h2>
          <p className="text-gray-300 mb-6">We can provide a preliminary assessment based on your specific situation.</p>
          <CTAButton />
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
