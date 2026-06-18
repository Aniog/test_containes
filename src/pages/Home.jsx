import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Shield, ClipboardCheck, Truck, Package, FileText,
  ArrowRight, CheckCircle, ChevronDown, ChevronUp, Star,
  Users, Factory, TrendingUp, Award
} from 'lucide-react';

// FAQ Data
const faqItems = [
  {
    question: "How long does the sourcing process take?",
    answer: "The timeline varies based on product complexity and availability. Typically, initial supplier matching takes 3-7 days. The full process from inquiry to delivery ranges from 4-12 weeks depending on customization needs and shipping requirements."
  },
  {
    question: "What are your service fees?",
    answer: "Our fee structure is transparent and based on the services you need. We offer flexible pricing including commission-based models and fixed-fee packages. Contact us for a detailed quote tailored to your specific requirements."
  },
  {
    question: "Do you only work with large orders?",
    answer: "No, we work with businesses of all sizes. While we have minimum order requirements for some services, we're happy to discuss options for smaller orders. Our goal is to help you scale your business regardless of order volume."
  },
  {
    question: "How do you ensure quality?",
    answer: "We implement a multi-stage quality control process including pre-production inspections, during-production checks, pre-shipment inspections, and container loading supervision. Our QC team follows AQL standards and provides detailed reports with photos and videos."
  },
  {
    question: "Can you visit factories on our behalf?",
    answer: "Yes, factory visits are one of our core services. Our team can conduct on-site audits, verify production capacity, assess quality management systems, and provide you with detailed reports and recommendations."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We work with various payment methods including T/T (Telegraphic Transfer), L/C (Letter of Credit), and PayPal for smaller amounts. We can also help facilitate secure payments through escrow services for added security."
  },
  {
    question: "How do you handle shipping and logistics?",
    answer: "We coordinate end-to-end logistics including freight forwarding, customs clearance, and final delivery. We work with reliable shipping partners to ensure competitive rates and timely delivery. Full tracking information is provided throughout the process."
  },
  {
    question: "What if I'm not satisfied with the products?",
    answer: "We have a rigorous quality control process to minimize issues. However, if problems arise, we act as your advocate with the supplier. We document issues, negotiate solutions, and ensure appropriate remedies whether it's replacement, repair, or compensation."
  }
];

// Services Data
const services = [
  {
    icon: Search,
    title: "Supplier Finding",
    description: "We identify and vet reliable manufacturers matching your specific requirements, quality standards, and budget.",
    link: "/services"
  },
  {
    icon: Shield,
    title: "Factory Verification",
    description: "Comprehensive on-site audits to verify factory credentials, production capacity, and compliance certifications.",
    link: "/services"
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description: "Professional QC inspections at every production stage using AQL standards with detailed photo and video reports.",
    link: "/services"
  },
  {
    icon: TrendingUp,
    title: "Production Follow-up",
    description: "Regular progress updates and on-site visits during production to ensure timelines and quality standards are met.",
    link: "/services"
  },
  {
    icon: Package,
    title: "Sample Management",
    description: "Handling sample requests, testing coordination, and managing the approval process for pre-production samples.",
    link: "/services"
  },
  {
    icon: Truck,
    title: "Shipping Coordination",
    description: "End-to-end logistics including freight forwarding, customs clearance, and final delivery to your warehouse.",
    link: "/services"
  }
];

// Products Data
const products = [
  { name: "Electronics & Gadgets", image: "electronics", count: "2,500+ suppliers" },
  { name: "Textiles & Apparel", image: "textiles", count: "3,200+ suppliers" },
  { name: "Furniture & Home Goods", image: "furniture", count: "1,800+ suppliers" },
  { name: "Machinery & Parts", image: "machinery", count: "1,200+ suppliers" },
  { name: "Packaging & Printing", image: "packaging", count: "900+ suppliers" },
  { name: "Toys & Gifts", image: "toys", count: "1,500+ suppliers" },
  { name: "Sports & Outdoor", image: "sports", count: "1,100+ suppliers" },
  { name: "Beauty & Personal Care", image: "beauty", count: "1,400+ suppliers" },
  { name: "Industrial Supplies", image: "industrial", count: "800+ suppliers" }
];

// Case Studies Data
const caseStudies = [
  {
    company: "US Retailer",
    industry: "Electronics",
    description: "Sourced consumer electronics with 15% cost savings",
    metric: "$500K orders",
    result: "15% cost reduction"
  },
  {
    company: "European Brand",
    industry: "Furniture",
    description: "Launched new furniture line with zero defects",
    metric: "6-month project",
    result: "Zero defects"
  },
  {
    company: "Australian Startup",
    industry: "Apparel",
    description: "Sourced 10,000 units with on-time delivery",
    metric: "10,000 units",
    result: "On-time delivery"
  }
];

// Testimonials Data
const testimonials = [
  {
    quote: "SSourcing China transformed our supply chain. Their factory verification saved us from a potential disaster, and their QC team ensures every shipment meets our standards.",
    name: "Michael Chen",
    title: "Procurement Director",
    company: "TechMart USA",
    country: "USA"
  },
  {
    quote: "Working with SSourcing China gave us confidence to expand our product line. Their professional approach and attention to detail are exceptional.",
    name: "Sarah Williams",
    title: "CEO",
    company: "HomeStyle Europe",
    country: "UK"
  },
  {
    quote: "The quality inspection service is worth every penny. They've caught issues before shipment that would have cost us dearly. True partners in our success.",
    name: "David Park",
    title: "Operations Manager",
    company: "OutdoorGear Australia",
    country: "Australia"
  }
];

// Problems/Solutions Data
const problems = [
  {
    problem: "Language barriers",
    solution: "Native Mandarin speakers with fluent English communication"
  },
  {
    problem: "Quality concerns",
    solution: "Professional QC inspections at every production stage"
  },
  {
    problem: "Trust issues",
    solution: "Verified factory audits and comprehensive background checks"
  },
  {
    problem: "Logistics complexity",
    solution: "End-to-end shipping coordination and customs handling"
  }
];

// Process Steps
const processSteps = [
  { number: 1, title: "Submit Inquiry", description: "Tell us what you need" },
  { number: 2, title: "Supplier Matching", description: "We find and vet options" },
  { number: 3, title: "Negotiation", description: "Price, terms, samples" },
  { number: 4, title: "Production", description: "Regular quality checks" },
  { number: 5, title: "Delivery", description: "Shipping & customs" }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
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
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container relative py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-red-50 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Trusted by 500+ Global Buyers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                We help you find reliable suppliers, verify factories, inspect quality, 
                and coordinate shipping — so you can source with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2 text-lg">
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/how-it-works" className="btn-secondary inline-flex items-center justify-center gap-2 text-lg">
                  Learn How It Works
                </Link>
              </div>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>No obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Response in 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>100% confidential</span>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-accent/20 rounded-2xl"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                  <div className="aspect-video bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <Factory className="w-24 h-24 mx-auto mb-4 opacity-80" />
                      <p className="text-xl font-semibold">Factory Inspection</p>
                      <p className="text-white/80">Quality Assurance</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-primary">500+</p>
                      <p className="text-sm text-gray-600">Suppliers Verified</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-primary">2000+</p>
                      <p className="text-sm text-gray-600">Inspections Done</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-primary">98%</p>
                      <p className="text-sm text-gray-600">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-primary py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-red-400" />
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <p className="text-gray-300">Suppliers Verified</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ClipboardCheck className="w-6 h-6 text-red-400" />
                <span className="text-3xl font-bold text-white">2000+</span>
              </div>
              <p className="text-gray-300">Inspections Completed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-6 h-6 text-red-400" />
                <span className="text-3xl font-bold text-white">15+</span>
              </div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-6 h-6 text-red-400" />
                <span className="text-3xl font-bold text-white">98%</span>
              </div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-background" id="services">
        <div className="container">
          <h2 className="section-title">Our Sourcing Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions to streamline your China sourcing operations
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Why Work With Us</h2>
          <p className="section-subtitle">
            We solve the common challenges of sourcing from China
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    <span className="text-accent">Problem:</span> {item.problem}
                  </h4>
                  <p className="text-gray-600">
                    <span className="text-primary font-medium">Solution:</span> {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section bg-primary text-white">
        <div className="container">
          <h2 className="section-title text-white">How Our Sourcing Works</h2>
          <p className="section-subtitle text-gray-300">
            A simple, transparent 5-step process to get your products from China
          </p>
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden lg:flex items-center justify-between relative">
              <div className="absolute top-8 left-0 right-0 h-1 bg-white/20"></div>
              <div className="absolute top-8 left-0 h-1 bg-accent w-1/5 transition-all duration-500"></div>
              {processSteps.map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-secondary border-white text-white hover:bg-white hover:text-primary inline-flex items-center gap-2">
              View Full Process <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section bg-background" id="products">
        <div className="container">
          <h2 className="section-title">Products We Source</h2>
          <p className="section-subtitle">
            We have verified suppliers across a wide range of industries
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="card group cursor-pointer overflow-hidden p-0">
                <div className="h-40 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Package className="w-16 h-16 text-white/50" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.count}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-white" id="case-studies">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Real results from our partnership with global buyers
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="card">
                <div className="h-48 bg-gradient-to-br from-primary/80 to-primary rounded-xl mb-5 flex items-center justify-center">
                  <FileText className="w-16 h-16 text-white/50" />
                </div>
                <div className="text-sm text-accent font-medium mb-2">{study.industry}</div>
                <h3 className="text-xl font-semibold mb-2">{study.company}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-2xl font-bold text-primary">{study.metric}</p>
                    <p className="text-sm text-gray-500">Project Size</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">{study.result}</p>
                    <p className="text-sm text-gray-500">Outcome</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-secondary inline-flex items-center gap-2">
              View All Case Studies <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Trusted by businesses worldwide
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white" id="faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Get answers to common questions about our sourcing services
          </p>
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-lg">{item.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="section bg-gradient-to-br from-primary to-primary-light" id="contact">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Sourcing?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Get a free consultation and quote within 24 hours
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-gray-200">No obligation quote</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-gray-200">Expert guidance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-gray-200">100% confidential</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Interest</label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      <option value="electronics">Electronics & Gadgets</option>
                      <option value="textiles">Textiles & Apparel</option>
                      <option value="furniture">Furniture & Home Goods</option>
                      <option value="machinery">Machinery & Parts</option>
                      <option value="packaging">Packaging & Printing</option>
                      <option value="toys">Toys & Gifts</option>
                      <option value="sports">Sports & Outdoor</option>
                      <option value="beauty">Beauty & Personal Care</option>
                      <option value="industrial">Industrial Supplies</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity</label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select quantity</option>
                      <option value="small">Under 1,000 units</option>
                      <option value="medium">1,000 - 10,000 units</option>
                      <option value="large">10,000 - 50,000 units</option>
                      <option value="xlarge">Over 50,000 units</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your sourcing needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  Get Free Quote
                </button>
                <p className="text-center text-sm text-gray-500">
                  By submitting, you agree to our Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to find your perfect supplier?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses who trust SSourcing China for their sourcing needs
          </p>
          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Get Started Today <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}