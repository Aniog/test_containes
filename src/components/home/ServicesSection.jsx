import { Link } from 'react-router-dom'
import { ShieldCheck, SearchCheck, Building2, ClipboardCheck, Container, Search, ArrowRight } from 'lucide-react'
import { services } from '@/data/site-data'

const iconMap = {
  ShieldCheck, SearchCheck, Building2, ClipboardCheck, Container, Search,
}

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-4">
            End-to-End Sourcing Support
          </h2>
          <p className="text-secondary-text text-lg max-w-2xl mx-auto">
            From supplier discovery to final delivery, we manage every step of your China sourcing process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Search
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-xl border border-border p-6 md:p-8 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-primary-light/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-light group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6 text-primary-light group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-light font-semibold hover:text-primary transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}