import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, MessageSquare, Search, ShieldCheck, ClipboardCheck, Truck, Package } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements: what you need, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can help.',
    details: [
      'Product name and specifications',
      'Target unit price and MOQ',
      'Required certifications (CE, FCC, etc.)',
      'Delivery timeline and destination',
      'Any existing supplier references',
    ],
    titleId: 'step1-title',
    descId: 'step1-desc',
    imgId: 'step1-img-a1b2c3',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our verified supplier database and conducts fresh market research to identify manufacturers that match your requirements. We shortlist 3–5 candidates and present them with initial pricing and capability information.',
    details: [
      'Database and market research',
      'Supplier capability assessment',
      'Initial price and MOQ comparison',
      'Shortlist report delivered in 3–5 days',
      'English-language communication throughout',
    ],
    titleId: 'step2-title',
    descId: 'step2-desc',
    imgId: 'step2-img-d4e5f6',
  },
  {
    num: '03',
    icon: Package,
    title: 'Quotation & Sample Arrangement',
    desc: 'We collect formal quotations from shortlisted suppliers and arrange product samples for your review. We manage all communication with factories and translate documents as needed.',
    details: [
      'Formal RFQ to shortlisted suppliers',
      'Sample arrangement and shipping',
      'Quote comparison and analysis',
      'Negotiation support',
      'Sample feedback coordination',
    ],
    titleId: 'step3-title',
    descId: 'step3-desc',
    imgId: 'step3-img-g7h8i9',
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    desc: 'Before you place an order, we conduct an on-site factory audit to verify the supplier is legitimate, capable, and compliant. You receive a detailed report with photos and a clear recommendation.',
    details: [
      'On-site factory visit',
      'Business license verification',
      'Production capacity check',
      'Certification and compliance review',
      'Detailed audit report with photos',
    ],
    titleId: 'step4-title',
    descId: 'step4-desc',
    imgId: 'step4-img-j1k2l3',
  },
  {
    num: '05',
    icon: ClipboardCheck,
    title: 'Order Placement & Production Monitoring',
    desc: 'Once you approve a supplier, we assist with order placement, review contracts, and monitor production progress. We visit the factory during production and send you regular status updates.',
    details: [
      'Order and contract review',
      'Production timeline tracking',
      'Regular factory visits',
      'Weekly progress reports',
      'Issue escalation and resolution',
    ],
    titleId: 'step5-title',
    descId: 'step5-desc',
    imgId: 'step5-img-m4n5o6',
  },
  {
    num: '06',
    icon: Truck,
    title: 'Quality Inspection & Shipment',
    desc: 'Before goods leave the factory, we conduct a pre-shipment inspection following AQL standards. Once goods pass inspection, we coordinate with freight forwarders to arrange shipment to your destination.',
    details: [
      'Pre-shipment inspection (AQL)',
      'Inspection report with pass/fail',
      'Freight forwarder coordination',
      'Export documentation',
      'Shipment tracking to destination',
    ],
    titleId: 'step6-title',
    descId: 'step6-desc',
    imgId: 'step6-img-p7q8r9',
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
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20" style={{ backgroundColor: '#0d2b4e' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#93c5fd' }}>
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A transparent, step-by-step sourcing process designed to reduce risk and deliver results. Here is exactly what happens when you work with us.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={step.num} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-5xl font-bold" style={{ color: '#e8f0fb' }}>{step.num}</div>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#e8f0fb' }}>
                        <Icon className="w-5 h-5" style={{ color: '#1a4f8a' }} />
                      </div>
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold mb-3" style={{ color: '#0d2b4e' }}>{step.title}</h2>
                    <p id={step.descId} className="text-slate-600 leading-relaxed mb-6">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#1a4f8a' }} />
                          <span className="text-slate-700 text-sm">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden aspect-[4/3] ${!isEven ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
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

      {/* Timeline Summary */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: '#0d2b4e' }}>Typical Timeline</h2>
            <p className="text-slate-600">From inquiry to first shipment, here is what to expect.</p>
          </div>
          <div className="space-y-3">
            {[
              { phase: 'Inquiry & Supplier Research', time: '3–5 business days' },
              { phase: 'Quotation & Sampling', time: '1–3 weeks' },
              { phase: 'Factory Audit', time: '3–5 business days' },
              { phase: 'Order Placement & Production', time: '30–60 days (product dependent)' },
              { phase: 'Quality Inspection', time: '1–2 days' },
              { phase: 'Sea Freight to Europe/US', time: '25–35 days' },
            ].map((item) => (
              <div key={item.phase} className="flex items-center justify-between bg-white rounded-xl border border-slate-200 px-5 py-4">
                <span className="font-medium text-sm" style={{ color: '#0d2b4e' }}>{item.phase}</span>
                <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: '#e8f0fb', color: '#1a4f8a' }}>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#0d2b4e' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Submit your sourcing inquiry today and we will have a supplier shortlist ready within 3–5 business days.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-colors"
            style={{ backgroundColor: '#c0392b' }}
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
