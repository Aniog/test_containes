import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, Shield, ClipboardCheck, Truck, Package,
  AlertTriangle, CheckCircle, ArrowRight, Star,
  Users, Clock, Award, ChevronDown, ChevronUp,
  Factory, FileText, Globe, TrendingUp
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We find and evaluate reliable manufacturers across China based on your product requirements, budget, and quality standards.',
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to verify business licenses, production capacity, quality management systems, and working conditions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular progress monitoring and communication with factories to keep your orders on schedule.',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery tracking.',
  },
  {
    icon: Package,
    title: 'Sample Management',
    description: 'We collect, evaluate, and ship product samples from multiple suppliers so you can compare before committing.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Submit Your Requirements',
    description: 'Tell us what you need — product details, quantities, target price, and quality standards.',
  },
  {
    step: '02',
    title: 'Supplier Matching',
    description: 'We identify and shortlist qualified manufacturers from our verified supplier network.',
  },
  {
    step: '03',
    title: 'Quotation & Sampling',
    description: 'Receive competitive quotes and product samples for your review and approval.',
  },
  {
    step: '04',
    title: 'Production Monitoring',
    description: 'We track manufacturing progress and conduct quality checks at key stages.',
  },
  {
    step: '05',
    title: 'Final Inspection',
    description: 'A thorough pre-shipment inspection ensures every order meets your requirements.',
  },
  {
    step: '06',
    title: 'Shipping & Delivery',
    description: 'We handle logistics, customs documentation, and coordinate delivery to your destination.',
  },
];

const productCategories = [
  { title: 'Electronics & Components', description: 'Consumer electronics, PCBs, cables, and accessories' },
  { title: 'Home & Garden', description: 'Furniture, decor, kitchenware, and outdoor products' },
  { title: 'Apparel & Textiles', description: 'Clothing, fabrics, accessories, and custom garments' },
  { title: 'Machinery & Industrial', description: 'Manufacturing equipment, tools, and industrial parts' },
  { title: 'Packaging & Printing', description: 'Custom packaging, labels, boxes, and printed materials' },
  { title: 'Beauty & Personal Care', description: 'Cosmetics, skincare, haircare, and beauty tools' },
];

const problems = [
  {
    icon: AlertTriangle,
    title: 'Unreliable Suppliers',
    description: 'We verify every factory before you engage, reducing the risk of fraud and poor quality.',
  },
  {
    icon: FileText,
    title: 'Language & Communication Barriers',
    description: 'Our bilingual team handles all communication, ensuring clear and accurate exchanges.',
  },
  {
    icon: Clock,
    title: 'Production Delays',
    description: 'Regular follow-ups and progress reports keep your orders on track and on time.',
  },
  {
    icon: TrendingUp,
    title: 'Quality Inconsistency',
    description: 'Structured inspection processes catch defects before products leave the factory.',
  },
];

const trustPoints = [
  { icon: Users, stat: '500+', label: 'Global Clients Served' },
  { icon: Factory, stat: '2,000+', label: 'Verified Suppliers' },
  { icon: Award, stat: '12+', label: 'Years of Experience' },
  { icon: Globe, stat: '50+', label: 'Countries Served' },
];

const caseStudies = [
  {
    title: 'Electronics Manufacturer for US Retailer',
    industry: 'Consumer Electronics',
    challenge: 'A US retailer needed a reliable manufacturer for Bluetooth speakers with strict quality requirements.',
    solution: 'We identified 3 qualified factories, conducted on-site audits, and managed the entire production process.',
    result: 'Delivered 50,000 units on time with a 98.5% pass rate on quality inspection.',
  },
  {
    title: 'Custom Packaging for European Brand',
    industry: 'Packaging',
    challenge: 'A European cosmetics brand needed custom packaging with specific material and printing requirements.',
    solution: 'We sourced 5 packaging suppliers, coordinated sample development, and managed quality control.',
    result: 'Reduced packaging costs by 30% while meeting all quality and sustainability standards.',
  },
  {
    title: 'Furniture Sourcing for Australian Distributor',
    industry: 'Home & Garden',
    challenge: 'An Australian distributor needed a furniture supplier capable of handling large-volume orders.',
    solution: 'We verified factory capacity, negotiated pricing, and implemented a multi-stage inspection process.',
    result: 'Successfully delivered 3 container loads with zero quality complaints from end customers.',
  },
];

const faqs = [
  {
    question: 'How do you find and verify suppliers?',
    answer: 'We use a combination of online research, industry databases, trade show contacts, and on-site factory audits. Every supplier goes through a verification process that includes business license checks, production capacity assessment, and quality management system evaluation.',
  },
  {
    question: 'What are your service fees?',
    answer: 'Our fees depend on the scope and complexity of your sourcing project. We offer transparent pricing with no hidden costs. Contact us for a free quote tailored to your specific requirements.',
  },
  {
    question: 'Can you handle small order quantities?',
    answer: 'Yes, we work with buyers of all sizes. While some factories have minimum order quantities, we can often negotiate lower MOQs or find suppliers who accommodate smaller orders.',
  },
  {
    question: 'How do you ensure product quality?',
    answer: 'We implement a multi-stage quality control process including pre-production sample approval, during-production inspections, and final pre-shipment inspections. All inspections follow internationally recognized AQL standards.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we provide end-to-end logistics support including freight forwarding, customs documentation, and delivery coordination. We work with trusted logistics partners to ensure smooth shipping.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Typical sourcing timelines range from 2-4 weeks for supplier identification and sampling, plus production time which varies by product. We provide detailed timelines for each project.',
  },
];

export default function HomePage() {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-primary-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-1a2b3c"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping — all from one trusted partner in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg text-lg transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg text-lg transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustPoints.map((point, i) => (
              <div key={i} className="text-center">
                <point.icon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary-900">{point.stat}</div>
                <div className="text-sm text-gray-500 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Our Sourcing Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end sourcing support to help you buy from China with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
              View all services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">How Our Sourcing Process Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A clear, step-by-step process from your initial inquiry to final delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-primary-50 rounded-xl p-6 lg:p-8 h-full">
                  <div className="text-4xl font-bold text-primary-200 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
              Learn more about our process <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Products We Source</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We source a wide range of products across multiple industries from verified Chinese manufacturers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {productCategories.map((cat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{cat.title}</h3>
                <p className="text-gray-600">{cat.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
              See all product categories <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Problems We Solve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sourcing from China can be challenging. We help you avoid common pitfalls.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {problems.map((problem, i) => (
              <div key={i} className="flex gap-4 bg-gray-50 rounded-xl p-6 lg:p-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">{problem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real examples of how we've helped global buyers source successfully from China.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((cs, i) => (
              <div key={i} className="bg-primary-800 rounded-xl p-6 lg:p-8">
                <div className="text-sm text-accent-500 font-semibold mb-3">{cs.industry}</div>
                <h3 className="text-xl font-semibold mb-4">{cs.title}</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <p><strong className="text-white">Challenge:</strong> {cs.challenge}</p>
                  <p><strong className="text-white">Solution:</strong> {cs.solution}</p>
                  <p><strong className="text-white">Result:</strong> {cs.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center text-accent-500 hover:text-accent-400 font-semibold">
              View all case studies <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Common questions about our sourcing services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-primary-900 pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Ready to Source from China?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we'll get back to you within 24 hours with a free, no-obligation quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
