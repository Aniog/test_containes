import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Search, Factory, ClipboardCheck, Package, Truck, Clock, FileText } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    step: 1,
    icon: MessageSquare,
    title: 'Initial Consultation',
    duration: '1-2 Days',
    desc: 'Share your product requirements, target specifications, budget, and timeline. We analyze your needs and prepare a customized sourcing strategy.',
    detail: 'During this phase, we discuss your product in detail — materials, dimensions, quality standards, certifications needed, and volume expectations. This ensures we target the right factories from day one.',
    imgId: 'process-step1-p7q8r9',
    titleId: 'proc-title-step1',
    descId: 'proc-desc-step1',
  },
  {
    step: 2,
    icon: Search,
    title: 'Supplier Identification',
    duration: '5-10 Days',
    desc: 'We search our network of 2,000+ verified factories and industrial clusters to identify manufacturers that specialize in your product category.',
    detail: 'We target specific industrial clusters in China — Shenzhen for electronics, Foshan for furniture, Yiwu for commodities, etc. We shortlist 3-5 factories based on capability, quality history, and pricing competitiveness.',
    imgId: 'process-step2-q8r9s0',
    titleId: 'proc-title-step2',
    descId: 'proc-desc-step2',
  },
  {
    step: 3,
    icon: Factory,
    title: 'Factory Audit & Verification',
    duration: '1-2 Weeks',
    desc: 'We physically visit and audit each shortlisted factory. Our 50+ point checklist covers licenses, production capacity, quality systems, and social compliance.',
    detail: 'The audit includes: business license verification, production line inspection, equipment assessment, QC lab review, worker conditions, export history check, and reference calls with existing clients.',
    imgId: 'process-step3-r9s0t1',
    titleId: 'proc-title-step3',
    descId: 'proc-desc-step3',
  },
  {
    step: 4,
    icon: ClipboardCheck,
    title: 'Sampling & Negotiation',
    duration: '2-4 Weeks',
    desc: 'We coordinate samples from top candidates, help you evaluate quality, and negotiate pricing, payment terms, and production timelines on your behalf.',
    detail: 'We handle all sample logistics, consolidate feedback, and manage multiple revision rounds. Our local negotiation expertise typically saves clients 5-15% compared to direct negotiation.',
    imgId: 'process-step4-s0t1u2',
    titleId: 'proc-title-step4',
    descId: 'proc-desc-step4',
  },
  {
    step: 5,
    icon: Package,
    title: 'Production & Quality Control',
    duration: 'Per Order Timeline',
    desc: 'Once production begins, we provide weekly progress updates with photos. QC inspections are conducted at pre-production, during production, and pre-shipment stages.',
    detail: 'We follow AQL 2.5/4.0 standards. Inspection reports include detailed photos, measurements, function tests, packaging checks, and an overall pass/fail recommendation.',
    imgId: 'process-step5-t1u2v3',
    titleId: 'proc-title-step5',
    descId: 'proc-desc-step5',
  },
  {
    step: 6,
    icon: Truck,
    title: 'Shipping & Final Delivery',
    duration: '2-6 Weeks',
    desc: 'We coordinate transportation, handle export documentation, manage customs clearance, and track your shipment until it reaches your door.',
    detail: 'We compare freight quotes from multiple forwarders, prepare all export documents (CI, PL, BL, CO, etc.), and provide real-time shipment tracking. Delivery to your warehouse, Amazon FBA, or directly to customers.',
    imgId: 'process-step6-u2v3w4',
    titleId: 'proc-title-step6',
    descId: 'proc-desc-step6',
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy-950 text-white">
        <div className="section-container py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 id="process-page-title" className="text-4xl md:text-5xl font-extrabold tracking-tight">
              How It Works
            </h1>
            <p id="process-page-subtitle" className="mt-4 text-lg text-slate-300 max-w-xl leading-relaxed">
              A proven step-by-step process designed to minimize risk and maximize efficiency in your China sourcing journey.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl">
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />

            <div className="space-y-16">
              {steps.map((item) => (
                <div key={item.step} className="relative flex flex-col md:flex-row gap-6 md:gap-10">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-brand-600 text-white flex items-center justify-center text-2xl font-extrabold shadow-lg shadow-brand-200">
                      {item.step}
                    </div>
                  </div>

                  <div className="flex-1 bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-brand-600" />
                        </div>
                        <h2 id={item.titleId} className="text-xl font-bold text-navy-950">{item.title}</h2>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm text-brand-600 font-medium bg-brand-50 px-3 py-1 rounded-full">
                        <Clock className="w-3.5 h-3.5" />
                        {item.duration}
                      </span>
                    </div>

                    <p id={item.descId} className="text-slate-600 leading-relaxed mb-4">{item.desc}</p>

                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                      <div className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                        <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-600">
        <div className="section-container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to Start Your Sourcing Project?
            </h2>
            <p className="mt-4 text-lg text-brand-100 leading-relaxed">
              Most projects move from inquiry to factory identification within 10 business days.
            </p>
            <Link to="/contact" className="btn-white text-base px-8 py-3.5 gap-2 mt-8 inline-flex">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
