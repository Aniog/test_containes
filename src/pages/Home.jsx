import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Truck, Factory, Search, Package, Clock, Star, MessageCircle } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    description: 'We verify factory credentials, business licenses, production capacity, and certifications to ensure legitimacy.',
  },
  {
    icon: Shield,
    title: 'Quality Inspection',
    description: 'Professional QC inspections at any stage of production. We check product quality, specifications, and packaging.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular factory visits and progress updates. We ensure timelines are met and quality standards maintained.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We handle logistics, customs documentation, and freight forwarding to ensure smooth delivery.',
  },
  {
    icon: Package,
    title: 'Product Sourcing',
    description: 'We find reliable suppliers matching your requirements, negotiate prices, and manage the entire sourcing process.',
  },
  {
    icon: CheckCircle,
    title: 'Custom Solutions',
    description: 'Tailored services including product development, OEM/ODM, and supply chain management.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Submit Inquiry',
    description: 'Tell us your product requirements, quantity, target price, and any specific needs.',
  },
  {
    number: '02',
    title: 'Supplier Matching',
    description: 'We identify and verify suitable factories, then present options with detailed profiles.',
  },
  {
    number: '03',
    title: 'Sample Evaluation',
    description: 'We arrange samples, conduct evaluations, and provide feedback on quality and specifications.',
  },
  {
    number: '04',
    title: 'Production & QC',
    description: 'We monitor production, conduct inspections, and ensure quality meets your standards.',
  },
  {
    number: '05',
    title: 'Shipping & Delivery',
    description: 'We coordinate shipping, handle documentation, and track delivery to your warehouse.',
  },
];

const products = [
  { name: 'Electronics', description: 'Consumer electronics, components, gadgets' },
  { name: 'Textiles & Apparel', description: 'Garments, fabrics, accessories' },
  { name: 'Machinery', description: 'Industrial equipment, parts, tools' },
  { name: 'Furniture', description: 'Home furniture, office furniture, outdoor' },
  { name: 'Packaging', description: 'Boxes, bags, labels, custom packaging' },
  { name: 'Toys & Games', description: 'Plastic toys, educational toys, games' },
  { name: 'Home & Garden', description: 'Decor, kitchenware, outdoor items' },
  { name: 'Automotive', description: 'Parts, accessories, components' },
];

const problems = [
  {
    problem: 'Language barriers and communication issues',
    solution: 'Our bilingual team bridges the communication gap, ensuring clear understanding between you and suppliers.',
  },
  {
    problem: 'Unreliable suppliers and fraud risk',
    solution: 'We verify every supplier thoroughly - business licenses, factory visits, and reference checks.',
  },
  {
    problem: 'Quality control challenges',
    solution: 'Professional inspectors ensure your products meet specifications at every production stage.',
  },
  {
    problem: 'Complex logistics and customs',
    solution: 'We handle all documentation, customs clearance, and coordinate reliable freight forwarding.',
  },
];

const stats = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '50+', label: 'Countries Served' },
  { value: '10,000+', label: 'Successful Orders' },
  { value: '98%', label: 'Client Satisfaction' },
];

const caseStudies = [
  {
    client: 'European Retail Chain',
    industry: 'Home Goods',
    challenge: 'Needed reliable suppliers for 50,000+ home decor items with consistent quality.',
    result: 'We identified 3 verified factories, implemented QC checks, and saved them 20% on costs.',
    image: 'home-decor-sourcing',
  },
  {
    client: 'US Tech Startup',
    industry: 'Electronics',
    challenge: 'Required custom electronics manufacturing with strict quality standards.',
    result: 'Matched with an ISO-certified factory, conducted weekly inspections, delivered on time.',
    image: 'electronics-manufacturing',
  },
  {
    client: 'Australian Distributor',
    industry: 'Textiles',
    challenge: 'Sourcing sustainable fabrics from trusted manufacturers.',
    result: 'Found GOTS-certified suppliers, negotiated favorable terms, established long-term partnership.',
    image: 'textile-sourcing',
  },
];

const faqs = [
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct comprehensive verification including business license checks, factory visits, production capacity assessment, financial stability review, and reference verification from existing clients.',
  },
  {
    question: 'What are your service fees?',
    answer: 'Our fees vary based on service scope and order complexity. We offer transparent pricing with no hidden costs. Contact us for a detailed quote tailored to your requirements.',
  },
  {
    question: 'Can you handle small orders?',
    answer: 'Yes, we work with businesses of all sizes. While some services are more cost-effective for larger orders, we can accommodate smaller quantities and help you scale up over time.',
  },
  {
    question: 'How do you ensure quality?',
    answer: 'We offer quality inspections at pre-production, during production, and pre-shipment stages. Our inspectors follow detailed checklists and provide comprehensive reports with photos and videos.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We have experience across multiple industries including electronics, textiles, machinery, furniture, packaging, toys, automotive parts, and more.',
  },
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white rounded-full"></div>
        </div>
        
        <div className="container relative">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
              Professional China Sourcing Agent
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping. Your trusted partner for China procurement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-white text-lg px-8 py-4">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/how-it-works" className="btn bg-white/10 text-white hover:bg-white/20 text-lg px-8 py-4">
                Learn How It Works
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[var(--accent)]" />
                <span className="text-sm">500+ Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[var(--accent)]" />
                <span className="text-sm">No Upfront Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[var(--accent)]" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive sourcing solutions to streamline your China procurement
            </p>
          </div>
          
          <div className="grid-3">
            {services.map((service, index) => (
              <div key={index} className="card group">
                <div className="w-14 h-14 bg-[var(--primary)] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--accent)] transition-colors">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">{service.title}</h3>
                <p className="text-[var(--text-secondary)]">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-secondary">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process Section */}
      <section className="section bg-[var(--bg-light)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Sourcing Process</h2>
            <p className="section-subtitle mx-auto">
              A transparent, step-by-step approach to ensure successful sourcing
            </p>
          </div>
          
          <div className="grid-3">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card text-center h-full">
                  <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">{step.title}</h3>
                  <p className="text-[var(--text-secondary)]">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-[var(--border)]" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn btn-primary">
              Learn More About Our Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Products We Source</h2>
            <p className="section-subtitle mx-auto">
              Wide range of product categories from verified Chinese manufacturers
            </p>
          </div>
          
          <div className="grid-3">
            {products.map((product, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-lg font-semibold mb-2 text-[var(--primary)]">{product.name}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{product.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products" className="btn btn-secondary">
              View All Categories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section bg-[var(--primary)] text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">Problems We Solve</h2>
            <p className="section-subtitle mx-auto text-white/70">
              Common challenges in China sourcing and how we help overcome them
            </p>
          </div>
          
          <div className="grid-2">
            {problems.map((item, index) => (
              <div key={index} className="card bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold mb-2 text-white">Problem:</h3>
                <p className="text-white/70 mb-4">{item.problem}</p>
                <h3 className="text-lg font-semibold mb-2 text-[var(--accent)]">Solution:</h3>
                <p className="text-white/80">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-3">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[var(--primary)] mb-2">{stat.value}</div>
                <div className="text-[var(--text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-[var(--bg-light)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle mx-auto">
              Real results from our clients around the world
            </p>
          </div>
          
          <div className="grid-3">
            {caseStudies.map((study, index) => (
              <div key={index} className="card">
                <div className="h-48 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg mb-4 flex items-center justify-center">
                  <Factory className="w-16 h-16 text-white/50" />
                </div>
                <div className="text-sm text-[var(--accent)] font-medium mb-2">{study.industry}</div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">{study.client}</h3>
                <p className="text-[var(--text-secondary)] mb-3"><strong>Challenge:</strong> {study.challenge}</p>
                <p className="text-[var(--text-primary)]"><strong>Result:</strong> {study.result}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/case-studies" className="btn btn-secondary">
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Common questions about our sourcing services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="card mb-4">
                <button
                  className="w-full flex items-center justify-between text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-[var(--primary)]">{faq.question}</span>
                  <ArrowRight className={`w-5 h-5 text-[var(--text-secondary)] transition-transform ${openFaq === index ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === index && (
                  <p className="mt-4 text-[var(--text-secondary)] pt-4 border-t border-[var(--border)]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="section bg-[var(--bg-light)]">
        <div className="container">
          <div className="grid-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Ready to Start Sourcing?</h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Get a free consultation and quote for your sourcing needs. Tell us about your requirements and we'll help you find the right suppliers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--success)]" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--success)]" />
                  <span>No obligation quote</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--success)]" />
                  <span>Expert sourcing advice</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <form className="space-y-4">
                <div>
                  <label className="label">Your Name *</label>
                  <input type="text" className="input-field" placeholder="John Smith" required />
                </div>
                <div>
                  <label className="label">Company Name</label>
                  <input type="text" className="input-field" placeholder="Your Company" />
                </div>
                <div>
                  <label className="label">Email Address *</label>
                  <input type="email" className="input-field" placeholder="john@company.com" required />
                </div>
                <div>
                  <label className="label">Phone Number</label>
                  <input type="tel" className="input-field" placeholder="+1 234 567 8900" />
                </div>
                <div>
                  <label className="label">Product Requirements *</label>
                  <textarea className="input-field" rows="4" placeholder="Describe the products you need to source, including quantity, specifications, and any special requirements..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;