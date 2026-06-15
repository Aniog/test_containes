import React from 'react';

const CaseStudies = () => {
  const cases = [
    {
      title: "Cost reduction for European Electronics Brand",
      client: "Luxury Audio Retailer, Germany",
      challenge: "High production costs and inconsistent quality from current supplier.",
      solution: "Identified a new Tier-1 manufacturer in Shenzhen, implemented 100% DPI (During Production Inspection).",
      results: "22% reduction in unit cost, 0.5% defect rate (previously 4%).",
      imgId: "case-1",
      imgQuery: "high quality audio equipment production china factory"
    },
    {
      title: "Consolidation & Shipping for US E-commerce",
      client: "Home Decor Startup, USA",
      challenge: "Managing 12 different suppliers across multiple provinces with complex shipping needs.",
      solution: "Consolidated all goods in our Guangzhou warehouse, managed LCL (Less than Container Load) shipping.",
      results: "35% savings on international shipping costs, simplified inventory management.",
      imgId: "case-2",
      imgQuery: "warehouse shipping consolidation china global distribution"
    },
    {
      title: "New Product Development: Smart Kitchen Gadgets",
      client: "Private Label Brand, Australia",
      challenge: "Turning a conceptual design into a mass-produced product while protecting IP.",
      solution: "Found a specialized molding factory, signed strict IP agreements, managed prototype iterations.",
      results: "Successfully launched 3 new products within 6 months, exclusive supply agreement secured.",
      imgId: "case-3",
      imgQuery: "industrial design prototype kitchen gadget manufacturing"
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Case Studies</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Real examples of how we've helped our clients optimize their sourcing and operations in China.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {cases.map((cs, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl overflow-hidden border shadow-sm p-8 group hover:shadow-md transition-shadow">
                <div className="lg:w-1/3 h-64 lg:h-auto overflow-hidden rounded-xl">
                  <img 
                    data-strk-img-id={cs.imgId}
                    data-strk-img={cs.imgQuery}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="lg:w-2/3">
                  <span className="text-amber-600 font-bold text-sm uppercase tracking-widest mb-2 block">{cs.client}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{cs.title}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2">Challenge</h3>
                      <p className="text-slate-600 italic">"{cs.challenge}"</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2">SSourcing Solution</h3>
                      <p className="text-slate-600">{cs.solution}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <h3 className="font-bold text-blue-900 mb-2">Impact & Results</h3>
                    <p className="text-lg font-medium text-slate-800">{cs.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Numbers Speak for Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <div className="text-5xl font-bold text-amber-500 mb-2">$50M+</div>
                    <div className="text-blue-100 uppercase tracking-widest text-sm">Value Sourced Annually</div>
                </div>
                <div>
                    <div className="text-5xl font-bold text-amber-500 mb-2">98%</div>
                    <div className="text-blue-100 uppercase tracking-widest text-sm">Client Retention Rate</div>
                </div>
                <div>
                    <div className="text-5xl font-bold text-amber-500 mb-2">0</div>
                    <div className="text-blue-100 uppercase tracking-widest text-sm">Major QC Failures Reported</div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
