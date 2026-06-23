import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Factory, Truck, Eye, Star, Globe } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: 'Supplier Verification',
      description: 'We verify factory credentials, business licenses, and production capabilities to ensure you work with legitimate suppliers.',
      link: '/services#verification'
    },
    {
      icon: Eye,
      title: 'Quality Control',
      description: 'Professional QC inspections at any production stage. We check product quality, packaging, and compliance with your specifications.',
      link: '/services#quality'
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular factory visits and production updates. We monitor progress, address issues, and ensure on-time delivery.',
      link: '/services#production'
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end shipping coordination. We handle freight forwarding, customs clearance, and documentation.',
      link: '/services#shipping'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what you need - product specifications, quantity, target price, and timeline.'
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'We research, vet, and present 3-5 qualified suppliers matching your requirements.'
    },
    {
      number: '03',
      title: 'Sample & Negotiation',
      description: 'We coordinate samples, negotiate terms, and help you make an informed decision.'
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'We monitor production, conduct inspections, and ensure quality standards are met.'
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate shipping, handle customs, and ensure safe delivery to your door.'
    }
  ];

  const products = [
    'Electronics & Gadgets',
    'Textiles & Garments',
    'Home & Garden',
    'Industrial Equipment',
    'Packaging Materials',
    'Automotive Parts',
    'Health & Beauty',
    'Toys & Gifts'
  ];

  const problems = [
    {
      title: 'Language Barriers',
      description: 'Communication gaps lead to misunderstandings, delays, and quality issues.'
    },
    {
      title: 'Supplier Scams',
      description: 'Fake factories, copied products, and payment fraud are real risks in China sourcing.'
    },
    {
      title: 'Quality Issues',
      description: 'Products arrive damaged, defective, or not matching your specifications.'
    },
    {
      title: 'Shipping Complexities',
      description: 'Navigating customs, documentation, and logistics is time-consuming and risky.'
    }
  ];

  const trustPoints = [
    { number: '500+', label: 'Clients Served' },
    { number: '10+', label: 'Years Experience' },
    { number: '2000+', label: 'Factories Verified' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  const caseStudies = [
    {
      category: 'Electronics',
      title: 'US Retailer Sourced Smart Home Devices',
      result: 'Saved 35% on manufacturing costs',
      description: 'We verified 8 factories, conducted sample testing, and managed QC for a 50,000-unit order.'
    },
    {
      category: 'Textiles',
      title: 'European Brand Launched Private Label Clothing',
      result: '2-month faster time-to-market',
      description: 'End-to-end sourcing from fabric sourcing to production monitoring and shipping.'
    }
  ];

  const faqs = [
    {
      question: 'How do you verify factories?',
      answer: 'We conduct on-site visits to verify business licenses, production capacity, equipment, and workforce. We also check financial stability and customer references.'
    },
    {
      question: 'What are your fees?',
      answer: 'Our sourcing service is typically commission-based (5-15% of order value) or flat-fee per project. Quality inspections are quoted based on product type and inspection scope. Contact us for a detailed quote.'
    },
    {
      question: 'Can you handle small orders?',
      answer: 'Yes, we work with orders of all sizes. However, minimum order quantities (MOQs) vary by supplier. We help find suppliers who match your volume requirements.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typical timeline: 1-2 weeks for supplier matching, 1-2 weeks for sample evaluation, 2-4 weeks for production (depending on complexity). Total: 4-8 weeks from request to shipment.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                <Globe className="w-4 h-4 mr-2" />
                Based in Shenzhen, China
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                We help overseas businesses find reliable suppliers, verify factories, 
                inspect quality, and coordinate seamless shipping. Your trusted partner 
                for hassle-free China sourcing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                >
                  How It Works
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-900 flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Trusted by 500+ buyers worldwide</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                      <Shield className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                      <p className="text-white font-semibold">Factory Verified</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                      <Eye className="w-10 h-10 text-green-400 mx-auto mb-3" />
                      <p className="text-white font-semibold">QC Inspected</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                      <Factory className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                      <p className="text-white font-semibold">Production Monitored</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                      <Truck className="w-10 h-10 text-orange-400 mx-auto mb-3" />
                      <p className="text-white font-semibold">Shipped Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">{point.number}</div>
                <div className="text-gray-600 font-medium">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive sourcing solutions to help you source from China with confidence
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors border border-gray-100 hover:border-blue-200"
              >
                <service.icon className="w-12 h-12 text-blue-900 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Common Sourcing Challenges We Solve
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Don't let these issues derail your China sourcing - we handle them for you
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
                <p className="text-gray-400 text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Sourcing Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple, transparent 5-step process to source your products from China
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 h-full border border-gray-200">
                  <div className="text-4xl font-bold text-blue-100 mb-4">{step.number}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/how-it-works"
              className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700"
            >
              Learn more about our process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Products We Source
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We have expertise across a wide range of product categories
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <Link
                key={index}
                to="/products"
                className="p-6 bg-gray-50 rounded-xl text-center hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-colors"
              >
                <p className="font-medium text-gray-900">{product}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700"
            >
              View all product categories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              See how we've helped other businesses succeed with China sourcing
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full mb-4">
                  {study.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
                <p className="text-green-400 font-semibold mb-4">{study.result}</p>
                <p className="text-blue-200">{study.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-white font-semibold hover:text-blue-200"
            >
              View all case studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our sourcing services
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Source from China?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Get a free sourcing quote from our expert team. Tell us what you need, 
              and we'll handle the rest.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;