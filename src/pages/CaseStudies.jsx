import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const studies = [
    {
      id: "electronics-brand",
      client: "European Electronics Brand",
      challenge: "The client was experiencing a 15% defect rate with their smart watch supplier, leading to high return rates and brand damage.",
      solution: "We audited the existing factory, discovered severe flaws in their QA process, and transitioned production to a verified tier-1 manufacturer within 45 days. We implemented full pre-shipment inspections.",
      results: [
        { label: "Defect Rate Reduced To", value: "< 1.5%", icon: TrendingUp },
        { label: "Unit Cost Saved", value: "8%", icon: DollarSign },
        { label: "Transition Time", value: "45 Days", icon: Clock }
      ]
    },
    {
      id: "amazon-fba",
      client: "Amazon FBA Seller (Home Goods)",
      challenge: "Struggling to consolidate products from 4 different factories for FBA shipment, eating into margins due to multiple LCL shipments.",
      solution: "We renegotiated pricing directly with the factories (bypassing the trading companies they were using), consolidated goods at our Shenzhen warehouse, and organized a single FCL shipment direct to Amazon fulfillment centers.",
      results: [
        { label: "Logistics Savings", value: "32%", icon: DollarSign },
        { label: "Sourcing Cost Saved", value: "14%", icon: TrendingUp },
        { label: "Time Saved/Month", value: "20 Hrs", icon: Clock }
      ]
    },
    {
      id: "apparel-startup",
      client: "US Activewear Startup",
      challenge: "Needed a supplier capable of custom fabric blends and low MOQs to launch their initial line.",
      solution: "Sourced a specialized boutique manufacturer in Guangdong willing to support lower MOQs in exchange for a long-term contract. We managed the entire sampling and revision process.",
      results: [
        { label: "Initial MOQ", value: "500 pcs", icon: TrendingUp },
        { label: "Sample Revisions", value: "Only 2", icon: Clock },
        { label: "Margin Improved", value: "18%", icon: DollarSign }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>
      <section 
        className="relative bg-slate-900 py-16 md:py-24 text-white overflow-hidden"
      >
        <div 
          className="absolute inset-0 z-0 bg-slate-800"
          data-strk-bg-id="cases-header-bg-8a9d1"
          data-strk-bg="[cases-page-desc] [cases-page-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h1 id="cases-page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">Case Studies</h1>
          <p id="cases-page-desc" className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how we've helped companies worldwide reduce costs, improve quality, and scale their business.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {studies.map((study) => (
              <div key={study.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row">
                <div className="md:w-1/3 relative items-center justify-center flex p-8 text-center min-h-[250px] overflow-hidden">
                   <img
                     alt={study.client}
                     className="absolute inset-0 w-full h-full object-cover"
                     data-strk-img-id={`case-study-img-${study.id}`}
                     data-strk-img={`[case-${study.id}-challenge] [case-${study.id}-client]`}
                     data-strk-img-ratio="3x4"
                     data-strk-img-width="600"
                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                   />
                   <div className="absolute inset-0 bg-slate-900/70 z-0"></div>
                   
                   <div className="relative z-10">
                     <h3 id={`case-${study.id}-client`} className="text-2xl font-bold text-white mb-2">{study.client}</h3>
                     <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
                   </div>
                </div>
                
                <div className="p-8 md:w-2/3 md:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The Challenge</h4>
                    <p id={`case-${study.id}-challenge`} className="text-slate-700 text-lg">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Our Solution</h4>
                    <p id={`case-${study.id}-solution`} className="text-slate-700 text-lg">{study.solution}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100 mt-auto">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex flex-col">
                        <div className="flex items-center gap-2 mb-1">
                          <result.icon className="h-4 w-4 text-primary" />
                          <span className="text-xs font-semibold text-slate-500 uppercase">{result.label}</span>
                        </div>
                        <span className="text-2xl font-bold text-slate-900">{result.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Want similar results for your business?</h2>
          <Button asChild size="lg">
            <Link to="/contact">Let's Discuss Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
