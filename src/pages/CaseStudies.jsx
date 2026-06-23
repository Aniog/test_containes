import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, Shield, DollarSign, Users, Globe, CheckCircle } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      category: 'Electronics',
      title: 'US Retailer Sourced Smart Home Devices',
      client: 'TechHome Solutions (USA)',
      challenge: 'A US-based retailer wanted to launch a line of smart home devices but had no experience sourcing from China. They were concerned about supplier reliability and quality control.',
      solution: 'We conducted comprehensive supplier research, verified 8 factories, coordinated sample testing, and managed the entire QC process for a 50,000-unit order.',
      results: [
        { label: 'Cost Savings', value: '35%', description: 'compared to previous supplier' },
        { label: 'Time to Market', value: '3 months', description: 'from concept to delivery' },
        { label: 'Quality Pass Rate', value: '98%', description: 'first inspection pass rate' }
      ],
      testimonial: 'SSourcing China made the entire process seamless. Their factory verification gave us confidence, and their QC inspections ensured we received exactly what we ordered.'
    },
    {
      id: 2,
      category: 'Textiles',
      title: 'European Brand Launched Private Label Clothing',
      client: 'Urban Style (Germany)',
      challenge: 'A European fashion brand needed to launch a private label clothing line with unique designs. They needed help with fabric sourcing, manufacturing, and quality control.',
      solution: 'We sourced fabric suppliers, identified suitable factories, managed the production process, and coordinated shipping. The entire project was managed from our Shenzhen office.',
      results: [
        { label: 'Time Saved', value: '2 months', description: 'faster time-to-market' },
        { label: 'MOQ Achieved', value: '500 pcs', description: 'per color per style' },
        { label: 'Repeat Orders', value: '4x', description: 'in the first year' }
      ],
      testimonial: 'Their expertise in textiles and local knowledge was invaluable. They found us factories that could handle our smaller quantities while maintaining quality.'
    },
    {
      id: 3,
      category: 'Industrial',
      title: 'Australian Company Sourced Industrial Equipment',
      client: 'BuildPro Equipment (Australia)',
      challenge: 'An Australian construction equipment company needed to source specialized industrial tools from China. They required strict quality standards and certification compliance.',
      solution: 'We identified certified manufacturers, conducted factory audits, performed pre-shipment inspections, and coordinated sea freight to Australia.',
      results: [
        { label: 'Cost Reduction', value: '40%', description: 'compared to Australian suppliers' },
        { label: 'Certifications', value: '100%', description: 'all required certifications obtained' },
        { label: 'On-Time Delivery', value: '98%', description: 'shipments arrived on schedule' }
      ],
      testimonial: 'The factory verification was thorough - they even discovered that one supplier was misrepresenting their certifications. That alone saved us from potential legal issues.'
    },
    {
      id: 4,
      category: 'Consumer Goods',
      title: 'Canadian Startup Launched Kitchenware Line',
      client: 'HomeChef (Canada)',
      challenge: 'A Canadian startup wanted to launch a premium kitchenware line but had limited capital. They needed to find factories willing to work with smaller orders.',
      solution: 'We negotiated with factories to accept lower MOQs, sourced quality materials, and provided QC inspections. We also helped with packaging design and sourcing.',
      results: [
        { label: 'Initial Order', value: '2,000 units', description: 'across 5 products' },
        { label: 'Cost per Unit', value: '45% lower', description: 'than North American made' },
        { label: 'Growth', value: '3x', description: 'in first year of sales' }
      ],
      testimonial: 'They understood our startup constraints and found factories that were willing to work with our smaller initial orders. Now we\'re placing much larger orders.'
    }
  ];

  const stats = [
    { icon: DollarSign, number: '$50M+', label: 'Order Value Managed' },
    { icon: Globe, number: '30+', label: 'Countries Served' },
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Shield, number: '2000+', label: 'Factories Verified' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Real success stories from businesses we've helped source from China
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-blue-900 mx-auto mb-2" />
                <div className="text-3xl font-bold text-blue-900">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-sm font-medium rounded-full mb-4">
                    {study.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h2>
                  <p className="text-gray-500 mb-6">{study.client}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-gray-700 italic mb-4">"{study.testimonial}"</p>
                    <p className="text-sm text-gray-500">- Client Testimonial</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Results</h3>
                  <div className="space-y-4">
                    {study.results.map((result, i) => (
                      <div key={i} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-600">{result.label}</span>
                          <span className="text-2xl font-bold text-blue-900">{result.value}</span>
                        </div>
                        <p className="text-sm text-gray-500">{result.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Let us help you source from China with confidence. Get a free consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;