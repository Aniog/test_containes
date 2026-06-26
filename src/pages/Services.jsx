import { Link } from 'react-router-dom';
import { Search, Shield, Eye, ClipboardCheck, Truck, Package, ArrowRight, CheckCircle, Clock, Users, BarChart3, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing & Matching',
      description: 'We find the right manufacturers based on your product specifications, quality requirements, budget, and production capacity needs.',
      features: [
        'Comprehensive supplier database',
        'Customized supplier matching',
        'Background checks and verification',
        'Capability assessment',
        'Price negotiation support',
      ],
    },
    {
      icon: Shield,
      title: 'Factory Verification & Audits',
      description: 'On-site factory visits to verify legitimacy, assess production capabilities, and ensure compliance with international standards.',
      features: [
        'Factory existence verification',
        'Production capacity assessment',
        'Certification verification (ISO, CE, FCC, etc.)',
        'Quality management system review',
        'Social compliance audits',
        'Detailed audit reports with photos',
      ],
    },
    {
      icon: Eye,
      title: 'Quality Control Inspection',
      description: 'Independent inspection services at various stages of production to ensure products meet your specifications and quality standards.',
      features: [
        'Pre-production inspection',
        'During-production inspection',
        'Pre-shipment inspection',
        'AQL-based sampling',
        'Detailed inspection reports',
        'Video and photo documentation',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Production Follow-up',
      description: 'Ongoing monitoring and progress updates throughout the manufacturing process to keep your project on track.',
      features: [
        'Regular production updates',
        'On-site progress monitoring',
        'Sample approval coordination',
        'Production schedule management',
        'Issue identification and resolution',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics solutions from factory to your designated destination, handling all documentation and customs.',
      features: [
        'Freight forwarding',
        'Customs clearance',
        'Documentation handling',
        'Multi-modal transport (sea, air, land)',
        'Door-to-door delivery',
        'Cargo insurance',
      ],
    },
    {
      icon: Package,
      title: 'Product Development',
      description: 'Support services for bringing new products from concept to market, including prototyping and manufacturing.',
      features: [
        'Prototype development',
        'Technical specification review',
        'Material sourcing',
        'Manufacturing process optimization',
        'Sample management',
        'Mass production coordination',
      ],
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Skip the research and verification phase. We handle supplier discovery and due diligence.',
    },
    {
      icon: Shield,
      title: 'Reduce Risk',
      description: 'Avoid scams and unreliable suppliers with our thorough verification process.',
    },
    {
      icon: BarChart3,
      title: 'Better Pricing',
      description: 'Leverage our relationships with factories for competitive pricing and terms.',
    },
    {
      icon: Eye,
      title: 'Quality Assured',
      description: 'Professional inspections ensure products meet your standards before shipping.',
    },
    {
      icon: Globe,
      title: 'Local Expertise',
      description: 'Our team in China provides on-the-ground support and cultural understanding.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Single point of contact throughout your entire sourcing project.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2C5282 100%)',
        padding: '160px 0 100px',
      }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{ color: '#FFFFFF', fontSize: '48px', fontWeight: '700', marginBottom: '24px' }}>
              Our Sourcing Services
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '20px', lineHeight: '1.6' }}>
              Comprehensive China sourcing solutions tailored to your business needs. From supplier discovery to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '40px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#1E3A5F',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}>
                  <service.icon size={32} color="#C9A227" />
                </div>
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>{service.title}</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>{service.description}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <CheckCircle size={18} color="#38A169" />
                      <span style={{ fontSize: '15px', color: '#4A5568' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ marginBottom: '16px' }}>Why Work With Us</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              The advantages of partnering with SSourcing China for your sourcing needs
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '32px',
                  borderRadius: '8px',
                  backgroundColor: '#F8FAFC',
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#1E3A5F',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <benefit.icon size={28} color="#C9A227" />
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>{benefit.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#4A5568' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#1E3A5F' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>
              Need Help With Sourcing?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '18px', marginBottom: '32px' }}>
              Contact us today to discuss your sourcing requirements.
            </p>
            <Link
              to="/contact"
              style={{
                backgroundColor: '#C9A227',
                color: '#1E3A5F',
                padding: '16px 32px',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Get a Free Quote <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Services;