import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Clock, Award } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      category: 'Electronics',
      title: 'US Retailer Sourcing Smart Home Devices',
      client: 'TechHome Solutions (USA)',
      challenge: 'Client needed a reliable supplier for smart home sensors with strict quality requirements. Previous attempts to source directly resulted in quality issues and delays.',
      solution: 'We conducted thorough factory verification, visiting 8 potential manufacturers. We implemented a comprehensive QC protocol including during-production inspections and pre-shipment checks.',
      results: [
        '35% reduction in manufacturing costs',
        '98% quality pass rate (up from 72%)',
        'On-time delivery improved to 95%',
        'Zero customer returns due to quality'
      ],
      timeline: '4 months',
      value: '$2.5M annual'
    },
    {
      category: 'Home Goods',
      title: 'European Importer Kitchenware Batch',
      client: 'EuroHome GmbH (Germany)',
      challenge: 'Previous supplier delivered substandard products causing significant customer returns and brand damage. Needed a complete supplier change.',
      solution: 'We identified and audited 5 verified factories, implemented pre-shipment inspection protocols, and established clear quality standards with the new supplier.',
      results: [
        '50,000 units delivered with zero defects',
        'Customer satisfaction increased by 40%',
        '30% reduction in return rate',
        'Successfully launched in 3 new markets'
      ],
      timeline: '3 months',
      value: '$1.2M annual'
    },
    {
      category: 'Textiles',
      title: 'Fashion Brand Sourcing Sustainable Apparel',
      client: 'GreenThread (UK)',
      challenge: 'Client wanted to source sustainable, organic cotton apparel but struggled to find certified manufacturers meeting their ethical standards.',
      solution: 'We conducted extensive research to identify GOTS-certified factories, performed on-site audits to verify ethical practices, and established a transparent supply chain.',
      results: [
        'Found 3 certified sustainable suppliers',
        'Successfully launched eco-friendly line',
        'Achieved B Corp certification',
        '200% growth in sustainable product sales'
      ],
      timeline: '6 months',
      value: '$800K annual'
    },
    {
      category: 'Industrial',
      title: 'Manufacturing Company Sourcing Equipment',
      client: 'ProBuild Industries (Australia)',
      challenge: 'Needed to source industrial machinery parts at competitive prices while maintaining strict quality standards required for Australian safety regulations.',
      solution: 'We verified factories, arranged product testing to meet Australian standards, and established quality control checkpoints throughout production.',
      results: [
        '45% cost savings vs previous supplier',
        'All products met Australian standards',
        'Reduced lead time by 35%',
        'Established long-term partnership'
      ],
      timeline: '5 months',
      value: '$3.2M annual'
    },
    {
      category: 'Beauty',
      title: 'Beauty Brand Skincare Product Sourcing',
      client: 'PureGlow (Canada)',
      challenge: 'Client needed to source private-label skincare products with unique formulations while ensuring GMP-certified manufacturing.',
      solution: 'We identified GMP-certified factories, coordinated formulation development, conducted stability testing, and implemented comprehensive quality control.',
      results: [
        'Successfully developed 15 SKUs',
        'All products passed health authority review',
        'Launched 3 months ahead of schedule',
        'First-year revenue: $450K'
      ],
      timeline: '7 months',
      value: '$450K first year'
    },
    {
      category: 'Toys',
      title: 'Toy Retailer Sourcing Educational Products',
      client: 'KidsLearn (USA)',
      challenge: 'Needed to source educational toys meeting strict US safety standards (ASTM F963) and CPSC requirements.',
      solution: 'We pre-screened factories for safety certification experience, arranged third-party testing, and implemented incoming inspection protocols.',
      results: [
        'All products passed safety testing',
        'Zero recalls or safety incidents',
        'Successfully launched 25 new products',
        'Grew market share by 15%'
      ],
      timeline: '5 months',
      value: '$1.8M annual'
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '35%', label: 'Average Cost Savings' },
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Clock, value: '95%', label: 'On-Time Delivery' },
    { icon: Award, value: '98%', label: 'Quality Pass Rate' }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Real success stories from clients who trusted us with their China sourcing needs.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="w-8 h-8 mx-auto mb-2 opacity-80" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-slate-900 text-white p-8">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-sm font-medium rounded-full mb-4">
                      {study.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-slate-400 text-sm mb-6">{study.client}</p>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Timeline:</span>
                        <span className="font-medium">{study.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Annual Value:</span>
                        <span className="font-medium">{study.value}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                      <p className="text-slate-600">{study.challenge}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-2">Solution</h4>
                      <p className="text-slate-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Results</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-slate-600">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {result}
                          </li>
                        ))}
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Let us help you find the right suppliers and ensure quality for your China sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;