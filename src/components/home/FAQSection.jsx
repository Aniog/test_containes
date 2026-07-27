import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What types of products do you source?",
    a: "We source across a wide range of categories including consumer electronics, home and garden, apparel and accessories, industrial tools, packaging, and sports equipment. If it's manufactured in China, we can help you source it.",
  },
  {
    q: "How do you vet suppliers?",
    a: "We conduct on-site factory audits to verify business licenses, production capacity, quality control systems, certifications, and workforce. We also check trade references and review past export records before recommending any supplier.",
  },
  {
    q: "What are your fees?",
    a: "Our fee structure is transparent and based on the scope of services required. We typically work on a percentage of the order value or a fixed project fee. Contact us for a customized quote based on your specific needs.",
  },
  {
    q: "Do you handle shipping and logistics?",
    a: "Yes, we coordinate end-to-end logistics including freight booking, documentation, customs clearance, and delivery to your destination. We work with trusted freight forwarders to ensure competitive rates and reliable service.",
  },
  {
    q: "What is the typical timeline for a sourcing project?",
    a: "Timelines vary depending on product complexity and order volume. A typical timeline ranges from 4-12 weeks from initial inquiry to shipment. We provide a detailed timeline during the proposal phase.",
  },
  {
    q: "Do you work with small order quantities?",
    a: "Yes, we work with businesses of all sizes. While some factories have MOQ requirements, we can often negotiate smaller quantities or find flexible suppliers. We'll discuss your volume needs during the initial consultation.",
  },
  {
    q: "How do you ensure product quality?",
    a: "We implement a multi-stage quality control process including pre-production checks, during-production inspections, and final pre-shipment inspection. We also provide detailed inspection reports with photos.",
  },
  {
    q: "Can you help with product customization?",
    a: "Absolutely. We work with factories that offer OEM and ODM services. We help coordinate sample development, specification reviews, and revisions to ensure the final product matches your requirements.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="border-t bg-muted/30 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Answers to common questions about working with a China sourcing
            agent.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-base font-medium transition-colors hover:bg-muted/50"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
                    openIndex === i && "rotate-180",
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="border-t px-6 py-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}