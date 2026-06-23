import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Shield, ClipboardCheck, Clock, Truck, FileCheck, 
  CheckCircle, ArrowRight, Users, Award, Globe, Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Discovery',
      description: 'We find verified manufacturers matching your exact requirements, quality standards, and budget constraints.',
      features: [
        'Comprehensive supplier search',
        'Capability assessment',
        'Price comparison',
        'MOQ evaluation',
        'Certification verification'
      ]
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site inspections to verify legitimacy, production capacity, certifications, and compliance with international standards.',
      features: [
        'Business license verification',
        'Production capacity audit',
        'Quality management system check',
        'Worker conditions assessment',
        'Certification verification'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-shipment inspections ensuring your products meet specifications and quality standards before leaving the factory.',
      features: [
        'Pre-production inspection',
        'During-production inspection',
        'Pre-shipment inspection',
        'Container loading supervision',
        'AQL standard compliance'
      ]
    },
    {
      icon: Clock,
      title: 'Production Follow-up',
      description: 'Regular updates and on-site monitoring throughout the manufacturing process to ensure timely delivery.',
      features: [
        'Weekly progress reports',
        'Production milestone tracking',
        'On-site factory visits',
        'Issue resolution',
        'Timeline management'
      ]
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination from factory to your doorstep, including customs clearance and documentation.',
      features: [
        'Freight forwarding',
        'Customs clearance',
        'Documentation handling',
        'Multi-supplier consolidation',
        'Door-to-door delivery'
      ]
    },
    {
      icon: FileCheck,
      title: 'Sample Management',
      description: 'Handling sample requests, evaluations, and modifications to ensure product perfection before mass production.',
      features: [
        'Sample sourcing',
        'Quality evaluation',
        'Modification handling',
        'Shipping coordination',
        'Approval documentation'
      ]
    }
  ];

  const whyChooseUs = [
    { icon: Users, title: 'Expert Team', description: 'Native Mandarin speakers with 10+ years of sourcing experience' },
    { icon: Shield, title: 'Verified Network', description: '5,000+ pre-vetted suppliers across all major industries' },
    { icon: Award, title: 'Quality Guarantee', description: 'ISO 9001 certified inspection process' },
    { icon: Globe, title: 'Global Reach', description: 'Serving clients in 40+ countries worldwide' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        padding: '100px 0'
      }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', 
              fontWeight: '700', 
              color: 'white',
              marginBottom: '20px'
            }}>
              Our Services
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: 'rgba(255,255,255,0.9)', 
              lineHeight: '1.7'
            }}>
              Comprehensive sourcing solutions designed to make China procurement simple, safe, and cost-effective for global buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid-2" style={{ gap: '48px' }}>
            {services.map((service, index) => (
              <div key={index} className="card p-8">
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: 'var(--primary)', 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <service.icon size={32} style={{ color: 'white' }} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px', fontSize: '16px' }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3" style={{ marginBottom: '12px' }}>
                      <CheckCircle size={18} style={{ color: 'var(--success)', flexShrink: 0 }} />
                      <span style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose SSourcing China</h2>
            <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
              What sets us apart from other sourcing agents
            </p>
          </div>
          
          <div className="grid-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div style={{ 
                  width: '72px', 
                  height: '72px', 
                  backgroundColor: 'rgba(26, 54, 93, 0.1)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  <item.icon size={32} style={{ color: 'var(--primary)' }} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="card p-8" style={{ 
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: '700', 
              color: 'white',
              marginBottom: '16px'
            }}>
              Need Help With Sourcing?
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: 'rgba(255,255,255,0.9)', 
              marginBottom: '32px',
              maxWidth: '600px',
              margin: '0 auto 32px',
              lineHeight: '1.7'
            }}>
              Our team is ready to assist you with all your China sourcing needs. Get in touch today for a free consultation.
            </p>
            <Link to="/contact" className="btn btn-cta btn-lg">
              Get a Free Sourcing Quote
              <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
