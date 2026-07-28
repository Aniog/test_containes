import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Mail } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Source from China with Confidence?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Get a free, no-obligation sourcing quote. Tell us what you need, and we'll find the right suppliers for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-accent-hover transition-colors shadow-lg"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:hello@ssourcingchina.com"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us Instead
              </a>
            </div>
            <p className="text-sm text-white/60 mt-6 flex items-center justify-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Average response time: under 4 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
