import { Link } from 'react-router-dom';
import { Search, FileText, Building2, ClipboardCheck, Truck, CheckCircle, ArrowRight, Clock, Shield, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Submit Your Request',
      description: 'Tell us what you need. Provide product specifications, quantity, target price, quality requirements, and any other relevant details through our inquiry form.',
      details: [
        'Product specifications and technical drawings',
        'Target price range',
        'Quality standards and certifications required',
        'Order quantity',
        'Timeline requirements',
      ],
    },
    {
      number: '02',
      icon: FileText,
      title: 'Supplier Research & Matching',
      description: 'Our team researches and evaluates potential manufacturers from our extensive database and industry networks. We present you with qualified options that match your criteria.',
      details: [
        'Multiple supplier options for comparison',
        'Detailed supplier profiles and capabilities',
        'Price quotes from different manufacturers',
        'Factory location and certification information',
        'Production capacity assessment',
      ],
    },
    {
      number: '03',
      icon: Building2,
      title: 'Factory Verification',
      description: 'We conduct on-site factory visits to verify the supplier\'s existence, assess production capabilities, check certifications, and evaluate quality management systems.',
      details: [
        'Factory existence verification',
        'Production line inspection',
        'Certification verification (ISO, CE, FCC, etc.)',
        'Quality management system assessment',
        'Social compliance verification',
        'Detailed audit report with photos',
      ],
    },
    {
      number: '04',
      icon: ClipboardCheck,
      title: 'Sample Approval & Negotiation',
      description: 'We coordinate sample production, conduct evaluations, and negotiate terms with the selected supplier to ensure everything aligns with your requirements.',
      details: [
        'Sample production coordination',
        'Quality evaluation and feedback',
        'Price and payment term negotiation',
        'Contract review and drafting',
        'Production schedule agreement',
      ],
    },
    {
      number: '05',
      icon: ClipboardCheck,
      title: 'Production Monitoring',
      description: 'Throughout the manufacturing process, we provide regular updates and conduct on-site inspections to ensure production stays on track and meets quality standards.',
      details: [
        'Weekly production progress updates',
        'In-process quality inspections',
        'Issue identification and resolution',
        'Timeline management',
        'Transparent communication',
      ],
    },
    {
      number: '06',
      icon: Truck,
      title: 'Pre-Shipment Inspection',
      description: 'Before goods leave the factory, we conduct a final inspection to verify quantity, packaging, and quality against your specifications.',
      details: [
        'AQL-based sampling inspection',
        'Packaging and labeling verification',
        'Quantity count verification',
        'Photo and video documentation',
        'Inspection report delivery',
      ],
    },
    {
      number: '07',
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'We handle all aspects of shipping, including freight forwarding, customs clearance, and documentation, ensuring smooth delivery to your destination.',
      details: [
        'Freight booking and tracking',
        'Customs clearance support',
        'Complete documentation handling',
        'Multi-modal transport options',
        'Door-to-door delivery available',
      ],
    },
    {
      number: '08',
      icon: CheckCircle,
      title: 'Delivery & Follow-up',
      description: 'Once your goods arrive, we follow up to ensure everything meets your expectations and address any post-delivery concerns.',
      details: [
        'Delivery confirmation',
        'Post-delivery support',
        'Issue resolution assistance',
        'Feedback collection',
        'Ongoing partnership support',
      ],
    },
  ];

  const timeline = [
    { phase: 'Supplier Research', duration: '1-2 weeks' },
    { phase: 'Factory Verification', duration: '1 week' },
    { phase: 'Sample Production', duration: '2-4 weeks' },
    { phase: 'Mass Production', duration: '2-8 weeks' },
    { phase: 'Shipping', duration: '2-6 weeks' },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Verified Suppliers',
      description: 'Every supplier we work with is thoroughly vetted and verified.',
    },
    {
      icon: TrendingUp,
      title: 'Cost Effective',
      description: 'Save up to 40% compared to sourcing directly without local expertise.',
    },
    {
      icon: Clock,
      title: 'Time Saving',
      description: 'Skip months of research and verification. We accelerate the process.',
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
              How It Works
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '20px', lineHeight: '1.6' }}>
              Our proven 8-step process ensures smooth, reliable sourcing from China with quality assurance at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: '40px',
                marginBottom: index < steps.length - 1 ? '64px' : '0',
                alignItems: 'start',
              }}
              className="process-step"
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#1E3A5F',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <step.icon size={32} color="#C9A227" />
                </div>
                <div style={{ 
                  fontSize: '14px', 
                  fontWeight: '700', 
                  color: '#C9A227',
                  backgroundColor: 'rgba(201, 162, 39, 0.1)',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  display: 'inline-block',
                }}>
                  Step {step.number}
                </div>
              </div>
              
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '32px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}>
                <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>{step.title}</h3>
                <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>{step.description}</p>
                <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
                  {step.details.map((detail, dIndex) => (
                    <li key={dIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle size={16} color="#38A169" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '14px', color: '#4A5568' }}>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ marginBottom: '16px' }}>Typical Timeline</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              While timelines vary based on project complexity, here's what to expect
            </p>
          </div>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            maxWidth: '900px', 
            margin: '0 auto',
            position: 'relative',
          }} className="timeline">
            <div style={{
              position: 'absolute',
              top: '30px',
              left: '0',
              right: '0',
              height: '2px',
              backgroundColor: '#E2E8F0',
            }}></div>
            {timeline.map((item, index) => (
              <div key={index} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#1E3A5F',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}>
                  <Clock size={24} color="#C9A227" />
                </div>
                <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '4px' }}>{item.phase}</div>
                <div style={{ fontSize: '14px', color: '#718096' }}>{item.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '40px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#1E3A5F',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                }}>
                  <benefit.icon size={32} color="#C9A227" />
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{benefit.title}</h3>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#4A5568' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: '#1E3A5F' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>
              Ready to Start Your Sourcing Project?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '18px', marginBottom: '32px' }}>
              Get a free consultation and timeline estimate for your project.
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
              Get Started <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .process-step { grid-template-columns: 1fr !important; text-align: center; }
          .process-step > div:first-child { display: flex; flexDirection: column; alignItems: center; }
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .timeline { flex-wrap: wrap; gap: 32px; }
          .timeline > div { flex: 1 1 30%; }
        }
        @media (max-width: 768px) {
          .benefits-grid { grid-template-columns: 1fr !important; }
          .timeline > div { flex: 1 1 45%; }
        }
      `}</style>
    </div>
  );
};

export default HowItWorks;