import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search, 
  Shield, 
  FlaskConical, 
  Clock, 
  FileCheck, 
  Truck, 
  Headphones,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const steps = [
  {
    icon: <FileText size={32} />,
    title: '1. Submit Your Request',
    description: 'Tell us what you need. Provide product specifications, quantity requirements, target price range, quality standards, and any special requirements.',
    details: [
      'Product specifications and technical drawings',
      'Target price per unit',
      'Order quantity (MOQ considerations)',
      'Quality standards and certifications needed',
      'Packaging requirements',
      'Target delivery timeline'
    ]
  },
  {
    icon: <Search size={32} />,
    title: '2. We Find Suppliers',
    description: 'Our team researches and vets potential suppliers from our extensive network, presenting you with verified options that match your criteria.',
    details: [
      'Supplier identification from 500+ verified factories',
      'Capability and capacity assessment',
      'Price comparison across multiple suppliers',
      'Certification and compliance verification',
      'Preliminary supplier shortlisting'
    ]
  },
  {
    icon: <Shield size={32} />,
    title: '3. Factory Verification',
    description: 'We conduct on-site factory visits to verify their existence, production capacity, certifications, and quality management systems.',
    details: [
      'On-site factory inspection',
      'Business license verification',
      'Production capacity assessment',
      'Quality management system evaluation',
      'Worker conditions assessment',
      'Detailed verification report with photos'
    ]
  },
  {
    icon: <FlaskConical size={32} />,
    title: '4. Sample & Negotiation',
    description: 'We request samples, negotiate terms and pricing, and help you make informed decisions before committing to mass production.',
    details: [
      'Sample request management',
      'Sample quality evaluation',
      'Price and payment term negotiation',
      'MOQ (Minimum Order Quantity) negotiation',
      'Contract and agreement review',
      'Sample approval tracking'
    ]
  },
  {
    icon: <Clock size={32} />,
    title: '5. Production Monitoring',
    description: 'Regular factory visits and updates ensure production stays on track, timelines are met, and any issues are addressed promptly.',
    details: [
      'Weekly production progress updates',
      'Production milestone tracking',
      'Quality checkpoint inspections',
      'Issue identification and resolution',
      'Timeline management and adjustments',
      'Photo and video documentation'
    ]
  },
  {
    icon: <FileCheck size={32} />,
    title: '6. Quality Inspection',
    description: 'Pre-shipment inspection verifies products meet specifications. We only approve shipment when quality passes your standards.',
    details: [
      'AQL-based sampling inspection',
      'Specification compliance check',
      'Packaging and labeling verification',
      'Functional testing when applicable',
      'Detailed inspection report',
      'Shipment approval/rejection decision'
    ]
  },
  {
    icon: <Truck size={32} />,
    title: '7. Shipping & Delivery',
    description: 'We coordinate logistics, handle customs documentation, and ensure safe delivery to your specified destination.',
    details: [
      'Freight forwarding coordination',
      'Customs documentation preparation',
      'Customs clearance assistance',
      'Shipping method optimization',
      'Track and trace updates',
      'Door-to-door delivery coordination'
    ]
  },
  {
    icon: <Headphones size={32} />,
    title: '8. Follow-up Support',
    description: 'We provide post-delivery support, collect feedback, and help resolve any issues that arise after receiving your shipment.',
    details: [
      'Post-delivery support',
      'Feedback collection',
      'Issue resolution assistance',
      'Supplier performance review',
      'Future order optimization',
      'Ongoing sourcing support'
    ]
  }
];

const TimelineItem = ({ step, index, isLast }) => (
  <div className="flex gap-6" style={{ position: 'relative' }}>
    {!isLast && (
      <div style={{
        position: 'absolute',
        left: '20px',
        top: '48px',
        bottom: '-24px',
        width: '2px',
        background: '#E2E8F0'
      }} />
    )}
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
      flexShrink: 0,
      zIndex: 1
    }}>
      {index + 1}
    </div>
    <div style={{ flex: 1, paddingBottom: '32px' }}>
      <div className="card" style={{ padding: '24px' }}>
        <div className="flex items-center gap-3 mb-3">
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            {step.icon}
          </div>
          <h3 style={{ fontSize: '18px' }}>{step.title}</h3>
        </div>
        <p style={{ color: '#475569', marginBottom: '16px', lineHeight: '1.6' }}>
          {step.description}
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {step.details.map((detail, dIndex) => (
            <li key={dIndex} className="flex items-center gap-2" style={{ marginBottom: '8px' }}>
              <CheckCircle size={16} style={{ color: '#10B981' }} />
              <span style={{ color: '#64748B', fontSize: '13px' }}>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const HowItWorks = () => {
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
              How It Works
            </h1>
            <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: '1.7' }}>
              Our proven 8-step process ensures quality, reliability, and peace of mind 
              throughout your China sourcing journey.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {steps.map((step, index) => (
              <TimelineItem 
                key={index} 
                step={step} 
                index={index} 
                isLast={index === steps.length - 1} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* What You Need to Prepare */}
      <section className="section section-bg">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '64px', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '24px' }}>What You Need to Prepare</h2>
              <p style={{ color: '#475569', marginBottom: '24px', lineHeight: '1.7' }}>
                To get started, gather as much information as possible about your requirements. 
                The more details you provide, the better we can match you with suitable suppliers.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="card" style={{ padding: '20px' }}>
                  <h4 style={{ marginBottom: '8px', fontSize: '15px' }}>Product Information</h4>
                  <p style={{ color: '#64748B', fontSize: '14px' }}>
                    Specifications, technical drawings, photos, or samples
                  </p>
                </div>
                <div className="card" style={{ padding: '20px' }}>
                  <h4 style={{ marginBottom: '8px', fontSize: '15px' }}>Quantity & Budget</h4>
                  <p style={{ color: '#64748B', fontSize: '14px' }}>
                    Target order quantity and price range per unit
                  </p>
                </div>
                <div className="card" style={{ padding: '20px' }}>
                  <h4 style={{ marginBottom: '8px', fontSize: '15px' }}>Quality Requirements</h4>
                  <p style={{ color: '#64748B', fontSize: '14px' }}>
                    Certifications needed, testing standards, packaging requirements
                  </p>
                </div>
                <div className="card" style={{ padding: '20px' }}>
                  <h4 style={{ marginBottom: '8px', fontSize: '15px' }}>Timeline</h4>
                  <p style={{ color: '#64748B', fontSize: '14px' }}>
                    Desired delivery date and any critical milestones
                  </p>
                </div>
              </div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
              borderRadius: '16px',
              padding: '40px',
              color: 'white'
            }}>
              <h3 style={{ color: 'white', marginBottom: '24px' }}>Timeline Estimates</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <div className="flex-between mb-2">
                    <span>Supplier Identification</span>
                    <span style={{ fontWeight: '600' }}>1-2 weeks</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>
                    <div style={{ width: '30%', height: '100%', background: '#34D399', borderRadius: '4px' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex-between mb-2">
                    <span>Factory Verification</span>
                    <span style={{ fontWeight: '600' }}>1-2 weeks</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>
                    <div style={{ width: '25%', height: '100%', background: '#34D399', borderRadius: '4px' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex-between mb-2">
                    <span>Sample Evaluation</span>
                    <span style={{ fontWeight: '600' }}>2-4 weeks</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>
                    <div style={{ width: '40%', height: '100%', background: '#34D399', borderRadius: '4px' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex-between mb-2">
                    <span>Production</span>
                    <span style={{ fontWeight: '600' }}>4-8 weeks</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>
                    <div style={{ width: '70%', height: '100%', background: '#34D399', borderRadius: '4px' }} />
                  </div>
                </div>
                
                <div>
                  <div className="flex-between mb-2">
                    <span>Shipping</span>
                    <span style={{ fontWeight: '600' }}>2-4 weeks</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px' }}>
                    <div style={{ width: '35%', height: '100%', background: '#34D399', borderRadius: '4px' }} />
                  </div>
                </div>
              </div>
              
              <p style={{ marginTop: '24px', fontSize: '13px', opacity: 0.8 }}>
                * Timelines vary based on product complexity and order size
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
            borderRadius: '16px',
            padding: '60px',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ color: 'white', marginBottom: '16px' }}>Ready to Start Sourcing?</h2>
            <p style={{ opacity: 0.9, marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
              Submit your requirements today and let us handle the rest.
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

export default HowItWorks;
