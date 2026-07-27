import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'
import { sourcingSteps } from '@/data/content'

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const stepImages = [
    { imgId: 'step-1-img-f1a2b3', titleId: 'step-1-title', descId: 'step-1-desc' },
    { imgId: 'step-2-img-c4d5e6', titleId: 'step-2-title', descId: 'step-2-desc' },
    { imgId: 'step-3-img-g7h8i9', titleId: 'step-3-title', descId: 'step-3-desc' },
    { imgId: 'step-4-img-j0k1l2', titleId: 'step-4-title', descId: 'step-4-desc' },
    { imgId: 'step-5-img-m3n4o5', titleId: 'step-5-title', descId: 'step-5-desc' },
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">How It Works</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our sourcing process is designed to be transparent, step-by-step, and fully managed. You stay informed at every stage.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {sourcingSteps.map((step, index) => {
            const imgData = stepImages[index]
            const isEven = index % 2 === 0

            return (
              <div key={step.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}>
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                    {step.number}
                  </div>
                  <h2 id={imgData.titleId} className="text-2xl font-bold mb-4">{step.title}</h2>
                  <p id={imgData.descId} className="text-slate-muted leading-relaxed">{step.description}</p>
                </div>
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <img
                    alt={step.title}
                    data-strk-img-id={imgData.imgId}
                    data-strk-img={`[${imgData.descId}] [${imgData.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-slate-muted mb-8">
            The first step is simple — tell us about your product. We will respond with a sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy-light transition-colors duration-200"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
