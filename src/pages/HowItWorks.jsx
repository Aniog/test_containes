import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, FileCheck, Users, Truck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import ProcessStep from '../components/ProcessStep';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'We schedule a call to understand your product, target market, quality expectations, volume requirements, and timeline.',
      details: [
        'Product specifications and target pricing',
        'Quality standards and certifications needed',
        'Annual volume and order frequency',
        'Current challenges or past issues',
      ],
    },
    {
      number: 2,
      title: 'Supplier Identification',
      description: 'We search our network and industry databases to identify manufacturers that match your requirements.',
      details: [
        'Capability and export experience screening',
        'Preliminary pricing and MOQ collection',
        'Geographic and specialization matching',
        'Initial risk assessment',
      ],
    },
    {
      number: 3,
      title: 'Supplier Shortlist & Verification',
      description: 'We present 3-5 qualified options with detailed profiles and conduct on-site verification of your top choices.',
      details: [
        'Written supplier comparison report',
        'Factory audit with photos and findings',
        'Sample request coordination',
        'Risk and capability assessment',
      ],
    },
    {
      number: 4,
      title: 'Sample Evaluation',
      description: 'We coordinate sample production, review samples against your specifications, and document findings.',
      details: [
        'Sample specification confirmation',
        'Sample photography and measurement',
        'Quality and specification review',
        'Approval or revision guidance',
      ],
    },
    {
      number: 5,
      title: 'Order Placement & Production',
      description: 'We support purchase order finalization and monitor production progress with regular updates.',
      details: [
        'PO review and confirmation',
        'Production schedule tracking',
        'In-process quality checks',
        'Issue identification and resolution',
      ],
    },
    {
      number: 6,
      title: 'Inspection & Shipping',
      description: 'We coordinate pre-shipment inspection and assist with logistics documentation and freight booking.',
      details: [
        'Pre-shipment inspection',
        'Export documentation support',
        'Freight coordination',
        'Delivery timeline tracking',
      ],
    },
  ];

  const deliverables = [
    { icon: FileCheck, title: 'Written Reports', desc: 'Supplier profiles, audit reports, inspection reports, and progress summaries delivered in consistent format.' },
    { icon: Clock, title: 'Timeline Visibility', desc: 'Clear production schedules with milestone tracking and early warning of potential delays.' },
    { icon: Users, title: 'Direct Communication', desc: 'Assigned project manager who speaks your language and understands your requirements.' },
    { icon: Truck, title: 'Documentation Support', desc: 'Assistance preparing commercial invoices, packing lists, certificates, and shipping documents.' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-slate-500 mb-3">OUR PROCESS</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">How We Work With Buyers</h1>
            <p className="text-lg text-slate-600">
              A structured, transparent process designed to reduce sourcing risk and improve outcomes at each stage.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <SectionHeading 
          eyebrow="STEP BY STEP" 
          title="The Sourcing Process" 
        />
        <div className="mt-8">
          {steps.map((step, idx) => (
            <ProcessStep key={idx} {...step} />
          ))}
        </div>
      </div>

      {/* What You Receive */}
      <div className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading 
            eyebrow="DELIVERABLES" 
            title="What You Receive" 
            description="Every engagement includes documented findings and regular communication."
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                <item.icon className="w-6 h-6 text-slate-700 mb-4" />
                <div className="font-semibold mb-2">{item.title}</div>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Expectations */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <SectionHeading 
          eyebrow="TIMELINES" 
          title="Typical Project Durations" 
        />
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left px-6 py-4 font-semibold">Phase</th>
                <th className="text-left px-6 py-4 font-semibold">Typical Duration</th>
                <th className="text-left px-6 py-4 font-semibold">What Happens</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {[
                ['Supplier Search & Shortlist', '1-2 weeks', 'Identify and screen 8-15 suppliers, present 3-5 options'],
                ['Factory Verification', '1-2 weeks', 'On-site audit of 1-3 factories, written report'],
                ['Sample Production & Review', '2-4 weeks', 'Sample manufacturing, review, and approval'],
                ['Production', '4-10 weeks', 'Order production with progress monitoring'],
                ['Inspection & Shipping', '1-3 weeks', 'Final QC, documentation, freight booking'],
              ].map((row, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 font-medium">{row[0]}</td>
                  <td className="px-6 py-4 text-slate-600">{row[1]}</td>
                  <td className="px-6 py-4 text-slate-600">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-4">Actual timelines vary based on product complexity, factory schedules, and order volume.</p>
      </div>

      {/* Communication */}
      <div className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading 
            eyebrow="COMMUNICATION" 
            title="How We Keep You Informed" 
          />
          <div className="space-y-4 text-sm text-slate-700">
            <p>We assign a dedicated project manager to each client. You receive:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Written reports at each major milestone (search, audit, inspection)</li>
              <li>Weekly progress updates during active production</li>
              <li>Immediate notification of any issues or delays</li>
              <li>Direct access via email and WeChat/WhatsApp</li>
              <li>Scheduled calls as needed for complex decisions</li>
            </ul>
            <p className="pt-2">All reports include photos, findings, and clear recommendations. We do not filter information.</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-white mb-3">Ready to begin?</h2>
          <p className="text-slate-400 mb-6">Start with a no-obligation consultation to discuss your sourcing needs.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;
