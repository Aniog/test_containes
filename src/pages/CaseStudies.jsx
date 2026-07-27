import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { caseStudies } from '@/lib/data';

const CaseStudies = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D4F7C] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Real examples of how we've helped businesses successfully source products from China. Each project is unique, but our approach remains consistent: reliable suppliers, quality assurance, and on-time delivery.
            </p>
            <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-[#0891B2] text-white font-semibold rounded-lg hover:bg-[#0E7490] transition-colors">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center h-64 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="text-8xl opacity-30">
                      {study.image === 'ceramic' && '🏺'}
                      {study.image === 'electronics' && '📱'}
                      {study.image === 'sportswear' && '👕'}
                    </div>
                  </div>
                  <div className={`p-8 lg:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#0891B2] text-sm font-medium rounded-full mb-4">
                      {study.industry}
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2">{study.client}</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Target className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-gray-500 mb-1">Challenge</div>
                          <p className="text-gray-700">{study.challenge}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-gray-500 mb-1">Solution</div>
                          <p className="text-gray-700">{study.solution}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-gray-500 mb-1">Result</div>
                          <p className="text-gray-700 font-medium">{study.result}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="text-sm text-gray-500 mr-2">Products:</span>
                      {study.products.map((product, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Achieve</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-[#1E3A5F] mb-2">12-25%</div>
              <p className="text-gray-600 text-sm">Average cost savings compared to initial budget</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-[#1E3A5F] mb-2">99.2%</div>
              <p className="text-gray-600 text-sm">Average quality pass rate on final inspection</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-[#1E3A5F] mb-2">95%</div>
              <p className="text-gray-600 text-sm">On-time delivery rate across all projects</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-[#1E3A5F] mb-2">85%</div>
              <p className="text-gray-600 text-sm">Clients return for their next sourcing project</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#1E3A5F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you find reliable suppliers and manage your China sourcing effectively.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-[#0891B2] text-white font-semibold rounded-lg hover:bg-[#0E7490] transition-colors">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
