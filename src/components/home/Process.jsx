import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Inquiry & Consultation',
    description: 'Tell us about your product requirements, target price, and volume. We provide a preliminary feasibility analysis.'
  },
  {
    number: '02',
    title: 'Sourcing & Matching',
    description: 'We search our network and the market to find the best 3-5 suppliers that meet your quality and price standards.'
  },
  {
    number: '03',
    title: 'Sample Evaluation',
    description: 'We coordinate sample production and shipping to you for review before mass production starts.'
  },
  {
    number: '04',
    title: 'Production & Inspection',
    description: 'We monitor production on-site and perform a detailed quality inspection before final payment.'
  },
  {
    number: '05',
    title: 'Global Logistics',
    description: 'We handle all export documentation and coordinate the most cost-effective shipping method to your destination.'
  }
]

export default function Process() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="process-title" className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our Simple 5-Step Process
          </h2>
          <p id="process-subtitle" className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            We make sourcing from China transparent, easy, and risk-free.
          </p>
        </div>
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-[2.25rem] left-0 w-full h-0.5 bg-slate-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 shadow-md border-4 border-white">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
