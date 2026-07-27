import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How do I get started with sourcing from China?',
    answer: 'Simply submit your product requirements through our contact form or email us directly. Include details like product specifications, target quantity, budget range, and timeline. We will review your request and respond within 24 hours with a free sourcing plan and quotation.',
  },
  {
    question: 'What are your fees?',
    answer: 'Our fees depend on the scope of services you need. We offer flexible pricing — you can use individual services like factory verification or quality inspection, or our full end-to-end sourcing package. We provide transparent quotes with no hidden costs before you commit.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory audits that include verifying business licenses, checking production facilities, reviewing quality management systems, assessing production capacity, and evaluating working conditions. We provide detailed reports with photos and our professional assessment.',
  },
  {
    question: 'Can you help with small orders?',
    answer: 'Yes, we work with buyers of all sizes. While larger orders typically benefit from better unit pricing, we can help with smaller quantities too. We will advise you on minimum order quantities (MOQs) and help negotiate with suppliers to find the best arrangement for your needs.',
  },
  {
    question: 'How do you handle quality issues?',
    answer: 'Quality is our priority. We conduct inspections at multiple stages — pre-production, during production, and pre-shipment. If issues are found, we work with the factory to resolve them before goods leave China. Our inspection reports include detailed photos and measurements so you know exactly what you are getting.',
  },
  {
    question: 'Do you handle shipping and customs?',
    answer: 'Yes, we coordinate end-to-end logistics including freight forwarding, customs documentation, and delivery to your destination. We work with reliable shipping partners and can arrange sea freight, air freight, or express delivery depending on your needs and timeline.',
  },
  {
    question: 'What industries and products do you source?',
    answer: 'We source virtually any product manufactured in China, including electronics, apparel, home goods, industrial equipment, consumer products, and custom/OEM items. If it can be made in China, we can help you find the right supplier.',
  },
  {
    question: 'How do you communicate during the sourcing process?',
    answer: 'You will have a dedicated sourcing agent who communicates in English. We provide regular updates via email, messaging apps, or video calls — whatever works best for you. You will receive progress reports, inspection reports with photos, and real-time updates on production status.',
  },
]

export function FAQSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Common questions about sourcing from China with SSourcing China.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-slate-200">
              <AccordionTrigger className="text-left text-slate-900 font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
