import React, { useEffect, useRef } from 'react';
import { Search, MapPin, Calculator, Factory, Container, ThumbsUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages({}, containerRef.current);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Submit Your Inquiry",
      description: "Tell us what product you need, required specifications, target price, and estimated order quantity. We review your requirements within 24 hours.",
      icon: <Search className="w-8 h-8 text-primary" />
    },
    {
      number: "02",
      title: "Supplier Search & Quote",
      description: "We use our local network to find 3-5 reliable factories that match your needs. We negotiate prices and provide you with a comprehensive quote sheet.",
      icon: <Calculator className="w-8 h-8 text-primary" />
    },
    {
      number: "03",
      title: "Sampling & Verification",
      description: "We collect samples from shortlisted factories, check them against your specs, and send you the best one for final approval.",
      icon: <ThumbsUp className="w-8 h-8 text-primary" />
    },
    {
      number: "04",
      title: "Production & Follow-up",
      description: "Once you place the order, we monitor the production timeline closely, providing you with regular updates and photos from the factory floor.",
      icon: <Factory className="w-8 h-8 text-primary" />
    },
    {
      number: "05",
      title: "Quality Inspection",
      description: "Before shipping, our inspectors run a strict AQL inspection. You receive a detailed report with photos. Products only ship if they pass.",
      icon: <MapPin className="w-8 h-8 text-primary" /> /* Reusing MapPin as a placeholder */
    },
    {
      number: "06",
      title: "Shipping & Delivery",
      description: "We arrange the most cost-effective shipping method (Sea or Air), handle customs paperwork, and deliver straight to your warehouse.",
      icon: <Container className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <div ref={containerRef} className="pt-20">
      <section className="bg-slate-900 text-white py-20 bg-cover bg-center relative">
        <div 
          className="absolute inset-0 z-0 opacity-30"
          data-strk-bg-id="how-it-works-bg"
          data-strk-bg="[how-title] container shipping"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        ></div>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <h1 id="how-title" className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Process</h1>
          <p className="text-xl text-slate-300">
            A proven, 6-step methodology to source products safely and efficiently from China.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center justify-between md:justify-normal ${index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white font-bold shrink-0 md:order-1 md:-translate-x-1/2 md:shadow absolute left-0 md:left-1/2 transform -translate-x-1/2">
                  {step.number}
                </div>
                
                {/* Content Card */}
                <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 ${index % 2 === 0 ? 'ml-auto text-left' : 'ml-auto md:ml-0 md:text-right'}`}>
                  <div className={`mb-4 ${index % 2 === 0 ? '' : 'md:flex md:justify-end'}`}>
                    <div className="bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center border border-slate-100">
                      {step.icon}
                    </div>
                  </div>
                  <h3 id={`step-title-${index}`} className="text-xl font-bold mb-3">{step.title}</h3>
                  <p id={`step-desc-${index}`} className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Start Your Sourcing Journey Today</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Ready to find your next reliable supplier in China? Fill out our inquiry form to get started.
          </p>
          <Link to="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md font-bold text-lg transition-colors inline-flex">
            Submit Your Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;