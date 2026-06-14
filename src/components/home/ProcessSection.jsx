import React from 'react';
import { processSteps } from '../../data/content';
import { Check } from 'lucide-react';

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-[#1E3A5F]/10 text-[#1E3A5F] text-sm font-semibold rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Process
          </h2>
          <p className="text-lg text-[#6B7280]">
            Our streamlined 5-step process makes sourcing from China straightforward and risk-free.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#E5E7EB] -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-[#1E3A5F] rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto lg:mx-0">
                    {step.step}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-center lg:text-left">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] text-center lg:text-left">
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow (Desktop) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                      <Check className="w-4 h-4 text-[#059669]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E67E22] hover:bg-[#D35400] text-white font-semibold rounded-lg transition-all duration-200"
          >
            Start Your Sourcing Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;