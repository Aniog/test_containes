import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Phone, Mail, MessageCircle,
  FileText, Search, Factory, ClipboardCheck, Truck, Package
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what you need - product specifications, quantity, target price, quality requirements, and any other details.',
      details: [
        'Product specifications and technical drawings',
        'Target price range and quantity',
        'Quality standards and certifications required',
        'Timeline and delivery requirements',
      ],
      icon: FileText,
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'Our team researches and identifies verified manufacturers matching your criteria from our extensive network.',
      details: [
        'Database of 2,000+ verified factories',
        'Custom supplier matching algorithm',
        'Price comparisons across multiple suppliers',
        'Capability and capacity verification',
      ],
      icon: Search,
    },
    {
      number: '03',
      title: 'Factory Verification',
      description: 'We conduct on-site visits to verify factory credentials, production capacity, and quality systems.',
      details: [
        'Physical factory inspection',
        'Business license verification',
        'Production capacity assessment',
        'Quality certifications check',
      ],
      icon: Factory,
    },
    {
      number: '04',
      title: 'Sample & Negotiation',
      description: 'We request samples, negotiate terms, and help you make informed decisions before bulk orders.',
      details: [
        'Sample request and tracking',
        'Quality assessment reports',
        'Price and payment term negotiation',
        'Contract review and drafting',
      ],
      icon: Package,
    },
    {
      number: '05',
      title: 'Production Follow-up',
      description: 'Regular updates and inspections during manufacturing to ensure quality and timelines are met.',
      details: [
        'Weekly production progress updates',
        'Quality checkpoint inspections',
        'Timeline monitoring and adjustments',
        'Issue resolution and escalation',
      ],
      icon: ClipboardCheck,
    },
    {
      number: '06',
      title: 'Quality Inspection',
      description: 'Pre-shipment inspection to verify products meet your specifications and quality standards.',
      details: [
        'AQL-based inspection protocols',
        'Detailed photo and video reports',
        'Functionality and safety testing',
        'Packaging and labeling verification',
      ],
      icon: ClipboardCheck,
    },
    {
      number: '07',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics, customs clearance, and ensure safe delivery to your location.',
      details: [
        'Multi-modal shipping options',
        'Customs documentation handling',
        'Freight forwarding coordination',
        'Real-time tracking updates',
      ],
      icon: Truck,
    },
  ];

  const timeline = [
    { phase: 'Week 1-2', activity: 'Supplier sourcing and initial verification' },
    { phase: 'Week 2-3', activity: 'Factory visits and sample requests' },
    { phase: 'Week 3-4', activity: 'Sample evaluation and negotiation' },
    { phase: 'Week 4-8', activity: 'Production phase with regular updates' },
    { phase: 'Week 8-10', activity: 'Final inspection and shipping' },
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
              How It Works
            </span>
            <h1 style={{ 
              fontSize: '48px', 
              fontWeight: '800', 
              color: 'white', 
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              Your Sourcing Journey
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: 'rgba(255,255,255,0.85)', 
              lineHeight: '1.7',
              marginBottom: '32px'
            }}>
              A proven 7-step process that ensures quality, reliability, and peace of mind for every sourcing project.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section">
        <div className="container">
          {steps.map((step, index) => (
            <div 
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '64px',
                alignItems: 'center',
                marginBottom: index < steps.length - 1 ? '80px' : '0',
                paddingBottom: index < steps.length - 1 ? '80px' : '0',
                borderBottom: index < steps.length - 1 ? '1px solid var(--color-border)' : 'none'
              }}
            >
              <div style={{ order: index % 2 === 1 ? 2 : 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '20px'
                }}>
                  <span style={{
                    fontSize: '48px',
                    fontWeight: '800',
                    color: 'var(--color-primary)',
                    opacity: 0.15
                  }}>
                    {step.number}
                  </span>
                  <div className="icon-box" style={{ 
                    width: '56px', 
                    height: '56px',
                    backgroundColor: 'rgba(230, 126, 34, 0.1)'
                  }}>
                    <step.icon size={24} color="#E67E22" />
                  </div>
                </div>
                <h2 style={{ fontSize: '28px', marginBottom: '16px', color: 'var(--color-text-primary)' }}>
                  {step.title}
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '24px', fontSize: '17px' }}>
                  {step.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {step.details.map((detail, idx) => (
                    <li key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px',
                      marginBottom: '12px',
                      color: 'var(--color-text-secondary)'
                    }}>
                      <CheckCircle size={18} color="#27AE60" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ 
                order: index % 2 === 1 ? 1 : 2,
                backgroundColor: 'var(--color-bg-light)',
                borderRadius: '16px',
                padding: '40px',
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <step.icon size={80} color="var(--color-primary)" style={{ opacity: 0.3 }} />
                  <p style={{ 
                    marginTop: '20px', 
                    color: 'var(--color-text-secondary)',
                    fontSize: '14px'
                  }}>
                    Step {step.number}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '16px' }}>
              Typical Timeline
            </h2>
            <p style={{ 
              color: 'var(--color-text-secondary)', 
              maxWidth: '600px', 
              margin: '0 auto',
              fontSize: '18px'
            }}>
              While timelines vary by project complexity, here's what to expect for a standard sourcing project.
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {timeline.map((item, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  gap: '24px',
                  paddingBottom: index < timeline.length - 1 ? '32px' : '0',
                  borderLeft: index < timeline.length - 1 ? '2px solid var(--color-border)' : 'none',
                  marginLeft: '20px',
                  paddingLeft: '32px',
                  position: 'relative'
                }}
              >
                <div style={{
                  position: 'absolute',
                  left: '-9px',
                  top: '0',
                  width: '16px',
                  height: '16px',
                  backgroundColor: 'var(--color-primary)',
                  borderRadius: '50%',
                  border: '3px solid white',
                  boxShadow: '0 0 0 2px var(--color-primary)'
                }} />
                <div>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    backgroundColor: 'rgba(30, 58, 95, 0.1)',
                    color: 'var(--color-primary)',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: '600',
                    marginBottom: '8px'
                  }}>
                    {item.phase}
                  </span>
                  <p style={{ color: 'var(--color-text-primary)', fontWeight: '500' }}>
                    {item.activity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Need Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--color-text-primary)' }}>
                What We Need From You
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
                To start your sourcing project, we'll need some basic information about your requirements. The more details you provide, the better we can match you with the right suppliers.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Product description and specifications',
                  'Target price range per unit',
                  'Order quantity (MOQ considerations)',
                  'Quality standards and certifications needed',
                  'Packaging requirements',
                  'Target delivery date',
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={20} color="#27AE60" />
                    <span style={{ color: 'var(--color-text-primary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: '40px' }}>
              <h3 style={{ marginBottom: '24px', color: 'var(--color-text-primary)' }}>
                Ready to Get Started?
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', lineHeight: '1.7' }}>
                Submit your requirements and we'll get back to you within 24 hours with supplier options.
              </p>
              
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', marginBottom: '16px' }}>
                Submit Your Request
                <ArrowRight size={18} />
              </Link>
              
              <div style={{ 
                display: 'flex', 
                gap: '16px', 
                justifyContent: 'center',
                paddingTop: '16px',
                borderTop: '1px solid var(--color-border)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                  <Phone size={16} />
                  Contact us
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                  <Mail size={16} />
                  info@ssourcingchina.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', marginBottom: '16px' }}>
            Start Your Sourcing Journey Today
          </h2>
          <p style={{ 
            color: 'rgba(255,255,255,0.85)', 
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Get a free consultation and quote. No obligation, just expert sourcing support.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ 
            padding: '18px 36px', 
            fontSize: '18px'
          }}>
            Get a Free Quote
            <MessageCircle size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;