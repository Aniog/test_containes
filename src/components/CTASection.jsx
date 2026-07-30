import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          Tell us what you need. Our team will identify qualified suppliers, verify their capabilities, and provide a detailed sourcing plan — free of charge.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-orange text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-dark transition-colors text-lg"
        >
          Get a Free Sourcing Quote
        </Link>
      </div>
    </section>
  )
}
