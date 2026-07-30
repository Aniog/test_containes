import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight, Clock, FileText, Search, Factory, Package, Truck } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';

const steps = [
  {
    step: '01',
    icon: FileText,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — specifications, target quantity, budget, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name and description',
      'Target quantity and MOQ',
      'Quality standards and certifications required',
      'Target unit price or budget',
      'Delivery timeline',
    ],
    duration: '5 minutes',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
    imgId: 'hiw-step1-img-a1b2c3',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team researches our supplier database and industry contacts to identify manufacturers that match your requirements. We screen suppliers on quality, capacity, pricing, and reliability before presenting a shortlist.',
    details: [
      'Database and market research',
      'Initial supplier screening calls',
      'Price and MOQ comparison',
      'Shortlist of 3–5 qualified suppliers',
      'Comparative supplier report delivered to you',
    ],
    duration: '5–10 business days',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
    imgId: 'hiw-step2-img-d4e5f6',
  },
  {
    step: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'For shortlisted suppliers, we conduct on-site factory audits to verify their production capabilities, quality systems, and business legitimacy. You receive a detailed written report with photos and our recommendation.',
    details: [
      'On-site factory visit by our team',
      'Business license and certification check',
      'Production capacity and equipment review',
      'Quality management system assessment',
      'Detailed audit report with photos',
    ],
    duration: '3–5 business days per factory',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
    imgId: 'hiw-step3-img-g7h8i9',
  },
  {
    step: '04',
    icon: Package,
    title: 'Sample Procurement & Approval',
    desc: 'Once you select a supplier, we arrange sample production and conduct a quality check before shipping samples to you. We provide feedback to the factory and manage revisions until you are satisfied.',
    details: [
      'Sample order placement and follow-up',
      'Sample quality inspection at factory',
      'Photo and video documentation',
      'Sample shipment to your location',
      'Revision management if needed',
    ],
    duration: '2–4 weeks',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
    imgId: 'hiw-step4-img-j1k2l3',
  },
  {
    step: '05',
    icon: CheckCircle,
    title: 'Production Monitoring & QC',
    desc: 'After sample approval and order placement, we monitor production progress, conduct in-line inspections, and perform a full pre-shipment inspection before goods are loaded. Any issues are flagged and resolved before shipment.',
    details: [
      'Production schedule tracking',
      'In-line quality inspection',
      'Pre-shipment inspection (PSI)',
      'Defect reporting and resolution',
      'Final approval before loading',
    ],
    duration: 'Throughout production',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
    imgId: 'hiw-step5-img-m4n5o6',
  },
  {
    step: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to arrange sea or air freight, prepare all export documentation, and track your shipment from the factory to your destination. We keep you updated at every stage.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Sea freight or air freight booking',
      'Shipment tracking and updates',
      'Customs clearance support',
    ],
    duration: '2–6 weeks (sea freight)',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
    imgId: 'hiw-step6-img-p7q8r9',
  },
];

const whyUs = [
  { title: 'China-Based Team', desc: 'Our team is on the ground in China, with direct access to factories and local market knowledge.' },
  { title: 'Transparent Reporting', desc: 'You receive detailed reports, photos, and updates at every stage — no black boxes.' },
  { title: 'Independent QC', desc: 'Our quality inspectors work for you, not the factory. Their job is to protect your interests.' },
  { title: 'Fixed, Clear Pricing', desc: 'We quote fees upfront. No hidden charges or surprise invoices.' },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-gold text-xs font-bold uppercase tracking-widest mb-3">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We Source for You
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            A clear, structured process from your first inquiry to goods arriving at your warehouse.
          </p>
          <CTAButton to="/contact" variant="primary" showArrow>
            Start Your Sourcing Project
          </CTAButton>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map(({ step, icon: Icon, title, desc, details, duration, imgId, titleId, descId }, index) => (
              <div key={step} className={`grid lg:grid-cols-2 gap-10 items-center`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-brand-gold font-bold text-4xl leading-none">{step}</span>
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                  </div>
                  <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">{title}</h2>
                  <p id={descId} className="text-gray-500 leading-relaxed mb-5">{desc}</p>
                  <ul className="space-y-2 mb-5">
                    {details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue text-sm font-medium px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4" />
                    Typical duration: {duration}
                  </div>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-lg aspect-[4/3] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Why SSourcing China"
            title="What Makes Our Process Different"
            subtitle="We don't just find suppliers — we manage the entire process so you can focus on your business."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ title, desc }) => (
              <div key={title} className="bg-brand-bg rounded-xl p-6 border border-gray-100">
                <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-brand-dark font-bold text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-red-100 mb-8">
            Submit your sourcing inquiry today. Our team will review your requirements and respond within 24 hours.
          </p>
          <CTAButton to="/contact" variant="white" showArrow>
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
