import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CaseStudies = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    const studies = [
        {
            id: 'cs1',
            client: 'TechGadget US',
            challenge: 'High defect rate (15%) with their current supplier causing negative Amazon reviews and account health issues.',
            solution: 'We conducted an unannounced factory audit, discovered sub-contracting, moved production to a verified ISO-certified facility, and implemented strict pre-shipment inspections.',
            results: ['Defect rate reduced to <1%', 'Unit cost decreased by 12%', 'Amazon rating improved to 4.8'],
            testimonial: "SSourcing China saved our Amazon business. Their on-the-ground QC is incredible."
        },
        {
            id: 'cs2',
            client: 'EuroFurniture GmbH',
            challenge: 'Struggling to consolidate multi-factory orders, resulting in high LCL shipping costs and logistics nightmare.',
            solution: 'We set up a central consolidation warehouse in Shenzhen. We sourced 5 different suppliers for various furniture parts, received them centrally, performed QC, and loaded FCL (Full Container Load).',
            results: ['Shipping costs cut by 35%', 'Zero damaged goods upon arrival', 'Simplified supplier management'],
            testimonial: "Having one point of contact for 5 different factories made our supply chain effortless."
        },
        {
            id: 'cs3',
            client: 'EcoWear Australia',
            challenge: 'Needed GOTS certified organic cotton but kept facing suppliers with fake certificates.' ,
            solution: 'Our team ran background checks on 20+ suppliers, verified actual GOTS databases, visited the top 3, and secured a reliable manufacturer. We handled fabric testing through SGS before mass production.',
            results: ['100% verified organic materials', 'Successfully launched new eco-line', 'Built a long-term reliable partnership'],
            testimonial: "Their ability to verify certificates and conduct raw material testing is invaluable."
        }
    ];

    return (
        <div className="w-full bg-white pb-20" ref={containerRef}>
            <div className="bg-gray-50 py-16 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4" id="cases-title">Success Stories</h1>
                    <p className="text-xl text-gray-600" id="cases-desc">Real examples of how we've helped overseas buyers overcome sourcing challenges in China.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="space-y-16">
                    {studies.map((study, index) => (
                        <Card key={study.id} className="overflow-hidden border-gray-100 shadow-md">
                            <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                <div className="md:w-2/5 shrink-0">
                                     <img 
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                        alt={`Case study for ${study.client}`}
                                        className="w-full h-full min-h-[300px] object-cover"
                                        data-strk-img-id={`case-img-${study.id}`}
                                        data-strk-img={`[case-client-${study.id}]`}
                                        data-strk-img-ratio="4x3"
                                        data-strk-img-width="600"
                                    />
                                </div>
                                <div className="md:w-3/5 p-8 lg:p-12 bg-white">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2" id={`case-client-${study.id}`}>{study.client}</h3>
                                    
                                    <div className="mt-8 space-y-6">
                                        <div>
                                            <h4 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">The Challenge</h4>
                                            <p className="text-gray-700">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Our Solution</h4>
                                            <p className="text-gray-700" id={`case-desc-${study.id}`}>{study.solution}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-5">
                                            <h4 className="text-sm font-bold text-green-600 uppercase tracking-wider mb-3">The Results</h4>
                                            <ul className="space-y-2">
                                                {study.results.map((result, i) => (
                                                    <li key={i} className="flex items-start text-gray-800 font-medium">
                                                        <ArrowRight className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                                                        {result}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 relative">
                                            <Quote className="absolute -left-3 -top-2 h-6 w-6 text-gray-200 bg-white" />
                                            {study.testimonial}
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};