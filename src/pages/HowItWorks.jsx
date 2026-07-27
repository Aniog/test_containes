import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';
import {
  Send,
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Send,
    title: 'Submit Your Sourcing Request',
    description: 'Tell us what product you need, including specifications, target price, order quantity, and timeline. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Product specifications and technical requirements',
      'Target price range and order quantity',
      'Quality standards and certifications needed',
      'Preferred timeline and delivery date',
    ],
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Identification & Quotation',
    description: 'We search our network of verified manufacturers and identify the best matches for your requirements. We request quotations and present you with a shortlist of options.',
    details: [
      'Search across verified supplier databases',
      'Request and compare quotations from 3-5 manufacturers',
      'Evaluate production capabilities and certifications',
      'Present a comparison report with recommendations',
    ],
  },
  {
    step: '03',
    icon: ShieldCheck,
    title: 'Supplier Verification & Sampling',
    description: 'Before you commit, we verify the supplier through on-site audits and arrange sample production so you can evaluate quality firsthand.',
    details: [
      'On-site factory audit and verification',
      'Business license and certification checks',
      'Sample production and quality evaluation',
      'Final supplier selection with your approval',
    ],
  },
  {
    step: '04',
    icon: Factory,
    title: 'Production & Quality Control',
    description: 'Once you approve the supplier and samples, we manage the production process with regular updates and quality inspections at key stages.',
    details: [
      'Production order placement and confirmation',
      'Regular progress updates and on-site visits',
      'Pre-production, during-production, and pre-shipment inspections',
      'Issue resolution and quality assurance',
    ],
  },
  {
    step: '05',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'We coordinate the entire logistics process, from factory pickup to delivery at your destination, handling all documentation and customs requirements.',
    details: [
      'Freight forwarding by sea or air',
      'Customs documentation and clearance',
      'Shipment tracking and status updates',
      'Delivery coordination to your warehouse',
    ],
  },
];

export default function HowItWorksPage() {
  const containerRef = useRef(null);

  // useEffect(() => {
    // return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  // }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">How It Works</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              A clear, step-by-step process designed to minimize risk and keep you informed at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-slate-200 hidden md:block" />
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="w-6 h-6 text-blue-800" />
                      <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
                    </div>
                    <p className="text-slate-600 text-lg mb-4 leading-relaxed">{item.description}</p>
                    <ul className="space-y-2">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{detail}</span>
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

      {/* Timeline Visual */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Typical Timeline</h2>
            <p className="mt-4 text-lg text-slate-600">
              How long does the sourcing process take? Here is a general guide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { phase: 'Request', duration: '1-2 days', desc: 'Submit your requirements' },
              { phase: 'Sourcing', duration: '1-2 weeks', desc: 'Find and evaluate suppliers' },
              { phase: 'Verification', duration: '1-2 weeks', desc: 'Audit and sampling' },
              { phase: 'Production', duration: '2-8 weeks', desc: 'Manufacturing and QC' },
              { phase: 'Shipping', duration: '2-6 weeks', desc: 'Logistics and delivery' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-slate-200 p-6 text-center">
                <div className="text-sm font-medium text-blue-800 mb-1">Step {index + 1}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.phase}</h3>
                <div className="text-orange-600 font-semibold mb-2">{item.duration}</div>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            Timelines vary based on product complexity, order quantity, and shipping method. We provide detailed estimates for each project.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-slate-300">
            Submit your sourcing request and we will begin finding the right suppliers for your needs.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
