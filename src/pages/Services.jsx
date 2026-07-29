import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Shield, ClipboardCheck, Factory, Truck, 
  FileText, Users, Award, Package, Globe 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and qualify manufacturers that match your product specifications, quality requirements, and volume needs.',
      details: [
        'Product specification analysis and supplier matching',
        'Access to our verified supplier database',
        'Targeted outreach to manufacturers',
        'Initial capability screening',
        'Competitive pricing comparison',
      ],
    },
    {
      icon: Shield,
      title: 'Factory Verification & Audits',
      description: 'On-site verification to confirm that suppliers are legitimate, capable, and suitable for your requirements.',
      details: [
        'Business license and legal verification',
        'Production capacity assessment',
        'Equipment and facility inspection',
        'Quality management system review',
        'Workforce and management evaluation',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Independent inspection services to verify product quality before shipment and reduce the risk of receiving defective goods.',
      details: [
        'Pre-shipment inspection (PSI)',
        'During production inspection (DPI)',
        'Initial production check (IPC)',
        'Container loading supervision',
        'Detailed reports with photos and measurements',
      ],
    },
    {
      icon: Factory,
      title: 'Production Monitoring',
      description: 'Ongoing oversight of your orders to track progress, identify issues early, and keep you informed.',
      details: [
        'Production schedule tracking',
        'Milestone reporting with photos',
        'Issue identification and escalation',
        'Communication with factory management',
        'Timeline and delivery risk alerts',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics Coordination',
      description: 'We manage the logistics process from factory to your destination, including documentation and freight coordination.',
      details: [
        'Freight quote comparison and booking',
        'Export documentation preparation',
        'Customs clearance coordination',
        'Consolidation and warehousing options',
        'Delivery tracking and updates',
      ],
    },
    {
      icon: FileText,
      title: 'Contract & Compliance Support',
      description: 'Guidance on commercial terms, quality agreements, and basic compliance considerations for sourcing from China.',
      details: [
        'Purchase order and contract review',
        'Quality agreement templates',
        'Payment term recommendations',
        'Intellectual property considerations',
        'Basic regulatory guidance by category',
      ],
    },
  ];

  return (
    <>
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <div style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              OUR SERVICES
            </div>
            <h1 style={{ marginBottom: '1rem' }}>Professional China Sourcing Services</h1>
            <p className="text-muted" style={{ fontSize: '1.125rem' }}>
              We provide the on-the-ground support international buyers need to source from China with greater confidence and control.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="card-icon">
                  <service.icon size={24} />
                </div>
                <h3 style={{ marginBottom: '0.75rem' }}>{service.title}</h3>
                <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '0.9375rem' }}>
                  {service.description}
                </p>
                <ul style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', paddingLeft: '1.25rem', margin: 0 }}>
                  {service.details.map((detail, i) => (
                    <li key={i} style={{ marginBottom: '0.35rem' }}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>How We Work With Buyers</h2>
          <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
            We operate as an extension of your team. You maintain direct relationships with suppliers while we provide the local presence, verification, and oversight that reduces risk.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/how-it-works" className="btn btn-secondary">See the Process</Link>
            <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2>Service Packages</h2>
            <p className="text-muted">We tailor our involvement to your needs and risk tolerance.</p>
          </div>
          <div className="grid-3">
            {[
              {
                title: 'Sourcing Only',
                desc: 'Supplier identification and initial screening. You handle verification, sampling, and follow-up.',
                items: ['Supplier shortlist', 'Basic capability check', 'Contact information'],
              },
              {
                title: 'Verification Package',
                desc: 'Full factory audit plus sample coordination. Recommended for first-time suppliers.',
                items: ['On-site factory audit', 'Sample coordination', 'Detailed audit report'],
              },
              {
                title: 'Full Service',
                desc: 'End-to-end support from sourcing through delivery. We manage the process for you.',
                items: ['All verification services', 'Production monitoring', 'QC & logistics support'],
              },
            ].map((pkg, index) => (
              <div key={index} className="card">
                <h3 style={{ marginBottom: '0.5rem' }}>{pkg.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.9375rem', marginBottom: '1rem' }}>{pkg.desc}</p>
                <ul style={{ fontSize: '0.875rem', paddingLeft: '1.25rem', margin: 0 }}>
                  {pkg.items.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.25rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
            Contact us for a custom proposal based on your specific requirements.
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;