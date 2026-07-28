import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Requirement Analysis',
    description: 'You share your product specs, budget, and quantity. We analyze the feasibility and target potential regions in China.'
  },
  {
    number: '02',
    title: 'Supplier Selection',
    description: 'We shortlist 3-5 reliable suppliers, request quotes, and evaluate samples to find the best match.'
  },
  {
    number: '03',
    title: 'Production Management',
    description: 'Once you confirm, we oversee the production process, ensuring the factory adheres to the timeline and specifications.'
  },
  {
    number: '04',
    title: 'Phased Inspection',
    description: 'We conduct pre-shipment inspections based on AQL standards, providing you with detailed photos and reports.'
  },
  {
    number: '05',
    title: 'Shipping and Tracking',
    description: 'We coordinate the export, handle customs paperwork, and track your shipment until it reaches your warehouse.'
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="process-title" className="text-3xl md:text-4xl font-bold mb-4">Our Sourcing Process</h2>
          <p id="process-subtitle" className="text-lg text-gray-300 max-w-2xl mx-auto">
            A transparent and systematic approach to ensure your sourcing success from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
          {/* Connector Line (visible on md and up) */}
          <div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-secondary/30 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center p-6 text-center group">
              <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
