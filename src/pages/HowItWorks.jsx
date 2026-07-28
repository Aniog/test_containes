import React, { useEffect, useRef } from 'react';
import strkImgConfig from '../strk-img-config.json';
import { Link } from 'react-router-dom';
import { FileText, Search, CheckCircle, Factory, Truck, PackageCheck } from 'lucide-react';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      const config = strkImgConfig;
      return window.ImageHelper.loadImages(config, containerRef.current);
    }
  }, []);

  const steps = [
    {
      icon: FileText,
      number: '1',
      title: 'Submit Your Requirements',
      duration: 'Day 1',
      desc: 'Complete our inquiry form with product details, specifications, target price, quantity, and timeline. The more detail you provide, the more accurate our recommendations will be.',
      items: ['Product description and specs', 'Target price range', 'Order quantity', 'Required certifications', 'Delivery timeline'],
    },
    {
      icon: Search,
      number: '2',
      title: 'Supplier Identification',
      duration: 'Days 2-7',
      desc: 'We search our database and network to identify manufacturers that match your criteria. We contact suppliers, request quotes, and evaluate initial responses.',
      items: ['Database and network search', 'Supplier outreach', 'Capability screening', 'Price comparison', 'Shortlist of 3-5 options'],
    },
    {
      icon: CheckCircle,
      number: '3',
      title: 'Verification & Samples',
      duration: 'Weeks 2-4',
      desc: 'We conduct on-site factory audits and coordinate sample production. You review samples and approve suppliers before production begins.',
      items: ['Factory audit report', 'Sample production', 'Sample evaluation', 'Supplier comparison', 'Final supplier selection'],
    },
    {
      icon: Factory,
      number: '4',
      title: 'Production Management',
      duration: 'Per production schedule',
      desc: 'Once production starts, we monitor progress, provide regular updates, and conduct in-process and pre-shipment inspections.',
      items: ['Production schedule tracking', 'Weekly progress reports', 'In-process inspection', 'Pre-shipment inspection', 'Photo documentation'],
    },
    {
      icon: Truck,
      number: '5',
      title: 'Shipping Coordination',
      duration: '1-4 weeks',
      desc: 'We handle freight booking, documentation, and coordinate with carriers and forwarders until goods reach your destination.',
      items: ['Freight booking', 'Export documentation', 'Customs support', 'Tracking updates', 'Delivery confirmation'],
    },
    {
      icon: PackageCheck,
      number: '6',
      title: 'Delivery & Follow-up',
      duration: 'After arrival',
      desc: 'We confirm delivery, address any issues, and document the project for future reference. Many clients return for repeat orders.',
      items: ['Delivery confirmation', 'Issue resolution', 'Project documentation', 'Feedback collection', 'Future order support'],
    },
  ];

  const timeline = [
    { phase: 'Inquiry to Shortlist', time: '7-10 business days' },
    { phase: 'Verification & Samples', time: '2-4 weeks' },
    { phase: 'Production Lead Time', time: 'Varies by product' },
    { phase: 'Shipping', time: '1-4 weeks by sea, 3-7 days by air' },
  ];

  return (
    <div ref={containerRef}>
      <div className="page-header">
        <div className="page-header-container">
          <h1 id="how-hero-title">How It Works</h1>
          <p id="how-hero-subtitle">A clear, structured process from inquiry to delivery</p>
        </div>
      </div>

      <section className="section">
        <div className="max-w-1280 mx-auto px-6" style={{ marginBottom: '2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <img
              data-strk-img-id="howitworks-hero"
              data-strk-img="[how-hero-subtitle] [how-hero-title] business process"
              data-strk-img-ratio="16x9"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
              alt="Sourcing process overview"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
        </div>
        <div className="max-w-1280 mx-auto px-6">
          <div style={{ maxWidth: '720px', margin: '0 auto 3rem' }}>
            <p style={{ fontSize: '1.0625rem', textAlign: 'center', color: 'var(--color-text-light)' }}>
              We follow a proven six-step process that minimizes risk and keeps you informed at every stage. 
              Each project is assigned a dedicated sourcing manager who serves as your single point of contact.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
            {steps.map((step, idx) => {
              const imgKey = `process-${idx + 1}`;
              return (
                <div key={idx} className="card" style={{ display: 'flex', gap: '1.5rem', padding: '1.75rem' }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ 
                      width: '56px', 
                      height: '56px', 
                      backgroundColor: 'var(--color-accent)', 
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff'
                    }}>
                      <step.icon size={26} />
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <span style={{ 
                        backgroundColor: 'var(--color-bg-alt)', 
                        padding: '0.125rem 0.5rem', 
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--color-text-muted)'
                      }}>
                        STEP {step.number}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-accent)' }}>{step.duration}</span>
                    </div>
                    <h3 id={`step-title-${idx}`} style={{ marginBottom: '0.5rem' }}>{step.title}</h3>
                    <p style={{ marginBottom: '0.75rem' }}>{step.desc}</p>
                    <img
                      data-strk-img-id={imgKey}
                      data-strk-img={`[step-title-${idx}] sourcing process step`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                      alt={step.title}
                      style={{ width: '100%', borderRadius: '6px', marginBottom: '0.75rem' }}
                    />
                    <ul style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', paddingLeft: '1.25rem', margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.25rem' }}>
                      {step.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="max-w-1280 mx-auto px-6">
          <h2 className="section-title">Typical Timeline</h2>
          <p className="section-subtitle">Actual timing depends on product complexity and order volume</p>
          
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {timeline.map((item, idx) => (
              <div key={idx} className="card" style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '0.75rem',
                padding: '1rem 1.5rem'
              }}>
                <span style={{ fontWeight: 500 }}>{item.phase}</span>
                <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="max-w-1280 mx-auto px-6 text-center">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Questions About the Process?</h2>
          <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
            We are happy to explain any step in detail or customize the process for your specific needs.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us
            </Link>
            <Link to="/services" className="btn btn-secondary btn-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;