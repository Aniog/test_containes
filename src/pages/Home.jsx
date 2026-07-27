import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, CheckCircle, Factory, Truck, Search, ClipboardCheck, 
  Package, Users, Globe, Clock, ArrowRight, ChevronDown, ChevronUp,
  FileCheck, Building2, Headphones, Calendar, Star, Quote
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const stats = [
    { value: '10+', label: 'Years Experience', icon: Calendar },
    { value: '500+', label: 'Suppliers Verified', icon: Factory },
    { value: '35+', label: 'Countries Served', icon: Globe },
    { value: '5,000+', label: 'Orders Shipped', icon: Package },
  ];

  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify factory existence, licenses, production capacity, and business credibility before you commit.',
      href: '/services#verification'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Professional QC inspections at every production stage to ensure your products meet specifications.',
      href: '/services#inspection'
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular monitoring of your orders from production start to completion, keeping you informed.',
      href: '/services#production'
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination including customs clearance and last-mile delivery.',
      href: '/services#shipping'
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what products you need, quantities, and specifications.'
    },
    {
      number: '02',
      title: 'Supplier Matching',
      description: 'We identify and verify suitable factories from our network.'
    },
    {
      number: '03',
      title: 'Sample & Negotiation',
      description: 'We arrange samples, help negotiate terms, and secure best pricing.'
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'Your order enters production with regular quality checkpoints.'
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We handle all logistics from factory to your doorstep.'
    },
  ];

  const productCategories = [
    { name: 'Electronics & Components', examples: 'PCB, displays, consumer electronics' },
    { name: 'Machinery & Equipment', examples: 'Industrial equipment, tools, spare parts' },
    { name: 'Textiles & Apparel', examples: 'Fabrics, garments, accessories' },
    { name: 'Home & Garden', examples: 'Furniture, decor, outdoor equipment' },
    { name: 'Packaging & Printing', examples: 'Boxes, labels, promotional materials' },
    { name: 'Sports & Recreation', examples: 'Fitness equipment, outdoor gear' },
  ];

  const problems = [
    {
      title: 'Language Barriers',
      description: 'Direct communication with Chinese suppliers can be challenging. We bridge the gap with professional translations and clear negotiations.',
      icon: Users
    },
    {
      title: 'Quality Uncertainty',
      description: "Without local oversight, product quality can vary significantly. Our inspections catch issues before shipment.",
      icon: Shield
    },
    {
      title: 'Supplier Reliability',
      description: 'Verifying if a supplier is legitimate and capable is difficult from abroad. We conduct thorough factory audits.',
      icon: FileCheck
    },
    {
      title: 'Complex Logistics',
      description: 'International shipping involves customs, documentation, and coordination. We handle all the complexity.',
      icon: Truck
    },
  ];

  const caseStudies = [
    {
      client: 'UK Electronics Retailer',
      industry: 'Consumer Electronics',
      challenge: 'Needed reliable monthly shipments of 5,000+ units but had quality issues with previous suppliers.',
      solution: 'SSourcing China verified 3 factories, implemented a strict QC protocol, and established a seamless monthly delivery schedule.',
      result: 'Quality issues reduced by 94%, on-time delivery rate: 99.2%',
    },
    {
      client: 'German Fitness Brand',
      industry: 'Sports Equipment',
      challenge: 'Launching a new product line required finding factories willing to handle MOQs of 200 units.',
      solution: 'We identified and negotiated with 5 factories, coordinated samples, and established quality standards.',
      result: 'Successfully launched 12 products, 30% below previous sourcing costs',
    },
  ];

  const faqs = [
    {
      question: 'What is the minimum order quantity (MOQ) you work with?',
      answer: "We work with factories across all MOQ ranges. While some manufacturers require 1,000+ units, we've built relationships with suppliers who accept orders starting at 100-200 units. MOQ depends on product complexity and factory type."
    },
    {
      question: 'How do you verify factory legitimacy?',
      answer: 'Our verification process includes: business license verification, factory实地考察 (on-site visit), production capacity assessment, financial credibility check, and reference verification from existing clients.'
    },
    {
      question: 'What does quality inspection include?',
      answer: 'Standard inspections cover: product外观检查 (visual inspection), dimension verification, functionality testing, packaging check, and labeling verification. We offer pre-shipment inspection (PSI), during-production inspection (DPI), and initial production inspection (IPI).'
    },
    {
      question: 'How long does typical sourcing take?',
      answer: "Timeline varies by product complexity. Simple product sourcing with sample approval typically takes 3-6 weeks. Complex products requiring factory development may take 2-3 months. We'll provide a detailed timeline estimate after understanding your requirements."
    },
    {
      question: 'What are your fees and how are they structured?',
      answer: "We offer transparent, value-based pricing. Most clients pay a success fee based on order value (typically 3-8%), plus service fees for verification, inspection, and logistics. We provide a detailed quote after your initial consultation—no hidden costs."
    },
    {
      question: 'Do you handle shipping and customs?',
      answer: 'Yes, we coordinate the entire logistics process including factory pickup, export customs, international shipping (sea or air freight), import customs clearance, and delivery to your specified location. We work with established freight forwarders to ensure competitive rates.'
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            data-strk-bg-id="hero-bg-home-1a2b3c"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-800/50 rounded-full text-blue-200 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Trusted by 500+ Global Importers
              </div>
              <h1 id="hero-title" className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="hero-subtitle" className="text-lg lg:text-xl text-slate-300 mb-8 max-w-xl">
                Find reliable suppliers, verify factories, inspect quality, and coordinate 
                seamless shipping—all with one trusted partner based in Shenzhen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  How It Works
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">SSourcing China</p>
                    <p className="text-sm text-slate-400">Your Local Partner</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Factory Verification</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Quality Inspection</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Production Monitoring</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Logistics Coordination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-4">
                  <stat.icon className="w-7 h-7 text-blue-700" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Full-Stack Sourcing Services
            </h2>
            <p className="text-lg text-slate-600">
              From supplier discovery to final delivery, we handle every step of your China sourcing journey with professionalism and transparency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              How Our Sourcing Process Works
            </h2>
            <p className="text-lg text-slate-600">
              A clear, structured approach to help you source products from China with confidence and minimal risk.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-50 rounded-xl p-6 text-center h-full border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Full Process
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-slate-300">
              We have established relationships with factories across diverse industries, ready to help you source virtually any product category.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-slate-400">{category.examples}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              View All Categories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                We Solve Your China Sourcing Challenges
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Sourcing from China independently comes with significant risks. We help you navigate these challenges with local expertise and professional oversight.
              </p>
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <problem.icon className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{problem.title}</h3>
                      <p className="text-sm text-slate-600">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-blue-100 rounded-2xl" />
              <div className="relative bg-gradient-to-br from-blue-50 to-slate-100 rounded-2xl p-8 border border-blue-100">
                <Quote className="w-10 h-10 text-blue-300 mb-4" />
                <blockquote className="text-lg text-slate-700 italic mb-6">
                  "SSourcing China transformed our supply chain. What used to take 3 months of back-and-forth now takes weeks, with much better quality consistency."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-semibold">MK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Michael K.</p>
                    <p className="text-sm text-slate-500">CEO, TechStart Imports (USA)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-slate-600">
              See how we've helped businesses like yours overcome sourcing challenges and build reliable supply chains.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{study.client}</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Challenge</p>
                    <p className="text-sm text-slate-600">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Solution</p>
                    <p className="text-sm text-slate-600">{study.solution}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-xs font-semibold text-green-700 uppercase mb-1">Result</p>
                    <p className="text-sm text-green-800 font-medium">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions about our China sourcing services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 pt-0 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your China Sourcing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your sourcing needs. Our team will respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="mailto:info@ssourcingchina.com"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              info@ssourcingchina.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
