import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function CTASection({ 
  title = "Ready to Source from China?", 
  subtitle = "Get a free sourcing quote and let our team find the right suppliers for your business.",
  buttonText = "Get a Free Sourcing Quote",
  buttonLink = "/contact"
}) {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <Link
          to={buttonLink}
          className="inline-flex items-center gap-2 bg-sky-brand text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-sky-brand-hover transition-colors"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}

export function SectionHeader({ title, subtitle, centered = true }) {
  return (
    <div className={centered ? 'text-center mb-12' : 'mb-12'}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  )
}
