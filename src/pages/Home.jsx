import { Link } from 'react-router-dom';
import { 
  Search, Factory, ClipboardCheck, Truck, 
  Shield, Clock, Globe, Award,
  AlertTriangle, Users, FileCheck, Package
} from 'lucide-react';
import { useState } from 'react';

const Home = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify factory existence, business license, production capacity, and certifications to ensure legitimacy.'
    },
    {
      icon: Factory,
      title: 'Factory Sourcing',
      description: 'Find the right manufacturers based on your product specifications, quality requirements, and budget.'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-shipment inspections and during-production checks to ensure your products meet specifications.'
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'Coordinate freight forwarding, customs clearance, and documentation for smooth delivery.'
    }
  ];

  const processSteps = [
    { number: '1', title: 'Submit Request', description: 'Tell us what you need' },
    { number: '2', title: 'Supplier Match', description: 'We find suitable factories' },
    { number: '3', title: 'Verify & Negotiate', description: 'Factory verification & pricing' },
    { number: '4', title: 'Production', description: 'Quality monitoring' },
    { number: '5', title: 'Delivery', description: 'Shipping to your door' }
  ];

  const products = [
    { icon: Package, title: 'Electronics', description: 'Consumer electronics, components, gadgets' },
    { icon: Package, title: 'Textiles', description: 'Garments, fabrics, accessories' },
    { icon: Package, title: 'Machinery', description: 'Industrial equipment, parts, tools' },
    { icon: Package, title: 'Consumer Goods', description: 'Home goods, kitchenware, furniture' }
  ];

  const problems = [
    {
      icon: AlertTriangle,
      title: 'Scam Prevention',
      description: 'Avoid fraudulent suppliers who take payments and disappear. We verify every factory before you commit.'
    },
    {
      icon: Users,
      title: 'Language Barriers',
      description: 'Navigate Chinese business culture and negotiate effectively. Our team handles all communications in Mandarin.'
    },
    {
      icon: FileCheck,
      title: 'Quality Control',
      description: 'Ensure products meet your standards before shipment. We inspect at critical production stages.'
    },
    {
      icon: Clock,
      title: 'Time Zone Challenges',
      description: 'Real-time production monitoring. We visit factories and provide updates in your timezone.'
    }
  ];

  const trustPoints = [
    { icon: Shield, title: 'Verified Suppliers', description: 'Every factory verified in person' },
    { icon: Clock, title: '15+ Years Experience', description: 'Deep industry knowledge' },
    { icon: Globe, title: 'Global Client Base', description: 'Clients from 30+ countries' },
    { icon: Award, title: 'Quality Assured', description: 'ISO 9001 certified process' }
  ];

  const caseStudies = [
    {
      tag: 'Electronics',
      title: 'US Retailer Sourcing Smart Home Devices',
      description: 'Sourced and verified 5 factories for smart home products. Reduced procurement costs by 23%.',
      savings: '23%',
      timeline: '4 months'
    },
    {
      tag: 'Textiles',
      title: 'European Brand Fashion Manufacturing',
      description: 'Established reliable supply chain for sustainable fashion line. 3 factories, 50,000 units annually.',
      savings: '35%',
      timeline: '6 months'
    },
    {
      tag: 'Machinery',
      title: 'Industrial Equipment Components',
      description: 'Found specialized manufacturers for precision components. Quality pass rate: 99.2%.',
      savings: '18%',
      timeline: '3 months'
    }
  ];

  const faqs = [
    {
      question: 'How do you verify factories?',
      answer: 'We conduct in-person visits to verify factory existence, check business licenses, assess production capacity, review quality management systems, and verify certifications. We provide detailed reports with photos and videos.'
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure depends on the services you need. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific requirements.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typical timeline is 2-6 weeks for initial supplier matching, depending on product complexity and quantity. Production takes additional time based on order size and specifications.'
    },
    {
      question: 'Do you only work with large orders?',
      answer: 'We work with businesses of all sizes, from startups to large enterprises. Minimum order quantities vary by product category and factory.'
    },
    {
      question: 'Can you help with product development?',
      answer: 'Yes, we can assist with product development, including design improvements, material sourcing, and prototyping. Our team has extensive experience in manufacturing processes.'
    }
  ];

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>China Sourcing Agent for Global Buyers</h1>
              <p>
                We help overseas businesses find reliable suppliers, verify factories, 
                inspect quality, and coordinate shipping. Your trusted partner for 
                seamless China procurement.
              </p>
              <div className="hero-cta">
                <Link to="/contact" className="btn btn-primary">
                  Get a Free Sourcing Quote
                </Link>
                <Link to="/how-it-works" className="btn btn-outline">
                  Learn How It Works
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Verified Suppliers</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">30+</div>
                  <div className="stat-label">Countries Served</div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image-main">
                <Factory size={120} strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive sourcing solutions to help you source from China with confidence
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <service.icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Our streamlined 5-step process makes China sourcing simple and risk-free
          </p>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < processSteps.length - 1 && <div className="process-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section products">
        <div className="container">
          <h2 className="section-title">Products We Source</h2>
          <p className="section-subtitle">
            Extensive experience across multiple product categories
          </p>
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  <product.icon size={48} />
                </div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section problems">
        <div className="container">
          <h2 className="section-title">We Solve Your Sourcing Challenges</h2>
          <p className="section-subtitle">
            Common problems when sourcing from China—and how we help solve them
          </p>
          <div className="problems-grid">
            {problems.map((problem, index) => (
              <div key={index} className="problem-item">
                <div className="problem-icon">
                  <problem.icon size={24} />
                </div>
                <div className="problem-content">
                  <h3>{problem.title}</h3>
                  <p>{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section trust">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Building trust through transparency, verification, and proven results
          </p>
          <div className="trust-grid">
            {trustPoints.map((trust, index) => (
              <div key={index} className="trust-item">
                <div className="trust-icon">
                  <trust.icon size={24} />
                </div>
                <h3>{trust.title}</h3>
                <p>{trust.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section case-studies">
        <div className="container">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            Real results from our clients around the world
          </p>
          <div className="case-grid">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-card">
                <div className="case-image">
                  <Factory size={48} />
                </div>
                <div className="case-content">
                  <span className="case-tag">{study.tag}</span>
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  <div className="case-stats">
                    <div className="case-stat">
                      <div className="case-stat-value">{study.savings}</div>
                      <div className="case-stat-label">Cost Savings</div>
                    </div>
                    <div className="case-stat">
                      <div className="case-stat-value">{study.timeline}</div>
                      <div className="case-stat-label">Timeline</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers to common questions about our sourcing services
          </p>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${faqOpen === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  {faq.question}
                  <span>{faqOpen === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <h2 className="section-title">Ready to Start Sourcing?</h2>
          <p className="section-subtitle">
            Get a free consultation and quote for your sourcing needs
          </p>
          <div className="cta-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" name="company" placeholder="Your company" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 234 567 8900" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="product">Product Category</label>
                <select id="product" name="product">
                  <option value="">Select a category</option>
                  <option value="electronics">Electronics</option>
                  <option value="textiles">Textiles & Garments</option>
                  <option value="machinery">Machinery & Parts</option>
                  <option value="consumer">Consumer Goods</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell us about your sourcing requirements..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Get a Free Sourcing Quote
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;