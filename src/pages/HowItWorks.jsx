import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { MessageSquare, Handshake, CheckSquare, Truck } from 'lucide-react';

export default function HowItWorks() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      id: 'step1',
      icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
      title: '1. Tell Us What You Need',
      desc: 'Submit your product requirements, including specifications, target price, material details, and estimated order quantity. The more details you provide, the better we can match you with the right supplier.'
    },
    {
      id: 'step2',
      icon: <Handshake className="w-8 h-8 text-blue-600" />,
      title: '2. We Source & Quote',
      desc: 'Our sourcing team contacts multiple verified factories in our network. We negotiate the best prices on your behalf and deliver a comprehensive quotation detailing unit costs, sample fees, and estimated shipping costs.'
    },
    {
      id: 'step3',
      icon: <CheckSquare className="w-8 h-8 text-blue-600" />,
      title: '3. Sample Approval & Production',
      desc: 'Once you approve the initial quote, we arrange for samples. After you confirm the physical sample, we draft the contract and place the official order with the factory. We monitor the production daily.'
    },
    {
      id: 'step4',
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: '4. Quality Control & Delivery',
      desc: 'Before the balance payment is made, our QC team goes to the factory to inspect the goods. Once approved, we handle the logistics, export customs clearance, and ship the products directly to your designated warehouse.'
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-20 relative">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          data-strk-bg-id="howitworks-header-bg"
          data-strk-bg="[howitworks-header-title] business process planning"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container relative mx-auto px-4 text-center z-10">
          <h1 id="howitworks-header-title" className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100">
            A seamless, risk-free process to get your products manufactured and delivered.
          </p>
        </div>
      </section>

      {/* Steps Vertical Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connector Line */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-24 bottom-[-4rem] w-0.5 bg-blue-100 z-0"></div>
                )}
                
                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                  <div className="md:w-24 flex-shrink-0 flex justify-start md:justify-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-8 flex-1 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h2 id={`step-${step.id}-title`} className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h2>
                    <p id={`step-${step.id}-desc`} className="text-lg text-gray-600 leading-relaxed mb-6">
                      {step.desc}
                    </p>
                    <div className="rounded-xl overflow-hidden aspect-[21/9] bg-gray-200">
                      <img 
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={step.title}
                        data-strk-img-id={`step-${step.id}-img`}
                        data-strk-img={`[step-${step.id}-desc] [step-${step.id}-title] business`}
                        data-strk-img-ratio="16x9"
                        data-strk-img-width="800"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50 border-t border-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Sourcing?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Tell us about your product requirements, and our experts will get back to you with a tailored plan.
          </p>
          <Button size="lg" className="bg-blue-600 text-white px-8" asChild>
            <Link to="/contact">Submit Your Inquiry</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
