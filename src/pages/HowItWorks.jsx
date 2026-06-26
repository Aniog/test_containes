import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, Clock, FileText } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      duration: '1-3 days',
      description: 'We discuss your product requirements, target specifications, quality expectations, volume needs, and timeline. This can be done via email, video call, or in-person.',
      deliverables: [
        'Requirement summary document',
        'Preliminary feasibility assessment',
        'Proposed scope of work',
      ],
    },
    {
      number: '02',
      title: 'Supplier Identification',
      duration: '2-4 weeks',
      description: 'We search our network and databases to identify manufacturers that match your criteria. We screen for legitimacy, capacity, and relevant experience.',
      deliverables: [
        'Shortlist of 3-6 potential suppliers',
        'Comparison table with key factors',
        'Initial contact and capability confirmation',
      ],
    },
    {
      number: '03',
      title: 'Verification & Sampling',
      duration: '3-6 weeks',
      description: 'We conduct on-site verification of shortlisted factories. We coordinate sample production and shipping for your evaluation and approval.',
      deliverables: [
        'Factory audit report with photos',
        'Sample products for review',
        'Updated pricing and lead time information',
      ],
    },
    {
      number: '04',
      title: 'Order Placement & Production',
      duration: 'Varies by product',
      description: 'Once you approve a supplier and place an order, we monitor production progress, provide milestone updates, and address issues as they arise.',
      deliverables: [
        'Production schedule',
        'Regular progress reports',
        'Issue alerts and resolution support',
      ],
    },
    {
      number: '05',
      title: 'Quality Inspection',
      duration: '1-2 weeks',
      description: 'Before shipment, we conduct inspection according to your specifications. We document findings and support resolution of any issues identified.',
      deliverables: [
        'Inspection report with photos',
        'Pass/fail recommendation',
        'Corrective action documentation if needed',
      ],
    },
    {
      number: '06',
      title: 'Shipping & Documentation',
      duration: 'Varies by destination',
      description: 'We coordinate with the supplier on packaging, labeling, and documentation. We assist with freight booking and provide guidance on customs requirements.',
      deliverables: [
        'Export documentation checklist',
        'Freight booking coordination',
        'Shipment tracking information',
      ],
    },
  ];

  const whatYouProvide = [
    'Product specifications and requirements',
    'Quality standards and acceptance criteria',
    'Target price range and volume expectations',
    'Timeline requirements',
    'Destination port or delivery address',
    'Any regulatory or compliance requirements',
  ];

  const whatWeProvide = [
    'Supplier identification and screening',
    'Factory verification and reporting',
    'Sample coordination and review support',
    'Production monitoring and updates',
    'Quality inspection services',
    'Logistics coordination support',
    'Documentation review and guidance',
  ];

  const considerations = [
    {
      icon: Clock,
      title: 'Timelines Vary',
      text: 'Sourcing timelines depend on product complexity, supplier availability, and sample lead times. We provide realistic estimates based on your specific situation.',
    },
    {
      icon: AlertCircle,
      title: 'No Guarantees',
      text: 'We provide information and verification to reduce risk. We cannot guarantee supplier performance, product quality, or delivery dates. Final decisions are yours.',
    },
    {
      icon: FileText,
      title: 'Clear Scope',
      text: 'Each engagement has a defined scope. Additional services outside the agreed scope are quoted separately. We communicate proactively about any changes.',
    },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">How It Works</h1>
            <p className="text-lg text-slate-300">
              A structured process designed to reduce risk and keep you informed. 
              Each step builds on the previous one, with clear deliverables at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="mb-10">
            <h2 className="section-title">The Sourcing Process</h2>
            <p className="section-subtitle">
              From initial inquiry to delivery, here is what to expect when working with us.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="grid md:grid-cols-12 gap-6 pb-8 border-b border-slate-200 last:border-0 last:pb-0">
                <div className="md:col-span-3">
                  <div className="text-4xl font-bold text-slate-200 mb-2">{step.number}</div>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <div className="text-sm text-slate-500">{step.duration}</div>
                </div>
                <div className="md:col-span-5">
                  <p className="text-slate-600 mb-4">{step.description}</p>
                </div>
                <div className="md:col-span-4">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Deliverables</div>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-700 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="section-title mb-4">What You Provide</h2>
              <p className="text-slate-600 mb-4">
                Clear information from you enables us to work efficiently and present relevant options.
              </p>
              <ul className="space-y-2">
                {whatYouProvide.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-700 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-title mb-4">What We Provide</h2>
              <p className="text-slate-600 mb-4">
                Our role is to gather information, verify facts, and coordinate activities on your behalf.
              </p>
              <ul className="space-y-2">
                {whatWeProvide.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-700 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title mb-8">Important Considerations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {considerations.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="card">
                  <Icon className="w-8 h-8 text-slate-700 mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl font-bold mb-3 text-white">Ready to Begin?</h2>
            <p className="text-slate-300">Start with a consultation. We will assess your needs and outline next steps.</p>
          </div>
          <div className="max-w-xl mx-auto bg-white rounded-lg p-6 md:p-8">
            <InquiryForm compact title="Start a Sourcing Project" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
