import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Submit Your Requirements',
    description: 'Tell us what you need — product details, quantities, target price, and timeline.',
  },
  {
    step: '02',
    title: 'Supplier Matching',
    description: 'We identify and shortlist verified manufacturers that fit your specifications.',
  },
  {
    step: '03',
    title: 'Sample Evaluation',
    description: 'Receive samples for your review. We coordinate revisions until you are satisfied.',
  },
  {
    step: '04',
    title: 'Production & QC',
    description: 'We monitor manufacturing and conduct quality inspections at key stages.',
  },
  {
    step: '05',
    title: 'Shipping & Delivery',
    description: 'We handle logistics, customs documentation, and coordinate delivery to your door.',
  },
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-[#f5f7fa]">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#1a2744] mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto text-base md:text-lg">
            A transparent, step-by-step approach from inquiry to delivery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              <div className="card h-full">
                <span className="text-4xl font-bold text-[#d4a843]/30">{item.step}</span>
                <h3 className="text-base font-semibold text-[#1a2744] mt-3 mb-2">{item.title}</h3>
                <p className="text-[#4a5568] text-sm leading-relaxed">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 lg:-right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight size={16} className="text-[#d4a843]" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/how-it-works" className="btn-secondary">
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  )
}
