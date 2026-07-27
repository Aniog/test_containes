import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Source from China?</h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Tell us what you need and we will get back to you within 24 hours with a free sourcing quote.
            No commitment, no upfront fees.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link to="/contact" className="btn-primary bg-amber-500 hover:bg-amber-600 text-primary font-semibold text-base">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center gap-2 text-white/70">
              <Mail className="w-4 h-4" />
              <span>info@ssourcingchina.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/70">
              <Phone className="w-4 h-4" />
              <span>+86 XXX XXXX XXXX</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/70">
              <MapPin className="w-4 h-4" />
              <span>Guangzhou, China</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
