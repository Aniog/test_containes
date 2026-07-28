import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Search, Factory, ClipboardCheck, Ship, ArrowRight, ArrowDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Your Requirements',
    desc: 'Tell us what you need — product specs, target price, order volume, and quality standards. We review and respond within 24 hours.',
    imgId: 'process-step-1-8b2c01',
    titleId: 'process-title-1',
    descId: 'process-desc-1',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification',
    desc: 'We search our verified network and industry databases to identify the best-matched manufacturers. You receive a shortlist with detailed profiles.',
    imgId: 'process-step-2-8b2c02',
    titleId: 'process-title-2',
    descId: 'process-desc-2',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Audit & Sampling',
    desc: 'We conduct on-site factory audits and arrange product samples. You review samples and approve the final supplier before any commitment.',
    imgId: 'process-step-3-8b2c03',
    titleId: 'process-title-3',
    descId: 'process-desc-3',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    desc: 'We monitor production milestones, perform in-line QC inspections, and provide regular progress reports with photos and data.',
    imgId: 'process-step-4-8b2c04',
    titleId: 'process-title-4',
    descId: 'process-desc-4',
  },
  {
    number: '05',
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight, handle export documentation, and track your shipment until it reaches your destination.',
    imgId: 'process-step-5-8b2c05',
    titleId: 'process-title-5',
    descId: 'process-desc-5',
  },
];

export default function ProcessSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 id="process-section-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            How We Work
          </h2>
          <p id="process-section-subtitle" className="mt-4 text-lg text-slate-600">
            A structured, transparent sourcing process designed to minimize risk and maximize results.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.number}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                  <div
                    data-strk-bg-id={step.imgId}
                    data-strk-bg={`[${step.descId}] [${step.titleId}] [process-section-subtitle] [process-section-title]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="700"
                  >
                    <div className="aspect-[16/9] rounded-xl bg-slate-200 overflow-hidden" />
                  </div>
                </div>
                <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center text-lg font-bold">
                      {step.number}
                    </span>
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-3">
                        <step.icon className="w-5 h-5 text-brand-orange" />
                      </div>
                      <h3 id={step.titleId} className="text-xl font-semibold text-slate-900">
                        {step.title}
                      </h3>
                      <p id={step.descId} className="mt-2 text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4">
                  <ArrowDown className="w-6 h-6 text-slate-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-orange transition-colors"
          >
            Learn More About Our Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}