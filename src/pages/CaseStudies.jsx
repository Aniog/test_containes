import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, TrendingUp, Clock, ShieldCheck } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const cases = [
    {
      id: "electronics-brand",
      client: "US Consumer Electronics Brand",
      title: "Scaling Production for Smart Home Devices",
      challenge: "The client was struggling with a 15% defect rate from their previous supplier and needed to scale production by 300% for Q4.",
      solution: "We conducted a widespread supplier search, auditing 5 top-tier factories. We negotiated a new contract with improved payment terms and implemented a strict AQL 1.5 inspection protocol during production.",
      results: [
        "Defect rate reduced to < 0.5%",
        "Unit cost reduced by 12%",
        "Successfully delivered 50,000 units 2 weeks ahead of peak season"
      ],
      icon: <TrendingUp className="w-5 h-5 text-blue-600" />
    },
    {
      id: "furniture-retailer",
      client: "European Furniture Retailer",
      title: "Consolidating 15 Suppliers into 1 Streamlined Supply Chain",
      challenge: "Managing 15 different furniture component suppliers was causing massive logistical headaches and delayed ship times for the client.",
      solution: "We acted as their central purchasing office. We audited and retained the best 8 suppliers, replaced the underperforming ones, and set up a central consolidation warehouse in Shenzhen.",
      results: [
        "Saved 25% on combined freight costs",
        "Reduced communication time by 40 hours/week",
        "Achieved 99% on-time delivery rate"
      ],
      icon: <Clock className="w-5 h-5 text-amber-600" />
    },
    {
      id: "ecommerce-startup",
      client: "Australian E-commerce Startup",
      title: "OEM Product Launch from Scratch",
      challenge: "A startup had a patented design for a new kitchen gadget but no experience in mold making, manufacturing, or importing.",
      solution: "We matched them with an ODM factory capable of high-precision plastic injection molding. We oversaw the prototyping phase, secured strict NDAs, and managed the first trial run of 2,000 units.",
      results: [
        "Prototype finalized within 45 days",
        "Zero IP leakage",
        "Product successfully launched and became best-seller in category"
      ],
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white min-h-screen" ref={containerRef}>
      
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h1 id="cases-title" className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Client Success Stories</h1>
          <p id="cases-subtitle" className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            See how we've helped businesses across the globe overcome sourcing challenges, reduce costs, and improve product quality.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-16">
          {cases.map((study, index) => (
            <div key={study.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row group">
              <div className="w-full md:w-2/5 relative h-64 md:h-auto bg-slate-100">
                 <img 
                    data-strk-img-id={`case-img-${study.id}`}
                    data-strk-img={`[case-title-${study.id}] [case-client-${study.id}] successful business`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                 <div className="absolute bottom-4 left-4 right-4 relative z-10">
                    <span id={`case-client-${study.id}`} className="bg-white/90 backdrop-blur text-sm font-semibold px-3 py-1 rounded text-slate-900 shadow-sm inline-block mb-2">
                      {study.client}
                    </span>
                 </div>
              </div>
              <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col">
                <h2 id={`case-title-${study.id}`} className="text-2xl font-bold text-slate-900 mb-4">{study.title}</h2>
                
                <div className="mb-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The Challenge</h4>
                    <p className="text-slate-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Our Solution</h4>
                    <p className="text-slate-600">{study.solution}</p>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    {study.icon} Key Results
                  </h4>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <Star className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
           <h2 className="text-3xl font-bold mb-6">Ready to Write Your Success Story?</h2>
           <p className="text-slate-400 mb-8 text-lg">Let's discuss how we can optimize your China supply chain.</p>
           <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 h-12 px-8">
              <Link to="/contact">Contact Our Experts <ArrowRight className="ml-2 w-4 h-4" /></Link>
           </Button>
        </div>
      </section>

    </div>
  );
}