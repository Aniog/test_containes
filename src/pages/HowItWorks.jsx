import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: "1. Detailed Inquiry",
    description: "Submit your product specifications, target pricing, and volume. Our team reviews the data to ensure we can meet your quality and budget needs."
  },
  {
    title: "2. Supplier Sourcing & Selection",
    description: "We reach out to our network of verified manufacturers and research new ones. We provide you with a shortlist of the top 3 suppliers including full pricing and factory details."
  },
  {
    title: "3. Sample Assessment",
    description: "Before moving to mass production, we coordinate and review physical samples. We can even perform initial testing in our Shenzhen office to save you time and shipping costs."
  },
  {
    title: "4. Production Oversight",
    description: "We manage the contract and deposit. Throughout the production cycle, we provide weekly status updates and photos from the factory floor."
  },
  {
    title: "5. Pre-Shipment Inspection",
    description: "Our QC engineers visit the factory for a final randomized inspection. We check for defects, functional issues, and ensure packaging meets international standards."
  },
  {
    title: "6. Logistics & Customs",
    description: "We coordinate with freight forwarders for the most efficient shipping method. We handle export documentation in China and ensure the goods are tracked until they reach your warehouse."
  }
];

const HowItWorks = () => {
  useEffect(() => {
    document.title = "How It Works | Our Sourcing Process | SSourcing China";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Your Roadmap to Sourcing Success</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We follow a transparent, rigorous process to ensure your procurement in China is predictable, safe, and efficient.
          </p>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-16 relative">
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-[2.25rem] top-8 bottom-8 w-px bg-slate-200" />

            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 relative group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl shrink-0 z-10 shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                  {index + 1}
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex-grow hover:bg-white hover:shadow-xl transition-all duration-300">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{step.title}</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center italic">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-4xl text-primary font-serif opacity-30">"</div>
            <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-snug">
              Our goal is to be your local office in China. We prioritize your interests above everything else, ensuring every cent of your investment is protected.
            </p>
            <div className="flex flex-col items-center">
              <span className="font-bold text-slate-900">Zhang Wei</span>
              <span className="text-slate-500 text-sm">Managing Director, SSourcing China</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Step 1?</h2>
          <Link to="/contact">
            <Button size="xl" className="h-14 px-10">Submit Your First Inquiry <ArrowRight className="ml-2 w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
