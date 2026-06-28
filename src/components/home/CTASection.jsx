import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-800/50 text-blue-100 text-sm font-medium rounded-full mb-6 border border-blue-600">
          <MessageCircle className="w-4 h-4" />
          Free, no-obligation consultation
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Tell us what you need. We will research suppliers, verify capabilities, and send you a detailed quote — all at no upfront cost.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors text-base"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="mailto:inquiry@ssourcingchina.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-blue-500 text-white font-medium rounded-md hover:bg-blue-800 transition-colors text-base"
          >
            Email Us Directly
          </a>
        </div>
      </div>
    </section>
  )
}
