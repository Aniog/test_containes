import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Factory, 
  ClipboardCheck, 
  Truck, 
  Search, 
  Package, 
  ArrowRight,
  CheckCircle,
  Star,
  ChevronDown,
  ChevronUp,
  Users,
  Award,
  Globe
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const trustStats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Factory, value: '12+', label: 'Years Experience' },
    { icon: Award, value: '98%', label: 'Client Satisfaction' },
    { icon: Globe, value: '30+', label: 'Countries' },
  ];

  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify factory credentials, business licenses, production capacity, and certifications to ensure you work with legitimate suppliers.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Our QC team performs pre-shipment inspections, during-production checks, and final random inspections to guarantee product quality.',
    },
    {
      icon: Factory,
      title: 'Factory Audit',
      description: 'Comprehensive factory audits including capability assessments, social compliance checks, and production process evaluation.',
    },
    {
      icon: Package,
      title: 'Production Follow-up',
      description: 'Regular production updates, milestone tracking, and sample approval to keep your order on schedule and on spec.',
    },
  ];

  const problems = [
    {
      title: 'Language Barriers',
      description: 'Communication gaps with Chinese suppliers leading to misunderstandings, delays, and quality issues.',
      solution: 'Our bilingual team bridges the communication gap, ensuring clear specifications and expectations.',
    },
    {
      title: 'Quality Risks',
      description: 'Receiving products that don\'t match your specifications or quality standards.',
      solution: 'Professional QC inspections at every production stage to catch issues early.',
    },
    {
      title: 'Supplier Scams',
      description: 'Falling victim to fraudulent suppliers who take payments and deliver nothing or substandard goods.',
      solution: 'Thorough verification of supplier legitimacy, business licenses, and factory visits.',
    },
    {
      title: 'Logistics Complexities',
      description: 'Navigating complex international shipping, customs clearance, and documentation.',
      solution: 'End-to-end logistics support from factory to your doorstep.',
    },
  ];

  const process = [
    { step: 1, title: 'Submit Inquiry', description: 'Tell us what you need - product details, quantity, target price, and timeline.' },
    { step: 2, title: 'Supplier Matching', description: 'We identify and verify 3-5 qualified suppliers matching your requirements.' },
    { step: 3, title: 'Price Negotiation', description: 'We negotiate the best terms and pricing on your behalf.' },
    { step: 4, title: 'Sample Approval', description: 'We coordinate samples, conduct evaluations, and get your approval.' },
    { step: 5, title: 'Production Monitoring', description: 'Regular updates and quality checks throughout the production cycle.' },
    { step: 6, title: 'Shipping & Delivery', description: 'We handle logistics, customs, and ensure safe delivery to your location.' },
  ];

  const products = [
    { name: 'Electronics', count: '2,400+ suppliers' },
    { name: 'Textiles & Apparel', count: '3,200+ suppliers' },
    { name: 'Machinery', count: '1,800+ suppliers' },
    { name: 'Furniture', count: '1,500+ suppliers' },
    { name: 'Packaging', count: '900+ suppliers' },
    { name: 'Home & Garden', count: '2,100+ suppliers' },
  ];

  const caseStudies = [
    {
      client: 'TechStart Inc.',
      industry: 'Electronics',
      challenge: 'Needed to source 50,000 custom wireless chargers with strict quality standards.',
      result: 'Saved 35% on costs, zero defects in first shipment, delivered ahead of schedule.',
      image: 'electronics manufacturing',
    },
    {
      client: 'Fashion Forward Ltd.',
      industry: 'Apparel',
      challenge: 'Required reliable manufacturer for private label clothing line with ethical sourcing.',
      result: 'Found SA8000-certified factory, reduced lead time by 2 weeks, 99.5% quality pass rate.',
      image: 'textile factory',
    },
    {
      client: 'HomeGoods Plus',
      industry: 'Home Furnishings',
      challenge: 'Sourcing diverse product range from multiple suppliers across different categories.',
      result: 'Consolidated 12 suppliers into 4 reliable partners, 40% cost reduction on freight.',
      image: 'furniture warehouse',
    },
  ];

  const faqs = [
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct comprehensive supplier verification including business license checks, factory visits, production capacity assessment, financial stability review, and reference checks from existing clients. We provide detailed reports with photos and videos.',
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure is transparent and varies based on project scope. We typically charge a service fee based on the complexity of sourcing, inspection frequency, and logistics requirements. Contact us for a detailed quote.',
    },
    {
      question: 'How do you ensure quality?',
      answer: 'We implement a multi-stage quality control process: pre-production material verification, during-production inspections at key milestones, and pre-shipment final inspections. All inspections include detailed photo/video reports.',
    },
    {
      question: 'Can you handle shipping and logistics?',
      answer: 'Yes, we provide end-to-end logistics support including freight forwarding, customs clearance documentation, consolidation services, and shipping tracking. We work with reliable international shipping partners.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have experience across multiple industries including electronics, textiles, machinery, furniture, packaging, and home goods. Our team has deep knowledge of manufacturing processes and quality standards in each category.',
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#0F172A] via-[#1E3A5F] to-[#2D5A87] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E67E22] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Trusted by 500+ Global Buyers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              We help you find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping. Turn your sourcing challenges into competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/how-it-works" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all inline-flex items-center justify-center">
                See How It Works
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#E67E22]/10 rounded-lg mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-[#E67E22]" />
                  </div>
                  <div className="text-2xl font-bold text-[#1E3A5F]">{stat.value}</div>
                  <div className="text-sm text-[#64748B]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Our Sourcing Services
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Comprehensive sourcing solutions to ensure your China procurement is smooth, reliable, and cost-effective.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">{service.title}</h3>
                <p className="text-[#64748B] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline inline-flex items-center">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Common challenges when sourcing from China, and how we help you overcome them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div 
                key={index} 
                className="bg-[#F8FAFC] rounded-xl p-8 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">{problem.title}</h3>
                <p className="text-[#64748B] mb-4">{problem.description}</p>
                <div className="flex items-start pt-4 border-t border-gray-200">
                  <CheckCircle className="w-5 h-5 text-[#27AE60] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-[#1E3A5F]">Solution: </span>
                    <span className="text-sm text-[#64748B]">{problem.solution}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              A proven 6-step process to ensure successful sourcing from China.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-md h-full border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#E67E22] rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                    <div className="ml-4 h-px flex-1 bg-gray-200"></div>
                  </div>
                  <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#64748B]">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#E67E22] rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-secondary inline-flex items-center">
              Learn More About Our Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              We have established networks across various product categories in China.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Link 
                to="/products" 
                key={index}
                className="group bg-[#F8FAFC] rounded-xl p-6 border border-gray-100 hover:border-[#E67E22] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#1E3A5F] group-hover:text-[#E67E22] transition-colors">
                    {product.name}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-[#64748B] group-hover:text-[#E67E22] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-[#64748B] mt-2">{product.count}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-outline inline-flex items-center">
              View All Categories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Real results from our clients who transformed their China sourcing experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] flex items-center justify-center">
                  <Package className="w-16 h-16 text-white/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-[#E67E22]">{study.industry}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-[#64748B] ml-1">5.0</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">{study.client}</h3>
                  <p className="text-sm text-[#64748B] mb-4">{study.challenge}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-[#27AE60]">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/case-studies" className="btn-secondary inline-flex items-center">
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#64748B]">
              Common questions about our sourcing services.
            </p>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your China Sourcing?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get a free sourcing quote and discover how we can help you find the right suppliers.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-4 inline-flex items-center">
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

// FAQ Component
const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-semibold text-[#1E3A5F]">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-[#64748B]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#64748B]" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-[#64748B]">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;