import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, Clock, MessageSquare } from 'lucide-react';
import SectionHero from '@/components/shared/SectionHero';
import CtaBanner from '@/components/shared/CtaBanner';

const steps = [
  {
    number: '01',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product details — what you need, your target price, quantity, destination, and any specific requirements. The more detail you provide, the faster we can help.',
    details: [
      'Product name and description',
      'Target unit price and total budget',
      'Required quantity (MOQ)',
      'Destination country and timeline',
      'Any certifications or compliance requirements',
    ],
    time: 'Day 1',
    imgId: 'hiw-step1-img-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    number: '02',
    title: 'Initial Consultation',
    desc: 'Within 24 hours, your dedicated sourcing manager will review your inquiry and schedule a call or email exchange to clarify requirements and discuss the sourcing strategy.',
    details: [
      'Review of your product specifications',
      'Discussion of realistic pricing expectations',
      'Identification of key sourcing regions in China',
      'Agreement on timeline and deliverables',
      'Service scope and fee confirmation',
    ],
    time: 'Day 1–2',
    imgId: 'hiw-step2-img-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    number: '03',
    title: 'Supplier Research & Shortlisting',
    desc: 'We search our verified supplier network and conduct targeted research to identify 3–5 manufacturers that match your product, quality level, and budget. All suppliers are pre-screened.',
    details: [
      'Search across verified supplier database',
      'Research on Alibaba, trade shows, and industry contacts',
      'Initial capability and capacity assessment',
      'Price and MOQ comparison',
      'Shortlist presentation with supplier profiles',
    ],
    time: 'Day 3–10',
    imgId: 'hiw-step3-img-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    number: '04',
    title: 'Factory Audit',
    desc: 'For shortlisted suppliers, we conduct on-site factory visits to verify their legitimacy, production capabilities, and quality systems. You receive a detailed audit report with photos.',
    details: [
      'Business license and registration verification',
      'Production line and capacity inspection',
      'Quality control system review',
      'Worker conditions and safety assessment',
      'Photo documentation and written audit report',
    ],
    time: 'Day 7–14',
    imgId: 'hiw-step4-img-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    number: '05',
    title: 'Sample Request & Approval',
    desc: 'We request product samples from the top 1–2 suppliers, review them against your specifications, and ship them to you for final approval before placing a production order.',
    details: [
      'Sample request and coordination',
      'Sample review against your specifications',
      'Feedback and revision requests to factory',
      'Sample shipping to your location',
      'Approval confirmation before production',
    ],
    time: 'Day 14–28',
    imgId: 'hiw-step5-img-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    number: '06',
    title: 'Order Placement & Production Monitoring',
    desc: 'Once you approve the sample and confirm the order, we manage the purchase order process and monitor production with regular updates and on-site visits.',
    details: [
      'Purchase order review and confirmation',
      'Weekly production status updates',
      'Mid-production inspection (DUPRO)',
      'Issue identification and resolution',
      'Timeline management and escalation',
    ],
    time: 'Production period',
    imgId: 'hiw-step6-img-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
  {
    number: '07',
    title: 'Pre-Shipment Inspection',
    desc: 'Before goods leave the factory, our inspectors conduct a thorough pre-shipment inspection using AQL sampling standards. Only goods that pass inspection are approved for shipment.',
    details: [
      'AQL-based random sampling inspection',
      'Dimensional and functional checks',
      'Packaging and labeling verification',
      'Defect classification and reporting',
      'Pass/fail decision with full photo report',
    ],
    time: 'Before shipment',
    imgId: 'hiw-step7-img-s1t2u3',
    titleId: 'hiw-step7-title',
    descId: 'hiw-step7-desc',
  },
  {
    number: '08',
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders for sea or air shipment, prepare all export documentation, and keep you updated until your goods arrive at their destination.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Sea freight or air freight booking',
      'Shipment tracking and updates',
      'Delivery confirmation',
    ],
    time: 'Transit period',
    imgId: 'hiw-step8-img-v4w5x6',
    titleId: 'hiw-step8-title',
    descId: 'hiw-step8-desc',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = 'How It Works | SSourcing China';
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <SectionHero
        badge="Our Process"
        title="How Our China Sourcing Process Works"
        subtitle="A clear, step-by-step process designed to give you full visibility and control over your sourcing project from start to finish."
        cta="Start Your Sourcing Project"
      />

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.number} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Step number */}
                <div className="md:col-span-2 flex md:flex-col items-center md:items-end gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{idx + 1}</span>
                  </div>
                  <span className="text-xs font-semibold text-accent bg-red-50 px-2 py-1 rounded-full whitespace-nowrap">
                    {step.time}
                  </span>
                </div>

                {/* Content */}
                <div className="md:col-span-10 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 id={step.titleId} className="text-xl font-bold text-primary-dark mb-2">{step.title}</h3>
                  <p id={step.descId} className="text-gray-600 leading-relaxed mb-4">{step.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-12 bg-light-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-primary-dark mb-3">Have Questions About the Process?</h2>
          <p className="text-gray-600 mb-6">
            Check our FAQ or contact us directly — we're happy to walk you through how we'd handle your specific product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-[#a93226] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Talk to a Sourcing Expert <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/#faq"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Get Started?"
        subtitle="Submit your product inquiry and we'll have a sourcing plan ready within 24 hours."
        cta="Get a Free Sourcing Quote"
      />
    </div>
  );
}
