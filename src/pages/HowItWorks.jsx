import { FileText, MagnifyingGlass, Handshake, ShieldCheck, PlaneTakeoff, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "1. Tell Us Your Needs",
      description: "Submit your product specifications, target price, quantities, and quality requirements. The more details you provide, the better."
    },
    {
      icon: <MagnifyingGlass className="h-8 w-8" />,
      title: "2. Supplier Search & Quote",
      description: "We reach out to our network and vet new factories to bring you the best options. We present you with transparent quotes."
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "3. Sample Approval",
      description: "We collect samples from manufacturers, consolidate them, and send them to you for final approval before bulk production starts."
    },
    {
      icon: <Check className="h-8 w-8" />,
      title: "4. Production & Updates",
      description: "Once POs are signed and deposits paid, manufacturing begins. We follow up with the factory regularly to ensure deadlines are met."
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "5. Quality Inspection",
      description: "Our QC team visits the factory to inspect the goods based on your AQL standard before the final balance is paid."
    },
    {
      icon: <PlaneTakeoff className="h-8 w-8" />,
      title: "6. Shipping & Delivery",
      description: "We arrange the most cost-effective shipping method, handle export customs, and ensure your goods arrive safely at your destination."
    }
  ];

  return (
    <div className="pb-20">
      
      {/* Page Header */}
      <div className="bg-secondary py-16 text-center text-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How Our Sourcing Process Works</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">A transparent, step-by-step approach to importing from China safely and efficiently.</p>
        </div>
      </div>

      {/* Steps Timeline Wrapper */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
            <div className="relative">
                {/* Vertical Line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200"></div>
                
                <div className="space-y-12">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={index} className="relative flex flex-col md:flex-row items-center w-full">
                                
                                {/* Left Side (Content or Empty) */}
                                <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:order-3 md:pl-12'} mb-8 md:mb-0`}>
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 relative">
                                        {/* Mobile icon (hidden on desktop) */}
                                        <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white mb-4">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-secondary mb-3">{step.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>

                                {/* Center Icon (Desktop only) */}
                                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-16 h-16 rounded-full bg-primary border-4 border-white text-white z-10 shadow-sm">
                                    {step.icon}
                                </div>

                                {/* Right Side (Empty or Content) */}
                                <div className={`hidden md:block w-1/2 ${isEven ? 'md:order-3' : 'md:order-1'}`}></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
      </div>

       {/* CTA */}
       <div className="bg-muted py-16">
           <div className="container mx-auto px-4 text-center">
               <h2 className="text-3xl font-bold mb-4">Ready to start Step 1?</h2>
               <p className="text-lg text-slate-600 mb-8">Send us your product requirements today.</p>
               <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                <Link to="/contact">Submit Your Inquiry</Link>
              </Button>
           </div>
       </div>

    </div>
  );
};

export default HowItWorks;