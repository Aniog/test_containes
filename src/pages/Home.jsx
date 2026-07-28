import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Factory, 
  Shield, 
  Truck, 
  Search, 
  ClipboardCheck, 
  Package, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          data-strk-bg-id="hero-bg-001"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
      </div>
      
      <div className="container relative py-20 lg:py-32">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
            We help overseas businesses find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping from China.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-dark transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="container pb-8">
        <div className="flex flex-wrap gap-8 items-center justify-center lg:justify-start text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>500+ Verified Suppliers</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>10+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>98% Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify factory credentials, business licenses, production capacity, and certifications to ensure you work with legitimate suppliers.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Our QC team performs pre-shipment inspections, during-production checks, and final random inspections to ensure quality standards are met.',
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'We monitor production progress, address issues promptly, and ensure timelines are met with regular factory visits and updates.',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'We handle freight forwarding, customs clearance documentation, and logistics coordination from factory to your doorstep.',
    },
    {
      icon: Shield,
      title: 'Sample Management',
      description: 'We request, receive, evaluate, and ship product samples to help you make informed decisions before bulk orders.',
    },
    {
      icon: Package,
      title: 'Sourcing Consultation',
      description: 'We provide market research, price negotiation, and product development support to help you source the right products.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Our Sourcing Services
          </h2>
          <p className="text-text-secondary text-lg">
            Comprehensive sourcing solutions to help you navigate the complexities of manufacturing in China
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-surface p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what product you need, quantity, target price, and any specific requirements.',
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'We research and vet multiple factories, presenting you with verified options that match your criteria.',
    },
    {
      number: '03',
      title: 'Sample Evaluation',
      description: 'We request samples, evaluate quality, and help you select the best supplier for your needs.',
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'We monitor production, perform quality inspections, and ensure timely delivery of your order.',
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate shipping, handle documentation, and track your shipment until arrival.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-text-secondary text-lg">
            A streamlined 5-step process designed to minimize risk and maximize efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-background rounded-lg p-6 h-full border border-border">
                <span className="text-4xl font-bold text-primary/20 mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Learn More About Our Process
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  const products = [
    { name: 'Electronics', image: 'electronics manufacturing factory' },
    { name: 'Textiles & Apparel', image: 'textile factory manufacturing' },
    { name: 'Machinery', image: 'industrial machinery factory' },
    { name: 'Consumer Goods', image: 'consumer products warehouse' },
    { name: 'Packaging', image: 'packaging materials factory' },
    { name: 'Furniture', image: 'furniture manufacturing workshop' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Products We Source
          </h2>
          <p className="text-text-secondary text-lg">
            We have expertise sourcing a wide range of products from verified Chinese manufacturers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] bg-primary/5"
            >
              <img
                data-strk-img-id={`product-img-${index}`}
                data-strk-img={`[product-title-${index}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 id={`product-title-${index}`} className="text-xl font-semibold text-white">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View All Product Categories
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProblemsSection = () => {
  const problems = [
    {
      problem: 'Language barriers and communication issues',
      solution: 'Our bilingual team bridges the communication gap, ensuring clear understanding between you and suppliers.',
    },
    {
      problem: 'Unreliable or fraudulent suppliers',
      solution: 'We verify factory credentials, visit facilities, and check references before recommending any supplier.',
    },
    {
      problem: 'Quality control challenges',
      solution: 'Professional QC inspections at key production stages ensure your products meet specified standards.',
    },
    {
      problem: 'Complex logistics and shipping',
      solution: 'We handle freight forwarding, customs documentation, and coordinate end-to-end logistics.',
    },
    {
      problem: 'Intellectual property risks',
      solution: 'We help protect your designs and work with suppliers who respect confidentiality agreements.',
    },
    {
      problem: 'Time zone and cultural differences',
      solution: 'Based in China, we operate in your time zone and understand local business practices.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Problems We Solve
          </h2>
          <p className="text-text-secondary text-lg">
            Common challenges when sourcing from China and how we help overcome them
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-6 border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    {item.problem}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    <span className="font-medium text-primary">Solution: </span>
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const stats = [
    { value: '500+', label: 'Verified Suppliers' },
    { value: '10+', label: 'Years Experience' },
    { value: '2000+', label: 'Orders Completed' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  const trustItems = [
    'ISO 9001 Certified QC Process',
    'No Win, No Fee Policy',
    'Transparent Pricing',
    'Dedicated Account Manager',
    '24/7 Support Available',
    'Secure Payment Protection',
  ];

  return (
    <section className="py-16 lg:py-24 bg-primary text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Trust SSourcing China
          </h2>
          <p className="text-white/80 text-lg">
            We're committed to making your China sourcing experience smooth, safe, and successful
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudiesSection = () => {
  const cases = [
    {
      company: 'TechStart Inc.',
      industry: 'Electronics',
      challenge: 'Needed to find a reliable manufacturer for smart home devices',
      result: 'Sourced 50,000 units with 99.2% quality pass rate',
      image: 'electronics manufacturing',
    },
    {
      company: 'Fashion Forward',
      industry: 'Apparel',
      challenge: 'Required sustainable textile supplier with fair trade certification',
      result: 'Connected with certified factory, reduced costs by 25%',
      image: 'textile factory',
    },
    {
      company: 'BuildRight Co.',
      industry: 'Construction',
      challenge: 'Sourcing custom hardware components at competitive prices',
      result: 'Negotiated 30% cost reduction while maintaining quality',
      image: 'hardware manufacturing',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Success Stories
          </h2>
          <p className="text-text-secondary text-lg">
            See how we've helped businesses like yours succeed with China sourcing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-surface rounded-lg overflow-hidden border border-border hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-primary/5 relative">
                <img
                  data-strk-img-id={`case-img-${index}`}
                  data-strk-img={`[case-title-${index}] [case-industry-${index}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={caseStudy.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-secondary uppercase tracking-wide mb-2">
                  {caseStudy.industry}
                </div>
                <h3 id={`case-title-${index}`} className="text-lg font-semibold text-text-primary mb-2">
                  {caseStudy.company}
                </h3>
                <p className="text-text-secondary text-sm mb-3">
                  <span className="font-medium">Challenge: </span>
                  {caseStudy.challenge}
                </p>
                <p className="text-text-secondary text-sm">
                  <span className="font-medium text-success">Result: </span>
                  {caseStudy.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View All Case Studies
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct comprehensive supplier verification including business license checks, factory visits, production capacity assessment, quality management system review, and reference checks from existing clients.',
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure is transparent and varies based on the services you need. We offer competitive rates with no hidden costs. Contact us for a customized quote based on your specific requirements.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'The timeline varies depending on product complexity and availability. Typically, supplier identification takes 1-2 weeks, sample evaluation 2-4 weeks, and production 4-12 weeks depending on order size.',
    },
    {
      question: 'Do you only work with large orders?',
      answer: 'We work with businesses of all sizes, from startups to large enterprises. While we have minimum order requirements, we strive to find solutions that work for your business volume.',
    },
    {
      question: 'Can you help with product development?',
      answer: 'Yes, we can assist with product development including design optimization, material selection, prototyping, and manufacturing process improvements to ensure your product is market-ready.',
    },
    {
      question: 'How do you ensure quality control?',
      answer: 'We implement a multi-stage QC process including pre-production inspection, during-production checks, pre-shipment inspection, and loading supervision. All inspections include detailed reports with photos.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-surface">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-lg">
            Get answers to common questions about our sourcing services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg mb-4 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left bg-background hover:bg-background/80 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-text-primary">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-text-muted flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-text-muted flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-text-secondary text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productType: '',
    quantity: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Get Your Free Sourcing Quote
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Tell us about your sourcing needs and we'll connect you with verified suppliers within 48 hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-text-primary">Email</div>
                  <div className="text-text-secondary text-sm">info@ssourcingchina.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-text-primary">Phone</div>
                  <div className="text-text-secondary text-sm">+86 755 1234 5678</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-text-primary">Location</div>
                  <div className="text-text-secondary text-sm">Shenzhen, China</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-surface rounded-lg p-6 lg:p-8 border border-border shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Your Company Ltd"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="productType" className="block text-sm font-medium text-text-primary mb-1">
                    Product Type *
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    required
                    value={formData.productType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="">Select product type</option>
                    <option value="electronics">Electronics</option>
                    <option value="textiles">Textiles & Apparel</option>
                    <option value="machinery">Machinery</option>
                    <option value="consumer">Consumer Goods</option>
                    <option value="packaging">Packaging</option>
                    <option value="furniture">Furniture</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-text-primary mb-1">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="e.g., 10,000 units"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">
                  Message / Requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  placeholder="Describe your product requirements, target price, and any specific needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-secondary text-white font-semibold rounded-md hover:bg-secondary-dark transition-colors"
              >
                Submit Inquiry
              </button>

              <p className="text-xs text-text-muted text-center">
                By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <InquiryForm />
    </>
  );
};

export default Home;