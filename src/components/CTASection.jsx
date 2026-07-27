import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const CTASection = ({ title = "Ready to Start Sourcing?", subtitle = "Get a free, no-obligation quote for your sourcing project." }) => {
  return (
    <section className="bg-slate-900 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">{title}</h2>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-900 font-medium rounded-md hover:bg-slate-100 transition-colors"
        >
          Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="mt-4 text-sm text-slate-400">No commitment required. Response within 24 hours.</p>
      </div>
    </section>
  )
}

export default CTASection
