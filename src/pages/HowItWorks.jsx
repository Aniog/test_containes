import React from 'react';
import { CheckCircle, Search, FileText, Factory, ShieldCheck, Truck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "1. Requirement Analysis",
      description: "You provide your product specifications, target price, and volume. We review technical details to ensure a clear understanding."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "2. Supplier Search & Selection",
      description: "We scan the market and filter top suppliers. We provide a detailed sourcing report with prices and lead times from at least 3-5 reliable factories."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "3. Sampling & Evaluation",
      description: "We coordinate sample production and consolidate them to save you shipping costs. We perform a preliminary check before sending them to you."
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "4. Order Execution",
      description: "Once samples are approved, we assist in contract signing and deposit payment. We manage the production schedule to ensure everyone stays on track."
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "5. QC Inspection",
      description: "Our team performs a final pre-shipment inspection. You receive a detailed report with photos and videos for approval before full payment."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "6. Shipping Coordination",
      description: "We handle the logistics—booking containers, supervising cargo loading, and managing export documentation for smooth customs clearance."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          data-strk-bg-id="hiw-bg-1"
          data-strk-bg="abstract business process flow diagram"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Process</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">A transparent, step-by-step approach to securing your supply chain in China.</p>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-blue-900 ml-4 md:ml-0 md:border-l-0">
              {steps.map((step, index) => (
                <div key={index} className={`mb-16 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2" />
                  <div className="absolute left-[-11px] md:relative md:left-0 md:mx-8">
                    <div className="h-12 w-12 bg-blue-900 text-amber-500 rounded-full flex items-center justify-center shadow-lg z-10">
                      {step.icon}
                    </div>
                  </div>
                  <div className={`md:w-1/2 bg-slate-50 p-8 rounded-lg shadow-sm border ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Global Buyers Trust SSourcing China</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">Local Eyes</div>
              <p className="text-slate-300 italic">"We are your extension in China. We see what you can't see from thousands of miles away."</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">No Hidden Fees</div>
              <p className="text-slate-300 italic">"Transparent pricing with no kickbacks from factories. We work exclusively for you."</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">Problem Solvers</div>
              <p className="text-slate-300 italic">"Production issues are common. Being there to solve them immediately is our value."</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
