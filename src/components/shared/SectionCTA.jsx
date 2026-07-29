import { Link } from 'react-router-dom'

const SectionCTA = ({ title, subtitle, buttonText = "Get a Free Sourcing Quote", buttonLink = "/contact" }) => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-white/80 mb-8">{subtitle}</p>}
        <Link
          to={buttonLink}
          className="inline-block bg-accent hover:bg-accent-dark text-neutral-900 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}

export default SectionCTA
