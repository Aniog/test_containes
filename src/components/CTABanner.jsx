import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function CTABanner({
  title = 'Ready to source from China with less risk?',
  subtitle = 'Get a free sourcing quote within one business day. No obligation, no spam.',
}) {
  return (
    <section className="bg-white py-12 md:py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0B2545] overflow-hidden relative">
          <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 90% 50%, #E63946 0, transparent 40%)'
          }} />
          <div className="relative px-6 md:px-10 py-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h3>
              <p className="mt-3 text-slate-200 leading-relaxed">{subtitle}</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#E63946] hover:bg-[#C42E3A] text-white font-semibold px-6 py-3 rounded-md transition shrink-0"
            >
              Get a Free Sourcing Quote
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
