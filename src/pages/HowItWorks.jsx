import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, MessageSquare, Search, Factory, ClipboardList, Package, Truck, FileText } from 'lucide-react';
import CTASection from '@/components/home/CTASection';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    duration: 'Day 1',
    description: 'Fill out our inquiry form with your product details, target quantity, budget, and any specific requirements. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name, category, and specifications',
      'Target unit price and order quantity',
      'Required certifications (CE, FCC, RoHS, etc.)',
      'Packaging and labeling requirements',
      'Desired delivery timeline',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    duration: 'Days 2–7',
    description: 'Our sourcing team searches our vetted supplier database and conducts fresh market research to identify manufacturers that match your criteria. We shortlist 3–5 qualified options.',
    details: [
      'Search across verified supplier network',
      'Check production capacity and certifications',
      'Request initial quotes and lead times',
      'Prepare supplier comparison report',
    ],
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    duration: 'Days 5–12',
    description: 'For shortlisted suppliers, our team conducts on-site factory audits to verify their capabilities, quality systems, and compliance. You receive a detailed audit report with photos.',
    details: [
      'On-site visit by our local team',
      'Verify business licenses and certifications',
      'Assess production capacity and equipment',
      'Review quality control procedures',
      'Photo and video documentation',
    ],
  },
  {
    number: '04',
    icon: ClipboardList,
    title: 'Sample Ordering & Review',
    duration: 'Days 10–25',
    description: 'We arrange samples from your selected supplier and review them against your specifications before shipping to you. We coordinate revisions until you are satisfied.',
    details: [
      'Coordinate sample production',
      'Inspect sample against your specs',
      'Arrange international sample shipping',
      'Manage revision rounds if needed',
    ],
  },
  {
    number: '05',
    icon: Package,
    title: 'Production Monitoring',
    duration: 'During Production',
    description: 'Once you approve the sample and place the order, we monitor production from raw material procurement through to final packaging. You receive regular status updates.',
    details: [
      'Raw material verification',
      'Production milestone check-ins',
      'Mid-production inspection (for large orders)',
      'Weekly progress reports to you',
    ],
  },
  {
    number: '06',
    icon: CheckCircle,
    title: 'Pre-Shipment Quality Inspection',
    duration: 'Before Shipment',
    description: 'Before goods leave the factory, our QC inspector conducts a thorough pre-shipment inspection using AQL standards and your custom checklist. You approve before we ship.',
    details: [
      'AQL-based random sampling',
      'Check against approved sample',
      'Verify packaging and labeling',
      'Detailed inspection report with photos',
      'Client approval before release',
    ],
  },
  {
    number: '07',
    icon: Truck,
    title: 'Shipping & Logistics',
    duration: 'Post-Approval',
    description: 'We coordinate with freight forwarders to arrange sea or air freight. We prepare all export documentation and keep you updated on shipment status.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Booking confirmation and tracking',
      'Bill of lading and packing list',
    ],
  },
  {
    number: '08',
    icon: FileText,
    title: 'Delivery & After-Sales Support',
    duration: 'On Arrival',
    description: 'We remain available after delivery to help resolve any issues with the supplier. Our documentation ensures you have full recourse if problems arise.',
    details: [
      'Delivery confirmation',
      'Post-delivery issue support',
      'Supplier communication if needed',
      'Documentation archive for your records',
    ],
  },
];

const HowItWorks = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            How It Works
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A transparent, step-by-step process designed to reduce risk and deliver results for global importers.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="flex gap-6">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-border mt-3 min-h-[2rem]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-primary font-bold text-sm">{step.number}</span>
                      <h2 className="text-xl font-bold text-text-primary">{step.title}</h2>
                      <span className="bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-text-secondary leading-relaxed mb-4">{step.description}</p>
                    <ul className="space-y-1.5">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-text-secondary text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-12 bg-bg-light border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-text-primary mb-3">Have Questions?</h3>
          <p className="text-text-secondary mb-5">
            Check our FAQ or contact us directly — we respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/#faq" className="inline-flex items-center justify-center gap-2 border border-border text-text-secondary hover:text-primary hover:border-primary px-6 py-3 rounded-lg font-semibold text-sm transition-colors">
              View FAQ
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default HowItWorks;
