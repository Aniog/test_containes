import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, ArrowUpRight } from 'lucide-react';
import { caseStudies } from '../../data/content';

const CaseStudiesPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-[#E67E22]/10 text-[#E67E22] text-sm font-semibold rounded-full mb-4">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success Stories from Our Clients
          </h2>
          <p className="text-lg text-[#6B7280]">
            See how we have helped businesses around the world achieve their China sourcing goals.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to="/case-studies"
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                  }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-white/40" />
                </div>
                {/* Industry Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full">
                  <span className="text-xs font-semibold text-[#1E3A5F]">{study.industry}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-[#E67E22] transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-[#6B7280] text-sm mb-4">
                  {study.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[#E67E22] font-medium text-sm">
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E3A5F] hover:bg-[#2D5A87] text-white font-semibold rounded-lg transition-all duration-200"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;