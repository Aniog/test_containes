import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, DollarSign, Clock, CheckCircle, Quote } from 'lucide-react';

const caseStudies = [
  {
    client: 'TechCorp Global',
    industry: 'Consumer Electronics',
    location: 'United States',
    challenge: 'TechCorp was struggling with high procurement costs and inconsistent quality from their existing suppliers. They needed to reduce costs while maintaining strict quality standards for their line of electronic accessories.',
    solution: 'We conducted a comprehensive supplier audit across Shenzhen and Dongguan, identifying 5 qualified manufacturers. After competitive bidding and quality testing, we selected 2 primary suppliers and negotiated volume-based pricing.',
    results: [
      '35% reduction in unit costs',
      '98% quality pass rate',
      '40% faster lead times',
      'Zero supply chain disruptions in 12 months',
    ],
    testimonial: {
      quote: 'SSourcing China transformed our supply chain. The cost savings were significant, but the quality improvement was even more valuable. They truly understand our business needs.',
      author: 'Michael Chen',
      title: 'Procurement Director, TechCorp Global',
    },
    metrics: {
      cost: '35%',
      quality: '98%',
      delivery: '99%',
    },
  },
  {
    client: 'RetailMax Inc.',
    industry: 'Home & Garden',
    location: 'Canada',
    challenge: 'RetailMax faced recurring quality issues with their home goods suppliers. Products often arrived damaged or not matching specifications, leading to customer complaints and returns.',
    solution: 'We implemented a rigorous quality control process including pre-production samples, in-line inspections, and pre-shipment audits. We also helped RetailMax switch to suppliers with better quality management systems.',
    results: [
      '95% reduction in defective products',
      'Customer complaint rate dropped by 80%',
      'Return rate decreased from 8% to 1.5%',
      'Supplier on-time delivery improved to 97%',
    ],
    testimonial: {
      quote: 'The quality control process they implemented has been a game-changer. Our return rates dropped dramatically and our customers are much happier with the product quality.',
      author: 'Sarah Johnson',
      title: 'Operations Manager, RetailMax Inc.',
    },
    metrics: {
      cost: '20%',
      quality: '99%',
      delivery: '97%',
    },
  },
  {
    client: 'EuroTrade GmbH',
    industry: 'Industrial Equipment',
    location: 'Germany',
    challenge: 'EuroTrade was managing a complex supply chain with multiple vendors across different regions in China. This caused coordination headaches, communication gaps, and frequent delays.',
    solution: 'We consolidated their supplier base from 12 vendors to 4 primary suppliers, all verified and managed through our local team. We also implemented centralized communication and production monitoring.',
    results: [
      '40% reduction in lead times',
      'Communication efficiency improved by 60%',
      'Supply chain costs reduced by 25%',
      'Single point of contact for all China operations',
    ],
    testimonial: {
      quote: 'Having SSourcing China as our single point of contact for all China operations has simplified everything. Our supply chain is now more efficient and predictable than ever.',
      author: 'Hans Mueller',
      title: 'Supply Chain Director, EuroTrade GmbH',
    },
    metrics: {
      cost: '25%',
      quality: '96%',
      delivery: '98%',
    },
  },
  {
    client: 'Aussie Direct',
    industry: 'Promotional Products',
    location: 'Australia',
    challenge: 'Aussie Direct needed custom branded merchandise for corporate clients but struggled with minimum order quantities, long lead times, and inconsistent printing quality from various suppliers.',
    solution: 'We identified specialized promotional product manufacturers who could handle small batch orders with consistent quality. We also streamlined the sample approval and production process.',
    results: [
      'MOQ reduced from 5,000 to 500 units',
      'Lead time cut from 8 weeks to 3 weeks',
      'Print quality consistency improved to 99%',
      'Client satisfaction score increased by 35%',
    ],
    testimonial: {
      quote: 'They found us suppliers who could handle our smaller order quantities without compromising quality. Our clients are thrilled with the branded merchandise quality.',
      author: 'David Thompson',
      title: 'CEO, Aussie Direct',
    },
    metrics: {
      cost: '30%',
      quality: '99%',
      delivery: '95%',
    },
  },
];

const CaseStudiesPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real results from real clients. See how we've helped businesses overcome sourcing challenges and achieve measurable outcomes.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.client} className="bg-bg-light rounded-2xl p-8 md:p-12 border border-border-light">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm">
                    {study.industry}
                  </span>
                  <span className="text-text-light text-sm">{study.location}</span>
                </div>

                <h2 className="text-3xl font-bold text-text-primary mb-6">{study.client}</h2>

                {/* Metrics */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 text-center">
                    <DollarSign className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-3xl font-bold text-primary">{study.metrics.cost}</div>
                    <div className="text-text-secondary text-sm">Cost Savings</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <CheckCircle className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-3xl font-bold text-primary">{study.metrics.quality}</div>
                    <div className="text-text-secondary text-sm">Quality Rate</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-3xl font-bold text-primary">{study.metrics.delivery}</div>
                    <div className="text-text-secondary text-sm">On-Time Delivery</div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">The Challenge</h3>
                    <p className="text-text-secondary">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">Our Solution</h3>
                    <p className="text-text-secondary">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-text-primary mb-4">Results Achieved</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {study.results.map((result) => (
                      <div key={result} className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-text-secondary">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <blockquote className="text-text-primary text-lg mb-4 italic">
                    "{study.testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-text-primary">{study.testimonial.author}</div>
                    <div className="text-text-secondary text-sm">{study.testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Contact us today to discuss your sourcing needs and discover how we can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg"
          >
            Start Your Success Story
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
