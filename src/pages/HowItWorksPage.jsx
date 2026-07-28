import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Search, Building2, ClipboardCheck, Package, Ship, CheckCircle, Clock, FileText } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Submit Your Inquiry',
    description: 'Share your product requirements including specifications, quantity, target price, and timeline. The more details you provide, the more accurate our sourcing will be.',
    details: [
      'Product specifications and technical requirements',
      'Target quantity and estimated order volume',
      'Budget range and quality expectations',
      'Preferred timeline and delivery date',
    ],
    tip: 'Include photos, sketches, or reference products if available.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Sourcing & Shortlisting',
    description: 'Our team searches our network and industry databases to find manufacturers that match your requirements. We evaluate capabilities, certifications, and past performance.',
    details: [
      'Search across 5,000+ verified manufacturers',
      'Evaluate production capabilities and capacity',
      'Check certifications and compliance records',
      'Request quotations from 3-5 qualified suppliers',
    ],
    tip: 'We typically present supplier options within 1-2 weeks.',
  },
  {
    icon: Building2,
    step: '03',
    title: 'Factory Verification & Audit',
    description: 'Before recommending any supplier, we conduct on-site verification to confirm they are legitimate and capable of meeting your requirements.',
    details: [
      'Verify business licenses and export credentials',
      'On-site factory tour and equipment assessment',
      'Quality management system evaluation',
      'Production capacity and workforce verification',
    ],
    tip: 'We provide a detailed audit report with photos and findings.',
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Sample Evaluation',
    description: 'We coordinate sample production and shipping so you can evaluate quality before committing to a full order. We handle all communication with the factory during this phase.',
    details: [
      'Coordinate sample production with selected factory',
      'Review samples against your specifications',
      'Request revisions if needed',
      'Ship samples to your address for evaluation',
    ],
    tip: 'Sample costs are typically refundable against bulk orders.',
  },
  {
    icon: FileText,
    step: '05',
    title: 'Order Confirmation & Production',
    description: 'Once you approve the sample, we help negotiate final terms, confirm the order, and monitor production from start to finish.',
    details: [
      'Negotiate pricing, payment terms, and delivery schedule',
      'Review and confirm purchase order details',
      'Monitor production progress with regular updates',
      'Conduct during-production quality checks',
    ],
    tip: 'We recommend a 30% deposit with balance before shipment.',
  },
  {
    icon: Package,
    step: '06',
    title: 'Quality Inspection & Shipping',
    description: 'Before goods leave the factory, we conduct a final inspection. Once approved, we handle all shipping arrangements and documentation.',
    details: [
      'Pre-shipment inspection with detailed report',
      'Your approval before payment release to factory',
      'Freight booking and customs documentation',
      'Shipment tracking until delivery',
    ],
    tip: 'We offer both sea and air freight options based on your needs.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How Our Sourcing Process Works</h1>
            <p className="text-lg text-slate-300 mb-8">
              A transparent, step-by-step process from your first inquiry to final delivery. You'll always know what's happening with your order.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Sourcing Journey <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-orange-600" />
                    </div>
                    <span className="text-sm font-bold text-orange-600">Step {step.step}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{step.title}</h2>
                  <p className="text-lg text-slate-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-5 h-5 text-orange-500" />
                      <span className="font-semibold text-slate-900">Timeline</span>
                    </div>
                    <p className="text-slate-600 mb-4">
                      {index === 0 && 'Immediate — submit your inquiry anytime.'}
                      {index === 1 && '1-2 weeks for supplier shortlisting and quotations.'}
                      {index === 2 && '1 week for on-site audit and report.'}
                      {index === 3 && '2-4 weeks for sample production and shipping.'}
                      {index === 4 && '30-60 days depending on product complexity and quantity.'}
                      {index === 5 && '1 week for inspection, 2-4 weeks for shipping.'}
                    </p>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <p className="text-sm text-orange-800 font-medium">
                        <strong>Tip:</strong> {step.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Submit your sourcing inquiry today and receive a free sourcing plan within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
