import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cases = [
  {
    title: 'Industrial Components for a European Distributor',
    result: 'Reduced defect rate from 8% to under 1% within two production cycles.',
    industry: 'Industrial Parts',
    imgId: 'case-industrial-ssourcing-1a2b',
  },
  {
    title: 'Consumer Electronics for a US Startup',
    result: 'Sourced 3 qualified suppliers and delivered first shipment in 45 days.',
    industry: 'Electronics',
    imgId: 'case-electronics-ssourcing-3c4d',
  },
  {
    title: 'Packaging for an Australian Retail Brand',
    result: 'Achieved 20% cost saving while improving print consistency.',
    industry: 'Packaging',
    imgId: 'case-packaging-ssourcing-5e6f',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="section-label">Case Studies</span>
            <h2 id="cases-title" className="text-3xl lg:text-4xl font-bold mt-3 mb-4">
              Real results for real buyers
            </h2>
            <p id="cases-desc" className="text-lg text-slate-600">
              See how we have helped businesses source better, faster, and with fewer headaches.
            </p>
          </div>
          <Link to="/case-studies" className="btn-secondary self-start">
            View All Cases
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item) => (
            <article key={item.title} className="card overflow-hidden group">
              <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[cases-desc] [cases-title] [case-title-${item.title}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-brand-700 uppercase tracking-wide">{item.industry}</span>
                <h3 id={`case-title-${item.title}`} className="text-lg font-semibold mt-2 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
