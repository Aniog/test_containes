import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, MessageSquare, FileText, Search, Factory, ClipboardCheck, Zap, Truck, Package } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product details — category, specifications, target quantity, and budget. The more detail you provide, the faster we can match you with the right suppliers.',
    duration: '5 minutes',
    details: [
      'Product name and category',
      'Technical specifications or reference samples',
      'Target MOQ and order quantity',
      'Budget range and target price',
      'Required certifications (CE, RoHS, FDA, etc.)',
      'Delivery timeline',
    ],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified supplier database and conducts fresh market research to identify factories that match your requirements. We typically shortlist 3–5 qualified suppliers.',
    duration: '3–5 business days',
    details: [
      'Database search across 1,200+ verified factories',
      'New market research if needed',
      'Supplier background and export record check',
      'Business license and registration verification',
      'Initial price and MOQ confirmation',
      'Shortlist report delivered to you',
    ],
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'For shortlisted suppliers, we conduct on-site or remote audits to verify production capacity, quality systems, and certifications. You receive a detailed audit report before committing to any supplier.',
    duration: '5–10 business days',
    details: [
      'On-site factory visit (or video audit)',
      'Production capacity and equipment check',
      'Quality management system review',
      'Certification and compliance verification',
      'Worker conditions and safety assessment',
      'Detailed audit report with photos',
    ],
  },
  {
    num: '04',
    icon: FileText,
    title: 'Sample Development & Negotiation',
    desc: 'We request product samples from your chosen supplier, review them against your specifications, and negotiate pricing, payment terms, and lead times on your behalf.',
    duration: '2–4 weeks',
    details: [
      'Sample request and coordination',
      'Sample quality review against specs',
      'Price negotiation and benchmarking',
      'Payment terms negotiation',
      'Lead time confirmation',
      'Purchase order preparation support',
    ],
  },
  {
    num: '05',
    icon: Zap,
    title: 'Production Monitoring',
    desc: 'Once your order is placed, we monitor production progress, communicate with the factory in Chinese, and provide regular status updates. We flag any issues early so they can be resolved before they impact your timeline.',
    duration: 'Throughout production',
    details: [
      'Weekly production status reports',
      'Bilingual factory communication',
      'Material and component verification',
      'Production milestone tracking',
      'Early issue detection and escalation',
      'Photo and video documentation',
    ],
  },
  {
    num: '06',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Before goods leave the factory, our inspectors perform a thorough pre-shipment inspection using AQL sampling standards. You receive a full inspection report within 24 hours, with clear pass/fail results.',
    duration: '1–2 days',
    details: [
      'Pre-shipment inspection (PSI)',
      'AQL sampling and defect classification',
      'Packaging and labeling check',
      'Carton and shipping mark verification',
      'Detailed inspection report with photos',
      'Pass/fail recommendation',
    ],
  },
  {
    num: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to arrange the most cost-effective shipping method for your goods. We handle export documentation and keep you updated on shipment status until delivery.',
    duration: '2–6 weeks (sea freight)',
    details: [
      'Freight forwarder coordination',
      'Sea, air, or express shipping options',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking and updates',
      'Amazon FBA prep if required',
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1A3C6E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How We Source for You
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              A structured, transparent 7-step process designed to reduce risk, save time, and deliver reliable results — from your first inquiry to goods at your door.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative">
                  {idx < steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-[#E2E8F0] hidden md:block" style={{ height: 'calc(100% + 3rem)' }} />
                  )}
                  <div className="flex gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#1A3C6E] rounded-full flex items-center justify-center relative z-10">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 pb-12">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-3xl font-bold text-[#E2E8F0]">{step.num}</span>
                        <h2 className="text-xl md:text-2xl font-bold text-[#1A1A2E]">{step.title}</h2>
                        <span className="flex items-center gap-1 text-xs text-[#4A5568] bg-[#F7F9FC] border border-[#E2E8F0] px-2 py-1 rounded-full">
                          <Clock className="w-3 h-3" />
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-[#4A5568] leading-relaxed mb-5">{step.desc}</p>
                      <div className="bg-[#F7F9FC] rounded-xl border border-[#E2E8F0] p-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#1A3C6E] mb-3">What's included:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {step.details.map((d) => (
                            <li key={d} className="flex items-center gap-2 text-sm text-[#4A5568]">
                              <CheckCircle className="w-4 h-4 text-[#1A3C6E] flex-shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#C0392B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Submit your sourcing inquiry today and we'll respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#C0392B] hover:bg-red-50 font-bold px-10 py-4 rounded-lg transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
