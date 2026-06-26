import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold text-accent uppercase tracking-widest">Get Started Today</span>
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
          Ready to Source Smarter from China?
        </h2>
        <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
          Tell us what you need. Our team will respond within 24 hours with a tailored sourcing plan, supplier recommendations, and competitive pricing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold text-base px-8 py-4 rounded-lg transition-colors shadow-lg shadow-accent/25"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded-lg transition-colors border border-white/20"
          >
            Learn How It Works
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
          {['Free initial quote', 'No obligation', '24-hour response'].map((item) => (
            <span key={item} className="flex items-center gap-2 text-white/70 text-sm">
              <CheckCircle className="w-4 h-4 text-accent" /> {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
