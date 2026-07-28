import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Shield, ClipboardCheck, Factory, Ship, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate manufacturers that match your product requirements, quality standards, and budget. Our team searches across multiple industrial regions in China to find the best fit.',
    features: [
      'Market research and supplier identification',
      'Initial capability assessment',
      'RFQ management and price comparison',
      'Supplier shortlisting with detailed profiles',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'Before you commit to any supplier, we conduct thorough on-site audits to verify their legitimacy, production capacity, and quality management systems.',
    features: [
      'Business license and registration verification',
      'Production facility inspection',
      'Quality management system review',
      'Social compliance and environmental checks',
      'Detailed audit report with photos and videos',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our quality control team conducts inspections at every critical stage of production to ensure your products meet specifications before they leave the factory.',
    features: [
      'Pre-production sample evaluation',
      'During-production (DUPRO) inspections',
      'Pre-shipment final random inspections',
      'Container loading supervision',
      'Detailed inspection reports with measurements',
    ],
  },
  {
    icon: Factory,
    title: 'Production Monitoring',
    description: 'We keep a close eye on your production progress with regular factory visits and status updates, so you always know where your order stands.',
    features: [
      'Production schedule tracking',
      'Regular progress reports with photos',
      'Issue identification and resolution',
      'Timeline management and delay prevention',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'From factory door to your warehouse, we manage the entire logistics chain including customs documentation, freight forwarding, and delivery tracking.',
    features: [
      'Freight forwarding (sea and air)',
      'Customs documentation preparation',
      'Export and import clearance support',
      'Cargo insurance arrangement',
      'Real-time shipment tracking',
    ],
  },
  {
    icon: ArrowRight,
    title: 'Custom Sourcing Solutions',
    description: 'Every business is different. We tailor our services to your specific needs, whether you need a one-time sourcing project or an ongoing supply chain partnership.',
    features: [
      'Customized sourcing strategies',
      'OEM/ODM project management',
      'Product development support',
      'Long-term supply chain management',
    ],
  },
];

export default function ServicesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-20 lg:py-28">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
            <p className="text-lg text-slate-300">
              End-to-end sourcing solutions designed to help international buyers purchase from China with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      data-strk-img-id={`service-img-${index}-a1b2c3`}
                      data-strk-img={`[service-title-${index}] [services-page-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
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
          <h2 className="section-title">Need a Custom Sourcing Solution?</h2>
          <p className="section-subtitle mx-auto mb-8">
            Tell us about your specific requirements, and we will design a sourcing plan tailored to your needs.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
