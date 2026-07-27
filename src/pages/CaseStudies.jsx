import React from 'react';

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Retail Chain',
      industry: 'Home Textiles',
      challenge: 'Needed reliable suppliers for private-label bedding products with consistent quality and competitive pricing.',
      approach: 'Conducted supplier search across 3 provinces, performed 8 factory audits, coordinated sample development.',
      results: ['35% cost reduction vs. previous supplier', '3 qualified suppliers approved', 'First order: 8 containers delivered on schedule'],
      timeline: '14 weeks from inquiry to delivery'
    },
    {
      client: 'US Electronics Brand',
      industry: 'PCB Components',
      challenge: 'Required strict quality control for electronic components with zero tolerance for defects.',
      approach: 'Implemented multi-stage inspection protocol, weekly production monitoring, and detailed documentation.',
      results: ['Zero defects across 50,000 units', '12 inspections completed', 'Supplier quality rating improved 40%'],
      timeline: '6 months ongoing partnership'
    },
    {
      client: 'Australian Importer',
      industry: 'Furniture Hardware',
      challenge: 'Needed to consolidate sourcing from multiple suppliers into a single reliable partner.',
      approach: 'Identified capable manufacturers, negotiated consolidated production, coordinated logistics.',
      results: ['Single supplier for 12 SKUs', '6 containers shipped successfully', 'Lead time reduced by 3 weeks'],
      timeline: '10 weeks to first shipment'
    },
    {
      client: 'Canadian Distributor',
      industry: 'Kitchenware',
      challenge: 'Required compliance documentation and food-grade certification for retail distribution.',
      approach: 'Verified supplier certifications, coordinated third-party testing, managed documentation.',
      results: ['All products met FDA requirements', 'Documentation package delivered', 'First retail placement achieved'],
      timeline: '12 weeks to market entry'
    }
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4 text-white">Case Studies</h1>
          <p className="text-xl text-slate-300 max-w-2xl">Real projects with documented outcomes for international clients.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="space-y-8">
            {cases.map((c, idx) => (
              <div key={idx} className="card">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-sm text-slate-500 mb-1">{c.industry}</p>
                    <h3 className="font-semibold text-xl mb-4">{c.client}</h3>
                    <div className="text-sm text-slate-500">Timeline: {c.timeline}</div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm text-slate-500 mb-2">CHALLENGE</h4>
                      <p className="text-slate-600">{c.challenge}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm text-slate-500 mb-2">APPROACH</h4>
                      <p className="text-slate-600">{c.approach}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-slate-500 mb-2">RESULTS</h4>
                      <ul className="space-y-1 text-slate-600">
                        {c.results.map((r, rIdx) => (
                          <li key={rIdx} className="flex gap-2"><span className="text-emerald-600">•</span> {r}</li>
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
    </div>
  );
};

export default CaseStudies;