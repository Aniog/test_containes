import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, Factory, Truck, CheckCircle2, Headphones, Box, BarChart3, ChevronRight } from 'lucide-react'

const Services = () => {
  const serviceList = [
    {
      title: 'Full Sourcing Service',
      desc: 'Our most popular service. We manage the entire process from identifying suppliers to quality control and logistics. Ideal for businesses looking to completely outsource their China procurement.',
      icon: Search,
      features: ['Supplier identification & auditing', 'Price negotiation & contract management', 'Sample development & consolidation', 'Order follow-up & during-production checks']
    },
    {
      title: 'Supplier Verification & Audit',
      desc: 'Verify the legitimacy of your potential suppliers. We conduct on-site factory audits to evaluate production capability, quality systems, and social compliance.',
      icon: ShieldCheck,
      features: ['Factory background checks', 'ISO management audit', 'Technical capability assessment', 'Social compliance review']
    },
    {
      title: 'Quality Control Inspection',
      desc: 'Professional inspectors dedicated to ensuring your products meet your specifications before they leave the factory.',
      icon: CheckCircle2,
      features: ['Pre-production Inspection (PPI)', 'During Production Inspection (DPI)', 'Pre-shipment Inspection (PSI)', 'Container Loading Supervision (CLS)']
    },
    {
      title: 'Logistics Facilitation',
      desc: 'Streamlining your global supply chain. We handle the documentation and coordination between factories and carriers.',
      icon: Truck,
      features: ['Sea, Air, and Rail freight coordination', 'Customs documentation (HS codes)', 'FBA warehousing prep (Amazon)', 'Sample consolidation service']
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-20 lg:py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/10 skew-x-12 transform translate-x-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our Sourcing <span className="text-amber-500">Expertise</span></h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              We provide end-to-end sourcing solutions that reduce costs, guarantee quality, and simplify your supply chain operations in China.
            </p>
            <Link to="/contact" className="bg-amber-500 text-slate-900 px-8 py-3 rounded-md font-bold hover:bg-amber-400 transition-colors inline-flex items-center">
              Tailor-make My Solution <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {serviceList.map((service, idx) => (
              <div key={idx} className={cn("flex flex-col lg:flex-row gap-12 items-center", idx % 2 === 1 && "lg:flex-row-reverse")}>
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">{service.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2 w-full aspect-[16/10] bg-slate-100 rounded-3xl overflow-hidden shadow-inner relative group">
                   <div 
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    data-strk-bg-id={`service-detail-bg-${idx}`}
                    data-strk-bg={`[service-title-${idx}] China industrial sourcing logistics factory inspection`}
                    data-strk-bg-ratio="16x10"
                    data-strk-bg-width="1200"
                  />
                  <h3 id={`service-title-${idx}`} className="sr-only">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Add Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Work With SSourcing China?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Unlike large platforms, we provide personalized attention and feet-on-the-ground presence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Factory, title: 'Direct Factory Access', desc: 'We source directly from manufacturers, not traders or middle-men.' },
              { icon: BarChart3, title: 'Cost Analysis', desc: 'Transparent breakdown of product costs, taxes, and shipping fees.' },
              { icon: ShieldCheck, title: 'Risk Mitigation', desc: 'Strict inspection protocols to prevent defective goods reaching you.' },
              { icon: Headphones, title: 'Native Communication', desc: 'Our team speaks fluent English and native Mandarin/Cantonese.' }
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ')
}

export default Services
