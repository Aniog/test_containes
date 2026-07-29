import { Link } from 'react-router-dom'
import { ArrowRight, Shield } from 'lucide-react'

export default function CTASection({ title, subtitle, buttonText, buttonLink, compact }) {
  return (
    <section className="bg-brand-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title || 'Ready to Source from China with Confidence?'}
          </h2>
          <p className="text-lg text-brand-100 mb-8 max-w-2xl mx-auto">
            {subtitle || 'Get a free, no-obligation sourcing consultation. Tell us what you need, and we will handle the rest.'}
          </p>
          <Link
            to={buttonLink || '/contact'}
            className="inline-flex items-center gap-2 bg-white text-brand-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-50 transition-colors shadow-lg"
          >
            {buttonText || 'Get a Free Sourcing Quote'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}