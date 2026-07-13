import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight } from 'lucide-react';
import CTABanner from '../components/shared/CTABanner';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Inquiry',
    description:
      'Fill out our inquiry form with your product requirements — type, specifications, target price, quantity, and any certifications needed. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Product description and specifications',
      'Target unit price and budget',
      'Required quantity (MOQ and order volume)',
      'Certifications or compliance requirements',
      'Preferred delivery timeline',
    ],
    imgId: 'hiw-step1-img-1a2b3c',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    number: '02',
    title: 'We Research and Shortlist Suppliers',
    description:
      'Our team searches our verified supplier database and conducts fresh market research to identify manufacturers that match your requirements. We typically present 3–5 qualified options within 5–10 business days.',
    details: [
      'Database search across verified suppliers',
      'Fresh market research for your product category',
      'Initial supplier qualification check',
      'Price and MOQ comparison',
      'Shortlist report with supplier profiles',
    ],
    imgId: 'hiw-step2-img-2b3c4d',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    number: '03',
    title: 'Factory Audit and Verification',
    description:
      'Before recommending any supplier, we conduct an on-site factory audit. We verify business registration, production capacity, equipment, certifications, and quality management systems. You receive a detailed audit report.',
    details: [
      'On-site factory visit by our team',
      'Business license and registration check',
      'Production capacity assessment',
      'Quality management system review',
      'Audit report with photos within 48 hours',
    ],
    imgId: 'hiw-step3-img-3c4d5e',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    number: '04',
    title: 'Sample Production and Approval',
    description:
      'Once you select a supplier, we coordinate sample production. We inspect the samples against your specifications and send you a detailed report with photos. Production only begins after you approve the samples.',
    details: [
      'Sample order coordination with factory',
      'Sample inspection against specifications',
      'Photo documentation and measurement report',
      'Feedback communication to factory',
      'Production approval sign-off',
    ],
    imgId: 'hiw-step4-img-4d5e6f',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    number: '05',
    title: 'Production Monitoring',
    description:
      'During production, we maintain regular contact with the factory, track milestones, and conduct during-production inspections. You receive regular updates so you always know the status of your order.',
    details: [
      'Production schedule tracking',
      'Regular milestone updates with photos',
      'During-production inspection (DUPRO)',
      'Issue identification and resolution',
      'Direct communication with factory management',
    ],
    imgId: 'hiw-step5-img-5e6f7a',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    number: '06',
    title: 'Quality Inspection and Shipment',
    description:
      'Before goods leave the factory, we conduct a pre-shipment inspection using AQL sampling standards. We also supervise container loading. Once goods pass inspection, we coordinate with freight forwarders for shipment.',
    details: [
      'Pre-shipment inspection (PSI) with AQL sampling',
      'Container loading supervision',
      'Export documentation preparation',
      'Freight forwarder coordination',
      'Shipment tracking and delivery updates',
    ],
    imgId: 'hiw-step6-img-6f7a8b',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">
              How Our Sourcing Process Works
            </h1>
            <p className="text-slate-300 text-lg mt-4 leading-relaxed">
              A transparent, structured 6-step process designed to reduce risk and give you full
              visibility at every stage of your sourcing project.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress indicator */}
          <div className="hidden md:flex items-center justify-center mb-16 gap-0">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-16 h-0.5 bg-slate-200" />
                )}
              </div>
            ))}
          </div>

          <div className="space-y-20">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white text-sm font-bold shrink-0">
                        {step.number}
                      </div>
                      <span className="text-sm font-semibold text-brand-blue uppercase tracking-widest">
                        Step {step.number}
                      </span>
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {step.title}
                    </h2>
                    <p id={step.descId} className="text-slate-600 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-3 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-slate-100 aspect-video ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      alt={step.title}
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="700"
                      src="data:,"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Start Your Sourcing Project?"
        subtitle="Submit your requirements and we'll get back to you within 24 hours with a plan."
        buttonText="Get a Free Sourcing Quote"
        buttonLink="/contact"
      />
    </div>
  );
}
