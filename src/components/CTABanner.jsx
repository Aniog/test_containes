import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTABanner({ title, subtitle, buttonText, buttonLink }) {
  return (
    <section className="bg-brand-600 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          {title || 'Ready to Start Sourcing from China?'}
        </h2>
        <p className="text-brand-100 text-base sm:text-lg max-w-2xl mx-auto mb-8">
          {subtitle ||
            'Tell us what you need. We will find qualified suppliers, verify factories, inspect quality, and deliver to your door.'}
        </p>
        <Link
          to={buttonLink || '/contact'}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-700 font-semibold rounded-lg hover:bg-brand-50 transition-colors shadow-lg text-base"
        >
          {buttonText || 'Get a Free Sourcing Quote'}
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
