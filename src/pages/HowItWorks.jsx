import React from 'react';
import { ArrowRight, CheckCircle, Clock, Search, Briefcase, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            title: 'Submit Your Requirements',
            desc: 'Fill out our inquiry form with detailed product specifications, target price, estimated quantity, and preferred materials or certifications required.',
            icon: <FileText className="h-6 w-6 text-blue-600" />
        },
        {
            number: '02',
            title: 'Sourcing & Quotation',
            desc: 'Our local team contacts multiple factories, compares prices, audits baseline capabilities, and provides you with a transparent, all-in quotation within 48-72 hours.',
            icon: <Search className="h-6 w-6 text-blue-600" />
        },
        {
            number: '03',
            title: 'Sampling & Approval',
            desc: 'We arrange for physical samples to be produced and shipped to you for final approval. Adjustments are made directly with the factory based on your feedback.',
            icon: <CheckCircle className="h-6 w-6 text-blue-600" />
        },
        {
            number: '04',
            title: 'Production Management',
            desc: 'Once you place the order, we monitor the entire production schedule, ensuring milestones are met and preventing unexpected delays.',
            icon: <Clock className="h-6 w-6 text-blue-600" />
        },
        {
            number: '05',
            title: 'Quality Inspection',
            desc: 'Before the final balance is paid, our inspectors visit the factory to conduct a strict AQL inspection. You receive a detailed report with photos and videos.',
            icon: <Briefcase className="h-6 w-6 text-blue-600" />
        },
        {
            number: '06',
            title: 'Shipping & Delivery',
            desc: 'We handle the logistics—consolidating goods, managing customs clearance, and booking sea/air freight—delivering your products directly to your chosen destination.',
            icon: <ArrowRight className="h-6 w-6 text-blue-600" />
        }
    ];

    return (
        <div className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">How Our Sourcing Process Works</h1>
                    <p className="text-xl text-slate-600">
                        A transparent, step-by-step approach to safe and profitable importing from China.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2"></div>
                    
                    <div className="space-y-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} mb-8 md:mb-0`}>
                                   <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
                                        {/* Mobile Number Badge */}
                                        <div className="md:hidden absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold font-mono">
                                            {step.number}
                                        </div>
                                        <div className={`mb-4 flex ${index % 2 === 0 ? 'justify-start md:justify-end' : 'justify-start'}`}>
                                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                                                {step.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                                        <p className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
                                   </div>
                                </div>
                                <div className="hidden md:flex w-16 h-16 rounded-full bg-blue-600 text-white items-center justify-center font-bold text-xl z-10 border-4 border-slate-50 shadow-sm shrink-0">
                                    {step.number}
                                </div>
                                <div className="md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
                        Start Your Sourcing Journey
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;