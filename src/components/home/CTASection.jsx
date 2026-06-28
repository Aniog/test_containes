import { Link } from 'react-router-dom'
import { ArrowRight, Send } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary opacity-90" />
      <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-6 h-6 text-accent" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Source Products from China?
        </h2>
        <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
          Tell us what you need and our team will provide a detailed sourcing
          proposal with verified supplier options and transparent pricing --
          completely free, no obligation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-base font-semibold hover:bg-accent-hover transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="mailto:info@ssourcingchina.com"
            className="inline-flex items-center gap-2 text-white/80 border border-white/20 px-8 py-4 rounded-md text-base font-semibold hover:bg-white/10 transition-colors"
          >
            Email Us Directly
          </a>
        </div>
        <p className="text-white/50 text-sm mt-6">
          Typical response time: within 24 hours on business days
        </p>
      </div>
    </section>
  )
}
