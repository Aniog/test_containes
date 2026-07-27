import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Send, TrendingUp, CheckCircle } from 'lucide-react';
import { siteData } from '@/data/content';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-blue py-20 md:py-24">
        <div className="container-custom text-center">
          <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider mb-3">Success Stories</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Real results from real clients. See how we have helped businesses 
            succeed with China sourcing.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {siteData.caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      data-strk-img-id={`case-page-${study.id}`}
                      data-strk-img={`[case-page-${study.id}-title] [case-page-${study.id}-industry]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.client}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-accent-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {study.industry}
                    </div>
                  </div>
                  <div className="p-8 lg:p-10">
                    <h2 id={`case-page-${study.id}-title`} className="text-2xl font-bold text-gray-900 mb-2">{study.client}</h2>
                    <p id={`case-page-${study.id}-industry`} className="text-accent-orange font-medium text-sm mb-6">{study.industry}</p>
                    
                    <div className="space-y-5">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Challenge</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Our Solution</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Results</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{study.result}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">
                      <div className="bg-green-50 rounded-lg p-4 text-center">
                        <TrendingUp className="w-6 h-6 text-success-green mx-auto mb-2" />
                        <p className="text-success-green font-bold text-xl">{study.savings}</p>
                        <p className="text-gray-500 text-xs">Cost Savings</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 text-center">
                        <CheckCircle className="w-6 h-6 text-primary-blue mx-auto mb-2" />
                        <p className="text-primary-blue font-bold text-xl">{study.defectRate}</p>
                        <p className="text-gray-500 text-xs">Quality Metric</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-900 font-medium leading-relaxed mb-6">
              "SSourcing China transformed our supply chain. Their attention to quality 
              and transparent communication gave us the confidence to scale our import 
              business significantly."
            </blockquote>
            <div>
              <p className="text-gray-900 font-semibold">James Mitchell</p>
              <p className="text-gray-500 text-sm">CEO, Global Trade Solutions (USA)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-blue">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Similar Results?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Let us discuss how we can help your business succeed with China sourcing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-accent-orange text-white font-bold rounded-lg hover:bg-accent-orange-hover transition-colors text-lg"
          >
            <Send className="w-5 h-5 mr-2" />
            Start Your Success Story
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
