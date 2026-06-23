import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Search, FileText, Package, Truck,
  MessageSquare, CreditCard, Shield, Factory, Clock, Users
} from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: 1,
      title: 'Submit Your Request',
      description: 'Tell us what you need - product specifications, quantity, target price, and any special requirements.',
      icon: FileText,
      details: [
        'Product specifications and technical drawings',
        'Target quantity and delivery timeline',
        'Budget range and payment terms',
        'Any specific supplier requirements',
      ],
    },
    {
      number: 2,
      title: 'Supplier Matching',
      description: 'We identify and verify suitable suppliers from our extensive network of pre-vetted manufacturers.',
      icon: Search,
      details: [
        'Supplier identification from our database',
        'Business license verification',
        'Factory capacity assessment',
        'Certification verification',
      ],
    },
    {
      number: 3,
      title: 'Sample Evaluation',
      description: 'Review product samples and negotiate terms with our assistance to ensure quality and pricing meet your expectations.',
      icon: Package,
      details: [
        'Sample request and coordination',
        'Quality assessment',
        'Price and term negotiation',
        'Contract finalization',
      ],
    },
    {
      number: 4,
      title: 'Production Monitoring',
      description: 'We oversee production with regular quality checks and progress updates to ensure everything stays on track.',
      icon: Factory,
      details: [
        'Pre-production inspection',
        'In-line quality inspections',
        'Weekly progress reports',
        'Issue identification and resolution',
      ],
    },
    {
      number: 5,
      title: 'Shipping & Delivery',
      description: 'Coordinate logistics and ensure smooth delivery from factory to your specified destination.',
      icon: Truck,
      details: [
        'Pre-shipment inspection',
        'Freight forwarding',
        'Customs clearance',
        'Door-to-door delivery',
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Reduce risks through supplier verification, quality inspections, and professional oversight at every stage.',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Save time on supplier research, communication, and logistics coordination. We handle the details.',
    },
    {
      icon: CreditCard,
      title: 'Cost Efficiency',
      description: 'Negotiate better prices through our established supplier relationships and volume purchasing power.',
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'Bridge language and cultural gaps with professional Mandarin communication and cultural expertise.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Get a dedicated sourcing manager who understands your business and provides personalized service.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Ensure product quality through systematic inspections at key production stages.',
    },
  ];

  const timeline = [
    { stage: 'Supplier Matching', duration: '1-2 weeks', description: 'Identification and verification of suitable suppliers' },
    { stage: 'Sample Evaluation', duration: '2-4 weeks', description: 'Sample submission, testing, and approval' },
    { stage: 'Production', duration: '4-8 weeks', description: 'Manufacturing with quality monitoring' },
    { stage: 'Shipping', duration: '2-4 weeks', description: 'Freight forwarding and customs clearance' },
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
            How It Works
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Our proven 5-step process ensures successful sourcing from China with minimal risk and maximum efficiency.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {steps.map((step, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                gap: '48px',
                alignItems: 'flex-start',
              }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  backgroundColor: 'var(--primary)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem',
                  fontWeight: '700',
                  flexShrink: 0,
                }}>
                  {step.number}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '16px',
                    marginBottom: '12px',
                  }}>
                    <step.icon size={28} style={{ color: 'var(--primary)' }} />
                    <h2 style={{ fontSize: '1.75rem', margin: 0 }}>{step.title}</h2>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '24px', lineHeight: '1.7' }}>
                    {step.description}
                  </p>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    gap: '16px' 
                  }}>
                    {step.details.map((detail, idx) => (
                      <div key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '12px',
                        color: 'var(--text-secondary)',
                      }}>
                        <CheckCircle size={18} style={{ color: 'var(--success)' }} />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="section-title">
            <h2>Typical Timeline</h2>
            <p>Expected timeframes for each stage of the sourcing process.</p>
          </div>
          <div style={{ 
            display: 'flex', 
            gap: '24px', 
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {timeline.map((item, index) => (
              <div key={index} style={{ 
                flex: '1',
                minWidth: '250px',
                maxWidth: '280px',
                padding: '32px',
                backgroundColor: 'var(--background)',
                borderRadius: '8px',
                textAlign: 'center',
              }}>
                <div style={{ 
                  display: 'inline-block',
                  padding: '8px 16px',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  borderRadius: '4px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  marginBottom: '16px',
                }}>
                  {item.duration}
                </div>
                <h3 style={{ marginBottom: '8px', fontSize: '1.25rem' }}>{item.stage}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Benefits of Our Process</h2>
            <p>Why our systematic approach delivers better results.</p>
          </div>
          <div className="grid grid-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="card" style={{ textAlign: 'left' }}>
                <benefit.icon size={32} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
                <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>{benefit.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{benefit.description}</p>
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
          <h2 style={{ color: 'white', marginBottom: '16px' }}>Ready to Start Sourcing?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Submit your requirements today and let us handle the rest.
          </p>
          <Link to="/contact" className="btn btn-accent" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;