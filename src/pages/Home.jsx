import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Building2, ClipboardCheck, Truck, Package, Users, 
  Shield, CheckCircle, Clock, DollarSign, Globe, ArrowRight,
  ChevronRight, Star, Award, FileCheck, Phone, MessageSquare
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#1E3A5F] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          data-strk-bg-id="hero-pattern-bg-abc123"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-[#C9A227] rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Professional China Sourcing Since 2010</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for <span className="text-[#C9A227]">Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Find verified suppliers, ensure product quality, and streamline your China supply chain with our professional sourcing services. From search to shipping, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A227] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#B8922A] transition-colors shadow-lg"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                See How It Works
              </Link>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-white/60">Clients Served</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-white/60">Countries</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <img
                alt="Factory inspection"
                className="rounded-lg shadow-2xl"
                data-strk-img-id="hero-factory-img-xyz789"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%232C5282' width='400' height='300'/%3E%3Crect fill='%23ffffff' x='20' y='20' width='160' height='120' rx='4' opacity='0.1'/%3E%3Crect fill='%23ffffff' x='200' y='40' width='180' height='100' rx='4' opacity='0.1'/%3E%3Crect fill='%23C9A227' x='40' y='160' width='320' height='120' rx='4' opacity='0.2'/%3E%3C/svg%3E"
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -left-4 top-1/4 bg-white rounded-lg shadow-xl p-4 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#059669]/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#059669]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1E293B]">Factory Verified</div>
                  <div className="text-xs text-[#64748B]">100% Audited</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-1/4 bg-white rounded-lg shadow-xl p-4 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#C9A227]/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#C9A227]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1E293B]">Quality Assured</div>
                  <div className="text-xs text-[#64748B]">AQL Standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100L60 90C120 80 240 60 360 55C480 50 600 60 720 65C840 70 960 70 1080 65C1200 60 1320 50 1380 45L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" fill="#F8FAFC"/>
        </svg>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Search & Verification',
      description: 'We identify and verify reliable manufacturers matching your product specifications, budget, and quality requirements.',
      features: ['Background checks', 'Factory audits', 'Capability assessment']
    },
    {
      icon: Building2,
      title: 'Factory Verification',
      description: 'On-site inspections to verify factory existence, production capacity, certifications, and compliance standards.',
      features: ['Business license verification', 'Production line inspection', 'Certification review']
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Rigorous inspection services at every stage from pre-production samples to final shipment checks.',
      features: ['AQL sampling', 'During production checks', 'Pre-shipment inspection']
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and delivery tracking.',
      features: ['Multi-modal shipping', 'Customs documentation', 'Door-to-door delivery']
    },
    {
      icon: Package,
      title: 'Sample Management',
      description: 'We handle sample requests, quality assessment, and facilitate communication between you and suppliers.',
      features: ['Sample procurement', 'Quality evaluation', 'Modification requests']
    },
    {
      icon: MessageSquare,
      title: 'Production Follow-up',
      description: 'Regular updates on production progress, timeline management, and issue resolution throughout manufacturing.',
      features: ['Weekly progress reports', 'Timeline tracking', 'Issue escalation']
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-4">
            Comprehensive China Sourcing Solutions
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            From initial supplier research to final delivery, we provide end-to-end services to ensure your China sourcing is smooth, transparent, and risk-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-[#E2E8F0] group"
            >
              <div className="w-14 h-14 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1E3A5F] transition-colors">
                <service.icon className="w-7 h-7 text-[#1E3A5F] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">{service.title}</h3>
              <p className="text-[#64748B] mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#64748B]">
                    <CheckCircle className="w-4 h-4 text-[#059669]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#1E3A5F] font-semibold hover:text-[#2C5282] transition-colors"
          >
            View All Services
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProblemsSection = () => {
  const problems = [
    { title: 'Language Barriers', description: 'Miscommunication leads to quality issues and missed deadlines.' },
    { title: 'Quality Risks', description: 'Products arrive not matching specifications or acceptable quality.' },
    { title: 'Supplier Fraud', description: 'Paying deposits to non-existent or unreliable companies.' },
    { title: 'Shipping Complexities', description: 'Navigating customs, documentation, and logistics challenges.' },
  ];

  const solutions = [
    { title: 'Native Speakers', description: 'Professional communication in English and Mandarin.' },
    { title: 'Quality Control', description: 'Multiple inspection stages ensure consistent quality.' },
    { title: 'Verification Services', description: 'Thorough vetting before you commit any funds.' },
    { title: 'Logistics Expertise', description: 'End-to-end shipping coordination and tracking.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Why Work With Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-4">
            We Solve Your China Sourcing Challenges
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Sourcing from China comes with unique challenges. We help you navigate them with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Problems */}
          <div>
            <h3 className="text-lg font-semibold text-[#DC2626] mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-[#DC2626]/10 rounded-full flex items-center justify-center">
                <span className="text-[#DC2626]">✕</span>
              </div>
              Common Challenges
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-4 p-4 bg-red-50 rounded-lg border border-red-100">
                  <div className="w-6 h-6 bg-[#DC2626]/10 rounded flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#DC2626] text-sm font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E293B]">{problem.title}</h4>
                    <p className="text-sm text-[#64748B]">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-[#059669] mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-[#059669]/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-[#059669]" />
              </div>
              Our Solutions
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="w-6 h-6 bg-[#059669]/10 rounded flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#059669]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E293B]">{solution.title}</h4>
                    <p className="text-sm text-[#64748B]">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Inquiry',
      description: 'Tell us about your product requirements, quantities, and target prices through our simple inquiry form.',
      icon: FileCheck,
    },
    {
      number: '02',
      title: 'Supplier Matching',
      description: 'We identify 3-5 verified factories that match your criteria and provide detailed profiles.',
      icon: Search,
    },
    {
      number: '03',
      title: 'Sample Evaluation',
      description: 'We coordinate samples, conduct quality assessments, and facilitate your approval process.',
      icon: Package,
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'Regular factory visits, quality inspections, and progress updates throughout manufacturing.',
      icon: ClipboardCheck,
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We handle all logistics, documentation, and coordinate delivery to your doorstep.',
      icon: Truck,
    },
  ];

  return (
    <section className="py-20 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-4">
            Simple 5-Step Sourcing Process
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            A streamlined workflow designed to minimize risk and maximize efficiency in your China sourcing operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E2E8F0] h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-[#C9A227]">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1E293B] mb-2">{step.title}</h3>
                <p className="text-sm text-[#64748B]">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ChevronRight className="w-6 h-6 text-[#C9A227]" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#2C5282] transition-colors"
          >
            Learn More About Our Process
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  const products = [
    { name: 'Electronics & Components', examples: 'PCBs, consumer electronics, smart devices' },
    { name: 'Home & Garden', examples: 'Furniture, decor, outdoor equipment' },
    { name: 'Textiles & Apparel', examples: 'Garments, fabrics, accessories' },
    { name: 'Industrial Parts', examples: 'Machinery components, hardware, tools' },
    { name: 'Packaging & Printing', examples: 'Boxes, labels, promotional materials' },
    { name: 'Sports & Outdoor', examples: 'Fitness equipment, camping gear' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Products</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-4">
              Products We Source
            </h2>
            <p className="text-[#64748B] mb-8">
              We have extensive experience sourcing a wide range of products from verified Chinese manufacturers. Our network spans multiple industries and product categories.
            </p>
            <div className="space-y-4">
              {products.map((product, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 bg-[#C9A227]/10 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-[#C9A227]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E293B]">{product.name}</h4>
                    <p className="text-sm text-[#64748B]">{product.examples}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-[#1E3A5F] font-semibold hover:text-[#2C5282] transition-colors"
              >
                View All Product Categories
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#F1F5F9] rounded-2xl p-8">
              <img
                alt="Product sourcing categories"
                className="w-full rounded-lg"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 400'%3E%3Crect fill='%231E3A5F' width='500' height='400' rx='8'/%3E%3Crect fill='%232C5282' x='30' y='30' width='200' height='150' rx='8' opacity='0.5'/%3E%3Crect fill='%232C5282' x='250' y='30' width='220' height='70' rx='8' opacity='0.5'/%3E%3Crect fill='%232C5282' x='250' y='110' width='220' height='70' rx='8' opacity='0.5'/%3E%3Crect fill='%23C9A227' x='30' y='200' width='140' height='170' rx='8' opacity='0.5'/%3E%3Crect fill='%232C5282' x='190' y='200' width='280' height='80' rx='8' opacity='0.5'/%3E%3Crect fill='%232C5282' x='190' y='290' width='130' height='80' rx='8' opacity='0.5'/%3E%3Crect fill='%232C5282' x='340' y='290' width='130' height='80' rx='8' opacity='0.5'/%3E%3C/svg%3E"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const trustPoints = [
    { icon: Award, stat: '500+', label: 'Companies Served' },
    { icon: Globe, stat: '50+', label: 'Countries Reached' },
    { icon: Shield, stat: '98%', label: 'Client Satisfaction' },
    { icon: Clock, stat: '15+', label: 'Years Experience' },
  ];

  const testimonials = [
    {
      quote: "SSourcing China transformed our supply chain. Their factory verification saved us from a potential $50K loss, and the quality inspections have been consistently thorough.",
      author: "Michael Thompson",
      role: "Procurement Director",
      company: "EuroTech Imports",
      country: "Germany"
    },
    {
      quote: "The communication and transparency throughout the process was exceptional. We always knew exactly where our order stood.",
      author: "Sarah Chen",
      role: "CEO",
      company: "Pacific Retail Co.",
      country: "Australia"
    },
  ];

  return (
    <section className="py-20 bg-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-8 h-8 text-[#C9A227]" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{point.stat}</div>
              <div className="text-white/60 text-sm">{point.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#C9A227] text-[#C9A227]" />
                ))}
              </div>
              <p className="text-white/90 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-white/60">{testimonial.role}, {testimonial.company} · {testimonial.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#C9A227] transition-colors"
          >
            Read More Case Studies
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: 'How do I get started with SSourcing China?',
      answer: 'Simply fill out our inquiry form with your product requirements. We will review your request and get back to you within 24 hours with initial recommendations and a quote for our services.'
    },
    {
      question: 'What are your service fees?',
      answer: 'Our fees vary based on the services you need and order complexity. We offer transparent pricing with no hidden costs. Contact us for a personalized quote based on your specific requirements.'
    },
    {
      question: 'How do you verify factories?',
      answer: 'We conduct on-site audits that include business license verification, factory existence confirmation, production capacity assessment, quality control systems review, and certification verification.'
    },
    {
      question: 'Can you handle shipping to my country?',
      answer: 'Yes, we coordinate all aspects of shipping including freight forwarding, customs documentation, and can arrange door-to-door delivery to most countries worldwide.'
    },
    {
      question: 'What if quality issues arise?',
      answer: 'Our quality control process is designed to prevent issues. If problems do occur, we work with the factory to resolve them, and our documentation supports claims when necessary.'
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-[#E2E8F0] overflow-hidden">
              <button
                className="w-full text-left p-6 flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-[#1E293B]">{faq.question}</span>
                <ChevronRight className={`w-5 h-5 text-[#64748B] shrink-0 transition-transform ${openIndex === index ? 'rotate-90' : ''}`} />
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

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1E3A5F] to-[#2C5282]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Streamline Your China Sourcing?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Get started with a free consultation. Tell us about your product requirements and let us show you how we can help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#C9A227] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#B8922A] transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:+862012345678"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20"
          >
            <Phone className="w-5 h-5" />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProblemsSection />
      <ProcessSection />
      <ProductsSection />
      <TrustSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home;
