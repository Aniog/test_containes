import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const steps = [
  {
    num: '01',
    title: 'Submit Your Sourcing Inquiry',
    imgId: 'hiw-img-step1-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
    desc: 'Fill out our sourcing inquiry form with your product requirements — type, quantity, target price, quality standards, and any certifications needed. The more detail you provide, the more accurate our sourcing will be.',
    details: [
      'Product name and specifications',
      'Target unit price and MOQ',
      'Required certifications (CE, FDA, etc.)',
      'Delivery timeline',
      'Destination country',
    ],
    duration: 'Day 1',
  },
  {
    num: '02',
    title: 'Supplier Research & Shortlisting',
    imgId: 'hiw-img-step2-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
    desc: 'Our team searches our verified supplier network and industry databases to identify manufacturers that match your requirements. We contact suppliers, request initial quotes, and shortlist the 3–5 best candidates.',
    details: [
      'Search across verified supplier databases',
      'Contact and qualify potential suppliers',
      'Request initial pricing and lead times',
      'Shortlist 3–5 best-fit manufacturers',
      'Deliver a supplier comparison report',
    ],
    duration: 'Days 2–7',
  },
  {
    num: '03',
    title: 'Factory Audit & Verification',
    imgId: 'hiw-img-step3-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
    desc: 'For shortlisted suppliers, we conduct on-site factory audits to verify their legitimacy, production capacity, equipment, and quality management systems. This step is critical for protecting your investment.',
    details: [
      'On-site visit to factory premises',
      'Business license and registration check',
      'Production capacity and equipment review',
      'Quality management system assessment',
      'Detailed audit report with photos',
    ],
    duration: 'Days 5–10',
  },
  {
    num: '04',
    title: 'Sample Arrangement & Approval',
    imgId: 'hiw-img-step4-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
    desc: 'We coordinate sample production with the selected supplier and review samples against your specifications before shipping them to you. If revisions are needed, we manage the process until you are satisfied.',
    details: [
      'Coordinate sample production with supplier',
      'Review samples against specifications',
      'Document any deviations or issues',
      'Manage revision rounds with supplier',
      'Ship approved samples to buyer',
    ],
    duration: 'Weeks 2–4',
  },
  {
    num: '05',
    title: 'Production Monitoring & QC',
    imgId: 'hiw-img-step5-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
    desc: 'Once production begins, we monitor progress with regular factory visits and status updates. Quality inspections are conducted at key milestones — during production and before shipment — to catch any issues early.',
    details: [
      'Weekly production status updates',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'AQL sampling and defect reporting',
      'Issue escalation and resolution',
    ],
    duration: 'During production',
  },
  {
    num: '06',
    title: 'Shipping & Delivery Coordination',
    imgId: 'hiw-img-step6-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
    desc: 'After goods pass inspection, we coordinate with freight forwarders to arrange shipment. We review export documentation, track the shipment, and keep you informed until your goods arrive at the destination port or warehouse.',
    details: [
      'Freight forwarder coordination',
      'Export documentation review',
      'Sea or air freight arrangement',
      'Shipment tracking and updates',
      'Customs clearance guidance',
    ],
    duration: 'Post-production',
  },
];

export default function HowItWorksPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-red-300 text-sm font-semibold uppercase tracking-widest mb-4">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Source for You — Step by Step
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              A transparent, structured process that takes you from initial inquiry to goods delivered — with clear communication and accountability at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={step.num} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">{step.num}</span>
                      <span className="text-text-muted text-sm">{step.duration}</span>
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-primary mb-4">{step.title}</h2>
                    <p id={step.descId} className="text-text-muted leading-relaxed mb-6">{step.desc}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-text-dark">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden bg-gray-100 h-72 lg:h-80 ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-light-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Get Started"
            title="Ready to Begin Your Sourcing Project?"
            subtitle="Submit your inquiry today and receive a free sourcing quote within 24 hours."
          />
          <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
