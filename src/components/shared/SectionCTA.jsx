import { Link } from 'react-router-dom'

export default function SectionCTA({ title, subtitle, buttonText = "Get a Free Sourcing Quote", buttonLink = "/contact" }) {
  return (
    <section className="bg-brand-navy py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-gray-300 mb-8">{subtitle}</p>}
        <Link
          to={buttonLink}
          className="inline-flex items-center px-8 py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors text-lg"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
