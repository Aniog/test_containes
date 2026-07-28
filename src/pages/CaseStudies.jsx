import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, DollarSign, Clock, Shield } from 'lucide-react';

const caseStudies = [
  {
    client: 'TechGear Inc.',
    industry: 'Consumer Electronics',
    location: 'United States',
    challenge: 'Struggling with inconsistent product quality from multiple Chinese suppliers, leading to high return rates and customer complaints.',
    solution: 'Implemented our multi-stage QC process with pre-production material checks, in-line inspections, and pre-shipment audits using AQL standards.',
    results: [
      { metric: '22%', label: 'Cost Reduction', icon: DollarSign },
      { metric: '95%', label: 'Quality Pass Rate', icon: Shield },
      { metric: '40%', label: 'Fewer Returns', icon: TrendingUp },
    ],
    quote: 'SSourcing helped us reduce sourcing costs by 22% while improving product quality. Their factory verification process gave us confidence we never had before.',
    quotePerson: 'James Wilson, Procurement Director',
    image: 'electronics warehouse operations',
  },
  {
    client: 'HomeStyle Europe',
    industry: 'Home & Garden',
    location: 'Germany',
    challenge: 'Production delays and missed shipping windows were damaging relationships with retail partners and causing stockouts.',
    solution: 'Deployed our production monitoring system with weekly milestone tracking, early warning alerts, and proactive delay prevention measures.',
    results: [
      { metric: '3', label: 'Delays Prevented', icon: Clock },
      { metric: '100%', label: 'On-Time Delivery', icon: Shield },
      { metric: '15%', label: 'Cost Savings', icon: DollarSign },
    ],
    quote: 'We went from unreliable suppliers to a streamlined sourcing operation. The production monitoring alone saved us from three potential delays that would have cost us key retail relationships.',
    quotePerson: 'Maria Schmidt, Operations Manager',
    image: 'home furniture showroom',
  },
  {
    client: 'FitPro Australia',
    industry: 'Fitness Equipment',
    location: 'Australia',
    challenge: 'A previous shipment had critical defects that were only discovered after arrival, resulting in significant financial losses.',
    solution: 'Conducted thorough pre-shipment inspections that identified and caught defects before products left the factory.',
    results: [
      { metric: '$45K', label: 'Saved', icon: DollarSign },
      { metric: '0', label: 'Defective Units', icon: Shield },
      { metric: '100%', label: 'Spec Compliance', icon: TrendingUp },
    ],
    quote: 'Their quality inspection caught defects that would have cost us thousands. Professional team that understands international quality standards.',
    quotePerson: 'David Chen, CEO',
    image: 'fitness equipment warehouse',
  },
  {
    client: 'GreenLife UK',
    industry: 'Eco-Friendly Products',
    location: 'United Kingdom',
    challenge: 'Needed to find suppliers who could meet strict environmental certifications and sustainable manufacturing requirements.',
    solution: 'Identified and verified factories with proper environmental certifications, conducted sustainability audits, and ensured compliance documentation.',
    results: [
      { metric: '5', label: 'Certified Suppliers', icon: Shield },
      { metric: '100%', label: 'Compliance Rate', icon: TrendingUp },
      { metric: '20%', label: 'Cost Efficiency', icon: DollarSign },
    ],
    quote: 'Finding eco-certified suppliers in China seemed impossible until we worked with SSourcing. They found us five verified suppliers that met all our sustainability requirements.',
    quotePerson: 'Sarah Thompson, Sustainability Director',
    image: 'eco friendly products manufacturing',
  },
];

const CaseStudies = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Real results from businesses we have helped source products from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="card">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left: Details */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-brand-50 text-brand-600 text-sm rounded-full font-medium">
                        {study.industry}
                      </span>
                      <span className="text-sm text-gray-500">{study.location}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{study.client}</h2>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    <blockquote className="border-l-4 border-accent-500 pl-4 italic text-gray-600 mb-2">
                      "{study.quote}"
                    </blockquote>
                    <p className="text-sm font-medium text-gray-900">— {study.quotePerson}</p>
                  </div>

                  {/* Right: Results */}
                  <div>
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <div className="aspect-[16/9] bg-gradient-to-br from-brand-100 to-brand-50 rounded-lg flex items-center justify-center">
                        <span className="text-brand-400 text-sm">{study.client} Project</span>
                      </div>
                    </div>
                    
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Results</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center p-4 bg-brand-50 rounded-xl">
                          <result.icon className="w-6 h-6 text-brand-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-brand-600">{result.metric}</div>
                          <div className="text-xs text-gray-500">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent-500 text-white">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Similar Results?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Contact us to discuss how we can help your business source products from China more effectively.
          </p>
          <Link to="/contact" className="bg-white text-accent-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center gap-2 text-lg">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
