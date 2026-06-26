import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 rounded-l-[100px] -mr-20" />
      <div className="container-main relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground-inverse mb-4">
              Ready to Upgrade Your Production Line?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Talk to our team about the right folding solution for your shop. We will
              help you compare models, review specs, and plan delivery.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-7 py-3.5 rounded-md transition-colors"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+18005550199"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-medium px-7 py-3.5 rounded-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              +1 (800) 555-0199
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
