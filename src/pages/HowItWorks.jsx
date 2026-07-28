import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, MessageSquare, Search, Factory, ShieldCheck, ClipboardCheck, Truck, FileCheck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Request',
    description: 'Fill out our inquiry form with your product details — specifications, target price, quantity, timeline, and any compliance requirements. The more detail you provide, the better we can match you with the right supplier.',
    details: [
      'Product name, category, and specifications',
      'Target unit price and order quantity',
      'Required certifications (CE, RoHS, FDA, etc.)',
      'Delivery timeline and destination',
    ],
    imgId: 'hiw-step1-img-1a2b3c',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    description: 'Our sourcing team researches the Chinese market and identifies 3–5 qualified manufacturers. We evaluate each supplier on production capability, pricing, certifications, and export experience.',
    details: [
      'Market research across all major manufacturing hubs',
      'Supplier evaluation against your criteria',
      'Price comparison and benchmarking',
      'Shortlist report delivered within 5–10 business days',
    ],
    imgId: 'hiw-step2-img-4d5e6f',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    description: 'We conduct document-based or on-site audits to verify supplier legitimacy, production capacity, and compliance. You receive a detailed audit report before making any commitment.',
    details: [
      'Business license and export record verification',
      'On-site facility inspection with photos',
      'Production capacity and equipment assessment',
      'Audit report with risk rating and recommendation',
    ],
    imgId: 'hiw-step3-img-7g8h9i',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    number: '04',
    icon: FileCheck,
    title: 'Sample Review & Approval',
    description: 'We arrange samples from your selected supplier, inspect them against your specifications, and provide a detailed sample report. You approve the sample before production begins.',
    details: [
      'Sample arrangement and coordination',
      'Physical inspection against specifications',
      'Sample report with photos and measurements',
      'Feedback communication to supplier',
    ],
    imgId: 'hiw-step4-img-1j2k3l',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Production Monitoring',
    description: 'Once production begins, we monitor progress through regular check-ins and on-site visits. We identify and resolve issues early to prevent delays and quality problems.',
    details: [
      'Regular production status updates',
      'On-site visits at key production milestones',
      'Issue identification and resolution',
      'Timeline tracking and delay prevention',
    ],
    imgId: 'hiw-step5-img-4m5n6o',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    number: '06',
    icon: ShieldCheck,
    title: 'Pre-Shipment Inspection',
    description: 'Before goods leave the factory, our QC inspectors conduct a final inspection using AQL sampling standards. Only goods that pass inspection are released for shipment.',
    details: [
      'AQL-based sampling inspection',
      'Detailed inspection report with photos',
      'Pass/fail decision with clear criteria',
      'Defect documentation and supplier follow-up',
    ],
    imgId: 'hiw-step6-img-7p8q9r',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
  {
    number: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate with freight forwarders to arrange shipment, prepare export documentation, and track your goods until they arrive at your destination.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Shipment booking and tracking',
      'Delivery confirmation and handover',
    ],
    imgId: 'hiw-step7-img-2s3t4u',
    titleId: 'hiw-step7-title',
    descId: 'hiw-step7-desc',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Our Process
          </span>
          <h1 id="hiw-page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Our Sourcing Process Works
          </h1>
          <p id="hiw-page-subtitle" className="text-gray-300 text-lg max-w-2xl mx-auto">
            A structured, transparent 7-step process that takes you from initial inquiry to goods delivered — with full visibility at every stage.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="text-5xl font-black text-brand-blue/15 leading-none">{step.number}</div>
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-blue" />
                      </div>
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                      {step.title}
                    </h2>
                    <p id={step.descId} className="text-brand-mid leading-relaxed mb-6">{step.description}</p>
                    <ul className="space-y-2.5">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm text-brand-mid">
                          <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-lg ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}] [hiw-page-subtitle] [hiw-page-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-blue-200 mb-8">
            Submit your inquiry and we'll get back to you within 24 hours with a free assessment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
