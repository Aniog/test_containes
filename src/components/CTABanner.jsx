import { Link } from 'react-router-dom'

export default function CTABanner({ title, subtitle, buttonText, buttonLink }) {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          {title || 'Ready to Source from China?'}
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          {subtitle || 'Tell us what you need and get a free sourcing plan within 24 hours. No commitment required.'}
        </p>
        <Link
          to={buttonLink || '/contact'}
          className="inline-block bg-orange text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-orange-dark transition text-base"
        >
          {buttonText || 'Get a Free Sourcing Quote'}
        </Link>
      </div>
    </section>
  )
}
