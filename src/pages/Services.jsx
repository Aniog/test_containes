import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Shield, 
  FileCheck, 
  Clock, 
  Truck, 
  Package, 
  Factory,
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  Award
} from 'lucide-react';

const services = [
  {
    icon: <Search size={32} />,
    title: 'Supplier Sourcing',
    description: 'We find and vet reliable suppliers matching your product specifications, quality requirements, and budget constraints.',
    features: [
      'Comprehensive supplier research',
      'Capability assessment',
      'Price comparison',
      'MOQ negotiation'
    ]
  },
  {
    icon: <Shield size={32} />,
    title: 'Factory Verification',
    description: 'On-site inspections to verify factory existence, production capacity, certifications, and compliance with international standards.',
    features: [
      'Business license verification',
      'Production capacity assessment',
      'Certification checks',
      'Quality management evaluation'
    ]
  },
  {
    icon: <FileCheck size={32} />,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections ensuring your products meet specifications and quality standards before leaving China.',
    features: [
      'Pre-shipment inspections',
      'During-production checks',
      'AQL-based sampling',
      'Detailed photo reports'
    ]
  },
  {
    icon: <Clock size={32} />,
    title: 'Production Follow-up',
    description: 'Regular updates on production progress, ensuring timelines are met and any issues are addressed promptly.',
    features: [
      'Weekly progress updates',
      'Production milestone tracking',
      'Issue resolution',
      'Timeline management'
    ]
  },
  {
    icon: <Truck size={32} />,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and door-to-door delivery.',
    features: [
      'Freight forwarding',
      'Customs clearance',
      'Documentation handling',
      'Door-to-door delivery'
    ]
  },
  {
    icon: <Package size={32} />,
    title: 'Sample Management',
    description: 'We handle sample requests, quality approval, and forward samples to you for final confirmation.',
    features: [
      'Sample sourcing',
      'Quality evaluation',
      'International shipping',
      'Approval tracking'
    ]
  }
];

const ProcessStep = ({ number, title, description }) => (
  <div className="flex gap-4">
    <div style={{
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: '#1E3A5F',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '700',
      flexShrink: 0
    }}>
      {number}
    </div>
    <div>
      <h4 style={{ marginBottom: '8px' }}>{title}</h4>
      <p style={{ color: '#64748B', fontSize: '14px' }}>{description}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
        padding: '100px 0 80px',
        color: 'white'
      }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{ color: 'white', marginBottom: '20px', fontSize: '44px' }}>
              Our Sourcing Services
            </h1>
            <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: '1.7' }}>
              Comprehensive China sourcing solutions designed to help you find reliable suppliers, 
              ensure quality, and streamline your entire procurement process.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '40px' }}>
            {services.map((service, index) => (
              <div key={index} className="card" style={{ padding: '32px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginBottom: '24px'
                }}>
                  {service.icon}
                </div>
                
                <h3 style={{ marginBottom: '12px', fontSize: '22px' }}>{service.title}</h3>
                <p style={{ color: '#475569', marginBottom: '20px', lineHeight: '1.6' }}>
                  {service.description}
                </p>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2" style={{ marginBottom: '10px' }}>
                      <CheckCircle size={18} style={{ color: '#10B981' }} />
                      <span style={{ color: '#475569', fontSize: '14px' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section section-bg">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Our Service Process</h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
              A structured approach to ensure quality and reliability at every step
            </p>
          </div>
          
          <div className="grid grid-2" style={{ gap: '48px', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <ProcessStep 
                number="1" 
                title="Initial Consultation" 
                description="We discuss your requirements, specifications, and goals"
              />
              <ProcessStep 
                number="2" 
                title="Supplier Matching" 
                description="We identify and present suitable suppliers from our network"
              />
              <ProcessStep 
                number="3" 
                title="Factory Verification" 
                description="We visit factories to verify capabilities and certifications"
              />
              <ProcessStep 
                number="4" 
                title="Sample Evaluation" 
                description="We manage samples and help you make informed decisions"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <ProcessStep 
                number="5" 
                title="Production Monitoring" 
                description="We track progress and ensure timeline compliance"
              />
              <ProcessStep 
                number="6" 
                title="Quality Inspection" 
                description="We inspect products before shipment approval"
              />
              <ProcessStep 
                number="7" 
                title="Shipping Coordination" 
                description="We handle logistics from factory to your door"
              />
              <ProcessStep 
                number="8" 
                title="Follow-up Support" 
                description="We provide post-delivery support and feedback collection"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Why Choose Our Services</h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
              What sets us apart in the China sourcing industry
            </p>
          </div>
          
          <div className="grid grid-4">
            <div className="text-center" style={{ padding: '24px' }}>
              <Users size={40} style={{ color: '#1E3A5F', marginBottom: '16px' }} />
              <h4 style={{ marginBottom: '8px' }}>Expert Team</h4>
              <p style={{ color: '#64748B', fontSize: '14px' }}>
                Native Mandarin speakers with international business experience
              </p>
            </div>
            <div className="text-center" style={{ padding: '24px' }}>
              <Shield size={40} style={{ color: '#1E3A5F', marginBottom: '16px' }} />
              <h4 style={{ marginBottom: '8px' }}>Verified Network</h4>
              <p style={{ color: '#64748B', fontSize: '14px' }}>
                500+ verified suppliers across multiple product categories
              </p>
            </div>
            <div className="text-center" style={{ padding: '24px' }}>
              <Globe size={40} style={{ color: '#1E3A5F', marginBottom: '16px' }} />
              <h4 style={{ marginBottom: '8px' }}>Global Experience</h4>
              <p style={{ color: '#64748B', fontSize: '14px' }}>
                Serving buyers from USA, Europe, Australia, and beyond
              </p>
            </div>
            <div className="text-center" style={{ padding: '24px' }}>
              <Award size={40} style={{ color: '#1E3A5F', marginBottom: '16px' }} />
              <h4 style={{ marginBottom: '8px' }}>Proven Results</h4>
              <p style={{ color: '#64748B', fontSize: '14px' }}>
                98% client satisfaction rate over years of operation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-bg">
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
            borderRadius: '16px',
            padding: '60px',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ color: 'white', marginBottom: '16px' }}>Ready to Get Started?</h2>
            <p style={{ opacity: 0.9, marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
              Contact us today for a free consultation and quote tailored to your sourcing needs.
            </p>
            <Link to="/contact" className="btn btn-white" style={{ padding: '16px 40px', fontSize: '16px' }}>
              Get a Free Quote
              <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
