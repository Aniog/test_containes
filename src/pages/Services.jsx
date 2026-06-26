import { Link } from 'react-router-dom'
import { services, Icons } from '@/lib/data'

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Complete Sourcing Solutions
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            From finding the right factory to delivering finished products to your warehouse, 
            we provide end-to-end sourcing services tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = Icons[service.icon]
              const isEven = index % 2 === 0
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    !isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Icons.CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                          <span className="text-text-primary text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-surface-alt rounded-xl p-10 flex items-center justify-center min-h-[300px] ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <IconComponent className="w-24 h-24 text-primary/15" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Tell us about your product and requirements. We'll create a tailored sourcing plan for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-accent font-semibold rounded-md hover:bg-white/90 transition-colors shadow-sm"
          >
            Get a Free Sourcing Quote
            <Icons.ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}