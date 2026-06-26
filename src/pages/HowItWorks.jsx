import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, Factory, ClipboardCheck, Truck, CheckCircle, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    id: 'step1',
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product details — what you need, target quantity, budget, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: [
      'Product name, description, and specifications',
      'Target quantity and acceptable MOQ',
      'Budget range and target unit price',
      'Required certifications (CE, RoHS, FDA, etc.)',
      'Delivery timeline and destination',
    ],
    imgQuery: 'business inquiry form sourcing request China',
    timeline: 'Day 1',
  },
  {
    id: 'step2',
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team researches manufacturers from our verified network, trade databases, and industry contacts. We shortlist 3–5 suppliers that match your requirements and prepare a comparison report.',
    details: [
      'Database and network research',
      'Initial supplier screening and background check',
      'Price and MOQ comparison',
      'Capability and certification review',
      'Structured comparison report delivered to you',
    ],
    imgQuery: 'supplier research database China manufacturer shortlist',
    timeline: 'Days 2–5',
  },
  {
    id: 'step3',
    number: '03',
    icon: Factory,
    title: 'Factory Audit & Sample Review',
    desc: 'Once you select a preferred supplier, we conduct an on-site factory audit and arrange product samples. We review samples against your specifications before shipping them to you.',
    details: [
      'On-site factory visit and audit',
      'Production capacity and equipment check',
      'Sample arrangement and pre-review',
      'Audit report with photos',
      'Sample shipment to your location',
    ],
    imgQuery: 'factory audit visit China manufacturing inspection',
    timeline: 'Days 6–14',
  },
  {
    id: 'step4',
    number: '04',
    icon: ClipboardCheck,
    title: 'Order Placement & Production Monitoring',
    desc: 'After sample approval, we assist with order placement and monitor production throughout the manufacturing run. You receive regular updates and photos at key milestones.',
    details: [
      'Purchase order review and placement support',
      'Production schedule confirmation',
      'Weekly production updates with photos',
      'Material and component verification',
      'Issue identification and resolution',
    ],
    imgQuery: 'production monitoring factory China manufacturing order',
    timeline: 'Weeks 2–8',
  },
  {
    id: 'step5',
    number: '05',
    icon: ClipboardCheck,
    title: 'Pre-Shipment Quality Inspection',
    desc: 'Before goods are packed and shipped, our QC inspectors conduct a thorough pre-shipment inspection following AQL standards. You receive a full report before approving shipment.',
    details: [
      'AQL sampling and defect classification',
      'Measurement, function, and appearance checks',
      'Packaging and labeling verification',
      'Same-day inspection report with photos',
      'Pass/fail recommendation',
    ],
    imgQuery: 'pre-shipment quality inspection China factory QC check',
    timeline: 'Week 7–8',
  },
  {
    id: 'step6',
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'Once inspection is approved, we coordinate with freight forwarders to arrange shipment. We handle export documentation and track your cargo to destination.',
    details: [
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Shipment booking (sea, air, or express)',
      'Cargo tracking and updates',
      'Delivery confirmation',
    ],
    imgQuery: 'shipping container port China export freight logistics',
    timeline: 'Weeks 8–12',
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
      <section className="bg-[#0d2340] py-20 md:py-28">
        <div className="section-container text-center">
          <p className="text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            A transparent, step-by-step sourcing process designed to protect your business and deliver results. Here's exactly what happens from your first inquiry to delivery.
          </p>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-12 bg-[#f4f6f9] border-b border-slate-200">
        <div className="section-container">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {steps.map(({ number, title, timeline }) => (
              <div key={number} className="text-center">
                <div className="w-10 h-10 bg-[#1a4f8a] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                  {number}
                </div>
                <p className="text-xs font-semibold text-[#0d2340] leading-tight mb-1">{title.split(' ').slice(0, 3).join(' ')}</p>
                <p className="text-xs text-[#e8621a] font-medium">{timeline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="section-container">
          <div className="flex flex-col gap-20">
            {steps.map(({ id, number, icon: Icon, title, desc, details, imgQuery, timeline }, index) => (
              <div
                key={id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-5xl font-bold text-[#1a4f8a]/10 leading-none">{number}</div>
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#1a4f8a]" />
                    </div>
                    <span className="text-xs font-semibold text-[#e8621a] bg-orange-50 px-3 py-1 rounded-full">{timeline}</span>
                  </div>
                  <h2 id={`step-title-${id}`} className="text-2xl md:text-3xl font-bold text-[#0d2340] mb-4">{title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>
                  <ul className="flex flex-col gap-2">
                    {details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-[#1a4f8a] flex-shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden aspect-[4/3] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={`step-img-${id}-ss`}
                    data-strk-img={`[step-title-${id}] ${imgQuery}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d2340]">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Sourcing Project</h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Submit your inquiry today and receive a sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg inline-flex items-center gap-2"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
