import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { caseStudies } from '@/data/content'

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const caseStudyImages = [
    { imgId: 'case-detail-home-t4u5v6', titleId: 'case-detail-home-title', descId: 'case-detail-home-desc' },
    { imgId: 'case-detail-electronics-w7x8y9', titleId: 'case-detail-electronics-title', descId: 'case-detail-electronics-desc' },
    { imgId: 'case-detail-australian-z0a1b2', titleId: 'case-detail-australian-title', descId: 'case-detail-australian-desc' },
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Case Studies</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real results from real clients. See how we have helped businesses improve their China sourcing outcomes.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs, index) => {
            const imgData = caseStudyImages[index]
            const isEven = index % 2 === 0

            return (
              <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <img
                    alt={cs.title}
                    data-strk-img-id={imgData.imgId}
                    data-strk-img={`[${imgData.descId}] [${imgData.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <h2 id={imgData.titleId} className="text-2xl font-bold mb-2">{cs.title}</h2>
                  <p id={imgData.descId} className="text-gold font-semibold text-sm mb-6">{cs.client}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-sm uppercase tracking-wide text-slate-muted mb-2">Challenge</h3>
                      <p className="text-slate-muted leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm uppercase tracking-wide text-slate-muted mb-2">Our Solution</h3>
                      <p className="text-slate-muted leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm uppercase tracking-wide text-slate-muted mb-2">Results</h3>
                      <p className="text-slate-muted leading-relaxed">{cs.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want Similar Results for Your Business?</h2>
          <p className="text-gray-300 mb-8">
            Tell us about your sourcing challenges and we will propose a solution. Free consultation, no commitment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-light transition-colors duration-200"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
