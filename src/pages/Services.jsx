import React, { useRef, useEffect } from 'react';
import { Search, ShieldCheck, ClipboardCheck, Ship, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Services = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    return (
        <div ref={containerRef} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Our Sourcing Services</h1>
                    <p className="text-xl text-slate-600">
                        We provide end-to-end supply chain management tailored to the needs of global B2B buyers. Let us be your dedicated team in China.
                    </p>
                </div>

                <div className="space-y-24">
                    {/* Service 1 */}
                    <div id="sourcing" className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                                <Search className="h-8 w-8 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Supplier Sourcing & Verification</h2>
                            <p className="text-slate-600 mb-6 text-lg">
                                Finding a supplier is easy; finding the right one is hard. We leverage our network and on-the-ground presence to identify manufacturers that meet your specific requirements for quality, scale, and compliance.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <span className="text-slate-700">Detailed supplier background checks to weed out middlemen.</span></li>
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <span className="text-slate-700">RFP management and transparent cost breakdowns.</span></li>
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <span className="text-slate-700">Sample consolidation to save you international shipping fees.</span></li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 bg-slate-100 rounded-2xl aspect-video flex flex-col justify-center items-center text-slate-400 p-8 text-center border border-slate-200 shadow-sm relative overflow-hidden">
                           <img 
                                data-strk-img-id="service-sourcing-img-99a"
                                data-strk-img="Supplier Sourcing Verification"
                                data-strk-img-ratio="16x9"
                                data-strk-img-width="800"
                                className="absolute inset-0 w-full h-full object-cover"
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt="Supplier Sourcing"
                           />
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div id="audits" className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        <div className="md:w-1/2">
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                                <ShieldCheck className="h-8 w-8 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Factory Audits</h2>
                            <p className="text-slate-600 mb-6 text-lg">
                                Never wire a deposit without knowing exactly who you are dealing with. We send our inspectors to the factory floor to verify capabilities before production begins.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <span className="text-slate-700">Verification of licenses, certifications, and export history.</span></li>
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <span className="text-slate-700">Assessment of production machinery and actual capacity.</span></li>
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <span className="text-slate-700">Detailed photo and video reports of the facility.</span></li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 bg-slate-100 rounded-2xl aspect-video flex flex-col justify-center items-center text-slate-400 p-8 text-center border border-slate-200 shadow-sm relative overflow-hidden">
                            <img 
                                data-strk-img-id="service-audit-img-88b"
                                data-strk-img="Factory Audit Manufacturer"
                                data-strk-img-ratio="16x9"
                                data-strk-img-width="800"
                                className="absolute inset-0 w-full h-full object-cover"
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt="Factory Audits"
                           />
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div id="quality" className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                                <ClipboardCheck className="h-8 w-8 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Quality Control & Inspection</h2>
                            <p className="text-slate-600 mb-6 text-lg">
                                Catch defects before they leave China. We perform rigorous quality control checks based on international AQL standards to protect your brand reputation.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <span className="text-slate-700">During-Production Inspections (DUPRO) to catch early issues.</span></li>
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <span className="text-slate-700">Pre-Shipment Inspections (PSI) before final payment.</span></li>
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <span className="text-slate-700">Container Loading Checks to ensure safe packaging.</span></li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 bg-slate-100 rounded-2xl aspect-video flex flex-col justify-center items-center text-slate-400 p-8 text-center border border-slate-200 shadow-sm relative overflow-hidden">
                             <img 
                                data-strk-img-id="service-qc-img-77c"
                                data-strk-img="Quality Control Inspection Product"
                                data-strk-img-ratio="16x9"
                                data-strk-img-width="800"
                                className="absolute inset-0 w-full h-full object-cover"
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt="Quality Control"
                           />
                        </div>
                    </div>
                    {/* Service 4 */}
                    <div id="shipping" className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        <div className="md:w-1/2">
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                                <Ship className="h-8 w-8 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Shipping & Logistics</h2>
                            <p className="text-slate-600 mb-6 text-lg">
                                We optimize your shipping routes to save time and money, ensuring your goods arrive safely at your warehouse, FBA center, or direct to customers.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <span className="text-slate-700">Competitive freight rates for Sea, Air, and Rail transport.</span></li>
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <span className="text-slate-700">Consolidation of goods from multiple suppliers into one shipment.</span></li>
                                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" /> <span className="text-slate-700">Full handling of export documentation and customs clearance.</span></li>
                            </ul>
                        </div>
                        <div className="md:w-1/2 bg-slate-100 rounded-2xl aspect-video flex flex-col justify-center items-center text-slate-400 p-8 text-center border border-slate-200 shadow-sm relative overflow-hidden">
                             <img 
                                data-strk-img-id="service-shipping-img-66d"
                                data-strk-img="Shipping Logistics Freight Cargo"
                                data-strk-img-ratio="16x9"
                                data-strk-img-width="800"
                                className="absolute inset-0 w-full h-full object-cover"
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt="Shipping and Logistics"
                           />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;