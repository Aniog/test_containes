import React, { useEffect, useRef } from 'react';
import { Target, Search, CheckCircle, Package, Truck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HowItWorks = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    const fullSteps = [
        {
            title: "1. Demand Analysis & Planning",
            icon: Target,
            desc: "We start by understanding your exact requirements: product specifications, target pricing, quantity, and certification needs. The more transparent you are, the faster we can find the right match.",
            points: ["Specification Review", "Budget Feasibility", "Timeline Planning", "Compliance Check"],
            id: "step1"
        },
        {
            title: "2. Supplier Search & Vetting",
            icon: Search,
            desc: "Instead of just browsing Alibaba, we use our local network, physical databases, and industry contacts to find actual manufacturers, not middle-men.",
            points: ["Direct Factory Sourcing", "Background Checks", "Capacity Verification", "License Verification"],
            id: "step2"
        },
        {
            title: "3. Sampling & Negotiation",
            icon: Package,
            desc: "We obtain samples from the shortlisted factories, consolidate them in our office, inspect them, and send you the best ones. Once approved, we negotiate the best terms.",
            points: ["Sample Consolidation", "Quality Pre-check", "Price Negotiation", "Contract Drafting"],
            id: "step3"
        },
        {
            title: "4. Production & Quality Control",
            icon: CheckCircle,
            desc: "Once the order is placed, we don't just wait. We proactively follow up on production schedules and send independent inspectors to the factory.",
            points: ["Production Monitoring", "Mid-production Check", "Final AQL Inspection", "Defect Resolution"],
            id: "step4"
        },
        {
            title: "5. Logistics & Shipping",
            icon: Truck,
            desc: "We coordinate the consolidation of goods (if multiple suppliers) and arrange the most cost-effective and reliable shipping method to your destination.",
            points: ["Warehouse Consolidation", "Customs Clearance", "Freight Forwarding", "Door-to-Door Delivery"],
            id: "step5"
        }
    ];

    return (
        <div className="w-full bg-white pb-20" ref={containerRef}>
            {/* Header */}
            <div className="bg-gray-50 py-16 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4" id="hiw-title">Our Sourcing Process</h1>
                    <p className="text-xl text-gray-600" id="hiw-desc">A transparent, reliable system developed over 10 years to minimize risk and maximize margins.</p>
                </div>
            </div>

            {/* Steps */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="space-y-24">
                    {fullSteps.map((step, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                            <div className="flex-1 w-full relative">
                                <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden md:flex w-12 h-12 bg-blue-100 text-blue-600 rounded-full items-center justify-center font-bold text-xl ring-4 ring-white z-10">
                                    {index + 1}
                                </div>
                                <img 
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                    alt={step.title}
                                    className="rounded-xl shadow-lg w-full h-[350px] object-cover"
                                    data-strk-img-id={`hiw-img-${index}`}
                                    data-strk-img={`[hiw-title-${index}]`}
                                    data-strk-img-ratio="4x3"
                                    data-strk-img-width="600"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-lg text-blue-600 mb-6">
                                    <step.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4" id={`hiw-title-${index}`}>{step.title}</h3>
                                <p className="text-lg text-gray-600 mb-6" id={`hiw-desc-${index}`}>{step.desc}</p>
                                
                                <ul className="grid grid-cols-2 gap-3">
                                    {step.points.map((point, i) => (
                                        <li key={i} className="flex items-center text-gray-700">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-24 text-center bg-blue-50 rounded-2xl p-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Have a specific project in mind?</h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Skip the guesswork and let us do the heavy lifting. Get a free assessment of your sourcing project.</p>
                    <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                        <Link to="/contact">Discuss Your Project</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};