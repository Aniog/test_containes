import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Clock, TrendingUp } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeCTA() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-navy-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-15">
            <img
              alt="China sourcing partnership background"
              data-strk-img-id="home-cta-bg-img-z9y8x7"
              data-strk-img="[home-cta-heading] [home-cta-sub]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center p-8 md:p-14">
            <div className="space-y-6">
              <h2 id="home-cta-heading" className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Ready to Source Smarter from China?
              </h2>
              <p id="home-cta-sub" className="text-slate-300 text-lg leading-relaxed">
                Tell us about your product, and we'll send you a free sourcing plan with
                estimated costs, timeline, and supplier recommendations — within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-gold-500 text-white hover:bg-gold-600 transition-colors shadow-lg shadow-gold-500/25"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 pt-2">
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <Shield className="w-4 h-4 text-gold-400" />
                  <span>No-obligation quote</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <TrendingUp className="w-4 h-4 text-gold-400" />
                  <span>Free supplier recommendations</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <img
                  alt="China sourcing partnership"
                  data-strk-img-id="home-cta-side-img-a1b2c3"
                  data-strk-img="[home-cta-sub] [home-cta-heading]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
