import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  MessageSquare, Search, FileCheck, Factory, ClipboardCheck, Truck,
  ArrowRight, CheckCircle2
} from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and delivery timeline. The more detail you provide, the better we can help.',
    details: ['Product specifications & drawings', 'Target unit price & total budget', 'Required certifications', 'Delivery timeline & destination'],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our database and visits trade markets to find 3-5 qualified suppliers matching your criteria. We evaluate each on price, quality, capacity, and reliability.',
    details: ['Database & market research', '3-5 supplier shortlist', 'Price & capability comparison', 'Initial communication & negotiation'],
  },
  {
    num: '03',
    icon: FileCheck,
    title: 'Sample & Verification',
    desc: 'We arrange product samples from shortlisted suppliers and conduct factory verification audits. You review samples and our audit reports to make an informed decision.',
    details: ['Sample procurement & shipping', 'On-site factory audit', 'Detailed verification report', 'Supplier recommendation'],
  },
  {
    num: '04',
    icon: Factory,
    title: 'Order Placement & Production',
    desc: 'Once you confirm the supplier, we place the order, negotiate final terms, and monitor production progress with regular updates and photos.',
    details: ['Contract & payment coordination', 'Production timeline tracking', 'Weekly progress updates', 'Issue resolution & communication'],
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Before shipment, our QC team inspects finished goods against your specifications using AQL standards. You receive a detailed inspection report with photos.',
    details: ['AQL-based inspection', 'Detailed photo report', 'Pass/fail recommendation', 'Rework coordination if needed'],
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight forwarding, prepare customs documentation, arrange insurance, and track your shipment until it arrives at your warehouse.',
    details: ['Freight booking & optimization', 'Export documentation', 'Shipment tracking', 'Delivery confirmation'],
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              How It Works
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Our proven 6-step process takes the complexity out of China sourcing. 
              From your first inquiry to final delivery, we manage every detail.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-neutral-200 mt-3" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">Step {step.num}</span>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1 mb-2">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-4">{step.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((d, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
              Why Our Process Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Transparent</h3>
              <p className="text-neutral-600 text-sm">You see every step, every report, every communication. No hidden fees or surprises.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Proven</h3>
              <p className="text-neutral-600 text-sm">Refined over 500+ successful projects across 35+ countries and all major product categories.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Flexible</h3>
              <p className="text-neutral-600 text-sm">Choose full-service support or individual services. We adapt to your needs and budget.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Start Your Sourcing Project Today
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            Submit your requirements and receive a free sourcing plan within 48 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
