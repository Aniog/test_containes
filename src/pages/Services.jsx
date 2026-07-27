import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Target, Search, CheckCircle, Ship, PackageSearch, Factory } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const ServicesPage = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    const allServices = [
        {
            id: "supplier-sourcing",
            title: "Supplier Sourcing & Matching",
            icon: PackageSearch,
            description: "We don't just rely on online directories. We use our local network, verify business licenses, and cross-reference export data to find authentic manufacturers, not trading companies acting as factories.",
            benefits: ["Access to hidden factories", "Avoid middleman markups", "Verify actual production capabilities"],
            imgDesc: "Professional sourcing agents analyzing factory data"
        },
        {
            id: "factory-audit",
            title: "Factory Audit & Verification",
            icon: Factory,
            description: "Before you transfer a deposit, we physically visit the factory. We check their production lines, machinery, worker conditions, and quality management systems (ISO9001).",
            benefits: ["Prevent scams", "Assess real capacity", "Ensure ethical manufacturing"],
            imgDesc: "On-site factory auditor checking production line"
        },
        {
            id: "quality-control",
            title: "Quality Inspection (QC)",
            icon: ShieldCheck,
            description: "We offer comprehensive DUPRO (During Production) and PSI (Pre-Shipment) inspections using standard AQL tables. We catch defects before they leave China.",
            benefits: ["Reduce defect rates", "Avoid expensive returns", "Detailed photographic reports"],
            imgDesc: "Quality control inspector checking product dimensions"
        },
        {
            id: "production-follow-up",
            title: "Production Follow-up",
            icon: CheckCircle,
            description: "We act as your local project manager, communicating with the factory weekly, tracking raw material purchases, and ensuring your timeline is met.",
            benefits: ["Prevent delays", "Weekly progress updates", "Local language negotiation"],
            imgDesc: "Project manager reviewing production schedule"
        },
        {
            id: "shipping",
            title: "Shipping & Logistics",
            icon: Ship,
            description: "From consolidating goods from multiple suppliers to arranging sea freight (FCL/LCL), air freight, or express courier, we handle all export documents and customs clearance.",
            benefits: ["Lower shipping rates", "Consolidation savings", "Hassle-free customs"],
            imgDesc: "Cargo ship at busy container port"
        },
        {
            id: "amazon-fba",
            title: "Amazon FBA Prep",
            icon: Package,
            description: "Specifically for Amazon sellers: we handle FNSKU labeling, poly-bagging, bundling, and ensure master cartons meet exact Amazon requirements before DDP shipping to FBA warehouses.",
            benefits: ["Strict Amazon compliance", "Direct-to-warehouse DDP", "Lower handling costs"],
            imgDesc: "Workers labeling boxes for Amazon FBA"
        }
    ];

    return (
        <div className="w-full bg-white pb-20" ref={containerRef}>
            {/* Header */}
            <div className="bg-gray-50 py-16 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4" id="services-page-title">Our Services</h1>
                    <p className="text-xl text-gray-600" id="services-page-desc">Comprehensive sourcing solutions tailored to protect your interests and optimize your supply chain.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="space-y-20">
                    {allServices.map((service, index) => (
                        <div key={service.id} id={service.id} className="scroll-mt-24">
                            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                                <div className="flex-1">
                                    <img 
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                        alt={service.title}
                                        className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                                        data-strk-img-id={`service-page-img-${service.id}`}
                                        data-strk-img={`[service-page-title-${service.id}]`}
                                        data-strk-img-ratio="4x3"
                                        data-strk-img-width="800"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-lg text-blue-600 mb-6">
                                        <service.icon className="h-8 w-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4" id={`service-page-title-${service.id}`}>{service.title}</h2>
                                    <p className="text-lg text-gray-600 mb-6 leading-relaxed" id={`service-page-desc-${service.id}`}>{service.description}</p>
                                    
                                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                                        <ul className="space-y-2">
                                            {service.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-center text-gray-700">
                                                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center bg-blue-600 text-white rounded-2xl p-12 relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">Whether you need end-to-end sourcing or just a one-time pre-shipment inspection, we can tailor our services to your exact needs.</p>
                        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                            <Link to="/contact">Contact Our Team</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};