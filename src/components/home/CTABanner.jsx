import { Link } from 'react-router-dom'

export default function CTABanner() {
  return (
    <section className="py-20 bg-steel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Upgrade Your Fabrication Line?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
          Get in touch with our team for a personalized consultation and find the perfect folding machine for your needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors shadow-lg"
          >
            Request a Quote
          </Link>
          <Link
            to="/products"
            className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  )
}
