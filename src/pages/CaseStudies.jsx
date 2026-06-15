import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages({}, containerRef.current)
  }, [])
  const cases = [
    {
      title: 'E-commerce Brand Expansion',
      challenge: 'Client needed to reduce production costs for their best-selling electronic accessories while maintaining premium quality.',
      outcome: 'Found a Tier-1 factory in Dongguan, reduced unit cost by 22%, and improved packaging durability for international shipping.',
      imgId: 'case-electronics'
    },
    {
      title: 'Global Retailer QC Overhaul',
      challenge: 'A home decor retailer was experiencing a 15% defect rate with their previous supplier.',
      outcome: 'Implemented a strict mid-production and final inspection protocol. Defect rate dropped to less than 1.5% within 3 months.',
      imgId: 'case-decor'
    }
  ]
  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Case Studies</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Real stories of how we help our clients succeed in China.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {cases.map((cs, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 w-full">
                <img 
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${'case-' + i + '-title'}] business success sourcing china`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="rounded-3xl shadow-2xl object-cover w-full h-80"
                  alt={cs.title}
                />
              </div>
              <div className="lg:w-1/2">
                <h3 id={`case-${i}-title`} className="text-3xl font-bold text-slate-900 mb-6">{cs.title}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-blue-600 mb-2 uppercase text-xs tracking-widest">The Challenge</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-600 mb-2 uppercase text-xs tracking-widest">The Result</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">{cs.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
export default CaseStudies
