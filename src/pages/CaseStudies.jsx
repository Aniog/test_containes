import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, CheckCircle, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      title: "Consolidated Sourcing for EU Furniture Retailer",
      client: "LuxuryHome (Germany)",
      challenge: "Managing 15 different suppliers for a multi-category furniture collection with inconsistent quality.",
      solution: "We consolidated all 15 suppliers, performed on-site QC at every factory, and managed the LCL container loading.",
      result: "30% reduction in shipping costs and 0% defect rate upon arrival in Hamburg.",
      img: "modern high end living room furniture set"
    },
    {
      title: "Precision Electronics for Silicon Valley Startup",
      client: "TechStream (USA)",
      challenge: "Finding a manufacturer capable of producing high-precision circuit boards with strict IP protection.",
      solution: "Selected a Tier-1 medical-grade electronics factory and signed a comprehensive NDNN (Non-Disclosure, Non-Use, Non-Circumvention) agreement.",
      result: "Successful launch of Gen-1 product within 4 months of sourcing start.",
      img: "printed circuit board assembly technology"
    },
    {
      title: "Custom Apparel Sourcing for Australian Fashion Brand",
      client: "SunStep Active (Australia)",
      challenge: "Scaling production of sustainable sportswear while maintaining GRS (Global Recycled Standard) compliance.",
      solution: "Vetted 8 specialized eco-textile factories and verified their GRS certifications on-site.",
      result: "Increased production capacity by 400% while reducing unit cost by 12%.",
      img: "sustainable activewear clothing racks fashion"
    }
  ];

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 id="cases-page-title" className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Case Studies</h1>
            <p className="text-xl text-slate-600">
                Real results for real clients. See how we help businesses worldwide navigate the complexities of China's manufacturing landscape.
            </p>
        </div>

        <div className="space-y-16">
            {cases.map((cs, idx) => (
                <div key={idx} className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-span-5 relative h-64 lg:h-auto">
                        <img 
                            data-strk-img-id={`case-img-${idx}`}
                            data-strk-img={`[case-title-${idx}] ${cs.img}`}
                            data-strk-img-ratio="4x3"
                            data-strk-img-width="800"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            alt={cs.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <div className="lg:col-span-7 p-8 md:p-12 lg:p-16">
                        <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-900 rounded-full text-sm font-bold mb-6">
                            {cs.client}
                        </div>
                        <h2 id={`case-title-${idx}`} className="text-3xl font-bold text-blue-900 mb-8 leading-tight">{cs.title}</h2>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-slate-400 uppercase tracking-widest text-xs font-bold mb-3">The Challenge</h4>
                                <p className="text-slate-700 leading-relaxed font-medium">{cs.challenge}</p>
                            </div>
                            <div>
                                <h4 className="text-slate-400 uppercase tracking-widest text-xs font-bold mb-3">Our Solution</h4>
                                <p className="text-slate-700 leading-relaxed">{cs.solution}</p>
                            </div>
                            <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                <h4 className="text-green-800 uppercase tracking-widest text-xs font-bold mb-3">The Result</h4>
                                <div className="flex gap-4">
                                    <CheckCircle className="text-green-600 shrink-0" size={24} />
                                    <p className="text-green-900 font-bold">{cs.result}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-24 bg-blue-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <Quote className="absolute top-12 left-12 text-white/5" size={120} />
            <div className="relative z-10 max-w-4xl mx-auto">
                <p className="text-2xl md:text-4xl text-white font-light leading-relaxed mb-12">
                    "We don't just find suppliers; we build long-term supply chains that give our clients a true competitive advantage."
                </p>
                <div className="text-amber-500 font-bold text-xl">- Li Wei, Head of Operations at SSourcing China</div>
                <div className="mt-12">
                     <Link to="/contact" className="bg-white text-blue-900 px-10 py-4 rounded-lg font-bold hover:bg-slate-100 transition-all inline-flex items-center gap-2">
                        Start Your Success Story <ArrowUpRight size={20} />
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
