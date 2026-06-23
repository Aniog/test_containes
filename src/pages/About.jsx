import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Target, Users, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const values = [
    {
      title: "Transparency First",
      desc: "We don't hide factory information or take hidden kickbacks. Our model is based on transparent service fees.",
      icon: <Target className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Client-Centric",
      desc: "Your success is our success. We act as your dedicated office and advocates in China.",
      icon: <Users className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Uncompromising Quality",
      desc: "We never cut corners on quality control. Rigorous standards protect your brand's reputation.",
      icon: <Shield className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Continuous Improvement",
      desc: "We constantly optimize supply chains to find better efficiencies and cost savings for our clients.",
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />
    }
  ];

  return (
    <div ref={containerRef} className="pt-8 pb-24 top-padding">
       <div className="bg-slate-900 py-20 mb-16 text-white text-center">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-6">
               About SSourcing China
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
               Bridging the gap between global buyers and Chinese manufacturing excellence with trust, transparency, and expertise.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
         {/* Story Section */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div>
               <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
               <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Founded in 2014 in Shenzhen, the hardware capital of the world, SSourcing China began with a simple mission: to make sourcing from China safe and accessible for small to medium-sized businesses worldwide.
               </p>
               <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  We noticed that while Alibaba made finding suppliers easier, the risk of scams, poor quality, and communication breakdowns remained high. Many buyers were losing money because they didn't have someone on the ground protecting their interests.
               </p>
               <p className="text-lg text-slate-600 leading-relaxed">
                  Today, we've grown into a comprehensive sourcing agency with a team of specialized buyers, experienced engineers, and strict QC inspectors. We represent clients across 30+ countries, managing millions of dollars in procurement annually.
               </p>
            </div>
            <div className="relative">
               <div className="absolute inset-0 bg-blue-100 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
               <img 
                  data-strk-img-id="about-team-img"
                  data-strk-img="professional diverse team meeting in modern office in shenzhen china"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Our Team"
                  className="rounded-2xl shadow-xl w-full object-cover"
               />
            </div>
         </div>

         {/* Values Section */}
         <div className="mb-24">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
               <p className="text-lg text-slate-600">The principles that guide how we operate every day.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {values.map((value, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-100 text-center hover:shadow-md transition-shadow">
                     <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        {value.icon}
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                     <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                  </div>
               ))}
            </div>
         </div>

         {/* Join Us CTA */}
         <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Looking for a Reliable Partner in China?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
               Stop worrying about late shipments and quality issues. Let us handle your supply chain so you can focus on sales and marketing.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-slate-100 transition-colors">
               Contact Our Team <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
         </div>
      </div>
    </div>
  );
}