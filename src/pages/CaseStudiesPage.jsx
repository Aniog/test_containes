import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingDown, Clock, CheckCircle, Award } from 'lucide-react'

const caseStudies = [
  {
    id: 'led-lighting',
    category: 'Electronics',
    title: 'LED Lighting for US Retailer',
    client: 'Mid-size US lighting distributor',
    challenge: 'The client was paying premium prices to a trading company and experiencing inconsistent quality across batches. They needed direct factory access with reliable QC.',
    solution: 'We identified 4 LED manufacturers in Zhongshan, conducted factory audits, arranged samples, and negotiated direct pricing. We implemented a 3-stage inspection process.',
    results: [
      { label: 'Cost Reduction', value: '40%', icon: TrendingDown },
      { label: 'Lead Time Saved', value: '15 days', icon: Clock },
      { label: 'QC Pass Rate', value: '99.5%', icon: CheckCircle },
    ],
    testimonial: 'SSourcing China helped us cut costs significantly while actually improving quality. Their inspection reports give us complete confidence in every shipment.',
  },
  {
    id: 'custom-furniture',
    category: 'Furniture',
    title: 'Custom Furniture for European Brand',
    client: 'Scandinavian furniture brand expanding to Asia sourcing',
    challenge: 'The brand needed to maintain their strict design standards while sourcing from Chinese factories for the first time. Previous attempts resulted in quality issues.',
    solution: 'We matched them with 2 specialized furniture factories in Foshan, arranged detailed prototypes, and implemented strict material and finish inspections at every stage.',
    results: [
      { label: 'Units Delivered', value: '2,000', icon: Award },
      { label: 'Pass Rate', value: '99.2%', icon: CheckCircle },
      { label: 'Reorder Rate', value: '100%', icon: TrendingDown },
    ],
    testimonial: 'The attention to detail was impressive. They understood our design language and found factories that could execute at the quality level we require.',
  },
  {
    id: 'packaging-fmcg',
    category: 'Packaging',
    title: 'Packaging for Australian FMCG Company',
    client: 'Australian consumer goods company',
    challenge: 'The client needed custom packaging with food-grade certifications and tight delivery timelines. Their previous supplier consistently missed deadlines.',
    solution: 'We sourced 3 certified packaging factories in Dongguan, negotiated priority production slots, and implemented weekly progress tracking with milestone alerts.',
    results: [
      { label: 'Lead Time Reduction', value: '42%', icon: Clock },
      { label: 'On-Time Delivery', value: '100%', icon: CheckCircle },
      { label: 'Cost Savings', value: '25%', icon: TrendingDown },
    ],
    testimonial: 'They reduced our lead time from 60 to 35 days without compromising quality. The weekly updates kept us informed and confident throughout.',
  },
  {
    id: 'auto-accessories',
    category: 'Auto Parts',
    title: 'Auto Accessories for UK Distributor',
    client: 'UK-based automotive accessories distributor',
    challenge: 'The distributor needed to consolidate multiple suppliers into fewer, more reliable partners while maintaining product range and competitive pricing.',
    solution: 'We audited their existing supplier base, identified consolidation opportunities, and introduced 2 multi-category factories that could handle their full range.',
    results: [
      { label: 'Suppliers Consolidated', value: '8→2', icon: Award },
      { label: 'Admin Time Saved', value: '60%', icon: Clock },
      { label: 'Defect Rate Drop', value: '75%', icon: TrendingDown },
    ],
    testimonial: 'Managing 2 suppliers instead of 8 has transformed our operations. Quality is more consistent and communication is so much simpler.',
  },
]

const CaseStudiesPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="cases-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Case Studies
          </h1>
          <p id="cases-page-subtitle" className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Real results from real sourcing projects. See how we've helped buyers reduce costs, improve quality, and streamline their China supply chain.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study) => (
              <article key={study.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block bg-navy/10 text-navy text-xs font-medium px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                    <span className="text-sm text-slate-500">{study.client}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{study.title}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Challenge</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-2">Solution</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, j) => (
                      <div key={j} className="bg-slate-50 rounded-lg p-4 text-center">
                        <result.icon className="w-5 h-5 text-orange mx-auto mb-2" />
                        <p className="text-xl font-bold text-navy">{result.value}</p>
                        <p className="text-xs text-slate-500 mt-1">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-orange pl-4 italic text-slate-600 text-sm">
                    "{study.testimonial}"
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Want Similar Results for Your Business?
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Every sourcing project is unique. Tell us about yours and we'll show you how we can help.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-dark transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudiesPage
