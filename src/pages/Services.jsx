import { Link } from 'react-router-dom';
import { Search, Factory, ShieldCheck, Ship, ClipboardList, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We identify and vet qualified manufacturers in China based on your product requirements, budget, and quality standards.',
    details: [
      'Product requirement analysis',
      'Supplier database search and shortlisting',
      'Initial capability and capacity assessment',
      'Price and term negotiation support',
      'Sample coordination and review',
    ],
    icon: Search,
  },
  {
    title: 'Factory Verification',
    description: 'On-site factory audits to verify business licenses, production capacity, quality systems, and social compliance.',
    details: [
      'Business license and registration verification',
      'Factory floor and equipment inspection',
      'Production capacity assessment',
      'Quality management system review',
      'Social compliance and workplace safety check',
    ],
    icon: Factory,
  },
  {
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
    details: [
      'Pre-production material and first-article inspection',
      'During-production random checks',
      'Pre-shipment final inspection',
      'Packaging and labeling verification',
      'Detailed inspection report with photos',
    ],
    icon: ShieldCheck,
  },
  {
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs documentation, and door-to-door delivery.',
    details: [
      'Freight forwarding by air, sea, or express',
      'Export documentation preparation',
      'Customs clearance support',
      'Cargo insurance arrangement',
      'Shipment tracking and delivery confirmation',
    ],
    icon: Ship,
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col">
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="services-title" className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Our Sourcing Services
            </h1>
            <p id="services-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Comprehensive sourcing solutions designed to reduce risk, improve quality, and streamline your supply chain from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map(({ title, description, details, icon: Icon }) => (
              <div key={title} className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-900">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-slate-900">{title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
                  <ul className="mt-6 space-y-3">
                    {details.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                        <span className="text-sm leading-relaxed text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
                  >
                    Request this service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div>
                  <img
                    alt={title}
                    className="rounded-2xl shadow-lg"
                    data-strk-img-id={`service-${title.replace(/\s+/g, '-').toLowerCase()}-img`}
                    data-strk-img={`[services-subtitle] [services-title] [section-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="services-cta-title" className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Need a Custom Sourcing Solution?
          </h2>
          <p id="services-cta-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Tell us about your product and requirements. We will propose a tailored sourcing plan for your business.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
