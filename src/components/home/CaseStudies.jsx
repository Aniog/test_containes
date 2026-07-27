import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cases = [
  {
    id: 'us-electronics',
    title: 'US Electronics Retailer',
    desc: 'Helped a US consumer electronics company find 3 verified PCB suppliers, reducing defect rate from 8% to 1.2% and cutting lead time by 20 days.',
    imgId: 'case-electronics-v1w2x3',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    id: 'eu-fashion',
    title: 'European Fashion Brand',
    desc: 'Sourced sustainable fabric suppliers for a European fashion brand, verified 5 factories, and managed quality across 12 seasonal collections.',
    imgId: 'case-fashion-y4z5a6',
    titleId: 'case-fashion-title',
    descId: 'case-fashion-desc',
  },
  {
    id: 'au-hardware',
    title: 'Australian Hardware Distributor',
    desc: 'Identified and verified tool manufacturers for an Australian distributor, achieving 35% cost savings while maintaining ISO-certified quality.',
    imgId: 'case-hardware-b7c8d9',
    titleId: 'case-hardware-title',
    descId: 'case-hardware-desc',
  },
]

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="cases-section-title" className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">Case Studies</h2>
          <p id="cases-section-desc" className="text-neutral-500 max-w-2xl mx-auto">
            See how we have helped buyers across different industries solve sourcing challenges and achieve measurable results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cases.map((c) => (
            <div key={c.id} className="group rounded-lg border border-neutral-200 overflow-hidden bg-white hover:shadow-md transition-shadow">
              <div className="aspect-[3/2] overflow-hidden bg-neutral-100">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}] [cases-section-desc] [cases-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 id={c.titleId} className="text-base font-semibold text-neutral-800 mb-2">{c.title}</h3>
                <p id={c.descId} className="text-sm text-neutral-500 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium no-underline transition-colors"
          >
            Read More Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
