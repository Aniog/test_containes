import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';
import {
  MessageSquare, Search, ShieldCheck, Package, ClipboardCheck,
  Truck, CheckCircle2, ArrowRight, Clock, FileText, Users
} from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: '1. Share Your Requirements',
    desc: 'Tell us what you need to source — product specifications, target pricing, quantity, quality standards, and timeline. We assess feasibility and respond within 24 hours.',
    details: ['Product description and specifications', 'Target price range', 'Order quantity and timeline', 'Quality and certification requirements'],
    imgId: 'step1-req-a1b2c3',
    titleId: 'step1-title',
    descId: 'step1-desc',
  },
  {
    icon: Search,
    title: '2. Supplier Identification',
    desc: 'We search our network and identify suitable suppliers. Each candidate is screened for capability, capacity, and compliance before being presented to you.',
    details: ['Search across 500+ verified suppliers', 'Initial capability screening', 'Price and MOQ comparison', 'Shortlist of 3-5 qualified suppliers'],
    imgId: 'step2-identify-d4e5f6',
    titleId: 'step2-title',
    descId: 'step2-desc',
  },
  {
    icon: ShieldCheck,
    title: '3. Factory Verification',
    desc: 'We visit shortlisted factories in person to verify their legitimacy, production capacity, quality systems, and working conditions.',
    details: ['On-site factory audit', 'Business license verification', 'Production capacity assessment', 'Quality system evaluation'],
    imgId: 'step3-verify-g7h8i9',
    titleId: 'step3-title',
    descId: 'step3-desc',
  },
  {
    icon: Package,
    title: '4. Sample & Negotiation',
    desc: 'We coordinate sample production, review quality with you, and negotiate pricing, payment terms, and lead times on your behalf.',
    details: ['Sample production coordination', 'Quality review and feedback', 'Price negotiation', 'Terms and conditions agreement'],
    imgId: 'step4-sample-j1k2l3',
    titleId: 'step4-title',
    descId: 'step4-desc',
  },
  {
    icon: ClipboardCheck,
    title: '5. Production & Quality Control',
    desc: 'We monitor production progress, conduct inspections at key stages, and address issues proactively to keep your order on track.',
    details: ['Production schedule monitoring', 'Pre-production inspection', 'During-production inspection', 'Pre-shipment final inspection'],
    imgId: 'step5-production-m4n5o6',
    titleId: 'step5-title',
    descId: 'step5-desc',
  },
  {
    icon: Truck,
    title: '6. Shipping & Delivery',
    desc: 'We arrange freight, prepare documentation, manage customs clearance, and track your shipment until it reaches your destination.',
    details: ['Freight booking and consolidation', 'Shipping documentation', 'Customs clearance support', 'Delivery tracking and confirmation'],
    imgId: 'step6-shipping-p7q8r9',
    titleId: 'step6-title',
    descId: 'step6-desc',
  },
];

const timeline = [
  { phase: 'Requirements & Planning', duration: '1-3 days', icon: MessageSquare },
  { phase: 'Supplier Search & Screening', duration: '5-10 days', icon: Search },
  { phase: 'Factory Verification', duration: '3-7 days', icon: ShieldCheck },
  { phase: 'Sample Production', duration: '7-21 days', icon: Package },
  { phase: 'Mass Production', duration: '15-45 days', icon: ClipboardCheck },
  { phase: 'Shipping & Delivery', duration: '7-35 days', icon: Truck },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHero
        title="How It Works"
        subtitle="A clear, structured process that takes you from initial inquiry to delivered goods — with full transparency at every step."
        breadcrumb="How It Works"
      />

      {/* Process Steps */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div key={step.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 id={step.titleId} className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p id={step.descId} className="text-slate-600 mb-6 leading-relaxed">{step.desc}</p>
                  <ul className="space-y-2.5">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Typical Timeline</h2>
            <p className="text-lg text-slate-600">
              From initial inquiry to delivered goods. Timelines vary by product complexity and order size.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {timeline.map((t) => (
              <div key={t.phase} className="bg-white rounded-lg p-5 border border-slate-100 flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <t.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">{t.phase}</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-sm text-slate-500">{t.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Sourcing?"
        subtitle="Share your requirements and get a free sourcing assessment within 24 hours."
      />
    </div>
  );
}
