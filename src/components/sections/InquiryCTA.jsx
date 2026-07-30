import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare } from 'lucide-react'

export default function InquiryCTA() {
  return (
    <section className="py-20 lg:py-28 bg-brand-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-800 rounded-2xl p-8 lg:p-16 text-center">
          <div className="w-16 h-16 rounded-full bg-brand-600 flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to find the right supplier?
          </h2>
          <p className="text-lg text-brand-100 max-w-2xl mx-auto mb-8">
            Tell us what you need. We will review your request and send a free sourcing quote with next steps.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-brand-800 hover:bg-brand-50 px-8 py-4 rounded-lg font-semibold transition-colors">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a
              href="mailto:info@ssourcingchina.com"
              className="inline-flex items-center justify-center border border-brand-400 text-white hover:bg-brand-700 px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
