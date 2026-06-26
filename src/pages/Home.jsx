import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Search, 
  ClipboardCheck, 
  Truck, 
  Package, 
  MessageCircle,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Factory,
  Globe,
  Users,
  Award
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomePage = () => {
  const heroRef = useRef(null);
  const [faqOpen, setFaqOpen] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productDetails: '',
    quantity: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify supplier credentials, business licenses, and factory capabilities to ensure legitimacy.'
    },
    {
      icon: Factory,
      title: 'Factory Audit',
      description: 'Comprehensive on-site audits to assess production capacity, quality management systems, and working conditions.'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Pre-shipment inspections and during-production checks to ensure your products meet specifications.'
    },
    {
      icon: Package,
      title: 'Production Follow-up',
      description: 'Regular updates on production progress, timeline tracking, and issue resolution throughout the manufacturing process.'
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and door-to-door delivery.'
    },
    {
      icon: MessageCircle,
      title: 'Sourcing Consultation',
      description: 'Expert guidance on product sourcing, pricing negotiation, and market insights to optimize your procurement strategy.'
    }
  ];

  const processSteps = [
    { number: 1, title: 'Submit Request', description: 'Share your product requirements, specifications, and target pricing.' },
    { number: 2, title: 'Supplier Matching', description: 'We identify and vet suitable suppliers from our verified network.' },
    { number: 3, title: 'Sample Evaluation', description: 'Receive and evaluate product samples before committing to production.' },
    { number: 4, title: 'Order & Production', description: 'We manage the production process with regular quality checks.' },
    { number: 5, title: 'Shipping & Delivery', description: 'Coordinate logistics from factory to your designated delivery address.' }
  ];

  const products = [
    'Electronics', 'Furniture', 'Textiles & Apparel', 'Machinery', 
    'Packaging', 'Toys & Games', 'Automotive Parts', 'Home Goods',
    'Sports Equipment', 'Medical Supplies', 'Beauty & Personal Care', 'Industrial Components'
  ];

  const problems = [
    {
      title: 'Language Barriers',
      solution: 'Our bilingual team bridges communication gaps, ensuring clear specifications and avoiding misunderstandings.'
    },
    {
      title: 'Quality Issues',
      solution: 'Rigorous QC inspections at multiple stages prevent defective products from reaching your customers.'
    },
    {
      title: 'Supplier Scams',
      solution: 'Thorough verification of supplier credentials and factory conditions protects against fraud.'
    },
    {
      title: 'Logistics Complexity',
      solution: 'End-to-end logistics handling simplifies international shipping and customs procedures.'
    }
  ];

  const stats = [
    { value: '12+', label: 'Years Experience', icon: Award },
    { value: '2,500+', label: 'Suppliers Verified', icon: ShieldCheck },
    { value: '15,000+', label: 'Orders Completed', icon: Package },
    { value: '98%', label: 'Client Satisfaction', icon: Users }
  ];

  const caseStudies = [
    {
      industry: 'Electronics',
      challenge: 'A US retailer needed to source smart home devices with strict quality standards.',
      solution: 'We verified 15 factories, conducted factory audits, and implemented a 3-stage QC process.',
      result: 'Reduced defect rate from 8% to 0.5%, saving $120,000 in potential returns.'
    },
    {
      industry: 'Furniture',
      challenge: 'A European importer wanted to source outdoor furniture at competitive prices.',
      solution: 'Identified specialized manufacturers in Zhejiang, negotiated volume discounts, arranged shipping.',
      result: 'Achieved 35% cost savings compared to previous supplier, delivered on time.'
    },
    {
      industry: 'Textiles',
      challenge: 'A fashion brand needed reliable fabric suppliers with sustainable practices.',
      solution: 'Vetted suppliers for eco-certifications, arranged fabric testing, established quality benchmarks.',
      result: 'Secured consistent quality supply, increased customer satisfaction by 40%.'
    }
  ];

  const faqs = [
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct comprehensive verification including business license checks, factory visits, capacity assessments, and reference verification. Our team documents all findings with photos and detailed reports.'
    },
    {
      question: 'What quality control services do you offer?',
      answer: 'We offer pre-shipment inspections, during-production checks, and final random inspections. Our QC team follows AQL standards and provides detailed reports with photos and recommendations.'
    },
    {
      question: 'How do you handle shipping and logistics?',
      answer: 'We coordinate with reliable freight forwarders to handle sea, air, and land freight. Services include customs clearance documentation, consolidation options, and door-to-door delivery tracking.'
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure depends on the services required. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific sourcing needs.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timeline varies based on product complexity and supplier availability. Typically, supplier matching takes 1-2 weeks, sample evaluation 2-4 weeks, and production 4-8 weeks depending on order size.'
    },
    {
      question: 'Do you only work with large orders?',
      answer: 'We work with businesses of all sizes, from startups to large enterprises. Our minimum order requirements are flexible, and we can help connect you with suppliers suitable for your volume needs.'
    }
  ];

  const handleFaqToggle = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productDetails: '',
        quantity: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <main>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] pt-20"
      >
        <div 
          className="absolute inset-0 opacity-10"
          data-strk-bg-id="hero-bg-001"
          data-strk-bg="China factory warehouse industrial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Find verified suppliers, ensure product quality, and streamline shipping from China. 
              We handle the complexities so you can focus on growing your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-cta text-lg px-8 py-4">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 text-lg px-8 py-4">
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Comprehensive Services</h2>
            <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
              End-to-end sourcing solutions tailored to your business needs. From supplier verification to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <h3 className="mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn btn-primary inline-flex gap-2">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process Section */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Sourcing Process</h2>
            <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
              A streamlined 5-step process designed to minimize risk and maximize efficiency in your China sourcing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card text-center h-full">
                  <div className="w-10 h-10 bg-[var(--secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[var(--text-primary)] font-bold">{step.number}</span>
                  </div>
                  <h4 className="mb-2">{step.title}</h4>
                  <p className="text-sm text-[var(--text-muted)]">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[var(--border)]">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Products We Source</h2>
            <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
              Extensive experience across multiple industries and product categories.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div key={index} className="card text-center py-6">
                <h4 className="text-sm font-semibold">{product}</h4>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="btn btn-secondary inline-flex gap-2">
              View All Categories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Problems We Solve</h2>
            <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
              Common challenges in China sourcing and how we help you overcome them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((item, index) => (
              <div key={index} className="card flex gap-4">
                <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <div>
                  <h4 className="mb-2">{item.title}</h4>
                  <p className="text-sm">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="section bg-[var(--primary)]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-10 h-10 text-[var(--secondary)] mx-auto mb-3" />
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Success Stories</h2>
            <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
              Real results from our clients who have transformed their sourcing operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="card">
                <div className="text-xs font-semibold text-[var(--secondary)] uppercase tracking-wide mb-3">
                  {study.industry}
                </div>
                <h4 className="mb-3">Challenge</h4>
                <p className="text-sm mb-4">{study.challenge}</p>
                <h4 className="mb-3">Solution</h4>
                <p className="text-sm mb-4">{study.solution}</p>
                <div className="pt-4 border-t border-[var(--border)]">
                  <h4 className="text-[var(--accent)] mb-1">Result</h4>
                  <p className="text-sm font-medium">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/case-studies" className="btn btn-primary inline-flex gap-2">
              View All Case Studies <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-[var(--text-secondary)]">
              Quick answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="card mb-4">
                <button
                  className="w-full flex items-center justify-between text-left"
                  onClick={() => handleFaqToggle(index)}
                >
                  <h4 className="font-semibold">{faq.question}</h4>
                  {faqOpen === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {faqOpen === index && (
                  <div className="mt-4 pt-4 border-t border-[var(--border)]">
                    <p className="text-sm">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="mb-4">Get a Free Sourcing Quote</h2>
              <p className="text-[var(--text-secondary)]">
                Tell us about your sourcing needs and we'll provide a comprehensive quote within 24 hours.
              </p>
            </div>
            <form onSubmit={handleFormSubmit} className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="input"
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    className="input"
                    required
                    placeholder="Your company name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="input"
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="input"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="productDetails" className="block text-sm font-medium mb-2">Product Details *</label>
                  <input
                    type="text"
                    id="productDetails"
                    name="productDetails"
                    value={formData.productDetails}
                    onChange={handleFormChange}
                    className="input"
                    required
                    placeholder="What product do you need?"
                  />
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium mb-2">Estimated Quantity</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleFormChange}
                    className="input"
                    placeholder="e.g., 5000 units"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  className="input"
                  placeholder="Any specific requirements, target price, or questions..."
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="btn btn-cta w-full"
                disabled={formStatus === 'submitting' || formStatus === 'success'}
              >
                {formStatus === 'submitting' ? 'Submitting...' : formStatus === 'success' ? 'Submitted!' : 'Submit Inquiry'}
              </button>
              {formStatus === 'success' && (
                <p className="text-center text-[var(--accent)] mt-4">
                  Thank you! We'll be in touch within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;