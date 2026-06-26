import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  MessageSquare, Search, FlaskConical, FileSignature, Factory,
  Eye, Package, Truck, CheckCircle, ArrowRight, Clock, Users
} from 'lucide-react';
import CTASection from '@/components/shared/CTASection';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    duration: 'Day 1',
    desc: 'Start by telling us what you need. Share product specifications, target price, quantity, quality requirements, and your desired timeline.',
    details: [
      'Fill out our simple inquiry form or email us directly',
      'Provide product photos, sketches, or reference samples if available',
      'Specify your target price range and order quantity',
      'Mention any certifications or compliance requirements',
    ],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    duration: 'Days 2-5',
    desc: 'Our team searches our supplier database and industry networks to identify 3-5 qualified suppliers that match your requirements.',
    details: [
      'We screen suppliers for production capacity, certifications, and track record',
      'We request initial pricing and lead time estimates',
      'We verify business licenses and export qualifications',
      'You receive a detailed comparison report with our recommendation',
    ],
  },
  {
    num: '03',
    icon: FlaskConical,
    title: 'Sample Development & Approval',
    duration: 'Days 5-20',
    desc: 'We request samples from your preferred suppliers, evaluate them against your specifications, and ship them to you for final approval.',
    details: [
      'Samples are evaluated for quality, materials, and workmanship',
      'We provide detailed comparison photos and measurements',
      'Consolidated sample shipping to reduce your costs',
      'Specification feedback is relayed to factories for refinement',
    ],
  },
  {
    num: '04',
    icon: FileSignature,
    title: 'Negotiation & Order Confirmation',
    duration: 'Days 15-20',
    desc: 'We negotiate pricing, payment terms, and delivery schedules on your behalf. Once agreed, we help finalize contracts and place the order.',
    details: [
      'Price negotiation leveraging our volume relationships',
      'Payment term discussion (T/T, L/C, trade assurance)',
      'Lead time confirmation and milestone planning',
      'Contract and purchase order review',
    ],
  },
  {
    num: '05',
    icon: Factory,
    title: 'Production Monitoring',
    duration: 'Throughout Production',
    desc: 'We maintain regular contact with the factory throughout the manufacturing process, providing you with progress updates and photos.',
    details: [
      'Weekly production status reports with photos',
      'Milestone verification against agreed timeline',
      'Immediate notification of any issues or delays',
      'Coordination with multiple suppliers if needed',
    ],
  },
  {
    num: '06',
    icon: Eye,
    title: 'Quality Inspection',
    duration: 'Before Shipment',
    desc: 'Our QC team inspects finished goods using international AQL standards to ensure they meet your specifications before shipping.',
    details: [
      'Pre-shipment inspection using AQL 2.5 standards',
      'Function, appearance, and measurement checks',
      'Packaging and labeling verification',
      'Detailed inspection report with photos',
      'Go/no-go decision based on your acceptance criteria',
    ],
  },
  {
    num: '07',
    icon: Package,
    title: 'Shipping & Documentation',
    duration: '1-3 Days',
    desc: 'We arrange shipping, prepare customs documentation, and coordinate the logistics from factory to your designated destination.',
    details: [
      'Freight booking (sea, air, or express)',
      'Export customs clearance in China',
      'Commercial invoice, packing list, and B/L preparation',
      'Cargo insurance arrangement',
      'Container loading supervision',
    ],
  },
  {
    num: '08',
    icon: Truck,
    title: 'Delivery & Follow-up',
    duration: 'Transit + Arrival',
    desc: 'We track your shipment and provide support through customs clearance at destination. We also follow up to ensure everything arrived as expected.',
    details: [
      'Real-time shipment tracking updates',
      'Import customs documentation assistance',
      'Post-delivery quality verification support',
      'Feedback collection for future orders',
    ],
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
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5">
            How Our Sourcing Process Works
          </h1>
          <p id="hiw-page-subtitle" className="text-blue-100 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process that takes you from initial inquiry to delivered goods.
            No surprises, no hidden steps.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="flex flex-col gap-12 md:gap-16">
              {steps.map((step) => (
                <div key={step.num} className="relative flex gap-6 md:gap-8">
                  {/* Step number circle */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center text-base md:text-lg font-bold shadow-lg">
                      {step.num}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-4 flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-text-primary">{step.title}</h3>
                      <span className="flex items-center gap-1.5 text-accent text-xs font-semibold bg-accent/10 px-3 py-1 rounded-full">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-text-secondary text-base leading-relaxed mb-4">{step.desc}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-sm">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typical Timeline Overview */}
      <section className="py-16 md:py-20 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">Typical Project Timeline</h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              While timelines vary by product complexity, here is a general overview of what to expect.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { phase: 'Research', time: '3-5 days', desc: 'Supplier identification and shortlisting' },
              { phase: 'Samples', time: '1-3 weeks', desc: 'Sample development and approval' },
              { phase: 'Production', time: '2-8 weeks', desc: 'Manufacturing and QC inspection' },
              { phase: 'Shipping', time: '1-6 weeks', desc: 'Logistics and customs clearance' },
            ].map((item) => (
              <div key={item.phase} className="bg-white rounded-xl p-6 border border-border text-center">
                <h3 className="text-lg font-bold text-primary mb-1">{item.phase}</h3>
                <div className="text-2xl font-bold text-text-primary mb-2">{item.time}</div>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Sourcing Project in Mind?"
        subtitle="Send us your requirements and we will provide a customized sourcing plan within 24 hours."
      />
    </div>
  );
}
