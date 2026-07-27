import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "What is your service fee?",
    answer: "We typically charge a flat service fee based on the order value, ranging from 5% to 10%. This fee covers supplier search, verification, production monitoring, and final inspection. We are transparent and do not take hidden commissions from factories."
  },
  {
    question: "How do you verify if a factory is reliable?",
    answer: "We perform on-site audits where we check the factory's business license, ISO certifications, production capacity, equipment condition, and quality management systems. We also verify their export history and financial stability."
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "MOQ is usually set by the factories. However, we specialize in helping SME buyers and often negotiate lower MOQs. Generally, we recommend a minimum project budget of $2,000 to make the sourcing service cost-effective for you."
  },
  {
    question: "Can you help with custom packaging and branding?",
    answer: "Yes, we have extensive experience in OEM and ODM projects. We can help you find manufacturers who provide custom packaging, private labeling, and even product modifications to match your brand requirements."
  },
  {
    question: "How do we handle payments to China?",
    answer: "For maximum security, we recommend using letters of credit (L/C) or bank transfers (T/T). We facilitate the payment process and ensure that payments are only released when milestones (like inspection pass) are met."
  }
];

const HomeFAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg">
            Find answers to common questions about our sourcing services and how we work with global buyers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Still have more questions?</h3>
          <p className="text-slate-600 mb-6 font-medium text-sm">Our expert team is here to help you navigate the Chinese market with confidence.</p>
          <Link to="/contact">
            <Button size="lg">Contact Us Today</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
