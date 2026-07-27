import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, Search, FileSignature, Box, Truck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <ClipboardList className="h-10 w-10 text-white" />,
      title: "1. Tell Us What You Need",
      description: "Submit a detailed inquiry with your product specifications, target price, desired quantity, and any special requirements. The more details you provide, the better we can match you with the right factory."
    },
    {
      icon: <Search className="h-10 w-10 text-white" />,
      title: "2. Supplier Search & Quote",
      description: "We reach out to our network and negotiate with multiple verified factories. We present you with a transparent quote detailing product costs, our service fees, and estimated shipping."
    },
    {
      icon: <Box className="h-10 w-10 text-white" />,
      title: "3. Sample Creation & Approval",
      description: "Once you accept the quote, we coordinate the creation of product samples. We consolidate samples from different factories and send them to you for final approval before bulk production begins."
    },
    {
      icon: <FileSignature className="h-10 w-10 text-white" />,
      title: "4. Production & Quality Control",
      description: "After sample approval and initial deposit, mass production starts. We monitor the timeline and conduct strict quality inspections based on agreed standards before final payment is made."
    },
    {
      icon: <Truck className="h-10 w-10 text-white" />,
      title: "5. Shipping & Delivery",
      description: "We handle all the logistics, customs clearance, and shipping arrangements to ensure your goods arrive safely at your designated warehouse or directly to Amazon FBA."
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-slate-900 py-16 lg:py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">How Our Process Works</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A simple, transparent, and secure 5-step process to source products from China without the headache.
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
        {/* Background line connecting steps (desktop only) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2 z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} lg:mb-24 last:mb-0`}>
                
                {/* Content Side */}
                <div className={`lg:w-1/2 ${index % 2 !== 0 ? 'lg:pl-16' : 'lg:text-right lg:pr-16'}`}>
                  <div className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 ${index % 2 !== 0 ? 'text-left' : 'lg:text-right'}`}>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-blue-600 rounded-full items-center justify-center border-4 border-slate-50 shadow-md">
                  {step.icon}
                </div>

                {/* Mobile Icon (visible only on small screens) */}
                <div className="lg:hidden w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-[-2rem] z-10 border-4 border-slate-50">
                   {React.cloneElement(step.icon, { className: "h-8 w-8 text-white" })}
                </div>

                {/* Empty Side for layout pacing */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* Pricing/Transparency Note */}
       <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Pricing Model</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We believe in 100% transparency. Unlike trading companies that mark up product prices and hide their margins, we charge a flat service fee based on the total order value. You pay the direct factory price for the goods.
          </p>
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 mb-8 flex flex-col md:flex-row justify-around gap-6">
            <div>
              <span className="block text-4xl font-bold text-blue-600 mb-2">5-10%</span>
              <span className="text-slate-700 font-medium">Service Fee</span>
            </div>
            <div className="hidden md:block w-px bg-slate-200"></div>
            <div>
              <span className="block text-4xl font-bold text-slate-900 mb-2">0%</span>
              <span className="text-slate-700 font-medium">Hidden Factory Markups</span>
            </div>
          </div>
          <Link to="/contact" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
            Ask about our pricing for your project <span className="ml-2">&rarr;</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default HowItWorks;
