import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-warm-white tracking-tight">
          Ready to Upgrade Your Workshop?
        </h2>
        <p className="mt-4 text-lg text-text-on-dark/70 max-w-2xl mx-auto">
          Get in touch with our team to discuss your requirements, request a
          quote, or schedule a demo of our sheet metal folding machines.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-gold text-navy hover:bg-gold/90 transition-colors"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg border border-text-on-dark/30 text-text-on-dark hover:bg-white/10 transition-colors"
          >
            Call Us: +1 (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  )
}