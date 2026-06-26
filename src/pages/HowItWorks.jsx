import { Link } from 'react-router-dom';
import { 
  FileText, Search, Factory, ClipboardCheck, 
  Truck, CheckCircle, ArrowRight, Clock, Shield, Users
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Fill out our inquiry form with your product requirements, including specifications, quantity, target price, and any special requirements.',
      details: [
        'Product specifications and technical drawings',
        'Target price range and payment terms',
        'Required certifications and standards',
        'Production timeline and delivery location'
      ],
      icon: FileText
    },
    {
      number: '02',
      title: 'Supplier Matching',
      description: 'We identify and evaluate 3-5 suitable factories based on your criteria, presenting detailed profiles with pros and cons of each option.',
      details: [
        'Factory capability assessment',
        'Price comparison analysis',
        'Quality track record evaluation',
        'Production capacity verification'
      ],
      icon: Search
    },
    {
      number: '03',
      title: 'Factory Verification',
      description: 'Our team conducts in-person factory visits to verify legitimacy, assess capabilities, and ensure the factory can meet your requirements.',
      details: [
        'Business license verification',
        'Production line inspection',
        'Quality management system review',
        'Worker conditions assessment'
      ],
      icon: Factory
    },
    {
      number: '04',
      title: 'Negotiation & Agreement',
      description: 'We negotiate pricing, payment terms, and quality standards on your behalf, finalizing a comprehensive contract with the selected factory.',
      details: [
        'Price negotiation with multiple factories',
        'Payment milestone structure',
        'Quality specifications and AQL levels',
        'Delivery schedule and terms'
      ],
      icon: ClipboardCheck
    },
    {
      number: '05',
      title: 'Production & Monitoring',
      description: 'During production, we conduct regular quality inspections to ensure products meet specifications and address any issues promptly.',
      details: [
        'Initial production sample approval',
        'During-production inspections',
        'Progress updates and photos',
        'Issue resolution and optimization'
      ],
      icon: Shield
    },
    {
      number: '06',
      title: 'Final Inspection & Shipping',
      description: 'Before shipment, we perform final quality checks and coordinate logistics to ensure safe, timely delivery to your destination.',
      details: [
        'Pre-shipment inspection',
        'Container loading supervision',
        'Freight forwarding coordination',
        'Customs documentation handling'
      ],
      icon: Truck
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Skip months of research and negotiation. Our established processes and factory relationships accelerate sourcing.'
    },
    {
      icon: Shield,
      title: 'Reduce Risk',
      description: 'Factory verification and quality inspections protect you from fraud and quality issues.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our team handles all communication, negotiation, and problem-solving in your timezone.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Systematic quality control at every stage ensures products meet your specifications.'
    }
  ];

  const timeline = [
    { phase: 'Week 1-2', activity: 'Supplier matching and initial evaluation' },
    { phase: 'Week 3-4', activity: 'Factory verification visits' },
    { phase: 'Week 5-6', activity: 'Negotiation and contract finalization' },
    { phase: 'Production', activity: 'Quality monitoring and production follow-up' },
    { phase: 'Delivery', activity: 'Final inspection and shipping coordination' }
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>How It Works</h1>
          <p>
            Our proven 6-step process makes sourcing from China simple, 
            transparent, and risk-free.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section">
        <div className="container">
          {steps.map((step, index) => (
            <div key={index} style={{
              display: 'grid',
              gridTemplateColumns: index % 2 === 0 ? '1fr 2fr' : '2fr 1fr',
              gap: '64px',
              alignItems: 'center',
              marginBottom: '80px',
              padding: '48px',
              background: index % 2 === 0 ? '#f8f9fa' : 'white',
              borderRadius: '16px',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '16px'
                }}>
                  <span style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: '#c9a227',
                    opacity: 0.3
                  }}>
                    {step.number}
                  </span>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <step.icon size={28} />
                  </div>
                </div>
                <h2 style={{ fontSize: '1.75rem', color: '#1e3a5f', marginBottom: '16px' }}>
                  {step.title}
                </h2>
                <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.7, marginBottom: '24px' }}>
                  {step.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {step.details.map((detail, dIndex) => (
                    <li key={dIndex} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '10px',
                      color: '#444'
                    }}>
                      <CheckCircle size={16} color="#059669" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ 
                order: index % 2 === 0 ? 2 : 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '100%',
                  height: '300px',
                  background: 'linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '4rem',
                  opacity: 0.8
                }}>
                  <step.icon size={80} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Typical Timeline</h2>
          <p className="section-subtitle">
            From inquiry to delivery, here's what to expect
          </p>
          <div style={{
            maxWidth: '800px',
            margin: '48px auto 0',
            background: 'white',
            borderRadius: '16px',
            padding: '40px',
            border: '1px solid #e5e7eb'
          }}>
            {timeline.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                paddingBottom: index < timeline.length - 1 ? '24px' : 0,
                borderBottom: index < timeline.length - 1 ? '1px solid #e5e7eb' : 'none'
              }}>
                <div style={{
                  minWidth: '140px',
                  padding: '8px 16px',
                  background: '#1e3a5f',
                  color: 'white',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  {item.phase}
                </div>
                <div style={{
                  flex: 1,
                  color: '#444',
                  fontSize: '1rem'
                }}>
                  {item.activity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Our Process Works</h2>
          <p className="section-subtitle">
            The key advantages of working with our systematic approach
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '24px',
            marginTop: '48px'
          }}>
            {benefits.map((benefit, index) => (
              <div key={index} style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '32px 24px',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: 'white'
                }}>
                  <benefit.icon size={28} />
                </div>
                <h3 style={{ fontSize: '1.125rem', color: '#1e3a5f', marginBottom: '12px' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#1e3a5f', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'white' }}>
            Ready to Start Sourcing?
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.8)', marginBottom: '32px' }}>
            Get a free consultation and timeline estimate for your project
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '16px 32px' }}>
            Get Started <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;