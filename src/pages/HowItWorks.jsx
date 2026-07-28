import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { 
  FileSearch, 
  Handshake, 
  Factory, 
  ShieldCheck, 
  Truck, 
  CheckCircle2 
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      title: "1. Strategic Consultation",
      desc: "Contact us with your product idea or an existing product you're buying. We'll discuss your quality standards, target pricing, and order volume.",
      icon: <FileSearch className="w-12 h-12 text-blue-600" />
    },
    {
      title: "2. Supplier Selection",
      desc: "Our team identifies 3-5 reliable factories based on their reputation, price, and track record. We provide a comparison sheet for your review.",
      icon: <Factory className="w-12 h-12 text-blue-600" />
    },
    {
      title: "3. Sample & Negotiation",
      desc: "We coordinate samples from the shortlisted factories and help you evaluate quality. Once satisfied, we negotiate the best terms and contract details.",
      icon: <Handshake className="w-12 h-12 text-blue-600" />
    },
    {
      title: "4. Production & Quality Control",
      desc: "We manage the entire production timeline. Our QC experts perform inspections during and after production to ensure your standards are upheld.",
      icon: <ShieldCheck className="w-12 h-12 text-blue-600" />
    },
    {
      title: "5. Logistics & Shipping",
      desc: "We handle export documentation and coordinate with freight forwarders for delivery. Whether by air, sea, or rail, we track your shipment to your door.",
      icon: <Truck className="w-12 h-12 text-blue-600" />
    }
  ];

  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 id="how-hero-title" className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Our Sourcing Process</h1>
          <p id="how-hero-subtitle" className="text-xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Transparent, efficient, and risk-adjusted. Here is how we help you buy with confidence from China.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 mb-20 last:mb-0 group">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                    {step.icon}
                  </div>
                  {index !== steps.length - 1 && <div className="w-1 h-32 bg-slate-100 mt-4 rounded-full"></div>}
                </div>
                <div className="pt-4">
                  <h2 id={`step-title-${index}`} className="text-3xl font-black text-slate-900 mb-4">{step.title}</h2>
                  <p id={`step-desc-${index}`} className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                  <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white mb-8">
                    <img 
                      data-strk-img-id={`step-img-${index}`}
                      data-strk-img={`[step-desc-${index}] [step-title-${index}] sourcing process step`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="1000"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-auto object-cover max-h-80"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-8">Ready to Start Your First Project?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
            Contact our team today for a free assessment of your sourcing needs.
          </p>
          <Link to="/contact">
            <Button variant="white" size="lg" className="h-16 px-10 text-xl font-bold uppercase">
              Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
