import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, TrendingUp, Users, Clock, 
  Target, Package, Star, Quote
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 'electronics-retailer-expansion',
      title: 'Electronics Retailer Expands Product Line',
      client: 'US-based electronics retailer',
      industry: 'Electronics',
      duration: '18 months ongoing partnership',
      challenge: 'A growing US electronics retailer needed to source 15 different product categories from China while maintaining consistent quality across hundreds of SKUs. Their previous direct sourcing approach led to quality inconsistencies and communication challenges.',
      solution: 'SSourcing China implemented a comprehensive sourcing solution, identifying and verifying specialized factories for each product category. We established quality standards, regular inspection schedules, and efficient communication channels.',
      results: [
        'Reduced sourcing time by 60%',
        '99.2% quality pass rate across 500+ orders',
        'Consolidated from 30+ unknown suppliers to 15 verified partners',
        'Saved estimated 25% on quality-related costs',
        'Established reliable 4-6 week lead times',
      ],
      metrics: [
        { label: 'Time Saved', value: '60%' },
        { label: 'Quality Pass Rate', value: '99.2%' },
        { label: 'Orders Managed', value: '500+' },
        { label: 'Cost Reduction', value: '25%' },
      ],
      testimonial: {
        text: 'SSourcing China transformed our China operations. We went from constantly firefighting quality issues to having a reliable, consistent supply chain. Their team feels like an extension of our own.',
        author: 'Michael Chen',
        role: 'Supply Chain Director',
        company: 'TechMart Electronics',
      },
    },
    {
      id: 'furniture-wholesaler',
      title: 'Furniture Wholesaler Streamlines Supply Chain',
      client: 'European furniture wholesaler',
      industry: 'Furniture',
      duration: '24 months ongoing partnership',
      challenge: 'A European furniture wholesaler struggled with inconsistent quality and delayed shipments from multiple unverified suppliers. They needed to consolidate their supply chain while improving delivery reliability.',
      solution: 'We conducted thorough supplier verification across their existing factories, identifying which were truly capable. We consolidated to 3 verified factories with full compliance documentation and established rigorous QC protocols.',
      results: [
        '100% on-time delivery rate achieved',
        'Zero quality issues in 24 months',
        'Reduced lead times by 30%',
        'Consolidated from 8 suppliers to 3 verified partners',
        'Full compliance documentation for EU market',
      ],
      metrics: [
        { label: 'On-Time Delivery', value: '100%' },
        { label: 'Suppliers Consolidated', value: '8→3' },
        { label: 'Lead Time Reduction', value: '30%' },
        { label: 'Quality Issues', value: '0' },
      ],
      testimonial: {
        text: 'The difference before and after working with SSourcing China is night and day. We went from constant stress about delayed containers and quality returns to having complete confidence in our supply chain.',
        author: 'Hans Mueller',
        role: 'Operations Manager',
        company: 'Eurowood Furniture',
      },
    },
    {
      id: 'apparel-brand-launch',
      title: 'Apparel Brand Launches New Collection',
      client: 'Canadian fashion brand',
      industry: 'Apparel',
      duration: '8 weeks for initial launch',
      challenge: 'A Canadian fashion brand needed to launch a new clothing line within a tight 8-week timeframe. They required ethical manufacturing verification and needed to ensure production quality while meeting their launch deadline.',
      solution: 'Our team quickly identified suitable factories with ethical certification, conducted rapid verification, and implemented accelerated sample approval. We provided daily production updates to ensure timeline compliance.',
      results: [
        'Full production completed within 6 weeks',
        '100% ethical manufacturing compliance documentation',
        'Zero quality defects at final inspection',
        'Under-budget by 8% due to effective negotiation',
        'Established foundation for ongoing partnership',
      ],
      metrics: [
        { label: 'Production Time', value: '6 weeks' },
        { label: 'Quality Rate', value: '100%' },
        { label: 'Budget Savings', value: '8%' },
        { label: 'Compliance', value: '100%' },
      ],
      testimonial: {
        text: 'When we needed to move fast for our launch, SSourcing China delivered. They found us excellent factories, kept production on schedule, and the quality exceeded our expectations. Now they handle all our production.',
        author: 'Sarah Thompson',
        role: 'Founder',
        company: 'Norden Apparel',
      },
    },
    {
      id: 'machinery-manufacturer',
      title: 'Machinery Manufacturer Sources Components',
      client: 'German industrial equipment manufacturer',
      industry: 'Machinery',
      duration: '12 months ongoing partnership',
      challenge: 'A German machinery manufacturer needed to source precision components at competitive prices while ensuring tight tolerances and consistent quality. Their previous supplier had quality consistency issues.',
      solution: 'We identified precision-focused factories with the right certifications, implemented strict quality protocols with CMM inspection reports, and established clear specifications for all components.',
      results: [
        'Achieved consistent ±0.01mm tolerance across all parts',
        '40% cost reduction compared to previous supplier',
        '99.5% first-pass quality acceptance rate',
        'Full technical documentation and traceability',
        'Reduced incoming QC workload by 80%',
      ],
      metrics: [
        { label: 'Cost Savings', value: '40%' },
        { label: 'Tolerance Achieved', value: '±0.01mm' },
        { label: 'First-Pass Rate', value: '99.5%' },
        { label: 'QC Workload', value: '-80%' },
      ],
      testimonial: {
        text: 'The precision quality we needed was challenging to find, but SSourcing China delivered factories that could meet our German standards. Their QC protocols and documentation are thorough. We trust them completely.',
        author: 'Klaus Weber',
        role: 'Procurement Director',
        company: 'PrecisionTech GmbH',
      },
    },
  ];

  const industries = [
    'Electronics', 'Machinery', 'Textiles', 'Furniture', 
    'Home Goods', 'Industrial Parts', 'Packaging', 'Consumer Goods'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              See how we've helped businesses across industries transform their China 
              sourcing operations with verified suppliers, quality assurance, and reliable logistics.
            </p>
            <Link to="/contact" className="btn-primary">
              Start Your Success Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <section 
          key={study.id}
          id={study.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="badge-blue">{study.industry}</span>
                  <span className="text-gray-500 text-sm">{study.duration}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {study.title}
                </h2>
                <p className="text-lg text-gray-600">
                  <span className="font-medium">Client:</span> {study.client}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {study.metrics.map((metric, i) => (
                  <div key={i} className="bg-blue-50 rounded-xl p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-600">{metric.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="grid lg:grid-cols-2 gap-10">
                <div>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-red-500" />
                      The Challenge
                    </h3>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Package className="w-5 h-5 text-blue-500" />
                      Our Solution
                    </h3>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    Results Achieved
                  </h3>
                  <div className="space-y-3 mb-8">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <Quote className="w-10 h-10 text-blue-300 mb-4" />
                <p className="text-lg text-gray-700 italic mb-6">
                  "{study.testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-semibold">
                      {study.testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                    <div className="text-sm text-gray-500">
                      {study.testimonial.role}, {study.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Industries Served */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <p>Our experience spans across diverse industries</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 font-medium">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the 200+ companies that trust SSourcing China for their China sourcing operations. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/how-it-works" className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-colors">
              Learn Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
