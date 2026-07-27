import React from 'react';
import { useImageLoader } from '@/hooks/useImageLoader';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare, Search, FileText, CheckCircle2, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const containerRef = useImageLoader();
  const steps = [
    {
      number: "01",
      title: "Tell Us Your Needs",
      icon: MessageSquare,
      desc: "Fill out our inquiry form or send us your product specifications, quantity, target price, and any special requirements."
    },
    {
      number: "02",
      title: "Sourcing & Quoting",
      icon: Search,
      desc: "Our team searches for the best factories, verifies their reliability, and provides you with a detailed quote including product and shipping costs."
    },
    {
      number: "03",
      title: "Sampling & Feedback",
      icon: FileText,
      desc: "We collect samples from shortlisted factories, inspect them at our office, and ship them to you for final approval."
    },
    {
      number: "04",
      title: "Production & QC",
      icon: CheckCircle2,
      desc: "Once you place the order, we monitor production and conduct strict quality inspections based on your approved samples and specs."
    },
    {
      number: "05",
      title: "Shipping & Delivery",
      icon: Truck,
      desc: "We handle container loading and all export documentation, coordinating with our freight partners to deliver your goods safely."
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-primary text-white py-20">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our 5-Step Sourcing Process</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A transparent and efficient path from product idea to warehouse delivery.
          </p>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-[400px] left-0 w-full h-1 bg-slate-100 -z-10" />
        
        <div className="container px-4">
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="text-4xl font-black text-slate-100 group-hover:text-secondary/20 transition-colors mb-4">{step.number}</div>
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <step.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20 w-8 h-8 items-center justify-center bg-white rounded-full border shadow-sm">
                    <ArrowRight size={16} className="text-slate-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust points */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 underline decoration-secondary decoration-4 underline-offset-8">Transparency At Every Step</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                   <div className="w-2 h-8 bg-secondary rounded-full" />
                   Real-Time Communication
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  We provide regular updates via WhatsApp, WeChat, or Email. You'll receive real-time photos and videos from factory visits and inspections.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                   <div className="w-2 h-8 bg-secondary rounded-full" />
                   Unbiased Reports
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Our QC inspectors work for you, not the factory. Our reports are objective, detailed, and include clear "Pass/Fail" results with photographic evidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to get started?</h2>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="h-14 px-10 font-bold">Request a Free Quote</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
