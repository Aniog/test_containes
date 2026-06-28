import React from 'react';
import { Link } from 'react-router-dom';
import InquiryForm from '../components/InquiryForm';

const CaseStudies = () => {
  const cases = [
    {
      title: 'Kitchen Appliance Manufacturer',
      location: 'Zhejiang Province',
      client: 'European kitchenware brand',
      challenge: 'The client was experiencing 8% defect rates on a new line of small kitchen appliances sourced through a trading company. Communication delays and inconsistent quality were affecting their brand reputation.',
      approach: 'We conducted a full supplier audit of the current factory and identified gaps in process control and incoming material inspection. We introduced a qualified alternative supplier with better quality systems and coordinated sample iterations to match the required specifications.',
      results: [
        'Defect rate reduced to under 1% within two production runs',
        'Lead time improved by 12 days through better production planning',
        'Direct factory relationship established, eliminating trading company margin',
      ],
      scope: 'Supplier audit, alternative sourcing, sample coordination, pre-shipment inspection',
      timeline: '14 weeks from initial contact to first improved shipment',
    },
    {
      title: 'Industrial Component Distributor',
      location: 'Jiangsu Province',
      client: 'North American industrial distributor',
      challenge: 'The client needed a reliable source for specialized mechanical components with tight tolerances. Previous suppliers had inconsistent quality and delivery performance, leading to customer complaints.',
      approach: 'We identified three factories with relevant machining capabilities. After on-site audits, we selected one with documented process controls. We established a quality plan with first-article inspection and ongoing sampling protocols.',
      results: [
        '12 consecutive orders delivered on schedule',
        'Dimensional conformance improved to 99.2% on first inspection',
        'Supplier expanded capacity specifically for this client',
      ],
      scope: 'Supplier identification, factory audit, quality plan development, production monitoring',
      timeline: 'Ongoing relationship, 18 months at time of writing',
    },
    {
      title: 'Private Label Home Goods Retailer',
      location: 'Guangdong Province',
      client: 'Growing US-based retailer',
      challenge: 'The retailer wanted to develop a private label line across multiple home goods categories but lacked sourcing infrastructure in China. They needed support from product development through delivery.',
      approach: 'We worked category by category, identifying appropriate factories for each product type. We established a standardized inspection protocol and documentation package. We coordinated with their freight forwarder for consolidated shipments.',
      results: [
        'Expanded from 3 to 14 SKUs over 18 months',
        'Consistent quality across categories from different factories',
        'Reduced per-unit sourcing cost through volume consolidation',
      ],
      scope: 'Multi-category sourcing, sample development, inspection program, logistics coordination',
      timeline: '18 months, ongoing',
    },
    {
      title: 'Automotive Aftermarket Parts',
      location: 'Shanghai / Zhejiang',
      client: 'European automotive parts wholesaler',
      challenge: 'The client needed to qualify new suppliers for brake components and filters. They required documented quality systems and traceability for their own customers.',
      approach: 'We conducted detailed audits focusing on process control, material traceability, and testing capability. We coordinated third-party testing for critical safety parameters and established batch documentation requirements.',
      results: [
        'Two suppliers qualified for ongoing supply',
        'Full traceability documentation implemented',
        'Client passed their own customer audit using our reports',
      ],
      scope: 'Factory audit, testing coordination, documentation system setup',
      timeline: '10 weeks for initial qualification, ongoing monitoring',
    },
    {
      title: 'Workwear and Safety Apparel',
      location: 'Shandong Province',
      client: 'Australian industrial safety company',
      challenge: 'The client required consistent supply of workwear meeting Australian safety standards. Previous orders had sizing inconsistencies and fabric quality issues.',
      approach: 'We audited the current supplier and identified root causes in cutting and fabric sourcing. We implemented size measurement protocols and fabric inspection at incoming stage. We also identified a backup supplier.',
      results: [
        'Sizing consistency improved to 98% within tolerance',
        'Fabric defect rate reduced by 60%',
        'Backup supplier qualified for risk mitigation',
      ],
      scope: 'Process audit, quality system improvements, backup supplier development',
      timeline: '6 months for improvement program',
    },
  ];

  return (
    <div>
      <section className="bg-[#F8FAFC] py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Case Studies</h1>
            <p className="text-lg text-[#475569]">
              These examples illustrate the types of projects we support. 
              Every sourcing situation is different. Results depend on product complexity, supplier capability, and client requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="space-y-12">
            {cases.map((c, index) => (
              <div key={index} className="card">
                <div className="mb-4">
                  <div className="text-sm text-[#64748B] mb-1">{c.location}</div>
                  <h2 className="text-2xl font-semibold">{c.title}</h2>
                  <p className="text-[#475569] mt-1">{c.client}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <h3 className="font-semibold text-sm mb-2 text-[#0A2540]">Challenge</h3>
                    <p className="text-sm text-[#475569]">{c.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-2 text-[#0A2540]">Approach</h3>
                    <p className="text-sm text-[#475569]">{c.approach}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-2 text-[#0A2540]">Results</h3>
                    <ul className="text-sm text-[#475569] space-y-1">
                      {c.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#059669] mt-1">•</span> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-2 text-[#0A2540]">Scope & Timeline</h3>
                    <p className="text-sm text-[#475569] mb-2">{c.scope}</p>
                    <p className="text-sm text-[#64748B]">{c.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-3">Discuss Your Project</h2>
              <p className="text-[#475569]">We can provide a similar level of support for your sourcing requirements.</p>
            </div>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
