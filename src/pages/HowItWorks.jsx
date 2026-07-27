import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, FileText, Search, Factory, ClipboardCheck, Truck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const steps = [
  {
    num: '01',
    icon: FileText,
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product requirements — type, specifications, target price, quantity, and timeline. The more detail you provide, the faster we can get started. No commitment is required at this stage.',
    details: [
      'Product type and description',
      'Target unit price and MOQ',
      'Required certifications (CE, RoHS, etc.)',
      'Delivery timeline',
      'Destination country',
    ],
    titleId: 'step-01-title',
    descId: 'step-01-desc',
    imgId: 'step-01-img-a1b2c3',
  },
  {
    num: '02',
    icon: Search,
    title: 'We Research and Shortlist Suppliers',
    desc: 'Our sourcing team searches our network and conducts fresh market research to identify manufacturers that match your requirements. We verify basic credentials and present you with a curated shortlist of 3–5 qualified suppliers.',
    details: [
      'Market research across manufacturing hubs',
      'Supplier credential pre-screening',
      'Price and capacity comparison',
      'Shortlist report with supplier profiles',
      'Recommended supplier with rationale',
    ],
    titleId: 'step-02-title',
    descId: 'step-02-desc',
    imgId: 'step-02-img-d4e5f6',
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit and Verification',
    desc: 'For your selected supplier, we conduct an on-site factory audit to verify their legitimacy, production capacity, and compliance. You receive a detailed audit report with photos before you commit to any order.',
    details: [
      'Business license and registration check',
      'On-site visit and facility inspection',
      'Production capacity and equipment review',
      'Worker count and skill assessment',
      'Audit report delivered within 5 business days',
    ],
    titleId: 'step-03-title',
    descId: 'step-03-desc',
    imgId: 'step-03-img-g7h8i9',
  },
  {
    num: '04',
    icon: ClipboardCheck,
    title: 'Sample Development and Approval',
    desc: 'We coordinate sample production with the factory, manage feedback rounds, and ensure the final sample meets your specifications before you approve the bulk order. We can also arrange sample shipping to your location.',
    details: [
      'Sample request and timeline management',
      'Sample quality review against specs',
      'Feedback communication to factory',
      'Multiple revision rounds if needed',
      'Sample shipping coordination',
    ],
    titleId: 'step-04-title',
    descId: 'step-04-desc',
    imgId: 'step-04-img-j1k2l3',
  },
  {
    num: '05',
    icon: Factory,
    title: 'Production Monitoring',
    desc: 'Once the order is placed, we monitor production progress, communicate with the factory on your behalf, and provide regular milestone updates. We flag any issues early so they can be resolved without delaying your shipment.',
    details: [
      'Production schedule tracking',
      'Weekly progress updates',
      'Raw material and component checks',
      'Issue identification and escalation',
      'Pre-production and in-line inspections',
    ],
    titleId: 'step-05-title',
    descId: 'step-05-desc',
    imgId: 'step-05-img-m4n5o6',
  },
  {
    num: '06',
    icon: Truck,
    title: 'Quality Inspection and Shipping',
    desc: 'Before goods leave the factory, our inspectors conduct a pre-shipment inspection against your specifications. Once approved, we coordinate with freight forwarders to arrange shipping and handle all export documentation.',
    details: [
      'Pre-shipment inspection (AQL standard)',
      'Detailed inspection report with photos',
      'Freight forwarder coordination',
      'Export documentation preparation',
      'Shipment tracking until delivery',
    ],
    titleId: 'step-06-title',
    descId: 'step-06-desc',
    imgId: 'step-06-img-p7q8r9',
  },
];

const timelines = [
  { phase: 'Inquiry to Supplier Shortlist', duration: '5–10 business days' },
  { phase: 'Factory Audit Report', duration: '3–5 business days after visit' },
  { phase: 'Sample Development', duration: '2–4 weeks (varies by product)' },
  { phase: 'Production (typical order)', duration: '3–8 weeks (varies by product)' },
  { phase: 'Pre-Shipment Inspection', duration: '1–2 business days' },
  { phase: 'Sea Freight (to Europe/US)', duration: '25–40 days' },
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
      <section className="bg-navy-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
              How We Work With You
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              A transparent, step-by-step process that gives you full visibility and control over your China sourcing project — from first inquiry to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {steps.map(({ num, icon: Icon, title, desc, details, titleId, descId, imgId }, index) => (
              <div
                key={num}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-5xl font-bold text-navy-100 leading-none">{num}</span>
                    <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{title}</h2>
                  <p id={descId} className="text-gray-500 leading-relaxed mb-6">{desc}</p>
                  <ul className="flex flex-col gap-2">
                    {details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-gray-700 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-xl overflow-hidden bg-gray-100 h-72 lg:h-80 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
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

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold-600 font-semibold text-sm uppercase tracking-wider">Timelines</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Typical Project Timelines</h2>
            <p className="text-gray-500">Timelines vary by product complexity and order size. These are typical ranges for standard orders.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {timelines.map(({ phase, duration }, i) => (
              <div key={phase} className={`flex items-center justify-between px-6 py-4 ${i < timelines.length - 1 ? 'border-b border-gray-100' : ''}`}>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gold-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{phase}</span>
                </div>
                <span className="text-navy-800 font-semibold text-sm bg-navy-50 px-3 py-1 rounded-full">{duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Submit your sourcing inquiry today and we'll respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-gold-700 font-bold px-10 py-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Submit a Sourcing Inquiry
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
