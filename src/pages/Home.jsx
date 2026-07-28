import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Factory, Truck, Search, Eye, ClipboardCheck, Package, ChevronDown, ChevronUp, Star, MapPin, Mail, Phone } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-gradient-to-br from-[#0F172A] via-[#1E3A5F] to-[#2D5A8A] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#F97316] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1E3A5F]/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></span>
              <span className="text-sm text-[#94A3B8]">Based in Shenzhen, China</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            
            <p className="text-lg text-[#CBD5E1] mb-8 max-w-xl">
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping. Turn your China sourcing into a competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                See How It Works
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-[#F97316]">500+</div>
                <div className="text-sm text-[#94A3B8]">Verified Suppliers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F97316]">15+</div>
                <div className="text-sm text-[#94A3B8]">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#F97316]">50+</div>
                <div className="text-sm text-[#94A3B8]">Countries Served</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#F97316]/20 rounded-full blur-2xl"></div>
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8A]"
              style={{ minHeight: '400px' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/80">
                  <Factory className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm opacity-70">China Sourcing Operations</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#10B981]/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#10B981]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1E293B]">Factory Verified</div>
                  <div className="text-sm text-[#64748B]">100% Background Checked</div>
                </div>
              </div>
            </div>
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
      description: 'We conduct thorough background checks on factories, verify business licenses, assess production capacity, and ensure legitimacy before you commit.',
      color: 'bg-blue-500',
    },
    {
      icon: Eye,
      title: 'Factory Inspection',
      description: 'Our inspectors visit factories to verify existence, assess capabilities, check working conditions, and ensure they meet your standards.',
      color: 'bg-green-500',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Pre-shipment inspections, during-production checks, and final random sampling. We ensure your products meet specifications.',
      color: 'bg-orange-500',
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular updates on production progress, timeline management, and immediate alert on any issues or delays.',
      color: 'bg-purple-500',
    },
    {
      icon: Package,
      title: 'Sample Management',
      description: 'We request, receive, evaluate, and ship product samples. Fast turnaround with detailed quality assessments.',
      color: 'bg-red-500',
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'We coordinate freight forwarding, customs clearance, and documentation. Door-to-door delivery options available.',
      color: 'bg-teal-500',
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4">
            Our Sourcing Services
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Comprehensive sourcing solutions to help you source from China with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white border border-slate-200 rounded-xl hover:shadow-xl hover:border-[#1E3A5F]/20 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">
                {service.title}
              </h3>
              <p className="text-[#64748B] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#1E3A5F] font-semibold hover:text-[#F97316] transition-colors"
          >
            View All Services
            <ArrowRight size={20} />
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
      description: 'Tell us what you need - product specifications, quantity, target price, and any special requirements.',
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'We identify and vet potential factories, verify credentials, and present you with qualified options.',
    },
    {
      number: '03',
      title: 'Sample Evaluation',
      description: 'We request samples, conduct quality assessments, and provide detailed reports before you decide.',
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'We monitor production, conduct inspections at key stages, and ensure quality standards are met.',
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics, handle customs, and ensure safe delivery to your specified location.',
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]" id="process">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4">
            How Our Sourcing Works
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            A transparent, step-by-step process designed to minimize risk and maximize results
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1E3A5F] to-[#F97316] transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                  <div className="text-4xl font-bold text-[#1E3A5F]/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E293B] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#64748B]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A5F] text-white font-semibold rounded-lg hover:bg-[#2D5A8A] transition-colors"
          >
            Learn More About Our Process
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  const products = [
    { name: 'Electronics', icon: '📱', count: '120+ suppliers' },
    { name: 'Home & Garden', icon: '🏡', count: '85+ suppliers' },
    { name: 'Textiles & Apparel', icon: '👕', count: '95+ suppliers' },
    { name: 'Machinery', icon: '⚙️', count: '60+ suppliers' },
    { name: 'Packaging', icon: '📦', count: '45+ suppliers' },
    { name: 'Beauty & Personal Care', icon: '💄', count: '70+ suppliers' },
    { name: 'Sports & Outdoors', icon: '⚽', count: '55+ suppliers' },
    { name: 'Toys & Gifts', icon: '🎁', count: '40+ suppliers' },
  ];

  return (
    <section className="py-20 bg-white" id="products">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            We have established relationships with verified manufacturers across diverse industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group p-6 bg-[#F8FAFC] rounded-xl border border-slate-200 hover:border-[#1E3A5F]/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-lg font-semibold text-[#1E293B] mb-1 group-hover:text-[#1E3A5F] transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-[#64748B]">{product.count}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-[#1E3A5F] font-semibold hover:text-[#F97316] transition-colors"
          >
            View All Product Categories
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProblemsSection = () => {
  const problems = [
    {
      title: 'Language Barriers',
      description: 'Communication gaps lead to misunderstandings, mistakes, and lost business.',
      solution: 'Our bilingual team bridges the communication gap, ensuring clear, accurate exchanges.',
    },
    {
      title: 'Supplier Scams',
      description: 'Fake factories, payment fraud, and non-delivery are real risks in China sourcing.',
      solution: 'We verify every supplier\'s legitimacy through on-site inspections and background checks.',
    },
    {
      title: 'Quality Issues',
      description: 'Received products that don\'t match samples or have hidden defects.',
      solution: 'Our QC inspectors ensure products meet your specifications before shipment.',
    },
    {
      title: 'Shipping Complexities',
      description: 'Navigating customs, documentation, and logistics is time-consuming and risky.',
      solution: 'We handle end-to-end logistics, ensuring smooth customs clearance and delivery.',
    },
  ];

  return (
    <section className="py-20 bg-[#0F172A] text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
            Common challenges overseas buyers face when sourcing from China - and how we help
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="p-8 bg-[#1E293B] rounded-xl border border-slate-700"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#F97316]">
                {problem.title}
              </h3>
              <p className="text-[#94A3B8] mb-4">
                {problem.description}
              </p>
              <div className="pt-4 border-t border-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-white">Solution: </span>
                    <span className="text-[#94A3B8]">{problem.solution}</span>
                  </div>
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
  const trustPoints = [
    {
      icon: Shield,
      title: 'Verified Factories',
      description: 'Every supplier undergoes rigorous verification including business license checks, factory visits, and capacity assessment.',
    },
    {
      icon: Eye,
      title: 'Transparent Process',
      description: 'You receive regular updates, detailed inspection reports, and full visibility into every stage of your order.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'Our inspection protocols catch issues before shipment, saving you from costly returns and damaged reputation.',
    },
    {
      icon: MapPin,
      title: 'Local Presence',
      description: 'Based in Shenzhen, our team can visit factories on short notice and respond quickly to any concerns.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-6">
              Why Buyers Trust SSourcing China
            </h2>
            <p className="text-lg text-[#64748B] mb-8">
              We combine local expertise with international standards to deliver sourcing solutions you can rely on.
            </p>

            <div className="space-y-6">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1E293B] mb-1">{point.title}</h3>
                    <p className="text-sm text-[#64748B]">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-[#1E3A5F] mb-2">98%</div>
                  <div className="text-sm text-[#64748B]">Client Satisfaction</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-[#1E3A5F] mb-2">1000+</div>
                  <div className="text-sm text-[#64748B]">Orders Completed</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-[#1E3A5F] mb-2">0</div>
                  <div className="text-sm text-[#64748B]">Fraud Incidents</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-[#1E3A5F] mb-2">24h</div>
                  <div className="text-sm text-[#64748B]">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudiesSection = () => {
  const cases = [
    {
      company: 'TechStart Inc.',
      location: 'United States',
      product: 'Smart Home Devices',
      challenge: 'Needed to find a reliable manufacturer for 10,000 smart home controllers with strict quality requirements.',
      result: 'We identified 3 verified factories, conducted thorough QC inspections, and delivered on time with 0.2% defect rate.',
      category: 'Electronics',
    },
    {
      company: 'GreenHome EU',
      location: 'Germany',
      product: 'Solar Garden Lights',
      challenge: 'Previous supplier delivered substandard products. Needed a trusted partner for long-term partnership.',
      result: 'Verified 5 factories, negotiated favorable terms, and established a 2-year exclusive supply agreement.',
      category: 'Home & Garden',
    },
    {
      company: 'FitWear Australia',
      location: 'Australia',
      product: 'Sports Apparel',
      challenge: 'Sourcing high-quality athletic wear with sustainable materials at competitive prices.',
      result: 'Connected with a GOTS-certified factory, reduced costs by 23% while improving quality standards.',
      category: 'Textiles',
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]" id="case-studies">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Real results from real clients who trusted us with their China sourcing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-200"
            >
              <div className="h-3 bg-gradient-to-r from-[#1E3A5F] to-[#F97316]"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#1E3A5F]/10 text-[#1E3A5F] text-xs font-medium rounded-full">
                    {caseStudy.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#1E293B] mb-1">
                  {caseStudy.company}
                </h3>
                <p className="text-sm text-[#64748B] mb-4">{caseStudy.location}</p>
                
                <div className="mb-4">
                  <div className="text-xs text-[#94A3B8] uppercase tracking-wide mb-1">Product</div>
                  <div className="text-sm text-[#1E293B] font-medium">{caseStudy.product}</div>
                </div>
                
                <div className="mb-4">
                  <div className="text-xs text-[#94A3B8] uppercase tracking-wide mb-1">Challenge</div>
                  <p className="text-sm text-[#64748B]">{caseStudy.challenge}</p>
                </div>
                
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs text-[#94A3B8] uppercase tracking-wide mb-1">Result</div>
                  <p className="text-sm text-[#10B981] font-medium">{caseStudy.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A5F] text-white font-semibold rounded-lg hover:bg-[#2D5A8A] transition-colors"
          >
            View All Case Studies
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: 'How do you verify factories?',
      answer: 'We conduct on-site visits to verify the factory exists, assess production capacity, check business licenses, and evaluate quality management systems. We provide detailed reports with photos and videos.',
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure depends on the services you need. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific requirements.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timeline varies based on product complexity and availability. Typically, supplier identification takes 1-2 weeks, sample evaluation 2-4 weeks, and production 4-12 weeks depending on order size.',
    },
    {
      question: 'Do you only work with large orders?',
      answer: 'We work with businesses of all sizes, from startups to large enterprises. Minimum order quantities vary by product category and supplier.',
    },
    {
      question: 'Can you help with shipping and customs?',
      answer: 'Yes, we coordinate full logistics including freight forwarding, customs documentation, and door-to-door delivery. We handle all paperwork to ensure smooth customs clearance.',
    },
    {
      question: 'What if products arrive with quality issues?',
      answer: 'Our pre-shipment inspections significantly reduce this risk. If issues arise, we document them thoroughly and work with the factory to resolve problems before shipment or file claims as needed.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#64748B]">
            Quick answers to common questions about our sourcing services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-[#1E293B]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#64748B]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#64748B]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#64748B]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 bg-[#1E3A5F]" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Get Your Free Sourcing Quote
            </h2>
            <p className="text-lg text-[#94A3B8] mb-8">
              Tell us what you need, and we'll find the right suppliers for your business. Our team typically responds within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#F97316]" />
                </div>
                <div>
                  <div className="font-medium">Our Office</div>
                  <div className="text-[#94A3B8]">Shenzhen, China</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#F97316]" />
                </div>
                <div>
                  <div className="font-medium">Email Us</div>
                  <div className="text-[#94A3B8]">info@ssourcingchina.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#F97316]" />
                </div>
                <div>
                  <div className="font-medium">Call Us</div>
                  <div className="text-[#94A3B8]">+86 755 1234 5678</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    Product Interested In *
                  </label>
                  <input
                    type="text"
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none"
                    placeholder="e.g., Electronics, Textiles"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1E293B] mb-2">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none"
                    placeholder="e.g., 5000 units"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1E293B] mb-2">
                  Additional Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent outline-none resize-none"
                  placeholder="Tell us about your requirements, target price, timeline..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
              >
                Submit Inquiry
              </button>

              <p className="text-xs text-center text-[#64748B]">
                By submitting this form, you agree to our privacy policy. We typically respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;