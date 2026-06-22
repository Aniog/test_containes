import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-stone-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-stone-300 mb-10 max-w-xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping. Your dependable partner on the ground in China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Get a Free Sourcing Quote
              </a>
              <a href="/how-it-works" className="inline-flex justify-center items-center px-8 py-4 border border-stone-600 text-base font-semibold rounded bg-transparent text-white hover:bg-stone-800 transition-colors">
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl font-bold text-stone-900 mb-4">Complete Sourcing Solutions</h2>
            <p id="services-subtitle" className="text-lg text-stone-600">From finding the right factory to final delivery, we handle the entire process to minimize your risks and maximize margins.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'supplier', title: 'Supplier Sourcing', desc: 'We find and audit reliable factories that match your quality and price requirements.' },
              { id: 'verification', title: 'Factory Verification', desc: 'On-site audits to verify factory legitimacy, production capacity, and working conditions.' },
              { id: 'quality', title: 'Quality Inspection', desc: 'Pre-shipment inspections and during-production checks to ensure product quality.' },
              { id: 'shipping', title: 'Shipping Coordination', desc: 'We coordinate with freight forwarders to ensure smooth customs clearance and delivery.' }
            ].map(service => (
              <div key={service.id} className="bg-white p-8 rounded-lg shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded flex items-center justify-center mb-6">
                  {/* Icon placeholder */}
                  <span className="font-bold text-xl">{service.title.charAt(0)}</span>
                </div>
                <h3 id={`service-${service.id}-title`} className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                <p id={`service-${service.id}-desc`} className="text-stone-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 id="why-title" className="text-3xl font-bold text-stone-900 mb-6">Your Eyes and Ears in China</h2>
              <p id="why-subtitle" className="text-lg text-stone-600 mb-8">
                Operating from China, we bridge the language, culture, and geographical gaps that often cause costly mistakes in international trade.
              </p>
              <ul className="space-y-6">
                {[
                  { title: 'Local Expertise', desc: 'Native Chinese professionals with deep understanding of local business culture.' },
                  { title: 'Transparent Process', desc: 'No hidden markups. We charge a clear service fee for our agency work.' },
                  { title: 'Risk Mitigation', desc: 'Thorough background checks and on-site inspections before you pay.' }
                ].map((item, i) => (
                  <li key={i} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">✓</div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-stone-900">{item.title}</h4>
                      <p className="mt-1 text-stone-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                alt="Factory inspection process"
                className="w-full h-full object-cover"
                data-strk-img-id="home-why-us-img"
                data-strk-img="[why-title] [why-subtitle] factory inspection quality control"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Streamline Your China Sourcing?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us about your product requirements. We'll provide a free consultation and customized sourcing strategy.
          </p>
          <a href="/contact" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded bg-white text-blue-700 hover:bg-stone-50 transition-colors shadow-lg">
            Start Your Sourcing Project
          </a>
        </div>
      </section>
    </div>
  )
}