import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Shield, ClipboardCheck, Factory, Ship,
  CheckCircle, ArrowRight, Star, Users, Award,
  Clock, Globe, TrendingUp, AlertTriangle, XCircle,
  ChevronDown, ChevronUp
} from 'lucide-react';

// Hero Section
function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>
      <div className="section-container section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm text-blue-200 mb-6">
            <Globe className="w-4 h-4" />
            <span>Trusted by 500+ Global Buyers</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            China Sourcing Agent<br />
            <span className="text-blue-400">for Global Buyers</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/how-it-works" className="btn-secondary text-lg px-8 py-4 bg-transparent border-white/30 text-white hover:bg-white/10">
              See How It Works
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">10+</div>
              <div className="text-sm text-slate-400 mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">2,000+</div>
              <div className="text-sm text-slate-400 mt-1">Verified Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">50+</div>
              <div className="text-sm text-slate-400 mt-1">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">98%</div>
              <div className="text-sm text-slate-400 mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: 'Product Sourcing',
      description: 'We find the right manufacturers for your products, comparing prices, capabilities, and reliability across our verified supplier network.'
    },
    {
      icon: Shield,
      title: 'Supplier Verification',
      description: 'Factory audits, business license checks, and on-site visits to confirm your supplier is legitimate and capable.'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.'
    },
    {
      icon: Factory,
      title: 'Production Monitoring',
      description: 'Regular factory visits and progress reports to keep your production on schedule and address issues early.'
    },
    {
      icon: Ship,
      title: 'Shipping Coordination',
      description: 'From consolidation to customs documentation, we handle logistics so your goods arrive safely and on time.'
    },
    {
      icon: TrendingUp,
      title: 'Price Negotiation',
      description: 'Local market knowledge and language skills help you get fair pricing and favorable payment terms.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">Complete Sourcing Services</h2>
          <p className="text-slate-600 text-lg">From finding suppliers to delivering goods, we handle every step of your China sourcing process.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="btn-primary">
            View All Services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what products you need, your specifications, and target price range.'
    },
    {
      number: '02',
      title: 'Supplier Matching',
      description: 'We search our network and identify the best manufacturers for your needs.'
    },
    {
      number: '03',
      title: 'Verification & Sampling',
      description: 'We verify suppliers, arrange samples, and help you evaluate quality.'
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'We monitor production and conduct quality inspections at key stages.'
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics, handle documentation, and track your shipment.'
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">How It Works</h2>
          <p className="text-slate-600 text-lg">A straightforward process designed to make sourcing from China simple and reliable.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-blue-200" />
              )}
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/how-it-works" className="btn-primary">
            Learn More About Our Process
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Products We Source Section
function ProductsSection() {
  const categories = [
    { name: 'Electronics & Components', icon: '📱' },
    { name: 'Home & Garden Products', icon: '🏠' },
    { name: 'Apparel & Textiles', icon: '👕' },
    { name: 'Industrial Equipment', icon: '⚙️' },
    { name: 'Packaging & Printing', icon: '📦' },
    { name: 'Toys & Gifts', icon: '🎁' },
    { name: 'Automotive Parts', icon: '🚗' },
    { name: 'Health & Beauty', icon: '💄' },
    { name: 'Sports & Outdoor', icon: '⚽' },
    { name: 'Furniture & Lighting', icon: '🪑' },
    { name: 'Hardware & Tools', icon: '🔧' },
    { name: 'Custom Manufacturing', icon: '🏭' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Product Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">Products We Source</h2>
          <p className="text-slate-600 text-lg">We source a wide range of products from verified Chinese manufacturers across multiple industries.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <div key={index} className="card text-center hover:border-blue-300 cursor-pointer group">
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h3 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">{cat.name}</h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="btn-primary">
            View All Product Categories
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Problems We Solve Section
function ProblemsSection() {
  const problems = [
    {
      problem: 'Unreliable Suppliers',
      solution: 'We verify every supplier through factory audits, license checks, and reference verification before recommending them.',
      icon: AlertTriangle
    },
    {
      problem: 'Quality Issues',
      solution: 'Our QC team conducts inspections at multiple production stages to catch problems before shipment.',
      icon: XCircle
    },
    {
      problem: 'Communication Barriers',
      solution: 'Bilingual team handles all communication, ensuring your requirements are clearly understood.',
      icon: Globe
    },
    {
      problem: 'Hidden Costs',
      solution: 'Transparent pricing with no hidden fees. We provide detailed cost breakdowns upfront.',
      icon: TrendingUp
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">Problems We Solve</h2>
          <p className="text-slate-600 text-lg">Sourcing from China can be challenging. We remove the risks and complexities so you can focus on your business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.problem}</h3>
                  <p className="text-slate-600">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Trust Points Section
function TrustSection() {
  const trustPoints = [
    { icon: Shield, title: 'Verified Suppliers', description: 'Every supplier in our network has been audited and verified.' },
    { icon: Award, title: 'ISO Certified', description: 'Our quality management follows international standards.' },
    { icon: Users, title: '500+ Happy Clients', description: 'Trusted by businesses across 50+ countries.' },
    { icon: Clock, title: '10+ Years Experience', description: 'Deep knowledge of Chinese manufacturing and trade.' },
    { icon: CheckCircle, title: 'Quality Guarantee', description: 'We stand behind every inspection and verification.' },
    { icon: Star, title: 'Transparent Pricing', description: 'Clear fees with no hidden costs or surprises.' },
  ];

  return (
    <section className="section-padding bg-blue-600 text-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-blue-200 font-semibold text-sm uppercase tracking-wide">Why Trust Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Built on Trust & Transparency</h2>
          <p className="text-blue-100 text-lg">We have built our reputation on reliability, honesty, and consistent results for our clients.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
              <p className="text-blue-100 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Case Studies Preview Section
function CaseStudiesSection() {
  const caseStudies = [
    {
      title: 'Electronics Importer Saves 30% on Component Costs',
      category: 'Electronics',
      description: 'A US-based electronics company needed reliable PCB manufacturers. We identified 3 qualified suppliers, conducted factory audits, and negotiated pricing that reduced their costs by 30%.',
      result: '30% cost reduction, 2-week faster delivery'
    },
    {
      title: 'Fashion Brand Avoids $50K Quality Disaster',
      category: 'Apparel',
      description: 'During a pre-shipment inspection, our team discovered significant quality issues in a clothing order. We worked with the factory to correct problems before goods shipped.',
      result: '$50K in potential losses avoided'
    },
    {
      title: 'Startup Launches Private Label Product Line',
      category: 'Consumer Goods',
      description: 'A European startup wanted to launch a private label home goods line. We handled everything from supplier selection to quality control and shipping coordination.',
      result: 'Successful launch, 15% profit margin'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">Case Studies</h2>
          <p className="text-slate-600 text-lg">See how we have helped businesses like yours source successfully from China.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="card">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full mb-3">{study.category}</span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{study.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{study.description}</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <span className="text-green-700 text-sm font-medium">Result: {study.result}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="btn-primary">
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState(0);

  const faqs = [
    {
      question: 'How do you find and verify suppliers?',
      answer: 'We use a multi-step verification process that includes business license checks, factory audits, reference verification, and on-site visits. We only recommend suppliers who meet our quality and reliability standards.'
    },
    {
      question: 'What are your fees?',
      answer: 'Our fees depend on the scope of services required. We offer transparent pricing with no hidden costs. Contact us for a free quote tailored to your specific sourcing needs.'
    },
    {
      question: 'Do you handle shipping and customs?',
      answer: 'Yes, we coordinate the entire shipping process including consolidation, documentation, customs clearance, and delivery to your destination. We work with reliable freight forwarders to ensure smooth logistics.'
    },
    {
      question: 'What is the minimum order quantity?',
      answer: 'MOQs vary by product and supplier. We can help you find suppliers with flexible MOQs, especially for new businesses. We will advise you on realistic expectations based on your product requirements.'
    },
    {
      question: 'How do you ensure product quality?',
      answer: 'We conduct inspections at multiple stages: pre-production (checking materials and samples), during production (monitoring manufacturing processes), and pre-shipment (final quality check before goods leave the factory).'
    },
    {
      question: 'Can you help with custom manufacturing?',
      answer: 'Yes, we work with factories that offer OEM and ODM services. We can help you develop custom products from concept to production, including prototyping, tooling, and mass production.'
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-lg">Common questions about our sourcing services and process.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card p-0 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-lg font-medium text-slate-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600 border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Inquiry Form Section
function InquiryFormSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">Get a Free Sourcing Quote</h2>
            <p className="text-slate-600 text-lg">Tell us about your sourcing needs and we will get back to you within 24 hours.</p>
          </div>

          {submitted ? (
            <div className="card text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
              <p className="text-slate-600">We have received your inquiry and will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="input-field"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input-field"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="label">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="input-field"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="product" className="label">Product to Source *</label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    required
                    className="input-field"
                    placeholder="e.g., Electronics, Apparel, etc."
                    value={formData.product}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="quantity" className="label">Estimated Quantity</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="input-field"
                    placeholder="e.g., 1000 units"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="services" className="label">Services Needed</label>
                  <select
                    id="services"
                    name="services"
                    className="input-field"
                    value={formData.services}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="sourcing">Product Sourcing</option>
                    <option value="verification">Supplier Verification</option>
                    <option value="inspection">Quality Inspection</option>
                    <option value="production">Production Monitoring</option>
                    <option value="shipping">Shipping Coordination</option>
                    <option value="full">Full Sourcing Service</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="label">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="input-field"
                  placeholder="Tell us more about your requirements, specifications, or any questions..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-6">
                <button type="submit" className="btn-accent w-full justify-center text-lg">
                  Submit Inquiry
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
              <p className="text-sm text-slate-500 text-center mt-4">
                We respect your privacy. Your information will not be shared with third parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// CTA Banner
function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Source from China?</h2>
          <p className="text-blue-100 text-lg mb-8">Get a free consultation and quote. No commitment, no hidden fees.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="mailto:info@ssourcingchina.com" className="btn-secondary text-lg px-8 py-4 bg-transparent border-white/30 text-white hover:bg-white/10">
              <Mail className="w-5 h-5 mr-2" />
              Email Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Home Page Component
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquiryFormSection />
      <CTABanner />
    </div>
  );
}
