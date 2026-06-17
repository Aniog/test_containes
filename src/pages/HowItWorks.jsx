import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHero from '@/components/shared/PageHero';
import CtaBanner from '@/components/shared/CtaBanner';
import { MessageSquare, Search, Factory, Package, ShieldCheck, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    imgId: 'hiw-img-step1-a1b2c3',
    titleId: 'hiw-title-step1',
    descId: 'hiw-desc-step1',
    desc: 'Fill in our sourcing inquiry form with your product details, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can get started.',
    details: ['Product name and specifications', 'Target unit price and MOQ', 'Required certifications (CE, RoHS, etc.)', 'Delivery timeline and destination'],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Screening',
    imgId: 'hiw-img-step2-d4e5f6',
    titleId: 'hiw-title-step2',
    descId: 'hiw-desc-step2',
    desc: 'Our team researches suppliers across multiple databases, trade shows, and our existing network. We screen candidates based on your criteria and eliminate unsuitable options.',
    details: ['Search across Alibaba, Made-in-China, trade databases', 'Initial supplier communication in Chinese', 'Verification of business registration', 'Shortlist of 3–5 qualified candidates'],
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit',
    imgId: 'hiw-img-step3-g7h8i9',
    titleId: 'hiw-title-step3',
    descId: 'hiw-desc-step3',
    desc: 'For shortlisted suppliers, our local team conducts on-site factory visits to verify production capacity, equipment, certifications, and working conditions.',
    details: ['On-site visit by our China-based team', 'Production capacity verification', 'Equipment and quality system review', 'Detailed audit report with photos'],
  },
  {
    num: '04',
    icon: Package,
    title: 'Sampling & Negotiation',
    imgId: 'hiw-img-step4-j1k2l3',
    titleId: 'hiw-title-step4',
    descId: 'hiw-desc-step4',
    desc: 'We arrange product samples from your preferred suppliers and negotiate pricing, payment terms, and lead times on your behalf.',
    details: ['Sample arrangement and shipping', 'Price and terms negotiation', 'Supplier comparison report', 'Contract review support'],
  },
  {
    num: '05',
    icon: ShieldCheck,
    title: 'Quality Inspection',
    imgId: 'hiw-img-step5-m4n5o6',
    titleId: 'hiw-title-step5',
    descId: 'hiw-desc-step5',
    desc: 'Before goods are shipped, our inspectors visit the factory to check product quality, quantity, packaging, and labeling against your specifications.',
    details: ['Pre-shipment inspection (AQL standard)', 'Measurement and function testing', 'Packaging and labeling check', 'Photo/video inspection report'],
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    imgId: 'hiw-img-step6-p7q8r9',
    titleId: 'hiw-title-step6',
    descId: 'hiw-desc-step6',
    desc: 'We coordinate freight booking, export documentation, and delivery tracking to ensure your goods arrive on time and in good condition.',
    details: ['Freight forwarder coordination', 'Export customs documentation', 'Shipment tracking and updates', 'Delivery confirmation'],
  },
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
        subtitle="A clear, step-by-step process designed to take the complexity out of sourcing from China."
        breadcrumb="How It Works"
      />

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="flex flex-col gap-20">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={step.num} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-5xl font-black text-gray-100 leading-none select-none">{step.num}</span>
                      <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h2 id={step.titleId} className="text-2xl font-bold text-brand-blue mb-4">{step.title}</h2>
                    <p id={step.descId} className="text-gray-600 leading-relaxed mb-6">{step.desc}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-72 object-cover rounded-2xl shadow-md"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Get Started?"
        subtitle="Submit your sourcing requirements and receive a free consultation within 24 hours."
      />
    </div>
  );
}
