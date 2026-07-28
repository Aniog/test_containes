import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { FileText, Search, ClipboardCheck, Factory, Ship, ArrowRight, CheckCircle, MessageCircle, FileCheck } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit Your Sourcing Request',
    description: 'Tell us what you need — product details, specifications, target quantity, budget range, and timeline. The more information you provide, the faster we can find the right suppliers.',
    details: [
      'Product specifications and requirements',
      'Target quantity and budget range',
      'Quality standards and certifications needed',
      'Preferred timeline and delivery date',
    ],
    imgId: 'step1-request-d1e2f3',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Identification & Screening',
    description: 'Our team searches across China\'s manufacturing hubs to identify potential suppliers. We screen each one for capability, reliability, and fit with your requirements.',
    details: [
      'Market research across relevant industrial regions',
      'Initial capability and credibility assessment',
      'RFQ distribution to qualified suppliers',
      'Price and capability comparison analysis',
    ],
    imgId: 'step2-screening-g4h5i6',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Factory Audit & Sample Verification',
    description: 'Before you commit, we visit shortlisted factories in person to verify their operations, capacity, and quality systems. We also arrange and evaluate product samples.',
    details: [
      'On-site factory audit with photo/video report',
      'Business license and certification verification',
      'Sample collection and quality evaluation',
      'Detailed supplier recommendation report',
    ],
    imgId: 'step3-audit-j7k8l9',
  },
  {
    icon: MessageCircle,
    step: '04',
    title: 'Negotiation & Order Confirmation',
    description: 'We negotiate pricing, payment terms, and production schedules on your behalf. Once terms are agreed, we help finalize the purchase order and contract.',
    details: [
      'Price and payment term negotiation',
      'Production schedule confirmation',
      'Contract review and finalization',
      'Deposit payment coordination',
    ],
    imgId: 'step4-negotiation-m1n2o3',
  },
  {
    icon: Factory,
    step: '05',
    title: 'Production Monitoring & Quality Control',
    description: 'Throughout production, we conduct regular factory visits and quality inspections to ensure your order stays on schedule and meets your quality standards.',
    details: [
      'Production progress tracking and reporting',
      'During-production quality inspections',
      'Issue identification and resolution',
      'Pre-shipment final inspection',
    ],
    imgId: 'step5-production-p4q5r6',
  },
  {
    icon: FileCheck,
    step: '06',
    title: 'Final Inspection & Shipping',
    description: 'Before goods leave the factory, we conduct a final random inspection. Once approved, we coordinate all logistics including customs documentation and freight forwarding.',
    details: [
      'Final random inspection (AQL standard)',
      'Container loading supervision',
      'Export documentation preparation',
      'Freight forwarding and delivery tracking',
    ],
    imgId: 'step6-shipping-s7t8u9',
  },
];

export default function HowItWorksPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-lg text-slate-300">
              A transparent, step-by-step process from your initial inquiry to final delivery. We keep you informed at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-sm font-bold text-blue-600">Step {step.step}</div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{step.title}</h2>
                  <p className="text-slate-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[step-title-${index}] [how-it-works-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="section-subtitle mx-auto mb-8">
            Submit your sourcing request today and receive a free assessment within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
