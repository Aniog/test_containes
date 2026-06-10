import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, CheckCircle, Factory, ClipboardCheck, 
  Truck, Package, ArrowRight, ChevronDown, ChevronUp,
  Users, Award, Clock, Shield
} from 'lucide-react';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    message: ''
  });

  const services = [
    {
      icon: Search,
      title: 'Supplier Identification & Verification',
      description: 'We find and vet reliable suppliers matching your specific requirements, ensuring legitimacy and capability.'
    },
    {
      icon: Factory,
      title: 'Factory Audits & Compliance Checks',
      description: 'Comprehensive on-site audits to verify production capacity, quality systems, and regulatory compliance.'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control Inspections',
      description: 'Professional QC inspections at pre-production, during production, and pre-shipment stages.'
    },
    {
      icon: Clock,
      title: 'Production Follow-up & Monitoring',
      description: 'Regular production updates and on-site monitoring to ensure timeline adherence and quality standards.'
    },
    {
      icon: Truck,
      title: 'Logistics & Shipping Coordination',
      description: 'End-to-end shipping coordination from factory to your designated warehouse or port.'
    },
    {
      icon: Package,
      title: 'Sample Management & Product Development',
      description: 'Sample procurement, testing, and feedback coordination for product development and validation.'
    }
  ];

  const processSteps = [
    { number: '01', title: 'Submit Request', description: 'Share your product requirements, specifications, and target pricing.' },
    { number: '02', title: 'Supplier Matching', description: 'We identify and present 3-5 verified suppliers that match your criteria.' },
    { number: '03', title: 'Negotiation', description: 'We negotiate pricing, terms, and conditions on your behalf.' },
    { number: '04', title: 'Production Monitoring', description: 'We oversee the manufacturing process with regular updates.' },
    { number: '05', title: 'Delivery', description: 'We coordinate shipping and ensure smooth delivery to your location.' }
  ];

  const products = [
    'Electronics & Gadgets',
    'Home & Garden',
    'Apparel & Textiles',
    'Industrial Equipment',
    'Packaging & Printing',
    'Beauty & Personal Care',
    'Toys & Gifts',
    'Automotive Parts'
  ];

  const problems = [
    { title: 'Language Barriers', solution: 'Native Mandarin speakers with fluent English communication' },
    { title: 'Quality Issues', solution: 'Professional QC inspections at every production stage' },
    { title: 'Supplier Scams', solution: 'Factory verification and thorough due diligence' },
    { title: 'Complex Logistics', solution: 'End-to-end shipping coordination' }
  ];

  const trustPoints = [
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Suppliers Verified' },
    { icon: Shield, value: '2000+', label: 'Inspections Conducted' },
    { icon: Clock, value: '98%', label: 'Client Satisfaction' }
  ];

  const caseStudies = [
    { category: 'European Retailer', result: '40% Cost Reduction', description: 'Sourced home textiles from verified factories, reducing costs while maintaining quality.' },
    { category: 'US E-commerce Brand', result: '6-Week Delivery', description: 'Electronics sourcing with expedited production and shipping timeline.' },
    { category: 'Australian Distributor', result: '100% Compliance', description: 'Automotive parts sourcing with full regulatory compliance verification.' }
  ];

  const faqs = [
    { question: 'How does your sourcing service work?', answer: 'Simply share your product requirements with us. We will identify verified suppliers, negotiate terms, oversee production, and coordinate shipping - handling every step of the process.' },
    { question: 'What are your fees?', answer: 'We charge transparent flat fees based on the services you need. There are no hidden costs or success fees. We provide detailed quotes before starting any work.' },
    { question: 'How do you verify factories?', answer: 'We conduct comprehensive on-site audits including verification of business licenses, production capacity, quality management systems, and customer references.' },
    { question: 'Can you handle shipping?', answer: 'Yes, we provide complete logistics coordination including freight forwarding, customs clearance documentation, and delivery to your specified location.' },
    { question: 'What industries do you serve?', answer: 'We serve a wide range of industries including electronics, home goods, textiles, automotive parts, packaging, beauty products, and more.' },
    { question: 'How long does sourcing take?', answer: 'Timeline varies based on product complexity and availability. Typically, supplier identification takes 1-2 weeks, with full sourcing cycles ranging from 4-12 weeks.' }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-h1 font-bold text-white mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              We help you find verified suppliers, ensure product quality, and streamline shipping from China. Your trusted partner for seamless international procurement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-button transition-all duration-300 hover:shadow-button hover:-translate-y-1"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-button transition-all duration-300 border border-white/30"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap gap-8">
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">500+ Suppliers Verified</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">50+ Countries Served</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">98% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-section bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Our Sourcing Services</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Comprehensive sourcing solutions to help you source products from China with confidence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">{service.title}</h3>
                <p className="text-text-secondary mb-4">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-accent font-medium hover:text-accent-hover transition-colors">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Why Choose SSourcing China?</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We solve the biggest challenges in China sourcing so you can focus on growing your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{problem.title}</h3>
                <p className="text-text-secondary text-sm">{problem.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process Section */}
      <section className="py-section bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">How Our Sourcing Process Works</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A proven 5-step process to ensure successful sourcing from China
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-card shadow-card p-6 relative z-10">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{step.title}</h3>
                    <p className="text-text-secondary text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-accent font-medium hover:text-accent-hover transition-colors"
            >
              View Detailed Process <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Products We Source</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We have expertise across a wide range of product categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                to="/products"
                className="bg-surface-alt hover:bg-primary hover:text-white p-6 rounded-card text-center transition-all duration-300 group"
              >
                <span className="font-medium text-text-primary group-hover:text-white">{product}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="py-section bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Global Buyers Trust Us</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-accent mb-2">{point.value}</div>
                <div className="text-gray-300">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-section bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Success Stories</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Real results from our clients around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-card shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <Package className="w-16 h-16 text-white/50" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-accent font-medium mb-2">{study.category}</div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">{study.result}</h3>
                  <p className="text-text-secondary text-sm mb-4">{study.description}</p>
                  <Link to="/case-studies" className="inline-flex items-center text-accent font-medium hover:text-accent-hover transition-colors">
                    Read more <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-button hover:bg-primary-light transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-text-secondary">
              Common questions about our sourcing services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-card overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-surface hover:bg-surface-alt transition-colors"
                >
                  <span className="font-medium text-text-primary">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-text-muted flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-surface-alt">
                    <p className="text-text-secondary">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Find Your Perfect Supplier?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote within 24 hours
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-accent font-semibold rounded-button hover:bg-gray-100 transition-colors"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-section bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Request a Free Quote</h2>
            <p className="text-lg text-text-secondary">
              Tell us about your sourcing needs and we'll get back to you within 24 hours
            </p>
          </div>
          
          <form onSubmit={handleFormSubmit} className="bg-white rounded-card shadow-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-border rounded-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-border rounded-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  placeholder="+1 234 567 8900"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="product" className="block text-sm font-medium text-text-primary mb-2">
                  Product Interest
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-border rounded-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                >
                  <option value="">Select a product category</option>
                  <option value="electronics">Electronics & Gadgets</option>
                  <option value="home">Home & Garden</option>
                  <option value="apparel">Apparel & Textiles</option>
                  <option value="industrial">Industrial Equipment</option>
                  <option value="packaging">Packaging & Printing</option>
                  <option value="beauty">Beauty & Personal Care</option>
                  <option value="toys">Toys & Gifts</option>
                  <option value="automotive">Automotive Parts</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                  placeholder="Tell us about your product requirements, quantity, target price, etc."
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-6 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-button transition-all duration-300 hover:shadow-button"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;