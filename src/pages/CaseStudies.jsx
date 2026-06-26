import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2,
  Users,
  DollarSign,
  Clock,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Shield,
  Package
} from 'lucide-react';

const caseStudies = [
  {
    id: 'furniture-retailer',
    client: 'European Furniture Retailer',
    industry: 'Home Goods',
    clientSize: 'Mid-sized retailer',
    timeline: '8 months',
    services: ['Supplier Verification', 'Quality Control', 'Production Monitoring'],
    challenge: 'A European furniture retailer needed to diversify their supply chain away from a single manufacturer. They required finding 2-3 verified factories capable of producing 50,000 units annually while maintaining strict quality standards for their premium product line.',
    approach: [
      'Conducted thorough research on Chinese furniture manufacturing regions',
      'Identified and visited 12 potential factories',
      'Performed detailed capability assessments including equipment audits',
      'Selected 3 factories that met quality and capacity requirements',
      'Implemented a three-stage QC inspection process'
    ],
    results: [
      { metric: 'Cost Reduction', value: '28%', description: 'Compared to previous supplier' },
      { metric: 'Quality Rate', value: '99.4%', description: 'First-pass quality' },
      { metric: 'On-Time Delivery', value: '97%', description: 'Over 8 months' },
      { metric: 'Suppliers Found', value: '3', description: 'Verified factories' }
    ],
    testimonial: {
      quote: "The level of detail in their factory verification process gave us confidence we hadn't had before. We now have reliable suppliers we can trust.",
      author: "Operations Director",
      company: "Confidential"
    },
    image: 'furniture manufacturing warehouse'
  },
  {
    id: 'electronics-brand',
    client: 'US Consumer Electronics Startup',
    industry: 'Consumer Electronics',
    clientSize: 'Startup (Series A)',
    timeline: '6 months',
    services: ['Supplier Search', 'Sample Development', 'Quality Control', 'Shipping Coordination'],
    challenge: 'A US startup launching a smart home device needed to find manufacturers capable of producing 10,000 units with strict quality requirements. Their challenge was finding suppliers willing to work with a first-time overseas buyer while meeting tight timelines for a product launch.',
    approach: [
      'Identified 8 factories with relevant experience',
      'Conducted factory audits and capability assessments',
      'Coordinated sample production with 3 shortlisted factories',
      'Facilitated iterative sample improvements over 6 weeks',
      'Implemented AQL-based inspection protocol'
    ],
    results: [
      { metric: 'Time-to-Market', value: '40%', description: 'Faster than planned' },
      { metric: 'Quality Rate', value: '99.2%', description: 'Final inspection' },
      { metric: 'Sample Iterations', value: '3', description: 'To achieve specs' },
      { metric: 'Units Shipped', value: '10,500', description: 'On schedule' }
    ],
    testimonial: {
      quote: "SSourcing China made our first experience with Chinese manufacturing smooth and successful. Their expertise saved us months of trial and error.",
      author: "CEO",
      company: "Confidential"
    },
    image: 'electronics factory assembly'
  },
  {
    id: 'packaging-company',
    client: 'Australian Packaging Company',
    industry: 'Packaging',
    clientSize: 'Large enterprise',
    timeline: '12 months ongoing',
    services: ['Supplier Verification', 'Factory Audit', 'Quality Control', 'Logistics Coordination'],
    challenge: 'An Australian packaging company sought to source sustainable packaging materials from China. They needed suppliers with FSC certification, competitive pricing, and the ability to meet Australia\'s import requirements. Previous attempts had failed due to quality inconsistencies.',
    approach: [
      'Focused search on certified sustainable packaging manufacturers',
      'Conducted social compliance and environmental audits',
      'Verified FSC chain of custody documentation',
      'Established QC checkpoints at critical production stages',
      'Coordinated logistics including customs documentation'
    ],
    results: [
      { metric: 'Cost Savings', value: '35%', description: 'Vs. local sourcing' },
      { metric: 'Certifications Verified', value: '100%', description: 'All suppliers certified' },
      { metric: 'Quality Issues', value: '2', description: 'Detected pre-shipment' },
      { metric: 'Repeat Orders', value: '6', description: 'In first year' }
    ],
    testimonial: {
      quote: "The audit process was thorough and professional. They helped us find suppliers that met our sustainability standards without compromising on quality or price.",
      author: "Supply Chain Manager",
      company: "Confidential"
    },
    image: 'sustainable packaging factory'
  },
  {
    id: 'fitness-brand',
    client: 'Canadian Fitness Equipment Brand',
    industry: 'Sports & Fitness',
    clientSize: 'Growing brand',
    timeline: '10 months',
    services: ['Supplier Search', 'Factory Audit', 'Quality Control', 'Production Monitoring'],
    challenge: 'A Canadian fitness brand needed to scale production of their resistance band and yoga mat line. They required factories that could handle MOQs of 5,000+ units while meeting North American safety standards (CPSC, ASTM) and maintaining competitive pricing.',
    approach: [
      'Identified factories specializing in fitness accessories',
      'Conducted capability and compliance audits',
      'Coordinated safety testing with certified laboratories',
      'Implemented during-production inspections',
      'Established clear communication protocols'
    ],
    results: [
      { metric: 'Production Capacity', value: '15,000', description: 'Units/month achieved' },
      { metric: 'Testing Costs', value: '20%', description: 'Reduction through coordination' },
      { metric: 'Defect Rate', value: '<0.5%', description: 'Final quality check' },
      { metric: 'Client Satisfaction', value: '100%', description: 'No returns due to quality' }
    ],
    testimonial: {
      quote: "Their understanding of North American compliance requirements saved us significant time and money. We hit our launch target with zero quality issues.",
      author: "Product Director",
      company: "Confidential"
    },
    image: 'fitness equipment manufacturing'
  }
];

const CaseStudyCard = ({ study, isFeatured = false }) => {
  return (
    <div className={`bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow ${isFeatured ? 'lg:grid lg:grid-cols-2' : ''}`}>
      {isFeatured && (
        <div 
          className="aspect-video lg:aspect-auto bg-gradient-to-br from-neutral-100 to-neutral-200"
          data-strk-bg-id={`case-study-${study.id}-featured-m4n5o6`}
          data-strk-bg={`[case-study-${study.id}-title]`}
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="600"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Building2 className="w-24 h-24 text-neutral-300" />
          </div>
        </div>
      )}
      <div className={`p-6 lg:p-8 ${isFeatured ? '' : ''}`}>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
            {study.industry}
          </span>
          <span className="text-xs text-neutral-500">{study.clientSize}</span>
          <span className="text-xs text-neutral-500">{study.timeline}</span>
        </div>

        <h3 id={`case-study-${study.id}-title`} className="text-2xl font-bold text-neutral-900 mb-2">{study.client}</h3>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-neutral-700 mb-2">Services Provided</h4>
          <div className="flex flex-wrap gap-2">
            {study.services.map((service) => (
              <span key={service} className="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded">
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-neutral-700 mb-2">Challenge</h4>
          <p className="text-neutral-600 text-sm">{study.challenge}</p>
        </div>

        {isFeatured && (
          <>
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-neutral-700 mb-2">Our Approach</h4>
              <ul className="space-y-2">
                {study.approach.map((step, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-success-500 flex-shrink-0 mt-0.5" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-neutral-700 mb-3">Results</h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {study.results.map((result) => (
                  <div key={result.metric} className="bg-neutral-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-primary-800">{result.value}</div>
                    <div className="text-xs text-neutral-600">{result.metric}</div>
                    <div className="text-xs text-neutral-400">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {study.testimonial && (
              <div className="border-t border-neutral-100 pt-4">
                <blockquote className="text-neutral-600 italic text-sm mb-2">
                  "{study.testimonial.quote}"
                </blockquote>
                <p className="text-xs text-neutral-500">
                  — {study.testimonial.author}, {study.testimonial.company}
                </p>
              </div>
            )}
          </>
        )}

        {!isFeatured && (
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-800 text-sm mt-4"
          >
            Read Full Case Study
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary-300 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Real results for real businesses. See how we've helped companies overcome China sourcing challenges and achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Featured Case Study</span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3">In-Depth Success Story</h2>
          </div>
          <CaseStudyCard study={caseStudies[0]} isFeatured={true} />
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">More Examples</span>
            <h2 className="text-2xl lg:text-3xl font-bold mt-3">Additional Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.slice(1).map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">By The Numbers</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3 mb-4">Results We Deliver</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary-800" />
              </div>
              <div className="text-3xl font-bold text-primary-800 mb-1">25-35%</div>
              <div className="text-neutral-600">Average Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-primary-800" />
              </div>
              <div className="text-3xl font-bold text-primary-800 mb-1">98%+</div>
              <div className="text-neutral-600">Quality Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-800" />
              </div>
              <div className="text-3xl font-bold text-primary-800 mb-1">40%</div>
              <div className="text-neutral-600">Faster Time-to-Market</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-800" />
              </div>
              <div className="text-3xl font-bold text-primary-800 mb-1">500+</div>
              <div className="text-neutral-600">Verified Suppliers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-primary-200 mb-8">
            Let us help you achieve similar results. Get started with a free consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
