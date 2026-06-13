import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTABanner({ title, subtitle, buttonText = 'Get a Free Sourcing Quote', dark = false }) {
  return (
    <section className={`py-16 ${dark ? 'bg-[#1B4D8E]' : 'bg-[#0F172A]'}`}>
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          {title || 'Ready to Source Products from China?'}
        </h2>
        <p className="text-lg text-gray-300 max-w-[560px] mx-auto mb-8">
          {subtitle || 'Get a free quote within 24 hours. No commitment, no hidden fees.'}
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#F59E0B] text-white font-bold rounded-lg hover:bg-[#D97706] transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl text-base no-underline">
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
