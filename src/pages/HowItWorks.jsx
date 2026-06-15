import React from 'react';
import Layout from '@/Layout';
import { Link } from 'react-router-dom';
import { Search, FileText, Settings, ShieldCheck, Box, Truck, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "1. Specification & Requirements",
      icon: <FileText className="w-8 h-8" />,
      desc: "You send us your product requirements, target price, and sample specifications. We clarify details to ensure we're looking for exactly what you need.",
      details: ["Product specs & drawings", "Target quantity (MOQ)", "Budget benchmarks"]
    },
    {
      title: "2. Sourcing & Verification",
      icon: <Search className="w-8 h-8" />,
      desc: "We scan the market, request quotes, and vet suppliers. We look for established manufacturers, not shadow trading companies.",
      details: ["Supplier background check", "Certificates verification", "Pricing comparison report"]
    },
    {
      title: "3. Sample Development",
      icon: <Box className="w-8 h-8" />,
      desc: "We coordinate with chosen suppliers to create samples. We inspect the samples in our office before sending them to you.",
      details: ["Prototype adjustments", "Consolidated sample shipping", "Office QC review"]
    },
    {
      title: "4. Order & QC Control",
      icon: <ShieldCheck className="w-8 h-8" />,
      desc: "Once you approve the sample, we manage the production. Our QC team visits the factory for on-site inspections.",
      details: ["Mid-production check", "Final AQL inspection", "Lab test coordination"]
    },
    {
      title: "5. Logistics & Shipping",
      icon: <Truck className="w-8 h-8" />,
      desc: "We prepare all export documents, handle customs, and book the most cost-effective shipping method.",
      details: ["Container loading supervision", "Customs declarations", "Door-to-door tracking"]
    }
  ];

  return (
    <Layout>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Sourcing Workflow</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A transparent and proven 5-step process designed to eliminate risks and ensure your goods arrive exactly as expected.</p>
          </div>

          <div className="space-y-0 relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2" />

            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center mb-24 last:mb-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="lg:w-1/2 p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#0F4C81] text-white p-3 rounded-lg">{step.icon}</div>
                    <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{step.desc}</p>
                  <div className="space-y-3">
                    {step.details.map((item, i) => (
                      <div key={i} className="flex items-center text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-[#D97706] mr-2" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden lg:flex w-12 h-12 bg-white border-4 border-[#0F4C81] rounded-full z-10 absolute left-1/2 -translate-x-1/2 items-center justify-center font-bold text-[#0F4C81]">
                  {index + 1}
                </div>

                {/* Spacer for Desktop */}
                <div className="lg:w-1/2" />
              </div>
            ))}
          </div>

          <div className="mt-24 bg-[#D97706] rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to see how we can help you?</h2>
            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">Skip the complexity and partner with experts who know the Chinese manufacturing landscape inside out.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-white text-[#D97706] px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-all">
                Submit Your First Project
              </Link>
              <Link to="/services" className="bg-transparent border border-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-all">
                Explore Detailed Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
