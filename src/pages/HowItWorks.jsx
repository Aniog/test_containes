import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import CTABanner from '../components/shared/CTABanner';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    duration: 'Day 1',
    description: 'Complete our sourcing inquiry form with your product details, target price, quantity, and any specific requirements. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name, description, and specifications',
      'Target unit price and total budget',
      'Required quantity (initial and projected)',
      'Certifications or compliance requirements',
      'Preferred timeline and delivery destination',
    ],
  },
  {
    number: '02',
    title: 'Initial Consultation & Feasibility Review',
    duration: 'Day 1–2',
    description: 'Our sourcing manager reviews your request and contacts you to clarify any details. We assess market availability, realistic pricing, and potential challenges before proceeding.',
    details: [
      '24-hour response to all inquiries',
      'Feasibility assessment and market pricing guidance',
      'Clarification of specifications and requirements',
      'Agreement on scope and service fees',
    ],
  },
  {
    number: '03',
    title: 'Supplier Research & Shortlisting',
    duration: 'Days 3–7',
    description: 'We search our verified supplier network, trade databases, and industry contacts to identify 3–5 qualified manufacturers. Each supplier is pre-screened before being presented to you.',
    details: [
      'Search across verified network and trade channels',
      'Pre-screening for capacity, certifications, and export experience',
      'Comparative supplier report with pricing and lead times',
      'Recommendation with rationale for each option',
    ],
  },
  {
    number: '04',
    title: 'Factory Audit (Optional)',
    duration: 'Days 7–14',
    description: 'For new suppliers or high-value orders, we conduct an on-site factory audit to verify business credentials, production capacity, and quality systems.',
    details: [
      'On-site visit to shortlisted factory',
      'Business license and certification verification',
      'Production line and equipment assessment',
      'Audit report with photos and scoring',
    ],
  },
  {
    number: '05',
    title: 'Sample Production & Review',
    duration: 'Weeks 2–5',
    description: 'We arrange sample production from your chosen supplier and coordinate delivery to you for review. We inspect samples before shipping and provide a sample evaluation report.',
    details: [
      'Sample order placement and coordination',
      'Pre-shipment sample inspection',
      'Sample evaluation report',
      'Feedback relay and revision management',
    ],
  },
  {
    number: '06',
    title: 'Order Placement & Production Monitoring',
    duration: 'Ongoing',
    description: 'Once you approve the sample, we place the production order and monitor progress throughout manufacturing. You receive weekly updates with photos and milestone confirmations.',
    details: [
      'Purchase order review and placement',
      'Weekly production status reports',
      'Milestone photo and video documentation',
      'Proactive issue identification and resolution',
    ],
  },
  {
    number: '07',
    title: 'Quality Inspection',
    duration: 'Before shipment',
    description: 'Our inspectors visit the factory before goods are loaded to verify that the finished products meet your specifications. We issue a detailed QC report with pass/fail results.',
    details: [
      'Pre-shipment inspection (PSI)',
      'AQL sampling or 100% inspection (by agreement)',
      'Defect classification and photo documentation',
      'Pass/fail decision and rework coordination if needed',
    ],
  },
  {
    number: '08',
    title: 'Shipping & Delivery',
    duration: 'Post-inspection',
    description: 'After inspection approval, we coordinate freight forwarding, export documentation, and customs clearance. We track your shipment and keep you updated until delivery.',
    details: [
      'Freight booking (sea, air, or express)',
      'Export documentation preparation',
      'Customs clearance coordination',
      'Shipment tracking and delivery confirmation',
    ],
  },
];

export default function HowItWorks() {
  useEffect(() => {
    document.title = 'How It Works | SSourcing China';
  }, []);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#1A3C6E] py-16 md:py-20">
        <div className="container-xl text-center">
          <p className="section-label text-amber-400 mb-3">Process</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How Our Sourcing Process Works
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A structured, transparent 8-step process designed to reduce risk and keep you in control at every stage.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-white">
        <div className="container-xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <div key={step.number} className="flex gap-6 md:gap-8">
                  {/* Timeline */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 bg-[#1A3C6E] text-white rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 bg-slate-200 flex-1 my-2 min-h-8" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pb-10 flex-1 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-xl font-bold text-slate-900">{step.title}</h2>
                      <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline summary */}
      <section className="section-gray">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Typical Project Timeline</h2>
            <p className="text-slate-600 mb-8">Timelines vary by product complexity and order size. Here's a general guide:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { phase: 'Sourcing & Shortlist', time: '5–7 business days' },
                { phase: 'Sample Production', time: '2–4 weeks' },
                { phase: 'Production & Shipping', time: '4–12 weeks' },
              ].map((item) => (
                <div key={item.phase} className="bg-white rounded-xl border border-slate-200 p-5 text-center">
                  <p className="text-2xl font-bold text-[#1A3C6E] mb-1">{item.time}</p>
                  <p className="text-slate-600 text-sm">{item.phase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Get Started?"
        subtitle="Submit your sourcing request and receive a supplier shortlist within 5 business days."
        ctaText="Get a Free Sourcing Quote"
      />
    </div>
  );
}
