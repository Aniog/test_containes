import { useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight, MessageSquare, Search, ShieldCheck, ClipboardCheck, Truck, FileText } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button, SectionHeader, Card, PageHero } from '@/components/ui/index.jsx';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product details — what you need, your target price, quantity, and timeline. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Product name and description',
      'Target unit price and MOQ',
      'Required certifications or standards',
      'Delivery timeline and destination',
      'Any specific packaging or labeling requirements',
    ],
    imgId: 'hiw-step1-img-3a7b1c',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches our verified supplier network and identifies 3–5 manufacturers that match your requirements. We conduct initial screening calls and request preliminary quotations.',
    details: [
      'Database search across 10,000+ verified suppliers',
      'Initial supplier qualification calls',
      'Preliminary pricing and MOQ confirmation',
      'Shortlist of 3–5 recommended suppliers',
      'Comparative summary report',
    ],
    imgId: 'hiw-step2-img-9c4d2e',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    desc: 'Before recommending a supplier, we conduct an on-site factory audit to verify their legitimacy, production capacity, and quality systems. You receive a full audit report with photos.',
    details: [
      'On-site factory visit',
      'Business license and certification check',
      'Production line assessment',
      'Worker capacity and conditions review',
      'Detailed audit report with photos',
    ],
    imgId: 'hiw-step3-img-5e8f3a',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    number: '04',
    icon: FileText,
    title: 'Sample Review & Order Placement',
    desc: 'We request product samples from shortlisted suppliers, review them against your specifications, and coordinate any revisions. Once you approve, we negotiate final pricing and place the order.',
    details: [
      'Sample request and coordination',
      'Sample review against specifications',
      'Revision requests and follow-up',
      'Final price negotiation',
      'Purchase order placement',
    ],
    imgId: 'hiw-step4-img-2b6c4d',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Production Monitoring & QC Inspection',
    desc: 'We monitor production milestones and conduct quality inspections during and after production. Any issues are flagged immediately and resolved before shipment.',
    details: [
      'Production milestone tracking',
      'Mid-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI)',
      'AQL sampling and defect reporting',
      'Pass/fail recommendation',
    ],
    imgId: 'hiw-step5-img-7f1a9b',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'Once goods pass inspection, we coordinate with freight forwarders to arrange shipment. We handle export documentation and keep you updated until your goods arrive.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Shipment tracking and updates',
      'Delivery confirmation',
    ],
    imgId: 'hiw-step6-img-4d2e8f',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
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
      <PageHero
        eyebrow="How It Works"
        title="A Transparent, Step-by-Step Sourcing Process"
        subtitle="We follow a structured process to ensure every order is handled professionally, with clear communication at every stage."
      />

      {/* Timeline Steps */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="w-10 h-10 bg-surface-alt rounded-xl flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-steel" />
                    </div>
                  </div>
                  <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-navy mb-3">
                    {step.title}
                  </h2>
                  <p id={step.descId} className="text-gray-600 leading-relaxed mb-6">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-lg ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={step.title}
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Typical Timeline"
            title="How Long Does It Take?"
            subtitle="Timelines vary by product complexity and order size, but here's a general guide."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { phase: 'Sourcing & Audit', time: '1–2 weeks', desc: 'Supplier research, shortlisting, and factory audit.' },
              { phase: 'Samples & Order', time: '1–3 weeks', desc: 'Sample production, review, revisions, and order placement.' },
              { phase: 'Production & Shipping', time: '4–12 weeks', desc: 'Production time plus sea or air freight to destination.' },
            ].map((item) => (
              <Card key={item.phase} className="text-center">
                <div className="text-2xl font-bold text-brand-red mb-1">{item.time}</div>
                <div className="font-semibold text-navy mb-2">{item.phase}</div>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Submit your inquiry today and we'll get back to you within 24 hours.
          </p>
          <Button to="/contact" variant="outline-white" size="lg">
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
