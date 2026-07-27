import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import InquiryForm from '@/components/home/InquiryForm';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    desc: 'Fill in our online inquiry form with your product details, target price, quantity, quality requirements, and any certifications needed. The more detail you provide, the better we can match you with the right supplier.',
    details: [
      'Product name, description, and specifications',
      'Target unit price and total budget',
      'Required quantity (MOQ and order volume)',
      'Packaging and labeling requirements',
      'Certifications needed (CE, FDA, etc.)',
    ],
    imgId: 'hiw-step1-img-2a4b6c',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified supplier database and conducts targeted outreach to identify manufacturers that match your requirements. We shortlist 3–5 suppliers and provide you with detailed profiles for review.',
    details: [
      'Database search across 10,000+ verified suppliers',
      'Targeted outreach to new manufacturers',
      'Background checks and business verification',
      'Price and MOQ comparison',
      'Supplier profile report delivered within 5–10 days',
    ],
    imgId: 'hiw-step2-img-8d3e1f',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    number: '03',
    title: 'Factory Audit & Sample Approval',
    desc: 'For shortlisted suppliers, we conduct on-site factory audits to verify their legitimacy, production capacity, and quality systems. We then arrange product samples for your review and approval before any order is placed.',
    details: [
      'On-site factory visit and audit',
      'Business license and certification check',
      'Production capacity and equipment assessment',
      'Sample production coordination',
      'Detailed audit report with photos',
    ],
    imgId: 'hiw-step3-img-5f7a2d',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    number: '04',
    title: 'Order Placement & Contract',
    desc: 'Once you approve the supplier and samples, we assist with contract negotiation, payment terms, and order placement. We ensure all terms are clearly documented to protect your interests.',
    details: [
      'Contract review and negotiation support',
      'Payment terms and schedule',
      'Production timeline confirmation',
      'Order confirmation documentation',
      'Deposit payment coordination',
    ],
    imgId: 'hiw-step4-img-3c9b4e',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    number: '05',
    title: 'Production Monitoring',
    desc: 'During manufacturing, our team monitors production milestones, communicates with the factory in Chinese, and sends you regular progress updates. Any issues are flagged and resolved promptly.',
    details: [
      'Production milestone tracking',
      'Weekly progress reports',
      'Factory communication in Chinese',
      'Issue identification and resolution',
      'Timeline management and alerts',
    ],
    imgId: 'hiw-step5-img-7e1d5a',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    number: '06',
    title: 'Quality Inspection',
    desc: 'Before goods are shipped, our QC inspectors conduct a thorough pre-shipment inspection. We check product quality, quantity, packaging, and labeling against your specifications and provide a detailed report.',
    details: [
      'Pre-shipment inspection (PSI)',
      'AQL sampling methodology',
      'Product specification compliance check',
      'Packaging and labeling verification',
      'Detailed QC report with photos',
    ],
    imgId: 'hiw-step6-img-4b8c2f',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
  {
    number: '07',
    title: 'Shipping & Delivery',
    desc: 'We coordinate with trusted freight forwarders to arrange sea or air freight, prepare all export documentation, and ensure your goods are delivered to your destination on time and in good condition.',
    details: [
      'Sea freight (FCL/LCL) or air freight',
      'Export documentation preparation',
      'Customs clearance support',
      'Cargo insurance arrangement',
      'Delivery tracking and updates',
    ],
    imgId: 'hiw-step7-img-9a3f1b',
    titleId: 'hiw-step7-title',
    descId: 'hiw-step7-desc',
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            How It Works
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A clear, step-by-step process designed to take the complexity out of China sourcing — from your first inquiry to final delivery.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.number}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{step.number}</span>
                      </div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Step {step.number}</span>
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
                      {step.title}
                    </h2>
                    <p id={step.descId} className="text-gray-600 leading-relaxed mb-5">{step.desc}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-sm ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={step.title}
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-blue-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Submit your inquiry today and our team will get back to you within 1 business day.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <InquiryForm />
    </div>
  );
};

export default HowItWorks;
