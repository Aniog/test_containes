import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  FileText, Search, Building2, ClipboardCheck, Truck, Package,
  CheckCircle, Clock, ArrowRight, MessageCircle
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>How It Works</h1>
          <p>Our proven 5-step process ensures successful sourcing</p>
        </div>

        <style>{`
          .page-header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            color: white;
            padding: 140px 0 80px;
            text-align: center;
          }

          .page-header h1 {
            font-size: 48px;
            font-weight: 800;
            margin-bottom: 16px;
          }

          .page-header p {
            font-size: 20px;
            color: rgba(255, 255, 255, 0.9);
            max-width: 600px;
            margin: 0 auto;
          }

          @media (max-width: 768px) {
            .page-header {
              padding: 120px 0 60px;
            }
            .page-header h1 {
              font-size: 32px;
            }
          }
        `}</style>
      </section>

      {/* Process Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">The Sourcing Process</h2>
          <p className="section-subtitle">From requirements to delivery, we handle every step</p>
          
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step-item">
                <div className="step-header">
                  <div className="step-icon">{step.icon}</div>
                  <div className="step-number">Step {index + 1}</div>
                </div>
                <div className="step-body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <ul className="step-tasks">
                    {step.tasks.map((task, i) => (
                      <li key={i}><CheckCircle size={16} /> {task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .process-steps {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 800px;
            margin: 0 auto;
          }

          .process-step-item {
            display: flex;
            gap: 24px;
            background: white;
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }

          .step-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 100px;
          }

          .step-icon {
            width: 64px;
            height: 64px;
            background: var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-bottom: 12px;
          }

          .step-number {
            font-size: 12px;
            font-weight: 600;
            color: var(--text-muted);
            text-transform: uppercase;
          }

          .step-body {
            flex: 1;
          }

          .step-body h3 {
            font-size: 22px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 12px;
          }

          .step-body > p {
            font-size: 15px;
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 16px;
          }

          .step-tasks {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            gap: 12px 24px;
          }

          .step-tasks li {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: var(--text-primary);
          }

          .step-tasks li svg {
            color: var(--accent);
          }

          @media (max-width: 768px) {
            .process-step-item {
              flex-direction: column;
            }
            .step-header {
              flex-direction: row;
              justify-content: flex-start;
              gap: 16px;
            }
          }
        `}</style>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Typical Timeline</h2>
          <p className="section-subtitle">How long each phase typically takes</p>
          
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-dot" />
                  {index < timeline.length - 1 && <div className="marker-line" />}
                </div>
                <div className="timeline-content">
                  <h3>{item.phase}</h3>
                  <div className="timeline-duration">
                    <Clock size={16} />
                    <span>{item.duration}</span>
                  </div>
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .timeline {
            max-width: 700px;
            margin: 0 auto;
          }

          .timeline-item {
            display: flex;
            gap: 24px;
          }

          .timeline-marker {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 24px;
          }

          .marker-dot {
            width: 16px;
            height: 16px;
            background: var(--primary);
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 0 0 3px var(--primary);
          }

          .marker-line {
            width: 2px;
            flex: 1;
            background: var(--border);
            min-height: 60px;
          }

          .timeline-content {
            padding-bottom: 40px;
          }

          .timeline-content h3 {
            font-size: 20px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 8px;
          }

          .timeline-duration {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 14px;
            color: var(--secondary);
            font-weight: 600;
            margin-bottom: 12px;
          }

          .timeline-content p {
            font-size: 15px;
            color: var(--text-secondary);
            line-height: 1.6;
          }
        `}</style>
      </section>

      {/* What You Need */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What We Need From You</h2>
          <p className="section-subtitle">To start the sourcing process, please provide</p>
          
          <div className="requirements-grid">
            {requirements.map((req, index) => (
              <div key={index} className="requirement-card card">
                <div className="req-icon">{req.icon}</div>
                <h3>{req.title}</h3>
                <p>{req.description}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .requirements-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .requirement-card {
            padding: 28px;
            text-align: center;
          }

          .req-icon {
            width: 56px;
            height: 56px;
            background: var(--bg-secondary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 16px;
            color: var(--primary);
          }

          .requirement-card h3 {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
            color: var(--text-primary);
          }

          .requirement-card p {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.5;
          }

          @media (max-width: 1024px) {
            .requirements-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 640px) {
            .requirements-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Process FAQ</h2>
          <p className="section-subtitle">Common questions about our sourcing process</p>
          
          <div className="faq-list">
            {faqItems.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <style>{`
          .faq-list {
            max-width: 800px;
            margin: 0 auto;
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Submit your requirements and we'll begin the sourcing process.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Start Your Sourcing Request</Link>
          </div>
        </div>

        <style>{`
          .cta-section {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            color: white;
          }

          .cta-content {
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
          }

          .cta-content h2 {
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 16px;
          }

          .cta-content p {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 32px;
          }

          .cta-section .btn-primary {
            background: white;
            color: var(--primary);
          }
        `}</style>
      </section>
    </div>
  )
}

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="faq-item card">
      <button 
        className="faq-question" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {isOpen ? <CheckCircle size={20} /> : <ArrowRight size={20} />}
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}

      <style>{`
        .faq-item {
          margin-bottom: 12px;
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: none;
          border: none;
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
          text-align: left;
        }

        .faq-question:hover {
          background: var(--bg-secondary);
        }

        .faq-question svg {
          color: var(--primary);
        }

        .faq-answer {
          padding: 0 24px 20px;
        }

        .faq-answer p {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
      `}</style>
    </div>
  )
}

const processSteps = [
  {
    icon: <FileText size={28} />,
    title: 'Submit Requirements',
    description: 'Share your product specifications, quality standards, target prices, and sourcing goals.',
    tasks: [
      'Product specifications',
      'Quality requirements',
      'Target price range',
      'Order quantity',
      'Certification needs'
    ]
  },
  {
    icon: <Search size={28} />,
    title: 'Supplier Matching',
    description: 'We identify and evaluate suppliers that match your criteria from our verified network.',
    tasks: [
      'Supplier identification',
      'Capability assessment',
      'Price comparison',
      'Certification verification',
      'Shortlist presentation'
    ]
  },
  {
    icon: <Building2 size={28} />,
    title: 'Verification & Negotiation',
    description: 'We conduct factory audits and negotiate terms to ensure you get the best deal.',
    tasks: [
      'On-site factory audit',
      'Price negotiation',
      'Payment terms setup',
      'Contract preparation',
      'Sample ordering'
    ]
  },
  {
    icon: <ClipboardCheck size={28} />,
    title: 'Production Monitoring',
    description: 'Regular factory visits and quality checks keep your production on track.',
    tasks: [
      'Production progress updates',
      'Quality inspections',
      'Issue resolution',
      'Timeline management',
      'Sample approval'
    ]
  },
  {
    icon: <Truck size={28} />,
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics from factory to your doorstep.',
    tasks: [
      'Freight coordination',
      'Customs clearance',
      'Documentation handling',
      'Delivery tracking',
      'Post-delivery support'
    ]
  }
]

const timeline = [
  {
    phase: 'Requirements & Research',
    duration: '1-2 weeks',
    details: 'We analyze your requirements, conduct market research, and identify potential suppliers matching your criteria.'
  },
  {
    phase: 'Supplier Verification',
    duration: '1-2 weeks',
    details: 'Factory audits are conducted to verify existence, production capacity, quality systems, and certifications.'
  },
  {
    phase: 'Negotiation & Setup',
    duration: '1-2 weeks',
    details: 'Price negotiation, contract finalization, and sample ordering. Typically 2-3 rounds of negotiation.'
  },
  {
    phase: 'Production',
    duration: '2-8 weeks',
    details: 'Varies by product complexity and order quantity. We provide weekly updates and conduct quality inspections.'
  },
  {
    phase: 'Shipping',
    duration: '2-6 weeks',
    details: 'Depends on shipping method (air/sea). Includes freight forwarding, customs clearance, and final delivery.'
  }
]

const requirements = [
  {
    icon: <FileText size={28} />,
    title: 'Product Details',
    description: 'Technical specifications, drawings, materials, and any design files'
  },
  {
    icon: <Package size={28} />,
    title: 'Quality Standards',
    description: 'Acceptable quality levels, testing requirements, and certification needs'
  },
  {
    icon: <Truck size={28} />,
    title: 'Order Parameters',
    description: 'Target quantity, budget range, and delivery timeline expectations'
  }
]

const faqItems = [
  {
    question: 'How long does the entire process take?',
    answer: 'The complete sourcing process typically takes 6-16 weeks depending on product complexity, supplier availability, and order size. Simple products with established suppliers can be faster, while custom products may take longer.'
  },
  {
    question: 'What information do you need to start?',
    answer: 'We need product specifications (or samples), quality requirements, target price range, order quantity, and your delivery timeline. The more details you provide, the better we can match you with suitable suppliers.'
  },
  {
    question: 'Can you work with my existing suppliers?',
    answer: 'Yes, we can help verify and audit your existing suppliers, negotiate better terms, or improve quality control processes. We also help transition from existing suppliers if needed.'
  },
  {
    question: 'What happens if quality issues arise?',
    answer: 'We identify issues early through regular inspections and work with the factory to resolve them. If problems are found during pre-shipment inspection, we can delay shipping until issues are addressed.'
  },
  {
    question: 'Do you handle small orders?',
    answer: 'Yes, we work with businesses of all sizes. While some services are more cost-effective for larger orders, we can tailor our approach to meet your specific needs.'
  }
]

export default HowItWorks