import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Building2, 
  ClipboardCheck, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Factory,
  Globe,
  Package,
  Users,
  Shield,
  Clock,
  DollarSign,
  MessageSquare,
  FileCheck,
  Container,
  Layers,
  Play
} from 'lucide-react';

const faqs = [
  {
    question: "How do I know a supplier is legitimate?",
    answer: "We conduct thorough factory verification including checking business licenses, visiting the factory in person, verifying production capacity, and confirming export experience. We provide detailed reports with photos and documentation."
  },
  {
    question: "What types of quality inspections do you offer?",
    answer: "We offer pre-production, during-production, and pre-shipment inspections. Our QC team checks product specifications, materials, packaging, labeling, and can witness loading. We follow AQL standards and provide detailed inspection reports."
  },
  {
    question: "How long does the sourcing process take?",
    answer: "Initial supplier shortlist typically takes 3-7 days. Factory verification takes 5-10 days. The overall timeline depends on product complexity, number of suppliers to evaluate, and inspection requirements. We provide detailed timelines for each project."
  },
  {
    question: "What are your service fees?",
    answer: "Our fees depend on the services required and project scope. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific sourcing needs."
  },
  {
    question: "Do you handle shipping and logistics?",
    answer: "Yes, we coordinate with trusted freight forwarders for sea freight, air freight, and express shipping. We handle documentation, customs clearance coordination, and can supervise loading at the factory."
  },
  {
    question: "Can you source any product from China?",
    answer: "We specialize in various product categories including electronics, home goods, furniture, packaging, machinery parts, and more. Contact us with your requirements and we'll confirm our capability to source your specific products."
  }
];

const stats = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '1,200+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
];

const services = [
  {
    icon: Search,
    title: 'Supplier Search & Verification',
    description: 'We find and verify reliable manufacturers through factory visits, license checks, and capability assessments.',
    features: ['Factory verification', 'Capability assessment', 'Background checks']
  },
  {
    icon: Building2,
    title: 'Factory Audit & Compliance',
    description: 'Comprehensive audits to ensure factories meet your standards, social compliance, and quality requirements.',
    features: ['On-site inspections', 'Compliance verification', 'Risk assessment']
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    description: 'Rigorous quality inspections at every production stage to catch issues before shipment.',
    features: ['AQL sampling', 'Product testing', 'Detailed reports']
  },
  {
    icon: Package,
    title: 'Production Follow-up',
    description: 'Regular updates and monitoring throughout production to ensure timelines and quality standards are met.',
    features: ['Progress tracking', 'Issue resolution', 'Timeline management']
  },
  {
    icon: Container,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination from factory to your destination port or warehouse.',
    features: ['Freight coordination', 'Customs documentation', 'Loading supervision']
  },
  {
    icon: Layers,
    title: 'Sample Management',
    description: 'Efficient handling of sample requests, evaluation, and feedback loops with suppliers.',
    features: ['Sample coordination', 'Quality evaluation', 'Feedback management']
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Submit Your Request',
    description: 'Tell us what products you need, quantities, specifications, and target price.'
  },
  {
    number: '02',
    title: 'We Find Suppliers',
    description: 'Our team identifies and verifies suitable manufacturers in China.'
  },
  {
    number: '03',
    title: 'Compare & Select',
    description: 'Receive detailed comparisons with pricing, capabilities, and recommendations.'
  },
  {
    number: '04',
    title: 'We Manage Production',
    description: 'Quality inspections, production monitoring, and logistics coordination.'
  }
];

const products = [
  { name: 'Electronics & Components', examples: 'PCBs, consumer electronics, smart devices' },
  { name: 'Home Goods & Furnishings', examples: 'Furniture, lighting, home decor' },
  { name: 'Packaging Materials', examples: 'Paper, plastic, custom packaging' },
  { name: 'Machinery & Parts', examples: 'Industrial equipment, spare parts' },
  { name: 'Textiles & Apparel', examples: 'Fabrics, garments, accessories' },
  { name: 'Outdoor & Sporting Goods', examples: 'Camping gear, fitness equipment' },
];

const problems = [
  {
    icon: Shield,
    title: 'Unverified Suppliers',
    problem: 'Risk of working with middlemen or fraudulent factories',
    solution: 'We verify every supplier in-person with detailed documentation'
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Issues',
    problem: 'Receiving products that don\'t match specifications',
    solution: 'Professional QC inspections at every production stage'
  },
  {
    icon: Clock,
    title: 'Production Delays',
    problem: 'Missed deadlines and communication gaps',
    solution: 'Regular monitoring and proactive issue resolution'
  },
  {
    icon: DollarSign,
    title: 'Hidden Costs',
    problem: 'Unexpected fees and unclear pricing structures',
    solution: 'Transparent quotes with detailed cost breakdowns'
  },
  {
    icon: MessageSquare,
    title: 'Communication Barriers',
    problem: 'Language and cultural differences causing misunderstandings',
    solution: 'Professional team bridges the gap with clear communication'
  },
  {
    icon: Globe,
    title: 'Shipping Complexity',
    problem: 'Navigating international logistics and customs',
    solution: 'Complete logistics support from factory to your door'
  }
];

const caseStudies = [
  {
    client: 'European Retailer',
    industry: 'Home Goods',
    challenge: 'Needed to source 50,000 units of furniture components from verified factories while ensuring quality consistency.',
    solution: 'We verified 8 factories, conducted capability assessments, and implemented a three-stage QC process.',
    result: '30% cost reduction, zero quality issues, delivered on schedule.',
    image: 'furniture manufacturing warehouse'
  },
  {
    client: 'US Electronics Brand',
    industry: 'Consumer Electronics',
    challenge: 'Sourcing smart home devices from reliable manufacturers with strict quality requirements.',
    solution: 'Factory verification, AQL inspections, and production monitoring over 6-month period.',
    result: 'Successful launch with 99.2% quality rate, 40% faster time-to-market.',
    image: 'electronics factory assembly'
  }
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-neutral-200 last:border-0">
      <button
        className="w-full py-5 flex items-center justify-between text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-neutral-900 pr-4">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: '',
        quantity: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Factory className="w-4 h-4" />
                <span className="text-sm font-medium">Your Trusted China Sourcing Partner</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg lg:text-xl text-primary-100 mb-8 leading-relaxed">
                Find verified suppliers, ensure product quality, and manage production smoothly. We handle the complexity so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  <Play className="w-5 h-5" />
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl opacity-20 blur-2xl" />
                <div 
                  className="relative aspect-[4/3] rounded-xl overflow-hidden"
                  data-strk-bg-id="hero-factory-img-a1b2c3"
                  data-strk-bg="[hero-title-section]"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                  style={{ background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Building2 className="w-24 h-24 mx-auto mb-4 opacity-50" />
                      <p className="text-primary-200 text-lg">Factory Verification</p>
                      <p className="text-primary-300 text-sm mt-2">Quality Control</p>
                      <p className="text-primary-300 text-sm">Shipping Coordination</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-800 mb-2">{stat.value}</div>
                <div className="text-neutral-600 text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">End-to-End Sourcing Solutions</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              From supplier discovery to final delivery, we manage every step of your China sourcing process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <div 
                key={service.title}
                className="bg-white border border-neutral-200 rounded-xl p-6 lg:p-8 hover:border-primary-200 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary-800 transition-colors">
                  <service.icon className="w-6 h-6 text-primary-800 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-neutral-500">
                      <CheckCircle2 className="w-4 h-4 text-success-500 flex-shrink-0" />
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
              className="inline-flex items-center gap-2 text-primary-800 font-semibold hover:text-primary-600 transition-colors"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Process</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">How It Works</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              A clear, systematic approach to sourcing from China that minimizes risk and maximizes value.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-xl p-6 border border-neutral-200 h-full">
                  <div className="text-5xl font-bold text-primary-100 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Learn More About Our Process
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">What We Source</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">Products We Source</h2>
              <p className="text-neutral-600 text-lg mb-6">
                We have established relationships with manufacturers across diverse product categories. Whether you need consumer electronics, industrial components, or custom manufacturing, we can help.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {products.map((product) => (
                  <div key={product.name} className="bg-neutral-50 rounded-lg p-4">
                    <h4 className="font-semibold text-neutral-900 mb-1">{product.name}</h4>
                    <p className="text-sm text-neutral-500">{product.examples}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-primary-800 font-semibold hover:text-primary-600 transition-colors"
                >
                  View All Product Categories
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div 
                className="aspect-square rounded-xl overflow-hidden"
                data-strk-bg-id="products-sourcing-img-d4e5f6"
                data-strk-bg="[products-section-title] [products-section-desc]"
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="800"
                style={{ background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Package className="w-32 h-32 mx-auto mb-4 text-neutral-400" />
                    <p className="text-neutral-500 text-lg">Diverse Product Categories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-16 lg:py-24 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">Problems We Solve</h2>
            <p className="text-primary-200 text-lg max-w-2xl mx-auto">
              Sourcing from China comes with challenges. We help you navigate them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {problems.map((item) => (
              <div key={item.title} className="bg-primary-800/50 backdrop-blur-sm rounded-xl p-6 border border-primary-700">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-primary-200 text-sm mb-4">Problem: {item.problem}</p>
                <p className="text-white text-sm font-medium">Solution: {item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Why Trust Us</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">Built on Trust & Results</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Shield className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Verified Process</h3>
              <p className="text-neutral-600">Every supplier undergoes rigorous verification including factory visits, license checks, and capability assessments.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Users className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Local Expertise</h3>
              <p className="text-neutral-600">Our team is based in China with deep knowledge of local business practices, language, and culture.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <FileCheck className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Quality Assurance</h3>
              <p className="text-neutral-600">Professional QC inspections ensure your products meet specifications before leaving China.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">Case Studies</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              See how we've helped businesses overcome sourcing challenges and achieve their goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200"
                  data-strk-bg-id={`case-study-${index}-img-g7h8i9`}
                  data-strk-bg={`[case-study-${index}-challenge] [case-study-${index}-client]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="800"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <h3 id={`case-study-${index}-client`} className="text-xl font-bold text-neutral-900 mb-2">{study.client}</h3>
                  <p id={`case-study-${index}-challenge`} className="text-neutral-600 text-sm mb-4">{study.challenge}</p>
                  <div className="border-t border-neutral-100 pt-4">
                    <p className="text-sm text-neutral-500 mb-2"><span className="font-semibold text-neutral-700">Solution:</span> {study.solution}</p>
                    <p className="text-sm"><span className="font-semibold text-success-600">Result:</span> {study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 bg-primary-800 hover:bg-primary-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View All Case Studies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-600 text-lg">
              Common questions about our China sourcing services.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-xl px-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="quote-form" className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Get Started</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">Get a Free Sourcing Quote</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Tell us about your sourcing needs and we'll provide a detailed plan and quote within 24 hours.
            </p>
          </div>
          {formStatus === 'success' ? (
            <div className="bg-success-50 border border-success-200 rounded-xl p-8 text-center">
              <CheckCircle2 className="w-16 h-16 text-success-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Thank You!</h3>
              <p className="text-neutral-600 mb-6">We've received your inquiry and will get back to you within 24 hours.</p>
              <button
                onClick={() => setFormStatus('idle')}
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-neutral-200 p-6 lg:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your Company Ltd."
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-neutral-700 mb-2">
                    Product to Source *
                  </label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="e.g., LED Smart Lights"
                  />
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-2">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="e.g., 10,000 units"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell us about your requirements, target price, quality standards, or any questions..."
                />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-accent-600 hover:bg-accent-700 disabled:bg-accent-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get Your Free Quote
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-center text-sm text-neutral-500 mt-4">
                We typically respond within 24 hours. Your information is kept confidential.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
