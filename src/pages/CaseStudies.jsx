import React from 'react'
import { Link } from 'react-router-dom'
import { 
  CheckCircle, 
  TrendingDown, 
  Shield, 
  Package, 
  ArrowRight,
  BarChart3,
  Users,
  Truck
} from 'lucide-react'

const CaseStudies = () => {
  const cases = [
    {
      id: 1,
      title: 'US Retailer Reduces Sourcing Costs by 30%',
      client: 'Home Decor Retailer, USA',
      industry: 'Home & Garden',
      challenge: 'A US-based home decor retailer was struggling with high sourcing costs and inconsistent quality from their existing suppliers. They needed to reduce costs while maintaining quality standards.',
      solution: 'We conducted a comprehensive supplier search, identified three qualified factories, conducted on-site audits, and negotiated competitive pricing. We also implemented a quality inspection process.',
      results: [
        '30% reduction in sourcing costs',
        '50% faster lead times',
        'Zero quality issues in 12 months',
        'Established long-term relationship with 2 reliable suppliers'
      ],
      metrics: {
        costReduction: '30%',
        leadTime: '50% faster',
        qualityIssues: '0',
        suppliers: '2'
      },
      testimonial: 'Working with SSourcing China has transformed our sourcing. We\'ve reduced costs significantly while actually improving quality. Their team is professional, responsive, and truly cares about our success.',
      clientName: 'John Smith',
      clientTitle: 'CEO, HomeDecor USA'
    },
    {
      id: 2,
      title: 'European Fashion Brand Ensures Product Quality',
      client: 'Fashion Brand, Germany',
      industry: 'Fashion & Accessories',
      challenge: 'A European fashion brand had experienced quality issues with previous orders from China, including color fading, poor stitching, and sizing inconsistencies. They needed a reliable partner to ensure quality.',
      solution: 'We verified three potential suppliers, conducted pre-production meetings to clarify specifications, implemented during-production inspections, and conducted pre-shipment inspections before each shipment.',
      results: [
        'Zero defective products delivered to customers',
        '100% compliance with quality standards',
        'Improved customer satisfaction ratings',
        'Successful launch in 5 new markets'
      ],
      metrics: {
        defectiveRate: '0%',
        compliance: '100%',
        markets: '5 new',
        reorders: '3'
      },
      testimonial: 'Thanks to SSourcing China\'s quality control process, we can now confidently order from China. The inspection reports give us peace of mind, and our customers are happier with the quality.',
      clientName: 'Sarah Mueller',
      clientTitle: 'Head of Sourcing, FashionDE'
    },
    {
      id: 3,
      title: 'Australian Startup Scales from 100 to 10,000 Units',
      client: 'Consumer Electronics Startup, Australia',
      industry: 'Electronics & Gadgets',
      challenge: 'An Australian startup needed to scale production quickly from 100 units to 10,000 units per month while maintaining quality and meeting certification requirements for their new product.',
      solution: 'We identified a factory with proper certifications and scaling capacity, negotiated flexible payment terms, set up a production monitoring schedule, and coordinated with testing labs for product certification.',
      results: [
        'Scaled production 100x in 6 months',
        'Maintained quality consistency across all batches',
        'Obtained CE and FCC certifications',
        'Reduced production cost per unit by 40% at scale'
      ],
      metrics: {
        scaling: '100x',
        timeframe: '6 months',
        costReduction: '40%',
        certifications: '2'
      },
      testimonial: 'SSourcing China was instrumental in our successful product launch. They helped us navigate the complexities of scaling production in China and ensured we met all certification requirements.',
      clientName: 'Michael Chen',
      clientTitle: 'Founder, TechStart Australia'
    },
    {
      id: 4,
      title: 'Canadian Company Diversifies Supplier Base',
      client: 'Automotive Parts Distributor, Canada',
      industry: 'Automotive Parts',
      challenge: 'A Canadian automotive parts distributor was dependent on a single supplier in China and wanted to diversify their supplier base to reduce risk and improve negotiating power.',
      solution: 'We identified and verified five additional qualified suppliers, conducted competitive bidding, helped negotiate better terms with existing supplier, and set up a supplier management system.',
      results: [
        'Diversified to 6 qualified suppliers',
        'Reduced dependency on single supplier from 100% to 30%',
        'Improved negotiating position reduced costs by 15%',
        'Created supplier scorecard system for ongoing evaluation'
      ],
      metrics: {
        suppliers: '6',
        dependency: '30%',
        costReduction: '15%',
        riskReduction: '70%'
      },
      testimonial: 'Diversifying our supplier base was a smart move, and SSourcing China made the process smooth. We now have multiple reliable options and better control over our supply chain.',
      clientName: 'Robert Anderson',
      clientTitle: 'Supply Chain Director, AutoParts Canada'
    },
    {
      id: 5,
      title: 'UK Brand Launches Eco-Friendly Product Line',
      client: 'Sustainable Lifestyle Brand, UK',
      industry: 'Health & Beauty',
      challenge: 'A UK-based sustainable lifestyle brand wanted to launch a new line of eco-friendly products but struggled to find suppliers that could meet their environmental and ethical standards.',
      solution: 'We searched for suppliers with eco-certifications, verified their environmental claims, ensured fair labor practices, coordinated with certification bodies, and helped develop sustainable packaging.',
      results: [
        'Successfully launched 12 eco-friendly SKUs',
        'Obtained B Corp certification for the product line',
        'Reduced packaging waste by 60%',
        'Achieved 150% of first-year sales target'
      ],
      metrics: {
        skus: '12',
        certification: 'B Corp',
        wasteReduction: '60%',
        salesTarget: '150%'
      },
      testimonial: 'Finding suppliers that align with our values was challenging, but SSourcing China understood our requirements and found the right partners. Our eco-friendly line is now our bestseller.',
      clientName: 'Emma Thompson',
      clientTitle: 'Founder, EcoLife UK'
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Real success stories from businesses we've helped source from China
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Proven Results Across Industries</h2>
            <p className="text-lg text-gray-600">
              We've helped businesses of all sizes - from startups to established enterprises - 
              successfully source products from China. Here are some of our success stories.
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-16">
            {cases.map((caseStudy, index) => (
              <div key={caseStudy.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Main Content */}
                  <div className="md:col-span-2 p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {caseStudy.industry}
                      </span>
                      <span className="text-gray-500 text-sm">{caseStudy.client}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-red-600">Challenge</h4>
                      <p className="text-gray-600">{caseStudy.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-blue-600">Our Solution</h4>
                      <p className="text-gray-600">{caseStudy.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-green-600">Results</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 italic mb-3">"{caseStudy.testimonial}"</p>
                      <div>
                        <p className="font-semibold">{caseStudy.clientName}</p>
                        <p className="text-gray-600 text-sm">{caseStudy.clientTitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Sidebar */}
                  <div className="bg-blue-50 p-8">
                    <h4 className="text-lg font-semibold mb-6">Key Metrics</h4>
                    <div className="space-y-6">
                      {Object.entries(caseStudy.metrics).map(([key, value], idx) => (
                        <div key={idx}>
                          <div className="flex items-center space-x-2 mb-1">
                            <BarChart3 className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                          </div>
                          <p className="text-2xl font-bold text-blue-600">{value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-blue-200">
                      <h5 className="font-semibold mb-3">Services Used</h5>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Supplier Sourcing</span>
                        </li>
                        <li className="flex items-center space-x-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Factory Verification</span>
                        </li>
                        <li className="flex items-center space-x-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Quality Inspection</span>
                        </li>
                        <li className="flex items-center space-x-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Production Monitoring</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Our Track Record</h2>
            <p>Numbers that demonstrate our commitment to client success</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'Clients Served' },
              { number: '10,000+', label: 'Suppliers Verified' },
              { number: '50,000+', label: 'Inspections Conducted' },
              { number: '98%', label: 'Client Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Become Our Next Success Story?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today to discuss your sourcing project. We'll create a customized 
            plan to help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-blue-700 hover:bg-blue-50 text-lg">
              Get Free Consultation
            </Link>
            <a href="https://wa.me/8613800000000" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-700 text-lg">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
