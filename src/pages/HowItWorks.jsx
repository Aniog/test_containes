import React from 'react';
import { ClipboardList, Search, FileSignature, Box, CheckSquare, Ship } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Inquiry',
      icon: ClipboardList,
      desc: 'Fill out our contact form with details about the product you want to source, including specifications, target price, and estimated order quantity. We will review your request within 24 hours.'
    },
    {
      number: '02',
      title: 'Supplier Match & Quotation',
      icon: Search,
      desc: 'We access our database and contact potential factories. We gather quotes, verify their credentials, and present you with the best options along with a completely transparent cost breakdown.'
    },
    {
      number: '03',
      title: 'Sample Production & Approval',
      icon: FileSignature,
      desc: 'Once a supplier is selected, we arrange for sample production. We consolidate samples from different factories if needed, and ship them to you for final approval before mass production.'
    },
    {
      number: '04',
      title: 'Mass Production & Follow-up',
      icon: Box,
      desc: 'After you approve the sample and place the deposit, mass production begins. We closely monitor the schedule, solve any mid-production issues, and provide you with regular progress updates.'
    },
    {
      number: '05',
      title: 'Quality Inspection',
      icon: CheckSquare,
      desc: 'Before the final payment is made, our QC team visits the factory to conduct a strict Pre-Shipment Inspection (PSI). We send you a detailed report with photos and test results.'
    },
    {
      number: '06',
      title: 'Shipping & Delivery',
      icon: Ship,
      desc: 'Upon your approval of the QC report, we coordinate the logistics. Whether it is sea freight to your warehouse or direct delivery to an Amazon FBA center, we handle the shipping and customs.'
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-slate-900 py-20 text-white border-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">How Our Process Works</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A simple, transparent, and structured 6-step process to take your product from idea to successful delivery.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform -translate-x-1/2 z-0"></div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative z-10 flex flex-col md:flex-row items-center justify-between group">
                  {/* Content Left (visible on even, hidden on odd on desktop) */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12 md:text-right text-left' : 'md:hidden'}`}>
                    {isEven && (
                      <>
                        <div className="md:hidden inline-block text-blue-600 font-bold mb-2">Step {step.number}</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                      </>
                    )}
                  </div>

                  {/* Center Node */}
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center shrink-0 my-6 md:my-0 shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <span className="text-blue-600 font-bold text-lg md:text-xl">{step.number}</span>
                  </div>

                  {/* Content Right (visible on odd, hidden on even on desktop) */}
                  <div className={`w-full md:w-5/12 ${!isEven ? 'md:pl-12 text-left' : 'md:hidden'}`}>
                    {!isEven && (
                       <>
                       <div className="md:hidden inline-block text-blue-600 font-bold mb-2">Step {step.number}</div>
                       <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                       <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                     </>
                    )}
                    {/* Fallback for Mobile if it was Even (forces display) */}
                    {isEven && (
                      <div className="md:hidden">
                        <div className="inline-block text-blue-600 font-bold mb-2">Step {step.number}</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20 text-center border-t border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to start Step 01?</h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          It costs nothing to get a quote. Let us show you what we can find for your business.
        </p>
        <Link to="/contact" className="inline-flex bg-blue-600 text-white hover:bg-blue-700 font-bold py-4 px-10 rounded-md transition-colors duration-200 shadow-md">
          Start Your Inquiry Now
        </Link>
      </section>
    </div>
  );
}
