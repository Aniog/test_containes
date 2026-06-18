import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-[#C0392B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-6">
          <MessageSquare className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Source from China?
        </h2>
        <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
          Tell us what you need and we'll get back to you within 24 hours with a free sourcing plan and cost estimate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#C0392B] hover:bg-[#F7F9FC] font-bold px-8 py-4 rounded-lg transition-colors duration-200 text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-base"
          >
            Learn How It Works
          </Link>
        </div>
      </div>
    </section>
  )
}
