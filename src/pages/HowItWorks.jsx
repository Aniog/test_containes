import React from 'react';
import { FileText, Search, PackageCheck, Ship, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.tsx';

export const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: FileText,
      title: "1. Submit Your Requirements",
      desc: "Send us your product specifications, target price, estimated order quantity, and any other relevant details through our contact form. The more detailed, the better we can understand your needs."
    },
    {
      id: 2,
      icon: Search,
      title: "2. Supplier Search & Quote",
      desc: "Within 24-48 hours, we will evaluate your project, contact potential verified manufacturers from our network, and provide you with an initial quote and feasibility report. This step is completely free."
    },
    {
      id: 3,
      icon: PackageCheck,
      title: "3. Sampling & Approval",
      desc: "Once you approve the initial quote, we arrange for samples to be made. We consolidate samples in our office, perform an initial quality check against your specs, and send them to you for final approval."
    },
    {
      id: 4,
      icon: PackageCheck,
      title: "4. Production & Quality Control",
      desc: "Upon sample approval, you place the bulk order. We monitor the production schedule and perform on-site quality control inspections (AQL) to ensure the bulk goods match the approved sample perfectly."
    },
    {
      id: 5,
      icon: Ship,
      title: "5. Shipping & Delivery",
      desc: "After successful inspection, we arrange the most cost-effective shipping method (sea, air, or rail). We handle all export customs clearance in China and ensure smooth delivery to your destination address."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pb-20">
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-lg md:text-xl text-slate-300">
            A simple, transparent, and structured 5-step process to source products safely from China.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Connection Line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full h-12 flex items-center justify-center text-slate-300">
                        <ArrowDown className="h-6 w-6" />
                    </div>
                  )}
                  
                  <Card className="border-none shadow-md bg-white relative z-10 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                        <div className="shrink-0">
                            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                                <step.icon className="h-10 w-10 text-primary" />
                            </div>
                        </div>
                        <div>
                            <CardHeader className="p-0 mb-3">
                                <CardTitle className="text-2xl text-slate-900">{step.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <CardDescription className="text-lg text-slate-600">
                                    {step.desc}
                                </CardDescription>
                            </CardContent>
                        </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
};