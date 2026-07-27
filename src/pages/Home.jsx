import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Search, PackageCheck, Ship, Clock, Globe2, AlertTriangle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    // Only load if the helper is available
    if (ImageHelper && ImageHelper.loadImages && strkImgConfig) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full">
      {/* 1. Hero Section */}
      <section className="relative py-24 lg:py-32 flex items-center min-h-[600px]">
        <div
          className="absolute inset-0 z-0 bg-gray-900"
          data-strk-bg-id="home-hero-bg"
          data-strk-bg="[hero-subtitle] [hero-title] factory warehouse logistics shipping"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        >
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              We help overseas B2B buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping seamlessly from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md text-base font-semibold transition-colors bg-blue-600 text-white hover:bg-blue-700 h-12 px-8"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-md text-base font-semibold transition-colors bg-white/10 text-white hover:bg-white/20 border border-white/20 h-12 px-8 backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Points Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {trustPoints.map((point, i) => (
              <div key={i} className="py-6 px-4 flex flex-col items-center text-center">
                <div className="p-3 bg-blue-50 rounded-full mb-3 text-blue-600">
                  {point.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{point.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl font-bold text-gray-900 mb-4">Core Sourcing Services</h2>
            <p id="services-subtitle" className="text-lg text-gray-600">
              End-to-end supply chain solutions tailored for international buyers. We handle the complexity so you can focus on growing your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`service-img-${i}`}
                    data-strk-img={`[service-title-${i}] [service-desc-${i}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                  />
                  <div className="absolute top-4 left-4 p-2 bg-white rounded-lg shadow-sm text-blue-600">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={`service-title-${i}`} className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p id={`service-desc-${i}`} className="text-gray-600 mb-4">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sourcing Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Sourcing Process Works</h2>
            <p className="text-lg text-gray-600">A transparent, step-by-step approach to securing your products safely and efficiently.</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-4 border-4 border-white shadow-sm">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Problems We Solve */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Sourcing from China shouldn't be a gamble.</h2>
              <p className="text-gray-400 text-lg mb-8">
                Language barriers, scams, quality fade, and delayed shipments can destroy your profit margins. We act as your boots on the ground to eliminate these risks.
              </p>
              
              <ul className="space-y-4">
                {problems.map((prob, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-500 shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-200">{prob.title}: </span>
                      <span className="text-gray-400">{prob.solution}</span>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-md text-base font-semibold bg-blue-500 text-white hover:bg-blue-600 h-12 px-8">
                  Get Started Safely
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Factory Inspection"
                  className="rounded-lg object-cover w-full h-48 md:h-64 mt-8"
                  data-strk-img-id="problem-img-1"
                  data-strk-img="factory quality inspection manufacturing china"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                />
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Logistics"
                  className="rounded-lg object-cover w-full h-48 md:h-64"
                  data-strk-img-id="problem-img-2"
                  data-strk-img="shipping containers logistics port cargo"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                />
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA / Inquiry Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to optimize your China supply chain?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Tell us what products you need, and we'll get back to you with a free feasibility assessment and sourcing quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md text-lg font-bold bg-white text-blue-600 hover:bg-gray-50 h-14 px-10 shadow-lg hover:shadow-xl transition-all"
          >
            Submit an Inquiry Now
          </Link>
        </div>
      </section>
    </div>
  )
}

// Data
const trustPoints = [
  { icon: <ShieldCheck className="w-6 h-6" />, title: "Verified Suppliers", desc: "No scammers, only legitimate factories" },
  { icon: <CheckCircle2 className="w-6 h-6" />, title: "100% QC Assured", desc: "Rigorous pre-shipment inspections" },
  { icon: <Clock className="w-6 h-6" />, title: "On-time Delivery", desc: "Strict production schedule tracking" },
  { icon: <Globe2 className="w-6 h-6" />, title: "Transparent Pricing", desc: "Clear B2B commission structure" },
]

const services = [
  {
    title: "Supplier Discovery & Verification",
    desc: "We bypass trading companies on Alibaba to find real factories. We audit their licenses, capacity, and quality management systems.",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Sample & Production Follow-up",
    desc: "We consolidate samples, check them locally to save you time, and monitor mass production tightly to prevent delays.",
    icon: <Factory className="w-6 h-6" />
  },
  {
    title: "Pre-shipment Quality Inspection",
    desc: "Our quality control team performs AQL inspections at the factory to catch defects before you pay the balance.",
    icon: <PackageCheck className="w-6 h-6" />
  },
]

const processSteps = [
  { title: "Requirements", desc: "Send us your product specs, target price, and quantities." },
  { title: "Supplier Match", desc: "We source, vet factories, and provide a detailed quotation." },
  { title: "Samplings & Order", desc: "Approve the golden sample, then place the mass production order." },
  { title: "QC & Shipping", desc: "We inspect the finished goods and arrange secure freight." },
]

const problems = [
  { title: "Finding Real Factories", solution: "We audit and visit facilities to ensure you aren't dealing with a middleman." },
  { title: "Quality Fade", solution: "We conduct random spot checks and strict pre-shipment AQL inspections." },
  { title: "Communication Breakdown", solution: "Our bilingual team negotiates effectively to prevent costly misunderstandings." },
]

export default Home
