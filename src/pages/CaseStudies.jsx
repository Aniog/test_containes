import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, CheckCircle, Star, Users, TrendingUp, Clock,
  Award, Shield, Factory, Package, Target, BarChart3
} from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'

const caseStudies = [
  {
    id: 1,
    client: 'European Home Decor Retailer',
    industry: 'Home & Garden',
    location: 'Germany',
    challenge: 'Needed to source 50,000 units of ceramic home decor products with strict European quality standards and a tight 3-month timeline.',
    solution: 'We identified a verified manufacturer in Jingdezhen, conducted thorough factory audits, implemented a comprehensive QC program with AQL standards, and coordinated efficient shipping.',
    results: [
      '40% cost reduction compared to previous supplier',
      '99.2% quality pass rate achieved',
      'Delivered 2 weeks ahead of schedule',
      'Zero customer complaints in first year'
    ],
    metrics: [
      { label: 'Cost Savings', value: '40%' },
      { label: 'Quality Pass Rate', value: '99.2%' },
      { label: 'Time Saved', value: '2 weeks' }
    ],
    testimonial: {
      text: "SSourcing China transformed our supply chain. The quality consistency we achieved was remarkable, and their QC team caught issues we would have missed completely.",
      author: 'Michael Hoffmann',
      role: 'Procurement Director'
    }
  },
  {
    id: 2,
    client: 'US Medical Device Company',
    industry: 'Medical Equipment',
    location: 'United States',
    challenge: 'Required FDA-compliant manufacturing for a new line of patient monitoring devices with full documentation and traceability requirements.',
    solution: 'We performed extensive factory audits, identified compliance gaps, worked with a certified manufacturer to achieve ISO 13485 certification, and established robust documentation procedures.',
    results: [
      '100% FDA compliance achieved',
      'ISO 13485 certification obtained',
      'Complete audit trail established',
      'First shipment cleared customs smoothly'
    ],
    metrics: [
      { label: 'Compliance', value: '100%' },
      { label: 'Certifications', value: 'ISO 13485' },
      { label: 'Documentation', value: 'Complete' }
    ],
    testimonial: {
      text: "Their expertise in medical device compliance saved us months of struggle. They knew exactly what FDA required and how to achieve it with our Chinese manufacturer.",
      author: 'Dr. Sarah Chen',
      role: 'VP of Operations'
    }
  },
  {
    id: 3,
    client: 'Australian Tech Startup',
    industry: 'Consumer Electronics',
    location: 'Australia',
    challenge: 'Limited budget with a need to go from prototype to production in just 60 days for a smart home device launch.',
    solution: 'We expedited the supplier matching process, leveraged existing relationships for priority production, implemented accelerated QC checkpoints, and negotiated favorable payment terms.',
    results: [
      '35-day delivery (ahead of schedule)',
      '35% under initial budget',
      'Successful product launch',
      'Repeat order placed within 3 months'
    ],
    metrics: [
      { label: 'Delivery', value: '35 days' },
      { label: 'Budget Savings', value: '35%' },
      { label: 'Launch', value: 'On Time' }
    ],
    testimonial: {
      text: "We were skeptical about meeting our timeline and budget, but SSourcing China delivered both. Their speed and efficiency exceeded our expectations.",
      author: 'James Wright',
      role: 'CEO & Founder'
    }
  },
  {
    id: 4,
    client: 'UK Fashion Brand',
    industry: 'Textiles & Apparel',
    location: 'United Kingdom',
    challenge: 'Needed to establish a reliable supply chain for a new sustainable fashion line with ethical manufacturing requirements.',
    solution: 'We vetted manufacturers for environmental certifications, established a transparent production process, implemented third-party audits, and created a comprehensive supplier code of conduct.',
    results: [
      'GOTS certification achieved',
      '100% ethical supply chain',
      'Transparent production tracking',
      '35% production cost savings'
    ],
    metrics: [
      { label: 'Cost Savings', value: '35%' },
      { label: 'Certifications', value: 'GOTS' },
      { label: 'Supply Chain', value: 'Ethical' }
    ],
    testimonial: {
      text: "They understood our commitment to sustainability and found manufacturers who shared our values. The transparency in the entire process was exactly what we needed.",
      author: 'Emma Richardson',
      role: 'Head of Supply Chain'
    }
  },
  {
    id: 5,
    client: 'Canadian Outdoor Equipment Retailer',
    industry: 'Sports & Outdoors',
    location: 'Canada',
    challenge: 'Required rugged camping equipment that could withstand harsh Canadian winters while meeting strict safety standards.',
    solution: 'We sourced manufacturers with cold-weather testing capabilities, implemented rigorous quality testing protocols, coordinated with Canadian safety certification bodies, and managed complex logistics.',
    results: [
      'CSA certification obtained',
      'Zero warranty claims in first season',
      'Customer satisfaction scores up 45%',
      'Successfully launched 12 new products'
    ],
    metrics: [
      { label: 'Safety', value: 'CSA' },
      { label: 'Warranty Claims', value: '0' },
      { label: 'CSAT Increase', value: '45%' }
    ],
    testimonial: {
      text: "The quality of their sourcing work is exceptional. Our customers have noticed the difference, and our returns have dropped dramatically.",
      author: 'Robert MacLeod',
      role: 'Product Director'
    }
  },
  {
    id: 6,
    client: 'French Beauty Brand',
    industry: 'Beauty & Personal Care',
    location: 'France',
    challenge: 'Needed high-quality cosmetic packaging that aligned with their luxury brand positioning while meeting EU cosmetic regulations.',
    solution: 'We identified specialized manufacturers with luxury packaging expertise, ensured all materials met EU standards, implemented strict quality controls, and managed the complex supply chain.',
    results: [
      '100% EU regulatory compliance',
      'Luxury-quality packaging delivered',
      '25% cost reduction achieved',
      'Sustainable packaging options introduced'
    ],
    metrics: [
      { label: 'Compliance', value: '100%' },
      { label: 'Cost Savings', value: '25%' },
      { label: 'Products', value: '50+ SKUs' }
    ],
    testimonial: {
      text: "They found packaging that perfectly represents our brand while meeting all EU requirements. The quality exceeded our French expectations.",
      author: 'Claire Dubois',
      role: 'Brand Manager'
    }
  }
]

const CaseStudiesPage = () => {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0])

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[--color-primary] to-[--color-primary-light] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real results for real businesses. See how we've helped companies around the world source products from China successfully.
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-white border-b border-[--color-border]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Clients Served' },
              { icon: <Factory className="w-6 h-6" />, value: '12+', label: 'Years Experience' },
              { icon: <Package className="w-6 h-6" />, value: '10,000+', label: 'Orders Completed' },
              { icon: <Shield className="w-6 h-6" />, value: '98%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[--color-bg-navy-light] rounded-full flex items-center justify-center text-[--color-primary] mx-auto mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[--color-primary]">{stat.value}</div>
                <div className="text-sm text-[--color-text-muted]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-[--color-bg-light]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Featured Success"
            title="Featured Case Study"
            subtitle="See how we helped a European retailer transform their China sourcing operations."
          />
          
          <div className="mt-12 grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-[--color-accent]" fill="currentColor" />
                <span className="text-sm font-medium text-[--color-text-muted]">{selectedCase.industry}</span>
                <span className="text-[--color-border]">|</span>
                <span className="text-sm text-[--color-text-muted]">{selectedCase.location}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-[--color-text-dark] mb-4">{selectedCase.client}</h2>
              
              <div className="mb-6">
                <h4 className="font-semibold text-[--color-text-dark] mb-2">The Challenge</h4>
                <p className="text-[--color-text-muted] text-sm">{selectedCase.challenge}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-[--color-text-dark] mb-2">Our Solution</h4>
                <p className="text-[--color-text-muted] text-sm">{selectedCase.solution}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-[--color-text-dark] mb-3">Results Achieved</h4>
                <div className="space-y-2">
                  {selectedCase.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-[--color-text-muted]">
                      <CheckCircle className="w-4 h-4 text-[--color-success]" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Metrics */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="font-semibold text-[--color-text-dark] mb-4">Key Metrics</h4>
                <div className="grid grid-cols-3 gap-4">
                  {selectedCase.metrics.map((metric, index) => (
                    <div key={index} className="text-center p-4 bg-[--color-bg-light] rounded-xl">
                      <div className="text-2xl font-bold text-[--color-primary]">{metric.value}</div>
                      <div className="text-xs text-[--color-text-muted]">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="bg-[--color-primary] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[--color-accent]" fill="currentColor" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-white/90 italic mb-4">"{selectedCase.testimonial.text}"</blockquote>
                <div>
                  <div className="font-semibold">{selectedCase.testimonial.author}</div>
                  <div className="text-sm text-white/70">{selectedCase.testimonial.role}</div>
                </div>
              </div>
              
              {/* Case Selector */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <h4 className="font-semibold text-[--color-text-dark] mb-3 text-sm">View Other Case Studies</h4>
                <div className="space-y-2">
                  {caseStudies.filter(c => c.id !== selectedCase.id).slice(0, 3).map((caseItem) => (
                    <button
                      key={caseItem.id}
                      onClick={() => setSelectedCase(caseItem)}
                      className="w-full flex items-center justify-between p-3 bg-[--color-bg-light] rounded-lg hover:bg-[--color-bg-navy-light] transition-colors text-left"
                    >
                      <div>
                        <div className="text-sm font-medium text-[--color-text-dark]">{caseItem.client}</div>
                        <div className="text-xs text-[--color-text-muted]">{caseItem.industry}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[--color-text-muted]" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="All Projects"
            title="More Success Stories"
            subtitle="Browse through our portfolio of successful sourcing projects across various industries."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-[--color-bg-light] rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-[--color-accent]" fill="currentColor" />
                    <span className="text-xs font-medium text-[--color-text-muted]">{study.industry}</span>
                    <span className="text-[--color-border]">|</span>
                    <span className="text-xs text-[--color-text-muted]">{study.location}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-[--color-text-dark] mb-3">{study.client}</h3>
                  
                  <p className="text-sm text-[--color-text-muted] mb-4 line-clamp-3">{study.challenge}</p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-[--color-primary]">{metric.value}</div>
                        <div className="text-xs text-[--color-text-muted]">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => setSelectedCase(study)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[--color-primary] hover:text-[--color-primary-light] transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-[--color-bg-light]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industries"
            title="Industries We Serve"
            subtitle="Our experience spans across diverse sectors, each with unique requirements and challenges."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {[
              'Electronics', 'Machinery', 'Textiles', 'Medical', 'Automotive', 
              'Consumer Goods', 'Sports & Outdoors', 'Beauty & Cosmetics',
              'Home & Garden', 'Industrial', 'Packaging', 'Office & Business'
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-sm font-medium text-[--color-text-dark]">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[--color-primary]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-16 h-16 text-[--color-accent-light] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join hundreds of businesses who trust us with their China sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[--color-accent] text-white font-bold text-lg rounded-lg hover:bg-[--color-accent-dark] transition-colors"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudiesPage
