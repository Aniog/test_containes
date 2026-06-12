import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, Clock, FileText, MessageSquare, Package, Ship, Star } from 'lucide-react';
import CTABanner from '../components/layout/CTABanner';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Inquiry',
    desc: 'Fill out our sourcing request form with your product details — type, specifications, target price, quantity, and destination. The more detail you provide, the faster we can match you with the right suppliers.',
    details: ['Product description and specs', 'Target unit price and MOQ', 'Destination country and timeline', 'Any certifications required'],
    titleId: 'step-01-title',
    descId: 'step-01-desc',
    imgId: 'step-01-img-a1b2c3',
  },
  {
    num: '02',
    icon: Star,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our vetted supplier network and conducts outreach to identify 3–5 manufacturers that match your requirements. We compare pricing, MOQ, lead times, and production capabilities.',
    details: ['Database and market research', 'Supplier outreach and qualification', 'Pricing and MOQ comparison', 'Shortlist report delivered in 5–10 days'],
    titleId: 'step-02-title',
    descId: 'step-02-desc',
    imgId: 'step-02-img-d4e5f6',
  },
  {
    num: '03',
    icon: CheckCircle,
    title: 'Factory Audit',
    desc: 'Before recommending a supplier, we conduct an on-site factory audit to verify production capacity, quality systems, certifications, and working conditions. You receive a detailed written report.',
    details: ['On-site factory visit', 'Capacity and equipment assessment', 'Quality management review', 'Audit report with photos'],
    titleId: 'step-03-title',
    descId: 'step-03-desc',
    imgId: 'step-03-img-g7h8i9',
  },
  {
    num: '04',
    icon: Package,
    title: 'Sample & Negotiation',
    desc: 'We arrange product samples from your chosen supplier and manage the negotiation process — covering price, payment terms, lead times, and packaging requirements.',
    details: ['Sample arrangement and review', 'Price and terms negotiation', 'Payment structure guidance', 'Contract review support'],
    titleId: 'step-04-title',
    descId: 'step-04-desc',
    imgId: 'step-04-img-j1k2l3',
  },
  {
    num: '05',
    icon: Clock,
    title: 'Production Monitoring',
    desc: 'Once your order is placed, we monitor production progress and conduct quality inspections at key stages. We communicate with the factory in Mandarin and keep you updated throughout.',
    details: ['Production timeline tracking', 'In-line quality checks', 'Factory communication in Mandarin', 'Regular status updates to you'],
    titleId: 'step-05-title',
    descId: 'step-05-desc',
    imgId: 'step-05-img-m4n5o6',
  },
  {
    num: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'We coordinate with freight forwarders, prepare export documentation, and track your shipment from the factory to your warehouse. We handle both sea and air freight.',
    details: ['Pre-shipment inspection', 'Export documentation', 'Freight forwarder coordination', 'Shipment tracking and updates'],
    titleId: 'step-06-title',
    descId: 'step-06-desc',
    imgId: 'step-06-img-p7q8r9',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">How It Works</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            A clear, step-by-step process designed to reduce risk and give you full visibility into your China sourcing project.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={step.num} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-4xl font-black text-gray-100 select-none">{step.num}</span>
                    </div>
                    <h2 id={step.titleId} className="text-3xl font-bold text-text-dark mb-4">{step.title}</h2>
                    <p id={step.descId} className="text-gray-500 leading-relaxed mb-6">{step.desc}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-center gap-3 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-md h-72 lg:h-80 bg-gray-100 ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-text-dark mb-3">Typical Project Timeline</h2>
          <p className="text-gray-500 mb-10">Timelines vary by product complexity and order size. Here is a general guide.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { phase: 'Supplier Research', time: '5–10 days' },
              { phase: 'Factory Audit', time: '3–5 days' },
              { phase: 'Sample Production', time: '7–21 days' },
              { phase: 'Order Production', time: '20–45 days' },
              { phase: 'Quality Inspection', time: '1–2 days' },
              { phase: 'Sea Freight', time: '15–35 days' },
            ].map(({ phase, time }) => (
              <div key={phase} className="bg-bg-light rounded-xl p-5 border border-gray-100 text-left">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{phase}</p>
                <p className="text-lg font-bold text-primary">{time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
