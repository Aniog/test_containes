import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageSquare, Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Inquiry',
    desc: 'Fill out our sourcing inquiry form with your product details — type, quantity, target price, quality requirements, and any certifications needed. The more detail you provide, the faster we can help.',
    details: [
      'Product name and description',
      'Target unit price and MOQ',
      'Required certifications (CE, RoHS, FDA, etc.)',
      'Delivery timeline',
      'Destination country',
    ],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified supplier database and conducts fresh market research to identify manufacturers that match your requirements. We typically present 3–5 shortlisted suppliers within 5–7 business days.',
    details: [
      'Database and market research',
      'Initial supplier screening',
      'Price and MOQ comparison',
      'Supplier profile preparation',
      'Recommendation report',
    ],
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'Before recommending a supplier, we conduct an on-site or document-based factory audit. We verify business registration, production capacity, equipment, workforce, and quality management systems.',
    details: [
      'Business license check',
      'On-site factory visit',
      'Production capacity assessment',
      'Certification verification',
      'Detailed audit report with photos',
    ],
  },
  {
    num: '04',
    icon: Package,
    title: 'Sample Development & Approval',
    desc: 'We arrange samples from the shortlisted suppliers, inspect them against your specifications, and ship them to you for final approval. We manage all communication with the factory during this stage.',
    details: [
      'Sample request and coordination',
      'Sample inspection before shipping',
      'Feedback and revision management',
      'Final sample approval',
      'Pre-production confirmation',
    ],
  },
  {
    num: '05',
    icon: ShieldCheck,
    title: 'Production Monitoring & QC',
    desc: 'Once production begins, we monitor progress at key milestones and conduct in-line and pre-shipment inspections. We provide regular updates and resolve any issues before they affect your delivery.',
    details: [
      'Production schedule tracking',
      'In-line inspection visits',
      'Pre-shipment inspection (AQL)',
      'Defect reporting and resolution',
      'Final approval before shipment',
    ],
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate with licensed freight forwarders to arrange the most suitable shipping method — sea, air, or express. We handle all export documentation and provide tracking updates until delivery.',
    details: [
      'Freight forwarder coordination',
      'Sea, air, or express shipping',
      'Export documentation',
      'Customs clearance support',
      'Delivery tracking and updates',
    ],
  },
];

const HowItWorks = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
              How Our Sourcing Process Works
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              A clear, structured process from your first inquiry to final delivery. We keep you informed at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-bgLight">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.num} className="bg-white rounded-2xl border border-borderColor p-8 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-primary/15">{step.num}</span>
                      <h2 className="text-xl md:text-2xl font-bold text-textDark">{step.title}</h2>
                    </div>
                    <p className="text-textBody leading-relaxed mb-5">{step.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-sm text-textBody">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex justify-center mt-6">
                    <div className="w-0.5 h-6 bg-borderColor"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-textDark mb-3">Typical Project Timeline</h2>
            <p className="text-textBody">Timelines vary by product complexity and order size. Here's a general guide.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { phase: 'Inquiry & Research', time: '1–2 weeks' },
              { phase: 'Factory Audit', time: '1–2 weeks' },
              { phase: 'Sampling', time: '2–4 weeks' },
              { phase: 'Production', time: '4–8 weeks' },
              { phase: 'Inspection', time: '3–5 days' },
              { phase: 'Shipping', time: '2–6 weeks' },
            ].map((t) => (
              <div key={t.phase} className="bg-bgLight rounded-xl border border-borderColor p-4 text-center">
                <div className="text-lg font-bold text-primary mb-1">{t.time}</div>
                <div className="text-xs text-textMuted font-medium">{t.phase}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Sourcing Project Today</h2>
          <p className="text-red-100 text-lg mb-8">
            Submit your inquiry and we'll respond within 24 hours with a tailored plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-accent hover:bg-gray-50 font-bold px-10 py-4 rounded-lg transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
