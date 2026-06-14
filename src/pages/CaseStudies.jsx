import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ArrowUpRight, Quote, Star } from 'lucide-react';
import { caseStudies, testimonials } from '../data/content';

const CaseStudies = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories from Global Buyers
            </h1>
            <p className="text-xl text-white/80 mb-8">
              See how we have helped businesses around the world achieve their China sourcing goals with reliable suppliers and quality products.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E67E22] hover:bg-[#D35400] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="space-y-16">
            {caseStudies.map((study, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={study.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image */}
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="aspect-video bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] rounded-2xl relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
                          backgroundSize: '30px 30px',
                        }} />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Building2 className="w-24 h-24 text-white/30" />
                      </div>
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
                        <span className="text-sm font-semibold text-[#1E3A5F]">{study.industry}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <span className="inline-block px-3 py-1 bg-[#E67E22]/10 text-[#E67E22] text-sm font-semibold rounded-full mb-4">
                      {study.industry}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h2>
                    <p className="text-lg text-[#6B7280] mb-6">{study.excerpt}</p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#059669] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-[#1F2937]">Comprehensive supplier verification</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#059669] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-[#1F2937]">Quality inspections at every stage</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#059669] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-[#1F2937]">On-time delivery with full documentation</span>
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-[#E67E22] font-semibold hover:text-[#D35400] transition-colors"
                    >
                      <span>Discuss Similar Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 bg-[#E67E22]/10 text-[#E67E22] text-sm font-semibold rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 relative shadow-sm"
              >
                <div className="absolute -top-4 left-8 w-10 h-10 bg-[#E67E22] rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#E67E22] fill-[#E67E22]" />
                  ))}
                </div>

                <p className="text-[#1F2937] mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-[#E5E7EB] pt-4">
                  <div className="font-semibold text-[#1E3A5F]">{testimonial.author}</div>
                  <div className="text-sm text-[#6B7280]">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#E67E22] to-[#D35400]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let us help you find reliable suppliers and quality products from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#E67E22] font-semibold rounded-lg hover:bg-[#F8FAFC] transition-all duration-200"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;