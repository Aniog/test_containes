import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle, FileText, Search, Package, Navigation, Box, Zap } from 'lucide-react'

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const steps = [
    {
      id: 'step-1',
      title: 'Initial Consultation',
      icon: FileText,
      description: 'We start by understanding your exact product requirements, target price, quality standards, and compliance needs. You provide the specifications, and we assess the feasibility.',
      details: ['Submit detailed product specs', 'Define target pricing & MOQs', 'Discuss required certifications']
    },
    {
      id: 'step-2',
      title: 'Supplier Sourcing & Selection',
      icon: Search,
      description: 'Our team identifies potential manufacturers from our vetted network and broader market research. We filter them based on capability, experience, and price, then present you with the best options.',
      details: ['Shortlisting 3-5 factories', 'Initial price quotes & comparisons', 'Factory background checks']
    },
    {
      id: 'step-3',
      title: 'Sample Development',
      icon: Box,
      description: 'Before mass production, we arrange for samples to be made. We consolidate samples from different factories in our China office, verify them internally, and send one package to you to save on shipping costs.',
      details: ['Sample production request', 'Our internal quality check', 'Consolidated global shipping']
    },
    {
      id: 'step-4',
      title: 'Production & Quality Control',
      icon: Zap,
      description: 'Once you approve the sample and place the order, we monitor the production timeline. We perform mid-production checks and a comprehensive Pre-Shipment Inspection (PSI) before you pay the balance.',
      details: ['Production timeline monitoring', 'During-Production Check (DUPRO)', 'Final Pre-Shipment Inspection (PSI)']
    },
    {
      id: 'step-5',
      title: 'Shipping & Logistics',
      icon: Navigation,
      description: 'We handle the complex logistics of getting your products out of China. Whether it\'s sea freight, air freight, or express courier, we coordinate with forwarders for the most efficient route.',
      details: ['Optimized shipping routes', 'Customs documentation', 'Warehouse delivery coordination']
    }
  ]

  return (
    <div ref={containerRef} className="bg-white">
      {/* Page Header */}
      <div className="bg-stone-900 py-16 lg:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          data-strk-bg-id="process-hero-bg"
          data-strk-bg="[page-title] [page-subtitle] supply chain logistics"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="page-title" className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Sourcing Process
          </h1>
          <p id="page-subtitle" className="text-xl text-stone-300 max-w-3xl mx-auto">
            A transparent, step-by-step methodology to take your product from concept to delivered inventory securely and efficiently.
          </p>
        </div>
      </div>

      {/* Steps Content */}
      <div className="py-20 lg:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Vertical line connecting steps */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-stone-200 transform md:-translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={step.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Icon Circle (Center on Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-blue-600 border-4 border-white items-center justify-center text-white z-10 font-bold text-xl shadow-md">
                    {index + 1}
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16 relative pl-12' : 'md:pr-16 relative pl-12 md:pl-0'}`}>
                    
                    {/* Mobile Number/Icon */}
                    <div className="md:hidden absolute left-0 top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>

                    <div className="bg-stone-50 p-6 md:p-8 rounded-xl shadow-sm border border-stone-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="w-6 h-6 text-blue-600" />
                        <h3 id={`step-title-${step.id}`} className="text-2xl font-bold text-stone-900">{step.title}</h3>
                      </div>
                      <p id={`step-desc-${step.id}`} className="text-stone-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="border-t border-stone-200 pt-4">
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center text-sm text-stone-700">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </div>

       {/* Bottom CTA */}
       <div className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Ready to take the first step?</h2>
          <p className="text-lg text-stone-600 mb-8">Send us your product specifications, and let's discuss how we can bring it to market.</p>
          <a href="/contact" className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded bg-blue-600 text-white hover:bg-blue-700 transition">
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}