import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Quote, Star, Users, DollarSign,
  Clock, TrendingUp, Package, Factory, ClipboardCheck, Ship,
  Globe, Shield, Award, Target
} from 'lucide-react';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const caseStudies = [
    {
      id: 1,
      client: 'GreenPack Solutions',
      location: 'United States',
      flag: '🇺🇸',
      industry: 'Packaging',
      product: 'Eco-Friendly Food Containers',
      challenge: 'A US-based startup needed sustainable packaging manufacturers for their meal delivery service. They had difficulty finding suppliers who could meet FDA requirements and their sustainability standards.',
      solution: 'SSourcing China conducted extensive research to identify manufacturers with both FDA compliance and eco-friendly certifications. We verified production capabilities and coordinated samples for testing.',
      results: [
        'Found 3 verified suppliers meeting all requirements',
        '30% cost reduction compared to US suppliers',
        'FDA-compliant products certified',
        'Delivered within 8 weeks of initial inquiry',
      ],
      testimonial: {
        quote: "SSourcing China was instrumental in helping us launch our sustainable packaging line. Their verification process gave us confidence in our supplier choice.",
        author: 'Michael Thompson',
        role: 'CEO',
      },
      metrics: {
        savings: '30%',
        timeframe: '8 weeks',
        satisfaction: '100%',
      },
      color: 'green',
      category: 'packaging',
    },
    {
      id: 2,
      client: 'TechGear Ltd',
      location: 'United Kingdom',
      flag: '🇬🇧',
      industry: 'Electronics',
      product: 'Wireless Audio Products',
      challenge: 'A UK electronics retailer wanted to launch their own brand of wireless earbuds and headphones but lacked the expertise to navigate the complex Chinese manufacturing landscape.',
      solution: 'We identified multiple OEM factories with proven track records, conducted thorough verification, managed the sample approval process, and coordinated quality inspections throughout production.',
      results: [
        'Sourced from ISO 9001 certified factory',
        'Achieved target price point',
        'Completed full production with zero quality issues',
        'On-time delivery for holiday season launch',
      ],
      testimonial: {
        quote: "After multiple failed attempts with other sourcing methods, SSourcing China made the entire process seamless. Their expertise saved us months of frustration.",
        author: 'Sarah Chen',
        role: 'Procurement Director',
      },
      metrics: {
        savings: '25%',
        timeframe: '12 weeks',
        satisfaction: '98%',
      },
      color: 'blue',
      category: 'electronics',
    },
    {
      id: 3,
      client: 'HomeStyle Furniture',
      location: 'Australia',
      flag: '🇦🇺',
      industry: 'Furniture',
      product: 'Modern Office Furniture Collection',
      challenge: 'An Australian furniture retailer needed to expand their office furniture line with modern ergonomic designs at competitive prices while maintaining high quality standards.',
      solution: 'We matched them with established furniture manufacturers in Guangdong province, conducted factory verification, negotiated favorable terms, and implemented a comprehensive QC program.',
      results: [
        'Shipped 2,500 units across 6 product lines',
        'Quality exceeded Australian standards',
        '40% cost savings vs local manufacturing',
        'Zero damage claims on delivery',
      ],
      testimonial: {
        quote: "The production follow-up service was exceptional. We always knew the status of our order and any issues were resolved quickly before they became problems.",
        author: 'James Wilson',
        role: 'Operations Manager',
      },
      metrics: {
        savings: '40%',
        timeframe: '16 weeks',
        satisfaction: '100%',
      },
      color: 'purple',
      category: 'furniture',
    },
    {
      id: 4,
      client: 'EcoPack Germany',
      location: 'Germany',
      flag: '🇩🇪',
      industry: 'Packaging',
      product: 'Biodegradable Cosmetic Packaging',
      challenge: 'A German cosmetics company needed a reliable supplier for biodegradable packaging that met EU cosmetic regulations and their strict sustainability commitments.',
      solution: 'SSourcing China found innovative manufacturers specializing in plant-based materials, conducted regulatory compliance checks, and arranged for sample testing to EU standards.',
      results: [
        'EU regulatory compliance verified',
        '100% biodegradable materials confirmed',
        '20% below target pricing achieved',
        'Successful delivery of 50,000 units',
      ],
      testimonial: {
        quote: "Their attention to regulatory compliance was impressive. They understood our need for proper documentation and certification.",
        author: 'Anna Schmidt',
        role: 'Head of Procurement',
      },
      metrics: {
        savings: '20%',
        timeframe: '14 weeks',
        satisfaction: '95%',
      },
      color: 'teal',
      category: 'packaging',
    },
    {
      id: 5,
      client: 'ZenFit Australia',
      location: 'Australia',
      flag: '🇦🇺',
      industry: 'Sports & Fitness',
      product: 'Premium Yoga Mats & Accessories',
      challenge: 'A boutique fitness brand needed high-quality yoga products with unique designs for the Australian market. They required custom printing and sustainable materials.',
      solution: 'We identified specialized manufacturers with eco-friendly production capabilities, managed the design collaboration, coordinated sample iterations, and supervised production quality.',
      results: [
        'Custom designs achieved with multiple iterations',
        'Eco-friendly materials certified',
        'Successful retail launch',
        'Reorder placed within 3 months',
      ],
      testimonial: {
        quote: "SSourcing China helped us bring our vision to life. Their sample management process ensured every detail was perfect before mass production.",
        author: 'Emma Davis',
        role: 'Founder',
      },
      metrics: {
        savings: '35%',
        timeframe: '10 weeks',
        satisfaction: '100%',
      },
      color: 'orange',
      category: 'sports',
    },
    {
      id: 6,
      client: 'AutoParts Direct',
      location: 'Canada',
      flag: '🇨🇦',
      industry: 'Automotive',
      product: 'Aftermarket Car Accessories',
      challenge: 'A Canadian auto parts distributor wanted to source a range of aftermarket accessories but needed to ensure quality met North American safety standards.',
      solution: 'We worked with automotive-grade manufacturers, verified IATF 16949 certifications, conducted comprehensive quality testing, and arranged for proper documentation for Canadian import.',
      results: [
        'All products met Canadian safety standards',
        'IATF 16949 certified suppliers',
        'Successfully imported without issues',
        'Strong customer feedback on quality',
      ],
      testimonial: {
        quote: "The quality verification process was thorough. They caught issues that would have caused us major problems at the border.",
        author: 'Robert Brown',
        role: 'Import Manager',
      },
      metrics: {
        savings: '45%',
        timeframe: '20 weeks',
        satisfaction: '92%',
      },
      color: 'red',
      category: 'automotive',
    },
  ];

  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'packaging', name: 'Packaging' },
    { id: 'sports', name: 'Sports & Fitness' },
    { id: 'automotive', name: 'Automotive' },
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
    { icon: DollarSign, value: '$50M+', label: 'Orders Facilitated' },
    { icon: Award, value: '98%', label: 'Client Satisfaction' },
  ];

  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === activeFilter);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              Success Stories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600">
              See how we've helped businesses around the world source products from China 
              successfully, on time, and within budget.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveFilter(industry.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeFilter === industry.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Header */}
                <div className={`p-6 ${
                  study.color === 'green' ? 'bg-green-50' :
                  study.color === 'blue' ? 'bg-blue-50' :
                  study.color === 'purple' ? 'bg-purple-50' :
                  study.color === 'teal' ? 'bg-teal-50' :
                  study.color === 'orange' ? 'bg-orange-50' :
                  'bg-red-50'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{study.flag}</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{study.client}</h3>
                        <p className="text-sm text-gray-500">{study.location}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700">
                      {study.industry}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium">{study.product}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl mb-6">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${
                        study.color === 'green' ? 'text-green-600' :
                        study.color === 'blue' ? 'text-blue-600' :
                        study.color === 'purple' ? 'text-purple-600' :
                        study.color === 'teal' ? 'text-teal-600' :
                        study.color === 'orange' ? 'text-orange-600' :
                        'text-red-600'
                      }`}>{study.metrics.savings}</div>
                      <div className="text-xs text-gray-500">Cost Savings</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${
                        study.color === 'green' ? 'text-green-600' :
                        study.color === 'blue' ? 'text-blue-600' :
                        study.color === 'purple' ? 'text-purple-600' :
                        study.color === 'teal' ? 'text-teal-600' :
                        study.color === 'orange' ? 'text-orange-600' :
                        'text-red-600'
                      }`}>{study.metrics.timeframe}</div>
                      <div className="text-xs text-gray-500">Timeframe</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${
                        study.color === 'green' ? 'text-green-600' :
                        study.color === 'blue' ? 'text-blue-600' :
                        study.color === 'purple' ? 'text-purple-600' :
                        study.color === 'teal' ? 'text-teal-600' :
                        study.color === 'orange' ? 'text-orange-600' :
                        'text-red-600'
                      }`}>{study.metrics.satisfaction}</div>
                      <div className="text-xs text-gray-500">Satisfaction</div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <Quote className="w-6 h-6 text-gray-300 mb-2" />
                    <p className="text-gray-700 italic mb-3">"{study.testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                        {study.flag}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{study.testimonial.author}</p>
                        <p className="text-sm text-gray-500">{study.testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses who trust us for their China sourcing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
