import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "How do you charge for your sourcing services?",
    answer: "We typically charge a service fee based on a percentage of the total order value (usually 5-10% depending on volume). This covers supplier verification, negotiation, production follow-up, and basic QC. For specialized services like intensive product development or standalone audits, we may charge a flat fee. We provide a transparent quote before any commitment."
  },
  {
    question: "Do you get kickbacks from factories?",
    answer: "Absolutely not. We operate with strict transparency and our loyalty is 100% to you, the buyer. We negotiate the best actual factory price for you, and our revenue comes entirely from our agreed-upon service fee. You pay the factory directly in most cases, or via our transparent accounting."
  },
  {
    question: "How do you verify if a supplier is reliable?",
    answer: "We don't just look at Alibaba profiles. We check their Chinese business licenses, verify their registered capital, check for any legal disputes, and perform on-site factory audits to confirm they actually manufacture the products and aren't just a trading company passing on orders."
  },
  {
    question: "Can you help with custom products (OEM/ODM)?",
    answer: "Yes, this is one of our core strengths. We help finalize prototypes, protect your IP with NNN agreements, oversee mold creation, ensure samples match specifications exactly, and manage the transition to mass production."
  },
  {
    question: "What happens if the products fail the quality inspection?",
    answer: "If goods fail our pre-shipment inspection, we do not authorize shipping. We immediately notify you with a detailed report and work with the factory to rework or replace the defective items at their cost. The final balance is not paid until the products pass inspection."
  }
];

export default function HomeFAQ() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Clear answers to common questions about working with a China sourcing agent.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center pt-8 border-t border-slate-100">
            <p className="text-slate-600 mb-4">Have a different question?</p>
            <Link
              to="/contact"
              className="font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Contact our support team &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
