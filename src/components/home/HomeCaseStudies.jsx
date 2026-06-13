import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cases = [
  {
    title: 'US E-Commerce Brand Cuts Sourcing Costs by 35%',
    desc: 'A mid-size Amazon seller needed custom kitchenware. We found 3 qualified factories, negotiated bulk pricing, and implemented QC — reducing unit cost from $8.20 to $5.30.',
    result: '35% cost reduction',
    imgId: 'home-case-study-1-z9y8x7',
    titleId: 'home-case-title-1',
    descId: 'home-case-desc-1',
  },
  {
    title: 'European Machinery Importer Avoids $120K Loss',
    desc: 'During a factory audit, we discovered a supplier was a trading company, not the manufacturer. We pivoted to a verified factory and saved the client from a 60% deposit loss.',
    result: '$120K saved',
    imgId: 'home-case-study-2-w6v5u4',
    titleId: 'home-case-title-2',
    descId: 'home-case-desc-2',
  },
  {
    title: 'Australian Retailer Scales SKU Count from 12 to 200',
    desc: 'A growing home goods retailer needed to rapidly expand product lines across multiple factories. We managed 8 supplier relationships simultaneously.',
    result: '16x SKU growth',
    imgId: 'home-case-study-3-t3s2r1',
    titleId: 'home-case-title-3',
    descId: 'home-case-desc-3',
  },
]

export default function HomeCaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-gold-500 font-semibold text-sm uppercase tracking-wide mb-3">Case Studies</p>
          <h2 id="home-cases-heading" className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            Real Results for Real Buyers
          </h2>
          <p id="home-cases-sub" className="text-slate-600 text-lg leading-relaxed">
            See how we've helped businesses across industries source smarter from China.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.imgId} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
              <div className="aspect-[16/9] overflow-hidden bg-slate-200">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}] [home-cases-heading]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-bold text-gold-500 uppercase tracking-wide mb-2">{c.result}</span>
                <h3 id={c.titleId} className="text-lg font-bold text-navy-800 mb-2">{c.title}</h3>
                <p id={c.descId} className="text-sm text-slate-600 leading-relaxed flex-1">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white transition-colors"
          >
            Read More Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
