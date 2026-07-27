import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Requirements',
      description: 'Complete our inquiry form or schedule a call. We ask for product specifications, target pricing, quality standards, certifications, packaging requirements, and estimated volumes.',
      details: ['Product description and specifications', 'Target price range and annual volume', 'Required certifications and testing', 'Packaging and labeling requirements', 'Destination port or delivery terms'],
    },
    {
      number: '02',
      title: 'Supplier Research & Shortlisting',
      description: 'We search our database and conduct targeted outreach to identify manufacturers that match your criteria. We evaluate capabilities, export experience, and current capacity.',
      details: ['Database and trade platform research', 'Direct factory outreach and screening', 'Initial capability questionnaire', 'Preliminary pricing and lead time', 'Shortlist of 3–5 qualified suppliers'],
    },
    {
      number: '03',
      title: 'Factory Verification',
      description: 'We conduct on-site or remote audits to verify legitimacy, production capacity, quality systems, and compliance. You receive a detailed report with photos and findings.',
      details: ['Business license and export rights check', 'Production floor and equipment review', 'Quality system and process audit', 'Workforce and social compliance', 'Written audit report with evidence'],
    },
    {
      number: '04',
      title: 'Sampling & Approval',
      description: 'We coordinate sample production and delivery. You review and approve samples before authorizing mass production. We document all feedback and revisions.',
      details: ['Sample order placement and tracking', 'Sample inspection and photos', 'Feedback collection and communication', 'Revision coordination if needed', 'Final sample approval sign-off'],
    },
    {
      number: '05',
      title: 'Production Monitoring',
      description: 'Once production begins, we track progress against the agreed schedule. We conduct in-process inspections and escalate issues immediately if timelines or quality are at risk.',
      details: ['Production schedule confirmation', 'Weekly progress reporting', 'During-production inspection (DUPRO)', 'Issue identification and escalation', 'Corrective action verification'],
    },
    {
      number: '06',
      title: 'Final Inspection & Shipping',
      description: 'Before shipment, we perform a pre-shipment inspection. We verify documentation, supervise container loading when required, and coordinate with your freight forwarder.',
      details: ['Pre-shipment inspection (PSI)', 'Document review and verification', 'Container loading supervision', 'Photo documentation of shipment', 'Handover to logistics partner'],
    },
  ];

  const deliverables = [
    'Written project scope before work begins',
    'Supplier shortlist with capability summaries',
    'Factory audit reports with photos',
    'Sample inspection reports',
    'Production status updates',
    'Final inspection reports with measurements',
    'Export document checklist',
    'Post-shipment summary',
  ];

  return (
    <div>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-16">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-sky-600 mb-2">Process</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">How we work</h1>
            <p className="text-lg text-slate-600">A structured, documented process designed to reduce risk and improve outcomes at each stage of sourcing from China.</p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-14 md:py-16">
        <SectionHeader title="Step-by-step sourcing process" />
        <div className="space-y-2">
          {steps.map((step, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl p-6 md:p-7 bg-white">
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-slate-900 mb-1.5">{step.title}</h3>
                  <p className="text-slate-600 mb-3">{step.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 text-sm text-slate-600">
                    {step.details.map((d, i) => (
                      <li key={i}>• {d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight mb-3">What you receive</h2>
              <p className="text-slate-300 mb-4">Every engagement includes written deliverables so you have a clear record of findings and decisions.</p>
              <ul className="text-sm text-slate-300 space-y-1.5">
                {deliverables.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-sm">
              <div className="font-medium mb-3">Communication standards</div>
              <ul className="space-y-2 text-slate-300">
                <li>• All reports in English with photos and data</li>
                <li>• Response to emails within 1 business day</li>
                <li>• Weekly status updates during production</li>
                <li>• Immediate escalation for quality or timeline issues</li>
                <li>• Direct access to your dedicated sourcing contact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-14 md:py-16 text-center">
        <h2 className="text-2xl font-semibold tracking-tight mb-3">Ready to start?</h2>
        <p className="text-slate-600 mb-6">Submit your requirements and we will provide a preliminary assessment and proposed scope at no cost.</p>
        <Link to="/contact" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium bg-slate-900 text-white rounded-md hover:bg-slate-800">Get a Free Sourcing Quote</Link>
      </section>
    </div>
  );
};

export default HowItWorks;
