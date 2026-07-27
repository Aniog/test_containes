import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Search, ShieldCheck, ClipboardCheck, Ship, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import CTABanner from '@/components/shared/CTABanner';

const steps = [
  {
    id: 'step-inquiry',
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Inquiry',
    desc: 'Share your product requirements, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can find the right match.',
    details: ['Product specifications or reference samples', 'Target FOB/CIF price range', 'Order quantity and frequency', 'Required certifications or compliance'],
    titleId: 'hiw-step-inquiry-title',
    descId: 'hiw-step-inquiry-desc',
  },
  {
    id: 'step-sourcing',
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our verified supplier database and conducts fresh market research. Within 5–7 business days, you receive a comparison of 3–5 qualified suppliers.',
    details: ['Supplier capability profiles', 'Price and MOQ comparison', 'Lead time estimates', 'Initial quality assessment'],
    titleId: 'hiw-step-sourcing-title',
    descId: 'hiw-step-sourcing-desc',
  },
  {
    id: 'step-verification',
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    desc: 'We visit shortlisted factories to verify production capacity, quality systems, and business legitimacy. You receive a detailed audit report with photos and our recommendation.',
    details: ['On-site factory visit', 'Business license verification', 'Production line assessment', 'Risk evaluation report'],
    titleId: 'hiw-step-verification-title',
    descId: 'hiw-step-verification-desc',
  },
  {
    id: 'step-sampling',
    number: '04',
    icon: ClipboardCheck,
    title: 'Sampling & Order Placement',
    desc: 'We coordinate sample production, manage revisions, and once approved, place the order with agreed terms. We negotiate pricing and payment conditions on your behalf.',
    details: ['Sample development management', 'Price and term negotiation', 'Purchase order confirmation', 'Production timeline agreement'],
    titleId: 'hiw-step-sampling-title',
    descId: 'hiw-step-sampling-desc',
  },
  {
    id: 'step-production',
    number: '05',
    icon: ClipboardCheck,
    title: 'Production Monitoring & QC',
    desc: 'During production, we visit the factory regularly to check progress, resolve issues, and conduct quality inspections at key milestones.',
    details: ['Weekly progress updates', 'During-production inspection', 'Pre-shipment final inspection', 'Defect resolution management'],
    titleId: 'hiw-step-production-title',
    descId: 'hiw-step-production-desc',
  },
  {
    id: 'step-shipping',
    number: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'We arrange freight, prepare customs documentation, and coordinate delivery to your warehouse or port. You receive tracking updates until goods arrive safely.',
    details: ['Freight booking and optimization', 'Export documentation', 'Shipment tracking', 'Delivery confirmation'],
    titleId: 'hiw-step-shipping-title',
    descId: 'hiw-step-shipping-desc',
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        title="How It Works"
        subtitle="A transparent, step-by-step process that keeps you in control from initial inquiry to final delivery."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative">
                  <div className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                      <div className="w-0.5 bg-neutral-200 flex-1 mt-4 hidden md:block"></div>
                    </div>
                    <div className="pb-8">
                      <h3 id={step.titleId} className="text-xl md:text-2xl font-bold text-neutral-900 mb-3">
                        {step.title}
                      </h3>
                      <p id={step.descId} className="text-neutral-600 leading-relaxed mb-4">
                        {step.desc}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {step.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-sm text-neutral-700">
                            <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            What You Can Expect
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <p className="text-neutral-600 text-sm">Response time on new inquiries</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5–7 days</div>
              <p className="text-neutral-600 text-sm">Supplier shortlist delivery</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Weekly</div>
              <p className="text-neutral-600 text-sm">Production progress updates</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Start Your Sourcing Project"
        subtitle="Submit your requirements and receive a free sourcing plan within 24 hours."
      />
    </div>
  );
};

export default HowItWorks;
