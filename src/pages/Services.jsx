import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ShieldCheck, ClipboardCheck, TrendingUp, Truck,
  ArrowRight, CheckCircle, BarChart3, FileText, Camera, Package,
  Calendar, MessageSquare, Anchor, FileCheck, Clock
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    shortDesc: 'Find the right factory for your product.',
    fullDesc: 'We leverage our extensive network of vetted suppliers across China to identify factories that match your exact specifications, quality requirements, and price targets. We do not just send you a list — we pre-qualify every supplier before presenting them to you.',
    features: [
      'Access to 500+ verified factories across major manufacturing hubs',
      'Supplier matching based on product type, MOQ, and budget',
      'Initial price quotations and capability assessments',
      'Comparison reports with pros and cons for each option',
    ],
    imageQuery: 'china factory manufacturing supplier sourcing',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    shortDesc: 'Know who you are working with before you pay.',
    fullDesc: 'Our team conducts thorough on-site factory audits to verify business licenses, production capacity, equipment condition, certifications, and financial health. You receive a detailed audit report with photos, scores, and recommendations.',
    features: [
      'On-site visits by our local team in Shenzhen and Guangzhou',
      'Business license and registration verification',
      'Production line and equipment inspection',
      'Certification checks (ISO, BSCI, etc.)',
      'Financial stability and export history review',
      'Detailed PDF audit report with photo evidence',
    ],
    imageQuery: 'factory audit verification inspection china',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    shortDesc: 'Ensure every shipment meets your standards.',
    fullDesc: 'We perform inspections at every critical stage — from raw materials to finished goods. Our QC inspectors follow AQL (Acceptable Quality Limit) standards and provide detailed reports with photos, measurements, and pass/fail results.',
    features: [
      'Pre-production inspection (materials and samples)',
      'During-production inspection (in-process checks)',
      'Pre-shipment inspection (final goods before dispatch)',
      'Container loading supervision',
      'AQL-based sampling and defect classification',
      'Photo and video reports with measurements',
    ],
    imageQuery: 'quality control inspection factory china QC',
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    shortDesc: 'Stay on top of every order, every day.',
    fullDesc: 'Once production begins, we monitor it daily. We push factories to stay on schedule, catch quality issues early, and keep you informed with regular photo updates and progress reports. You will never wonder where your order stands.',
    features: [
      'Daily production status updates with photos',
      'Early warning system for delays or quality issues',
      'Direct communication with factory management',
      'Milestone tracking against agreed timelines',
      'Weekly summary reports sent to your inbox',
    ],
    imageQuery: 'production monitoring factory management china',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    shortDesc: 'From factory floor to your warehouse door.',
    fullDesc: 'We handle the logistics so you do not have to. We coordinate with freight forwarders, supervise container loading, prepare export documentation, and provide customs clearance support to ensure smooth delivery.',
    features: [
      'Freight forwarding coordination (sea, air, rail)',
      'Container loading supervision and photos',
      'Export documentation preparation',
      'Customs clearance guidance',
      'Delivery tracking and status updates',
      'Support for all Incoterms: FOB, CIF, DDP, etc.',
    ],
    imageQuery: 'shipping logistics container port export china',
  },
];

export default function ServicesPage() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Our Sourcing Services</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Comprehensive end-to-end sourcing solutions designed to reduce risk, cut costs, and give you peace of mind when buying from China.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, i) => (
              <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                    <img
                      data-strk-img-id={`service-${i}-img`}
                      data-strk-img={`[service-${i}-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <h2 id={`service-${i}-title`} className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">{service.title}</h2>
                  <p className="text-blue-700 font-medium mb-4">{service.shortDesc}</p>
                  <p className="text-slate-500 leading-relaxed mb-6">{service.fullDesc}</p>
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-800 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Request This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Additional Services</h2>
            <p className="text-slate-500 text-lg">Flexible add-ons to customize your sourcing experience.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, title: 'Market Research', desc: 'Competitive pricing analysis and market trend reports for your product category.' },
              { icon: FileText, title: 'Contract Review', desc: 'We review supplier contracts and terms to protect your interests before signing.' },
              { icon: Camera, title: 'Product Photography', desc: 'Professional photos of samples and production batches for your listings.' },
              { icon: Package, title: 'Packaging Design', desc: 'Custom packaging and labeling design with supplier coordination.' },
              { icon: Calendar, title: 'Order Scheduling', desc: 'Production planning and timeline optimization for seasonal products.' },
              { icon: MessageSquare, title: 'Supplier Negotiation', desc: 'Experienced negotiators secure better pricing, terms, and MOQs for you.' },
              { icon: Anchor, title: 'Warehousing', desc: 'Consolidated warehousing in Shenzhen for multi-supplier orders.' },
              { icon: FileCheck, title: 'Compliance Testing', desc: 'Third-party lab testing for CE, FCC, RoHS, and other required certifications.' },
            ].map((addon) => (
              <div key={addon.title} className="bg-white rounded-xl p-6 border border-slate-100">
                <addon.icon className="w-6 h-6 text-blue-700 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">{addon.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-slate-300 mb-8">Talk to our team and we will recommend the right package for your project — no obligation required.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-600 transition-colors"
          >
            Get a Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
