import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Building2, Package, Factory,
  TrendingUp, Users, Clock
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    client: 'European Home Goods Retailer',
    industry: 'Home Goods',
    location: 'Germany',
    challenge: 'Needed to source 50,000 units of home decor items from verified factories within 3 months while maintaining strict quality standards.',
    solution: 'We identified 3 pre-screened factories, conducted comprehensive capability assessments, and coordinated parallel production with strict QC protocols at each stage.',
    results: [
      'Delivered on time with 99.2% quality pass rate',
      'Saved 25% compared to previous supplier',
      'Established long-term supplier relationships',
      'Zero quality complaints in first year',
    ],
    timeline: '3 months',
    investment: '$180,000',
    testimonial: {
      quote: 'SSourcing China transformed our supply chain. We went from skeptical about China sourcing to confident in our Chinese suppliers.',
      author: 'Michael Hoffman',
      title: 'Procurement Director',
    },
    imageId: 'case-study-european',
  },
  {
    id: 2,
    client: 'North American Tech Startup',
    industry: 'Consumer Electronics',
    location: 'United States',
    challenge: 'Required custom-designed smart home devices with strict IP protection and tight startup budget constraints.',
    solution: 'Implemented NDA-protected development process, verified manufacturer IP security measures, and established escrow payment terms for protection.',
    results: [
      'Successfully launched product with zero IP leaks',
      'Completed first order of 10,000 units',
      'Reduced development costs by 40%',
      'Product now available in major retail chains',
    ],
    timeline: '6 months',
    investment: '$95,000',
    testimonial: {
      quote: 'Their IP protection protocols gave us the confidence to move forward. The quality exceeded our expectations.',
      author: 'Sarah Chen',
      title: 'CEO & Founder',
    },
    imageId: 'case-study-startup',
  },
  {
    id: 3,
    client: 'Australian Fashion Brand',
    industry: 'Apparel & Textiles',
    location: 'Australia',
    challenge: 'Wanted to expand product line with sustainable clothing but lacked experience with textile manufacturing in China.',
    solution: 'We connected them with certified eco-friendly factories, helped establish sustainable supply chain practices, and provided ongoing quality monitoring.',
    results: [
      'Launched 12 new sustainable product lines',
      'Achieved GOTS certification for all products',
      'Reduced carbon footprint by 35%',
      'Production costs 30% below local manufacturing',
    ],
    timeline: '4 months',
    investment: '$120,000',
    testimonial: {
      quote: 'They found us factories we never would have discovered on our own. The sustainability focus was exactly what we needed.',
      author: 'Emma Thompson',
      title: 'Head of Product Development',
    },
    imageId: 'case-study-fashion',
  },
  {
    id: 4,
    client: 'Middle East Industrial Company',
    industry: 'Industrial Equipment',
    location: 'UAE',
    challenge: 'Needed to source industrial machinery parts with complex specifications and required documentation for government procurement.',
    solution: 'Coordinated with specialized factories, ensured all documentation met government standards, and provided comprehensive factory audits.',
    results: [
      'All documentation approved for government procurement',
      'Parts met exact specifications',
      'Delivered 2 weeks ahead of schedule',
      'Established framework agreement for ongoing orders',
    ],
    timeline: '2 months',
    investment: '$250,000',
    testimonial: {
      quote: 'Their attention to documentation and compliance saved us months of back-and-forth with authorities.',
      author: 'Ahmed Al-Rashid',
      title: 'Operations Manager',
    },
    imageId: 'case-study-industrial',
  },
];

const stats = [
  { value: '500+', label: 'Clients Served', icon: Users },
  { value: '1,200+', label: 'Factory Partners', icon: Building2 },
  { value: '15+', label: 'Years Experience', icon: Clock },
  { value: '98%', label: 'Client Satisfaction', icon: Star },
];

const CaseStudies = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-lg lg:text-xl text-blue-100">
              Real success stories from businesses that have transformed their China sourcing with our help.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl lg:text-4xl font-bold text-blue-800 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="space-y-12 lg:space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="grid lg:grid-cols-2">
                  <div className={`p-6 lg:p-10 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-sm text-slate-500">{study.location}</span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2">{study.client}</h2>
                    
                    <div className="space-y-6 mt-6">
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Challenge</h3>
                        <p className="text-slate-700">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Solution</h3>
                        <p className="text-slate-700">{study.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100">
                      <div>
                        <div className="text-sm text-slate-500">Timeline</div>
                        <div className="font-semibold">{study.timeline}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Initial Investment</div>
                        <div className="font-semibold">{study.investment}</div>
                      </div>
                    </div>
                  </div>

                  <div className={`bg-slate-100 p-6 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </div>
                      <blockquote className="text-slate-700 italic mb-4">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="font-semibold">{study.testimonial.author}</div>
                      <div className="text-sm text-slate-500">{study.testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Join hundreds of businesses who have transformed their China sourcing with SSourcing China.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-lg transition-colors"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
