import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      duration: '1-3 days',
      desc: 'We discuss your product requirements, target specifications, volume expectations, quality standards, and timeline. This can be done via email, video call, or in-person meeting.',
      deliverables: ['Requirement summary document', 'Preliminary feasibility assessment', 'Proposed next steps'],
    },
    {
      number: '02',
      title: 'Supplier Identification',
      duration: '1-3 weeks',
      desc: 'We search our database and industry networks to identify manufacturers that match your criteria. We screen for legitimacy, capacity, and relevant experience.',
      deliverables: ['Shortlist of 3-5 suppliers', 'Initial capability profiles', 'Preliminary pricing indications'],
    },
    {
      number: '03',
      title: 'Factory Verification',
      duration: '1-2 weeks',
      desc: 'We conduct on-site visits to verify business registration, production capability, quality systems, and working conditions. We document findings with photos and reports.',
      deliverables: ['Factory audit report', 'Photo documentation', 'Risk assessment summary'],
    },
    {
      number: '04',
      title: 'Sample Development',
      duration: '2-6 weeks (varies)',
      desc: 'We coordinate sample production and review. We provide feedback on quality, specifications, and pricing. Multiple iterations may be required depending on product complexity.',
      deliverables: ['Sample evaluation report', 'Specification refinements', 'Updated pricing and lead times'],
    },
    {
      number: '05',
      title: 'Order Placement & Production',
      duration: 'Varies by product',
      desc: 'Once samples are approved, we assist with purchase order finalization. We establish production milestones and conduct regular progress checks with photo and video updates.',
      deliverables: ['Production schedule', 'Weekly progress reports', 'Issue escalation as needed'],
    },
    {
      number: '06',
      title: 'Quality Inspection',
      duration: '1-3 days per inspection',
      desc: 'We perform pre-shipment inspection according to agreed AQL standards. We document findings and provide recommendations. Additional inspections can be arranged during production.',
      deliverables: ['Inspection report with photos', 'Pass/fail determination', 'Corrective action recommendations'],
    },
    {
      number: '07',
      title: 'Shipping & Documentation',
      duration: '1-2 weeks',
      desc: 'We coordinate with freight forwarders for booking and documentation. We review commercial documents and assist with customs requirements as needed.',
      deliverables: ['Shipping documentation package', 'Tracking information', 'Delivery coordination'],
    },
    {
      number: '08',
      title: 'Delivery & Follow-up',
      duration: 'Ongoing',
      desc: 'We track shipment to destination and assist with any post-delivery issues. We document lessons learned for future orders with the same supplier.',
      deliverables: ['Delivery confirmation', 'Performance summary', 'Recommendations for next order'],
    },
  ];

  return (
    <div>
      <section className="bg-[#F8FAFC] py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">How It Works</h1>
            <p className="text-lg text-[#475569]">
              Our process is designed to reduce risk and increase transparency at each stage. 
              Not every project requires all steps. We adapt based on your needs and existing supplier relationships.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="mb-12 pb-12 border-b border-[#E2E8F0] last:border-0 last:mb-0 last:pb-0">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-32 flex-shrink-0">
                    <div className="text-3xl font-semibold text-[#0A2540] mb-1">{step.number}</div>
                    <div className="text-sm text-[#64748B]">{step.duration}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-[#475569] mb-4">{step.desc}</p>
                    <div>
                      <div className="text-sm font-medium text-[#0A2540] mb-2">Typical Deliverables:</div>
                      <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1 text-sm text-[#475569]">
                        {step.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#2563EB] mt-1">•</span> {item}
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

      <section className="section section-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">What We Do Not Do</h2>
            <div className="space-y-4 text-[#475569]">
              <p>We believe in clear boundaries. Here is what is outside our scope:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not take ownership of goods or act as an importer of record.</li>
                <li>We do not guarantee product quality or supplier performance.</li>
                <li>We do not provide legal, tax, or regulatory advice.</li>
                <li>We do not arrange financing or payment guarantees.</li>
                <li>We do not manufacture or sell products ourselves.</li>
              </ul>
              <p className="text-sm pt-4">
                Our role is to provide information, coordination, and verification services. 
                Final decisions and commercial relationships remain between you and your suppliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-3">Start a Conversation</h2>
              <p className="text-[#475569]">Tell us about your project. We will outline a proposed approach and timeline.</p>
            </div>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
