import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/shared';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    num: '01',
    title: 'Submit Your Sourcing Request',
    desc: 'Tell us what you need — product specs, target price, quantity, and timeline. We review your requirements within 24 hours.',
  },
  {
    num: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our verified network and conducts fresh market research to identify 3–5 qualified suppliers for your review.',
  },
  {
    num: '03',
    title: 'Factory Audit & Verification',
    desc: 'We visit shortlisted factories in person to verify credentials, capacity, and quality systems before you place any order.',
  },
  {
    num: '04',
    title: 'Sampling & Approval',
    desc: 'We coordinate sample production, inspect samples against your specs, and ship them to you for final approval.',
  },
  {
    num: '05',
    title: 'Production Monitoring',
    desc: 'Once you confirm the order, we follow up with the factory at key milestones and conduct mid-production inspections.',
  },
  {
    num: '06',
    title: 'QC Inspection & Shipping',
    desc: 'Pre-shipment inspection is conducted before goods leave the factory. We then coordinate freight and send you all documents.',
  },
];

const HomeSourcingProcess = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Process"
          title="How We Source for You"
          subtitle="A structured, transparent process designed to reduce risk and deliver results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {steps.map((step) => (
            <div key={step.num} className="relative bg-bg-light rounded-xl p-6 border border-gray-100">
              <span className="text-5xl font-bold text-gray-100 absolute top-4 right-5 select-none">
                {step.num}
              </span>
              <div className="relative z-10">
                <div className="w-8 h-8 bg-blue-navy rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xs font-bold">{step.num}</span>
                </div>
                <h3 className="text-base font-semibold text-blue-navy mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual */}
        <div className="rounded-2xl overflow-hidden relative h-64 md:h-80">
          <div
            className="absolute inset-0"
            data-strk-bg-id="process-bg-d4e5f6"
            data-strk-bg="[process-section-subtitle] [process-section-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
          />
          <div className="absolute inset-0 bg-blue-navy/60" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <p id="process-section-title" className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Start Sourcing?
            </p>
            <p id="process-section-subtitle" className="text-gray-200 mb-6 max-w-lg">
              Submit your sourcing request today and receive a tailored supplier shortlist within 5 business days.
            </p>
            <Link
              to="/contact"
              className="bg-red-china hover:bg-[#a93226] text-white font-semibold px-7 py-3 rounded-lg transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSourcingProcess;
