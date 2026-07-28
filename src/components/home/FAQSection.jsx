import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What types of products can you source from China?',
    answer: 'We source a wide range of products including electronics, home goods, apparel, machinery, promotional items, building materials, and more. If a product is manufactured in China, we can likely find reliable suppliers for it. Contact us with your specific requirements.',
  },
  {
    question: 'How do you verify suppliers and factories?',
    answer: 'We conduct comprehensive factory audits that include on-site visits, license and certification checks, production capacity assessment, quality management system reviews, and reference checks from existing clients. We also verify business registration through official Chinese government databases.',
  },
  {
    question: 'What are your fees and how is pricing structured?',
    answer: 'We typically charge a transparent commission based on the order value, which covers sourcing, supplier verification, QC inspections, and coordination. There are no hidden fees. We provide a detailed quote before any work begins so you know exactly what to expect.',
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'The timeline depends on product complexity and specifications. Supplier identification and verification usually takes 1-2 weeks. Sample approval can take 2-3 weeks. Production timelines vary by product but typically range from 2-8 weeks. We provide a detailed timeline with your quote.',
  },
  {
    question: 'Can you handle small order quantities?',
    answer: 'Yes, we work with suppliers who accept flexible MOQ (Minimum Order Quantity) requirements. While larger orders typically offer better per-unit pricing, we can find options for smaller quantities, especially for initial test orders or niche products.',
  },
  {
    question: 'Do you handle shipping and customs documentation?',
    answer: 'Yes, we provide end-to-end shipping coordination including freight forwarding (sea, air, or rail), customs documentation, export declarations, and door-to-door delivery. We work with trusted logistics partners to ensure reliable and cost-effective shipping.',
  },
  {
    question: 'What quality control measures do you take?',
    answer: 'We conduct quality inspections at multiple stages: pre-production (raw materials), during production (in-line inspection), and before shipping (pre-shipment inspection). We check against your specifications, perform functional testing, and provide detailed reports with photos.',
  },
  {
    question: 'How do you communicate during the sourcing process?',
    answer: 'We assign a dedicated account manager who provides regular updates via email, WhatsApp, or your preferred communication channel. You will receive production updates, inspection reports, and shipping notifications at every stage of the process.',
  },
]

export default function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-navy">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get answers to common questions about sourcing from China with SSourcing China.
          </p>
        </div>
        
        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-base font-semibold text-brand-navy py-5 hover:no-underline hover:text-brand-orange">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
