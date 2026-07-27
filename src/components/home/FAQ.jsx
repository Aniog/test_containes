import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is the minimum order quantity (MOQ) you work with?',
    answer: 'MOQs vary by product and supplier. We typically work with orders starting from $2,000-$5,000, but we can negotiate lower MOQs for sampling or trial orders.',
  },
  {
    question: 'How do you charge for your services?',
    answer: 'We offer flexible pricing: a percentage-based commission on order value (typically 5-8%), or a fixed project fee for specific services like factory audits or inspections. No upfront fees for initial sourcing.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Initial supplier shortlisting takes 5-10 business days. The full process from inquiry to first shipment typically takes 4-8 weeks depending on product complexity and order size.',
  },
  {
    question: 'Can you source any type of product?',
    answer: 'We source across most product categories manufactured in China. Our strongest areas include electronics, textiles, furniture, machinery, and consumer goods. We will let you know upfront if a product is outside our expertise.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes. We coordinate with freight forwarders for sea, air, and express shipping. We prepare all export documentation and can arrange door-to-door delivery to most countries.',
  },
  {
    question: 'What if there is a quality problem?',
    answer: 'Our pre-shipment inspections catch most issues before goods leave China. If problems are found, we negotiate with the supplier for rework, replacement, or refund on your behalf.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-brand-blue uppercase tracking-wide mb-3">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-muted text-lg">
            Common questions from buyers considering a China sourcing agent.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-brand-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition"
              >
                <span className="text-brand-dark font-medium pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-brand-muted flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5">
                  <p className="text-brand-muted text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
