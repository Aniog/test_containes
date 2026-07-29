import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, CheckCircle, Users, Package, Truck, Search, 
  Building2, ClipboardCheck, Factory, Ship, ArrowRight,
  ChevronDown, ChevronUp, Star, Quote, MapPin, Globe, 
  Award, Clock, Phone, Mail, MessageSquare, FileText,
  BarChart3, Target, Lightbulb, AlertTriangle, SearchCheck
} from 'lucide-react';

const Home = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-blue-800">Trusted by 500+ Global Buyers</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                China Sourcing Agent for{' '}
                <span className="text-blue-600">Global Buyers</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                Find reliable suppliers, verify factories, inspect quality, follow production, 
                and coordinate shipping — all with one trusted partner in China.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-600/25"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors duration-200"
                >
                  See How It Works
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-gray-900">12+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-500">Happy Clients</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-500">Countries Served</div>
                </div>
              </div>
            </div>

            {/* Hero Image/Visual */}
            <div className="relative animate-fade-in delay-200 hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl transform rotate-2"></div>
                <div className="bg-gray-100 rounded-2xl p-8 relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <Factory className="w-8 h-8 text-blue-600 mb-2" />
                      <p className="text-sm font-medium text-gray-900">Factory Verification</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <ClipboardCheck className="w-8 h-8 text-green-600 mb-2" />
                      <p className="text-sm font-medium text-gray-900">Quality Inspection</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <Package className="w-8 h-8 text-orange-500 mb-2" />
                      <p className="text-sm font-medium text-gray-900">Production Follow-up</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <Ship className="w-8 h-8 text-purple-600 mb-2" />
                      <p className="text-sm font-medium text-gray-900">Shipping & Logistics</p>
                    </div>
                  </div>
                  <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">End-to-End Solution</p>
                        <p className="text-sm text-blue-100">From search to delivery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Verified Suppliers Only</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">ISO 9001 Certified QC</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Global Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">No Win, No Fee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              Common Challenges
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sourcing from China Can Be Complex
            </h2>
            <p className="text-lg text-gray-600">
              We understand the challenges overseas buyers face. Here's how we help solve them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: SearchCheck,
                title: 'Finding Reliable Suppliers',
                description: 'Endless searches, unreliable sources, and unverifiable claims. We pre-vet suppliers before introducing them to you.',
                color: 'blue'
              },
              {
                icon: AlertTriangle,
                title: 'Factory Verification',
                description: 'Worried about middlemen posing as factories? We physically verify every facility and confirm production capabilities.',
                color: 'red'
              },
              {
                icon: ClipboardCheck,
                title: 'Quality Control',
                description: 'Concerned about product quality? Our QC inspectors ensure every shipment meets your specifications.',
                color: 'green'
              },
              {
                icon: Lightbulb,
                title: 'Communication Barriers',
                description: 'Language and cultural differences slowing you down? We bridge the gap with professional interpretation.',
                color: 'yellow'
              },
              {
                icon: BarChart3,
                title: 'Price Negotiation',
                description: 'Uncertain if you\'re getting fair prices? Our local presence ensures competitive rates without compromising quality.',
                color: 'purple'
              },
              {
                icon: Truck,
                title: 'Shipping Complexities',
                description: 'Navigating customs, documentation, and logistics is overwhelming. We handle all shipping arrangements.',
                color: 'orange'
              },
            ].map((problem, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  problem.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  problem.color === 'red' ? 'bg-red-100 text-red-600' :
                  problem.color === 'green' ? 'bg-green-100 text-green-600' :
                  problem.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                  problem.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  <problem.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600 text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Sourcing Solutions
            </h2>
            <p className="text-lg text-gray-600">
              From supplier discovery to final delivery, we manage every step of your China sourcing process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Supplier Discovery',
                description: 'We identify and pre-vet qualified manufacturers based on your product requirements, budget, and quality standards.',
                features: ['Industry-specific matching', 'Background checks', 'Capability assessment']
              },
              {
                icon: Building2,
                title: 'Factory Verification',
                description: 'Physical verification of factory existence, production capacity, certifications, and compliance with your standards.',
                features: ['On-site inspections', 'Document verification', 'Capacity analysis']
              },
              {
                icon: ClipboardCheck,
                title: 'Quality Inspection',
                description: 'Rigorous quality control at every production stage using internationally recognized inspection standards.',
                features: ['AQL sampling', 'Pre-shipment inspection', 'Loading supervision']
              },
              {
                icon: Package,
                title: 'Production Follow-up',
                description: 'Regular updates and monitoring throughout production to ensure timeline adherence and quality consistency.',
                features: ['Progress tracking', 'Issue resolution', 'Timeline management']
              },
              {
                icon: FileText,
                title: 'Sample Management',
                description: 'Coordinating sample requests, approvals, and modifications before mass production begins.',
                features: ['Sample coordination', 'Modification tracking', 'Approval documentation']
              },
              {
                icon: Ship,
                title: 'Shipping & Logistics',
                description: 'End-to-end logistics including freight forwarding, customs clearance, and door-to-door delivery.',
                features: ['Multi-modal shipping', 'Customs brokerage', 'Last-mile delivery']
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
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
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-sm font-medium rounded-full mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Simple 5-Step Process
            </h2>
            <p className="text-lg text-blue-100">
              From your initial inquiry to final delivery, we guide you through every step.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Submit Inquiry',
                description: 'Tell us what you need — product details, quantities, budget, and timeline.'
              },
              {
                step: '02',
                title: 'Supplier Matching',
                description: 'We find and pre-vet qualified factories that match your requirements.'
              },
              {
                step: '03',
                title: 'Verification & Negotiation',
                description: 'We verify factories, negotiate terms, and coordinate samples.'
              },
              {
                step: '04',
                title: 'Production & QC',
                description: 'Regular production monitoring and quality inspections.'
              },
              {
                step: '05',
                title: 'Shipping & Delivery',
                description: 'Safe packaging, shipping arrangements, and door-to-door delivery.'
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-blue-100">{item.description}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-white/50" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              Product Categories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-gray-600">
              We have deep expertise across a wide range of industries and product categories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Electronics', icon: '📱' },
              { name: 'Home & Garden', icon: '🏡' },
              { name: 'Apparel & Textiles', icon: '👕' },
              { name: 'Machinery', icon: '⚙️' },
              { name: 'Packaging', icon: '📦' },
              { name: 'Automotive Parts', icon: '🚗' },
              { name: 'Furniture', icon: '🪑' },
              { name: 'Sports & Outdoors', icon: '⚽' },
              { name: 'Toys & Gifts', icon: '🎁' },
              { name: 'Health & Beauty', icon: '💄' },
              { name: 'Industrial Parts', icon: '🔧' },
              { name: 'More Categories', icon: '➕' },
            ].map((product, index) => (
              <Link
                key={index}
                to="/products"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-200"
              >
                <span className="text-2xl">{product.icon}</span>
                <span className="font-medium text-gray-900">{product.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how we've helped businesses around the world source from China successfully.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "SSourcing China helped us find a reliable manufacturer for our eco-friendly packaging line. Their QC inspections caught issues early, saving us thousands.",
                author: "Michael Thompson",
                role: "CEO",
                company: "GreenPack Solutions, USA",
                flag: "🇺🇸",
                result: "Saved $45,000"
              },
              {
                quote: "After multiple failed attempts to source from Alibaba, we partnered with SSourcing China. Their factory verification and sample management made the process smooth.",
                author: "Sarah Chen",
                role: "Procurement Director",
                company: "TechGear Ltd, UK",
                flag: "🇬🇧",
                result: "30% Cost Reduction"
              },
              {
                quote: "The production follow-up service is exceptional. We always knew the status of our order and any issues were resolved quickly. Highly recommended!",
                author: "James Wilson",
                role: "Operations Manager",
                company: "HomeStyle Furniture, Australia",
                flag: "🇦🇺",
                result: "On-Time Delivery"
              },
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <Quote className="w-10 h-10 text-blue-100 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{caseStudy.quote}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                      {caseStudy.flag}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{caseStudy.author}</p>
                      <p className="text-sm text-gray-500">{caseStudy.role}, {caseStudy.company}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                    {caseStudy.result}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our sourcing services.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How do I start a sourcing inquiry?",
                answer: "Simply fill out our contact form with your product requirements, estimated quantities, budget range, and timeline. We'll respond within 24 hours with initial recommendations."
              },
              {
                question: "What are your service fees?",
                answer: "Our fee structure varies based on the services required. We offer competitive rates with transparent pricing. For most projects, we charge a success fee based on order value. Contact us for a personalized quote."
              },
              {
                question: "How do you verify factories?",
                answer: "Our team conducts on-site visits to verify factory existence, production capacity, equipment, workforce, certifications, and compliance. We provide detailed verification reports with photos and video."
              },
              {
                question: "What quality control standards do you follow?",
                answer: "We follow internationally recognized standards including AQL (Acceptable Quality Limit) sampling, and can adapt to specific client requirements or industry standards such as ISO, FDA, or CE requirements."
              },
              {
                question: "Do you handle shipping and logistics?",
                answer: "Yes, we offer complete logistics support including freight forwarding (sea, air, and land), customs clearance documentation, and can arrange door-to-door delivery to your location."
              },
              {
                question: "What if I'm not satisfied with the products?",
                answer: "Our QC inspections are designed to catch issues before shipment. However, if problems arise, we help resolve disputes with suppliers and coordinate returns or replacements as needed."
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-medium text-gray-900 text-left">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="p-5 pt-0 text-gray-600 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Source from China?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a free, no-obligation quote for your sourcing needs. 
                Our team will respond within 24 hours with tailored recommendations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">No upfront fees</p>
                    <p className="text-sm text-gray-400">Pay only when you succeed</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">24-hour response</p>
                    <p className="text-sm text-gray-400">Quick turnaround on inquiries</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Free consultation</p>
                    <p className="text-sm text-gray-400">Expert advice on your project</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Quote</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your Company Ltd"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
                    Product to Source *
                  </label>
                  <input
                    type="text"
                    id="product"
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="e.g., Electronic components, Packaging materials"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="e.g., 10,000 units"
                    />
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1month">Within 1 month</option>
                      <option value="3months">Within 3 months</option>
                      <option value="6months">Within 6 months</option>
                      <option value="exploring">Just exploring</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us more about your requirements, specifications, or any questions..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-600/25"
                >
                  Get a Free Sourcing Quote
                </button>
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
