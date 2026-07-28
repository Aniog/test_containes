import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'How do I get started with sourcing from China?',
    answer: 'Simply submit your product requirements through our inquiry form. We will review your needs, ask clarifying questions, and provide a sourcing plan with estimated timelines and costs — all at no obligation.',
  },
  {
    question: 'Do you work with small businesses or only large orders?',
    answer: 'We work with buyers of all sizes. While larger orders may benefit from better unit pricing, we support small and medium businesses with the same level of service and attention to detail.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory visits, verify business licenses and export credentials, assess production capacity and quality management systems, and check references from existing clients.',
  },
  {
    question: 'What does quality inspection include?',
    answer: 'Our inspections cover product specifications, materials, workmanship, packaging, labeling, and functionality. We provide detailed reports with photos and videos at each inspection stage.',
  },
  {
    question: 'How do you handle communication with suppliers?',
    answer: 'Our bilingual team communicates directly with suppliers in Chinese, translates all documentation, negotiates on your behalf, and keeps you updated in English throughout the process.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fees depend on the scope of services required. We offer transparent pricing with no hidden costs. After reviewing your requirements, we provide a detailed quote before any work begins.',
  },
  {
    question: 'Can you help with shipping and customs?',
    answer: 'Yes. We coordinate freight forwarding, prepare export documentation, arrange container loading, and can assist with customs clearance at your destination port.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier identification typically takes 1-2 weeks. Factory verification adds another 1-2 weeks. Sample production and approval can take 2-4 weeks. Full production timelines depend on order complexity and quantity.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">Common Questions</span>
          <h2 className="heading-2 mt-2 mb-4">Frequently Asked Questions</h2>
          <p className="body-text max-w-2xl mx-auto">
            Answers to the most common questions about sourcing from China with our team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5">
                  <p className="body-text text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
