import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Shield, CheckCircle, Truck, FileCheck, Users, 
  ArrowRight, Star, Globe, Clock, Award, TrendingUp,
  Factory, Package, BarChart3, Headphones, Zap, Target,
  ChevronRight, MessageCircle, Phone, Mail
} from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-brand-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-brand-700/50 rounded-full mb-6">
                <Globe className="w-4 h-4 mr-2 text-brand-300" />
                <span className="text-sm text-brand-200">Trusted by 500+ Global Buyers</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                China Sourcing Agent for 
                <span className="text-brand-300"> Global Buyers</span>
              </h1>
              
              <p className="text-lg md:text-xl text-brand-200 mb-8 leading-relaxed">
                Find reliable suppliers, verify factories, inspect quality, and coordinate shipping — all with one trusted partner in China.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-brand-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-50 transition-colors shadow-lg flex items-center justify-center"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  See How It Works
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap gap-6 items-center">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                  <span className="text-sm text-brand-200">Verified Suppliers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                  <span className="text-sm text-brand-200">Quality Inspections</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                  <span className="text-sm text-brand-200">Door-to-Door Shipping</span>
                </div>
              </div>
            </div>

            {/* Hero visual - stats card */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-bold text-white">500+</div>
                      <div className="text-sm text-brand-200 mt-1">Projects Completed</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-bold text-white">50+</div>
                      <div className="text-sm text-brand-200 mt-1">Countries Served</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-bold text-white">2000+</div>
                      <div className="text-sm text-brand-200 mt-1">Suppliers Verified</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-bold text-white">98%</div>
                      <div className="text-sm text-brand-200 mt-1">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="font-semibold text-sm">ISO 9001 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-wide">
            Trusted by leading brands worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {['GlobalTech', 'EuroTrade', 'AsiaImport', 'PacificGoods', 'NordicSupply', 'MidEastTraders'].map((brand) => (
              <div key={brand} className="text-gray-400 font-bold text-xl md:text-2xl">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Complete Sourcing Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From finding the right supplier to delivering products to your door, we handle every step of the sourcing process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Supplier Discovery',
                desc: 'We identify and vet potential suppliers based on your specific requirements, budget, and quality standards.',
                color: 'bg-blue-50 text-blue-600'
              },
              {
                icon: Shield,
                title: 'Factory Verification',
                desc: 'On-site factory audits to verify legitimacy, production capacity, certifications, and compliance with international standards.',
                color: 'bg-emerald-50 text-emerald-600'
              },
              {
                icon: CheckCircle,
                title: 'Quality Control',
                desc: 'Pre-production, in-line, and pre-shipment inspections to ensure your products meet specifications before they leave China.',
                color: 'bg-purple-50 text-purple-600'
              },
              {
                icon: BarChart3,
                title: 'Production Monitoring',
                desc: 'Regular progress updates and on-site oversight to keep your orders on schedule and within quality parameters.',
                color: 'bg-amber-50 text-amber-600'
              },
              {
                icon: Truck,
                title: 'Shipping Coordination',
                desc: 'End-to-end logistics management including customs clearance, documentation, and door-to-door delivery.',
                color: 'bg-rose-50 text-rose-600'
              },
              {
                icon: Headphones,
                title: 'Ongoing Support',
                desc: 'Dedicated account manager, regular reporting, and responsive communication throughout the entire process.',
                color: 'bg-indigo-50 text-indigo-600'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-brand-800 font-semibold hover:text-brand-900 transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Process */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wide">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple, transparent process designed to save you time, reduce risk, and ensure quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Tell Us What You Need',
                desc: 'Share your product requirements, target price, quantity, and timeline. We review and provide initial guidance.',
                icon: MessageCircle
              },
              {
                step: '02',
                title: 'We Find & Verify Suppliers',
                desc: 'Our team identifies qualified suppliers, conducts factory audits, and presents you with the best options.',
                icon: Factory
              },
              {
                step: '03',
                title: 'Sample & Quality Check',
                desc: 'We arrange samples, conduct inspections, and ensure products meet your specifications before mass production.',
                icon: FileCheck
              },
              {
                step: '04',
                title: 'Production & Shipping',
                desc: 'We monitor production, perform final inspections, and coordinate shipping directly to your location.',
                icon: Truck
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl border border-gray-200 h-full">
                  <div className="text-5xl font-bold text-brand-100 mb-4">{step.step}</div>
                  <div className="w-12 h-12 bg-brand-800 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-brand-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-brand-800 font-semibold hover:text-brand-900 transition-colors"
            >
              Learn More About Our Process
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wide">Product Categories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We source a wide range of products across multiple industries, always from verified and reliable manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Electronics', icon: '🔌', count: '500+ suppliers' },
              { name: 'Home & Garden', icon: '🏡', count: '300+ suppliers' },
              { name: 'Apparel & Textiles', icon: '👔', count: '400+ suppliers' },
              { name: 'Machinery', icon: '⚙️', count: '200+ suppliers' },
              { name: 'Auto Parts', icon: '🚗', count: '250+ suppliers' },
              { name: 'Building Materials', icon: '🏗️', count: '180+ suppliers' },
              { name: 'Beauty & Health', icon: '💄', count: '350+ suppliers' },
              { name: 'Promotional Items', icon: '🎁', count: '280+ suppliers' }
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200 cursor-pointer group">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-brand-800 transition-colors">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.count}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-brand-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-900 transition-colors inline-flex items-center"
            >
              View All Product Categories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 md:py-28 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-300 font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Problems We Solve for Global Buyers
            </h2>
            <p className="text-lg text-brand-200 max-w-3xl mx-auto">
              Sourcing from China comes with challenges. We help you overcome them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                problem: 'Unreliable Suppliers',
                solution: 'We verify every supplier through on-site factory audits, checking licenses, production capacity, and business history before recommending them.',
                icon: Shield
              },
              {
                problem: 'Quality Issues',
                solution: 'Our QC team conducts inspections at every stage — pre-production, during production, and before shipment — to catch defects early.',
                icon: CheckCircle
              },
              {
                problem: 'Communication Barriers',
                solution: 'Our bilingual team bridges the language gap, ensuring clear communication between you and Chinese manufacturers.',
                icon: Headphones
              },
              {
                problem: 'Shipping Complexities',
                solution: 'We handle all logistics, customs documentation, and freight forwarding to ensure smooth delivery to your destination.',
                icon: Truck
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 p-6 bg-brand-800/50 rounded-xl border border-brand-700">
                <div className="w-14 h-14 bg-brand-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-brand-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.problem}</h3>
                  <p className="text-brand-200 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wide">Our Credentials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Why Global Buyers Trust Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'ISO 9001 Certified',
                desc: 'Internationally recognized quality management standards.'
              },
              {
                icon: Clock,
                title: '10+ Years Experience',
                desc: 'Decade of expertise in China sourcing and supply chain management.'
              },
              {
                icon: Users,
                title: 'Local Team in China',
                desc: 'Based in Guangzhou with staff across major manufacturing regions.'
              },
              {
                icon: Globe,
                title: '50+ Countries Served',
                desc: 'Clients across North America, Europe, Australia, and the Middle East.'
              }
            ].map((trust, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <trust.icon className="w-8 h-8 text-brand-800" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{trust.title}</h3>
                <p className="text-gray-600 text-sm">{trust.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wide">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses like yours source quality products from China.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'US Retailer Reduces Costs by 35%',
                category: 'Consumer Electronics',
                desc: 'Helped a US-based retailer source custom Bluetooth speakers from verified manufacturers, reducing costs while maintaining quality.',
                result: '35% cost reduction'
              },
              {
                title: 'European Brand Launches New Product Line',
                category: 'Home & Garden',
                desc: 'Managed the entire sourcing process for a European home décor brand, from design to delivery in 12 weeks.',
                result: '12-week turnaround'
              },
              {
                title: 'Australian Importer Scales Operations',
                category: 'Apparel',
                desc: 'Built a reliable supplier network for an Australian fashion brand, enabling 3x production scaling within one year.',
                result: '3x production scale'
              }
            ].map((study, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-brand-800">{study.result}</div>
                    <div className="text-sm text-brand-600 mt-1">Achieved Result</div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide">{study.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3">{study.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{study.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-brand-800 font-semibold hover:text-brand-900 transition-colors"
            >
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wide">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'How much does your sourcing service cost?',
                a: 'Our fees depend on the scope of services required. We offer transparent pricing with no hidden fees. Contact us for a free quote based on your specific needs.'
              },
              {
                q: 'What is the minimum order quantity (MOQ)?',
                a: 'MOQs vary by product and supplier. We work with manufacturers who accommodate both small and large orders, and we negotiate favorable terms on your behalf.'
              },
              {
                q: 'How do you verify suppliers?',
                a: 'We conduct on-site factory audits checking business licenses, production capacity, quality certifications, worker conditions, and business history. Every supplier must pass our verification process.'
              },
              {
                q: 'How long does the sourcing process take?',
                a: 'Typically 2-4 weeks for supplier identification and verification, plus 2-8 weeks for production depending on the product complexity and order quantity.'
              },
              {
                q: 'Do you handle shipping and customs?',
                a: 'Yes, we provide end-to-end logistics including freight forwarding, customs clearance, and door-to-door delivery to your specified location.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-brand-800 to-brand-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Sourcing from China?
          </h2>
          <p className="text-lg text-brand-200 mb-8 max-w-2xl mx-auto">
            Get a free sourcing quote today. Tell us what you need, and our team will provide a detailed proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-50 transition-colors shadow-lg inline-flex items-center justify-center"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="mailto:info@ssourcingchina.com"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;