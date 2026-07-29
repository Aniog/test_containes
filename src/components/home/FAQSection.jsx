import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much do your services cost?",
    a: "We offer both flat-fee project rates and commission-based structures (typically between 5% to 10% of order value) depending on the complexity and volume of the sourcing project."
  },
  {
    q: "Do you provide factory audit reports?",
    a: "Yes, every time we verify a supplier, we provide a detailed audit report including factory photos, business licenses, production certificates, and our professional assessment."
  },
  {
    q: "What products do you source?",
    a: "We source a wide range including electronics, home goods, furniture, industrial equipment, toys, and textiles. However, we do not source hazardous materials or prohibited goods."
  },
  {
    q: "Can you help with Amazon FBA?",
    a: "Absolutely. We are experts in FBA requirements, including labeling, bundle packing, and final delivery to Amazon warehouses globally."
  },
  {
    q: "How do inspections work?",
    a: "Our inspectors visit the factory when production is 80-100% complete. We check quantity, quality, packaging, and specific requirements you provided, following AQL standards."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Common Questions</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
          </div>

          <Accordion type="single" collapsible className="w-full bg-white rounded-xl border px-6 py-2 shadow-sm">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className={i === faqs.length - 1 ? "border-b-0" : ""}>
                <AccordionTrigger className="text-left font-bold text-slate-900 py-4 hover:no-underline hover:text-blue-600">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
