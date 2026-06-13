import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 md:py-24 bg-[#1A365D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          Get a free, no-obligation sourcing quote. Tell us what you need, and we will respond within 24 hours with supplier recommendations and a service proposal.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C27A3E] text-white text-sm font-semibold rounded-md hover:bg-[#A8642E] transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400 text-sm">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+86-755-XXXX-XXXX</span>
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>hello@ssourcingchina.com</span>
          </span>
        </div>
      </div>
    </section>
  )
}
