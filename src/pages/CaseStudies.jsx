import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Clock, DollarSign } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Electronics Importer from USA',
      category: 'Electronics',
      challenge: 'A US-based electronics retailer needed reliable suppliers for Bluetooth speakers and smart home devices. Previous suppliers had quality consistency issues.',
      solution: 'We identified 3 verified factories, conducted factory audits, and implemented a quality inspection program for every production batch.',
      results: [
        'Reduced defect rate from 12% to under 2%',
        'Saved 18% on unit costs through better supplier negotiation',
        'Established 2-year partnership with primary supplier',
      ],
      metrics: { savings: '18%', defectReduction: '85%', timeline: '3 weeks' },
    },
    {
      id: 2,
      title: 'Home Goods Retailer from UK',
      category: 'Home & Garden',
      challenge: 'A UK home goods retailer wanted to expand their product line with ceramic kitchenware but struggled with supplier reliability and shipping coordination.',
      solution: 'We sourced 5 qualified ceramic manufacturers, managed sample approval, and coordinated consolidated shipping to reduce logistics costs.',
      results: [
        'Expanded product line with 12 new SKUs',
        'Reduced shipping costs by 25% through consolidation',
        'On-time delivery rate improved to 98%',
      ],
      metrics: { savings: '25%', defectReduction: '90%', timeline: '4 weeks' },
    },
    {
      id: 3,
      title: 'Industrial Equipment Buyer from Germany',
      category: 'Industrial',
      challenge: 'A German industrial equipment buyer needed custom-manufactured metal components with tight tolerances and specific material requirements.',
      solution: 'We found specialized metal fabrication factories, verified their CNC capabilities, and implemented dimensional inspection protocols.',
      results: [
        'Found 2 qualified metal fabrication suppliers',
        'Achieved 99.5% dimensional accuracy',
        'Reduced lead time by 30%',
      ],
      metrics: { savings: '22%', defectReduction: '95%', timeline: '5 weeks' },
    },
    {
      id: 4,
      title: 'Fashion Brand from Australia',
      category: 'Textiles & Apparel',
      challenge: 'An Australian fashion brand needed sustainable fabric suppliers and ethical manufacturing partners for their new clothing line.',
      solution: 'We identified GOTS-certified fabric suppliers and ethical manufacturing facilities, conducted social compliance audits, and managed the entire production process.',
      results: [
        'Sourced 100% organic cotton fabrics',
        'Passed third-party ethical audit',
        'Launched collection on schedule',
      ],
      metrics: { savings: '15%', defectReduction: '88%', timeline: '6 weeks' },
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Real results from real clients. See how we've helped businesses source from China more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-xl p-8 lg:p-12 shadow-sm border border-slate-200">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                        {study.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{study.title}</h3>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Challenge</h4>
                      <p className="text-slate-600">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Solution</h4>
                      <p className="text-slate-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-slate-50 rounded-lg p-6">
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Key Metrics</h4>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <DollarSign className="w-5 h-5 text-green-500 mr-3" />
                          <div>
                            <div className="text-2xl font-bold text-slate-900">{study.metrics.savings}</div>
                            <div className="text-sm text-slate-600">Cost Savings</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-5 h-5 text-blue-500 mr-3" />
                          <div>
                            <div className="text-2xl font-bold text-slate-900">{study.metrics.defectReduction}</div>
                            <div className="text-sm text-slate-600">Defect Reduction</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 text-purple-500 mr-3" />
                          <div>
                            <div className="text-2xl font-bold text-slate-900">{study.metrics.timeline}</div>
                            <div className="text-sm text-slate-600">Project Timeline</div>
                          </div>
                        </div>
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us to discuss your sourcing needs and see how we can help you achieve similar results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
