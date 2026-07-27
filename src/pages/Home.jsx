import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, CheckCircle, DollarSign, Clock, Users, Ship,
  ArrowRight, Factory, ClipboardCheck, Package, Truck,
  Building2, HeadphonesIcon, Target, Award, Globe, BarChart3
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && ImageHelper) {
      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
      return cleanup;
    }
  }, []);

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Supplier Verification',
      description: 'We verify factory legitimacy, business licenses, production capacity, and certifications before recommending suppliers.',
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Quality Control',
      description: 'Professional QC inspections at production, pre-shipment, and during loading. Detailed reports with photos and findings.',
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Factory Audits',
      description: 'Comprehensive factory assessments covering compliance, working conditions, equipment, and production processes.',
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Production Follow-up',
      description: 'Regular updates on production progress, quality checks during manufacturing, and issue resolution.',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Shipping Coordination',
      description: 'FCL/LCL, air freight, and express. We handle documentation, customs clearance, and logistics.',
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: 'Sample Management',
      description: 'Sample sourcing, evaluation, and approval process management. Pre-production samples for your review.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what you need: product specifications, quantity, target price, and timeline.',
    },
    {
      number: '02',
      title: 'Supplier Matching',
      description: 'We identify and verify 3-5 suitable suppliers based on your requirements.',
    },
    {
      number: '03',
      title: 'Sample & Negotiation',
      description: 'We arrange samples, negotiate prices, and finalize terms with your selected supplier.',
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'We monitor production, conduct inspections, and ensure quality standards are met.',
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate shipping, handle documentation, and ensure timely delivery.',
    },
  ];

  const products = [
    { name: 'Electronics & Components', image: 'electronics' },
    { name: 'Textiles & Apparel', image: 'textile' },
    { name: 'Home Goods & Furniture', image: 'furniture' },
    { name: 'Machinery & Equipment', image: 'machinery' },
    { name: 'Packaging Materials', image: 'packaging' },
    { name: 'Industrial Parts', image: 'parts' },
  ];

  const problems = [
    {
      title: 'Language Barriers',
      description: 'We bridge communication gaps with fluent English and Mandarin speakers who understand your industry terminology.',
    },
    {
      title: 'Quality Risks',
      description: 'Our QC inspections catch issues before shipment, saving you from costly returns and reputation damage.',
    },
    {
      title: 'Supplier Scams',
      description: 'We verify every factory in person, checking licenses, facilities, and references before any engagement.',
    },
    {
      title: 'Hidden Costs',
      description: 'Transparent pricing with no surprise fees. We provide detailed cost breakdowns upfront.',
    },
  ];

  const trustPoints = [
    { value: '500+', label: 'Verified Suppliers' },
    { value: '50+', label: 'Countries Served' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Years Experience' },
  ];

  const faqs = [
    {
      question: 'What are your service fees?',
      answer: 'Our fees vary based on the services required. For supplier verification and coordination, we typically charge a percentage of the order value or a fixed project fee. Contact us for a personalized quote.',
    },
    {
      question: 'How do you verify factories?',
      answer: 'We conduct on-site visits to verify business licenses, factory facilities, production capacity, employee count, and certifications. We also check references and past client feedback.',
    },
    {
      question: 'Can you handle urgent orders?',
      answer: 'Yes, we can expedite the sourcing and QC process for urgent orders. Express shipping options are available. Contact us with your timeline.',
    },
    {
      question: 'What if quality issues are found during inspection?',
      answer: 'We document all issues with photos and detailed reports. We work with the factory to resolve problems before shipment or negotiate replacements/discounts.',
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#2d4a6f] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
                <Globe className="w-4 h-4 mr-2" />
                Trusted by 200+ Global Importers
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-xl text-[#94a3b8] mb-8 leading-relaxed">
                Find reliable suppliers, verify factories, ensure quality, and coordinate shipping. We handle the complexity so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1e3a5f] font-semibold rounded-lg hover:bg-[#f1f5f9] transition-all duration-200 hover:shadow-xl active:scale-[0.98]"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  How It Works
                </Link>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className="text-white/80 text-sm">Verified Factories Only</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-accent-400" />
                  <span className="text-white/80 text-sm">Quality Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-accent-400" />
                  <span className="text-white/80 text-sm">On-Time Delivery</span>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#1e3a5f]/50 rounded-full blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <Factory className="w-8 h-8 text-accent-400 mb-2" />
                    <p className="text-white font-semibold">Factory Visits</p>
                    <p className="text-white/60 text-sm">On-site verification</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <ClipboardCheck className="w-8 h-8 text-accent-400 mb-2" />
                    <p className="text-white font-semibold">QC Reports</p>
                    <p className="text-white/60 text-sm">Detailed with photos</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <Ship className="w-8 h-8 text-accent-400 mb-2" />
                    <p className="text-white font-semibold">Shipping</p>
                    <p className="text-white/60 text-sm">End-to-end logistics</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <HeadphonesIcon className="w-8 h-8 text-accent-400 mb-2" />
                    <p className="text-white font-semibold">Support</p>
                    <p className="text-white/60 text-sm">English speaking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">{stat.value}</div>
                <div className="text-sm text-[#64748b] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Services"
            subtitle="Comprehensive sourcing solutions to help you source products from China with confidence"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group hover:border-[#1e3a5f]/30">
                <div className="w-14 h-14 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center text-[#1e3a5f] mb-4 group-hover:bg-[#1e3a5f] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">{service.title}</h3>
                <p className="text-[#64748b] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How It Works"
            subtitle="A simple 5-step process to source products from verified Chinese suppliers"
          />
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#e2e8f0] -translate-y-1/2" />
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white border-2 border-[#1e3a5f]/20 rounded-2xl p-6 hover:border-[#1e3a5f] transition-colors">
                    <div className="w-12 h-12 bg-[#1e3a5f] rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-[#0f172a] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#64748b]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-secondary">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Products We Source"
            subtitle="We have extensive experience sourcing a wide range of products from China"
            light
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                to={`/products#${product.image}`}
                className="group relative bg-[#1e293b] rounded-xl overflow-hidden hover:bg-[#334155] transition-colors"
              >
                <div className="aspect-video bg-gradient-to-br from-[#1e3a5f]/30 to-[#0f172a] flex items-center justify-center">
                  {index === 0 && <Package className="w-16 h-16 text-white/20" />}
                  {index === 1 && <Factory className="w-16 h-16 text-white/20" />}
                  {index === 2 && <Building2 className="w-16 h-16 text-white/20" />}
                  {index === 3 && <BarChart3 className="w-16 h-16 text-white/20" />}
                  {index === 4 && <Package className="w-16 h-16 text-white/20" />}
                  {index === 5 && <BarChart3 className="w-16 h-16 text-white/20" />}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent-400 transition-colors">
                    {product.name}
                  </h3>
                  <div className="mt-2 flex items-center text-[#94a3b8] text-sm">
                    <span>View products</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                title="We Solve Your Sourcing Challenges"
                subtitle="Importing from China comes with risks. We help you navigate them."
                centered={false}
              />
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f172a] mb-1">{problem.title}</h3>
                      <p className="text-sm text-[#64748b]">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Get Help With Your Sourcing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Work With Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" />
                    <span>No upfront costs for supplier verification</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" />
                    <span>Native English and Mandarin speakers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" />
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" />
                    <span>Average 10+ years industry experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" />
                    <span>24/7 communication support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Success Stories"
            subtitle="See how we've helped businesses source products from China successfully"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Electronics Retailer Achieves 40% Cost Savings',
                category: 'Electronics',
                description: 'A US retailer sourced consumer electronics through us, saving 40% on costs while improving quality control.',
                savings: '40%',
              },
              {
                title: 'Furniture Brand Launches Successfully in 3 Months',
                category: 'Home Goods',
                description: 'From product design to doorstep delivery in 90 days. Full-service sourcing for a new furniture brand.',
                timeline: '3 months',
              },
              {
                title: 'Apparel Company Scales with Reliable Supply Chain',
                category: 'Textiles',
                description: 'We helped a growing fashion brand establish reliable, scalable production with consistent quality.',
                growth: '200%',
              },
            ].map((study, index) => (
              <Link
                key={index}
                to="/case-studies"
                className="card group hover:border-[#1e3a5f]/50"
              >
                <div className="aspect-video bg-gradient-to-br from-[#1e3a5f]/10 to-[#e2e8f0] rounded-lg mb-4 flex items-center justify-center">
                  <Award className="w-12 h-12 text-[#1e3a5f]/30" />
                </div>
                <span className="text-xs font-medium text-[#1e3a5f] bg-[#1e3a5f]/10 px-3 py-1 rounded-full">
                  {study.category}
                </span>
                <h3 className="text-lg font-semibold text-[#0f172a] mt-3 mb-2 group-hover:text-[#1e3a5f] transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-[#64748b] mb-4">{study.description}</p>
                <div className="flex items-center text-[#1e3a5f] font-medium text-sm">
                  Read case study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our sourcing services"
          />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl border border-[#e2e8f0] group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-[#0f172a] pr-4">{faq.question}</span>
                  <div className="w-6 h-6 flex-shrink-0 text-[#64748b] group-open:rotate-180 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-[#64748b]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start Your China Sourcing Journey?"
        subtitle="Get a free consultation and quote. No commitment required."
        buttonText="Get a Free Quote"
        buttonLink="/contact"
        features={[
          'Free supplier recommendations',
          'No upfront verification fees',
          'Detailed cost estimates',
        ]}
      />
    </div>
  );
};

export default Home;
