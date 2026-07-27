import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  ArrowRight, MessageSquare, Search, FileCheck, Factory,
  ClipboardCheck, Ship, CheckCircle2
} from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: ['Product specifications & drawings', 'Target FOB/CIF price range', 'Order quantity & frequency', 'Required certifications'],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team researches the market, contacts potential factories, and creates a shortlist of 3-5 qualified suppliers that match your criteria.',
    details: ['Factory background checks', 'Production capability assessment', 'Price & MOQ comparison', 'Initial quality evaluation'],
  },
  {
    num: '03',
    icon: FileCheck,
    title: 'Samples & Negotiation',
    desc: 'We arrange product samples from shortlisted suppliers, coordinate shipping to you, and negotiate the best pricing and payment terms on your behalf.',
    details: ['Sample production & shipping', 'Quality comparison report', 'Price negotiation', 'Contract & payment terms'],
  },
  {
    num: '04',
    icon: Factory,
    title: 'Production Monitoring',
    desc: 'Once you place your order, we visit the factory regularly to monitor production progress, check quality at key stages, and send you detailed reports.',
    details: ['Weekly progress updates', 'Photo & video documentation', 'Timeline tracking', 'Issue escalation & resolution'],
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Before shipment, our QC team conducts a thorough pre-shipment inspection following AQL standards to ensure every unit meets your specifications.',
    details: ['AQL sampling inspection', 'Functionality & appearance checks', 'Packaging & labeling verification', 'Detailed inspection report'],
  },
  {
    num: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'We coordinate logistics from factory to your warehouse — handling freight booking, customs documentation, and tracking until delivery is confirmed.',
    details: ['Freight method selection', 'Customs documentation', 'Shipment tracking', 'Delivery confirmation'],
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How It Works
            </h1>
            <p className="text-lg text-white/80">
              Our proven 6-step sourcing process takes the complexity and risk out of buying from China. Here is exactly what happens when you work with us.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute left-7 top-16 bottom-0 w-px bg-neutral-200" />
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">
                      {step.num}
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-5 h-5 text-accent" />
                      <h2 className="text-xl md:text-2xl font-bold text-neutral-900">{step.title}</h2>
                    </div>
                    <p className="text-neutral-600 leading-relaxed mb-4">{step.desc}</p>
                    <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                      <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wide mb-2">What's included:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                            <span className="text-sm text-neutral-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What You Get
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Throughout the process, you receive full transparency and control.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-neutral-200 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Detailed Reports</h3>
              <p className="text-sm text-neutral-600">Photo-documented inspection and progress reports at every stage.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-neutral-200 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Direct Communication</h3>
              <p className="text-sm text-neutral-600">Your dedicated account manager is available via email, WhatsApp, or video call.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-neutral-200 text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Full Control</h3>
              <p className="text-sm text-neutral-600">You approve every decision — from supplier selection to final shipment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Submit your sourcing requirements and receive a free quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors"
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
