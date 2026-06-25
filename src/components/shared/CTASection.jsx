import { Link } from 'react-router-dom'

const CTASection = ({ title = "Ready to Source from China?", subtitle = "Get a free sourcing quote within 24 hours. No commitment required." }) => {
  return (
    <section className="bg-blue-800 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {title}
        </h2>
        <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link
          to="/contact"
          className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors no-underline shadow-lg"
        >
          Get a Free Sourcing Quote
        </Link>
      </div>
    </section>
  )
}

export default CTASection
