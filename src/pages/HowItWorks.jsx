import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTABanner from '../components/home/CTABanner';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    desc: 'Complete our online inquiry form with your product details, target price, quantity, and any specific requirements such as certifications or packaging. This takes about 5 minutes and there is no commitment at this stage.',
    details: [
      'Product name, description, and specifications',
      'Target unit price and order quantity',
      'Required certifications (CE, RoHS, FDA, etc.)',
      'Preferred delivery timeline',
    ],
    titleId: 'step-01-title',
    descId: 'step-01-desc',
  },
  {
    number: '02',
    title: 'We Research and Shortlist Suppliers',
    desc: 'Our team searches our existing supplier network and conducts fresh market research to identify manufacturers that match your requirements. We contact factories directly in Chinese, request quotes, and evaluate their capabilities.',
    details: [
      'Research across Alibaba, trade shows, and direct contacts',
      'Supplier communication in Chinese',
      'Price and lead time comparison',
      'Initial capability assessment',
    ],
    titleId: 'step-02-title',
    descId: 'step-02-desc',
  },
  {
    number: '03',
    title: 'Factory Audit and Sample Approval',
    desc: 'Before recommending a supplier, we visit the factory in person to verify their production capacity, certifications, and quality systems. We then arrange samples for your review and approval.',
    details: [
      'On-site factory visit with photo and video report',
      'Verification of business licences and certifications',
      'Sample arrangement and quality review',
      'You approve before any order is placed',
    ],
    titleId: 'step-03-title',
    descId: 'step-03-desc',
  },
  {
    number: '04',
    title: 'Order Placement and Negotiation',
    desc: 'Once you approve the supplier and samples, we place the order on your behalf, negotiate payment terms, and ensure the purchase agreement protects your interests.',
    details: [
      'Price and payment term negotiation',
      'Purchase order management',
      'Deposit and balance payment coordination',
      'Production schedule confirmation',
    ],
    titleId: 'step-04-title',
    descId: 'step-04-desc',
  },
  {
    number: '05',
    title: 'Production Monitoring',
    desc: 'We visit the factory during production to check progress, verify materials, and ensure the order is on schedule. You receive regular updates with photos and written reports.',
    details: [
      'Regular factory visits during production',
      'Weekly progress reports',
      'Early identification of delays or quality issues',
      'Direct liaison with factory management',
    ],
    titleId: 'step-05-title',
    descId: 'step-05-desc',
  },
  {
    number: '06',
    title: 'Pre-Shipment Quality Inspection',
    desc: 'Before goods are loaded, our inspectors check the finished products against your specifications using AQL sampling standards. You receive a full inspection report and decide whether to approve shipment.',
    details: [
      'AQL sampling and defect classification',
      'Measurement, function, and appearance checks',
      'Full inspection report with photos',
      'You approve before goods are shipped',
    ],
    titleId: 'step-06-title',
    descId: 'step-06-desc',
  },
  {
    number: '07',
    title: 'Shipping and Delivery',
    desc: 'We coordinate with freight forwarders to arrange the most suitable shipping method, prepare export documentation, and track your cargo until it arrives at your destination.',
    details: [
      'Sea freight (FCL/LCL), air freight, or express options',
      'Export documentation and customs support',
      'Cargo tracking and delivery updates',
      'Consolidation of multiple supplier orders',
    ],
    titleId: 'step-07-title',
    descId: 'step-07-desc',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <div className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">How It Works</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            A clear, step-by-step process designed to reduce risk and give you full visibility
            from first inquiry to final delivery.
          </p>
        </div>
      </div>

      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <div key={step.number} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Step number */}
                <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-3">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block w-0.5 h-16 bg-neutral-200 ml-6 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="md:col-span-10 bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-brand-blue text-xs font-semibold uppercase tracking-widest">
                        Step {step.number}
                      </span>
                      <h2 id={step.titleId} className="text-neutral-900 font-bold text-xl mt-1">
                        {step.title}
                      </h2>
                    </div>
                  </div>
                  <p id={step.descId} className="text-neutral-600 leading-relaxed mb-4">{step.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-gold text-white font-bold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity"
            >
              Start Your Sourcing Request
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
