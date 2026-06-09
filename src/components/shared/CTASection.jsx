import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection({ 
  title = "Ready to Source from China with Confidence?",
  subtitle = "Get a free sourcing quote and let our team find the right suppliers for your business.",
  ctaText = "Get a Free Sourcing Quote",
  ctaLink = "/contact",
  dark = false
}) {
  return (
    <section className={`py-16 md:py-20 ${dark ? 'bg-primary' : 'bg-surface'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${dark ? 'text-white' : 'text-primary-dark'}`}>
          {title}
        </h2>
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${dark ? 'text-white/80' : 'text-steel'}`}>
          {subtitle}
        </p>
        <Link
          to={ctaLink}
          className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold transition-colors ${
            dark
              ? 'bg-accent hover:bg-accent-light text-white'
              : 'bg-primary hover:bg-primary-light text-white'
          }`}
        >
          {ctaText}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
