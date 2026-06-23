import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, TrendingUp, Search } from "lucide-react"
import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div className="bg-white" ref={containerRef}>
      {/* Hero Section */}
      <div className="relative isolate pt-14">
        <div 
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" 
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0ea5e9] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Your trusted partner on the ground. We find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping to your door.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/contact"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get a Free Sourcing Quote
                </Link>
                <Link to="/services" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  data-strk-img-id="hero-factory-inspection"
                  data-strk-img="factory quality inspection professional sourcing agent"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Factory Inspection in China"
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Points */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-base font-semibold leading-7 text-blue-600 text-center uppercase tracking-wide">Why Choose SSourcing China</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              Your eyes and ears in China
            </p>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mb-4">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Verified Suppliers</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">We bypass middlemen to find direct manufacturers with competitive pricing.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mb-4">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Risk Mitigation</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">Thorough factory audits and legal contract enforcement to protect your funds.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Strict Quality Control</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">On-site inspections before shipping to ensure products meet your exact standards.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mb-4">
                  <Globe2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Hassle-free Logistics</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">End-to-end shipping coordination, from factory floor to your warehouse.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">Comprehensive Sourcing Solutions</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We handle every step of the supply chain so you can focus on growing your business.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Product Sourcing',
                  description: 'We source exactly what you need based on your specifications, target price, and quality requirements. We negotiate on your behalf to get the best terms.',
                  icon: Search,
                  image: 'product sourcing electronics components samples'
                },
                {
                  name: 'Factory Audits',
                  description: 'Our team visits factories to verify their production capabilities, quality control systems, and business licenses before you place an order.',
                  icon: ShieldCheck,
                  image: 'factory audit clipboard inspector manufacturing'
                },
                {
                  name: 'Quality Inspection',
                  description: 'We perform pre-production, in-line, and pre-shipment inspections to catch any defects before the goods leave the factory.',
                  icon: CheckCircle2,
                  image: 'quality control packaging inspection goods'
                },
              ].map((service, index) => (
                <div key={service.name} className="flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[16/9] w-full relative">
                    <img
                      data-strk-img-id={`service-img-${index}`}
                      data-strk-img={service.image}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                      <service.icon className="h-6 w-6 flex-none text-blue-600" aria-hidden="true" />
                      {service.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{service.description}</p>
                      <p className="mt-6">
                        <Link to="/services" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500">
                          Learn more <span aria-hidden="true">→</span>
                        </Link>
                      </p>
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Ready to simplify your China sourcing?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Tell us what you're looking for, and our team will get back to you with a competitive quote within 24 hours.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}