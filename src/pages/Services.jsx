import React, { useEffect, useRef } from 'react';
import strkImgConfig from '../strk-img-config.json';
import { Link } from 'react-router-dom';
import { Search, Shield, Award, Clock, Truck, FileCheck, Users, Package } from 'lucide-react';

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      const config = strkImgConfig;
      return window.ImageHelper.loadImages(config, containerRef.current);
    }
  }, []);

  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      desc: 'We identify manufacturers that match your exact specifications, quality requirements, and production capacity needs.',
      details: [
        'Product specification analysis',
        'Supplier database search and outreach',
        'Initial capability screening',
        'Competitive pricing comparison',
        'Shortlist with detailed profiles',
      ],
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      desc: 'On-site audits confirm that suppliers are legitimate, capable, and compliant before you place orders.',
      details: [
        'Business license and ownership verification',
        'Production capacity assessment',
        'Equipment and facility inspection',
        'Quality system review',
        'Social compliance check',
      ],
    },
    {
      icon: Award,
      title: 'Quality Control & Inspection',
      desc: 'Independent inspections at critical stages ensure products meet your standards before they leave the factory.',
      details: [
        'Pre-production sample review',
        'During-production inspection',
        'Pre-shipment inspection (AQL)',
        'Container loading supervision',
        'Photo and video documentation',
      ],
    },
    {
      icon: Clock,
      title: 'Production Monitoring',
      desc: 'Regular updates and milestone tracking keep you informed throughout the manufacturing process.',
      details: [
        'Production schedule confirmation',
        'Weekly progress reports',
        'Issue identification and escalation',
        'Sample approval coordination',
        'Timeline risk management',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      desc: 'We handle logistics details so your goods arrive on time and with correct documentation.',
      details: [
        'Freight quote comparison',
        'Booking and carrier coordination',
        'Export documentation preparation',
        'Customs clearance support',
        'Delivery tracking to destination',
      ],
    },
    {
      icon: FileCheck,
      title: 'Order Management',
      desc: 'End-to-end coordination from initial inquiry through final delivery and after-sales support.',
      details: [
        'Contract and PO review',
        'Payment milestone management',
        'Sample development tracking',
        'Change order handling',
        'After-delivery support',
      ],
    },
  ];

  const additionalServices = [
    { icon: Package, title: 'Packaging Development', desc: 'Custom packaging design, material sourcing, and compliance labeling.' },
    { icon: Users, title: 'Trade Show Support', desc: 'Supplier introductions, meeting coordination, and on-site translation.' },
    { icon: FileCheck, title: 'Certification Assistance', desc: 'Support for CE, FCC, RoHS, ISO, and other required certifications.' },
  ];

  return (
    <div ref={containerRef}>
      <div className="page-header">
        <div className="page-header-container">
          <h1 id="services-hero-title">Our Services</h1>
          <p id="services-hero-subtitle">Comprehensive support for every stage of sourcing from China</p>
        </div>
      </div>

      <section className="section">
        <div className="max-w-1280 mx-auto px-6" style={{ marginBottom: '2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <img
              data-strk-img-id="services-hero"
              data-strk-img="[services-hero-subtitle] [services-hero-title] professional services"
              data-strk-img-ratio="16x9"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
              alt="Professional sourcing services"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
        </div>
        <div className="max-w-1280 mx-auto px-6">
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {services.map((service, idx) => {
              const imgKey = ['services-sourcing', 'services-verification', 'services-qc', 'services-production', 'services-shipping', 'services-order'][idx];
              return (
                <div key={idx} className="card" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1rem' }}>
                    <div className="service-icon" style={{ flexShrink: 0 }}>
                      <service.icon size={26} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 id={`service-title-${idx}`} style={{ marginBottom: '0.5rem' }}>{service.title}</h3>
                      <p style={{ marginBottom: '0.75rem' }}>{service.desc}</p>
                    </div>
                  </div>
                  <img
                    data-strk-img-id={imgKey}
                    data-strk-img={`[service-title-${idx}] services sourcing verification quality`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    alt={service.title}
                    style={{ width: '100%', borderRadius: '6px', marginBottom: '0.75rem' }}
                  />
                  <ul style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', paddingLeft: '1.25rem', margin: 0 }}>
                    {service.details.map((detail, i) => (
                      <li key={i} style={{ marginBottom: '0.25rem' }}>{detail}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="max-w-1280 mx-auto px-6">
          <h2 className="section-title">Additional Support</h2>
          <p className="section-subtitle">Services that complement our core offering</p>
          <div className="services-grid">
            {additionalServices.map((svc, idx) => (
              <div key={idx} className="card service-card">
                <div className="service-icon">
                  <svc.icon size={24} />
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="max-w-1280 mx-auto px-6 text-center">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Ready to Get Started?</h2>
          <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
            Tell us about your sourcing needs and receive a detailed proposal within 24 hours.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;