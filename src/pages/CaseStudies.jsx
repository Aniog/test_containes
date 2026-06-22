import React, { useRef, useEffect } from 'react';
import { ArrowRight, TrendingUp, DollarSign, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CaseStudies = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const frameId = window.requestAnimationFrame(() => {
            if (containerRef.current) {
                ImageHelper.loadImages(strkImgConfig, containerRef.current);
            }
        });
        return () => window.cancelAnimationFrame(frameId);
    }, []);

    const cases = [
        {
            id: 'amazon-seller-electronics',
            title: 'Scaling an Amazon FBA Electronics Brand',
            client: 'US-based Amazon Seller',
            challenge: 'The client was experiencing a 15% defect rate with their current supplier for a custom wireless charging pad, leading to poor reviews and high return costs.',
            solution: 'We audited 5 new factories, selected one with robust QMS, negotiated a 12% lower unit cost, and implemented a strict During Production Inspection (DPI) protocol.',
            results: [
                { icon: <TrendingUp className="w-5 h-5 text-green-500" />, text: 'Defect rate reduced to < 0.5%' },
                { icon: <DollarSign className="w-5 h-5 text-blue-500" />, text: 'Saved $45,000 annually on product costs' },
                { icon: <Star className="w-5 h-5 text-yellow-500" />, text: 'Amazon rating improved from 3.8 to 4.6 stars' }
            ],
            image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=800'
        },
        {
            id: 'hardware-retailer',
            title: 'Sourcing Heavy Machinery Parts',
            client: 'European Hardware Retailer',
            challenge: 'The retailer needed to consolidate orders from 8 different specialist factories into single containers to reduce exorbitant LCL shipping fees.',
            solution: 'We managed all 8 suppliers, sequenced their production schedules, quality-checked all goods centrally in our warehouse, and optimized container loading.',
            results: [
                { icon: <DollarSign className="w-5 h-5 text-blue-500" />, text: 'Reduced shipping costs by 35%' },
                { icon: <Clock className="w-5 h-5 text-indigo-500" />, text: 'Cut average lead time by 14 days' },
                { icon: <ShieldCheck className="w-5 h-5 text-sky-500" />, text: 'Avoided 3 major quality issues before shipping' }
            ],
            image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800'
        },
         {
            id: 'fashion-startup',
            title: 'Bringing a Custom Activewear Line to Life',
            client: 'Australian Fitness Startup',
            challenge: 'A new brand needed a factory willing to accept a low initial MOQ for custom-designed activewear using specific recycled fabrics.',
            solution: 'Leveraged our network to find a mid-sized, high-quality garment manufacturer willing to support a growing brand. We managed the sampling and adjustment process.',
            results: [
                { icon: <CheckCircle className="w-5 h-5 text-blue-500" />, text: 'Successfully launched 3 product lines' },
                { icon: <DollarSign className="w-5 h-5 text-blue-500" />, text: 'Secured an MOQ of just 300 pcs/color' },
                { icon: <TrendingUp className="w-5 h-5 text-green-500" />, text: 'Brand scaled to $1M+ revenue in year one' }
            ],
            image: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <div className="flex flex-col" ref={containerRef}>
            {/* Header */}
            <section className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">Client Success Stories</h1>
                    <p className="text-xl text-slate-300">
                        See how we've helped businesses around the world optimize their China sourcing strategy, reduce costs, and guarantee quality.
                    </p>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="space-y-16 lg:space-y-24">
                        {cases.map((caseStudy, index) => (
                            <div key={caseStudy.id} className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="w-full lg:w-1/2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                         <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img 
                                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                          data-strk-img-id={`case-${caseStudy.id}-img`}
                                          data-strk-img={`[case-title-${caseStudy.id}]`}
                                          data-strk-img-ratio="16x9"
                                          data-strk-img-width="800"
                                          alt={caseStudy.title} 
                                          className="w-full h-auto object-cover aspect-video group-hover:scale-105 transition-transform duration-700" 
                                        />
                                    </div>
                                </div>
                                
                                <div className="w-full lg:w-1/2">
                                    <div className="mb-2 inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                                        {caseStudy.client}
                                    </div>
                                    <h2 id={`case-title-${caseStudy.id}`} className="text-3xl font-bold text-slate-900 mb-6">{caseStudy.title}</h2>
                                    
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">The Challenge</h3>
                                        <p className="text-slate-600">{caseStudy.challenge}</p>
                                    </div>
                                    
                                    <div className="mb-8 p-6 bg-white rounded-xl border border-slate-200 shadow-sm relative">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-xl"></div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Our Solution</h3>
                                        <p className="text-slate-600">{caseStudy.solution}</p>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Results</h3>
                                        <ul className="space-y-3">
                                            {caseStudy.results.map((result, idx) => (
                                                <li key={idx} className="flex items-center gap-3">
                                                    <div className="flex-shrink-0 bg-slate-100 p-2 rounded-full">
                                                        {result.icon}
                                                    </div>
                                                    <span className="font-medium text-slate-700">{result.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* CTA */}
            <section className="py-20 bg-blue-600 text-white text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6">Let's write your success story next.</h2>
                    <p className="text-xl text-blue-100 mb-10">Whether you are struggling with quality issues, high costs, or finding reliable suppliers, we can help.</p>
                    <Link to="/contact" className="inline-flex justify-center items-center rounded-md bg-white px-8 py-4 text-base font-bold text-blue-600 shadow-sm hover:bg-slate-50 transition-colors">
                        Book a Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

// We need Star and CheckCircle here
import { Star, CheckCircle } from 'lucide-react';

export default CaseStudies;