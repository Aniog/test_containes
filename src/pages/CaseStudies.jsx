import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Retail Chain',
      location: 'Germany',
      category: 'Home & Kitchen',
      product: 'Small Kitchen Appliances',
      challenge: 'The client was experiencing high defect rates (4.2%) from their existing supplier and needed to reduce unit cost while improving quality for a 15,000-unit seasonal order.',
      approach: 'We conducted a fresh supplier search focused on manufacturers with documented quality systems. Three suppliers were shortlisted and audited. We coordinated sample production and selected a supplier with in-house testing capability.',
      results: [
        'Unit cost reduced by 18% compared to previous supplier',
        'Defect rate dropped to 0.7% on pre-shipment inspection',
        'On-time delivery achieved for peak season launch',
        'Supplier approved for ongoing annual orders',
      ],
      timeline: '14 weeks from inquiry to delivery',
    },
    {
      client: 'North American Distributor',
      location: 'United States',
      category: 'Automotive',
      product: 'Aftermarket Brake Components',
      challenge: 'The client needed to expand their supplier base to support 40% projected volume growth. Existing suppliers were at capacity and quality consistency was inconsistent across batches.',
      approach: 'We identified and verified five potential suppliers specializing in brake components. Detailed capability audits were performed. Two suppliers were approved after sample validation and first production run monitoring.',
      results: [
        'Three qualified suppliers established (two primary, one backup)',
        'Volume capacity increased by 45% within 12 months',
        'Quality consistency improved; zero recalls in first year',
        'Lead time reduced from 65 to 48 days on average',
      ],
      timeline: '18 weeks for initial supplier qualification',
    },
    {
      client: 'Australian E-commerce Brand',
      location: 'Australia',
      category: 'Electronics',
      product: 'Mobile Device Accessories',
      challenge: 'Long and unpredictable lead times were affecting inventory planning. The client needed to reduce average lead time while maintaining product quality for a growing catalog of 25 SKUs.',
      approach: 'We reviewed the existing supplier base and identified bottlenecks in production scheduling and quality approval. We introduced production milestone tracking and pre-shipment inspection protocols.',
      results: [
        'Average lead time reduced from 75 to 52 days',
        'On-time shipment rate improved from 68% to 94%',
        'Quality issues identified and resolved before shipment',
        'Process improvements applied to all 25 SKUs',
      ],
      timeline: 'Ongoing engagement; improvements realized over 9 months',
    },
    {
      client: 'UK Hardware Importer',
      location: 'United Kingdom',
      category: 'Hardware & Tools',
      product: 'Hand Tools and Fasteners',
      challenge: 'The client was sourcing from multiple factories with no centralized quality oversight. Inconsistent product quality and packaging issues were leading to customer complaints and returns.',
      approach: 'We consolidated sourcing to two verified suppliers with documented quality processes. We implemented standardized inspection criteria and packaging specifications across all products.',
      results: [
        'Return rate reduced from 3.8% to 0.9%',
        'Supplier count reduced from 7 to 2, simplifying management',
        'Packaging consistency achieved across product range',
        'Annual cost savings of approximately 12% through volume consolidation',
      ],
      timeline: '16 weeks for transition and first consolidated shipment',
    },
    {
      client: 'Scandinavian Furniture Brand',
      location: 'Sweden',
      category: 'Home & Kitchen',
      product: 'Wooden Furniture Components',
      challenge: 'The client required a new supplier for sustainably sourced wooden components. They needed documentation of material origin and compliance with EU timber regulations.',
      approach: 'We searched for manufacturers with FSC or PEFC certification and experience exporting to Europe. We verified chain-of-custody documentation and conducted a social compliance audit.',
      results: [
        'Two FSC-certified suppliers qualified',
        'Full compliance documentation package delivered',
        'First production run passed EU border inspection without issue',
        'Supplier relationship established for seasonal collections',
      ],
      timeline: '12 weeks from inquiry to approved samples',
    },
  ];

  return (
    <div>
      <section className="bg-[#0F172A] text-white py-14">
        <div className="container">
          <h1 className="text-white text-3xl md:text-4xl font-semibold mb-4">Case Studies</h1>
          <p className="text-[#94A3B8] max-w-2xl">
            Examples of sourcing projects we have completed for clients across different industries and regions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="space-y-8">
            {cases.map((study, idx) => (
              <div key={idx} className="case-card card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#64748B] mb-1">{study.category} • {study.location}</div>
                    <h2 className="font-semibold text-xl">{study.client}</h2>
                    <p className="text-[#475569]">{study.product}</p>
                  </div>
                  <div className="text-sm text-[#64748B] md:text-right">
                    {study.timeline}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h3 className="font-medium text-[#0F172A] mb-2">Challenge</h3>
                    <p className="text-[#475569] leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#0F172A] mb-2">Approach</h3>
                    <p className="text-[#475569] leading-relaxed">{study.approach}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-[#0F172A] mb-2">Results</h3>
                    <ul className="space-y-1.5 text-[#475569]">
                      {study.results.map((result, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <span className="text-[#0EA5E9] mt-1">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[#475569] mb-4">Every sourcing project is different. Let us understand your specific requirements.</p>
            <Link to="/contact" className="btn-primary">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
