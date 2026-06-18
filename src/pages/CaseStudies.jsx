import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, TrendingUp, Clock, Shield, Factory, Globe, Star, CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    industry: "Electronics",
    title: "Smart Home Device Sourcing for European Retailer",
    client: "TechHome Solutions (Germany)",
    challenge: "The client needed to source smart home controllers and sensors from China but had no local presence or supplier network. Previous attempts resulted in quality issues and delayed shipments.",
    solution: "We conducted a comprehensive supplier search, verified 15 potential manufacturers, and performed detailed factory audits. We identified three qualified suppliers and facilitated sample evaluation. Our team coordinated production monitoring and pre-shipment inspections.",
    results: [
      "35% reduction in manufacturing costs",
      "Zero quality issues in first shipment",
      "On-time delivery achieved",
      "Long-term supplier relationship established"
    ],
    timeline: "12 weeks from inquiry to first shipment",
    image: "electronics"
  },
  {
    id: 2,
    industry: "Furniture",
    title: "Office Furniture Batch Order for US Distributor",
    client: "OfficePro Inc. (United States)",
    challenge: "A US office furniture distributor needed to source a large volume of desks and chairs from China. They were concerned about quality consistency across multiple factories and tight delivery schedules.",
    solution: "We evaluated five furniture manufacturers, conducted factory audits focusing on production capacity and quality systems. We selected two factories and coordinated production scheduling. Our team performed weekly monitoring and final inspections before shipment.",
    results: [
      "2,500 units delivered on schedule",
      "Zero defects in quality inspection",
      "25% cost savings vs. previous supplier",
      "Successful long-term partnership"
    ],
    timeline: "16 weeks from order to delivery",
    image: "furniture"
  },
  {
    id: 3,
    industry: "Packaging",
    title: "Custom Packaging Solutions for E-commerce Brand",
    client: "PackRight (United Kingdom)",
    challenge: "A growing e-commerce brand needed custom packaging for their products. They struggled to find manufacturers willing to handle smaller orders with custom specifications.",
    solution: "We identified packaging manufacturers specializing in custom work and negotiated favorable terms for their initial order. We coordinated sample production, facilitated design iterations, and managed quality control.",
    results: [
      "40% cost reduction achieved",
      "Custom design successfully produced",
      "Flexible order quantities accommodated",
      "Packaging quality exceeded expectations"
    ],
    timeline: "8 weeks from design to production",
    image: "packaging"
  },
  {
    id: 4,
    industry: "Textiles",
    title: "Sportswear Manufacturing for Brand Launch",
    client: "FitActive (Australia)",
    challenge: "A new sportswear brand needed to launch their product line with reliable manufacturing. They had limited experience with overseas production and concerns about minimum order quantities.",
    solution: "We researched textile manufacturers with sportswear expertise, conducted factory audits, and negotiated MOQs. We coordinated sample development, fabric sourcing, and production planning. Regular inspections ensured quality.",
    results: [
      "Successful brand launch on schedule",
      "Competitive pricing secured",
      "Quality met international standards",
      "Repeat orders placed"
    ],
    timeline: "14 weeks from design to delivery",
    image: "textiles"
  },
  {
    id: 5,
    industry: "Automotive",
    title: "Auto Parts Sourcing for Aftermarket Company",
    client: "AutoParts Direct (Canada)",
    challenge: "An automotive aftermarket parts company needed to source replacement parts from China. They required suppliers with specific quality certifications and the ability to meet automotive industry standards.",
    solution: "We identified manufacturers with IATF 16949 certification, conducted detailed quality audits, and facilitated PPAP documentation. We coordinated sample testing and established quality control protocols.",
    results: [
      "ISO-certified suppliers identified",
      "Quality pass rate: 98%",
      "Complete documentation provided",
      "Ongoing supply relationship"
    ],
    timeline: "10 weeks from search to first order",
    image: "automotive"
  },
  {
    id: 6,
    industry: "Health & Beauty",
    title: "Skincare Product Sourcing for US Brand",
    client: "NaturalGlow (United States)",
    challenge: "A skincare brand needed to source private label products from China. They required GMP-certified manufacturers with clean formulation capabilities and FDA-compliant facilities.",
    solution: "We conducted thorough manufacturer verification focusing on certifications and quality systems. We coordinated formulation development, sample testing, and production. Our team ensured compliance with US regulations.",
    results: [
      "GMP-certified factory selected",
      "FDA-compliant products delivered",
      "Formulation approval in first attempt",
      "Successful market launch"
    ],
    timeline: "18 weeks from inquiry to shipment",
    image: "beauty"
  }
]

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "35%", label: "Average Cost Savings" },
  { value: "98%", label: "Quality Pass Rate" },
  { value: "50+", label: "Countries Served" }
]

const CaseStudies = () => {
  return (
    <div>
      <Helmet>
        <title>Case Studies | Success Stories | SSourcing China</title>
        <meta name="description" content="Explore our success stories helping global businesses source from China. Learn how we've helped clients save costs and ensure quality." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-slate-600">
              Real success stories from businesses we've helped source from China. See how our expertise has delivered results for clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`bg-slate-50 rounded-2xl overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:flex">
                  <div className="lg:w-2/5 bg-gradient-to-br from-slate-200 to-slate-300 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <Factory className="w-20 h-20 text-slate-400 mx-auto mb-4" />
                      <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-600">
                        {study.industry}
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-4">
                      {study.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{study.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-2">Challenge</h4>
                      <p className="text-slate-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-2">Solution</h4>
                      <p className="text-slate-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {study.timeline}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Let us help you find the right suppliers and ensure quality for your China sourcing project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies