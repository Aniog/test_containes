import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, ShieldCheck, Factory, Timer, CheckSquare, Search, Truck, Box } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      title: 'Detailed Inquiry',
      desc: 'You provide us with product specifications, estimated quantities, and target prices. This allows our team to understand the technical requirements of your project.',
      icon: Search,
      tags: ['Technical Brief', 'Target Price', 'Standard Definition']
    },
    {
      title: 'Supplier Identification',
      desc: 'We research our verified network and the wider market to identify 3-5 potential manufacturers. We request preliminary quotes and screen for genuine factories vs. middle-men.',
      icon: Factory,
      tags: ['Market Research', 'Shortlisting', 'Preliminary Quotes']
    },
    {
      title: 'Sample Evaluation',
      desc: 'We request samples from the shortlisted suppliers, consolidate them in our warehouse, and ship them to you. We assist in evaluating quality and suggesting improvements.',
      icon: Box,
      tags: ['Consolidation', 'Prototypes', 'Quality Review']
    },
    {
      title: 'Contract & Production',
      desc: 'Once samples are approved, we negotiate final terms and sign contracts with the supplier. We monitor the production timeline to ensure deadlines are met.',
      icon: Timer,
      tags: ['Negotiation', 'Purchase Order', 'Timeline Monitoring']
    },
    {
      title: 'Inspection & Shipping',
      desc: 'Our QC team conducts pre-shipment inspections. Once cleared, we manage the export paperwork and logistics to your destination, whether by sea, air, or rail.',
      icon: CheckSquare,
      tags: ['QC Report', 'Logistics Prep', 'Customs Doc']
    }
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">A Structured Approach to <span className="text-amber-500">Sourcing Success</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Eliminating guesswork and mitigating risk through a systematic, localized process on the ground in China.
          </p>
        </div>
      </section>

      {/* Steps Vertical Timeline */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-16 relative">
            {/* Left line */}
            <div className="absolute left-[20px] top-4 bottom-4 w-1 bg-slate-100 hidden md:block" />

            {steps.map((step, idx) => (
              <div key={idx} className="relative md:pl-16 flex flex-col md:flex-row gap-8 items-start group">
                {/* Step Circle */}
                <div className="hidden md:flex absolute left-0 top-0 w-[42px] h-[42px] rounded-xl bg-white border-2 border-amber-500 items-center justify-center z-10 text-amber-600 font-bold group-hover:bg-amber-500 group-hover:text-white transition-colors duration-500">
                  {idx + 1}
                </div>

                <div className="md:w-1/3">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center justify-center aspect-square shadow-inner">
                    <step.icon className="h-16 w-16 text-slate-300 group-hover:text-amber-500 transition-colors duration-500" />
                  </div>
                </div>

                <div className="md:w-2/3 space-y-4">
                   <div className="flex items-center gap-3">
                     <span className="md:hidden w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-sm">
                       {idx + 1}
                     </span>
                     <h2 className="text-2xl font-bold text-slate-900">{step.title}</h2>
                   </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-white border border-slate-200 text-slate-500 text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-md hover:border-amber-500 hover:text-amber-600 transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Callout */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-16 border border-slate-200 shadow-xl overflow-hidden relative">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 underline decoration-amber-500 decoration-4 underline-offset-8">Real Results, Zero Risk.</h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
                  We recently helped a UK-based e-commerce brand reduce their product defect rate from 8% to less than 0.5% while lowering unit costs by 15%.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 font-semibold text-slate-700">
                    <ShieldCheck className="h-6 w-6 text-green-500" />
                    Strict AQL 2.5/4.0 Standards Applied
                  </div>
                  <div className="flex items-center gap-3 font-semibold text-slate-700">
                    <Factory className="h-6 w-6 text-blue-500" />
                    Verified ISO 9001 Manufacturer
                  </div>
                </div>
                <Link to="/case-studies" className="text-amber-600 font-bold inline-flex items-center group">
                  Discover Our Case Studies <ChevronRight className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="lg:w-1/2 w-full aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden shadow-2xl relative group">
                <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  data-strk-bg-id="how-works-case-bg"
                  data-strk-bg="warehouse worker quality control shipping boxes"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
       <section className="py-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Start Your Process Today</h2>
          <p className="text-lg text-slate-600 mb-10">We offer a free initial consultation and supplier quote analysis.</p>
          <Link to="/contact" className="bg-slate-900 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-slate-800 transition-colors shadow-lg">
            Get Started
          </Link>
       </section>
    </div>
  )
}

export default HowItWorks
