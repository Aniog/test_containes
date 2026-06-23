import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, Users, ClipboardCheck, Factory, Truck, CheckCircle, 
  ArrowRight, Clock, Shield, MessageSquare
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: 'Submit Your Request',
      description: 'Share your product requirements including specifications, quantity, target price, quality standards, and any certifications needed.',
      details: [
        'Product specifications and technical drawings',
        'Target price range and order quantity',
        'Required certifications (CE, FCC, FDA, etc.)',
        'Quality standards and inspection criteria',
        'Timeline and shipping requirements'
      ]
    },
    {
      number: 2,
      icon: Users,
      title: 'Supplier Matching',
      description: 'We identify and vet suitable manufacturers from our extensive network of 5,000+ pre-verified suppliers.',
      details: [
        'Supplier identification based on your criteria',
        'Initial capability and capacity assessment',
        'Price negotiation and comparison',
        'Background and credit check',
        'Shortlist of 3-5 qualified suppliers'
      ]
    },
    {
      number: 3,
      icon: ClipboardCheck,
      title: 'Sample Evaluation',
      description: 'We coordinate sample production and evaluation to ensure the product meets your specifications before mass production.',
      details: [
        'Sample request coordination',
        'Quality and specification review',
        'Feedback and modification handling',
        'Final sample approval',
        'Price and terms finalization'
      ]
    },
    {
      number: 4,
      icon: Factory,
      title: 'Production & Quality Control',
      description: 'We monitor production closely and conduct quality inspections at key stages to ensure everything stays on track.',
      details: [
        'Pre-production material inspection',
        'During-production quality checks',
        'Pre-shipment final inspection',
        'Container loading supervision',
        'Regular progress updates'
      ]
    },
    {
      number: 5,
      icon: Truck,
      title: 'Shipping & Delivery',
      description: 'We coordinate end-to-end logistics from factory to your doorstep, handling all documentation and customs.',
      details: [
        'Freight forwarding coordination',
        'Customs clearance handling',
        'Documentation preparation',
        'Multi-supplier consolidation',
        'Real-time shipment tracking'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How long does the entire sourcing process take?',
      answer: 'Timeline varies based on product complexity. Typically: supplier identification (1-2 weeks), sample evaluation (2-4 weeks), and production (4-12 weeks depending on order size). Total process usually takes 8-18 weeks.'
    },
    {
      question: 'What information do you need to start?',
      answer: 'To provide an accurate quote, we need: product description/specifications, estimated order quantity, target price range, required certifications, quality standards, and your timeline. Technical drawings or samples are helpful but not required initially.'
    },
    {
      question: 'How do you ensure quality?',
      answer: 'We implement a multi-stage QC process: pre-production material inspection, during-production checks at 20%/50%/80% completion, pre-shipment inspection (AQL 2.5), and container loading supervision. All inspections include detailed photo/video reports.'
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure is transparent and depends on the services you need. We offer project-based pricing (per order) and retainer models for ongoing sourcing. We don\'t charge upfront fees - our compensation is tied to successful delivery.'
    },
    {
      question: 'Can you handle multiple suppliers?',
      answer: 'Yes, we regularly coordinate with multiple suppliers for larger orders or when products require different manufacturing capabilities. We can consolidate shipments from different factories into a single container to save on shipping costs.'
    },
    {
      question: 'What happens if there are quality issues?',
      answer: 'If quality issues are found during inspection, we work with the factory to resolve them before shipment. This may include rework, replacement, or price negotiations. Our goal is to ensure you receive products meeting your standards.'
    }
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
              How It Works
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: 'rgba(255,255,255,0.9)', 
              lineHeight: '1.7'
            }}>
              Our proven 5-step process ensures smooth, transparent, and successful China sourcing from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="section bg-light">
        <div className="container">
          {steps.map((step, index) => (
            <div key={index} className="grid-2" style={{ 
              alignItems: 'flex-start', 
              gap: '48px',
              marginBottom: index < steps.length - 1 ? '60px' : '0'
            }}>
              <div className={index % 2 === 1 ? 'hidden lg:block' : ''}>
                <div className="card p-8" style={{ position: 'relative' }}>
                  <div style={{ 
                    width: '56px', 
                    height: '56px', 
                    backgroundColor: 'var(--primary)', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px'
                  }}>
                    <step.icon size={28} style={{ color: 'white' }} />
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    marginBottom: '12px'
                  }}>
                    <span style={{ 
                      fontSize: '14px', 
                      fontWeight: '600', 
                      color: 'var(--secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      Step {step.number}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '16px', marginBottom: '24px' }}>
                    {step.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3" style={{ marginBottom: '12px' }}>
                        <CheckCircle size={16} style={{ color: 'var(--success)', flexShrink: 0, marginTop: '4px' }} />
                        <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={index % 2 === 0 ? 'hidden lg:flex items-center justify-center' : ''} style={{ minHeight: '200px' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: 'var(--primary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0.1
                }}>
                  <step.icon size={60} style={{ color: 'var(--primary)' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Process Timeline</h2>
            <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
              Typical timeline from request to delivery
            </p>
          </div>
          
          <div className="card p-8">
            <div className="grid-5" style={{ gap: '24px' }}>
              {[
                { step: 'Request', time: 'Week 1' },
                { step: 'Matching', time: 'Week 2-3' },
                { step: 'Samples', time: 'Week 3-6' },
                { step: 'Production', time: 'Week 6-14' },
                { step: 'Delivery', time: 'Week 14-18' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: 'var(--primary)', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px'
                  }}>
                    <span style={{ color: 'white', fontWeight: '600' }}>{index + 1}</span>
                  </div>
                  <p style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>{item.step}</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
              Common questions about our sourcing process
            </p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div key={index} className="card p-6 mb-4" style={{ textAlign: 'left' }}>
                <h3 style={{ fontSize: '17px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '12px' }}>
                  {faq.question}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '15px' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
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
              Ready to Start Your Sourcing Project?
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: 'rgba(255,255,255,0.9)', 
              marginBottom: '32px',
              maxWidth: '600px',
              margin: '0 auto 32px',
              lineHeight: '1.7'
            }}>
              Submit your requirements today and let us handle the rest. We'll have a quote ready within 48 hours.
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

export default HowItWorks;
