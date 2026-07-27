import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, ShieldCheck, Search, Factory, Package, Truck, 
  CheckCircle, Clock, DollarSign, Users, ArrowRight, Star,
  Quote, Phone, Mail, MessageSquare, Award, Target, Eye,
  BarChart3, FileCheck, Boxes, Container, Ship, Plane,
  BadgeCheck, TrendingUp, Zap, HeartHandshake
} from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Trusted by 500+ Global Buyers
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                China Sourcing Agent
                <span className="block text-accent-300">for Global Buyers</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
                Find reliable suppliers, verify factories, inspect quality, follow production, 
                and coordinate shipping — all from one trusted partner in China.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border border-white/30"
                >
                  Learn How It Works
                </Link>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-accent-300" />
                  <span className="text-sm">No hidden fees</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-accent-300" />
                  <span className="text-sm">Verified factories</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle className="w-5 h-5 text-accent-300" />
                  <span className="text-sm">Quality guaranteed</span>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <Factory className="w-8 h-8 text-accent-300 mx-auto mb-2" />
                    <p className="text-white font-semibold">1,000+</p>
                    <p className="text-white/70 text-xs">Verified Factories</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <Package className="w-8 h-8 text-accent-300 mx-auto mb-2" />
                    <p className="text-white font-semibold">50,000+</p>
                    <p className="text-white/70 text-xs">Products Sourced</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <Truck className="w-8 h-8 text-accent-300 mx-auto mb-2" />
                    <p className="text-white font-semibold">98%</p>
                    <p className="text-white/70 text-xs">On-time Delivery</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <Star className="w-8 h-8 text-accent-300 mx-auto mb-2" />
                    <p className="text-white font-semibold">4.9/5</p>
                    <p className="text-white/70 text-xs">Client Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-slate-600">
              <ShieldCheck className="w-5 h-5 text-brand-500" />
              <span className="text-sm font-medium">Verified Supplier Network</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle className="w-5 h-5 text-brand-500" />
              <span className="text-sm font-medium">ISO Certified Processes</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-5 h-5 text-brand-500" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <DollarSign className="w-5 h-5 text-brand-500" />
              <span className="text-sm font-medium">Cost Savings 15-30%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Complete Sourcing Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From finding the right supplier to delivering products to your door, we handle every step of the sourcing process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Supplier Identification',
                description: 'We find and vet potential suppliers based on your specific requirements, product specifications, and quality standards.',
                color: 'bg-blue-50 text-blue-600'
              },
              {
                icon: BadgeCheck,
                title: 'Factory Verification',
                description: 'On-site factory audits to verify legitimacy, production capacity, certifications, and compliance with international standards.',
                color: 'bg-green-50 text-green-600'
              },
              {
                icon: Eye,
                title: 'Quality Inspection',
                description: 'Pre-production, in-line, and pre-shipment inspections to ensure products meet your specifications before shipping.',
                color: 'bg-purple-50 text-purple-600'
              },
              {
                icon: BarChart3,
                title: 'Production Follow-up',
                description: 'Regular monitoring of production progress, timeline management, and proactive issue resolution to keep orders on track.',
                color: 'bg-orange-50 text-orange-600'
              },
              {
                icon: FileCheck,
                title: 'Sample Management',
                description: 'Coordinate product samples, provide detailed feedback, and iterate until specifications are perfectly met.',
                color: 'bg-pink-50 text-pink-600'
              },
              {
                icon: Truck,
                title: 'Shipping Coordination',
                description: 'End-to-end logistics management including customs clearance, documentation, and tracking from factory to destination.',
                color: 'bg-indigo-50 text-indigo-600'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 hover:border-brand-200 group">
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-brand-500 font-semibold hover:text-brand-600 transition-colors"
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Simple 4-Step Sourcing Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We make sourcing from China straightforward and transparent. Here's how we work with you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: MessageSquare,
                title: 'Tell Us What You Need',
                description: 'Share your product requirements, specifications, target price, and quantity. We respond within 24 hours.'
              },
              {
                step: '02',
                icon: Search,
                title: 'We Find & Verify Suppliers',
                description: 'Our team identifies and audits the best suppliers for your needs, providing detailed factory reports.'
              },
              {
                step: '03',
                icon: Eye,
                title: 'Quality Control & Production',
                description: 'We inspect samples, monitor production, and ensure quality at every stage before shipment.'
              },
              {
                step: '04',
                icon: Truck,
                title: 'Shipping & Delivery',
                description: 'We handle all logistics, customs, and documentation to deliver products to your destination.'
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 h-full border border-slate-200">
                  <div className="text-5xl font-bold text-brand-100 mb-4">{step.step}</div>
                  <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-brand-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-brand-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Learn More About Our Process
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We specialize in sourcing a wide range of products across multiple industries from verified Chinese manufacturers.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Boxes, name: 'Consumer Electronics', count: '500+' },
              { icon: Package, name: 'Home & Garden', count: '300+' },
              { icon: Target, name: 'Sporting Goods', count: '200+' },
              { icon: HeartHandshake, name: 'Health & Beauty', count: '250+' },
              { icon: Zap, name: 'Automotive Parts', count: '180+' },
              { icon: Award, name: 'Industrial Equipment', count: '150+' },
              { icon: Boxes, name: 'Toys & Games', count: '220+' },
              { icon: Package, name: 'Fashion & Apparel', count: '350+' },
              { icon: Target, name: 'Pet Supplies', count: '120+' },
              { icon: HeartHandshake, name: 'Kitchen & Dining', count: '190+' },
              { icon: Zap, name: 'Office Supplies', count: '160+' },
              { icon: Award, name: 'Custom Products', count: '400+' }
            ].map((category, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-4 text-center hover:bg-brand-50 transition-colors cursor-pointer group">
                <category.icon className="w-8 h-8 text-slate-400 group-hover:text-brand-500 mx-auto mb-2 transition-colors" />
                <p className="text-sm font-medium text-slate-900">{category.name}</p>
                <p className="text-xs text-slate-500 mt-1">{category.count} suppliers</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center text-brand-500 font-semibold hover:text-brand-600 transition-colors"
            >
              View All Product Categories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Challenges We Solve</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                Sourcing from China Shouldn't Be Risky
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Many businesses struggle with unreliable suppliers, quality issues, and complex logistics when sourcing from China. 
                We eliminate these risks with our proven processes and local expertise.
              </p>
              
              <div className="space-y-4">
                {[
                  'Unreliable suppliers who disappear after payment',
                  'Quality issues discovered only after receiving goods',
                  'Language barriers and communication problems',
                  'Complex customs and shipping logistics',
                  'Hidden costs and unexpected delays',
                  'No visibility into production progress'
                ].map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-400 text-xs">✕</span>
                    </div>
                    <span className="text-slate-300">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Our Solutions</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: ShieldCheck,
                    title: 'Verified Suppliers Only',
                    description: 'Every supplier in our network undergoes thorough background checks and factory audits.'
                  },
                  {
                    icon: Eye,
                    title: 'Quality Inspections',
                    description: 'Multiple inspection checkpoints ensure products meet specifications before shipping.'
                  },
                  {
                    icon: Clock,
                    title: 'Real-time Updates',
                    description: 'Weekly production reports and direct communication with factory managers.'
                  },
                  {
                    icon: DollarSign,
                    title: 'Transparent Pricing',
                    description: 'No hidden fees. Clear breakdown of product cost, service fees, and shipping.'
                  }
                ].map((solution, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{solution.title}</h4>
                      <p className="text-slate-400 text-sm">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Your Trusted Sourcing Partner
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              With over 10 years of experience, we've helped hundreds of businesses successfully source products from China.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                stat: '500+',
                label: 'Global Clients',
                description: 'Trusted by businesses across 40+ countries'
              },
              {
                icon: Factory,
                stat: '1,000+',
                label: 'Verified Factories',
                description: 'Pre-vetted supplier network across China'
              },
              {
                icon: TrendingUp,
                stat: '98%',
                label: 'Success Rate',
                description: 'Orders completed on time and to spec'
              },
              {
                icon: DollarSign,
                stat: '15-30%',
                label: 'Cost Savings',
                description: 'Average savings for our clients'
              }
            ].map((trust, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <trust.icon className="w-8 h-8 text-brand-500" />
                </div>
                <div className="text-3xl font-bold text-brand-500 mb-2">{trust.stat}</div>
                <div className="text-lg font-semibold text-slate-900 mb-2">{trust.label}</div>
                <p className="text-slate-600 text-sm">{trust.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how we've helped businesses like yours successfully source products from China.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: 'TechCorp USA',
                industry: 'Consumer Electronics',
                challenge: 'Needed to find a reliable manufacturer for custom Bluetooth speakers with strict quality requirements.',
                result: 'Reduced production costs by 25% while maintaining premium quality. Delivered 10,000 units on schedule.',
                savings: '$150,000',
                image: 'Speaker'
              },
              {
                company: 'HomeStyle EU',
                industry: 'Home & Garden',
                challenge: 'Sourcing eco-friendly kitchen products from sustainable manufacturers with proper certifications.',
                result: 'Found 3 certified suppliers, completed first order of 5,000 units with zero defects.',
                savings: '$85,000',
                image: 'Kitchen'
              },
              {
                company: 'SportsPro UK',
                industry: 'Sporting Goods',
                challenge: 'Required custom-branded fitness equipment with specific material requirements and tight deadlines.',
                result: 'Delivered 2,000 units ahead of schedule. Established ongoing supply relationship.',
                savings: '$120,000',
                image: 'Fitness'
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                  <Package className="w-16 h-16 text-brand-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-brand-500 bg-brand-50 px-2 py-1 rounded">
                      {caseStudy.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{caseStudy.company}</h3>
                  <p className="text-slate-600 text-sm mb-4">{caseStudy.challenge}</p>
                  <div className="bg-green-50 rounded-lg p-3 mb-4">
                    <p className="text-green-800 text-sm font-medium">Result: {caseStudy.result}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Client Savings</p>
                      <p className="text-lg font-bold text-brand-500">{caseStudy.savings}</p>
                    </div>
                    <Link to="/case-studies" className="text-brand-500 text-sm font-medium hover:text-brand-600">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "SSourcing China transformed our supply chain. Their attention to detail and factory verification process gave us confidence we never had before.",
                author: "Michael Chen",
                role: "CEO, TechCorp USA",
                rating: 5
              },
              {
                quote: "We saved over $80,000 on our first order while getting better quality than our previous suppliers. The team's communication was exceptional throughout.",
                author: "Sarah Johnson",
                role: "Procurement Manager, HomeStyle EU",
                rating: 5
              },
              {
                quote: "The production follow-up service is invaluable. We always know exactly where our order stands, and any issues are resolved before they become problems.",
                author: "James Wilson",
                role: "Director, SportsPro UK",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <Quote className="w-8 h-8 text-brand-200 mb-4" />
                <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Find answers to common questions about our sourcing services.
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: 'How much does your sourcing service cost?',
                answer: 'Our fees are transparent and competitive. We charge a small percentage of the order value, typically 5-10%, which covers supplier identification, factory audits, quality inspections, and coordination. There are no hidden fees, and we provide a detailed quote before starting any work.'
              },
              {
                question: 'How long does the sourcing process take?',
                answer: 'The timeline varies depending on product complexity and specifications. Typically, supplier identification takes 3-5 business days, sample development 7-14 days, and production 30-60 days. We provide a detailed timeline with your quote and keep you updated throughout the process.'
              },
              {
                question: 'What if I receive defective products?',
                answer: 'We conduct multiple quality inspections before shipment to minimize this risk. In the rare case of defects, we work with the supplier to resolve the issue, which may include replacement, repair, or refund. Our quality guarantee ensures you receive products that meet your specifications.'
              },
              {
                question: 'Do you handle small orders?',
                answer: 'Yes, we work with businesses of all sizes. While minimum order quantities vary by product and supplier, we can often find solutions for smaller orders through our extensive supplier network. Contact us with your specific requirements for a customized quote.'
              },
              {
                question: 'How do you verify suppliers?',
                answer: 'Our verification process includes business license verification, on-site factory audits, production capacity assessment, quality management system review, and reference checks. We also verify certifications and compliance with international standards relevant to your industry.'
              },
              {
                question: 'Can you help with product design and development?',
                answer: 'Yes, we can assist with product design modifications, packaging design, and product development. Our team works closely with factory engineers to ensure your specifications are met and can help optimize designs for manufacturability and cost-effectiveness.'
              }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-brand-500 font-semibold text-sm uppercase tracking-wider">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
                Get a Free Sourcing Quote
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Tell us about your product requirements, and our team will provide a detailed quote within 24 hours. 
                No obligation, no hidden fees.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Fast Response</h4>
                    <p className="text-slate-600 text-sm">We respond to all inquiries within 24 hours with a detailed quote.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">No Obligation</h4>
                    <p className="text-slate-600 text-sm">Our quotes are free with no commitment required. Decide when you're ready.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Transparent Pricing</h4>
                    <p className="text-slate-600 text-sm">Clear breakdown of all costs including product, service, and shipping fees.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-5 h-5 text-brand-500" />
                  <div>
                    <p className="font-semibold text-slate-900">Direct Contact</p>
                    <p className="text-slate-600 text-sm">+86 138 0013 8000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-500" />
                  <div>
                    <p className="font-semibold text-slate-900">Email Us</p>
                    <p className="text-slate-600 text-sm">info@ssourcingchina.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-600 to-brand-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Source Products from China?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 500+ global businesses who trust SSourcing China for their sourcing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="tel:+8613800138000"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border border-white/30"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

function InquiryForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    requirements: ''
  });
  
  const [status, setStatus] = React.useState('idle');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product: '',
        quantity: '',
        requirements: ''
      });
    }, 1500);
  };
  
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Sent!</h3>
        <p className="text-slate-600 mb-6">We'll get back to you within 24 hours with a detailed quote.</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-brand-500 font-semibold hover:text-brand-600"
        >
          Submit Another Request
        </button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Request a Free Quote</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
            placeholder="Company name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
            placeholder="+1 234 567 8900"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Product to Source *</label>
        <input
          type="text"
          name="product"
          required
          value={formData.product}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
          placeholder="e.g., Bluetooth speakers, kitchen utensils"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity</label>
        <input
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
          placeholder="e.g., 1,000 units"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Product Requirements *</label>
        <textarea
          name="requirements"
          required
          value={formData.requirements}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
          placeholder="Describe your product specifications, materials, target price, etc."
        />
      </div>
      
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Get Free Quote'}
      </button>
      
      <p className="text-xs text-slate-500 text-center">
        By submitting this form, you agree to our privacy policy. We'll never share your information.
      </p>
    </form>
  );
}
