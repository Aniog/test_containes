import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Search, Shield, Truck } from 'lucide-react';

const TrustPoints = () => {
  const painPoints = [
    { icon: <AlertTriangle className="text-amber-500" />, title: "Quality Discrepancies", desc: "Received products don't match the golden sample." },
    { icon: <XCircle className="text-red-500" />, title: "Supplier Scams", desc: "Paying deposits to companies that disappear or are middlemen." },
    { icon: <Clock className="text-slate-500" />, title: "Production Delays", desc: "Missing launch windows due to unmanaged factory timelines." }
  ];

  const solutions = [
    { icon: <Search className="text-primary" />, title: "Strict Verification", desc: "On-site factory audits and legal background checks." },
    { icon: <Shield className="text-primary" />, title: "Rigorous QC", desc: "Multi-stage inspections at 20%, 50%, and 100% completion." },
    { icon: <Truck className="text-primary" />, title: "Secure Logistics", desc: "Consolidation and shipping coordination for best rates." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 italic">China Sourcing Without the Risk</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We bridge the gap between global buyers and Chinese manufacturers, eliminating the common pitfalls of international trade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold mb-8 flex items-center text-slate-700">
               Common Sourcing Challenges
            </h3>
            <div className="space-y-6">
              {painPoints.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="mr-4 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary pt-8 pb-10 px-8 rounded-2xl shadow-xl shadow-primary/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Shield size={120} className="text-white" />
             </div>
            <h3 className="text-xl font-bold mb-8 flex items-center text-white relative z-10">
               How SSourcing China Protects You
            </h3>
            <div className="space-y-6 relative z-10">
              {solutions.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="mr-4 bg-white/10 p-2 rounded-lg text-white">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
               <button className="w-full bg-accent text-white font-bold py-3 rounded-lg hover:bg-accent/90 transition-all">
                  Book a Consultation
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Clock = ({ size, className }) => (
  <svg 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

export default TrustPoints;
