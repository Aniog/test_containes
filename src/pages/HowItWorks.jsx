import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, FileText, MessageSquare, Search, ShieldCheck, ClipboardCheck, Truck } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    duration: 'Day 1',
    desc: 'Fill out our inquiry form with your product details — what you need, target quantity, target price, destination country, and any specific requirements (certifications, materials, packaging).',
    details: [
      'Product name and description',
      'Target quantity and MOQ',
      'Target price range (optional)',
      'Required certifications (CE, FCC, BSCI, etc.)',
      'Destination country and delivery timeline',
    ],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    duration: 'Days 2–5',
    desc: 'Our sourcing team researches suppliers across our database, trade show contacts, and verified manufacturer networks. We shortlist 3–5 suppliers that match your requirements.',
    details: [
      'Research across multiple supplier databases',
      'Initial supplier screening and qualification',
      'Request for quotation (RFQ) sent to shortlisted suppliers',
      'Price and lead time comparison',
      'Supplier comparison report delivered to you',
    ],
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    duration: 'Days 5–10',
    desc: 'For suppliers you want to proceed with, we conduct an on-site factory audit. We verify business registration, production capacity, quality systems, and compliance.',
    details: [
      'On-site visit by our audit team',
      'Business license and registration check',
      'Production capacity and equipment review',
      'Quality management system assessment',
      'Detailed audit report with photos',
    ],
  },
  {
    num: '04',
    icon: FileText,
    title: 'Sampling & Approval',
    duration: 'Days 10–25',
    desc: 'We request samples from your chosen supplier and coordinate delivery to you for approval. We review samples against your specifications before they are shipped.',
    details: [
      'Sample request and coordination',
      'Pre-shipment sample review by our QC team',
      'Sample delivery to your address',
      'Feedback and revision management',
      'Final sample approval confirmation',
    ],
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Order Placement & Production',
    duration: 'Weeks 4–10',
    desc: 'Once samples are approved, we place the order and monitor production. We provide regular updates and conduct in-line inspections during production.',
    details: [
      'Purchase order review and placement',
      'Production timeline tracking',
      'Regular factory communication in Chinese',
      'In-line quality inspection (DUPRO)',
      'Photo and video updates from the factory',
    ],
  },
  {
    num: '06',
    icon: CheckCircle,
    title: 'Pre-Shipment Inspection',
    duration: 'Before shipment',
    desc: 'Before goods are loaded, our QC inspectors conduct a full pre-shipment inspection. You receive a detailed report within 24 hours and decide whether to approve shipment.',
    details: [
      'AQL-based sampling inspection',
      'Defect classification (critical, major, minor)',
      'Packaging and labeling check',
      'Quantity verification',
      'Full inspection report with photos within 24 hours',
    ],
  },
  {
    num: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    duration: 'Weeks 10–16',
    desc: 'We coordinate with freight forwarders to arrange shipping, handle export documentation, and track your shipment from China to your warehouse.',
    details: [
      'Freight forwarder selection and booking',
      'Export documentation preparation',
      'Container loading supervision',
      'Shipment tracking and updates',
      'Delivery confirmation',
    ],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1B2B4B] py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">How It Works</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              A clear, step-by-step process from your first inquiry to goods arriving at your warehouse. No surprises, no hidden steps.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-10">
              {steps.map((step, i) => (
                <div key={step.num} className="flex gap-6 md:gap-8">
                  {/* Step indicator */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#1B2B4B] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{step.num}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 bg-gray-200 flex-1 mt-2 min-h-[40px]" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-8 flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h2 className="text-xl font-bold text-[#1B2B4B]">{step.title}</h2>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.desc}</p>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <ul className="space-y-2">
                        {step.details.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-[#1B2B4B] mb-3">Have Questions About the Process?</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Our FAQ covers the most common questions about timelines, costs, and how we work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Start Your Sourcing Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/#faq"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1B2B4B] text-[#1B2B4B] hover:bg-[#1B2B4B] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
