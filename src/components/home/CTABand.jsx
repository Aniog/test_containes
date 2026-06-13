import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTABand() {
  return (
    <section className="bg-[#1a2b4a] py-16 md:py-20">
      <div className="container-main text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4">
          Ready to Source from China with Confidence?
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-8 text-base md:text-lg">
          Get a free, no-obligation sourcing quote. Our team will review your requirements and get back to you within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary text-base px-8 py-3.5">
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link to="/services" className="btn-secondary text-white border-white/30 hover:bg-white/10 hover:text-white">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}
