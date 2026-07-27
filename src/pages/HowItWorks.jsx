import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product specifications, target price, quantity, quality standards, and timeline. The more detail you provide, the better we can match you with the right suppliers.',
    highlights: ['Product specs & drawings', 'Target FOB/CIF price', 'MOQ & order quantity', 'Quality certifications needed'],
    imgId: 'hiw-step1-img-4a2c7e',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    step: '02',
    title: 'Supplier Identification & Shortlisting',
    desc: 'Our sourcing team searches our database and visits markets to identify 3-5 qualified factories. We evaluate each against your criteria and present a shortlist with detailed profiles.',
    highlights: ['Factory capability assessment', 'Price comparison matrix', 'Certification verification', 'Production capacity check'],
    imgId: 'hiw-step2-img-8b5d3f',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    step: '03',
    title: 'Samples & Factory Audit',
    desc: 'We arrange product samples from shortlisted suppliers and conduct on-site factory audits. You receive samples along with our detailed audit report to make an informed decision.',
    highlights: ['Sample procurement & shipping', 'On-site factory visit', 'Quality system evaluation', 'Detailed audit report'],
    imgId: 'hiw-step3-img-1c9e6a',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    step: '04',
    title: 'Order Placement & Production',
    desc: 'Once you approve a supplier, we help negotiate final terms, place the order, and monitor production. You receive regular progress updates with photos and timeline tracking.',
    highlights: ['Contract negotiation', 'Payment coordination', 'Weekly progress reports', 'Production timeline tracking'],
    imgId: 'hiw-step4-img-5f8a2d',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    step: '05',
    title: 'Quality Inspection & Shipping',
    desc: 'Before shipment, our QC team performs a thorough pre-shipment inspection. Once approved, we coordinate logistics to deliver goods safely to your warehouse.',
    highlights: ['AQL-based inspection', 'Defect documentation', 'Freight booking & tracking', 'Customs documentation'],
    imgId: 'hiw-step5-img-9d4b7c',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
];

const HowItWorks = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current);
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="bg-brand-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            How It Works
          </h1>
          <p className="text-lg text-brand-gray-600 max-w-2xl mx-auto">
            Our 5-step sourcing process is designed to be transparent, efficient, and low-risk for buyers at every stage.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, idx) => (
              <div
                key={step.step}
                className={`grid lg:grid-cols-2 gap-10 items-center`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 bg-brand-navy text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </span>
                    <span className="text-xs font-medium text-brand-gray-400 uppercase tracking-wider">Step {step.step}</span>
                  </div>
                  <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
                    {step.title}
                  </h2>
                  <p id={step.descId} className="text-brand-gray-600 leading-relaxed mb-6">
                    {step.desc}
                  </p>
                  <ul className="space-y-2 list-none p-0 m-0">
                    {step.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                        <span className="text-sm text-brand-gray-600">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl overflow-hidden shadow-md ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={step.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-navy text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Start Your Sourcing Project Today
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Submit your requirements and receive supplier options within 5-10 business days.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-orange text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-orange-600 transition-colors no-underline"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
