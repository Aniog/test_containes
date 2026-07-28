import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Search, Building2, ClipboardCheck, Factory, Ship, ArrowRight, CheckCircle, FileText, Users, Shield } from 'lucide-react';

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'Finding the right manufacturer is the foundation of successful sourcing. We leverage our extensive network and industry knowledge to identify suppliers that match your specific requirements.',
    details: [
      'Search across our database of 5,000+ verified manufacturers',
      'Match suppliers to your product specifications and quality standards',
      'Request and compare quotations from multiple factories',
      'Negotiate pricing, MOQs, and payment terms on your behalf',
      'Provide detailed supplier profiles with capabilities assessment',
    ],
    imgId: 'service-sourcing-3a7b9c',
    titleId: 'service-sourcing-title',
    descId: 'service-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: Building2,
    title: 'Factory Verification',
    description: 'Before you commit to a supplier, we conduct thorough on-site verification to ensure they are legitimate, capable, and reliable.',
    details: [
      'Verify business licenses, tax registration, and export credentials',
      'On-site factory audit covering production facilities and equipment',
      'Assess production capacity, workforce size, and management systems',
      'Check quality control processes and certification validity',
      'Evaluate working conditions and social compliance standards',
    ],
    imgId: 'service-verification-8d2e4f',
    titleId: 'service-verification-title',
    descId: 'service-verification-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our inspection services catch quality issues before products leave the factory, saving you from costly returns and customer complaints.',
    details: [
      'Pre-production inspection: verify raw materials and components',
      'During-production inspection: catch issues while production is ongoing',
      'Pre-shipment inspection: final quality check before goods ship',
      'Container loading supervision: ensure correct quantities and proper packing',
      'Detailed reports with photos, measurements, and pass/fail assessments',
    ],
    imgId: 'service-inspection-5c1f6a',
    titleId: 'service-inspection-title',
    descId: 'service-inspection-desc',
  },
  {
    id: 'production-monitoring',
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Stay informed about your order\'s progress with regular updates and factory visits throughout the production cycle.',
    details: [
      'Weekly production status reports with photos and timelines',
      'Regular factory visits to monitor progress and quality',
      'Early warning system for potential delays or issues',
      'Coordination with factory to resolve production problems',
      'Real-time communication via your preferred channel',
    ],
    imgId: 'service-monitoring-9e4b2d',
    titleId: 'service-monitoring-title',
    descId: 'service-monitoring-desc',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'From factory floor to your warehouse, we handle the logistics so you can focus on your business.',
    details: [
      'Freight forwarding via sea or air based on your timeline and budget',
      'Customs documentation and export clearance in China',
      'Cargo consolidation for orders from multiple suppliers',
      'Import customs support for your destination country',
      'Door-to-door or port-to-port delivery options',
    ],
    imgId: 'service-shipping-7f3a8b',
    titleId: 'service-shipping-title',
    descId: 'service-shipping-desc',
  },
];

export default function ServicesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
            <p className="text-lg text-slate-300 mb-8">
              Comprehensive sourcing support from supplier discovery to delivery. Every service is designed to reduce risk and save you time.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services List */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h2 id={service.titleId} className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p id={service.descId} className="text-lg text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title text-white">Why Choose Our Services</h2>
            <p className="section-subtitle text-slate-400">
              What sets us apart from other sourcing agents.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Risk Reduction', desc: 'Verified suppliers and quality inspections protect your investment.' },
              { icon: FileText, title: 'Transparent Reporting', desc: 'Detailed reports with photos at every stage of the process.' },
              { icon: Users, title: 'Dedicated Support', desc: 'A bilingual project manager assigned to your account.' },
              { icon: CheckCircle, title: 'Quality Guarantee', desc: 'We don\'t release payment until you approve the quality.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-orange-500 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Tell us what you need and we'll provide a free sourcing plan with supplier recommendations and cost estimates.
          </p>
          <Link to="/contact" className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors inline-flex items-center">
            Get Your Free Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
