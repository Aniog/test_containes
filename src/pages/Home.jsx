import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Factory, ClipboardCheck, Truck, ArrowRight, CheckCircle,
  ChevronDown, ChevronUp, Mail, Phone, MapPin, Clock,
  Users, Globe, Package
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const services = [
  {
    icon: Shield,
    title: 'Supplier Verification',
    description: 'We verify factory credentials, business licenses, production capacity, and financial stability to ensure you work with legitimate partners.',
    link: '/services#verification',
  },
  {
    icon: Factory,
    title: 'Factory Audit',
    description: 'Comprehensive on-site audits covering facility conditions, equipment, worker conditions, and compliance with international standards.',
    link: '/services#audit',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    description: 'Pre-shipment inspections, during-production checks, and final random inspection services to ensure your products meet specifications.',
    link: '/services#quality',
  },
  {
    icon: Package,
    title: 'Production Follow-up',
    description: 'Regular progress updates, sample approval, and production monitoring to keep your order on track and on schedule.',
    link: '/services#production',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and door-to-door delivery.',
    link: '/services#shipping',
  },
  {
    icon: Globe,
    title: 'Sourcing & Negotiation',
    description: 'We find the right suppliers, negotiate competitive pricing, and handle communication to bridge cultural and language gaps.',
    link: '/services#sourcing',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Submit Your Request',
    description: 'Tell us what you need - product specifications, quantity, target price, and any special requirements.',
  },
  {
    number: '02',
    title: 'We Find Suppliers',
    description: 'Our team researches and pre-screens factories to find matches that meet your criteria.',
  },
  {
    number: '03',
    title: 'Verify & Compare',
    description: 'We conduct factory audits and provide detailed comparisons of capabilities, pricing, and certifications.',
  },
  {
    number: '04',
    title: 'Sample & Approve',
    description: 'We request samples, facilitate your feedback, and help negotiate terms until you approve.',
  },
  {
    number: '05',
    title: 'Production & QC',
    description: 'We monitor production, conduct quality inspections, and ensure compliance with your specifications.',
  },
  {
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle documentation, and ensure smooth delivery to your door.',
  },
];

const products = [
  { name: 'Electronics & Gadgets', image: 'electronics manufacturing' },
  { name: 'Textiles & Apparel', image: 'textile factory manufacturing' },
  { name: 'Furniture & Home Goods', image: 'furniture factory warehouse' },
  { name: 'Machinery & Parts', image: 'industrial machinery manufacturing' },
  { name: 'Packaging & Printing', image: 'packaging factory production' },
  { name: 'Health & Beauty', image: 'cosmetics manufacturing lab' },
  { name: 'Toys & Gifts', image: 'toy factory production line' },
  { name: 'Sports & Outdoor', image: 'sports equipment factory' },
];

const problems = [
  {
    title: 'Language & Cultural Barriers',
    description: 'We bridge the communication gap with fluent English speakers who understand both Western and Chinese business cultures.',
  },
  {
    title: 'Supplier Reliability',
    description: 'Our verification process ensures you only work with legitimate, capable factories that can deliver on time.',
  },
  {
    title: 'Quality Issues',
    description: 'Regular QC inspections catch problems early, preventing costly mistakes and shipment delays.',
  },
  {
    title: 'Hidden Costs',
    description: 'Transparent pricing and thorough cost breakdowns help you understand the true landed cost of your products.',
  },
  {
    title: 'Shipping Complexities',
    description: 'We handle all logistics, customs documentation, and regulatory compliance to simplify international shipping.',
  },
  {
    title: 'IP & Trust Risks',
    description: 'We help protect your designs and work with factories that respect intellectual property rights.',
  },
];

const trustPoints = [
  { number: '500+', label: 'Clients Served' },
  { number: '10+', label: 'Years Experience' },
  { number: '2000+', label: 'Factories Verified' },
  { number: '98%', label: 'Client Satisfaction' },
];

const caseStudies = [
  {
    client: 'European Retail Chain',
    industry: 'Home Goods',
    challenge: 'Needed reliable suppliers for 50+ SKUs across multiple categories',
    result: 'Sourced 12 verified factories, saved 23% on procurement costs',
    metric: '23% Cost Savings',
  },
  {
    client: 'US Tech Startup',
    industry: 'Electronics',
    challenge: 'First-time sourcing from China with limited experience',
    result: 'End-to-end support from factory selection to delivery',
    metric: '6 Weeks to Delivery',
  },
  {
    client: 'Australian Distributor',
    industry: 'Outdoor Products',
    challenge: 'Quality issues with previous suppliers',
    result: 'Implemented QC protocol, reduced defects from 15% to 0.5%',
    metric: '99.5% Quality Rate',
  },
];

const faqs = [
  {
    question: 'How do you verify factories?',
    answer: 'We conduct comprehensive factory audits that include verifying business licenses, checking production capacity, inspecting facility conditions, reviewing financial stability, and confirming certifications. We provide detailed audit reports with photos and video documentation.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fee structure depends on the services you need. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific requirements. Many clients find our fees are offset by the savings we achieve through better supplier selection and negotiation.',
  },
  {
    question: 'Can you help with small orders?',
    answer: 'Yes, we work with businesses of all sizes. While some services are more cost-effective for larger orders, we can tailor our support to meet your needs regardless of order volume.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timelines vary based on complexity. Simple sourcing requests can be fulfilled in 1-2 weeks. Full supplier verification and sample approval typically takes 4-6 weeks. Production and shipping add additional time based on your order specifications.',
  },
  {
    question: 'Do you only work with factories in China?',
    answer: 'While our primary expertise is in China, we can also assist with sourcing from other Asian countries including Vietnam, India, Thailand, and Indonesia depending on your product requirements.',
  },
  {
    question: 'What happens if quality issues arise?',
    answer: 'Our QC services are designed to prevent issues before they become problems. If issues do arise, we document them thoroughly, work with the factory on corrective actions, and can reject shipments that don\'t meet your standards. We provide detailed inspection reports with photos and videos.',
  },
];

const Home = () => {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1E3A5F] via-[#2D5A8A] to-[#1E3A5F] overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:30px_30px]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F97316]/10 to-transparent" />
        
        <div className="relative max-w-1200px mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="mt-6 text-xl text-gray-200 leading-relaxed">
              We help overseas businesses find reliable suppliers, verify factories, 
              inspect quality, and coordinate seamless shipping. Your trusted partner 
              for successful China sourcing.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                See How It Works
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8">
              {trustPoints.map((point) => (
                <div key={point.label} className="text-center">
                  <div className="text-3xl font-bold text-white">{point.number}</div>
                  <div className="text-sm text-gray-300">{point.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Sourcing Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive support throughout your entire sourcing journey, 
              from supplier discovery to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center group-hover:bg-[#1E3A5F] group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-[#1E3A5F] group-hover:text-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-[#1E3A5F] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-[#F97316] font-medium group-hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Sourcing Process
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A proven 6-step process that ensures you find the right suppliers 
              and get quality products delivered on time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm h-full">
                  <div className="text-5xl font-bold text-[#1E3A5F]/10 absolute top-4 right-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 relative z-10">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-gray-600 relative z-10">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-[#1E3A5F]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center px-6 py-3 bg-[#1E3A5F] text-white font-medium rounded-lg hover:bg-[#2D5A8A] transition-colors"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Products We Source
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We have expertise sourcing a wide range of products from verified Chinese manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className="group relative overflow-hidden rounded-xl aspect-square bg-gray-200"
                data-strk-bg-id={`product-${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                data-strk-bg={`[product-${product.name.toLowerCase().replace(/\s+/g, '-')}-title]`}
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="400"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 bg-[#1E3A5F]/20 group-hover:bg-[#1E3A5F]/30 transition-colors z-0" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 
                    id={`product-${product.name.toLowerCase().replace(/\s+/g, '-')}-title`}
                    className="text-white font-semibold text-lg"
                  >
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-[#1E3A5F] text-white font-medium rounded-lg hover:bg-[#2D5A8A] transition-colors"
            >
              View All Product Categories
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Common Sourcing Challenges We Solve
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We understand the complexities of sourcing from China and provide 
              solutions to address your biggest concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem) => (
              <div key={problem.title} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="py-16 bg-[#1E3A5F]">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white">{point.number}</div>
                <div className="mt-2 text-gray-300">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See how we've helped businesses like yours overcome sourcing challenges 
              and achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.client} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-3 bg-[#F97316]" />
                <div className="p-8">
                  <div className="text-sm text-[#F97316] font-medium uppercase tracking-wide">
                    {study.industry}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {study.client}
                  </h3>
                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="text-sm font-medium text-gray-500">Challenge</div>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">Result</div>
                      <p className="text-gray-600">{study.result}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-2xl font-bold text-[#1E3A5F]">{study.metric}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-6 py-3 bg-[#1E3A5F] text-white font-medium rounded-lg hover:bg-[#2D5A8A] transition-colors"
            >
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="contact" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Get Your Free Sourcing Quote
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Tell us about your sourcing needs and we'll provide a comprehensive 
                quote within 24 hours.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">Quick Response</div>
                    <div className="text-sm text-gray-600">Quotes within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">No Obligation</div>
                    <div className="text-sm text-gray-600">Free initial consultation</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">Expert Support</div>
                    <div className="text-sm text-gray-600">Dedicated sourcing manager</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="text-sm text-gray-500">Or contact us directly:</div>
                <div className="mt-4 space-y-2">
                  <a href="mailto:info@ssourcingchina.com" className="flex items-center text-gray-700 hover:text-[#1E3A5F]">
                    <Mail className="w-4 h-4 mr-3" />
                    info@ssourcingchina.com
                  </a>
                  <a href="tel:+8675588888888" className="flex items-center text-gray-700 hover:text-[#1E3A5F]">
                    <Phone className="w-4 h-4 mr-3" />
                    +86 755 8888 8888
                  </a>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-4 h-4 mr-3" />
                    Shenzhen, China
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">Thank You!</h3>
                  <p className="mt-2 text-gray-600">
                    Your inquiry has been submitted. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
                        Product Category *
                      </label>
                      <select
                        id="product"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                      >
                        <option value="">Select a category</option>
                        <option value="electronics">Electronics & Gadgets</option>
                        <option value="textiles">Textiles & Apparel</option>
                        <option value="furniture">Furniture & Home Goods</option>
                        <option value="machinery">Machinery & Parts</option>
                        <option value="packaging">Packaging & Printing</option>
                        <option value="health">Health & Beauty</option>
                        <option value="toys">Toys & Gifts</option>
                        <option value="sports">Sports & Outdoor</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                        placeholder="e.g., 5000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Requirements *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors resize-none"
                      placeholder="Describe your product requirements, specifications, target price, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Submitting...' : 'Get Your Free Quote'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;