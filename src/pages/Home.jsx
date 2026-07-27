import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Shield, 
  Factory, 
  Truck, 
  Search, 
  ClipboardCheck, 
  Package, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
  Users,
  Globe,
  FileText,
  MessageCircle
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
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify factory credentials, business licenses, production capacity, and financial stability to ensure you work with legitimate suppliers.'
    },
    {
      icon: Factory,
      title: 'Factory Audit',
      description: 'Comprehensive on-site audits including facility inspection, production line assessment, quality management systems, and worker conditions.'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-shipment inspections at key production stages. We check product specifications, packaging, labeling, and run functional tests.'
    },
    {
      icon: Package,
      title: 'Production Follow-up',
      description: 'Regular production updates with photos and videos. We monitor progress, address issues early, and ensure on-time delivery.'
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'We coordinate freight forwarding, customs clearance, and documentation. Full container (FCL) and less than container (LCL) options.'
    },
    {
      icon: Shield,
      title: 'Sample Management',
      description: 'We request, evaluate, and ship product samples. We can also arrange lab testing for compliance and certification requirements.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what you need: product specifications, quantity, target price, and any special requirements.'
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'We research and vet manufacturers in our network. You receive a shortlist of 3-5 qualified suppliers with profiles.'
    },
    {
      number: '03',
      title: 'We Verify & Audit',
      description: 'We conduct factory visits, verify credentials, and assess production capabilities. You get a detailed audit report.'
    },
    {
      number: '04',
      title: 'Quality Control',
      description: 'During production, we perform inline inspections. Before shipment, we conduct final inspection and coordinate shipping.'
    }
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
    'Toys & Gifts',
    'Building Materials'
  ];

  const problems = [
    {
      title: 'Language Barriers',
      description: 'Communication breakdowns lead to mistakes, delays, and missed requirements. We bridge the gap with professional native English speakers.'
    },
    {
      title: 'Supplier Scams',
      description: 'Fake factories, copied certifications, and payment fraud are real risks. We verify every supplier before you commit.'
    },
    {
      title: 'Quality Issues',
      description: 'Products arrive damaged, defective, or not matching specifications. Our QC inspections catch problems before shipment.'
    },
    {
      title: 'Shipping Complexities',
      description: 'International logistics, customs documentation, and freight coordination are challenging. We handle the paperwork and logistics.'
    }
  ];

  const trustPoints = [
    { icon: Clock, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Globe, value: '30+', label: 'Countries' },
    { icon: CheckCircle, value: '98%', label: 'Client Satisfaction' }
  ];

  const caseStudies = [
    {
      company: 'European Retail Brand',
      industry: 'Home Goods',
      challenge: 'Needed to source 50,000 ceramic mugs with custom branding within 3 months.',
      solution: 'We verified 8 factories, conducted 2 factory audits, performed pre-shipment inspection, and coordinated sea freight.',
      result: 'Delivered on time with 99.5% quality pass rate. Saved 23% compared to their previous supplier.'
    },
    {
      company: 'US Tech Startup',
      industry: 'Electronics',
      challenge: 'First-time sourcing from China for a new smart home device. No local team or language capability.',
      solution: 'End-to-end service: supplier matching, factory audit, IP protection guidance, production monitoring, and shipping.',
      result: 'Successfully launched product in 4 months. Zero quality issues in first 10,000 units.'
    },
    {
      company: 'Australian Distributor',
      industry: 'Outdoor Gear',
      challenge: 'Sourcing登山 equipment from multiple factories with consistent quality and coordinated shipping.',
      solution: 'We managed 4 suppliers, performed inline inspections at each, consolidated shipments, and handled all customs.',
      result: '40% cost reduction through consolidation. 100% on-time delivery over 2 years.'
    }
  ];

  const faqs = [
    {
      question: 'How do you charge for your services?',
      answer: 'We offer flexible pricing models: commission-based (percentage of order value), fixed fee per project, or retainer for ongoing sourcing. We provide transparent quotes before starting any project. No hidden fees.'
    },
    {
      question: 'Can I visit factories myself?',
      answer: 'Absolutely. We can arrange factory visits and accompany you as interpreters and technical guides. We can also arrange virtual factory tours if travel is not possible.'
    },
    {
      question: 'How do you ensure product quality?',
      answer: 'We follow AQL (Acceptable Quality Level) standards for inspections. You choose the inspection level (normal, reduced, or tightened). We provide detailed inspection reports with photos and videos.'
    },
    {
      question: 'What if products arrive damaged or defective?',
      answer: 'Our inspection reports document pre-shipment condition. If issues arise, we assist with supplier negotiation, claims processing, and corrective action plans for future orders.'
    },
    {
      question: 'Do you handle shipping and customs?',
      answer: 'Yes, we coordinate full logistics including freight forwarding, customs clearance, documentation, and inland transportation. We work with reliable shipping partners globally.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typical timeline: 1-2 weeks for supplier shortlist, 1-2 weeks for initial vetting, 2-4 weeks for samples, and 4-12 weeks for production depending on order size and complexity.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-24 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                We help overseas businesses find verified suppliers, ensure product quality, and streamline shipping from China. No more guesswork, no more risks.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn bg-[var(--secondary)] text-white hover:bg-[var(--secondary-hover)]">
                  Get a Free Sourcing Quote
                </Link>
                <Link to="/how-it-works" className="btn bg-white/10 text-white hover:bg-white/20 border border-white/30">
                  How It Works
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-10 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[var(--secondary)]" />
                  <span>No upfront fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[var(--secondary)]" />
                  <span>Verified suppliers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[var(--secondary)]" />
                  <span>Quality guaranteed</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-white/10 rounded-lg"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[var(--secondary)] rounded-full flex items-center justify-center">
                        <Factory className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Factory Verification</h4>
                        <p className="text-gray-300 text-sm">On-site audits & credential checks</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[var(--secondary)] rounded-full flex items-center justify-center">
                        <ClipboardCheck className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Quality Control</h4>
                        <p className="text-gray-300 text-sm">Pre-shipment inspections</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[var(--secondary)] rounded-full flex items-center justify-center">
                        <Truck className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">End-to-End Logistics</h4>
                        <p className="text-gray-300 text-sm">Shipping & customs handled</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-[var(--bg-secondary)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <point.icon className="text-[var(--primary)]" size={28} />
                </div>
                <div className="text-3xl font-bold text-[var(--primary)] mb-1">{point.value}</div>
                <div className="text-sm text-[var(--text-secondary)]">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Sourcing Services</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Comprehensive sourcing solutions to help you source from China with confidence. We handle the details so you can focus on your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group">
                <div className="w-14 h-14 bg-[var(--primary)] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[var(--secondary)] transition-colors">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-[var(--text-secondary)]">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-secondary inline-flex items-center gap-2">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">How It Works</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Our proven process ensures you get quality products from verified suppliers, delivered on time and on budget.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-8 h-full">
                  <div className="text-5xl font-bold text-[var(--secondary)] mb-4 opacity-30">{step.number}</div>
                  <h3 className="mb-3">{step.title}</h3>
                  <p className="text-[var(--text-secondary)]">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="text-[var(--border)]" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn btn-primary inline-flex items-center gap-2">
              Learn More About Our Process <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Products We Source</h2>
            <p className="max-w-2xl mx-auto text-lg">
              We have experience sourcing a wide range of products from China. If you don't see your product category, just ask.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <div key={index} className="bg-[var(--bg-secondary)] rounded-lg p-4 text-center hover:bg-[var(--primary)] hover:text-white transition-colors cursor-pointer">
                <p className="font-medium">{product}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="btn btn-secondary inline-flex items-center gap-2">
              View All Categories <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Problems We Solve</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Sourcing from China comes with challenges. We help you navigate them so you can focus on growing your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="card flex gap-6">
                <div className="w-16 h-16 bg-[var(--secondary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-[var(--secondary)]" size={32} />
                </div>
                <div>
                  <h3 className="mb-2">{problem.title}</h3>
                  <p className="text-[var(--text-secondary)]">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Case Studies</h2>
            <p className="max-w-2xl mx-auto text-lg">
              See how we've helped businesses like yours succeed with China sourcing.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="card">
                <div className="text-sm text-[var(--secondary)] font-medium mb-2">{study.industry}</div>
                <h3 className="mb-4">{study.company}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Challenge</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Solution</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{study.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-[var(--border)]">
                    <h4 className="text-sm font-semibold text-[var(--accent)] mb-1">Result</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/case-studies" className="btn btn-secondary inline-flex items-center gap-2">
              View All Case Studies <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Get answers to common questions about our China sourcing services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[var(--border)] rounded-lg mb-4 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[var(--bg-secondary)] transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-[var(--text-secondary)]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Get a Free Sourcing Quote</h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Tell us about your sourcing needs and we'll get back to you within 24 hours with a tailored solution.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[var(--primary)]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Quick Response</h4>
                    <p className="text-sm text-[var(--text-secondary)]">We respond to all inquiries within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="text-[var(--primary)]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">No Obligation</h4>
                    <p className="text-sm text-[var(--text-secondary)]">Free consultation and quote with no commitment</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-[var(--primary)]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Confidential</h4>
                    <p className="text-sm text-[var(--text-secondary)]">Your information is secure and never shared</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 border border-[var(--border)]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input"
                      required
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input"
                      required
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="label">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Your Company Ltd"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="label">Estimated Quantity</label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="e.g., 10,000 units"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="product" className="label">Product You're Sourcing *</label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    className="input"
                    required
                    placeholder="e.g., Ceramic Mugs, Electronics"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="label">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="textarea"
                    placeholder="Tell us about your requirements, target price, timeline, etc."
                    rows={4}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Submit Inquiry
                </button>
                <p className="text-xs text-center text-[var(--text-light)]">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container text-center">
          <h2 className="text-white mb-4">Ready to Source from China?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses who trust us with their China sourcing. Get started today with a free consultation.
          </p>
          <Link to="/contact" className="btn bg-[var(--secondary)] text-white hover:bg-[var(--secondary-hover)] inline-flex items-center gap-2">
            Get Your Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;