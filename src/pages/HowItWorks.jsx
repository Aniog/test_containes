import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, FileText, Search, ShieldCheck, ClipboardCheck, Factory, Truck } from 'lucide-react';

const phases = [
  {
    num: '01',
    icon: FileText,
    title: 'Submit Your Inquiry',
    duration: 'Day 1',
    desc: 'Fill out our sourcing inquiry form with your product details, target price, quantity, and destination country. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and description',
      'Target unit price (FOB or CIF)',
      'Order quantity (initial and annual)',
      'Required certifications or standards',
      'Destination country and Incoterms',
    ],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research',
    duration: 'Days 2–7',
    desc: 'Our sourcing team searches our verified supplier database and conducts fresh market research to identify manufacturers that match your requirements. We typically present 3–5 qualified options.',
    details: [
      'Database and market research',
      'Initial supplier screening calls',
      'Capability and capacity verification',
      'Preliminary pricing collection',
      'Shortlist report delivered to you',
    ],
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Factory Audit',
    duration: 'Days 8–14',
    desc: 'For shortlisted suppliers, we conduct on-site factory audits to verify their business credentials, production capabilities, quality systems, and compliance. You receive a detailed audit report.',
    details: [
      'Business license and registration check',
      'Production floor walkthrough',
      'Equipment and capacity assessment',
      'Quality management system review',
      'Photo and video documentation',
    ],
  },
  {
    num: '04',
    icon: ClipboardCheck,
    title: 'Sample & Negotiation',
    duration: 'Days 15–28',
    desc: 'We arrange product samples from your preferred supplier and negotiate pricing, payment terms, lead times, and packaging on your behalf. We only proceed once you approve the sample.',
    details: [
      'Sample request and coordination',
      'Sample quality review',
      'Price and MOQ negotiation',
      'Payment terms discussion',
      'Proforma invoice review',
    ],
  },
  {
    num: '05',
    icon: Factory,
    title: 'Production Oversight',
    duration: 'During production',
    desc: 'Once you place the order, we monitor production progress with regular updates and on-site visits at key milestones. We conduct quality inspections during and after production.',
    details: [
      'Weekly production status reports',
      'In-line quality inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'Defect reporting and resolution',
      'Final approval before shipment',
    ],
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    duration: 'Post-production',
    desc: 'After goods pass inspection, we coordinate with freight forwarders to arrange shipment. We handle export documentation and track your cargo until it reaches your warehouse.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Booking confirmation and tracking',
      'Customs clearance support',
      'Delivery confirmation',
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2d5e] to-[#1a4f8a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-widest mb-3">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">How We Source for You</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              A clear, step-by-step process designed to give you full visibility and control over your China sourcing project — from first inquiry to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {phases.map((phase, i) => (
              <div key={phase.num} className="relative">
                {i < phases.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-slate-100 hidden md:block" />
                )}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                    <div className="w-12 h-12 bg-[#2563eb] rounded-xl flex items-center justify-center shadow-md">
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-xs text-slate-500 font-medium">{phase.duration}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-xl border border-slate-100 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-[#2563eb] bg-blue-50 px-2.5 py-1 rounded-md">Step {phase.num}</span>
                      <h2 className="text-xl font-bold text-slate-900">{phase.title}</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">{phase.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {phase.details.map((d) => (
                        <li key={d} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#2563eb] shrink-0" />
                          <span className="text-sm text-slate-700">{d}</span>
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

      {/* What to Expect */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">What to Expect Working With Us</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto">We keep communication clear and timelines realistic. Here's what our clients typically experience.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Response Time', value: 'Within 24 hours', note: 'We respond to all inquiries within one business day.' },
              { label: 'Supplier Shortlist', value: '5–10 business days', note: 'From inquiry submission to shortlisted supplier report.' },
              { label: 'Full Sourcing Cycle', value: '4–8 weeks', note: 'From inquiry to approved sample and confirmed order.' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-slate-100 p-6">
                <p className="text-sm text-slate-500 mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-[#1a4f8a] mb-2">{item.value}</p>
                <p className="text-sm text-slate-600">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2563eb]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-7">Submit your sourcing inquiry today and we'll get back to you within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#1a4f8a] font-bold px-7 py-3.5 rounded-lg transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
