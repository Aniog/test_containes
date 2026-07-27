import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Search, CheckCircle, Truck } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="container-custom section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-900">
            <Shield className="h-4 w-4" />
            Trusted by 500+ Global Buyers
          </div>

          <h1 id="hero-title" className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>

          <p id="hero-subtitle" className="mb-8 text-lg text-gray-600 sm:text-xl">
            We help overseas buyers find reliable suppliers, verify factories, inspect quality,
            follow production, and coordinate shipping from China.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn-primary text-base">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/how-it-works" className="btn-outline text-base">
              See How It Works
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { icon: Search, label: 'Supplier Sourcing' },
              { icon: Shield, label: 'Factory Verification' },
              { icon: CheckCircle, label: 'Quality Inspection' },
              { icon: Truck, label: 'Shipping Coordination' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <Icon className="h-6 w-6 text-blue-900" />
                <span className="text-sm font-medium text-gray-900">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
