import { Link } from 'react-router-dom';
import { 
  Search, Shield, ClipboardCheck, Factory, Truck, Package, 
  FileCheck, DollarSign, Handshake, ArrowRight, CheckCircle,
  MapPin, Users, Clock, Award
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Search size={36} />,
      title: 'Supplier Sourcing',
      description: 'We find verified manufacturers matching your exact requirements, quality standards, and budget constraints.',
      features: [
        'Customized supplier matching',
        'Market research and competitor analysis',
        'Supplier capability assessment',
        'Negotiation support'
      ]
    },
    {
      icon: <Shield size={36} />,
      title: 'Factory Verification',
      description: 'On-site inspections to verify legitimacy, production capacity, certifications, and compliance.',
      features: [
        'Business license verification',
        'Production capacity assessment',
        'Certification verification (ISO, CE, etc.)',
        'Facility tour with detailed reports'
      ]
    },
    {
      icon: <ClipboardCheck size={36} />,
      title: 'Quality Inspection',
      description: 'Pre-shipment inspections ensuring products meet specifications and quality standards.',
      features: [
        'Pre-shipment inspection (PSI)',
        'During production inspection (DPI)',
        'Initial production inspection (IPI)',
        'Full inspection reports with photos'
      ]
    },
    {
      icon: <Factory size={36} />,
      title: 'Production Follow-up',
      description: 'Regular updates and on-site visits during production to ensure timeline and quality.',
      features: [
        'Weekly progress updates',
        'On-site production monitoring',
        'Quality control checkpoints',
        'Timeline management'
      ]
    },
    {
      icon: <Truck size={36} />,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination from factory to your doorstep, including customs clearance.',
      features: [
        'Freight forwarding',
        'Customs clearance',
        'Door-to-door delivery',
        'Documentation handling'
      ]
    },
    {
      icon: <Package size={36} />,
      title: 'Product Development',
      description: 'From prototype to mass production, we help navigate manufacturing processes.',
      features: [
        'Prototype development',
        'Technical specification review',
        'Material sourcing',
        'Manufacturing process optimization'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <FileCheck size={28} />,
      title: 'Contract Review',
      description: 'We review and negotiate contracts to protect your interests.'
    },
    {
      icon: <DollarSign size={28} />,
      title: 'Payment Security',
      description: 'Secure payment methods and escrow services for safe transactions.'
    },
    {
      icon: <Handshake size={28} />,
      title: 'Trade Show Support',
      description: 'We accompany you to trade shows and factory visits in China.'
    },
    {
      icon: <MapPin size={28} />,
      title: 'Warehouse Solutions',
      description: 'Storage and consolidation services in China before shipping.'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users size={24} />,
      title: 'Local Expertise',
      description: 'Our team is based in China with deep understanding of local business practices.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Fast Response',
      description: 'We respond to inquiries within 24 hours and keep you updated throughout the process.'
    },
    {
      icon: <Award size={24} />,
      title: 'Proven Track Record',
      description: '10+ years of experience helping global buyers source from China successfully.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Risk Mitigation',
      description: 'We help minimize risks through verification, inspection, and quality control.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: '#0F172A', 
        padding: '160px 0 80px',
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ color: '#FFFFFF', marginBottom: '24px', fontSize: '48px' }}>
              Our Sourcing Services
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '20px', lineHeight: '1.6' }}>
              Comprehensive solutions to simplify your China sourcing. From supplier verification 
              to quality inspection and shipping, we handle every step.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Core Services</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              Everything you need for successful China sourcing
            </p>
          </div>
          <div className="grid grid-2">
            {services.map((service, index) => (
              <div key={index} className="card" style={{ display: 'flex', gap: '24px' }}>
                <div style={{ 
                  minWidth: '72px',
                  height: '72px',
                  backgroundColor: '#FFF5EB', 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E67E22'
                }}>
                  {service.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ marginBottom: '12px' }}>{service.title}</h3>
                  <p style={{ marginBottom: '16px', fontSize: '15px' }}>{service.description}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <CheckCircle size={16} color="#10B981" />
                        <span style={{ fontSize: '14px', color: '#64748B' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Additional Services</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              Extra support to make your sourcing experience seamless
            </p>
          </div>
          <div className="grid grid-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="card" style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  backgroundColor: '#EBF5FF', 
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: '#2D5A87'
                }}>
                  {service.icon}
                </div>
                <h4 style={{ marginBottom: '8px' }}>{service.title}</h4>
                <p style={{ fontSize: '14px', margin: 0 }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Why Work With Us</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              What makes SSourcing China your ideal sourcing partner
            </p>
          </div>
          <div className="grid grid-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card" style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  backgroundColor: '#FFF5EB', 
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: '#E67E22'
                }}>
                  {item.icon}
                </div>
                <h4 style={{ marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ fontSize: '14px', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#0F172A' }}>
        <div className="container text-center">
          <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>Need Help With Sourcing?</h2>
          <p style={{ color: '#94A3B8', fontSize: '18px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Contact us today for a free consultation and quote. We'll help you find the right suppliers in China.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>
            Get a Free Quote <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;