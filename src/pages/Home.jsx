import React, { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  ShieldCheck, 
  Truck, 
  BarChart3, 
  Factory, 
  PackageSearch,
  Users,
  MessageSquare
} from 'lucide-react'
import InquiryForm from '../components/home/InquiryForm'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages({}, containerRef.current)
  }, [])

  const services = [
    {
      title: 'Supplier Sourcing',
      desc: 'Find the best manufacturers with the right price and quality balance.',
      icon: Search,
      imgId: 'service-sourcing'
    },
    {
      title: 'Factory Audit',
      desc: 'Verify legal status, production capacity, and ethical standards.',
      icon: ShieldCheck,
      imgId: 'service-audit'
    },
    {
      title: 'Quality Inspection',
      desc: 'On-site QC at different production stages to ensure zero defects.',
      icon: PackageSearch,
      imgId: 'service-qc'
    },
    {
      title: 'Shipping & Logistics',
      desc: 'Consolidate orders and coordinate air/sea freight to your doorstep.',
      icon: Truck,
      imgId: 'service-shipping'
    }
  ]

  const processSteps = [
    { title: 'Inquiry', desc: 'Tell us your product and quantity requirements.' },
    { title: 'Sourcing', desc: 'We find 3-5 verified suppliers and provide quotes.' },
    { title: 'Sampling', desc: 'Review samples to confirm quality and specifications.' },
    { title: 'Production', desc: 'Order tracking and regular status updates.' },
    { title: 'QC & Shipping', desc: 'Final inspection and secure delivery.' }
  ]

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 lg:py-32">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg"
          data-strk-bg="[hero-title] [hero-subtitle] realistic china factory export"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            China Sourcing Agent for <span className="text-blue-500">Global Buyers</span>
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl mx-auto text-xl text-slate-300">
            Navigate the Chinese market with confidence. We handle sourcing, verification, QC, and logistics so you can focus on growing your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#quote" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition shadow-lg shadow-blue-900/20"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-md border border-white/20 hover:bg-white/20 transition backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: '500+', sub: 'Successful Projects', icon: BarChart3 },
              { label: '100+', sub: 'Verified Factories', icon: Factory },
              { label: '10+', sub: 'Years Experience', icon: Users },
              { label: '24/7', sub: 'Dedicated Support', icon: MessageSquare }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <stat.icon className="h-8 w-8 text-blue-600 mb-2" />
                <span className="text-2xl font-bold text-slate-900">{stat.label}</span>
                <span className="text-sm text-slate-600 font-medium">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive Sourcing Solutions</h2>
            <p id="services-subtitle" className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
              We provide end-to-end support throughout your procurement journey in China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group bg-white border border-slate-100 p-8 rounded-2xl hover:shadow-xl hover:border-blue-100 transition duration-300">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 id={`service-${i}-title`} className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p id={`service-${i}-desc`} className="text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <img 
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[${'service-' + i + '-title'}] [${'service-' + i + '-desc'}] china sourcing agent professional`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={service.title}
                  className="w-full h-32 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Simplified Sourcing Process</h2>
            <p className="mt-4 text-xl text-slate-400">Five simple steps to secure your supply chain.</p>
          </div>
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-blue-800" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative text-center">
              {processSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-slate-900 z-10">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Overcoming China Sourcing Challenges</h2>
            <p className="text-lg text-slate-600 mb-8">
              Importing from China can be complex. We eliminate risks and common pitfalls that overseas buyers face.
            </p>
            <ul className="space-y-4">
              {[
                'Avoiding "middleman" trading companies disguised as factories.',
                'Preventing quality fade over multiple production runs.',
                'Overcoming language barriers and cultural misunderstandings.',
                'Ensuring compliance with international safety standards.',
                'Handling complex export documentation and customs issues.'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                data-strk-img-id="qc-verification"
                data-strk-img="quality control inspection china factory verify"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="QC Inspection"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                  <span className="font-bold text-slate-900">100% Guaranteed Inspection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="quote" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
            <div className="md:w-1/3 bg-blue-600 p-10 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white leading-tight">Get a Personalized Quote</h2>
                <p className="text-blue-100 mb-8 leading-relaxed text-sm">
                  Our team will evaluate your needs and get back to you with a free sourcing proposal within 24 hours.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-300" />
                  <span className="text-sm font-medium">Free Sourcing Analysis</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-300" />
                  <span className="text-sm font-medium">Verified Supplier Options</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-300" />
                  <span className="text-sm font-medium">No Upfront Commitment</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-10">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                q: "What is your service fee?",
                a: "Our service fee varies depending on the complexity and volume of the project. Typically, it ranges from 3% to 5% of the total order value. We also offer fixed-fee options for one-off inspections or audits."
              },
              {
                q: "Do you handle shipping to my country?",
                a: "Yes, we coordinate global shipping. We can handle everything from factory door to your doorstep (DDP), or work with your existing freight forwarder (FOB/EXW)."
              },
              {
                q: "Can you help with small MOQs?",
                a: "Absolutely. We work with both large enterprises and growing businesses. We leverage our relationships with suppliers to negotiate lower MOQs whenever possible."
              },
              {
                q: "How do you verify a factory's quality?",
                a: "We conduct physical on-site audits. We check their business license, production capacity, equipment condition, and quality management system. We don't just look at certificates; we see the production floor."
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-slate-100 pb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
