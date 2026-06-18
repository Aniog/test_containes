import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Search, Shield, ClipboardCheck,
  FileText, Package, Truck, MessageCircle, Calendar, Users,
  BarChart, Clock, Globe
} from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us about your product requirements, quantity, target price, and any specific criteria such as certifications, factory size, or location preferences.',
      details: [
        'Product specifications',
        'Target price range',
        'Required certifications',
        'Quality standards',
        'Timeline requirements'
      ],
      icon: <FileText size={32} />
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'Our team researches and identifies verified manufacturers matching your specifications. We tap into our extensive network of pre-vetted factories.',
      details: [
        'Supplier shortlist within 7 days',
        'Detailed supplier profiles',
        'Capability assessments',
        'Price comparisons'
      ],
      icon: <Search size={32} />
    },
    {
      number: '03',
      title: 'Factory Verification',
      description: 'We conduct on-site visits to verify factory legitimacy, production capacity, machinery, workforce, and certifications.',
      details: [
        'Business license verification',
        'Production capacity check',
        'Certification verification',
        'Facility photo/video report'
      ],
      icon: <Shield size={32} />
    },
    {
      number: '04',
      title: 'Sample & Quote',
      description: 'You receive samples and detailed quotes for comparison. We help you evaluate and negotiate the best terms.',
      details: [
        'Sample coordination',
        'Detailed quotations',
        'Payment term negotiation',
        'MOQ clarification'
      ],
      icon: <Package size={32} />
    },
    {
      number: '05',
      title: 'Production & QC',
      description: 'We monitor production and conduct quality inspections at key stages to ensure everything meets your standards.',
      details: [
        'Production progress updates',
        'Quality inspections',
        'Issue resolution',
        'Timeline management'
      ],
      icon: <ClipboardCheck size={32} />
    },
    {
      number: '06',
      title: 'Shipping Delivered',
      description: 'We coordinate logistics and ensure smooth customs clearance, delivering products safely to your location.',
      details: [
        'Freight coordination',
        'Customs clearance',
        'Documentation handling',
        'Door-to-door delivery'
      ],
      icon: <Truck size={32} />
    }
  ];

  const timeline = [
    { phase: 'Initial Research', duration: '5-7 days', description: 'Supplier identification and shortlisting' },
    { phase: 'Factory Verification', duration: '3-5 days', description: 'On-site inspection and verification' },
    { phase: 'Sample Phase', duration: '2-4 weeks', description: 'Sample production and evaluation' },
    { phase: 'Production', duration: '2-8 weeks', description: 'Manufacturing based on order size' },
    { phase: 'Quality Check', duration: '2-3 days', description: 'Pre-shipment inspection' },
    { phase: 'Shipping', duration: '2-6 weeks', description: 'Freight and customs clearance' }
  ];

  const benefits = [
    {
      icon: <Clock size={24} />,
      title: 'Save Time',
      description: 'Skip the research and verification phase. We handle everything efficiently.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Reduce Risk',
      description: 'Factory verification and quality inspections minimize the risk of issues.'
    },
    {
      icon: <BarChart size={24} />,
      title: 'Better Terms',
      description: 'Our expertise helps negotiate better prices and payment terms.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Local Support',
      description: 'English-speaking team based in China for real-time communication.'
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
              How It Works
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '20px', lineHeight: '1.6' }}>
              A simple, transparent process to source products from China. From initial 
              request to delivery, we guide you through every step.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Our 6-Step Process</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              A clear, step-by-step approach to successful China sourcing
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {steps.map((step, index) => (
              <div 
                key={index}
                style={{ 
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: '32px',
                  alignItems: 'start',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '32px'
                }}
              >
                {/* Number */}
                <div style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    fontSize: '48px', 
                    fontWeight: '700', 
                    color: '#E67E22',
                    lineHeight: 1,
                    marginBottom: '12px'
                  }}>
                    {step.number}
                  </div>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: '#FFF5EB', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E67E22'
                  }}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 style={{ marginBottom: '12px' }}>{step.title}</h3>
                  <p style={{ marginBottom: '20px', fontSize: '15px', lineHeight: '1.7' }}>
                    {step.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {step.details.map((detail, idx) => (
                      <span 
                        key={idx}
                        style={{ 
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          backgroundColor: '#F8FAFC',
                          padding: '6px 12px',
                          borderRadius: '4px',
                          fontSize: '13px',
                          color: '#64748B'
                        }}
                      >
                        <CheckCircle size={14} color="#10B981" />
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Typical Timeline</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              Expected timeframes for each phase of the sourcing process
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '16px',
            overflowX: 'auto'
          }}>
            {timeline.map((item, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '20px 16px',
                  textAlign: 'center'
                }}
              >
                <div style={{ 
                  fontSize: '12px', 
                  color: '#E67E22', 
                  fontWeight: '600',
                  marginBottom: '8px'
                }}>
                  PHASE {index + 1}
                </div>
                <h4 style={{ fontSize: '14px', marginBottom: '8px' }}>{item.phase}</h4>
                <div style={{ 
                  fontSize: '20px', 
                  fontWeight: '700', 
                  color: '#1E3A5F',
                  marginBottom: '8px'
                }}>
                  {item.duration}
                </div>
                <p style={{ fontSize: '12px', margin: 0, color: '#64748B' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          <p style={{ 
            textAlign: 'center', 
            marginTop: '24px', 
            fontSize: '14px', 
            color: '#64748B',
            fontStyle: 'italic'
          }}>
            * Timeline varies based on product complexity, quantity, and specific requirements
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Why Our Process Works</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              The advantages of working with our structured sourcing approach
            </p>
          </div>
          <div className="grid grid-4">
            {benefits.map((benefit, index) => (
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
                  {benefit.icon}
                </div>
                <h4 style={{ marginBottom: '8px' }}>{benefit.title}</h4>
                <p style={{ fontSize: '14px', margin: 0 }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#0F172A' }}>
        <div className="container text-center">
          <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>Ready to Start?</h2>
          <p style={{ color: '#94A3B8', fontSize: '18px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Submit your sourcing request today and let us help you find the right suppliers in China.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>
            Get Started <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;