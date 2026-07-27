import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Factory, PackageSearch, ShieldCheck, Ship, Box, LineChart, MessageSquareText, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Home = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    const services = [
        {
            title: "Supplier Sourcing",
            description: "We find the most reliable and cost-effective manufacturers that match your exact product requirements.",
            icon: PackageSearch,
            id: "sourcing"
        },
        {
            title: "Factory Verification",
            description: "On-site audits to verify factory credentials, capacity, and working conditions before you place an order.",
            icon: Factory,
            id: "verification"
        },
        {
            title: "Quality Control",
            description: "Rigorous inspections during and after production to ensure your quality standards are met.",
            icon: ShieldCheck,
            id: "qc"
        },
        {
            title: "Shipping & Logistics",
            description: "End-to-end logistics coordination from the factory floor to your designated destination globally.",
            icon: Ship,
            id: "shipping"
        }
    ];

    const problems = [
        "Language barriers and communication delays",
        "Scams and unverified factory claims",
        "Hidden costs and unexpected price hikes",
        "Poor product quality and high defect rates",
        "Delayed production schedules",
        "Complex shipping and customs clearance"
    ];

    const steps = [
        { title: "Submit Requirements", desc: "Tell us what you need in detail." },
        { title: "Supplier Matching", desc: "We find and evaluate the best factories." },
        { title: "Sample Testing", desc: "We verify samples before mass production." },
        { title: "Production & QC", desc: "We monitor manufacturing and inspect goods." },
        { title: "Delivery", desc: "We handle logistics to your door." }
    ];

    return (
        <div className="w-full" ref={containerRef}>
            {/* Hero Section */}
            <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
                <div 
                    className="absolute inset-0 z-0 bg-gray-900"
                    data-strk-bg-id="hero-bg-v1"
                    data-strk-bg="[hero-title]"
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="1920"
                >
                    <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        China Sourcing Agent for Global Buyers
                    </h1>
                    <p id="hero-subtitle" className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-10">
                        We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto">
                            <Link to="/contact">Get a Free Sourcing Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 text-lg px-8 py-6 h-auto backdrop-blur-sm">
                            <Link to="/how-it-works">See How It Works</Link>
                        </Button>
                    </div>
                    
                    <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center border-t border-white/20 pt-8 max-w-5xl mx-auto">
                        <div>
                            <div className="text-3xl font-bold text-blue-400">10+</div>
                            <div className="text-sm text-gray-300 mt-1">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-400">500+</div>
                            <div className="text-sm text-gray-300 mt-1">Verified Factories</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-400">1000+</div>
                            <div className="text-sm text-gray-300 mt-1">Quality Inspections</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-400">50+</div>
                            <div className="text-sm text-gray-300 mt-1">Countries Served</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problems We Solve */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4" id="problems-title">Sourcing From China Is Hard. We Make It Easy.</h2>
                        <p className="text-lg text-gray-600" id="problems-desc">Don't risk your capital dealing with unknown suppliers thousands of miles away.</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <ul className="space-y-4">
                                {problems.map((problem, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-600">
                                                <X className="h-4 w-4" />
                                            </div>
                                        </div>
                                        <p className="ml-3 text-lg text-gray-700">{problem}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                                <p className="text-lg font-medium text-blue-900 flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                                    We act as your on-the-ground team in China, protecting your interests at every step.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <img 
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt="Business meeting with Chinese suppliers"
                                className="rounded-xl shadow-xl w-full h-[400px] object-cover"
                                data-strk-img-id="problems-img-1"
                                data-strk-img="[problems-title]"
                                data-strk-img-ratio="4x3"
                                data-strk-img-width="800"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4" id="services-title">Comprehensive Sourcing Solutions</h2>
                        <p className="text-lg text-gray-600" id="services-desc">Everything you need to successfully import from China under one roof.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <Card key={service.id} className="border-gray-100 shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-blue-600">
                                <CardContent className="pt-6">
                                    <div className="p-3 bg-blue-50 rounded-lg inline-block mb-4">
                                        <service.icon className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2" id={`service-title-${service.id}`}>{service.title}</h3>
                                    <p className="text-gray-600 mb-6" id={`service-desc-${service.id}`}>{service.description}</p>
                                    <img 
                                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                        alt={service.title}
                                        className="w-full h-40 object-cover rounded-md mb-4"
                                        data-strk-img-id={`service-img-${service.id}`}
                                        data-strk-img={`[service-title-${service.id}]`}
                                        data-strk-img-ratio="4x3"
                                        data-strk-img-width="400"
                                    />
                                    <Link to={`/services#${service.id}`} className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
                                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4" id="process-title">How It Works</h2>
                        <p className="text-lg text-gray-600">A transparent, step-by-step process to get your products safely delivered.</p>
                    </div>

                    <div className="relative">
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
                        
                        <div className="grid md:grid-cols-5 gap-8">
                            {steps.map((step, idx) => (
                                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-24 h-24 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center text-2xl font-bold text-blue-600 shadow-md mb-6">
                                        {idx + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-600">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="mt-16 text-center">
                        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                            <Link to="/contact">Start Your Project Today</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us / Trust Points */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img 
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt="Quality inspection in factory"
                                className="rounded-xl shadow-xl w-full h-[500px] object-cover"
                                data-strk-img-id="trust-img-1"
                                data-strk-img="[trust-title]"
                                data-strk-img-ratio="4x3"
                                data-strk-img-width="800"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6" id="trust-title">Why Choose SSourcing China?</h2>
                            <p className="text-lg text-gray-600 mb-8" id="trust-desc">We are not just a sourcing agent; we are your strategic partner in China.</p>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                            <LineChart className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-1">Transparent Pricing</h4>
                                        <p className="text-gray-600">No hidden fees or kickbacks from factories. We charge a clear, transparent service fee based on project scope.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                            <ShieldCheck className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-1">Strict Quality Standards</h4>
                                        <p className="text-gray-600">Our independent QC team inspects goods strictly according to AQL standards before they leave the factory.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                            <MessageSquareText className="h-6 w-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-1">Fluent Communication</h4>
                                        <p className="text-gray-600">Our team speaks fluent English and native Chinese, eliminating misunderstandings and saving time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* FAQ Section */}
             <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">Common questions from overseas buyers.</p>
                    </div>

                    <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-2">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left font-semibold text-lg py-4">How do you charge for your sourcing services?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base pb-4">
                                We operate on a transparent fee structure. Generally, we charge a percentage (typically 5-10%) of the total order value, depending on the volume and complexity. We do not take hidden commissions from factories. We also offer fixed-fee options for specific services like factory audits or single QC inspections.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left font-semibold text-lg py-4">What types of products do you source?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base pb-4">
                                We specialize in consumer electronics, home & garden, apparel & textiles, toys, machinery, and promotional products. However, our proven sourcing methodology allows us to find reliable suppliers for almost any legal commercial product.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-left font-semibold text-lg py-4">How do you ensure product quality?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base pb-4">
                                We implement a strict multi-step quality control process. This includes verifying the factory beforehand, checking pre-production samples, conducting During Production Inspections (DUPRO), and performing a comprehensive Pre-Shipment Inspection (PSI) based on international AQL standards.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-left font-semibold text-lg py-4">Do you handle Amazon FBA prep and shipping?</AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base pb-4">
                                Yes, we offer full Amazon FBA services. This includes FNSKU labeling, poly-bagging, bundling, carton labeling according to Amazon's strict requirements, and arranging DDP (Delivered Duty Paid) shipping directly to Amazon fulfillment centers globally.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <img 
                         src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                         alt="Logistics background"
                         className="w-full h-full object-cover"
                         data-strk-bg-id="cta-bg-1"
                         data-strk-bg="[cta-title]"
                         data-strk-bg-ratio="16x9"
                         data-strk-bg-width="1920"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6">Ready to scale your business with reliable China sourcing?</h2>
                    <p className="text-xl text-blue-100 mb-10">Stop worrying about manufacturing issues and focus on growing your sales. Let us handle the complex work in China.</p>
                    <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-10 py-6 h-auto">
                        <Link to="/contact">Get Your Free Sourcing Quote</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
};