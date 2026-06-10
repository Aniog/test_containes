import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, TrendingDown, Clock, Shield, CheckCircle, Star } from 'lucide-react';

const CaseStudies = () => {
  const [filter, setFilter] = useState('all');

  const caseStudies = [
    {
      id: 1,
      category: 'Retail',
      title: 'European Retailer Achieves 40% Cost Reduction',
      result: '40% Cost Reduction',
      description: 'A European home textiles retailer approached us to source bedding and curtain fabrics from China. We identified three verified manufacturers and negotiated favorable pricing.',
      challenge: 'The client had previously struggled with quality inconsistencies and long lead times from their existing suppliers.',
      solution: 'We conducted thorough factory audits, established quality control checkpoints, and implemented a structured production monitoring process.',
      outcome: 'The client achieved 40% cost reduction while improving quality consistency. Lead times were reduced from 90 to 45 days.',
      metrics: ['40% cost savings', '50% faster delivery', '99% quality pass rate'],
      image: 'retail'
    },
    {
      id: 2,
      category: 'E-commerce',
      title: 'US Brand Delivers in 6 Weeks',
      result: '6-Week Delivery',
      description: 'A US e-commerce brand needed fast turnaround for a new product line of wireless earbuds to meet holiday season demand.',
      challenge: 'The client had a tight deadline of 8 weeks to get products from concept to delivery, including Chinese New Year period.',
      solution: 'We leveraged our supplier network to find a manufacturer with available capacity, expedited the sampling process, and arranged priority production.',
      outcome: 'Products were delivered in 6 weeks, just in time for the holiday season. The client generated $500K in first-month sales.',
      metrics: ['6 weeks total', '$500K first-month sales', 'On-time delivery'],
      image: 'ecommerce'
    },
    {
      id: 3,
      category: 'Distribution',
      title: 'Australian Distributor Ensures 100% Compliance',
      result: '100% Compliance',
      description: 'An Australian automotive parts distributor needed to source components that met strict Australian safety and emissions standards.',
      challenge: 'Many Chinese suppliers were unfamiliar with Australian compliance requirements, making verification challenging.',
      solution: 'We identified suppliers with existing certifications, arranged for additional testing documentation, and conducted pre-shipment compliance verification.',
      outcome: 'All products passed Australian compliance requirements. The client expanded their product line by 35 SKUs.',
      metrics: ['100% compliance', '35 new SKUs', 'Zero recalls'],
      image: 'distribution'
    },
    {
      id: 4,
      category: 'Manufacturing',
      title: 'German Manufacturer Optimizes Supply Chain',
      result: '30% Cost Savings',
      description: 'A German manufacturing company needed to source industrial machinery components at competitive prices while maintaining German quality standards.',
      challenge: 'The client required suppliers that could meet strict German engineering specifications and quality management systems.',
      solution: 'We conducted comprehensive supplier audits, focusing on ISO-certified manufacturers with export experience to Europe.',
      outcome: 'The client established relationships with three qualified suppliers, achieving 30% cost savings while meeting quality standards.',
      metrics: ['30% cost savings', 'ISO certified suppliers', 'Zero quality issues'],
      image: 'manufacturing'
    },
    {
      id: 5,
      category: 'Retail',
      title: 'Canadian Retailer Scales Product Line',
      result: '3x Revenue Growth',
      description: 'A Canadian gift and novelty retailer wanted to expand their product catalog with unique items sourced directly from Chinese manufacturers.',
      challenge: 'The client lacked sourcing expertise and feared quality issues when dealing directly with unknown factories.',
      solution: 'We provided end-to-end sourcing including product development assistance, supplier verification, and quality control.',
      outcome: 'The client successfully launched 50 new products, resulting in 3x revenue growth within one year.',
      metrics: ['50 new products', '3x revenue growth', '95% customer satisfaction'],
      image: 'retail'
    },
    {
      id: 6,
      category: 'E-commerce',
      title: 'UK Brand Launches Private Label',
      result: 'Private Label Success',
      description: 'A UK health and wellness brand wanted to launch a private label line of supplements and vitamins.',
      challenge: 'The client needed GMP-certified manufacturers with flexible minimum order quantities for their initial launch.',
      solution: 'We identified GMP-certified factories, negotiated favorable terms for smaller initial orders, and coordinated the entire production process.',
      outcome: 'Successful launch with 12 private label products. The brand became profitable within 6 months.',
      metrics: ['12 products launched', 'Profitable in 6 months', 'GMP certified'],
      image: 'ecommerce'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      company: 'EuroHome Textiles',
      country: 'Germany',
      quote: 'SSourcing China transformed our supply chain. The quality improvements and cost savings have been significant.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      company: 'TechGear USA',
      country: 'United States',
      quote: 'Their ability to find suppliers quickly and manage quality is exceptional. They made our expansion to China seamless.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'AutoParts Australia',
      country: 'Australia',
      quote: 'Professional, reliable, and thorough. They handle all the complexities of international sourcing so we can focus on sales.',
      rating: 5
    }
  ];

  const filteredStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category.toLowerCase() === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results for Global Buyers
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Real success stories from clients who trusted us with their China sourcing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-button font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-surface-alt text-text-secondary hover:bg-primary/10'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('retail')}
              className={`px-6 py-2 rounded-button font-medium transition-colors ${
                filter === 'retail' 
                  ? 'bg-primary text-white' 
                  : 'bg-surface-alt text-text-secondary hover:bg-primary/10'
              }`}
            >
              Retail
            </button>
            <button
              onClick={() => setFilter('e-commerce')}
              className={`px-6 py-2 rounded-button font-medium transition-colors ${
                filter === 'e-commerce' 
                  ? 'bg-primary text-white' 
                  : 'bg-surface-alt text-text-secondary hover:bg-primary/10'
              }`}
            >
              E-commerce
            </button>
            <button
              onClick={() => setFilter('distribution')}
              className={`px-6 py-2 rounded-button font-medium transition-colors ${
                filter === 'distribution' 
                  ? 'bg-primary text-white' 
                  : 'bg-surface-alt text-text-secondary hover:bg-primary/10'
              }`}
            >
              Distribution
            </button>
            <button
              onClick={() => setFilter('manufacturing')}
              className={`px-6 py-2 rounded-button font-medium transition-colors ${
                filter === 'manufacturing' 
                  ? 'bg-primary text-white' 
                  : 'bg-surface-alt text-text-secondary hover:bg-primary/10'
              }`}
            >
              Manufacturing
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-section bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <div 
                key={study.id}
                className="bg-white rounded-card shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <Package className="w-16 h-16 text-white/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-accent font-medium">{study.category}</span>
                    <span className="text-lg font-bold text-success">{study.result}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">{study.title}</h3>
                  <p className="text-text-secondary text-sm mb-4">{study.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.metrics.map((metric, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-surface-alt text-text-secondary text-xs rounded-full"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center text-accent font-medium hover:text-accent-hover transition-colors"
                  >
                    Request similar project <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">What Our Clients Say</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Trusted by businesses around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-surface-alt rounded-card p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-text-secondary mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-text-primary">{testimonial.name}</div>
                  <div className="text-sm text-text-muted">{testimonial.company}, {testimonial.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-section bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">200+</div>
              <div className="text-gray-300">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">$50M+</div>
              <div className="text-gray-300">Client Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-gray-300">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-gray-300">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Achieve Similar Results?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business succeed with China sourcing
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-accent font-semibold rounded-button hover:bg-gray-100 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;