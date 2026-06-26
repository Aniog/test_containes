import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare } from 'lucide-react'

export default function InquiryCTA() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-amber/20 rounded-full px-4 py-1.5 mb-6 w-fit">
                <MessageSquare className="w-4 h-4 text-amber" />
                <span className="text-amber text-sm font-medium">Free Consultation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Ready to Source from China?
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Tell us about your product and requirements. We'll provide a free sourcing assessment and supplier recommendations within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
                >
                  Get a Free Sourcing Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
                >
                  Learn How It Works
                </Link>
              </div>
            </div>
            <div
              className="min-h-[300px] lg:min-h-full"
              data-strk-bg-id="cta-bg-e1f2g3"
              data-strk-bg="[cta-subtitle] [cta-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            >
              <div className="hidden">
                <span id="cta-title">Ready to Source from China</span>
                <span id="cta-subtitle">Factory quality inspection and shipping coordination</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
