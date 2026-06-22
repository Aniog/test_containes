import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, FileText, Users, Truck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Request',
    desc: 'Fill out our inquiry form with your product requirements: specifications, target price, quantity, quality standards, and timeline. The more detail you provide, the more accurate our sourcing will be.',
    details: [
      'Product name and description',
      'Target unit price and MOQ',
      'Required certifications (CE, RoHS, etc.)',
      'Packaging and labeling requirements',
      'Delivery timeline',
    ],
    duration: '1 day',
    imgId: 'hiw-img-step1-a1b2c3',
    titleId: 'hiw-title-step1',
    descId: 'hiw-desc-step1',
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team researches the Chinese market to identify manufacturers that match your requirements. We evaluate suppliers based on production capability, quality track record, pricing, and reliability.',
    details: [
      'Market research across manufacturing hubs',
      'Initial supplier screening and qualification',
      'Price and MOQ negotiation',
      'Shortlist of 3–5 qualified suppliers',
      'Comparison report with recommendations',
    ],
    duration: '5–7 business days',
    imgId: 'hiw-img-step2-d4e5f6',
    titleId: 'hiw-title-step2',
    descId: 'hiw-desc-step2',
  },
  {
    number: '03',
    title: 'Factory Audit & Sample Approval',
    desc: 'Before you commit to an order, we conduct an on-site factory audit to verify the supplier\'s legitimacy, production capacity, and quality systems. We then arrange samples for your review and approval.',
    details: [
      'On-site factory visit and audit',
      'Business license and certification check',
      'Production capacity verification',
      'Sample arrangement and quality check',
      'Audit report with photos delivered to you',
    ],
    duration: '5–10 business days',
    imgId: 'hiw-img-step3-g7h8i9',
    titleId: 'hiw-title-step3',
    descId: 'hiw-desc-step3',
  },
  {
    number: '04',
    title: 'Order Placement & Production Monitoring',
    desc: 'Once you approve the sample and confirm the order, we manage the purchase order process and monitor production progress. We provide regular updates and flag any issues early.',
    details: [
      'Purchase order management',
      'Production schedule tracking',
      'Regular progress reports',
      'Issue identification and resolution',
      'Bilingual factory communication',
    ],
    duration: 'Throughout production',
    imgId: 'hiw-img-step4-j1k2l3',
    titleId: 'hiw-title-step4',
    descId: 'hiw-desc-step4',
  },
  {
    number: '05',
    title: 'Quality Inspection',
    desc: 'Before goods are shipped, our inspectors conduct a thorough pre-shipment inspection based on AQL standards. We check product quality, quantity, packaging, and labeling against your approved specifications.',
    details: [
      'Pre-shipment inspection (AQL standard)',
      'Product quality and functionality check',
      'Quantity and packaging verification',
      'Labeling and compliance check',
      'Inspection report with photos within 24 hours',
    ],
    duration: '1–2 days',
    imgId: 'hiw-img-step5-m4n5o6',
    titleId: 'hiw-title-step5',
    descId: 'hiw-desc-step5',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders to arrange shipment by sea, air, or express courier. We handle export documentation and provide tracking updates until your goods arrive.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Sea, air, or express shipping options',
      'Cargo consolidation if needed',
      'Shipment tracking and delivery updates',
    ],
    duration: 'Varies by shipping method',
    imgId: 'hiw-img-step6-p7q8r9',
    titleId: 'hiw-title-step6',
    descId: 'hiw-desc-step6',
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
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How We Source Products for You
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              A clear, structured process from your initial inquiry to goods delivered at your door. No surprises, no hidden steps.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-12 bg-white border-b border-brand-border">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map(({ number, title }) => (
              <div key={number} className="text-center">
                <div className="w-10 h-10 bg-brand-navy text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                  {number}
                </div>
                <p className="text-xs text-brand-muted font-medium leading-tight">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Detail */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <div className="space-y-16">
            {steps.map(({ number, title, desc, details, duration, imgId, titleId, descId }, index) => (
              <div
                key={number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-brand-navy text-white rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0">
                      {number}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-brand-muted">
                      <Clock className="w-4 h-4" />
                      <span>{duration}</span>
                    </div>
                  </div>
                  <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">{title}</h2>
                  <p id={descId} className="text-brand-muted leading-relaxed mb-6">{desc}</p>
                  <ul className="space-y-2">
                    {details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-brand-dark">
                        <CheckCircle className="w-4 h-4 text-brand-success flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden bg-gray-100 aspect-video ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-navy">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Submit your requirements and we'll get back to you within 24 hours with a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
