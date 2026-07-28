import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';

const caseStudies = [
  {
    client: 'TechGear Inc.',
    industry: 'Electronics',
    location: 'USA',
    quote: 'SSourcing helped us reduce sourcing costs by 22% while improving product quality. Their factory verification process gave us confidence we never had before.',
    result: '22% cost reduction',
    image: 'electronics company office',
  },
  {
    client: 'HomeStyle Europe',
    industry: 'Home & Garden',
    location: 'Germany',
    quote: 'We went from unreliable suppliers to a streamlined sourcing operation. The production monitoring alone saved us from three potential delays.',
    result: '3 delays prevented',
    image: 'home furniture showroom',
  },
  {
    client: 'FitPro Australia',
    industry: 'Fitness Equipment',
    location: 'Australia',
    quote: 'Their quality inspection caught defects that would have cost us thousands. Professional team that understands international standards.',
    result: '$45K saved',
    image: 'fitness equipment warehouse',
  },
];

const CaseStudyPreview = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from businesses we have helped source products from China.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="card">
              <Quote className="w-8 h-8 text-brand-200 mb-4" />
              <p className="text-gray-600 text-sm mb-6 italic leading-relaxed">
                "{study.quote}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{study.client}</p>
                    <p className="text-xs text-gray-500">{study.industry} • {study.location}</p>
                  </div>
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {study.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/case-studies" className="btn-outline">
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;
