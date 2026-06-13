import React from 'react';
import { TrendingUp, Clock, DollarSign, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const cases = [
    {
      id: "case-1",
      clientType: "Amazon FBA Seller (USA)",
      product: "Ergonomic Office Chairs",
      challenge: "The client was experiencing a 15% return rate due to faulty hydraulic cylinders and poor stitching in their initial supplier's chairs. They needed a new, reliable supplier and strict quality control.",
      solution: "We audited 4 new factories in Anji (China's chair capital), selected one with strict internal QMS, re-negotiated the BOM to upgrade the cylinder without significantly raising unit price, and implemented 100% pre-shipment inspection on the hydraulic parts.",
      results: [
        { icon: <TrendingUp className="w-5 h-5 text-green-500" />, text: "Return rate dropped from 15% to 1.2%" },
        { icon: <DollarSign className="w-5 h-5 text-green-500" />, text: "Saved 20% on replacement part costs" }
      ],
      imgQuery: "ergonomic office chairs warehouse manufacturing"
    },
    {
      id: "case-2",
      clientType: "Retail Brand (UK)",
      product: "Eco-Friendly Yoga Mats",
      challenge: "Client wanted to launch a new line of biodegradable yoga mats but struggled to find a factory that could provide genuine eco-certifications and meet their custom printing requirements.",
      solution: "We sourced a niche manufacturer holding SGS environmental certifications. We managed several rounds of sampling to perfect the eco-friendly ink printing on the porous TPE surface, ensuring durability.",
      results: [
        { icon: <Clock className="w-5 h-5 text-blue-500" />, text: "Launched product 2 months ahead of schedule" },
        { icon: <TrendingUp className="w-5 h-5 text-blue-500" />, text: "First batch sold out in 3 weeks" }
      ],
      imgQuery: "eco friendly yoga mats production"
    },
    {
      id: "case-3",
      clientType: "Hardware Start-up (Australia)",
      product: "Smart Home Security Camera",
      challenge: "The start-up had a working prototype but lacked the expertise to move to mass production (DFM - Design for Manufacturing). They needed help with mold creation and component sourcing.",
      solution: "We connected them with an experienced OEM electronics manufacturer in Shenzhen. We facilitated the translation of technical schematics, negotiated tooling costs, and oversaw the first trial production run (pilot run).",
      results: [
        { icon: <DollarSign className="w-5 h-5 text-purple-500" />, text: "Reduced initial tooling costs by 30%" },
        { icon: <TrendingUp className="w-5 h-5 text-purple-500" />, text: "Achieved CE and FCC compliance on first try" }
      ],
      imgQuery: "smart home security camera manufacturing assembly"
    }
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real examples of how we've helped international buyers overcome supply chain challenges and grow their businesses.
          </p>
        </div>
      </div>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-16">
            {cases.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-2/5 relative">
                  <img 
                    data-strk-img-id={`cs-${study.id}`}
                    data-strk-img={study.imgQuery}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.product}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-sm font-semibold text-slate-900 rounded shadow">
                    {study.clientType}
                  </div>
                </div>
                
                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{study.product}</h2>
                  
                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">The Challenge</h3>
                      <p className="text-slate-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Our Solution</h3>
                      <p className="text-slate-600">{study.solution}</p>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Key Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-slate-700 font-medium">
                            <span className="mr-3 bg-white p-1 rounded-full shadow-sm">{result.icon}</span>
                            {result.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Quote className="w-16 h-16 mx-auto mb-6 text-blue-300 opacity-50" />
          <h2 className="text-3xl font-light italic mb-8 leading-relaxed">
            "We were hesitant to switch agents, but SSourcing China's transparency and boots-on-the-ground capability immediately resolved issues we had been fighting for months. They are truly an extension of our own team."
          </h2>
          <p className="text-lg font-semibold">- Operations Director, Global Retail Brand</p>
          
          <div className="mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-blue-600 bg-white hover:bg-slate-100 shadow-lg transition-all"
            >
              Become Our Next Success Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;