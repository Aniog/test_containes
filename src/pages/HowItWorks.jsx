import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Search, Factory, Package, ClipboardCheck, Truck, Clock, ShieldCheck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    duration: '1-2 days',
    description:
      'Share your product requirements, specifications, target price range, and order volume with our team. We discuss your goals, quality standards, and any specific certifications or compliance requirements your products need.',
    details: [
      'Product requirement analysis',
      'Target price and volume discussion',
      'Quality standard definition',
      'Timeline and milestone planning',
    ],
    imgId: 'process-step1-a1b2c3',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Identification',
    duration: '1-2 weeks',
    description:
      'Our team searches our network of pre-vetted manufacturers, industry databases, and trade channels to identify qualified suppliers. We create a shortlist of the best candidates based on your specific requirements.',
    details: [
      'Supplier database search',
      'Network and trade channel outreach',
      'Initial supplier screening',
      'Shortlist creation with comparison',
    ],
    imgId: 'process-step2-b2c3d4',
  },
  {
    step: '03',
    icon: Factory,
    title: 'Factory Evaluation & Audit',
    duration: '1-2 weeks',
    description:
      'We conduct on-site audits of shortlisted factories. Our team verifies business licenses, assesses production capacity, reviews quality management systems, and evaluates export experience. You receive a detailed audit report.',
    details: [
      'On-site factory visit',
      'License and certification verification',
      'Production capability assessment',
      'Detailed audit report with photos',
    ],
    imgId: 'process-step3-c3d4e5',
  },
  {
    step: '04',
    icon: Package,
    title: 'Sampling & Negotiation',
    duration: '2-3 weeks',
    description:
      'We arrange samples from top candidates and facilitate price negotiations. Our team helps you evaluate sample quality, compare pricing, and select the best supplier for your needs.',
    details: [
      'Sample arrangement and review',
      'Price negotiation support',
      'Payment term discussion',
      'Final supplier selection',
    ],
    imgId: 'process-step4-d4e5f6',
  },
  {
    step: '05',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    duration: 'Based on order',
    description:
      'Once production begins, we monitor progress regularly. Our QC team conducts inspections at key stages — pre-production, during production, and pre-shipment — to ensure quality standards are met.',
    details: [
      'Production schedule monitoring',
      'Pre-production sample check',
      'In-line inspection (DUPRO)',
      'Pre-shipment inspection (FRI)',
    ],
    imgId: 'process-step5-e5f6g7',
  },
  {
    step: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    duration: 'Based on method',
    description:
      'We coordinate the entire logistics process — freight booking, documentation, customs clearance, and delivery tracking. Your goods arrive at your destination on time and in good condition.',
    details: [
      'Freight arrangement (sea/air/rail)',
      'Customs documentation',
      'Container loading supervision',
      'Delivery tracking and confirmation',
    ],
    imgId: 'process-step6-f6g7h8',
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A proven process to source products from China — transparent, reliable, and efficient
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {steps.map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-navy-600 text-white flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    {s.step}
                  </div>
                  <div className="text-xs text-gray-500">{s.duration}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            {steps.map((item, i) => (
              <div
                key={item.step}
                id={`process-step-${item.step}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? '' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-navy-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-navy-600" />
                    </div>
                    <span className="text-sm text-gold-500 font-medium">{item.duration}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-600 mb-4">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((d) => (
                      <li key={d} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    alt={item.title}
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[process-step-${item.step}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <span id={`process-step-${item.step}-title`} className="hidden">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Clock className="w-10 h-10 text-navy-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-navy-600 mb-2">Typical Timeline</h3>
              <p className="text-sm text-gray-600">
                From initial consultation to delivery, the full process typically takes 4-8 weeks for supplier identification and sampling, plus production lead time.
              </p>
            </div>
            <div className="text-center p-6">
              <ShieldCheck className="w-10 h-10 text-navy-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-navy-600 mb-2">Our Commitment</h3>
              <p className="text-sm text-gray-600">
                We only recommend suppliers we would use ourselves. Every factory we present has been personally audited by our team.
              </p>
            </div>
            <div className="text-center p-6">
              <ArrowRight className="w-10 h-10 text-navy-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-navy-600 mb-2">Next Steps</h3>
              <p className="text-sm text-gray-600">
                Ready to begin? Contact us for a free consultation and we'll guide you through each step of the process.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-gold-500 hover:bg-gold-600 rounded-lg transition-colors shadow-sm"
            >
              Start Your Sourcing Journey <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}