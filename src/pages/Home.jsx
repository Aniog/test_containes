import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, TrendingUp, PackageCheck, Users, Search, ClipboardCheck, Ship, Box, AlertTriangle, CheckCircle, FileText, Settings, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }, []);

    return (
        <div ref={containerRef}>
            {/* Hero Section */}
            <section className="relative bg-slate-900 pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
                <div 
                    className="absolute inset-0 opacity-40 mix-blend-overlay"
                    data-strk-bg-id="home-hero-bg-1234a"
                    data-strk-bg="[hero-subtitle] [hero-title]"
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="1600"
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/50"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center z-10">
                    <div className="md:w-2/3 lg:w-3/5 text-left">
                        <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
                            China Sourcing Agent for Global Buyers
                        </h1>
                        <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                            We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China directly to your warehouse.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg">
                                Get a Free Sourcing Quote
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link to="/how-it-works" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-base font-semibold rounded-md text-white hover:bg-white/10 transition-colors">
                                See How It Works
                            </Link>
                        </div>
                        
                        <div className="mt-12 flex items-center gap-6 text-sm text-slate-400">
                            <span className="flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-blue-500" /> Verify Suppliers
                            </span>
                            <span className="flex items-center gap-2">
                                <PackageCheck className="h-5 w-5 text-blue-500" /> Control Quality
                            </span>
                            <span className="flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-blue-500" /> Reduce Costs
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators Section */}
            <section className="bg-slate-50 border-b border-slate-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p id="trust-heading" className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500 mb-8">
                        Trusted by B2B buyers across 40+ countries
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200">
                        <div className="px-4">
                            <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
                            <div className="text-sm text-slate-600">Verified Factories</div>
                        </div>
                        <div className="px-4">
                            <div className="text-3xl font-bold text-slate-900 mb-2">10k+</div>
                            <div className="text-sm text-slate-600">Inspections Completed</div>
                        </div>
                        <div className="px-4">
                            <div className="text-3xl font-bold text-slate-900 mb-2">99%</div>
                            <div className="text-sm text-slate-600">Client Retention</div>
                        </div>
                        <div className="px-4">
                            <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
                            <div className="text-sm text-slate-600">Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Core Services Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 id="services-title" className="text-3xl font-bold text-slate-900 mb-4">End-to-End Sourcing Services</h2>
                        <p id="services-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We manage the entire supply chain process, from finding the right manufacturer to delivering goods to your door.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Service 1 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                                <Search className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 id="service-sourcing-title" className="text-xl font-bold text-slate-900 mb-3">Supplier Sourcing</h3>
                            <p id="service-sourcing-desc" className="text-slate-600 mb-6 line-clamp-3">
                                We find and vet reliable manufacturers capable of meeting your quality standards and target pricing.
                            </p>
                            <Link to="/services#sourcing" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
                                Learn more <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                                <ShieldCheck className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 id="service-audit-title" className="text-xl font-bold text-slate-900 mb-3">Factory Audits</h3>
                            <p id="service-audit-desc" className="text-slate-600 mb-6 line-clamp-3">
                                On-site verify factory capacity, ethical compliance, and quality management systems before you order.
                            </p>
                            <Link to="/services#audits" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
                                Learn more <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                                <ClipboardCheck className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 id="service-qc-title" className="text-xl font-bold text-slate-900 mb-3">Quality Inspection</h3>
                            <p id="service-qc-desc" className="text-slate-600 mb-6 line-clamp-3">
                                Pre-shipment and during-production inspections to ensure your products match the approved samples perfectly.
                            </p>
                            <Link to="/services#quality" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
                                Learn more <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </div>

                        {/* Service 4 */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                                <Ship className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 id="service-shipping-title" className="text-xl font-bold text-slate-900 mb-3">Shipping & Logistics</h3>
                            <p id="service-shipping-desc" className="text-slate-600 mb-6 line-clamp-3">
                                Consolidation, customs clearance, and global freight forwarding (sea, air, rail) at competitive rates.
                            </p>
                            <Link to="/services#shipping" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
                                Learn more <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sourcing Process Section */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 id="process-title" className="text-3xl font-bold text-slate-900 mb-4">A Streamlined Sourcing Process</h2>
                        <p id="process-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We take the complexity out of buying from China. Here is how we turn your requirements into delivered goods.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -translate-y-1/2 z-0"></div>

                        <div className="grid md:grid-cols-4 gap-8 relative z-10">
                            {/* Step 1 */}
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md border-4 border-white">
                                    1
                                </div>
                                <h3 id="step-1-title" className="text-xl font-bold text-slate-900 mb-2">Requirements</h3>
                                <p id="step-1-desc" className="text-slate-600">You share your product details, target price, and quantity.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center mt-8 md:mt-0">
                                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md border-4 border-white">
                                    2
                                </div>
                                <h3 id="step-2-title" className="text-xl font-bold text-slate-900 mb-2">Quotation</h3>
                                <p id="step-2-desc" className="text-slate-600">We audit factories and provide a transparent, all-in quote.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center mt-8 md:mt-0">
                                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md border-4 border-white">
                                    3
                                </div>
                                <h3 id="step-3-title" className="text-xl font-bold text-slate-900 mb-2">Production & QC</h3>
                                <p id="step-3-desc" className="text-slate-600">We manage sampling, monitor mass production, and inspect quality.</p>
                            </div>

                            {/* Step 4 */}
                            <div className="text-center mt-8 md:mt-0">
                                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md border-4 border-white">
                                    4
                                </div>
                                <h3 id="step-4-title" className="text-xl font-bold text-slate-900 mb-2">Delivery</h3>
                                <p id="step-4-desc" className="text-slate-600">We handle logistics, customs, and deliver to your final destination.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Products We Source */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                        <div className="max-w-2xl">
                            <h2 id="products-title" className="text-3xl font-bold text-slate-900 mb-4">Products We Source</h2>
                            <p id="products-subtitle" className="text-lg text-slate-600">
                                With access to China's vast manufacturing base, we source across a wide range of industries for our global clients.
                            </p>
                        </div>
                        <Link to="/products" className="mt-6 md:mt-0 text-blue-600 font-medium inline-flex items-center hover:text-blue-700 whitespace-nowrap">
                            View All Categories <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Category 1 */}
                        <div className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="aspect-w-4 aspect-h-3 w-full bg-slate-200">
                                <img
                                    data-strk-img-id="prod-cat-electronics-992a"
                                    data-strk-img="[cat-electronics-title]"
                                    data-strk-img-ratio="4x3"
                                    data-strk-img-width="600"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                    alt="Consumer Electronics"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 id="cat-electronics-title" className="text-xl font-bold text-white mb-2">Consumer Electronics</h3>
                                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Smart devices, accessories, components</p>
                            </div>
                        </div>

                        {/* Category 2 */}
                        <div className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="aspect-w-4 aspect-h-3 w-full bg-slate-200">
                                <img
                                    data-strk-img-id="prod-cat-home-441b"
                                    data-strk-img="[cat-home-title]"
                                    data-strk-img-ratio="4x3"
                                    data-strk-img-width="600"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                    alt="Home & Garden"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 id="cat-home-title" className="text-xl font-bold text-white mb-2">Home & Garden</h3>
                                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Furniture, decor, kitchenware</p>
                            </div>
                        </div>

                        {/* Category 3 */}
                        <div className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="aspect-w-4 aspect-h-3 w-full bg-slate-200">
                                <img
                                    data-strk-img-id="prod-cat-industrial-112c"
                                    data-strk-img="[cat-industrial-title]"
                                    data-strk-img-ratio="4x3"
                                    data-strk-img-width="600"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                    alt="Industrial Equipment"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 id="cat-industrial-title" className="text-xl font-bold text-white mb-2">Industrial Equipment</h3>
                                <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Machinery, parts, tools</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Problems We Solve */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 id="problems-title" className="text-3xl font-bold text-slate-900 mb-4">Why Use a China Sourcing Agent?</h2>
                        <p id="problems-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Importing from overseas can be risky. We act as your eyes and ears on the ground to mitigate these common challenges.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* The Problem */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-red-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" /> Common Sourcing Risks
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex flex-shrink-0 items-center justify-center text-sm font-bold mr-3 mt-0.5">✕</span>
                                    <span className="text-slate-700">Communicating with trading companies disguised as factories.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex flex-shrink-0 items-center justify-center text-sm font-bold mr-3 mt-0.5">✕</span>
                                    <span className="text-slate-700">Receiving poor quality goods that differ from the approved sample.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex flex-shrink-0 items-center justify-center text-sm font-bold mr-3 mt-0.5">✕</span>
                                    <span className="text-slate-700">Production delays hidden by suppliers until the last minute.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex flex-shrink-0 items-center justify-center text-sm font-bold mr-3 mt-0.5">✕</span>
                                    <span className="text-slate-700">Unexpected hidden costs in logistics and customs clearance.</span>
                                </li>
                            </ul>
                        </div>

                        {/* The Solution */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-emerald-100 relative">
                            <div className="absolute top-0 right-0 p-4">
                                <ShieldCheck className="h-16 w-16 text-emerald-50 opacity-50" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                <CheckCircle className="h-6 w-6 text-emerald-500 mr-2" /> The SSourcing Solution
                            </h3>
                            <ul className="space-y-4 relative z-10">
                                <li className="flex items-start">
                                    <span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 flex flex-shrink-0 items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                                    <span className="text-slate-700">Direct factory sourcing with on-site background checks and audits.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 flex flex-shrink-0 items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                                    <span className="text-slate-700">Strict pre-shipment inspections (AQL) to guarantee quality.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 flex flex-shrink-0 items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                                    <span className="text-slate-700">Proactive production monitoring and English/Chinese bilingual support.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 flex flex-shrink-0 items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                                    <span className="text-slate-700">Transparent billing and optimized logistics coordination.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies / Testimonial Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 id="cases-title" className="text-3xl font-bold text-slate-900 mb-4">Client Success Stories</h2>
                        <p id="cases-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
                            See how we've helped businesses worldwide scale their operations by optimizing their China supply chain.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5" />)}
                            </div>
                            <p className="text-slate-700 mb-6 italic">
                                "Before working with SSourcing China, we struggled with inconsistent quality from Alibaba suppliers. They audited our current factory, found a better alternative, and reduced our defect rate to practically zero. They are an indispensable part of our team now."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-lg mr-4">
                                    MT
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Michael T.</h4>
                                    <p className="text-sm text-slate-500">E-commerce Brand Owner, USA</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5" />)}
                            </div>
                            <p className="text-slate-700 mb-6 italic">
                                "The logistics was always a nightmare for our B2B wholesale business. SSourcing took over the consolidation of goods from 4 different factories and handled the customs clearance. It saved us roughly 15% on shipping costs alone."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-lg mr-4">
                                    JL
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Julia L.</h4>
                                    <p className="text-sm text-slate-500">Purchasing Director, Germany</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                         <Link to="/case-studies" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
                            Read More Case Studies <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 py-16 relative overflow-hidden">
                <div 
                    className="absolute inset-0 opacity-20 mix-blend-overlay"
                    data-strk-bg-id="home-cta-bg-778x"
                    data-strk-bg="[cta-subtitle] [cta-title]"
                    data-strk-bg-ratio="2x3"
                    data-strk-bg-width="1200"
                ></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 id="cta-title" className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Optimize Your Supply Chain?</h2>
                    <p id="cta-subtitle" className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Tell us what you're looking to source. Our team will review your requirements and provide a free, no-obligation quote within 24 hours.
                    </p>
                    <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-blue-600 bg-white hover:bg-slate-50 transition-colors shadow-lg">
                        Submit Sourcing Request
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;