import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Factory, 
  Shield, 
  Truck, 
  Search, 
  ClipboardCheck, 
  Package, 
  MessageSquare,
  ArrowRight,
  Star,
  ChevronDown,
  ChevronUp,
  Users,
  Globe,
  Award,
  Clock
} from 'lucide-react';
import { useState } from 'react';

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify factory credentials, business licenses, production capacity, and certifications to ensure legitimacy.',
      link: '/services#verification'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Professional QC inspections at pre-production, during production, and pre-shipment stages.',
      link: '/services#inspection'
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular factory visits to monitor progress, address issues, and ensure timeline adherence.',
      link: '/services#production'
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end shipping coordination from factory to your door, including customs clearance.',
      link: '/services#shipping'
    },
    {
      icon: Package,
      title: 'Product Sourcing',
      description: 'Find the right suppliers based on your specifications, budget, and quality requirements.',
      link: '/services#sourcing'
    },
    {
      icon: MessageSquare,
      title: 'Communication & Negotiation',
      description: 'Professional communication in English and Chinese, ensuring clear understanding between all parties.',
      link: '/services#communication'
    },
  ];

  const problems = [
    {
      title: 'Language Barriers',
      description: 'Communication gaps with Chinese suppliers leading to misunderstandings and errors.',
      solution: 'Our bilingual team bridges the communication gap, ensuring clear and accurate exchanges.'
    },
    {
      title: 'Quality Uncertainty',
      description: 'No guarantee that products will meet your quality standards or match samples.',
      solution: 'Rigorous quality inspections at multiple stages ensure consistent quality delivery.'
    },
    {
      title: 'Supplier Scams',
      description: 'Risk of working with fraudulent or unreliable suppliers.',
      solution: 'Thorough factory verification and background checks protect your interests.'
    },
    {
      title: 'Shipping Complexities',
      description: 'Navigating international shipping, customs, and documentation is challenging.',
      solution: 'We handle all logistics, paperwork, and customs clearance for seamless delivery.'
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Submit Your Request',
      description: 'Tell us what you need - product specifications, quantity, target price, and timeline.'
    },
    {
      step: 2,
      title: 'Supplier Matching',
      description: 'We identify and verify suitable factories, then present you with options.'
    },
    {
      step: 3,
      title: 'Sample Evaluation',
      description: 'Request samples, evaluate quality, and negotiate terms with supplier assistance.'
    },
    {
      step: 4,
      title: 'Production Monitoring',
      description: 'Regular factory visits and progress updates ensure on-time, quality production.'
    },
    {
      step: 5,
      title: 'Quality Inspection',
      description: 'Professional QC team performs final inspection before shipment.'
    },
    {
      step: 6,
      title: 'Shipping & Delivery',
      description: 'We coordinate shipping, customs, and delivery to your specified location.'
    },
  ];

  const products = [
    { name: 'Electronics', image: 'electronics manufacturing', count: '2,500+ suppliers' },
    { name: 'Textiles & Apparel', image: 'textile factory', count: '3,200+ suppliers' },
    { name: 'Machinery', image: 'industrial machinery', count: '1,800+ suppliers' },
    { name: 'Furniture', image: 'furniture manufacturing', count: '1,200+ suppliers' },
    { name: 'Packaging', image: 'packaging materials', count: '900+ suppliers' },
    { name: 'Home & Garden', image: 'home products', count: '1,500+ suppliers' },
  ];

  const caseStudies = [
    {
      company: 'TechStart Inc.',
      industry: 'Electronics',
      challenge: 'Needed to source smart home devices from China with strict quality requirements.',
      result: 'Sourced 50,000 units with 99.2% quality pass rate, saving 35% on costs.',
      image: 'electronics manufacturing'
    },
    {
      company: 'Fashion Forward',
      industry: 'Apparel',
      challenge: 'Required reliable textile supplier for sustainable fashion line.',
      result: 'Found certified organic cotton supplier, delivered on time with full compliance.',
      image: 'textile factory'
    },
    {
      company: 'BuildRight Co.',
      industry: 'Construction',
      challenge: 'Sourcing construction materials at competitive prices with consistent quality.',
      result: 'Established long-term partnership, reduced material costs by 28%.',
      image: 'industrial machinery'
    },
  ];

  const testimonials = [
    {
      quote: 'SSourcing China transformed our supply chain. Their verification process saved us from a potential scam, and their QC team ensures every shipment meets our standards.',
      author: 'Michael Chen',
      position: 'CEO',
      company: 'TechStart Inc.'
    },
    {
      quote: 'Working with SSourcing China gave us confidence to expand our product line. Their professionalism and attention to detail are exceptional.',
      author: 'Sarah Williams',
      position: 'Procurement Director',
      company: 'Global Goods Ltd.'
    },
    {
      quote: 'The quality inspection service is worth every penny. They caught issues before shipment that would have cost us significantly.',
      author: 'David Park',
      position: 'Operations Manager',
      company: 'BuildRight Co.'
    },
  ];

  const faqs = [
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct comprehensive supplier verification including business license checks, factory visits, production capacity assessment, financial stability review, and reference checks from existing clients.'
    },
    {
      question: 'What are your service fees?',
      answer: 'Our fees vary based on service scope and project complexity. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific requirements.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timeline varies based on product complexity and supplier availability. Typically, initial supplier shortlist takes 5-7 business days, sample evaluation 2-4 weeks, and production 4-12 weeks depending on order size.'
    },
    {
      question: 'Do you only work with large orders?',
      answer: 'We work with businesses of all sizes, from startups to large enterprises. Our minimum order requirements depend on the supplier and product type.'
    },
    {
      question: 'Can you help with customs and shipping?',
      answer: 'Yes, we provide end-to-end logistics support including shipping coordination, customs documentation, freight forwarding, and delivery to your specified location.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have experience across multiple industries including electronics, textiles, machinery, furniture, packaging, and more. Contact us to discuss your specific product category.'
    },
  ];

  const stats = [
    { value: '10+', label: 'Years Experience', icon: Clock },
    { value: '500+', label: 'Clients Served', icon: Users },
    { value: '10,000+', label: 'Suppliers Verified', icon: Shield },
    { value: '50+', label: 'Countries Served', icon: Globe },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 opacity-10"
          data-strk-bg-id="hero-bg-001"
          data-strk-bg="China factory warehouse manufacturing"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        ></div>
        <div className="container relative py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-secondary)] text-white px-8 py-4 rounded font-semibold text-lg hover:bg-[#9b2c2c] transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded font-semibold text-lg hover:bg-white/20 transition-colors border border-white/30"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--color-background)"/>
          </svg>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <section className="py-12 bg-white border-b border-[var(--color-border)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                  <div className="text-sm text-[var(--color-text-muted)]">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-[var(--color-background)]" id="services">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Comprehensive sourcing solutions to help you source from China with confidence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="card p-8 group hover:border-[var(--color-primary)] border-2 border-transparent"
              >
                <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
                  <service.icon className="w-7 h-7 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-[var(--color-primary)] font-medium">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Problems We Solve</h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Common challenges when sourcing from China, and how we help you overcome them
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--color-secondary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--color-secondary)] font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                    <p className="text-[var(--color-text-muted)] mb-4">{problem.description}</p>
                    <div className="flex items-start gap-2 p-4 bg-[var(--color-success)]/10 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                      <p className="text-[var(--color-text-secondary)] text-sm">
                        <span className="font-semibold text-[var(--color-success)]">Solution: </span>
                        {problem.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section bg-[var(--color-background)]" id="process">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Sourcing Process</h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              A proven 6-step process to ensure successful sourcing from China
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="card p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-[var(--color-text-secondary)]">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section bg-white" id="products">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Products We Source</h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              We have established relationships with verified suppliers across various industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                to={`/products#${product.name.toLowerCase().replace(/[^a-z]/g, '')}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div 
                  className="aspect-[4/3] bg-gray-200"
                  data-strk-bg-id={`product-bg-${index}`}
                  data-strk-bg={`${product.image} manufacturing factory`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="600"
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{product.name}</h3>
                  <p className="text-gray-300 text-sm">{product.count}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
            >
              View All Product Categories <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section bg-[var(--color-background)]" id="case-studies">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              See how we've helped businesses succeed in sourcing from China
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="card overflow-hidden">
                <div 
                  className="aspect-video bg-gray-200"
                  data-strk-bg-id={`case-bg-${index}`}
                  data-strk-bg={`${study.image} quality inspection`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                ></div>
                <div className="p-6">
                  <div className="text-sm text-[var(--color-secondary)] font-medium mb-2">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{study.company}</h3>
                  <p className="text-[var(--color-text-muted)] text-sm mb-4">
                    <span className="font-medium text-[var(--color-text-secondary)]">Challenge: </span>
                    {study.challenge}
                  </p>
                  <div className="p-4 bg-[var(--color-success)]/10 rounded-lg">
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      <span className="font-semibold text-[var(--color-success)]">Result: </span>
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-3 rounded font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Trusted by businesses worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                  ))}
                </div>
                <p className="text-[var(--color-text-secondary)] mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                    <span className="text-[var(--color-primary)] font-semibold">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-[var(--color-text-muted)]">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-[var(--color-background)]" id="faq">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Common questions about our sourcing services
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="card mb-4 overflow-hidden">
                <button
                  className="w-full p-6 text-left flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[var(--color-text-secondary)]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Sourcing from China?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get a free sourcing quote tailored to your specific requirements. Our team will respond within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-secondary)] text-white px-10 py-4 rounded font-semibold text-lg hover:bg-[#9b2c2c] transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;