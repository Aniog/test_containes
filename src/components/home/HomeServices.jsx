import { Link } from 'react-router-dom'
import { services, Icons } from '@/lib/data'

export default function HomeServices() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary">
            End-to-End Sourcing Solutions
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            From supplier discovery to delivery at your warehouse — we handle every step of the sourcing journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = Icons[service.icon]
            return (
              <Link
                to="/services"
                key={service.id}
                className="group p-6 rounded-xl border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 bg-white transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/5 group-hover:bg-accent/10 rounded-lg flex items-center justify-center mb-5 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.short}
                </p>
              </Link>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold text-sm transition-colors"
          >
            View all services
            <Icons.ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}