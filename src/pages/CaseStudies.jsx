import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Electronics Manufacturer Sourcing',
      client: 'US-based Retailer',
      industry: 'Electronics',
      challenge: 'Client needed a reliable supplier for smartphone accessories with consistent quality and competitive pricing.',
      solution: 'We identified 5 potential suppliers, conducted factory audits, and negotiated favorable terms. We also implemented a QC process for every shipment.',
      results: [
        { metric: 'Cost Reduction', value: '25%' },
        { metric: 'Quality Defect Rate', value: '< 0.5%' },
        { metric: 'Lead Time', value: 'Reduced by 20%' },
      ],
      testimonial: 'SSourcing China transformed our supply chain. We now have a reliable partner who understands our quality requirements.',
    },
    {
      id: 2,
      title: 'Textile Supplier Development',
      client: 'European Fashion Brand',
      industry: 'Textiles & Apparel',
      challenge: 'Client needed to diversify their supplier base and find new textile manufacturers in China.',
      solution: 'We conducted a comprehensive search, visited 12 factories, and shortlisted 3 suppliers that met their sustainability and quality standards.',
      results: [
        { metric: 'New Suppliers Found', value: '3' },
        { metric: 'Time to Market', value: '2 weeks' },
        { metric: 'Cost Savings', value: '15%' },
      ],
      testimonial: 'The team\'s knowledge of the textile industry in China is impressive. They found exactly what we needed.',
    },
    {
      id: 3,
      title: 'Home Goods Logistics Optimization',
      client: 'Australian E-commerce Store',
      industry: 'Home & Garden',
      challenge: 'Client was struggling with high shipping costs and long lead times for their home goods inventory.',
      solution: 'We consolidated shipments from multiple suppliers, negotiated better freight rates, and optimized the shipping schedule.',
      results: [
        { metric: 'Shipping Cost Reduction', value: '30%' },
        { metric: 'Lead Time', value: 'Reduced by 40%' },
        { metric: 'Inventory Turns', value: 'Improved by 25%' },
      ],
      testimonial: 'Our logistics costs dropped significantly, and our customers are receiving orders faster than ever.',
    },
    {
      id: 4,
      title: 'Machinery Import Project',
      client: 'Canadian Manufacturing Company',
      industry: 'Machinery',
      challenge: 'Client needed to import industrial machinery with specific technical requirements and certifications.',
      solution: 'We found specialized manufacturers, arranged factory acceptance testing, and handled all import documentation and customs clearance.',
      results: [
        { metric: 'Compliance Rate', value: '100%' },
        { metric: 'Project Timeline', value: 'On schedule' },
        { metric: 'Budget Variance', value: '< 2%' },
      ],
      testimonial: 'The attention to detail and technical knowledge made this complex project seamless.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              See how we've helped businesses like yours overcome sourcing challenges and achieve their goals.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((caseStudy, index) => (
              <div key={caseStudy.id} className="bg-slate-50 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-slate-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {caseStudy.industry}
                      </span>
                      <span className="text-sm text-slate-600">Case Study #{caseStudy.id}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{caseStudy.title}</h2>
                    <p className="text-slate-600 mb-6">Client: {caseStudy.client}</p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Challenge</h3>
                        <p className="text-slate-700">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Solution</h3>
                        <p className="text-slate-700">{caseStudy.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">Results</h3>
                        <div className="grid grid-cols-3 gap-4">
                          {caseStudy.results.map((result, idx) => (
                            <div key={idx} className="bg-white p-4 rounded-lg text-center">
                              <div className="text-2xl font-bold text-slate-900">{result.value}</div>
                              <div className="text-sm text-slate-600">{result.metric}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border-l-4 border-slate-900">
                        <p className="text-slate-700 italic">"{caseStudy.testimonial}"</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-200 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="h-12 w-12 text-white" />
                      </div>
                      <p className="text-slate-600 font-medium">Case Study #{caseStudy.id}</p>
                      <p className="text-slate-500 text-sm">{caseStudy.industry}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Numbers that demonstrate our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '25%', label: 'Average Cost Savings' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '10+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl text-center">
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact us today to discuss your sourcing needs and see how we can help your business grow.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
