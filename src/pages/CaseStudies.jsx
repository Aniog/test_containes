import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, TrendingUp, Clock, DollarSign, Shield, 
  CheckCircle, Users, Globe, Award
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'US Retailer Reduces Electronics Costs by 35%',
      client: 'Major US Electronics Retailer',
      industry: 'Consumer Electronics',
      duration: '8 weeks',
      result: '35% cost reduction',
      challenge: 'A US-based electronics retailer was sourcing Bluetooth speakers from a middleman in Hong Kong, paying high markups with limited quality control. They wanted to source directly from manufacturers but lacked the local presence and expertise to verify suppliers.',
      solution: 'We conducted a comprehensive supplier search across Guangdong province, identifying 12 qualified manufacturers. After on-site audits, we shortlisted 3 factories that met the client\'s quality standards and production capacity requirements. We negotiated pricing directly with manufacturers, eliminating middleman costs.',
      outcome: 'The client achieved a 35% cost reduction while maintaining product quality. We established an ongoing relationship with the selected manufacturer, implementing regular quality inspections and production monitoring. The client has since expanded their product line using our sourcing services.',
      stats: [
        { label: 'Cost Savings', value: '35%', icon: DollarSign },
        { label: 'Suppliers Verified', value: '12', icon: Shield },
        { label: 'Time to Market', value: '8 weeks', icon: Clock },
        { label: 'Defect Rate', value: '<1%', icon: CheckCircle }
      ]
    },
    {
      id: 2,
      title: 'European Brand Launches Sustainable Home Décor Line',
      client: 'European Home & Living Brand',
      industry: 'Home & Garden',
      duration: '12 weeks',
      result: '12-week turnaround',
      challenge: 'A European home décor brand wanted to launch a new sustainable product line using eco-friendly materials. They needed manufacturers who could meet strict EU environmental certifications while maintaining competitive pricing and quality.',
      solution: 'We identified manufacturers specializing in sustainable materials and verified their environmental certifications (ISO 14001, FSC). We coordinated sample development, conducted material testing, and managed the entire production process with strict quality controls at every stage.',
      outcome: 'The client successfully launched their sustainable product line within 12 weeks. All products met EU environmental standards and received positive market reception. The line achieved 20% higher margins than their previous collections due to competitive sourcing costs.',
      stats: [
        { label: 'Launch Time', value: '12 weeks', icon: Clock },
        { label: 'Margin Increase', value: '20%', icon: TrendingUp },
        { label: 'Certifications', value: '3', icon: Award },
        { label: 'Product SKUs', value: '24', icon: Users }
      ]
    },
    {
      id: 3,
      title: 'Australian Fashion Brand Scales Production 3x',
      client: 'Australian Fashion Retailer',
      industry: 'Apparel & Textiles',
      duration: '6 months',
      result: '3x production scale',
      challenge: 'An Australian fashion brand was struggling to scale production to meet growing demand. Their existing suppliers couldn\'t handle increased volumes while maintaining quality, and they needed to diversify their supplier base to reduce risk.',
      solution: 'We conducted a comprehensive audit of their existing supply chain and identified gaps. We then sourced and verified additional manufacturers with the capacity to handle their growing volumes. We implemented a supplier diversification strategy with 3 primary and 2 backup manufacturers.',
      outcome: 'Within 6 months, the client tripled their production capacity while maintaining consistent quality across all suppliers. The diversified supplier base reduced their supply chain risk by 60% and improved lead times by 25%.',
      stats: [
        { label: 'Production Scale', value: '3x', icon: TrendingUp },
        { label: 'Risk Reduction', value: '60%', icon: Shield },
        { label: 'Lead Time Improvement', value: '25%', icon: Clock },
        { label: 'Supplier Network', value: '5', icon: Users }
      ]
    },
    {
      id: 4,
      title: 'Middle East Importer Launches Auto Parts Business',
      client: 'Middle East Automotive Importer',
      industry: 'Automotive Parts',
      duration: '10 weeks',
      result: 'Business launch',
      challenge: 'A new automotive parts importer in the Middle East needed to source reliable aftermarket parts from China. They had no existing supplier network and needed comprehensive support from sourcing to shipping.',
      solution: 'We built a complete supplier network for their product range, conducting extensive factory audits and quality testing. We established quality standards specific to their market requirements and coordinated all logistics including customs clearance for the Middle East market.',
      outcome: 'The client successfully launched their auto parts business with a reliable supply chain. They now import over 200 SKUs from verified manufacturers with consistent quality and competitive pricing.',
      stats: [
        { label: 'Product SKUs', value: '200+', icon: Users },
        { label: 'Suppliers Verified', value: '8', icon: Shield },
        { label: 'Time to Market', value: '10 weeks', icon: Clock },
        { label: 'Quality Rating', value: '98%', icon: CheckCircle }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-300 font-semibold text-sm uppercase tracking-wide">Success Stories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-brand-200 leading-relaxed">
              Real examples of how we've helped businesses source quality products from China, reduce costs, and build reliable supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gray-50 p-8 border-b border-gray-200">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-brand-100 text-brand-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-gray-500 text-sm">
                      Client: {study.client}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{study.title}</h2>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-white">
                  {study.stats.map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="flex justify-center mb-2">
                        <stat.icon className="w-6 h-6 text-brand-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="p-8 grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-2">
                        <span className="text-red-600 font-bold text-sm">!</span>
                      </div>
                      Challenge
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
                        <span className="text-blue-600 font-bold text-sm">→</span>
                      </div>
                      Solution
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mr-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      </div>
                      Outcome
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{study.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Results Speak for Themselves
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Completed', icon: Globe },
              { value: '35%', label: 'Average Cost Savings', icon: DollarSign },
              { value: '98%', label: 'Client Satisfaction', icon: Award },
              { value: '50+', label: 'Countries Served', icon: Users }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 text-center">
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-brand-800" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-lg text-brand-200 mb-8">
            Contact us to discuss your sourcing needs. We'll create a customized solution for your business.
          </p>
          <Link
            to="/contact"
            className="bg-white text-brand-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-50 transition-colors inline-flex items-center"
          >
            Start Your Success Story
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;