import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, MessageSquare, Search, FileText, Package, ClipboardCheck, Truck } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and timeline. The more detail you provide, the better we can match you with the right suppliers.',
    details: ['Product specifications & drawings', 'Target FOB/CIF price', 'Minimum order quantity', 'Required certifications', 'Delivery timeline'],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches the market, contacts potential suppliers, and creates a shortlist of 3-5 qualified manufacturers. We verify basic credentials before presenting options to you.',
    details: ['Market research across supplier databases', 'Initial supplier screening', 'Price & capability comparison', 'Shortlist presentation with recommendations'],
  },
  {
    num: '03',
    icon: FileText,
    title: 'Samples & Negotiation',
    desc: 'We coordinate sample production, manage communication with suppliers, and negotiate the best pricing and terms on your behalf. You approve samples before we proceed.',
    details: ['Sample request & follow-up', 'Quality evaluation of samples', 'Price & MOQ negotiation', 'Payment term structuring', 'Contract preparation'],
  },
  {
    num: '04',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    desc: 'Once you place the order, we monitor production progress and conduct inspections at critical stages to ensure your goods meet specifications.',
    details: ['Production timeline monitoring', 'Weekly progress reports', 'In-line quality inspections', 'Pre-shipment final inspection', 'Defect resolution management'],
  },
  {
    num: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate the entire logistics process — from factory pickup to customs clearance and final delivery at your warehouse or port.',
    details: ['Freight forwarder coordination', 'Export documentation', 'Customs clearance support', 'Shipment tracking updates', 'Delivery confirmation'],
  },
];

const HowItWorks = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            How It Works
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Our structured 5-step process keeps you informed and in control from initial inquiry to final delivery.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute left-6 top-16 bottom-0 w-0.5 bg-brand-border" />
                )}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-brand-orange font-bold text-sm">STEP {step.num}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-text mb-3">{step.title}</h2>
                    <p className="text-brand-muted leading-relaxed mb-4">{step.desc}</p>
                    <div className="bg-white rounded-xl border border-brand-border p-5">
                      <p className="text-sm font-semibold text-brand-text mb-3">What's included:</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-brand-muted text-sm">{detail}</span>
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

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-brand-blue mb-2">24h</div>
              <p className="text-brand-muted text-sm">Average response time to new inquiries</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-brand-blue mb-2">5-7 days</div>
              <p className="text-brand-muted text-sm">Typical supplier shortlist delivery</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-brand-blue mb-2">Weekly</div>
              <p className="text-brand-muted text-sm">Production progress reports during manufacturing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-navy text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Sourcing Project Today</h2>
          <p className="text-slate-300 mb-8">Submit your requirements and receive a free sourcing plan within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
