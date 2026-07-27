import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Users, TrendingUp, Clock } from 'lucide-react';

const caseStudies = [
  {
    id: 'electronics-brand',
    client: 'TechRetail Inc.',
    location: 'United States',
    industry: 'Electronics',
    title: 'Sourcing 50,000 Wireless Earbuds with Zero Defects',
    challenge: 'TechRetail needed to source a large volume of wireless earbuds for their retail chain. Previous attempts with direct suppliers resulted in quality issues and missed deadlines.',
    solution: 'We identified three verified suppliers, facilitated competitive bidding, and implemented a comprehensive QC protocol including inline and pre-shipment inspections.',
    results: [
      '35% cost reduction compared to previous supplier',
      'Zero defects on final shipment of 50,000 units',
      'Delivered 2 weeks ahead of schedule',
      'Established long-term partnership with factory',
    ],
    metrics: {
      savings: '35%',
      orderValue: '$450,000',
      timeline: '12 weeks',
    },
    imageId: 'case-study-electronics-techretail-img',
    testimonial: {
      quote: 'SSourcing China transformed our supply chain. The quality consistency and cost savings exceeded our expectations.',
      author: 'Michael Chen',
      role: 'Supply Chain Director',
    },
  },
  {
    id: 'furniture-company',
    client: 'HomeStyle Europe',
    location: 'Germany',
    industry: 'Furniture',
    title: 'Launching 120 Furniture SKUs in European Markets',
    challenge: 'HomeStyle Europe wanted to expand their product line with Chinese-manufactured furniture but lacked the expertise to navigate supplier verification, compliance, and logistics.',
    solution: 'We conducted comprehensive supplier audits, ensured all products met EU safety standards, and managed the entire production and shipping process from factory to their distribution centers.',
    results: [
      'Successfully launched 120 SKUs across 4 product categories',
      '30% below target budget',
      '100% compliance with EU safety and environmental standards',
      'Zero customs issues across 15 shipments',
    ],
    metrics: {
      savings: '30%',
      orderValue: '$1.2M',
      timeline: '20 weeks',
    },
    imageId: 'case-study-furniture-homestyle-img',
    testimonial: {
      quote: 'The attention to detail and compliance expertise was invaluable. We couldn\'t have entered the European market without them.',
      author: 'Anna Mueller',
      role: 'CEO',
    },
  },
  {
    id: 'beauty-startup',
    client: 'GlowUp Cosmetics',
    location: 'United States',
    industry: 'Health & Beauty',
    title: 'Startup Beauty Brand Launch with OEM Manufacturing',
    challenge: 'GlowUp had a unique skincare formulation but no manufacturing experience. They needed to find an FDA-compliant manufacturer with reasonable MOQs.',
    solution: 'We found a GMP-certified OEM manufacturer, facilitated product development and testing, negotiated MOQs, and established a complete quality control system.',
    results: [
      'MOQ reduced from 10,000 to 4,000 units through negotiation',
      'First shipment passed all QC tests with 99.5% pass rate',
      'Complete FDA-compliant documentation package',
      'Products launched in market 6 weeks ahead of schedule',
    ],
    metrics: {
      savings: '40%',
      orderValue: '$85,000',
      timeline: '14 weeks',
    },
    imageId: 'case-study-beauty-glowup-img',
    testimonial: {
      quote: 'They found us a manufacturer we never would have discovered on our own. The process was seamless from start to finish.',
      author: 'Sarah Johnson',
      role: 'Founder',
    },
  },
  {
    id: 'industrial-tools',
    client: 'ProTools Global',
    location: 'United Kingdom',
    industry: 'Industrial',
    title: 'Power Tools Export to 8 Countries',
    challenge: 'ProTools needed to source professional-grade power tools for global distribution while meeting varying international certification requirements.',
    solution: 'We coordinated with multiple certified factories, managed parallel production lines, coordinated certifications (CE, UL, PSE), and organized consolidated shipping.',
    results: [
      'Products certified for 8 different markets',
      '30% reduction in total procurement costs',
      'Single consolidated shipment to UK warehouse',
      'Ongoing partnership for new product development',
    ],
    metrics: {
      savings: '30%',
      orderValue: '$2.1M',
      timeline: '24 weeks',
    },
    imageId: 'case-study-industrial-protools-img',
    testimonial: {
      quote: 'Their ability to manage multiple factories and coordinate complex certifications saved us months of development time.',
      author: 'James Wilson',
      role: 'Procurement Manager',
    },
  },
];

const CaseStudies = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
              Success Stories
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              See how we've helped businesses worldwide overcome sourcing challenges and achieve their manufacturing goals.
            </p>
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Start Your Success Story
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={study.id}
                  id={study.id}
                  className="scroll-mt-24 bg-white rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Image & Testimonial */}
                    <div className={`bg-gradient-to-br from-neutral-100 to-neutral-200 p-8 lg:p-12 flex flex-col justify-center ${isEven ? '' : 'lg:order-2'}`}>
                      <div className="mb-8">
                        <div className="w-full aspect-video bg-white/50 rounded-xl flex items-center justify-center mb-6">
                          <span className="text-neutral-400 text-lg">Case Study Image</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">
                            {study.industry}
                          </span>
                          <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full">
                            {study.location}
                          </span>
                        </div>
                      </div>
                      
                      {/* Testimonial */}
                      <div className="bg-white rounded-xl p-6">
                        <div className="flex gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-neutral-600 italic mb-4">
                          "{study.testimonial.quote}"
                        </p>
                        <p className="font-semibold text-neutral-900">
                          {study.testimonial.author}
                        </p>
                        <p className="text-sm text-neutral-500">
                          {study.testimonial.role}, {study.client}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${isEven ? '' : 'lg:order-1'}`}>
                      <p className="text-sm text-neutral-500 mb-2">{study.client}</p>
                      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                        {study.title}
                      </h2>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-4 bg-accent-50 rounded-lg">
                          <TrendingUp className="w-6 h-6 text-accent-600 mx-auto mb-2" />
                          <p className="text-2xl font-bold text-accent-700">{study.metrics.savings}</p>
                          <p className="text-xs text-accent-600">Cost Savings</p>
                        </div>
                        <div className="text-center p-4 bg-primary-50 rounded-lg">
                          <Users className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                          <p className="text-2xl font-bold text-primary-700">{study.metrics.orderValue}</p>
                          <p className="text-xs text-primary-600">Order Value</p>
                        </div>
                        <div className="text-center p-4 bg-neutral-100 rounded-lg">
                          <Clock className="w-6 h-6 text-neutral-600 mx-auto mb-2" />
                          <p className="text-2xl font-bold text-neutral-700">{study.metrics.timeline}</p>
                          <p className="text-xs text-neutral-600">Timeline</p>
                        </div>
                      </div>

                      {/* Challenge */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-neutral-900 mb-2">Challenge</h3>
                        <p className="text-neutral-600">{study.challenge}</p>
                      </div>

                      {/* Solution */}
                      <div className="mb-6">
                        <h3 className="font-semibold text-neutral-900 mb-2">Solution</h3>
                        <p className="text-neutral-600">{study.solution}</p>
                      </div>

                      {/* Results */}
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-3">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result) => (
                            <li key={result} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                              <span className="text-neutral-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let us help you overcome your sourcing challenges and achieve your manufacturing goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent text-lg px-8 py-4">
              Get a Free Consultation
            </Link>
            <Link to="/how-it-works" className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-800 transition-colors">
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
