import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
    const cases = [
        {
            id: 1,
            title: "Scaling Production for a US Tech Startup",
            client: "Wearable Tech Company (USA)",
            challenge: "The client needed to produce 50,000 smartwatches for a holiday launch but their current supplier had severe quality issues and delayed timelines.",
            solution: "SSourcing China audited 5 new factories, selected a top-tier manufacturer in Shenzhen, implemented strict on-site QC during assembly, and coordinated air freight.",
            results: ["50,000 units delivered on time, zero defects", "Reduced manufacturing costs by 15% via negotiation", "Established a long-term reliable partnership"],
            imgId: "case-study-1-img"
        },
        {
            id: 2,
            title: "Overcoming Communication Barriers for Furniture Importer",
            client: "Home Goods Retailer (Germany)",
            challenge: "Client was frustrated dealing with multiple trading companies claiming to be factories, resulting in inconsistent quality and hidden fees.",
            solution: "We took over their supply chain, identified the real factories in Zhejiang, signed direct contracts, and consolidated different furniture pieces into single shipments.",
            results: ["Eliminated middleman markups saving 20%", "Reduced shipping costs by 30% through consolidation", "Consistent quality across all product lines"],
            imgId: "case-study-2-img"
        }
    ];

    return (
        <div className="flex flex-col">
            <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 id="case-studies-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Client Success Stories</h1>
                    <p id="case-studies-desc" className="text-xl text-slate-600 max-w-3xl mx-auto">
                        See how we've helped global businesses overcome sourcing challenges, find reliable suppliers, and scale their operations.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {cases.map((cs) => (
                        <div key={cs.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
                            <div className="md:w-5/12 bg-slate-100 relative">
                                <img 
                                    data-strk-img-id={cs.imgId}
                                    data-strk-img={`[case-title-${cs.id}] [case-client-${cs.id}] business success`}
                                    data-strk-img-ratio="3x4"
                                    data-strk-img-width="600"
                                    alt={cs.title}
                                    className="w-full h-full object-cover min-h-[300px]"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                />
                            </div>
                            <div className="md:w-7/12 p-8 lg:p-12">
                                <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2" id={`case-client-${cs.id}`}>{cs.client}</div>
                                <h2 id={`case-title-${cs.id}`} className="text-2xl font-bold text-slate-900 mb-6">{cs.title}</h2>
                                
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-2">The Challenge</h4>
                                        <p className="text-slate-600">{cs.challenge}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-2">Our Solution</h4>
                                        <p className="text-slate-600">{cs.solution}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-3">Key Results</h4>
                                        <ul className="space-y-2">
                                            {cs.results.map((result, idx) => (
                                                <li key={idx} className="flex gap-2 text-slate-700">
                                                    <Star className="w-5 h-5 text-yellow-500 fill-current flex-shrink-0 mt-0.5" />
                                                    <span>{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;