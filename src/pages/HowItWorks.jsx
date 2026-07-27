import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, FileText, MessageSquare } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Brief',
    description:
      'Fill in our inquiry form with your product details — what you need, target price, quantity, quality requirements, and timeline. The more detail you provide, the better we can match you with the right supplier.',
    details: [
      'Product name, description, and specifications',
      'Target unit price and order quantity (MOQ)',
      'Required certifications (CE, RoHS, FDA, etc.)',
      'Delivery timeline and destination port',
      'Any existing supplier references or samples',
    ],
    duration: 'Day 1',
  },
  {
    number: '02',
    title: 'Initial Consultation',
    description:
      'We review your brief and schedule a call or email exchange to clarify requirements, discuss your budget, and confirm the scope of work. We\'ll also provide a fee estimate at this stage.',
    details: [
      'Requirements review and clarification',
      'Scope of work confirmation',
      'Fee estimate and service agreement',
      'Project timeline agreement',
    ],
    duration: 'Days 1–3',
  },
  {
    number: '03',
    title: 'Supplier Identification',
    description:
      'Our sourcing team searches our verified network, trade databases, and industry contacts to identify manufacturers that match your requirements. We screen suppliers on capacity, certifications, and track record.',
    details: [
      'Search across verified factory network',
      'Cross-reference with trade databases and Canton Fair records',
      'Initial supplier screening and background check',
      'Shortlist of 3–5 qualified candidates',
    ],
    duration: 'Days 3–10',
  },
  {
    number: '04',
    title: 'Factory Audit & Verification',
    description:
      'For shortlisted suppliers, we conduct on-site factory visits to verify production capacity, quality systems, certifications, and business legitimacy. You receive a detailed audit report with photos.',
    details: [
      'On-site factory visit by our local team',
      'Business registration and license verification',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Detailed audit report with photos',
    ],
    duration: 'Days 7–14',
  },
  {
    number: '05',
    title: 'Sample & Price Negotiation',
    description:
      'We request product samples from the top 1–2 suppliers, review quality against your specifications, and negotiate pricing, payment terms, and lead times on your behalf.',
    details: [
      'Sample request and coordination',
      'Sample quality review against specifications',
      'Price and MOQ negotiation',
      'Payment terms and lead time agreement',
      'Supplier recommendation with comparison report',
    ],
    duration: 'Days 14–28',
  },
  {
    number: '06',
    title: 'Order Placement & Production',
    description:
      'Once you confirm the supplier, we assist with purchase order preparation and monitor production at agreed milestones. You receive regular written updates and photos throughout.',
    details: [
      'Purchase order review and placement support',
      'Production schedule confirmation',
      'Milestone check-ins and progress reports',
      'Issue escalation and resolution',
      'Weekly status updates',
    ],
    duration: 'Weeks 4–10 (varies by product)',
  },
  {
    number: '07',
    title: 'Quality Inspection',
    description:
      'Before goods leave the factory, our QC team conducts a final inspection against your specifications using AQL sampling standards. We provide a pass/fail report and photos.',
    details: [
      'Pre-shipment inspection booking',
      'AQL sampling and defect classification',
      'Measurement, function, and appearance checks',
      'Detailed inspection report with photos',
      'Pass/fail recommendation',
    ],
    duration: '1–2 days before shipment',
  },
  {
    number: '08',
    title: 'Shipping & Delivery',
    description:
      'We coordinate with freight forwarders, prepare export documentation, and track your shipment from the factory to your destination. We keep you updated at every stage.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Shipment booking and tracking',
      'Status updates until delivery',
      'Post-delivery follow-up',
    ],
    duration: 'Varies by shipping method',
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Header */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="container-xl">
          <div className="max-w-2xl">
            <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              How It Works
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              A clear, structured process from your first inquiry to final delivery.
              Here's exactly what happens when you work with SSourcing China.
            </p>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex gap-6">
                  {/* Step indicator */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 bg-brand-border flex-1 mt-3 min-h-8" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-xl font-bold text-brand-dark">{step.title}</h2>
                      <span className="bg-blue-50 text-brand-blue text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-brand-mid leading-relaxed mb-4">{step.description}</p>
                    <ul className="flex flex-col gap-1.5">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-brand-mid">
                          <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                          {detail}
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

      {/* CTA */}
      <section className="bg-brand-navy py-16">
        <div className="container-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Submit your sourcing brief and we'll get back to you within 24 hours.
          </p>
          <Link to="/contact#quote" className="btn-primary inline-flex items-center gap-2">
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
