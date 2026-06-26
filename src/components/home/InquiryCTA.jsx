import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare } from 'lucide-react'

export default function InquiryCTA() {
  return (
    <section className="py-16 md:py-24 bg-sky-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <MessageSquare className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Source from China?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Tell us about your product requirements and get a free sourcing quote within 24 hours. No commitment, no hidden fees.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-sky-blue-dark px-8 py-4 rounded-lg font-bold text-base hover:bg-white/90 transition-colors"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
