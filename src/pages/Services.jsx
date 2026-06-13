import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Search, CheckCircle, Ship, BarChart3, Award, ClipboardList, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    points: [
      'Targeted supplier search based on your product specifications',
      'Multi-channel sourcing across Alibaba, trade shows, and factory clusters',
      'Shortlisted suppliers with comparison reports within 48 hours',
      'Price negotiation and payment term facilitation',
    ],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Factory Verification',
    subtitle: 'Know exactly who you are dealing with',
    points: [
      'On-site factory audit by our local team',
      'Verification of business licenses and certifications',
      'Production capacity and equipment assessment',
      'Social compliance and working conditions evaluation',
      'Detailed photo and video documentation',
    ],
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: 'Quality Inspection',
    subtitle: 'Comprehensive QC at every stage',
    points: [
      'Pre-production inspection (raw materials check)',
      'During-production inspection (DUPRO)',
      'Pre-shipment inspection (PSI) with AQL sampling',
      'Container loading supervision',
      'Custom inspection checklists for your products',
    ],
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Production Monitoring',
    subtitle: 'Stay informed throughout the manufacturing process',
    points: [
      'Weekly production status reports',
      'Raw material sourcing verification',
      'Production milestone tracking',
      'Early warning system for delays',
      'Photo and video updates from the factory floor',
    ],
  },
  {
    icon: <Ship className="w-8 h-8" />,
    title: 'Shipping & Logistics',
    subtitle: 'Get your products delivered hassle-free',
    points: [
      'Sea freight (FCL & LCL) and air freight options',
      'Customs documentation and clearance',
      'Warehousing and consolidation services',
      'Door-to-door delivery worldwide',
      'Real-time tracking and shipment updates',
    ],
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Product Customization',
    subtitle: 'Turn your ideas into finished products',
    points: [
      'Custom product development from concept to production',
      'Mold and tooling coordination',
      'Packaging design and branding',
      'Regulatory compliance support (CE, FDA, RoHS, etc.)',
      'Sample development and approval management',
    ],
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg lg:text-xl text-primary-100">
              Comprehensive China sourcing services designed to minimize risk, save time, and ensure quality.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                <div className="flex-1">
                  <div className="w-14 h-14 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-5">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-2">{service.title}</h2>
                  <p className="text-lg text-neutral-600 mb-6">{service.subtitle}</p>
                  <ul className="space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-neutral-600">
                        <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div
                    className="bg-neutral-100 rounded-2xl h-64 lg:h-80 flex items-center justify-center border border-neutral-200"
                    data-strk-bg-id={`service-bg-${idx}`}
                    data-strk-bg={`[service-title-${idx}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  >
                    <span id={`service-title-${idx}`} className="hidden">{service.title}</span>
                    <div className="text-center p-6">
                      <div className="w-16 h-16 mx-auto bg-primary-100 text-primary-500 rounded-full flex items-center justify-center mb-3">
                        {React.cloneElement(service.icon, { className: 'w-10 h-10' })}
                      </div>
                      <p className="text-neutral-400 text-sm">{service.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Need a Custom Service Package?</h2>
          <p className="text-lg text-neutral-600 mb-8">
            We tailor our services to your specific product, budget, and timeline. Tell us what you need.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}