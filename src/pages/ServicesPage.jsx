import { ShieldCheck, SearchCheck, Building2, ClipboardCheck, Container, Search, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '@/data/site-data'

const iconMap = {
  ShieldCheck, SearchCheck, Building2, ClipboardCheck, Container, Search,
}

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary/95 to-primary/80 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Comprehensive China sourcing services designed to protect your supply chain 
              and deliver quality products on time.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Search
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl border border-border p-6 md:p-8 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-light/10 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary-light" />
                  </div>
                  <h2 className="text-xl font-semibold text-text-primary mb-3">{service.title}</h2>
                  <p className="text-secondary-text leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2 text-sm text-text-primary">
                    {service.id === 'supplier-verification' && (
                      <>
                        <li className="flex items-start gap-2">• Business license verification</li>
                        <li className="flex items-start gap-2">• On-site factory audit</li>
                        <li className="flex items-start gap-2">• Trade reference checks</li>
                        <li className="flex items-start gap-2">• Production capacity assessment</li>
                      </>
                    )}
                    {service.id === 'quality-inspection' && (
                      <>
                        <li className="flex items-start gap-2">• Pre-shipment inspection (AQL)</li>
                        <li className="flex items-start gap-2">• During-production inspection</li>
                        <li className="flex items-start gap-2">• Random sampling & testing</li>
                        <li className="flex items-start gap-2">• Detailed photo reports</li>
                      </>
                    )}
                    {service.id === 'factory-audits' && (
                      <>
                        <li className="flex items-start gap-2">• Social compliance audit</li>
                        <li className="flex items-start gap-2">• Production capability evaluation</li>
                        <li className="flex items-start gap-2">• Quality management review</li>
                        <li className="flex items-start gap-2">• Export readiness assessment</li>
                      </>
                    )}
                    {service.id === 'production-monitoring' && (
                      <>
                        <li className="flex items-start gap-2">• Real-time production tracking</li>
                        <li className="flex items-start gap-2">• Milestone progress updates</li>
                        <li className="flex items-start gap-2">• Raw material verification</li>
                        <li className="flex items-start gap-2">• Photo & video reports</li>
                      </>
                    )}
                    {service.id === 'shipping-logistics' && (
                      <>
                        <li className="flex items-start gap-2">• FCL & LCL sea freight</li>
                        <li className="flex items-start gap-2">• Air freight coordination</li>
                        <li className="flex items-start gap-2">• Customs clearance</li>
                        <li className="flex items-start gap-2">• Door-to-door delivery</li>
                      </>
                    )}
                    {service.id === 'product-sourcing' && (
                      <>
                        <li className="flex items-start gap-2">• RFQ management</li>
                        <li className="flex items-start gap-2">• Supplier matching & negotiation</li>
                        <li className="flex items-start gap-2">• Sample coordination</li>
                        <li className="flex items-start gap-2">• Price benchmarking</li>
                      </>
                    )}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Every project is different. Contact us for a tailored approach to your sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-light hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-3.5 transition-colors"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}