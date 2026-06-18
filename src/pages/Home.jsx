import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Shield, Factory, Truck, Search, 
  ClipboardCheck, Package, ArrowRight, ChevronDown, 
  ChevronUp, Star, Clock, Users, Globe
} from 'lucide-react';

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  const services = [
    {
      icon: <Search size={32} />,
      title: 'Supplier Sourcing',
      description: 'We find verified manufacturers matching your exact requirements, quality standards, and budget.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Factory Verification',
      description: 'On-site inspections to verify legitimacy, production capacity, certifications, and compliance.'
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: 'Quality Inspection',
      description: 'Pre-shipment inspections ensuring products meet specifications and quality standards.'
    },
    {
      icon: <Factory size={32} />,
      title: 'Production Follow-up',
      description: 'Regular updates and on-site visits during production to ensure timeline and quality.'
    },
    {
      icon: <Truck size={32} />,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination from factory to your doorstep, including customs clearance.'
    },
    {
      icon: <Package size={32} />,
      title: 'Product Development',
      description: 'From prototype to mass production, we help navigate manufacturing processes.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us about your product requirements, quantity, target price, and any specific criteria.'
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'Our team researches and identifies verified manufacturers matching your specifications.'
    },
    {
      number: '03',
      title: 'Factory Verification',
      description: 'We conduct on-site visits to verify factory legitimacy, capacity, and certifications.'
    },
    {
      number: '04',
      title: 'Sample & Quote',
      description: 'You receive samples and detailed quotes for comparison and decision-making.'
    },
    {
      number: '05',
      title: 'Production & QC',
      description: 'We monitor production and conduct quality inspections before shipment.'
    },
    {
      number: '06',
      title: 'Shipping Delivered',
      description: 'We coordinate logistics and ensure smooth customs clearance to your location.'
    }
  ];

  const products = [
    'Electronics & Gadgets',
    'Textiles & Apparel',
    'Home & Garden',
    'Industrial Equipment',
    'Packaging Materials',
    'Health & Beauty',
    'Toys & Gifts',
    'Automotive Parts',
    'Furniture',
    'Sports & Outdoor'
  ];

  const problems = [
    {
      title: 'Language Barriers',
      description: 'Communication challenges with suppliers affecting negotiations and specifications.'
    },
    {
      title: 'Quality Issues',
      description: 'Products not meeting specifications or inconsistent quality across orders.'
    },
    {
      title: 'Supplier Scams',
      description: 'Risk of dealing with fraudulent or non-existent factories.'
    },
    {
      title: 'Shipping Delays',
      description: 'Complex logistics and customs procedures causing delivery problems.'
    },
    {
      title: 'Hidden Costs',
      description: 'Unexpected fees and unclear pricing structures from suppliers.'
    },
    {
      title: 'IP Risks',
      description: 'Concerns about product designs and intellectual property protection.'
    }
  ];

  const trustStats = [
    { icon: <Clock size={24} />, number: '10+', label: 'Years Experience' },
    { icon: <Users size={24} />, number: '500+', label: 'Clients Served' },
    { icon: <Factory size={24} />, number: '2000+', label: 'Factories Verified' },
    { icon: <Globe size={24} />, number: '30+', label: 'Countries' }
  ];

  const caseStudies = [
    {
      category: 'Electronics',
      title: 'Smart Home Device Sourcing for European Retailer',
      description: 'Sourced and verified manufacturer for 50,000 smart home devices with full QC support.',
      image: 'Electronics manufacturing facility'
    },
    {
      category: 'Textiles',
      title: 'Private Label Apparel for US Brand',
      description: 'End-to-end sourcing for organic cotton clothing line, from fabric to finished garments.',
      image: 'Textile factory production'
    },
    {
      category: 'Industrial',
      title: 'Machinery Parts for German Engineering Company',
      description: 'Found certified manufacturer for precision machinery components with ISO certification.',
      image: 'Industrial manufacturing'
    }
  ];

  const faqs = [
    {
      question: 'How do you verify factories?',
      answer: 'Our team conducts on-site visits to verify factory existence, production capacity, machinery, workforce, certifications (ISO, CE, etc.), and business license validity. We provide detailed reports with photos and videos.'
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure depends on the services you need. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific requirements.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timeline varies based on product complexity and availability. Typically, initial supplier shortlist takes 5-7 business days. Full sourcing cycle (from request to first shipment) takes 4-12 weeks.'
    },
    {
      question: 'Do you only work with large orders?',
      answer: 'We work with businesses of all sizes, from startups to large enterprises. Minimum order quantities vary by product category and manufacturer.'
    },
    {
      question: 'Can you help with product samples?',
      answer: 'Yes, we coordinate sample requests, handle shipping, and provide feedback on sample quality. We can also arrange virtual factory tours for remote verification.'
    },
    {
      question: 'What regions in China do you cover?',
      answer: 'We have presence in major manufacturing hubs including Guangdong, Zhejiang, Jiangsu, Shandong, and Fujian. This covers the vast majority of product categories.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: '#0F172A', 
        padding: '160px 0 120px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(45, 90, 135, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(230, 126, 34, 0.1) 0%, transparent 40%)',
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ color: '#FFFFFF', marginBottom: '24px', fontSize: '56px', lineHeight: '1.1' }}>
              China Sourcing Agent for Global Buyers
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '20px', marginBottom: '40px', lineHeight: '1.6' }}>
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, 
              and coordinate seamless shipping. Your trusted partner for China procurement.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '18px' }}>
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section style={{ backgroundColor: '#1E3A5F', padding: '48px 0' }}>
        <div className="container">
          <div className="grid grid-4">
            {trustStats.map((stat, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ color: '#E67E22' }}>{stat.icon}</div>
                <div>
                  <div style={{ color: '#FFFFFF', fontSize: '28px', fontWeight: '700' }}>{stat.number}</div>
                  <div style={{ color: '#94A3B8', fontSize: '14px' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Our Sourcing Services</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              Comprehensive solutions to simplify your China sourcing journey
            </p>
          </div>
          <div className="grid grid-3">
            {services.map((service, index) => (
              <div key={index} className="card" style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: '#FFF5EB', 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: '#E67E22'
                }}>
                  {service.icon}
                </div>
                <h3 style={{ marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ fontSize: '15px' }}>{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn btn-outline">
              View All Services <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-dark">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>How It Works</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px', color: '#94A3B8' }}>
              A simple, transparent process to source products from China
            </p>
          </div>
          <div className="grid grid-3">
            {processSteps.slice(0, 3).map((step, index) => (
              <div key={index} style={{ position: 'relative' }}>
                <div style={{ 
                  backgroundColor: 'rgba(230, 126, 34, 0.1)', 
                  border: '2px solid #E67E22',
                  borderRadius: '12px',
                  padding: '32px 24px',
                  height: '100%'
                }}>
                  <div style={{ 
                    fontSize: '48px', 
                    fontWeight: '700', 
                    color: '#E67E22',
                    marginBottom: '16px',
                    opacity: 0.5
                  }}>
                    {step.number}
                  </div>
                  <h3 style={{ color: '#FFFFFF', marginBottom: '12px' }}>{step.title}</h3>
                  <p style={{ color: '#94A3B8', fontSize: '15px' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-3" style={{ marginTop: '24px' }}>
            {processSteps.slice(3).map((step, index) => (
              <div key={index} style={{ position: 'relative' }}>
                <div style={{ 
                  backgroundColor: 'rgba(230, 126, 34, 0.1)', 
                  border: '2px solid #E67E22',
                  borderRadius: '12px',
                  padding: '32px 24px',
                  height: '100%'
                }}>
                  <div style={{ 
                    fontSize: '48px', 
                    fontWeight: '700', 
                    color: '#E67E22',
                    marginBottom: '16px',
                    opacity: 0.5
                  }}>
                    {step.number}
                  </div>
                  <h3 style={{ color: '#FFFFFF', marginBottom: '12px' }}>{step.title}</h3>
                  <p style={{ color: '#94A3B8', fontSize: '15px' }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/how-it-works" className="btn btn-secondary">
              Learn More About Our Process <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Products We Source</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              Wide range of product categories from verified Chinese manufacturers
            </p>
          </div>
          <div className="grid grid-4">
            {products.map((product, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '20px',
                  textAlign: 'center',
                  transition: 'all 0.2s ease'
                }}
              >
                <span style={{ fontWeight: '500', color: '#1E293B' }}>{product}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="btn btn-outline">
              View All Categories <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section" style={{ backgroundColor: '#F1F5F9' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Problems We Solve</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              Common challenges when sourcing from China, and how we help overcome them
            </p>
          </div>
          <div className="grid grid-3">
            {problems.map((problem, index) => (
              <div key={index} className="card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ 
                  minWidth: '24px',
                  marginTop: '4px'
                }}>
                  <CheckCircle size={24} color="#10B981" />
                </div>
                <div>
                  <h4 style={{ marginBottom: '8px' }}>{problem.title}</h4>
                  <p style={{ fontSize: '14px', margin: 0 }}>{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Success Stories</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              Real results from our clients around the world
            </p>
          </div>
          <div className="grid grid-3">
            {caseStudies.map((study, index) => (
              <div key={index} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ 
                  height: '200px', 
                  backgroundColor: '#1E3A5F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <span style={{ color: '#64748B', fontSize: '14px' }}>{study.image}</span>
                  <div style={{ 
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: '#E67E22',
                    color: '#FFFFFF',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {study.category}
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h4 style={{ marginBottom: '12px' }}>{study.title}</h4>
                  <p style={{ fontSize: '14px', margin: 0 }}>{study.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/case-studies" className="btn btn-outline">
              View All Case Studies <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Frequently Asked Questions</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              Quick answers to common questions about our sourcing services
            </p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  marginBottom: '12px',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontWeight: '500', color: '#1E293B', fontSize: '16px' }}>
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp size={20} color="#64748B" />
                  ) : (
                    <ChevronDown size={20} color="#64748B" />
                  )}
                </button>
                {openFaq === index && (
                  <div style={{ padding: '0 24px 20px' }}>
                    <p style={{ margin: 0, fontSize: '15px', color: '#64748B', lineHeight: '1.7' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="section" style={{ backgroundColor: '#0F172A' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '64px', alignItems: 'start' }}>
            {/* Left Side - Info */}
            <div>
              <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>Ready to Start Sourcing?</h2>
              <p style={{ color: '#94A3B8', fontSize: '18px', marginBottom: '32px' }}>
                Get a free consultation and quote for your sourcing needs. Tell us about your requirements and we'll handle the rest.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CheckCircle size={24} color="#10B981" />
                  <span style={{ color: '#F1F5F9' }}>Response within 24 hours</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CheckCircle size={24} color="#10B981" />
                  <span style={{ color: '#F1F5F9' }}>No obligation quote</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CheckCircle size={24} color="#10B981" />
                  <span style={{ color: '#F1F5F9' }}>Verified supplier network</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <CheckCircle size={24} color="#10B981" />
                  <span style={{ color: '#F1F5F9' }}>Quality guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div style={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: '12px', 
              padding: '32px' 
            }}>
              <h3 style={{ marginBottom: '24px', textAlign: 'center' }}>Get Your Free Quote</h3>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', fontSize: '14px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #E2E8F0',
                      borderRadius: '6px',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    placeholder="John Smith"
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', fontSize: '14px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #E2E8F0',
                      borderRadius: '6px',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    placeholder="john@company.com"
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', fontSize: '14px' }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #E2E8F0',
                      borderRadius: '6px',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    placeholder="Your Company Ltd"
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', fontSize: '14px' }}>
                    Product Interested In *
                  </label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #E2E8F0',
                      borderRadius: '6px',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    placeholder="e.g., Electronics, Textiles, etc."
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', fontSize: '14px' }}>
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #E2E8F0',
                      borderRadius: '6px',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    placeholder="e.g., 5000 units"
                  />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', fontSize: '14px' }}>
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #E2E8F0',
                      borderRadius: '6px',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      resize: 'vertical'
                    }}
                    placeholder="Tell us more about your requirements..."
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '16px' }}
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;