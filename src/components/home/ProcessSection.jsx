import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Submit Your Request',
    description: 'Tell us what you need — product details, quantity, target price, and timeline. Our team reviews your requirements within 24 hours.',
  },
  {
    number: '02',
    title: 'Supplier Matching',
    description: 'We identify and vet qualified suppliers from our pre-screened network. You receive a shortlist with verified factory information.',
  },
  {
    number: '03',
    title: 'Sample & Negotiation',
    description: 'We coordinate sample orders, facilitate price negotiations, and help finalize terms that work for both parties.',
  },
  {
    number: '04',
    title: 'Production & QC',
    description: 'Regular factory visits, inline inspections, and progress updates ensure your order stays on track and meets quality standards.',
  },
  {
    number: '05',
    title: 'Shipping & Delivery',
    description: 'We handle all logistics — consolidation, documentation, freight forwarding, and customs clearance — for seamless delivery.',
  },
]

const ProcessSection = () => {
  return (
    <section className="py-20 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How We Work"
          subtitle="A streamlined 5-step process to source products from China with confidence"
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-slate-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-secondary transition-colors group">
                  <div className="w-16 h-16 bg-primary text-white rounded-xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-secondary transition-colors">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Ready to start your sourcing journey?</p>
          <a href="/contact" className="inline-flex items-center text-secondary font-semibold hover:text-secondary-600 transition-colors">
            Get Your Free Quote
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection