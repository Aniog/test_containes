import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  CheckCircle2, 
  Star,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Factory,
  Globe
} from 'lucide-react'

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      client: 'US Retail Chain',
      industry: 'Home & Garden',
      product: 'Home Decor & Gift Items',
      challenge: 'Client was struggling to find reliable suppliers for home decor products. Previous suppliers had inconsistent quality and missed delivery deadlines.',
      solution: 'We sourced 3 verified factories, conducted factory audits, and implemented a QC inspection process for every shipment.',
      results: [
        { metric: 'Cost Reduction', value: '25%', description: 'Lower sourcing costs through direct factory relationships' },
        { metric: 'Quality Improvement', value: '40%', description: 'Reduced defect rate from 15% to 9%' },
        { metric: 'On-time Delivery', value: '98%', description: 'Improved delivery reliability from 70% to 98%' }
      ],
      testimonial: 'SSourcing China transformed our supply chain. We now have reliable suppliers and consistent quality.',
      clientTitle: 'Procurement Director, US Retail Chain',
      image: 'home-decor-sourcing'
    },
    {
      id: 2,
      client: 'European Electronics Brand',
      industry: 'Electronics',
      product: 'Consumer Electronics & Accessories',
      challenge: 'Client needed to expand their supplier base for electronic components while maintaining strict quality standards and compliance requirements.',
      solution: 'We identified 5 qualified electronics manufacturers, conducted technical capability assessments, and set up a quality control protocol.',
      results: [
        { metric: 'Lead Time Reduction', value: '30%', description: 'Faster production cycles through optimized supplier selection' },
        { metric: 'Cost Savings', value: '18%', description: 'Negotiated better pricing through volume consolidation' },
        { metric: 'Defect Rate', value: '< 2%', description: 'Achieved industry-leading quality standards' }
      ],
      testimonial: 'The team\'s technical knowledge and attention to detail made all the difference. Our products now meet European standards consistently.',
      clientTitle: 'Supply Chain Manager, European Electronics Brand',
      image: 'electronics-sourcing'
    },
    {
      id: 3,
      client: 'Australian Apparel Brand',
      industry: 'Apparel & Textiles',
      product: 'Fashion Apparel & Accessories',
      challenge: 'Client was looking for a long-term manufacturing partner for their fashion brand but had concerns about ethical sourcing and quality consistency.',
      solution: 'We found BSCI-certified factories, conducted social compliance audits, and established a long-term partnership with quality controls.',
      results: [
        { metric: 'Partner Stability', value: '3+ years', description: 'Established long-term partnership with reliable factory' },
        { metric: 'Quality Consistency', value: '95%', description: 'First-pass quality rate improved significantly' },
        { metric: 'Ethical Compliance', value: '100%', description: 'All suppliers meet BSCI and WRAP standards' }
      ],
      testimonial: 'We now have a trusted manufacturing partner who understands our brand values and quality requirements.',
      clientTitle: 'Founder, Australian Apparel Brand',
      image: 'apparel-sourcing'
    },
    {
      id: 4,
      client: 'Canadian Industrial Distributor',
      industry: 'Industrial Equipment',
      product: 'Power Tools & Hardware',
      challenge: 'Client needed to diversify their supplier base and find cost-effective alternatives without compromising on quality or safety certifications.',
      solution: 'We identified alternative manufacturers, conducted comparative testing, and negotiated favorable terms while ensuring all safety standards were met.',
      results: [
        { metric: 'Supplier Options', value: '+200%', description: 'Expanded supplier base from 2 to 6 qualified manufacturers' },
        { metric: 'Cost Optimization', value: '22%', description: 'Reduced costs through competitive sourcing' },
        { metric: 'Certification Compliance', value: '100%', description: 'All products meet required safety standards' }
      ],
      testimonial: 'SSourcing China helped us build a robust supplier network that gives us flexibility and competitive pricing.',
      clientTitle: 'Purchasing Manager, Canadian Industrial Distributor',
      image: 'industrial-sourcing'
    },
    {
      id: 5,
      client: 'UK E-commerce Seller',
      industry: 'Toys & Gifts',
      product: 'Children\'s Toys & Games',
      challenge: 'Client was launching a new toy product line and needed help with product development, safety testing, and finding compliant manufacturers.',
      solution: 'We assisted with design refinement, coordinated safety testing (EN71, ASTM), and found certified manufacturers for mass production.',
      results: [
        { metric: 'Time to Market', value: '-35%', description: 'Faster product launch through efficient coordination' },
        { metric: 'Safety Compliance', value: '100%', description: 'All products passed required safety certifications' },
        { metric: 'Cost Efficiency', value: '20%', description: 'Optimized manufacturing costs without quality compromise' }
      ],
      testimonial: 'From prototype to production, the team was with us every step of the way. Our product launch was a success.',
      clientTitle: 'Product Development Director, UK E-commerce Seller',
      image: 'toys-sourcing'
    },
    {
      id: 6,
      client: 'German Automotive Parts Supplier',
      industry: 'Auto Parts',
      product: 'Aftermarket Auto Components',
      challenge: 'Client needed to expand their manufacturing capacity and find additional suppliers for specific auto parts while maintaining IATF 16949 standards.',
      solution: 'We identified IATF-certified factories, conducted technical capability assessments, and set up a quality management system.',
      results: [
        { metric: 'Capacity Increase', value: '+150%', description: 'Expanded production capacity through new suppliers' },
        { metric: 'Quality Standards', value: 'IATF 16949', description: 'All suppliers meet automotive quality standards' },
        { metric: 'Defect Rate', value: '< 0.5%', description: 'Achieved automotive-grade quality levels' }
      ],
      testimonial: 'The automotive industry requires the highest quality standards. SSourcing China delivered consistently.',
      clientTitle: 'Quality Manager, German Automotive Parts Supplier',
      image: 'auto-parts-sourcing'
    }
  ]

  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Factory, value: '200+', label: 'Factories Verified' },
    { icon: Globe, value: '30+', label: 'Countries Served' },
    { icon: Star, value: '4.9/5', label: 'Client Rating' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Real success stories from businesses we've helped source from China. 
              See how our sourcing solutions have delivered measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Link to="/contact">
                  Start Your Success Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 text-blue-600 mb-3">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                        {study.industry}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium">
                        {study.product}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{study.client}</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Challenge</h3>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">Our Solution</h3>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">Key Results</h3>
                        <div className="grid grid-cols-3 gap-4">
                          {study.results.map((result, i) => (
                            <div key={i} className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                              <div className="text-xs text-gray-600 mt-1">{result.metric}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-100 pt-6">
                        <blockquote className="text-gray-700 italic mb-4">"{study.testimonial}"</blockquote>
                        <cite className="text-sm text-gray-500 not-italic">— {study.clientTitle}</cite>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 aspect-video lg:aspect-auto">
                    <img
                      data-strk-img-id={`case-study-${study.id}-img`}
                      data-strk-img={`[case-study-${study.id}-client] [case-study-${study.id}-industry] [case-study-${study.id}-product]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.client}
                      className="w-full h-full object-cover"
                    />
                    <span id={`case-study-${study.id}-client`} className="hidden">{study.client}</span>
                    <span id={`case-study-${study.id}-industry`} className="hidden">{study.industry}</span>
                    <span id={`case-study-${study.id}-product`} className="hidden">{study.product}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have experience sourcing across a wide range of industries.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Electronics', 'Home & Garden', 'Apparel', 'Toys & Gifts', 'Auto Parts', 'Industrial', 'Health & Beauty', 'Sports & Outdoors', 'Food & Beverage', 'Packaging', 'Construction', 'Medical'].map((industry, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center border border-gray-100">
                <span className="text-sm font-medium text-gray-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results. Contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/how-it-works">Learn Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
