import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2, MessageSquare, Search, ClipboardCheck, Ship } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Submit Your Requirements',
    description: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and timeline. The more detail you provide, the better we can match you with the right suppliers.',
    details: ['Product specifications & drawings', 'Target FOB/CIF price', 'Order quantity & MOQ flexibility', 'Required certifications', 'Delivery timeline'],
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlisting',
    description: 'Our team researches potential suppliers from our database and the broader market. We contact factories, verify basic credentials, and request quotations on your behalf.',
    details: ['Search our 500+ supplier database', 'Market research for new suppliers', 'Initial credential verification', 'Request and compare quotations', 'Provide shortlist with recommendations'],
    icon: <Search className="w-6 h-6" />,
  },
  {
    number: '03',
    title: 'Factory Audit & Sampling',
    description: 'We visit shortlisted factories to verify their capabilities. Once you select a supplier, we arrange samples and manage revisions until you approve.',
    details: ['On-site factory audit', 'Production capacity verification', 'Sample arrangement & follow-up', 'Sample review and feedback relay', 'Final supplier selection support'],
    icon: <ClipboardCheck className="w-6 h-6" />,
  },
  {
    number: '04',
    title: 'Order Placement & Production',
    description: 'We help negotiate final terms, review contracts, and monitor production progress. Regular updates keep you informed at every stage.',
    details: ['Contract review & negotiation', 'Order placement confirmation', 'Production timeline tracking', 'Weekly progress reports with photos', 'Issue identification & resolution'],
    icon: <ClipboardCheck className="w-6 h-6" />,
  },
  {
    number: '05',
    title: 'Quality Inspection',
    description: 'Before shipment, we conduct thorough quality inspections at the factory following AQL standards. You receive a detailed report with photos.',
    details: ['Pre-shipment inspection (PSI)', 'AQL sampling methodology', 'Detailed photo report', 'Pass/fail recommendation', 'Rework coordination if needed'],
    icon: <ClipboardCheck className="w-6 h-6" />,
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate with freight forwarders, prepare export documents, and track your shipment until it arrives at your destination.',
    details: ['Freight forwarder selection', 'Export documentation', 'Container loading supervision', 'Shipment tracking updates', 'Delivery confirmation'],
    icon: <Ship className="w-6 h-6" />,
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="hiw-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            How It Works
          </h1>
          <p id="hiw-page-subtitle" className="mt-4 text-gray-300 text-lg max-w-2xl">
            Our structured 6-step process takes you from initial inquiry to delivered goods — with full transparency at every stage.
          </p>
        </div>
      </section>

      {/* Process Visual */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20 bottom-0 w-0.5 bg-gray-200" />
                )}
                <div className="flex gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-brand-orange text-white rounded-full flex items-center justify-center text-lg font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-3">{step.title}</h3>
                    <p className="text-brand-gray leading-relaxed mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-brand-dark">
                          <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                          {detail}
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

      {/* Timeline Summary */}
      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark text-center mb-10">
            Typical Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="text-2xl font-bold text-brand-orange mb-1">Week 1-2</div>
              <div className="text-sm text-brand-dark font-medium">Supplier Research</div>
              <p className="text-xs text-brand-gray mt-1">Shortlist 3-5 qualified factories</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="text-2xl font-bold text-brand-orange mb-1">Week 3-4</div>
              <div className="text-sm text-brand-dark font-medium">Audit & Sampling</div>
              <p className="text-xs text-brand-gray mt-1">Factory visit + sample production</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="text-2xl font-bold text-brand-orange mb-1">Week 5-8</div>
              <div className="text-sm text-brand-dark font-medium">Production</div>
              <p className="text-xs text-brand-gray mt-1">Manufacturing + quality monitoring</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
              <div className="text-2xl font-bold text-brand-orange mb-1">Week 9-12</div>
              <div className="text-sm text-brand-dark font-medium">Inspection & Shipping</div>
              <p className="text-xs text-brand-gray mt-1">Final QC + freight to destination</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Start Your Sourcing Project Today
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Submit your requirements and we'll get back to you within 24 hours with a sourcing plan.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
