import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Factory, ClipboardCheck, Truck, Package, 
  FileCheck, CreditCard, Shield, ArrowRight, CheckCircle,
  Globe, Clock, Users, Award
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We find and vet reliable suppliers matching your exact requirements, quality standards, and budget constraints.',
      features: [
        'Custom supplier matching based on your criteria',
        'Background checks and credit verification',
        'Price negotiation support',
        'Multiple supplier comparisons',
      ],
    },
    {
      icon: Factory,
      title: 'Factory Verification',
      description: 'On-site inspections to verify factory existence, production capacity, certifications, and legitimacy.',
      features: [
        'Physical factory visits with photo/video documentation',
        'Business license and certification verification',
        'Production capacity assessment',
        'Quality management system evaluation',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-shipment inspections ensuring your products meet specifications and quality standards.',
      features: [
        'AQL-based inspection protocols',
        'Detailed inspection reports with photos',
        'Functionality and safety testing',
        'Packaging and labeling verification',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination from factory to your doorstep, including customs clearance.',
      features: [
        'Multi-modal shipping options (air, sea, land)',
        'Customs clearance assistance',
        'Freight forwarding coordination',
        'Door-to-door delivery tracking',
      ],
    },
    {
      icon: Package,
      title: 'Sample Management',
      description: 'We handle the entire sample process, from requesting samples to shipping them to you.',
      features: [
        'Sample request and follow-up',
        'Quality assessment of samples',
        'International sample shipping',
        'Sample-to-production coordination',
      ],
    },
    {
      icon: FileCheck,
      title: 'Contract Review',
      description: 'Professional review of manufacturing contracts to protect your interests.',
      features: [
        'Terms and conditions review',
        'IP protection clauses',
        'Quality guarantee verification',
        'Dispute resolution provisions',
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Reduce sourcing risks with our thorough verification and quality control processes.',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Save time with our established supplier network and streamlined processes.',
    },
    {
      icon: CreditCard,
      title: 'Cost Efficiency',
      description: 'Get competitive pricing through our volume relationships and negotiation expertise.',
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Benefit from our on-the-ground team with deep knowledge of Chinese manufacturing.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '120px 0 80px',
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '6px 16px',
              backgroundColor: 'rgba(230, 126, 34, 0.2)',
              color: '#FFB347',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '20px'
            }}>
              Our Services
            </span>
            <h1 style={{ 
              fontSize: '48px', 
              fontWeight: '800', 
              color: 'white', 
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              Complete Sourcing Solutions
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: 'rgba(255,255,255,0.85)', 
              lineHeight: '1.7',
              marginBottom: '32px'
            }}>
              From supplier discovery to final delivery, we handle every step of your China sourcing journey with professional expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '48px' }}>
            {services.map((service, index) => (
              <div key={index} className="card" style={{ padding: '40px' }}>
                <div className="icon-box icon-box-lg" style={{ marginBottom: '24px' }}>
                  <service.icon size={32} />
                </div>
                <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-text-primary)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px',
                      marginBottom: '12px',
                      color: 'var(--color-text-secondary)'
                    }}>
                      <CheckCircle size={18} color="#27AE60" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '16px' }}>
              Why Work With Us
            </h2>
            <p style={{ 
              color: 'var(--color-text-secondary)', 
              maxWidth: '600px', 
              margin: '0 auto',
              fontSize: '18px'
            }}>
              Our comprehensive services deliver measurable value to your sourcing operations.
            </p>
          </div>

          <div className="grid-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="card" style={{ textAlign: 'center', padding: '32px 24px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: 'rgba(230, 126, 34, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <benefit.icon size={28} color="#E67E22" />
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '12px', color: 'var(--color-text-primary)' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '15px' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '16px' }}>
              Our Service Process
            </h2>
            <p style={{ 
              color: 'var(--color-text-secondary)', 
              maxWidth: '600px', 
              margin: '0 auto',
              fontSize: '18px'
            }}>
              A systematic approach ensuring quality and reliability at every step.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(6, 1fr)', 
            gap: '24px',
            position: 'relative'
          }}>
            {/* Connecting Line */}
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '8%',
              right: '8%',
              height: '2px',
              backgroundColor: 'var(--color-border)',
              zIndex: 0
            }} />

            {[
              { step: '1', title: 'Consultation' },
              { step: '2', title: 'Sourcing' },
              { step: '3', title: 'Verification' },
              { step: '4', title: 'Negotiation' },
              { step: '5', title: 'Production' },
              { step: '6', title: 'Delivery' },
            ].map((item, index) => (
              <div key={index} style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: '700',
                  margin: '0 auto 16px',
                  boxShadow: '0 4px 12px rgba(30, 58, 95, 0.3)'
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: '16px', color: 'var(--color-text-primary)' }}>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="grid-3" style={{ marginTop: '48px' }}>
            <div className="card" style={{ padding: '24px' }}>
              <h4 style={{ marginBottom: '12px', color: 'var(--color-text-primary)' }}>Consultation</h4>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                We discuss your requirements, budget, and quality standards to create a tailored sourcing plan.
              </p>
            </div>
            <div className="card" style={{ padding: '24px' }}>
              <h4 style={{ marginBottom: '12px', color: 'var(--color-text-primary)' }}>Sourcing & Verification</h4>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                We identify and verify suppliers, conducting factory visits and background checks.
              </p>
            </div>
            <div className="card" style={{ padding: '24px' }}>
              <h4 style={{ marginBottom: '12px', color: 'var(--color-text-primary)' }}>Production & Delivery</h4>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                We monitor production, conduct quality inspections, and coordinate shipping to your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', marginBottom: '16px' }}>
            Ready to Streamline Your Sourcing?
          </h2>
          <p style={{ 
            color: 'rgba(255,255,255,0.85)', 
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Get a free consultation and quote for your sourcing needs.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ 
            padding: '18px 36px', 
            fontSize: '18px'
          }}>
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;