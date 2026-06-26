import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Factory, Truck, Search, Eye, ClipboardCheck, Package, Users, TrendingUp, Star, ChevronRight } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We find verified manufacturers matching your exact requirements, quality standards, and budget.',
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site audits to confirm factory existence, production capacity, certifications, and compliance.',
    },
    {
      icon: Eye,
      title: 'Quality Inspection',
      description: 'Pre-shipment inspections at key production stages to ensure your specifications are met.',
    },
    {
      icon: ClipboardCheck,
      title: 'Production Follow-up',
      description: 'Regular updates and on-site monitoring throughout the manufacturing process.',
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end freight forwarding from factory to your designated warehouse or port.',
    },
    {
      icon: Package,
      title: 'Product Development',
      description: 'From prototype to mass production - we help navigate the entire product development cycle.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what you need - product specifications, quantity, target price, and quality requirements.',
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'Our team researches and vets manufacturers, presenting you with qualified options.',
    },
    {
      number: '03',
      title: 'Factory Verification',
      description: 'We conduct on-site audits to verify capabilities, certifications, and reliability.',
    },
    {
      number: '04',
      title: 'Quality Control',
      description: 'During production and before shipment, we inspect goods to ensure quality standards.',
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We handle all logistics, documentation, and customs clearance for smooth delivery.',
    },
  ];

  const products = [
    'Electronics & Gadgets',
    'Home & Garden',
    'Apparel & Textiles',
    'Industrial Equipment',
    'Packaging Materials',
    'Automotive Parts',
    'Health & Beauty',
    'Sports & Outdoors',
  ];

  const problems = [
    {
      title: 'Language Barriers',
      description: 'Communication gaps with suppliers leading to misunderstandings and errors.',
    },
    {
      title: 'Quality Issues',
      description: 'Receiving products that don\'t match specifications or have defects.',
    },
    {
      title: 'Scam Risks',
      description: 'Falling victim to fraudulent suppliers or paying for samples that never arrive.',
    },
    {
      title: 'Hidden Costs',
      description: 'Unexpected fees, middlemen markups, and unclear pricing structures.',
    },
    {
      title: 'Logistics Complexities',
      description: 'Difficulties coordinating shipping, customs, and delivery timelines.',
    },
    {
      title: 'Time Zone Challenges',
      description: 'Difficulty managing communications and operations across different time zones.',
    },
  ];

  const trustPoints = [
    { number: '500+', label: 'Clients Served' },
    { number: '8+', label: 'Years Experience' },
    { number: '2000+', label: 'Factories Verified' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const caseStudies = [
    {
      client: 'European Retail Chain',
      category: 'Home Goods',
      challenge: 'Needed reliable supplier for 50,000 units of kitchenware with strict EU safety standards.',
      solution: 'Verified 12 factories, conducted quality audits, and implemented a rigorous QC process.',
      result: 'Delivered on time with 99.2% pass rate. Established ongoing partnership.',
    },
    {
      client: 'US Tech Startup',
      category: 'Electronics',
      challenge: 'First-time sourcing from China with limited budget and tight timeline.',
      solution: 'Full-service sourcing including supplier matching, prototype development, and QC.',
      result: 'Launched product 3 weeks ahead of schedule. Cost savings of 35% vs US suppliers.',
    },
    {
      client: 'Australian Distributor',
      category: 'Apparel',
      challenge: 'Required sustainable textiles with fair-trade certification.',
      solution: 'Identified certified manufacturers, conducted social compliance audits.',
      result: 'Successfully launched eco-friendly line. 200% growth in first year.',
    },
  ];

  const faqs = [
    {
      question: 'How do you verify factories?',
      answer: 'We conduct on-site visits to verify factory existence, assess production capacity, check certifications (ISO, CE, FCC, etc.), review quality management systems, and interview key personnel. We provide detailed audit reports with photos and videos.',
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure depends on the services you need. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific requirements.',
    },
    {
      question: 'How do you ensure quality?',
      answer: 'We implement multi-stage quality control: pre-production sample approval, in-process inspections, and pre-shipment inspections. We follow AQL (Acceptable Quality Level) standards and provide detailed inspection reports with photos.',
    },
    {
      question: 'Can you help with small orders?',
      answer: 'Yes, we work with businesses of all sizes, from startups to large enterprises. While some services are more cost-effective for larger orders, we can tailor our approach to meet your needs.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timelines vary based on complexity. Typical supplier matching takes 1-2 weeks. Factory verification adds 1 week. Production depends on order size and complexity, usually 2-8 weeks. We provide detailed timelines for each project.',
    },
    {
      question: 'Do you only work with factories in China?',
      answer: 'While our primary expertise is in China, we can also assist with sourcing from other Asian countries including Vietnam, Thailand, India, and Bangladesh based on your product requirements.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2C5282 100%)',
        padding: '160px 0 120px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1 }}>
          <div style={{ 
            position: 'absolute', 
            top: '10%', 
            right: '5%', 
            width: '400px', 
            height: '400px', 
            border: '2px solid #fff', 
            borderRadius: '50%' 
          }}></div>
          <div style={{ 
            position: 'absolute', 
            bottom: '20%', 
            left: '10%', 
            width: '200px', 
            height: '200px', 
            border: '2px solid #fff', 
            borderRadius: '50%' 
          }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{ color: '#FFFFFF', fontSize: '52px', fontWeight: '700', lineHeight: '1.15', marginBottom: '24px' }}>
              China Sourcing Agent for Global Buyers
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '20px', lineHeight: '1.6', marginBottom: '40px' }}>
              Your trusted partner for finding reliable suppliers, verifying factories, inspecting quality, and coordinating seamless shipping from China.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
                  transition: 'all 0.2s ease',
                }}
              >
                Get a Free Sourcing Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/how-it-works"
                style={{
                  backgroundColor: 'transparent',
                  color: '#FFFFFF',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  padding: '14px 30px',
                  borderRadius: '4px',
                  fontWeight: '600',
                  fontSize: '16px',
                  transition: 'all 0.2s ease',
                }}
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '48px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }} className="trust-stats">
            {trustPoints.map((point, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '42px', fontWeight: '700', color: '#1E3A5F', marginBottom: '4px' }}>
                  {point.number}
                </div>
                <div style={{ fontSize: '14px', color: '#718096', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {point.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ marginBottom: '16px' }}>Our Sourcing Services</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              Comprehensive solutions to streamline your China sourcing operations
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '32px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#1E3A5F',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <service.icon size={28} color="#C9A227" />
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ fontSize: '15px', lineHeight: '1.6' }}>{service.description}</p>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#1E3A5F',
                fontWeight: '600',
                fontSize: '16px',
              }}
            >
              View All Services <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ marginBottom: '16px' }}>Our Sourcing Process</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              A proven 5-step process to ensure successful sourcing from China
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px' }} className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} style={{ position: 'relative' }}>
                <div style={{
                  backgroundColor: '#1E3A5F',
                  color: '#FFFFFF',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  fontWeight: '700',
                  marginBottom: '20px',
                }}>
                  {step.number}
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#4A5568' }}>{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '24px',
                    right: '-24px',
                    width: '24px',
                    height: '2px',
                    backgroundColor: '#E2E8F0',
                    display: 'none'
                  }} className="process-arrow"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ marginBottom: '16px' }}>Products We Source</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              Wide range of product categories from verified Chinese manufacturers
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="products-grid">
            {products.map((product, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '24px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  border: '1px solid #E2E8F0',
                  transition: 'all 0.2s ease',
                }}
              >
                <span style={{ fontSize: '16px', fontWeight: '500', color: '#1E3A5F' }}>{product}</span>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              to="/products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#1E3A5F',
                fontWeight: '600',
                fontSize: '16px',
              }}
            >
              View All Products <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section" style={{ backgroundColor: '#1E3A5F', color: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>Problems We Solve</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px', color: 'rgba(255, 255, 255, 0.8)' }}>
              Common challenges when sourcing from China - and how we help overcome them
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="problems-grid">
            {problems.map((problem, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '28px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <CheckCircle size={24} color="#C9A227" style={{ marginBottom: '16px' }} />
                <h3 style={{ color: '#FFFFFF', fontSize: '18px', marginBottom: '8px' }}>{problem.title}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', lineHeight: '1.6' }}>{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ marginBottom: '16px' }}>Success Stories</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              Real results from our clients who trusted us with their China sourcing
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="cases-grid">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                }}
              >
                <div style={{ padding: '24px' }}>
                  <div style={{ 
                    display: 'inline-block', 
                    backgroundColor: '#C9A227', 
                    color: '#1E3A5F', 
                    padding: '4px 12px', 
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: '600',
                    marginBottom: '16px',
                  }}>
                    {study.category}
                  </div>
                  <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>{study.client}</h3>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '12px', color: '#718096', textTransform: 'uppercase', marginBottom: '4px' }}>Challenge</div>
                    <p style={{ fontSize: '14px', lineHeight: '1.5' }}>{study.challenge}</p>
                  </div>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '12px', color: '#718096', textTransform: 'uppercase', marginBottom: '4px' }}>Solution</div>
                    <p style={{ fontSize: '14px', lineHeight: '1.5' }}>{study.solution}</p>
                  </div>
                  
                  <div>
                    <div style={{ fontSize: '12px', color: '#718096', textTransform: 'uppercase', marginBottom: '4px' }}>Result</div>
                    <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#38A169', fontWeight: '500' }}>{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              to="/case-studies"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#1E3A5F',
                fontWeight: '600',
                fontSize: '16px',
              }}
            >
              View All Case Studies <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ marginBottom: '16px' }}>Frequently Asked Questions</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              Common questions about our China sourcing services
            </p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '24px',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  border: '1px solid #E2E8F0',
                }}
              >
                <h3 style={{ fontSize: '18px', marginBottom: '12px', color: '#1E3A5F' }}>{faq.question}</h3>
                <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#4A5568' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#1E3A5F' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ color: '#FFFFFF', marginBottom: '16px', fontSize: '36px' }}>
              Ready to Start Sourcing from China?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '18px', marginBottom: '32px' }}>
              Get a free consultation and quote for your sourcing needs. No commitment required.
            </p>
            <Link
              to="/contact"
              style={{
                backgroundColor: '#C9A227',
                color: '#1E3A5F',
                padding: '18px 40px',
                borderRadius: '4px',
                fontWeight: '700',
                fontSize: '18px',
                display: 'inline-block',
                transition: 'all 0.2s ease',
              }}
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .process-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .problems-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .cases-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .trust-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr !important; }
          .products-grid { grid-template-columns: 1fr !important; }
          .problems-grid { grid-template-columns: 1fr !important; }
          .cases-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Home;