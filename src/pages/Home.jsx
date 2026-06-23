import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  Shield, 
  Factory, 
  ClipboardCheck, 
  Truck, 
  Search, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Users,
  Globe,
  ChevronDown,
  ChevronUp,
  MessageCircle
} from 'lucide-react'
import { useState } from 'react'
import './Home.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          China Sourcing Agent for <span className="hero-highlight">Global Buyers</span>
        </h1>
        <p className="hero-subtitle">
          We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping. 
          Your trusted partner for seamless China procurement since 2015.
        </p>
        <div className="hero-cta">
          <Link to="/contact" className="hero-btn-primary">
            Get a Free Sourcing Quote
            <ArrowRight size={20} />
          </Link>
          <Link to="/how-it-works" className="hero-btn-secondary">
            See How It Works
          </Link>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">12</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">98%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  )
}

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify factory existence, business licenses, production capacity, and certifications to ensure you work with legitimate suppliers.',
    },
    {
      icon: Factory,
      title: 'Factory Sourcing',
      description: 'We find the right manufacturers based on your product specifications, quality requirements, and budget constraints.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Our QC engineers perform pre-shipment inspections, during-production checks, and container loading supervision.',
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'We coordinate freight forwarding, customs clearance, and door-to-door delivery to simplify your supply chain.',
    },
  ]

  return (
    <section className="services-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">End-to-End Sourcing Solutions</h2>
          <p className="section-subtitle">
            Comprehensive services to ensure your China sourcing is safe, efficient, and profitable.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <service.icon size={32} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/services" className="service-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Problems = () => {
  const problems = [
    {
      title: 'Scam Risk',
      description: 'Many buyers lose money to fraudulent suppliers who take payments and disappear.',
      solution: 'We verify supplier credentials, visit factories in person, and confirm production capability before you commit.',
    },
    {
      title: 'Quality Issues',
      description: 'Products arrive damaged, defective, or not matching specifications.',
      solution: 'Our QC team performs rigorous inspections at every production stage to ensure quality standards are met.',
    },
    {
      title: 'Communication Gaps',
      description: 'Language barriers and time zone differences cause misunderstandings and delays.',
      solution: 'We act as your local representative, bridging communication and ensuring clear requirements.',
    },
    {
      title: 'Shipping Complexities',
      description: 'Navigating Chinese customs and international logistics is challenging.',
      solution: 'We handle all logistics, documentation, and customs clearance for hassle-free delivery.',
    },
  ]

  return (
    <section className="problems-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Why You Need Us</span>
          <h2 className="section-title">Common Sourcing Problems We Solve</h2>
          <p className="section-subtitle">
            We address the real challenges that overseas buyers face when sourcing from China.
          </p>
        </div>
        <div className="problems-grid">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card">
              <div className="problem-header">
                <h3>{problem.title}</h3>
              </div>
              <p className="problem-description">{problem.description}</p>
              <div className="problem-solution">
                <CheckCircle size={20} className="solution-icon" />
                <p>{problem.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what product you need, quantity, target price, and any specific requirements.',
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'We research, vet, and shortlist 3-5 qualified manufacturers that match your criteria.',
    },
    {
      number: '03',
      title: 'Factory Verification',
      description: 'We visit the factory, verify credentials, and assess production capacity and quality standards.',
    },
    {
      number: '04',
      title: 'Sample & Negotiation',
      description: 'We request samples, negotiate pricing and terms, and help you make an informed decision.',
    },
    {
      number: '05',
      title: 'Production Follow-up',
      description: 'We monitor production progress, conduct quality checks, and keep you updated.',
    },
    {
      number: '06',
      title: 'Shipping & Delivery',
      description: 'We coordinate shipping, handle customs, and ensure safe delivery to your door.',
    },
  ]

  return (
    <section className="process-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">Our Sourcing Process</h2>
          <p className="section-subtitle">
            A transparent, step-by-step approach to ensure your sourcing success.
          </p>
        </div>
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="process-cta">
          <Link to="/how-it-works" className="process-btn">
            See Full Process Details
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

const ProductsWeSource = () => {
  const products = [
    { name: 'Electronics', icon: '📱' },
    { name: 'Textiles & Garments', icon: '👕' },
    { name: 'Machinery & Parts', icon: '⚙️' },
    { name: 'Packaging', icon: '📦' },
    { name: 'Home & Garden', icon: '🏡' },
    { name: 'Sports & Outdoors', icon: '⚽' },
    { name: 'Automotive Parts', icon: '🚗' },
    { name: 'Health & Beauty', icon: '💄' },
  ]

  return (
    <section className="products-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">What We Source</span>
          <h2 className="section-title">Products We Source</h2>
          <p className="section-subtitle">
            We have expertise across a wide range of product categories.
          </p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <span className="product-icon">{product.icon}</span>
              <span className="product-name">{product.name}</span>
            </div>
          ))}
        </div>
        <div className="products-cta">
          <Link to="/products" className="products-btn">
            View All Product Categories
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

const TrustPoints = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: 'Verified Suppliers',
      description: 'Every supplier we recommend is personally verified through factory visits and document checks.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Our QC team has inspected over 2,000 shipments, ensuring consistent quality standards.',
    },
    {
      icon: Clock,
      title: 'Time Zone Advantage',
      description: 'Based in China, we can respond quickly to suppliers and resolve issues in real-time.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'You get a dedicated sourcing manager who understands your business needs.',
    },
  ]

  return (
    <section className="trust-section">
      <div className="section-container">
        <div className="trust-grid">
          {trustPoints.map((point, index) => (
            <div key={index} className="trust-card">
              <point.icon size={40} className="trust-icon" />
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CaseStudies = () => {
  const cases = [
    {
      category: 'Electronics',
      title: 'Smart Home Device Sourcing for European Retailer',
      challenge: 'A German retailer needed a reliable supplier for smart home devices with competitive pricing.',
      result: 'We found a verified manufacturer, negotiated 15% lower pricing, and ensured QC compliance. Order value: $180,000.',
      metric: '15% Cost Savings',
    },
    {
      category: 'Textiles',
      title: 'Private Label Garments for US Brand',
      challenge: 'A US fashion brand wanted to launch a private label clothing line with consistent quality.',
      result: 'We sourced a GOTS-certified factory, conducted monthly production visits, and maintained 98% quality pass rate.',
      metric: '98% Quality Pass Rate',
    },
    {
      category: 'Machinery',
      title: 'Industrial Equipment Sourcing for Manufacturing',
      challenge: 'A Mexican manufacturing company needed specialized industrial equipment from China.',
      result: 'We identified qualified manufacturers, performed factory audits, and coordinated complete shipping logistics.',
      metric: '$450K Order Delivered',
    },
  ]

  return (
    <section className="cases-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Success Stories</span>
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            Real results from our sourcing partnerships.
          </p>
        </div>
        <div className="cases-grid">
          {cases.map((caseStudy, index) => (
            <div key={index} className="case-card">
              <span className="case-category">{caseStudy.category}</span>
              <h3>{caseStudy.title}</h3>
              <div className="case-details">
                <div className="case-section">
                  <h4>Challenge</h4>
                  <p>{caseStudy.challenge}</p>
                </div>
                <div className="case-section">
                  <h4>Result</h4>
                  <p>{caseStudy.result}</p>
                </div>
              </div>
              <div className="case-metric">
                <Star size={18} className="metric-icon" />
                <span>{caseStudy.metric}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="cases-cta">
          <Link to="/case-studies" className="cases-btn">
            View All Case Studies
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

const FAQ = () => {
  const faqs = [
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct factory visits to verify physical existence, check business licenses and certifications, assess production capacity and quality management systems, and request references from existing clients.',
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure depends on the scope of services. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific requirements.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typical timeline is 2-4 weeks for supplier identification and verification, 1-2 weeks for sample requests, and 4-8 weeks for production depending on order size and complexity.',
    },
    {
      question: 'Do you provide quality inspection services?',
      answer: 'Yes, we offer comprehensive QC services including pre-shipment inspection, during-production checks, and container loading supervision. All inspections include detailed photo and video reports.',
    },
    {
      question: 'Can you help with shipping and logistics?',
      answer: 'Absolutely. We coordinate freight forwarding, handle all export documentation, manage customs clearance, and arrange door-to-door delivery to your specified location.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'We have experience across electronics, textiles, machinery, packaging, home goods, automotive parts, sports equipment, and more. Contact us to discuss your specific product category.',
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="faq-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Questions Answered</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Get answers to common questions about our sourcing services.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2>Ready to Start Sourcing?</h2>
          <p>
            Get a free sourcing quote within 24 hours. Tell us what you need, 
            and we'll find the right suppliers for your business.
          </p>
          <div className="cta-features">
            <div className="cta-feature">
              <CheckCircle size={20} />
              <span>No obligation quote</span>
            </div>
            <div className="cta-feature">
              <CheckCircle size={20} />
              <span>Verified suppliers only</span>
            </div>
            <div className="cta-feature">
              <CheckCircle size={20} />
              <span>Dedicated support team</span>
            </div>
          </div>
          <Link to="/contact" className="cta-section-btn">
            Get a Free Sourcing Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <>
      <Helmet>
        <title>China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China</title>
        <meta name="description" content="SSourcing China - Professional China sourcing agent helping overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping." />
      </Helmet>
      <Hero />
      <Services />
      <Problems />
      <Process />
      <ProductsWeSource />
      <TrustPoints />
      <CaseStudies />
      <FAQ />
      <CTASection />
    </>
  )
}

export default Home