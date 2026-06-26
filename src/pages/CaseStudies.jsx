import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const studies = [
    {
      id: 'ecommerce-brand',
      client: 'US E-commerce Brand',
      industry: 'Smart Home Electronics',
      title: 'Reducing Defect Rates by 85% for Smart Lighting',
      challenge: 'The client was experiencing a 12% defect rate with their previous supplier, leading to high Amazon FBA return rates and damaged brand reputation. They needed a reliable manufacturer capable of complex PCB assembly and rigorous pre-shipment testing.',
      solution: 'We conducted audits on 5 specialized electronics factories in Shenzhen, selecting a top-tier manufacturer. We implemented a 100% functionality test during the QC phase.',
      results: [
        { icon: TrendingUp, text: 'Defect rate dropped to < 1.5%' },
        { icon: DollarSign, text: 'Saved $45k annually in returns' }
      ]
    },
    {
      id: 'retail-chain',
      client: 'European Retail Chain',
      industry: 'Outdoor Furniture',
      title: 'Consolidating 15 Suppliers into 1 Monthly Shipment',
      challenge: 'The client bought from 15 different factories across Zhejiang province, resulting in chaotic logistics, inconsistent quality, and exorbitant LCL shipping costs.',
      solution: 'We acted as their central purchasing office. We audited all 15 suppliers, replaced 3 underperforming ones, and set up a consolidation warehouse in Ningbo to group all orders into a single 40HQ container per month.',
      results: [
        { icon: DollarSign, text: 'Reduced shipping costs by 32%' },
        { icon: Clock, text: 'Cut administrative time by 20 hrs/week' }
      ]
    },
    {
      id: 'amazon-seller',
      client: 'Amazon FBA Seller (UK)',
      industry: 'Fitness Equipment',
      title: 'Sourcing and Customizing Premium Yoga Mats',
      challenge: 'The seller wanted to launch a premium, eco-friendly TPE yoga mat with custom embossing and branded packaging, but struggled to find a factory willing to accept a low MOQ for customized goods.',
      solution: 'Leveraging our established relationships in the sporting goods sector, we negotiated a lower MOQ with a top manufacturer. We managed the custom tooling, sample iterations, and final FBA prep (barcoding and palletizing).',
      results: [
        { icon: TrendingUp, text: 'Successfully launched in 6 weeks' },
        { icon: DollarSign, text: 'Achieved 45% profit margin' }
      ]
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <div className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Client Success Stories</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real examples of how we have helped global businesses overcome sourcing challenges, reduce costs, and improve quality.
          </p>
        </div>
      </div>

      {/* Case Studies List */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {studies.map((study) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-2/5 aspect-[4/3] lg:aspect-auto relative bg-slate-100 shrink-0">
                  <img
                    data-strk-img-id={`case-img-${study.id}`}
                    data-strk-img={`[case-title-${study.id}] ${study.industry} manufacturing`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {study.industry}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="text-slate-500 font-medium mb-2">{study.client}</div>
                  <h2 id={`case-title-${study.id}`} className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{study.title}</h2>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">The Challenge</h4>
                    <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Our Solution</h4>
                    <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100 mt-auto">
                    {study.results.map((result, i) => {
                      const Icon = result.icon;
                      return (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <span className="font-semibold text-slate-800">{result.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 text-center border-t border-slate-100">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Become Our Next Success Story</h2>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Let our experienced team handle the complexities of manufacturing in China while you focus on scaling your sales.
        </p>
        <Link to="/contact" className="inline-block bg-blue-600 text-white hover:bg-blue-700 font-bold py-4 px-10 rounded-md transition-colors duration-200 shadow-md">
          Get Started Today
        </Link>
      </section>
    </div>
  );
}
