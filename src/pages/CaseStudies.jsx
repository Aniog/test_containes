import React from 'react';
import { CheckCircle2, Quote, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      title: "Cost Optimization for European E-commerce Brand",
      category: "Consumer Electronics",
      challenge: "The client was buying from a trading company and faced high prices and inconsistent quality.",
      solution: "We traced the original manufacturer, negotiated direct pricing, and implemented a strict QC protocol.",
      result: "35% reduction in COGS and defect rate dropped from 4% to 0.2%.",
      img: "high tech consumer electronics factory production line",
      id: "case-1"
    },
    {
      title: "Scale-up Support for North American Startup",
      category: "Home & Furniture",
      challenge: "Scaling production from 100 units to 5,000 units while maintaining design integrity.",
      solution: "Identified a factory with automated production lines and managed the entire scale-up transition.",
      result: "Successfully fulfilled 5,000 units within 45 days, meeting all safety certifications.",
      img: "modern furniture manufacturing facility",
      id: "case-2"
    },
    {
      title: "Complex OEM Development for Industrial Client",
      category: "Industrial Components",
      challenge: "Developing a custom-molded component with extremely tight tolerances (+/- 0.05mm).",
      solution: "Partnered with a precision engineering factory in Shenzhen and supervised 3 rounds of prototyping.",
      result: "Final product exceeded client expectations and saved 50% compared to local production.",
      img: "precision metal parts manufacturing",
      id: "case-3"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real-world examples of how we help our clients succeed in the Chinese market.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {cases.map((item, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                    <div 
                      className="h-[400px] md:h-[500px] bg-slate-200 transition-transform duration-700 group-hover:scale-105"
                      data-strk-bg-id={`case-bg-${item.id}`}
                      data-strk-bg={item.img}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="800"
                    />
                    <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                      {item.category}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-blue-600 uppercase tracking-widest text-xs mb-2">The Challenge</h4>
                      <p className="text-slate-600 leading-relaxed italic border-l-4 border-blue-100 pl-4">"{item.challenge}"</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-600 uppercase tracking-widest text-xs mb-2">Our Solution</h4>
                      <p className="text-slate-600 leading-relaxed font-medium">{item.solution}</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                      <h4 className="font-bold text-green-700 uppercase tracking-widest text-xs mb-2">The Result</h4>
                      <p className="text-green-800 font-bold text-xl">{item.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-5">
           <Quote className="w-96 h-96 text-slate-900" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-10 inline-block p-4 bg-blue-600 text-white rounded-full">
              <Quote className="w-8 h-8" />
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-medium text-slate-800 leading-relaxed mb-12 italic">
              "Switching to SSourcing China was the best decision for our supply chain. Their on-the-ground presence and fast communication saved us from multiple supplier issues."
            </h2>
            <div>
              <p className="font-bold text-slate-900 text-xl">Mark Richardson</p>
              <p className="text-slate-500">CEO, TechFlow Solutions UK</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Achieve Similar Results for Your Brand</h2>
          <a href="/contact" className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-xl hover:bg-blue-700 transition-all">
            Get Started Now <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

