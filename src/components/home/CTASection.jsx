import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="section bg-paper">
      <div className="container-page">
        <div className="border border-hairline p-10 md:p-16 text-center">
          <p className="eyebrow">Ready to talk?</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink max-w-3xl mx-auto">
            Tell us what you need to fold. We&apos;ll configure the machine that does it best.
          </h2>
          <p className="mt-6 text-base md:text-lg text-steel max-w-2xl mx-auto">
            Most quotes are turned around in 48 hours, with a recommended machine,
            a parts sample plan, and a fixed price.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Request a quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/products" className="btn-outline">
              Browse products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
