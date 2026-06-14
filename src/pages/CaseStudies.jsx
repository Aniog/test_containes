import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { 
  ArrowRight, CheckCircle, TrendingUp, Users, 
  DollarSign, Clock, Package
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    id: 'electronics-startup',
    title: 'E-commerce Electronics Startup',
    industry: 'Electronics',
    challenge: 'A US-based startup needed to source smart home devices for their new product line. They had no experience with China manufacturing and were concerned about quality and supplier reliability.',
    solution: 'We verified 5 potential suppliers, conducted thorough factory audits, and coordinated sample production. Our QC team identified critical quality issues that were corrected before mass production.',
    results: [
      'Found 3 verified suppliers within 2 weeks',
      '40% cost reduction compared to US manufacturing',
      'Zero quality issues on first shipment',
      'Established long-term supplier relationship',
    ],
    image: 'electronics manufacturing quality control',
    client: 'TechStart Inc.',
    timeline: '3 months from inquiry to first shipment',
  },
  {
    id: 'home-decor-retail',
    title: 'Retail Chain Home Decor Sourcing',
    industry: 'Home & Garden',
    challenge: 'A European retail chain needed to expand their home decor product range with competitive pricing. They required consistent quality across multiple product lines and reliable delivery schedules.',
    solution: 'We developed a comprehensive sourcing strategy across 15 product categories. Our team coordinated with multiple factories, implemented quality control processes, and managed consolidation shipping.',
    results: [
      'Sourced 15 product lines successfully',
      'Maintained 98% on-time delivery rate',
      'Achieved 35% margin improvement',
      'Streamlined logistics with consolidation',
    ],
    image: 'home furniture warehouse shipping',
    client: 'HomeStyle Europe',
    timeline: '6 months ongoing partnership',
  },
  {
    id: 'sports-equipment',
    title: 'Sports Equipment Quality Rescue',
    industry: 'Sports & Outdoor',
    challenge: 'A sports equipment distributor received a container of defective products from a new supplier. They needed help assessing the damage, negotiating with the factory, and ensuring future quality.',
    solution: 'We conducted a thorough inspection, documented all defects, and negotiated a partial refund with the supplier. We then implemented a pre-shipment inspection process for all future orders.',
    results: [
      'Recovered $50,000 through negotiation',
      'Prevented defective products from reaching customers',
      'Established quality control protocols',
      'Found alternative verified supplier',
    ],
    image: 'sports equipment quality inspection',
    client: 'ActiveGear Distribution',
    timeline: '2 months (urgent intervention)',
  },
  {
    id: 'fashion-brand',
    title: 'Fashion Brand Production Scaling',
    industry: 'Fashion & Accessories',
    challenge: 'A growing fashion brand needed to scale production while maintaining quality. They were working with inconsistent suppliers and needed help establishing reliable manufacturing processes.',
    solution: 'We audited their existing supplier base, identified capacity issues, and found additional verified factories. We implemented production monitoring and quality checkpoints throughout the process.',
    results: [
      'Increased production capacity by 200%',
      'Reduced defect rate from 8% to 1.5%',
      'Maintained consistent quality standards',
      'On-time delivery improved to 95%',
    ],
    image: 'textile manufacturing fashion production',
    client: 'Urban Threads Co.',
    timeline: '4 months (scaling phase)',
  },
  {
    id: 'industrial-components',
    title: 'Industrial Components Import',
    industry: 'Industrial Equipment',
    challenge: 'A manufacturing company needed specialized industrial components that required precise specifications. Local suppliers were too expensive, and they needed help finding capable manufacturers in China.',
    solution: 'We identified factories with the specific technical capabilities, coordinated prototype development, and managed the production process with detailed quality inspections at each stage.',
    results: [
      'Found 2 qualified suppliers for complex parts',
      'Achieved 55% cost savings',
      'Maintained tight tolerance specifications',
      'Established ongoing supply relationship',
    ],
    image: 'industrial manufacturing precision parts',
    client: 'PrecisionParts Ltd.',
    timeline: '5 months from inquiry to production',
  },
  {
    id: 'packaging-solutions',
    title: 'Packaging Materials Consolidation',
    industry: 'Packaging',
    challenge: 'A food company was sourcing packaging from multiple suppliers with inconsistent quality and high costs. They wanted to consolidate suppliers while maintaining or improving quality.',
    solution: 'We audited existing suppliers, identified consolidation opportunities, and coordinated with selected factories for improved quality control and competitive pricing.',
    results: [
      'Consolidated from 5 to 2 suppliers',
      'Reduced packaging costs by 30%',
      'Improved quality consistency to 99%',
      'Simplified logistics and communication',
    ],
    image: 'packaging manufacturing materials',
    client: 'FreshFoods Inc.',
    timeline: '3 months (consolidation)',
  },
]

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-4">Case Studies</span>
            <h1 className="heading-xl mb-6">Success Stories from Our Clients</h1>
            <p className="text-lead text-slate-300 mb-8">
              Real results from real businesses. See how we've helped companies across industries solve their China sourcing challenges.
            </p>
            <Link to="/contact" className="btn-primary bg-cyan-600 text-white hover:bg-cyan-700">
              Start Your Success Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="space-y-12">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <div 
                      className="absolute inset-0"
                      data-strk-bg-id={`case-bg-${study.id}`}
                      data-strk-bg={`[case-title-${study.id}]`}
                      data-strk-bg-ratio="16x9"
                      data-strk-bg-width="800"
                    />
                    <span id={`case-title-${study.id}`} className="hidden">{study.image}</span>
                  </div>
                  <div className="p-8 lg:p-10">
                    <span className="badge mb-4">{study.industry}</span>
                    <h2 className="heading-md mb-2">{study.title}</h2>
                    <p className="text-sm text-cyan-600 font-medium mb-6">
                      {study.client} • {study.timeline}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-slate-900 mb-2">The Challenge</h3>
                      <p className="text-slate-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold text-slate-900 mb-2">Our Solution</h3>
                      <p className="text-slate-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{result}</span>
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

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge mb-4">Our Track Record</span>
            <h2 className="heading-lg mb-4">Numbers That Speak for Themselves</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, num: '500+', label: 'Clients Served' },
              { icon: Package, num: '5000+', label: 'Orders Completed' },
              { icon: TrendingUp, num: '35%', label: 'Average Cost Savings' },
              { icon: Clock, num: '98%', label: 'On-Time Delivery' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.num}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge mb-4">Testimonials</span>
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "SSourcing China transformed our approach to China manufacturing. Their verification process saved us from what could have been a costly mistake with an unreliable supplier.",
                author: "Michael Chen",
                company: "TechStart Inc."
              },
              {
                quote: "The quality control inspections have been invaluable. We've caught issues before shipment that would have otherwise reached our customers. Worth every penny.",
                author: "Sarah Williams",
                company: "ActiveGear Distribution"
              },
              {
                quote: "Professional, responsive, and thorough. They understand both Western business expectations and Chinese manufacturing realities. A true partner in our supply chain.",
                author: "James Thompson",
                company: "HomeStyle Europe"
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-slate-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-lead text-cyan-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses who trust us with their China sourcing. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-cyan-700 hover:bg-cyan-50">
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/how-it-works" className="btn-outline border-white/30 text-white hover:bg-white/10">
              Learn Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies