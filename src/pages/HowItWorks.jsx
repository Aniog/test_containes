import { Link } from 'react-router-dom';
import {
  ClipboardList, Search, ShieldCheck, PackageCheck,
  Factory, Truck, ChevronRight, CheckCircle2, ArrowRight
} from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader.jsx';
import ImageLoader from '@/components/shared/ImageLoader.jsx';

const steps = [
  {
    icon: ClipboardList,
    title: '1. Submit Your Requirements',
    desc: 'Share your product specifications, target price, order quantity, quality requirements, and timeline. The more detail you provide, the faster we can find the right match.',
    details: [
      'Product specifications and reference samples',
      'Target price range and order quantity',
      'Quality standards and certification requirements',
      'Delivery timeline and destination',
    ],
  },
  {
    icon: Search,
    title: '2. Supplier Search & Shortlisting',
    desc: 'We search our network of verified suppliers and manufacturing hubs across China, then shortlist 3–5 candidates that match your criteria.',
    details: [
      'Search across regional manufacturing clusters',
      'Initial capability and capacity screening',
      'Price benchmarking across candidates',
      'Shortlist presentation with comparison data',
    ],
  },
  {
    icon: ShieldCheck,
    title: '3. Factory Verification & Audit',
    desc: 'Before you commit, we visit each shortlisted factory to verify their credentials, production capabilities, and quality systems.',
    details: [
      'Business license and registration check',
      'On-site factory audit with photo documentation',
      'Production capacity and equipment review',
      'Quality management system assessment',
    ],
  },
  {
    icon: PackageCheck,
    title: '4. Sample & Order Confirmation',
    desc: 'We arrange samples from your chosen supplier, help you evaluate them, and support order negotiation and confirmation.',
    details: [
      'Sample production and shipping arrangement',
      'Sample evaluation and feedback coordination',
      'Price negotiation and payment terms',
      'Purchase order confirmation and deposit handling',
    ],
  },
  {
    icon: Factory,
    title: '5. Production Monitoring & QC',
    desc: 'Throughout production, we monitor progress, conduct inspections at key milestones, and keep you informed with detailed reports.',
    details: [
      'Production schedule tracking and updates',
      'Pre-production material inspection',
      'During-production inspection at 20–30% completion',
      'Pre-shipment inspection before container loading',
    ],
  },
  {
    icon: Truck,
    title: '6. Shipping & Delivery',
    desc: 'We coordinate freight booking, customs documentation, and logistics to ensure your goods arrive on time and in good condition.',
    details: [
      'Freight rate comparison and booking',
      'Cargo consolidation for cost savings',
      'Container loading supervision',
      'Customs documentation and compliance',
      'Door-to-door delivery coordination',
    ],
  },
];

const HowItWorks = () => (
  <div>
    <section className="bg-navy py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">How It Works</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          A clear, structured process that takes you from initial inquiry to delivered goods — with full visibility at every step.
        </p>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center shrink-0">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-accent uppercase tracking-wide">Step {i + 1}</div>
                </div>
                <h2 className="text-2xl font-bold text-charcoal mb-3">{step.title.replace(/^\d+\.\s/, '')}</h2>
                <p className="text-body leading-relaxed">{step.desc}</p>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-surface rounded-xl p-6 lg:p-8">
                  <h4 className="font-semibold text-charcoal mb-4">What this includes:</h4>
                  <ul className="space-y-3">
                    {step.details.map((d) => (
                      <li key={d} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-body">{d}</span>
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

    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          title="Ready to Get Started?"
          subtitle="Submit your sourcing requirements and receive a free quote within 24 hours."
        />
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          Get a Free Sourcing Quote
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  </div>
);

export default HowItWorks;
