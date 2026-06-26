import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Building2,
  ClipboardCheck,
  Factory,
  Truck,
  ChevronDown,
  CheckCircle,
  Shield,
  Users,
  Clock,
  ChevronRight,
  Star,
  MessageCircle,
  Send,
} from 'lucide-react';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('idle');

  const services = [
    {
      icon: Search,
      title: 'Supplier Search',
      description: 'We identify and evaluate verified manufacturers that match your product specifications and quality requirements.',
    },
    {
      icon: Building2,
      title: 'Factory Verification',
      description: 'On-site audits to confirm factory legitimacy, production capacity, certifications, and compliance standards.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Rigorous QC inspections during production and before shipment to ensure your products meet specifications.',
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular updates and monitoring throughout the manufacturing process to keep your project on schedule.',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics management including customs clearance, documentation, and delivery tracking.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what you need - product details, quantities, target price, and timeline.',
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'Our team researches and verifies manufacturers that match your requirements.',
    },
    {
      number: '03',
      title: 'You Select',
      description: 'Receive detailed supplier profiles with pricing, capabilities, and verification reports.',
    },
    {
      number: '04',
      title: 'We Manage Production',
      description: 'Quality inspections, production monitoring, and progress updates until shipment.',
    },
    {
      number: '05',
      title: 'Safe Delivery',
      description: 'Shipping coordination, customs clearance, and delivery to your door.',
    },
  ];

  const products = [
    { name: 'Electronics & Components', icon: '📱' },
    { name: 'Home & Garden', icon: '🏡' },
    { name: 'Textiles & Apparel', icon: '👕' },
    { name: 'Machinery & Equipment', icon: '⚙️' },
    { name: 'Packaging Materials', icon: '📦' },
    { name: 'Health & Beauty', icon: '💄' },
    { name: 'Sports & Outdoor', icon: '⚽' },
    { name: 'Industrial Parts', icon: '🔧' },
  ];

  const problems = [
    {
      title: 'Language Barriers',
      solution: 'Native English speakers fluent in Mandarin for clear communication.',
    },
    {
      title: 'Quality Concerns',
      solution: 'Professional QC inspections at every production stage.',
    },
    {
      title: 'Supplier Reliability',
      solution: 'Rigorous factory verification and ongoing monitoring.',
    },
    {
      title: 'Shipping Complexities',
      solution: 'Complete logistics support from factory to your door.',
    },
  ];

  const trustPoints = [
    { icon: Shield, value: '500+', label: 'Verified Suppliers' },
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: ClipboardCheck, value: '5,000+', label: 'Inspections Done' },
    { icon: Clock, value: '12+', label: 'Years Experience' },
  ];

  const caseStudies = [
    {
      client: 'European Retail Chain',
      industry: 'Home Decor',
      challenge: 'Needed to source 20,000 ceramic planters from verified factories within 3 months.',
      solution: 'We identified 5 verified manufacturers, conducted factory audits, and managed production with 3 quality checkpoints.',
      result: 'Delivered on time with 99.2% quality pass rate. Client saved 35% compared to previous supplier.',
      image: 'ceramic planters factory inspection',
    },
    {
      client: 'North American E-commerce Brand',
      industry: 'Electronics Accessories',
      challenge: 'Required USB-C cables with strict quality standards and competitive pricing.',
      solution: 'Factory verification revealed 2 of 8 suppliers had quality issues. We negotiated with verified factories and implemented inline QC.',
      result: 'Zero customer complaints in first year. 40% cost reduction achieved.',
      image: 'electronics cable manufacturing',
    },
  ];

  const faqs = [
    {
      question: 'What minimum order quantities do you work with?',
      answer: 'MOQs vary by product and factory. We work with factories that offer MOQs starting from 500-1000 units for most products. For some categories like custom packaging, we can find suppliers with MOQs as low as 100 units.',
    },
    {
      question: 'How do you verify factories are legitimate?',
      answer: 'We conduct on-site audits that verify business licenses, production capacity, machinery, employee count, quality management systems, and relevant certifications. We also check references and historical performance.',
    },
    {
      question: 'What does quality inspection include?',
      answer: 'Our QC inspections cover product specifications, materials, workmanship, packaging, labeling, and functionality testing. We offer pre-production, during-production, and pre-shipment inspections with detailed reports and photos.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typical timelines: Supplier identification takes 5-10 business days. Factory verification adds 3-5 days. Production time varies by product (usually 2-8 weeks). We provide estimated timelines upfront based on your requirements.',
    },
    {
      question: 'What are your service fees?',
      answer: 'Our pricing is based on the scope of services required. We offer transparent quotes with no hidden fees. Contact us for a custom quote based on your specific sourcing needs.',
    },
    {
      question: 'Do you handle shipping and logistics?',
      answer: 'Yes, we coordinate all shipping aspects including documentation, customs clearance, freight forwarding, and tracking. We work with reliable shipping partners to ensure safe and timely delivery.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        product: '',
        quantity: '',
        message: '',
      });
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8e] to-[#1e3a5f] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-[#e67e22] rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Trusted by 200+ Global Buyers</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
                Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping. We handle the complexity so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all border border-white/20"
                >
                  See How It Works
                </Link>
              </div>
              <div className="flex items-center gap-8 mt-10 pt-10 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm text-gray-300">Verified Suppliers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">99.5%</div>
                  <div className="text-sm text-gray-300">Quality Pass Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">35%</div>
                  <div className="text-sm text-gray-300">Avg. Cost Savings</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#e67e22]/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#e67e22] rounded-xl flex items-center justify-center">
                    <Factory size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Factory Verification</h3>
                    <p className="text-sm text-gray-300">On-site audit completed</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle size={18} className="text-green-400" />
                    <span>Business license verified</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle size={18} className="text-green-400" />
                    <span>Production capacity confirmed</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle size={18} className="text-green-400" />
                    <span>Quality management in place</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle size={18} className="text-green-400" />
                    <span>Certifications validated</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 bg-[#1e3a5f] rounded-full border-2 border-white flex items-center justify-center text-xs">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-300">200+ clients trust us</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#e67e22] font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mt-3 mb-4">
              End-to-End Sourcing Solutions
            </h2>
            <p className="text-[#4a5568] text-lg">
              From supplier discovery to final delivery, we manage every step of your China sourcing journey with professionalism and transparency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-[#f7fafc] hover:bg-[#1e3a5f] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-[#1e3a5f] group-hover:bg-[#e67e22] rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1e3a5f] group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#4a5568] group-hover:text-gray-300 transition-colors leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#e67e22] font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mt-3 mb-4">
              Simple, Transparent Process
            </h2>
            <p className="text-[#4a5568] text-lg">
              Our proven 5-step process ensures your sourcing project runs smoothly from start to finish.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#e2e8f0] -translate-y-1/2"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-6 shadow-lg relative z-10">
                    <div className="w-12 h-12 bg-[#e67e22] rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#4a5568] text-sm leading-relaxed">
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
              className="inline-flex items-center gap-2 text-[#e67e22] hover:text-[#d35400] font-semibold transition-colors"
            >
              Learn more about our process
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#e67e22] font-semibold text-sm uppercase tracking-wider">Products We Source</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mt-3 mb-4">
              Wide Range of Product Categories
            </h2>
            <p className="text-[#4a5568] text-lg">
              We have established relationships with manufacturers across diverse industries. Whatever you need, we can help you find the right supplier.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link
                to={`/products#${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                key={index}
                className="bg-[#f7fafc] hover:bg-[#1e3a5f] rounded-xl p-6 text-center transition-all duration-300 group hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="font-semibold text-[#1e3a5f] group-hover:text-white transition-colors text-sm">
                  {product.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-20 bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#e67e22] font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">
              We Solve Your Sourcing Challenges
            </h2>
            <p className="text-gray-300 text-lg">
              Sourcing from China comes with challenges. We help you navigate them with expertise and reliability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-[#e67e22] rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                <div className="h-px bg-white/20 my-3"></div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {problem.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#fef7f0] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <point.icon size={32} className="text-[#e67e22]" />
                </div>
                <div className="text-4xl font-bold text-[#1e3a5f] mb-2">{point.value}</div>
                <div className="text-[#4a5568]">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#e67e22] font-semibold text-sm uppercase tracking-wider">Case Studies</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mt-3 mb-4">
              Success Stories from Our Clients
            </h2>
            <p className="text-[#4a5568] text-lg">
              See how we've helped businesses like yours overcome sourcing challenges and achieve their goals.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] flex items-center justify-center">
                  <Factory size={64} className="text-white/50" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#fef7f0] text-[#e67e22] text-xs font-semibold px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1e3a5f] mb-2">{study.client}</h3>
                  <div className="space-y-4 mt-6">
                    <div>
                      <h4 className="text-sm font-semibold text-[#4a5568] uppercase tracking-wider mb-1">Challenge</h4>
                      <p className="text-[#1e3a5f] text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#4a5568] uppercase tracking-wider mb-1">Our Solution</h4>
                      <p className="text-[#1e3a5f] text-sm">{study.solution}</p>
                    </div>
                    <div className="bg-[#f7fafc] rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-[#27ae60] uppercase tracking-wider mb-1">Result</h4>
                      <p className="text-[#1e3a5f] text-sm font-medium">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#2d5a8e] text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              View All Case Studies
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#e67e22] font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#4a5568] text-lg">
              Find answers to common questions about our sourcing services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#e2e8f0] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-[#f7fafc] transition-colors"
                >
                  <span className="font-semibold text-[#1e3a5f] pr-4">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#4a5568] flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 bg-white">
                    <p className="text-[#4a5568] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8e] to-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Start Your Sourcing Project?
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Get a free, no-obligation quote for your sourcing needs. We'll respond within 24 hours with a tailored solution.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-[#e67e22]" />
                  <span>Free supplier matching</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-[#e67e22]" />
                  <span>No upfront costs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={24} className="text-[#e67e22]" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-6">Get Your Free Quote</h3>
              {formStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#1e3a5f] mb-2">Thank You!</h4>
                  <p className="text-[#4a5568]">We've received your inquiry and will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#4a5568] mb-1">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent text-[#1e3a5f]"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#4a5568] mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent text-[#1e3a5f]"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#4a5568] mb-1">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent text-[#1e3a5f]"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#4a5568] mb-1">Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent text-[#1e3a5f]"
                        placeholder="e.g., 5,000 units"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4a5568] mb-1">Product Details *</label>
                    <input
                      type="text"
                      name="product"
                      required
                      value={formData.product}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent text-[#1e3a5f]"
                      placeholder="What product do you need?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#4a5568] mb-1">Message</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent text-[#1e3a5f] resize-none"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-[#e67e22] hover:bg-[#d35400] disabled:bg-[#e67e22]/50 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    {formStatus === 'submitting' ? (
                      <>Processing...</>
                    ) : (
                      <>
                        Get Your Free Quote
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-[#718096] text-center">
                    By submitting, you agree to our Privacy Policy. We'll never spam you.
                  </p>
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