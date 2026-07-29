import React from 'react';
import { Search, ShieldCheck, Factory, Truck, CheckCircle, HelpCircle } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Step 1: Consultation & Research",
      desc: "Tell us what you need. We analyze your requirements and identify potential regions and manufacturers that match your price and quality targets."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Step 2: Supplier Verification",
      desc: "We don't just find suppliers; we verify them. We check licenses, production capacity, and past export records to ensure they are real factories."
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Step 3: Sample & Production",
      desc: "We coordinate samples for your approval. Once approved, we monitor production to ensure the factory follows your technical specifications exactly."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Step 4: Quality Control",
      desc: "Our inspectors visit the factory before shipment. We perform AQL inspections, taking photos and videos of your products for your final sign-off."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Step 5: Shipping & Logistics",
      desc: "We coordinate with freight forwarders to book space, prepare export documents, and track your shipment until it reaches your warehouse."
    }
  ];

  const faqs = [
    {
      q: "What are your sourcing fees?",
      a: "Our fees range from 3% to 7% of the total order value, depending on the service level and order complexity. We also offer fixed-price packages for audits and inspections."
    },
    {
      q: "What is your Minimum Order Quantity (MOQ)?",
      a: "While we can source for small businesses, most China factories have MOQs. We typically handle projects starting at $5,000 to ensure cost-effectiveness for our clients."
    },
    {
      q: "How do you handle quality disputes?",
      a: "We act as your local advocate. By performing inspections before final payment, we find issues while the goods are still in the factory. We negotiate repairs or replacements immediately."
    },
    {
      q: "Do you handle shipping and customs?",
      a: "Yes, we coordinate the entire logistics chain. We work with both our network of forwarders and your existing partners to ensure smooth delivery and documentation."
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-[#002D62] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">How It Works</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our systematic 5-step process takes the risk out of China sourcing.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 mb-16 last:mb-0 relative">
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-100 hidden md:block"></div>
                )}
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] z-10">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#002D62] mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 justify-center mb-12">
              <HelpCircle className="text-[#FF6B00] w-8 h-8" />
              <h2 className="text-3xl font-bold text-[#002D62]">Frequently Asked Questions</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-xl px-6">
                  <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
