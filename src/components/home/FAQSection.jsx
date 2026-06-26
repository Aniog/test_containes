import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How does SSourcing China charge for its services?',
    a: 'We offer a transparent fee structure based on project scope. Typically we charge a service fee as a percentage of the order value, or a flat project fee for larger engagements. We do not take commissions from factories, ensuring our recommendations are unbiased. Contact us for a detailed quote.',
  },
  {
    q: 'What is the minimum order quantity (MOQ) you work with?',
    a: 'There is no strict minimum. We work with both small-batch startups and large-volume buyers. However, MOQ depends on the product category and factory capabilities. We will help you find suppliers that match your volume requirements.',
  },
  {
    q: 'How do you verify factories?',
    a: 'Our team conducts physical on-site visits to assess production lines, quality control systems, certifications (ISO, CE, etc.), worker conditions, and business licenses. You receive a detailed report with photos and video evidence.',
  },
  {
    q: 'Can you help with samples before bulk production?',
    a: 'Yes. We coordinate sample requests with shortlisted suppliers, track sample progress, and review samples against your specifications. We can also arrange sample comparisons from multiple suppliers.',
  },
  {
    q: 'Which industries and products do you specialize in?',
    a: 'We source across a broad range including electronics, home goods, industrial equipment, furniture, apparel, packaging, auto parts, medical devices, toys, and more. Our supplier network covers major manufacturing hubs across China.',
  },
  {
    q: 'How long does the sourcing process typically take?',
    a: 'Timelines vary by product complexity. A typical sourcing cycle — from requirement analysis to first shipment — takes 4–12 weeks. We provide a clear timeline during the initial consultation.',
  },
  {
    q: 'What if there is a quality issue with my order?',
    a: 'Our inspection processes are designed to catch issues before shipment. If problems arise despite checks, we mediate with the factory and facilitate resolutions. We recommend clear quality clauses in supply agreements.',
  },
  {
    q: 'Do you handle shipping and customs documentation?',
    a: 'Yes. We coordinate all logistics including warehouse consolidation, export documentation, customs clearance, and freight booking via sea, air, or rail to destinations worldwide.',
  },
]

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
        onClick={onClick}
      >
        <span className="text-sm font-medium text-slate-900 pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 bg-white">
          <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Common questions about working with a China sourcing agent.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === index}
              onClick={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}