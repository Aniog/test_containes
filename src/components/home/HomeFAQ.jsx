import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'How much does your sourcing service cost?',
    answer: 'Our fees depend on the scope of work. We offer transparent pricing with no hidden costs. Basic supplier sourcing starts at a flat fee, while comprehensive services (including QC and shipping) are priced per project. Contact us for a free quote tailored to your needs.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory visits, verify business licenses, check certifications (ISO, CE, etc.), review production capabilities, assess quality control processes, and contact references. We maintain a database of over 2,000 pre-verified suppliers.',
  },
  {
    question: 'What types of products can you source?',
    answer: 'We source a wide range of products including electronics, textiles, home goods, industrial equipment, beauty products, and custom manufactured items. If it can be made in China, we can help you find the right supplier.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier identification typically takes 3-5 business days. Sample production takes 1-2 weeks, and mass production timelines vary by product (usually 2-8 weeks). We provide detailed timelines at the start of each project.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we provide end-to-end logistics including freight forwarding (sea, air, rail), customs clearance, documentation, and door-to-door delivery. We work with trusted logistics partners worldwide.',
  },
  {
    question: 'What quality control measures do you use?',
    answer: 'We implement a multi-stage QC process: pre-production sample approval, during-production inspections (DPI), pre-shipment inspections (PSI), and container loading supervision. We follow AQL standards and provide detailed inspection reports.',
  },
]

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-brand-100 text-brand-700 text-sm font-medium rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Get answers to common questions about our China sourcing services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle size={20} className="text-brand-600 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                </div>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-slate-500" />
                ) : (
                  <ChevronDown size={20} className="text-slate-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pl-14">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeFAQ
