import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Inquiry',
      description: 'Tell us what you want to source. Provide product specifications, target prices, order quantities, and any specific requirements. The more details you provide, the better we can match you with the right suppliers.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      number: '02',
      title: 'Supplier Selection & Quotation',
      description: 'We leverage our network to find 3-5 suitable factories. We negotiate the best prices, verify their credentials, and present you with a detailed quotation report comparing all options.',
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      number: '03',
      title: 'Sample Evaluation',
      description: 'We arrange for sample production from the shortlisted suppliers. We receive the samples at our China office, check them against your specs, take detailed photos/videos, and consolidate them into one package to send to you.',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      number: '04',
      title: 'Order Placement & Production',
      description: 'Once you approve a sample, we help you draft a secure manufacturing contract. We monitor the production process closely, providing you with weekly updates to ensure timelines are strictly met.',
      color: 'bg-pink-50 text-pink-600',
    },
    {
      number: '05',
      title: 'Pre-Shipment Inspection',
      description: 'Before you pay the final balance to the factory, our QC team conducts a rigorous inspection (often based on AQL standards) at the factory to ensure every product meets your quality expectations.',
      color: 'bg-rose-50 text-rose-600',
    },
    {
      number: '06',
      title: 'Shipping & Delivery',
      description: 'We handle the logistics. Whether you need express air freight, sea freight (FCL/LCL), or Amazon FBA prep and delivery, we coordinate the entire shipment and manage customs clearance.',
      color: 'bg-orange-50 text-orange-600',
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-gray-50 py-20 text-center border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Our Sourcing Process</h1>
          <p className="text-xl text-gray-600">
            A transparent, 6-step framework designed to minimize your risk while maximizing efficiency and product quality.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded"></div>
            
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content Box */}
                  <div className="w-full md:w-1/2 p-6">
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative z-10">
                      <div className="flex items-center mb-4">
                        <span className={`text-4xl font-black mr-4 ${step.color.split(' ')[1]}`}>
                          {step.number}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className={`w-12 h-12 rounded-full border-4 border-white shadow flex items-center justify-center font-bold text-lg ${step.color} z-20`}>
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-6">Ready to initiate Step 1?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your product requirements. It costs nothing to get a quote.
          </p>
          <Link to="/contact" className="inline-flex px-8 py-4 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition-colors text-lg">
            Submit Your Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;