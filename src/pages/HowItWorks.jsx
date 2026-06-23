import React from 'react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Submit Your Request",
      desc: "Tell us about your product, specifications, target price, and estimated order quantity. The more details you provide, the better we can find the exact match."
    },
    {
      num: "02",
      title: "We Source & Quote",
      desc: "Our team contacts our network of verified factories. Within 48-72 hours, we provide you with a comprehensive quote including product costs, sample costs, and estimated shipping."
    },
    {
      num: "03",
      title: "Sample Approval",
      desc: "We arrange samples from the best factories, verify them in our office first to avoid wasting your time, and then consolidate them into one package sent directly to you."
    },
    {
      num: "04",
      title: "Order Placement",
      desc: "Once you approve the sample, we finalize the contract with the factory, confirming lead times, quality standards, and terms before you pay the initial deposit."
    },
    {
      num: "05",
      title: "Production Follow-up",
      desc: "We monitor production closely, stepping in to solve any manufacturing challenges, keeping you updated with photos and videos of your products being made."
    },
    {
      num: "06",
      title: "Quality Control",
      desc: "Before products are shipped, our inspectors visit the factory to conduct a strict AQL inspection. Only when the products pass will you be asked to pay the balance."
    },
    {
      num: "07",
      title: "Shipping & Delivery",
      desc: "We arrange the most cost-effective freight (Sea/Air/Train), handle all export/import documents, and ensure your goods arrive safely at your final destination."
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How It Works</h1>
          <p className="text-xl text-slate-600">
            A transparent and proven 7-step process designed to minimize your risk 
            and maximize your profit margins when importing from China.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-100 pl-8 ml-4 md:mx-auto md:border-l-0 md:pl-0">
            {/* Center line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2"></div>
            
            {steps.map((step, index) => {
              const isEven = index % 2 !== 0;
              return (
                <div key={index} className={`relative mb-16 md:flex ${isEven ? 'md:flex-row-reverse' : ''} items-center`}>
                  {/* Circle number */}
                  <div className={`
                    absolute left-[-49px] md:left-1/2 md:translate-x-[-50%] 
                    w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg
                    flex items-center justify-center shadow-lg border-4 border-white
                    z-10
                  `}>
                    {step.num}
                  </div>
                  
                  {/* Content Box */}
                  <div className={`md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <div className="bg-slate-50 p-6 md:p-8 rounded-xl shadow-sm border border-slate-100 inline-block w-full">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to start importing safely?</h2>
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-block">
            Get Your Free Sourcing Quote
          </Link>
        </div>
      </div>
    </div>
  );
}