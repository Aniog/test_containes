import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  Search, 
  Building2, 
  ClipboardCheck, 
  Truck, 
  Package,
  Clock,
  Shield,
  Users,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react'
import './HowItWorks.css'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Submit Your Request',
      description: 'Tell us what product you need, quantity, target price, quality specifications, and any special requirements. The more details you provide, the better we can match you with suitable suppliers.',
      details: [
        'Product specifications and technical drawings',
        'Target price range and payment terms',
        'Quality standards and certifications required',
        'Sample requirements and approval process',
        'Packaging and labeling needs',
        'Timeline and delivery schedule',
      ],
    },
    {
      number: '02',
      icon: Search,
      title: 'We Find Suppliers',
      description: 'Our team researches and evaluates potential manufacturers in our verified database and through industry connections. We shortlist 3-5 suppliers that match your criteria.',
      details: [
        'Database of 2,000+ verified suppliers',
        'Industry-specific manufacturer networks',
        'Capability and capacity matching',
        'Price comparison and negotiation',
        'Location considerations (proximity to ports)',
        'Certification and compliance verification',
      ],
    },
    {
      number: '03',
      icon: Building2,
      title: 'Factory Verification',
      description: 'We visit shortlisted factories to verify their existence, assess production capacity, check quality management systems, and confirm business legitimacy.',
      details: [
        'Physical factory visit and inspection',
        'Business license verification',
        'Production capacity assessment',
        'Quality control system review',
        'Financial stability evaluation',
        'Reference checks from existing clients',
      ],
    },
    {
      number: '04',
      icon: ClipboardCheck,
      title: 'Sample & Negotiation',
      description: 'We coordinate sample requests, evaluate samples against your specifications, and negotiate pricing and terms to ensure favorable conditions.',
      details: [
        'Sample request and tracking',
        'Quality evaluation against specs',
        'Price negotiation on your behalf',
        'Payment term negotiation',
        'MOQ (Minimum Order Quantity) optimization',
        'Contract and agreement review',
      ],
    },
    {
      number: '05',
      icon: Package,
      title: 'Production Follow-up',
      description: 'We monitor production progress, conduct quality inspections at key stages, and keep you updated on status throughout the manufacturing process.',
      details: [
        'Production progress monitoring',
        'During-production inspections',
        'Pre-shipment quality inspection',
        'Issue identification and resolution',
        'Regular status updates',
        'Timeline management',
      ],
    },
    {
      number: '06',
      icon: Truck,
      title: 'Shipping & Delivery',
      description: 'We coordinate freight forwarding, handle all export documentation, manage customs clearance, and ensure safe delivery to your specified location.',
      details: [
        'Freight forwarding coordination',
        'Export documentation handling',
        'Customs clearance management',
        'Insurance coordination',
        'Door-to-door delivery option',
        'Track and trace updates',
      ],
    },
  ]

  const timeline = [
    { phase: 'Week 1-2', activity: 'Supplier identification and initial verification' },
    { phase: 'Week 2-3', activity: 'Factory visits and detailed assessment' },
    { phase: 'Week 3-4', activity: 'Sample requests and evaluation' },
    { phase: 'Week 4-5', activity: 'Negotiation and contract finalization' },
    { phase: 'Production', activity: 'Production monitoring and quality checks' },
    { phase: 'Final', activity: 'Shipping and delivery coordination' },
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'We reduce your risk of fraud, quality issues, and communication problems through our verification and oversight.',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Skip the time-consuming process of finding and vetting suppliers. We do the legwork so you can focus on your business.',
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Our team in China understands local business practices, culture, and can navigate language barriers effectively.',
    },
    {
      icon: MessageCircle,
      title: 'Clear Communication',
      description: 'We bridge the gap between you and suppliers, ensuring clear understanding of requirements and expectations.',
    },
  ]

  const faqs = [
    {
      question: 'How long does the entire process take?',
      answer: 'The timeline varies based on product complexity and availability of suppliers. Typically, supplier identification takes 1-2 weeks, verification 1 week, samples 2-4 weeks, and production varies by order size. Most projects complete within 6-12 weeks.',
    },
    {
      question: 'What information do you need to start?',
      answer: 'To provide the most accurate quote, we need: product description/specifications, estimated order quantity, target price range, quality requirements, packaging needs, destination country, and your timeline.',
    },
    {
      question: 'How do you verify factories?',
      answer: 'Our verification process includes: physical factory visit to confirm existence, business license authentication, assessment of production capacity and equipment, quality management system review, and reference checks from existing clients.',
    },
    {
      question: 'Can you work with our existing suppliers?',
      answer: 'Absolutely. We can verify your existing suppliers, conduct quality inspections on your current orders, or help improve communication and processes with suppliers you already work with.',
    },
    {
      question: 'What happens if quality issues are found?',
      answer: 'If quality issues are identified during inspection, we document them with photos and videos, work with the factory to implement corrective actions, and provide you with detailed reports to make informed decisions about acceptance or rejection.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>How It Works | China Sourcing Process | SSourcing China</title>
        <meta name="description" content="Learn about our step-by-step China sourcing process. From supplier verification to shipping, we handle every step of your sourcing journey." />
      </Helmet>

      <section className="how-hero">
        <div className="how-hero-content">
          <h1>How Our Sourcing Process Works</h1>
          <p>
            A transparent, systematic approach to ensure your China sourcing is successful. 
            From the first conversation to final delivery, we're with you every step of the way.
          </p>
        </div>
      </section>

      <section className="steps-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Step by Step</span>
            <h2 className="section-title">Our 6-Step Sourcing Process</h2>
            <p className="section-subtitle">
              A comprehensive approach that covers every aspect of your sourcing needs.
            </p>
          </div>

          <div className="steps-list">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-header">
                  <div className="step-icon-wrapper">
                    <step.icon size={32} />
                  </div>
                  <div className="step-number-badge">{step.number}</div>
                </div>
                <div className="step-body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="step-details">
                    <h4>What we do:</h4>
                    <ul>
                      {step.details.map((detail, idx) => (
                        <li key={idx}>
                          <CheckCircle size={16} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Timeline</span>
            <h2 className="section-title">Typical Project Timeline</h2>
            <p className="section-subtitle">
              While timelines vary by project, here's a general overview of what to expect.
            </p>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-phase">{item.phase}</div>
                <div className="timeline-activity">{item.activity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Why It Works</span>
            <h2 className="section-title">Benefits of Our Process</h2>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <benefit.icon size={36} className="benefit-icon" />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Questions</span>
            <h2 className="section-title">Common Questions About Our Process</h2>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Get Started?</h2>
          <p>Submit your sourcing request today and receive a detailed quote within 24 hours.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-primary">
              Get a Free Quote
              <ArrowRight size={20} />
            </Link>
            <a href="mailto:info@ssourcingchina.com" className="cta-secondary">
              <Mail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWorks