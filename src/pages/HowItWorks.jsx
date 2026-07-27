import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Ship, PackageCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 'step-1',
    icon: MessageSquare,
    step: 'Step 1',
    title: 'Share Your Requirements',
    desc: 'Tell us what you need to source — product type, specifications, target price, order volume, and timeline. The more detail you provide, the faster we can start.',
    details: 'You can submit your requirements through our contact form, email, or a quick call. We typically respond within 24 hours with an initial assessment.',
    imgId: 'how-step1-a1b2c3',
    titleId: 'how-step1-title',
    descId: 'how-step1-desc',
  },
  {
    id: 'step-2',
    icon: Search,
    step: 'Step 2',
    title: 'Supplier Search & Selection',
    desc: 'We search our verified factory network and industry contacts to find suppliers that match your criteria. We evaluate multiple candidates and present you with the best options.',
    details: 'We compare suppliers on price, quality capability, production capacity, location, and track record. You choose which supplier to proceed with, or we recommend the best fit.',
    imgId: 'how-step2-d4e5f6',
    titleId: 'how-step2-title',
    descId: 'how-step2-desc',
  },
  {
    id: 'step-3',
    icon: ShieldCheck,
    step: 'Step 3',
    title: 'Factory Verification',
    desc: 'Before production begins, we visit the factory in person. We verify their business license, inspect production lines, check quality systems, and confirm they can deliver.',
    details: 'Our verification includes checking the factory\'s registration, visiting the actual production floor, reviewing their QC processes, and confirming their capacity for your order volume.',
    imgId: 'how-step3-g7h8i9',
    titleId: 'how-step3-title',
    descId: 'how-step3-desc',
  },
  {
    id: 'step-4',
    icon: ClipboardCheck,
    step: 'Step 4',
    title: 'Sample Development & Quality Inspection',
    desc: 'We coordinate sample production, review samples against your specifications, and conduct inspections at key production stages to ensure quality is maintained.',
    details: 'We arrange sample production, evaluate them against your specs, then monitor quality through pre-production, during-production, and pre-shipment inspections using AQL standards.',
    imgId: 'how-step4-j1k2l3',
    titleId: 'how-step4-title',
    descId: 'how-step4-desc',
  },
  {
    id: 'step-5',
    icon: Ship,
    step: 'Step 5',
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight forwarding, prepare customs documentation, and track your shipment from factory to destination. You choose sea, air, or rail based on your timeline.',
    details: 'We handle export documentation, customs declarations, compliance checks, and shipment tracking. We can arrange door-to-door or port-to-port delivery.',
    imgId: 'how-step5-m4n5o6',
    titleId: 'how-step5-title',
    descId: 'how-step5-desc',
  },
  {
    id: 'step-6',
    icon: PackageCheck,
    step: 'Step 6',
    title: 'Ongoing Support',
    desc: "After your first order, we continue to support you — repeat orders, new product sourcing, supply chain adjustments, or quality improvements. We're your long-term sourcing partner.",
    details: 'Whether you need to reorder, source new products, adjust your supply chain, or resolve issues, we provide ongoing support to keep your sourcing running smoothly.',
    imgId: 'how-step6-p7q8r9',
    titleId: 'how-step6-title',
    descId: 'how-step6-desc',
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="how-page-title" className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h1>
          <p id="how-page-subtitle" className="text-primary-200 text-lg max-w-2xl">
            A clear, step-by-step process from your first inquiry to delivered goods — and beyond.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                <div className="lg:w-1/2 order-2 lg:order-1">
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}] [how-page-subtitle] [how-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-lg bg-neutral-200 object-cover"
                  />
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="w-8 h-8 bg-primary-50 rounded flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-primary-500" />
                    </div>
                    <span className="text-neutral-400 text-sm font-medium">{step.step}</span>
                  </div>
                  <h2 id={step.titleId} className="text-xl md:text-2xl font-bold text-neutral-800 mb-3">{step.title}</h2>
                  <p id={step.descId} className="text-neutral-500 text-sm md:text-base leading-relaxed mb-3">{step.desc}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">Ready to Get Started?</h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto mb-8">
            Submit your sourcing requirements and we'll respond with an initial assessment within 24 hours.
          </p>
          <Link
            to="/contact"
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md text-base font-semibold transition-colors inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
