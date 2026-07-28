import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Clock } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Electronics Importer from USA',
      category: 'Electronics',
      client: 'US-based electronics retailer',
      challenge: 'Client was struggling with inconsistent quality from multiple Chinese suppliers, leading to high return rates and customer complaints.',
      solution: 'We audited 8 potential suppliers, selected 2 ISO-certified factories, implemented pre-shipment inspections, and established a quality control protocol.',
      results: [
        { metric: 'Cost Reduction', value: '22%', icon: DollarSign },
        { metric: 'Quality Pass Rate', value: '85% to 99.5%', icon: CheckCircle },
        { metric: 'Return Rate', value: 'Reduced by 80%', icon: TrendingUp },
      ],
      testimonial: 'SSourcing China transformed our supply chain. The quality improvement was immediate and our customers noticed the difference.',
    },
    {
      id: 2,
      title: 'Home Goods Retailer from UK',
      category: 'Home & Garden',
      client: 'UK home goods chain',
      challenge: 'Managing 12 different suppliers was creating logistical nightmares, inconsistent quality, and delayed shipments.',
      solution: 'We consolidated their supplier base to 3 reliable partners, negotiated better terms, and implemented a unified quality standard.',
      results: [
        { metric: 'Lead Time', value: 'Reduced by 30%', icon: Clock },
        { metric: 'Supplier Count', value: '12 to 3', icon: TrendingUp },
        { metric: 'Cost Savings', value: '18%', icon: DollarSign },
      ],
      testimonial: 'The consolidation strategy saved us thousands in logistics costs and dramatically improved our product consistency.',
    },
    {
      id: 3,
      title: 'Automotive Parts Distributor from Germany',
      category: 'Automotive',
      client: 'German automotive parts supplier',
      challenge: 'Needed to establish a reliable supply chain for ISO-certified automotive components with zero tolerance for quality defects.',
      solution: 'We identified and verified 4 ISO 9001 certified factories, implemented rigorous inspection protocols, and established long-term partnerships.',
      results: [
        { metric: 'Quality Complaints', value: 'Zero in 18 months', icon: CheckCircle },
        { metric: 'On-Time Delivery', value: '98.5%', icon: Clock },
        { metric: 'Cost Efficiency', value: '15% improvement', icon: DollarSign },
      ],
      testimonial: 'The zero-quality-complaint record speaks for itself. SSourcing China understands the automotive industry requirements.',
    },
    {
      id: 4,
      title: 'Fashion Brand from Australia',
      category: 'Textiles & Apparel',
      client: 'Australian fashion label',
      challenge: 'Struggling to find manufacturers that could handle small batch production with consistent quality for their premium brand.',
      solution: 'We sourced specialized garment manufacturers, implemented detailed quality checkpoints, and managed the entire production lifecycle.',
      results: [
        { metric: 'Quality Consistency', value: '95% first-pass rate', icon: CheckCircle },
        { metric: 'Lead Time', value: 'Reduced by 25%', icon: Clock },
        { metric: 'Cost per Unit', value: 'Reduced by 12%', icon: DollarSign },
      ],
      testimonial: 'They found manufacturers that truly understood our quality standards. Our products have never looked better.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Case Studies</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Real results for real buyers. See how we have helped companies across industries source better from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="border-b border-slate-200 pb-20 last:border-b-0 last:pb-0">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full mb-4">
                      {study.category}
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{study.title}</h2>
                    <p className="text-sm text-slate-500 mb-6">Client: {study.client}</p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Challenge</h3>
                      <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Solution</h3>
                      <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-6">
                      <p className="text-slate-700 italic leading-relaxed">"{study.testimonial}"</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-6">Key Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                          <result.icon className="w-8 h-8 text-slate-700 mx-auto mb-3" />
                          <p className="text-2xl font-bold text-slate-900 mb-1">{result.value}</p>
                          <p className="text-sm text-slate-500">{result.metric}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-slate-50 rounded-xl p-8">
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">Project Highlights</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Comprehensive supplier audit and selection process</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Rigorous quality control and inspection protocols</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Ongoing production monitoring and reporting</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Seamless logistics and delivery coordination</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us today to discuss your sourcing needs and learn how we can help you achieve similar results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
