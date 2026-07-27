import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Shield, ClipboardCheck, Truck, Package, CheckCircle, 
  ArrowRight, Users, Building2, FileCheck, Clock, Globe, Award,
  ChevronRight, MessageSquare, Phone, Mail, Star
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const stats = [
    { value: '500+', label: 'Suppliers Verified' },
    { value: '12+', label: 'Years Experience' },
    { value: '1500+', label: 'Orders Managed' },
    { value: '50+', label: 'Countries Served' },
  ];

  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We identify and vet reliable manufacturers that match your product specifications and quality requirements.',
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site audits verify factory existence, production capacity, certifications, and business legitimacy.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Professional QC inspectors conduct thorough checks at production, pre-shipment, and loading stages.',
    },
    {
      icon: Package,
      title: 'Production Follow-up',
      description: 'Regular updates and photos ensure your order stays on track and any issues are addressed promptly.',
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'We coordinate freight forwarding, customs clearance, and documentation for smooth international delivery.',
    },
    {
      icon: FileCheck,
      title: 'Sample Management',
      description: 'Request, review, and approve samples before mass production to ensure product-market fit.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Submit Your Request',
      description: 'Tell us what products you need, quantities, and quality standards.',
    },
    {
      step: '02',
      title: 'We Find Suppliers',
      description: 'Our team identifies and verifies suitable manufacturers in China.',
    },
    {
      step: '03',
      title: 'Sample Approval',
      description: 'You review and approve samples before production begins.',
    },
    {
      step: '04',
      title: 'Production & QC',
      description: 'We monitor production, conduct inspections, and manage timelines.',
    },
    {
      step: '05',
      title: 'Shipping & Delivery',
      description: 'Coordinate logistics and ensure smooth customs clearance.',
    },
  ];

  const products = [
    { name: 'Electronics & Components', image: 'electronics-circuit-board-manufacturing' },
    { name: 'Home & Garden', image: 'furniture-woodworking-factory' },
    { name: 'Textiles & Apparel', image: 'textile-fabric-production' },
    { name: 'Machinery & Parts', image: 'industrial-machinery-manufacturing' },
    { name: 'Packaging Materials', image: 'packaging-boxes-factory' },
    { name: 'Promotional Products', image: 'promotional-products-wholesale' },
  ];

  const problems = [
    {
      title: 'Language Barriers',
      description: 'Communication gaps lead to misunderstandings, delays, and quality issues.',
      solution: 'Our bilingual team bridges the communication gap and ensures clear instructions.',
    },
    {
      title: 'Quality Uncertainty',
      description: 'Without proper inspection, you may receive substandard or wrong products.',
      solution: 'Professional QC inspections at every production stage ensure quality compliance.',
    },
    {
      title: 'Supplier Fraud',
      description: 'Unverified suppliers may not deliver, use inferior materials, or disappear.',
      solution: 'Thorough factory audits verify legitimacy, capacity, and track records.',
    },
    {
      title: 'Logistics Complexities',
      description: 'International shipping involves complex paperwork, customs, and coordination.',
      solution: 'We handle all logistics, documentation, and customs procedures.',
    },
  ];

  const caseStudies = [
    {
      client: 'European Retail Chain',
      industry: 'Home Decor',
      challenge: 'Needed to source 50,000 units of decorative items with strict quality standards and tight deadlines.',
      result: 'Successfully delivered on time with 99.2% quality pass rate, saving 35% compared to previous supplier.',
      tag: 'Home Decor',
    },
    {
      client: 'American Tech Startup',
      industry: 'Consumer Electronics',
      challenge: 'First-time sourcing from China with limited budget and need for rapid prototyping.',
      result: 'Found OEM partner, completed 3 prototype rounds in 6 weeks, now producing 10,000 units monthly.',
      tag: 'Electronics',
    },
    {
      client: 'Australian Import Company',
      industry: 'Outdoor Equipment',
      challenge: 'Previous supplier delivered defective goods; needed reliable replacement with compliance certification.',
      result: 'Verified new supplier, achieved 100% compliance with Australian standards, 40,000 units delivered.',
      tag: 'Outdoor Gear',
    },
  ];

  const faqs = [
    {
      question: 'What are your service fees?',
      answer: 'Our fees are based on the services you need. Typically, we charge a percentage of the order value or a flat fee per service. Factory verification starts at $200, quality inspections from $150 per visit. Contact us for a custom quote.',
    },
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct on-site factory visits to verify business registration, production capacity, equipment, workforce, certifications, and sample quality. We also check references and past performance.',
    },
    {
      question: 'Can you handle small orders?',
      answer: 'Yes, we work with orders of all sizes. While unit costs may be higher for smaller orders, we help you find MOQ-friendly suppliers and can consolidate orders to optimize pricing.',
    },
    {
      question: 'What quality standards do you inspect against?',
      answer: 'We inspect against AQL (Acceptable Quality Level) standards, your specifications, international standards (ISO, CE, FCC), and any specific requirements you provide.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typical timelines: supplier identification 1-2 weeks, sample production 2-4 weeks, mass production 3-8 weeks depending on complexity, shipping 2-6 weeks by sea or 5-10 days by air.',
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            data-strk-bg-id="hero-bg-001"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="container-custom py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
                <Shield className="w-4 h-4" />
                Trusted by 500+ Global Buyers
              </div>
              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="hero-subtitle" className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed">
                We help overseas businesses find reliable suppliers, verify factories, inspect quality, and coordinate shipping. Your trusted partner for hassle-free China sourcing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/how-it-works" className="btn-secondary border-white text-white hover:bg-white/10">
                  See How It Works
                </Link>
              </div>
              <div className="flex flex-wrap gap-8 mt-12">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className="text-sm">No upfront costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className="text-sm">Results in 48 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className="text-sm">Pay only for what you need</span>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img
                  alt="Factory verification"
                  data-strk-img-id="hero-factory-001"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl mb-6"
                />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Factory Verified</p>
                    <p className="text-sm text-primary-100">On-site audit completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Our Sourcing Services</h2>
            <p className="text-body">
              From supplier identification to final delivery, we handle every step of your China sourcing journey with professionalism and attention to detail.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card p-8">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="heading-3 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">How We Work</h2>
            <p className="text-body">
              Our streamlined process ensures transparency, quality, and efficiency at every stage of your sourcing project.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2" />
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="bg-white rounded-xl p-6 text-center relative z-10 shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-primary">
              Learn More About Our Process
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Products We Source</h2>
            <p className="text-slate-300 text-lg">
              We have extensive experience sourcing a wide range of products from verified Chinese manufacturers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div 
                key={product.name} 
                className="group relative rounded-xl overflow-hidden cursor-pointer"
              >
                <div 
                  className="aspect-video"
                  data-strk-bg-id={`product-${product.name.replace(/\s+/g, '-').toLowerCase()}-001`}
                  data-strk-bg={`${product.name} manufacturing`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2 text-primary-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Products</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-slate-100 transition-all">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-4">Problems We Solve</h2>
              <p className="text-body mb-8">
                Sourcing from China comes with challenges. We help you overcome them with our expertise and local presence.
              </p>
              <div className="space-y-6">
                {problems.map((problem) => (
                  <div key={problem.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-lg">✕</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{problem.title}</h4>
                      <p className="text-sm text-slate-600 mb-2">{problem.description}</p>
                      <div className="flex items-center gap-2 text-accent-600 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        <span>{problem.solution}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-50 rounded-2xl p-8">
                <img
                  alt="QC inspection"
                  data-strk-img-id="qc-inspection-001"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl"
                />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-600">99.2%</div>
                    <div className="text-sm text-slate-600">Quality Pass Rate</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-600">48hrs</div>
                    <div className="text-sm text-slate-600">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Why Choose SSourcing China</h2>
            <p className="text-body">
              We combine local expertise with professional standards to deliver exceptional results for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, title: 'Local Presence', desc: 'Our team is based in China with deep market knowledge and supplier relationships.' },
              { icon: Users, title: 'Expert Team', desc: 'Bilingual professionals with decades of combined sourcing and QC experience.' },
              { icon: Award, title: 'Quality Focused', desc: 'Rigorous inspection protocols ensure your products meet specifications.' },
              { icon: Globe, title: 'Global Reach', desc: 'Serving buyers from 50+ countries across all major industries.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Success Stories</h2>
            <p className="text-body">
              See how we've helped businesses overcome sourcing challenges and achieve their goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.client} className="card overflow-hidden">
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full mb-4">
                    {study.tag}
                  </span>
                  <h3 className="font-semibold text-lg mb-2">{study.client}</h3>
                  <p className="text-sm text-slate-500 mb-4">{study.industry}</p>
                  <div className="border-t border-slate-100 pt-4 mb-4">
                    <p className="text-sm text-slate-600 mb-2"><strong>Challenge:</strong> {study.challenge}</p>
                    <p className="text-sm text-slate-600"><strong>Result:</strong> {study.result}</p>
                  </div>
                </div>
                <div className="bg-slate-50 px-8 py-4">
                  <Link to="/case-studies" className="text-primary-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/case-studies" className="btn-primary">
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-body">
              Get answers to common questions about our China sourcing services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-primary-500" />
                  {faq.question}
                </h3>
                <p className="text-slate-600 pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Sourcing from China?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote for your sourcing needs. No obligations, just expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a href="mailto:info@ssourcingchina.com" className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-all border border-primary-400">
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
