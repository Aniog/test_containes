import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const studies = [
    {
      title: "Cost Reduction for EU Electronics Brand",
      client: "European Consumer Electronics Retailer",
      challenge: "The client was purchasing from an ALibaba trader, resulting in high costs and inconsistent quality.",
      solution: "We audited 5 factories in Shenzhen, selected a direct manufacturer with ISO9001, and implemented strict DUPRO inspections.",
      result: "25% cost reduction and 0% return rate on the first three shipments.",
      imgId: "case-study-01"
    },
    {
      title: "Custom Apparel Sourcing & Logistics",
      client: "US-based Fashion Startup",
      challenge: "Needed a reliable OEM partner for organic cotton activewear, with complex DDP shipping requirements.",
      solution: "Sourced a verified eco-friendly factory in Guangzhou, managed the sampling process iteratively, and consolidated air freight.",
      result: "Successfully launched the clothing line 3 weeks ahead of schedule with all quality metrics met.",
      imgId: "case-study-02"
    },
    {
      title: "Supply Chain Crisis Recovery",
      client: "Australian Hardware Distributor",
      challenge: "Their previous supplier went bankrupt mid-production, leaving a large order stranded and deposits lost.",
      solution: "Quickly mobilized our crisis team, retrieved the tooling/molds, and transferred production to a trusted partner factory in Ningbo within 10 days.",
      result: "Saved the crucial holiday season inventory and established a secure, long-term OEM relationship.",
      imgId: "case-study-03"
    }
  ];

  return (
    <div ref={containerRef}>
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" id="cs-page-title">Client Success Stories</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" id="cs-page-subtitle">
            Read how we've helped businesses around the world optimize their sourcing, reduce costs, and mitigate risks.
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-4">
        <div className="space-y-16">
          {studies.map((study, i) => (
            <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100`}>
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 shrink-0">
                <img
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[cs-study-title-${i}] business success`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="text-sm font-semibold text-blue-600 mb-2">{study.client}</div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6" id={`cs-study-title-${i}`}>{study.title}</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900">The Challenge:</h4>
                    <p className="text-slate-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Our Solution:</h4>
                    <p className="text-slate-600">{study.solution}</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-md mt-4">
                    <h4 className="font-semibold text-green-900">The Result:</h4>
                    <p className="text-green-800">{study.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-slate-900 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Become Our Next Success Story</h2>
          <p className="text-lg text-slate-300 mb-8">
            Tell us about your sourcing goals, and we'll create a customized strategy for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;