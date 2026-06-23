import { Link } from 'react-router-dom';
import { 
  Search, Factory, FileCheck, Shield, Truck, DollarSign, 
  CheckCircle, ArrowRight, Phone, Mail, Clock
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify supplier legitimacy, business licenses, factory capacity, and certifications to ensure you work with trustworthy partners.',
      features: [
        'Business license verification',
        'Factory capacity assessment',
        'Certification verification (ISO, CE, FCC, etc.)',
        'Financial stability check',
        'Reference checks from existing clients',
        'Background investigation',
      ],
    },
    {
      icon: Factory,
      title: 'Factory Audit',
      description: 'Comprehensive on-site audits assessing production capabilities, quality management systems, worker conditions, and compliance.',
      features: [
        'Production line inspection',
        'Quality management system review',
        'Worker conditions assessment',
        'Compliance verification',
        'Capacity verification',
        'Equipment and machinery check',
      ],
    },
    {
      icon: FileCheck,
      title: 'Quality Inspection',
      description: 'Pre-shipment inspections at key production stages. We check product specifications, functionality, packaging, and compliance.',
      features: [
        'Pre-production inspection',
        'In-line inspection',
        'Pre-shipment inspection',
        'Container loading supervision',
        'Lab testing coordination',
        'Detailed inspection reports',
      ],
    },
    {
      icon: Shield,
      title: 'Production Follow-up',
      description: 'Regular progress updates and quality checks during production. We identify issues early and ensure timely delivery.',
      features: [
        'Weekly progress reports',
        'Quality checkpoints',
        'Issue identification and resolution',
        'Timeline monitoring',
        'Production photos/videos',
        'Sample approval coordination',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and door-to-door delivery.',
      features: [
        'Freight forwarding',
        'Customs clearance',
        'Documentation handling',
        'Door-to-door delivery',
        'Insurance coordination',
        'Tracking and updates',
      ],
    },
    {
      icon: DollarSign,
      title: 'Sourcing & Negotiation',
      description: 'We find the right suppliers, negotiate competitive pricing, and handle contract terms to protect your interests.',
      features: [
        'Supplier identification',
        'Price negotiation',
        'Contract review',
        'Payment term negotiation',
        'MOQ optimization',
        'Sample management',
      ],
    },
  ];

  const whyChooseUs = [
    {
      title: '12+ Years Experience',
      description: 'Extensive knowledge of Chinese manufacturing and sourcing practices.',
    },
    {
      title: '2,500+ Suppliers Verified',
      description: 'Access to our network of pre-verified, reliable manufacturers.',
    },
    {
      title: '15,000+ Orders Completed',
      description: 'Proven track record of successful sourcing projects.',
    },
    {
      title: '98% Client Satisfaction',
      description: 'High rate of repeat clients and referrals.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
        padding: '160px 0 80px',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '16px' }}>
            Our Services
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Comprehensive sourcing solutions to protect your interests and ensure quality from order to delivery.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '40px' }}>
            {services.map((service, index) => (
              <div key={index} className="card" style={{ textAlign: 'left' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: 'var(--primary)', 
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <service.icon size={32} color="white" />
                </div>
                <h3 style={{ marginBottom: '12px', fontSize: '1.5rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '24px' }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px',
                      marginBottom: '12px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                    }}>
                      <CheckCircle size={18} style={{ color: 'var(--success)', flexShrink: 0 }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="section-title">
            <h2>Why Choose SSourcing China</h2>
            <p>What sets us apart in the China sourcing industry.</p>
          </div>
          <div className="grid grid-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} style={{ textAlign: 'center', padding: '32px 24px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  backgroundColor: 'var(--background)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <CheckCircle size={36} style={{ color: 'var(--primary)' }} />
                </div>
                <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-title">
            <h2>How Our Services Work</h2>
            <p>A simple, transparent process to ensure successful sourcing.</p>
          </div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { step: 1, title: 'Submit Request', desc: 'Tell us your requirements' },
              { step: 2, title: 'Get Quote', desc: 'Receive service proposal' },
              { step: 3, title: 'We Execute', desc: 'Our team handles everything' },
              { step: 4, title: 'You Receive', desc: 'Quality products delivered' },
            ].map((item, index) => (
              <div key={index} style={{ 
                flex: '1',
                minWidth: '250px',
                maxWidth: '280px',
                textAlign: 'center',
                padding: '32px 24px',
                backgroundColor: 'white',
                borderRadius: '8px',
                position: 'relative',
              }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: 'var(--primary)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: 'white',
                  fontWeight: '700',
                }}>
                  {item.step}
                </div>
                <h3 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        padding: '80px 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '16px' }}>Ready to Get Started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Contact us today to discuss your sourcing needs. We'll provide a customized quote within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-accent" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              Get a Free Quote
            </Link>
            <Link to="/how-it-works" className="btn" style={{ 
              backgroundColor: 'rgba(255,255,255,0.15)', 
              color: 'white', 
              border: '2px solid rgba(255,255,255,0.3)',
              padding: '16px 32px',
              fontSize: '1.1rem'
            }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;