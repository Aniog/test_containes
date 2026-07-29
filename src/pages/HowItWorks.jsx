import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, Clock, FileText, Users, Zap } from 'lucide-react';
import CTABanner from '@/components/layout/CTABanner';

const steps = [
  {
    num: '01',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — type, quantity, target price, quality standards, and destination country. The more detail you provide, the faster we can match you with the right suppliers.',
    details: ['Product specifications and photos', 'Target unit price and MOQ', 'Destination country and Incoterms', 'Timeline and any compliance requirements'],
    duration: '5 minutes',
    imgId: 'step1-img-a1b2c3',
    titleId: 'step1-title',
    descId: 'step1-desc',
  },
  {
    num: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our supplier network, trade databases, and industry contacts to identify manufacturers that match your requirements. We shortlist 3–5 qualified suppliers and prepare a comparison report.',
    details: ['Database and trade show sourcing', 'Initial supplier screening calls', 'Price and MOQ comparison', 'Supplier profile report delivered to you'],
    duration: '5–10 business days',
    imgId: 'step2-img-d4e5f6',
    titleId: 'step2-title',
    descId: 'step2-desc',
  },
  {
    num: '03',
    title: 'Factory Verification',
    desc: 'Before you commit to any supplier, we conduct a factory audit — on-site or via video — to verify business registration, production capabilities, certifications, and working conditions.',
    details: ['Business license verification', 'On-site or video factory audit', 'Production capacity assessment', 'Detailed audit report with photos'],
    duration: '3–5 business days',
    imgId: 'step3-img-g7h8i9',
    titleId: 'step3-title',
    descId: 'step3-desc',
  },
  {
    num: '04',
    title: 'Sampling & Approval',
    desc: 'We arrange samples from your chosen supplier, inspect them against your specifications, and ship them to you for final approval. We manage all communication with the factory during this stage.',
    details: ['Sample request and coordination', 'Sample inspection before shipping', 'Express courier to your location', 'Revision requests managed on your behalf'],
    duration: '1–3 weeks',
    imgId: 'step4-img-j1k2l3',
    titleId: 'step4-title',
    descId: 'step4-desc',
  },
  {
    num: '05',
    title: 'Production Monitoring & QC',
    desc: 'Once production begins, we monitor progress, communicate with the factory in Chinese, and conduct quality inspections at key milestones. You receive regular updates and photo reports.',
    details: ['Production schedule tracking', 'In-line and pre-shipment inspections', 'AQL-based quality sampling', 'Issue escalation and resolution'],
    duration: 'Throughout production',
    imgId: 'step5-img-m4n5o6',
    titleId: 'step5-title',
    descId: 'step5-desc',
  },
  {
    num: '06',
    title: 'Shipping & Delivery',
    desc: 'After goods pass inspection, we coordinate with freight forwarders, prepare export documentation, and manage customs requirements. We support sea freight, air freight, and express courier.',
    details: ['Freight forwarder coordination', 'Export documentation preparation', 'Customs clearance support', 'Shipment tracking until delivery'],
    duration: 'Varies by destination',
    imgId: 'step6-img-p7q8r9',
    titleId: 'step6-title',
    descId: 'step6-desc',
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            How We Source for You
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A clear, structured process from your first inquiry to final delivery. No guesswork, no surprises.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="bg-brand-light py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-brand-gold font-bold text-sm">{step.num}</span>
                </div>
                <p className="text-brand-navy font-semibold text-xs">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.num}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-navy rounded-lg flex items-center justify-center">
                        <span className="text-brand-gold font-bold text-sm">{step.num}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-brand-gray">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </div>
                    </div>
                    <h2 id={step.titleId} className="text-3xl font-bold text-brand-navy mb-4">{step.title}</h2>
                    <p id={step.descId} className="text-brand-gray leading-relaxed mb-6">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-brand-gray">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-lg h-72 lg:h-80 bg-gray-100 ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={step.title}
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="bg-brand-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Transparent Pricing</h2>
          <p className="text-brand-gray mb-8 leading-relaxed">
            We offer flexible pricing models to suit different sourcing needs. All fees are agreed upfront — no hidden charges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Project Fee', desc: 'A flat fee per sourcing project, ideal for one-time or occasional buyers.' },
              { title: 'Order Commission', desc: 'A percentage of the order value, aligned with your success.' },
              { title: 'Monthly Retainer', desc: 'For ongoing sourcing needs, a monthly fee covering all services.' },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-brand-navy text-lg mb-2">{p.title}</h3>
                <p className="text-brand-gray text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-brand-gray text-sm mt-6">
            Contact us for a tailored quote based on your specific requirements.
          </p>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default HowItWorks;
