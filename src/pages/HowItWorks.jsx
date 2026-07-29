import { MessageSquare, Search, FileCheck, Factory, ClipboardList, Truck, Shield, Clock, Phone } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Share Your Requirements',
    description: 'Start by filling out our inquiry form or scheduling a call. Tell us what product you need, your target price range, estimated quantity, quality standards, and any certifications required. The more details you provide, the better we can match you with the right suppliers.',
    duration: 'Day 1',
    tips: ['Include product specs or photos', 'Mention target price and quantity', 'Note any certification requirements'],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    description: 'Our team searches our verified supplier network, trade databases, and conducts market research to identify 3-5 qualified factories that match your criteria. We filter out unsuitable candidates before you ever see a name.',
    duration: 'Days 2-6',
    tips: ['We check factory capabilities against your specs', 'Verify basic business registration', 'Assess production capacity'],
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Quote Comparison & Negotiation',
    description: 'We collect detailed quotations from shortlisted suppliers, including unit price, tooling costs, MOQ, lead time, and sample terms. We help you compare apples to apples and negotiate better terms where possible.',
    duration: 'Days 7-10',
    tips: ['Transparent cost breakdowns', 'MOQ and lead time comparison', 'Payment term negotiation'],
  },
  {
    number: '04',
    icon: Factory,
    title: 'Factory Verification Visit',
    description: 'Before you place an order, we visit the factory in person. Our auditor inspects the production floor, reviews certifications, checks equipment, and assesses whether the facility can reliably produce your product.',
    duration: 'Days 11-14',
    tips: ['On-site production floor inspection', 'Certification document review', 'Social compliance check'],
  },
  {
    number: '05',
    icon: ClipboardList,
    title: 'QC & Production Monitoring',
    description: 'Once production begins, we conduct regular inspections. This includes checking incoming raw materials, monitoring work-in-progress, and performing pre-shipment inspections using AQL sampling standards.',
    duration: 'Throughout Production',
    tips: ['During-production inspections', 'Pre-shipment inspection (PSI)', 'Photo and video reports'],
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery Coordination',
    description: 'We coordinate with freight forwarders, handle export documentation, and track your shipment until it reaches your warehouse. We also support customs clearance if needed.',
    duration: 'Final Phase',
    tips: ['Freight coordination', 'Export documentation', 'Delivery tracking'],
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-custom text-center max-w-3xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            How It Works
          </h1>
          <p className="text-text-secondary text-lg">
            A proven 6-step process designed to minimize risk, ensure quality, and save you time when sourcing from China.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-[calc(100%+3rem)] bg-border hidden md:block" />
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Number & Icon */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-primary/50 uppercase tracking-wider md:hidden">
                      Step {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-surface rounded-xl p-6 md:p-8 border border-border">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <span className="text-xs font-bold text-primary/50 uppercase tracking-wider hidden md:inline-block mb-1">
                          Step {step.number}
                        </span>
                        <h2 className="text-xl md:text-2xl font-bold text-text-primary">{step.title}</h2>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm text-primary bg-primary/10 px-3 py-1 rounded-full font-medium shrink-0 self-start">
                        <Clock className="w-3.5 h-3.5" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-text-secondary leading-relaxed mb-5">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.tips.map((tip) => (
                        <span
                          key={tip}
                          className="inline-flex items-center gap-1.5 text-xs bg-white border border-border px-3 py-1.5 rounded-full text-text-secondary"
                        >
                          <Shield className="w-3 h-3 text-secondary" />
                          {tip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Note */}
      <section className="py-16 bg-surface">
        <div className="container-custom max-w-3xl text-center">
          <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-text-primary mb-3">
            Questions About the Process?
          </h2>
          <p className="text-text-secondary mb-6">
            Every project is unique. Contact us to discuss your specific requirements and we will customize our approach to fit your needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
