import React from 'react';
import { ArrowRight, TrendingUp, AlertCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
    const cases = [
        {
            id: 1,
            title: 'Scaling E-Commerce Operations for a European Brand',
            industry: 'Consumer Electronics',
            challenge: 'The client was experiencing a 12% defect rate with their existing supplier, leading to high return rates and damage to their brand reputation. They also faced communication barriers, often waiting days for a response.',
            solution: 'We conducted an on-site audit of 3 new potential factories, selected the most capable one, negotiated a 5% cost reduction based on volume, and implemented a strict pre-shipment AQL inspection protocol.',
            results: [
                'Defect rate reduced from 12% to under 0.5%.',
                'Production costs decreased by 5%.',
                'Communication turnaround time reduced to under 12 hours.'
            ]
        },
        {
            id: 2,
            title: 'Optimizing Logistics for Wholesale Distributor',
            industry: 'Home & Garden',
            challenge: 'A US-based distributor was purchasing from 5 different factories in China, organizing LCL (Less than Container Load) shipping independently for each order, resulting in exorbitant freight and customs fees.',
            solution: 'We managed the purchasing across all 5 factories, synchronized production schedules, and consolidated all goods into a single FCL (Full Container Load) shipment from our warehouse in Shenzhen.',
            results: [
                'Overall shipping costs reduced by 32%.',
                'Customs clearance fees consolidated, saving $1,500 per order cycle.',
                'Streamlined communication—client now talks to one point of contact instead of five.'
            ]
        },
        {
            id: 3,
            title: 'Rescuing a Delayed Kickstarter Project',
            industry: 'Toys & Hobbies',
            challenge: 'A crowdfunding creator was 3 months behind schedule. Their factory kept promising "next week" without showing actual progress, putting the creator at risk of mass refund requests from backers.',
            solution: 'Our team visited the factory unannounced, discovered they lacked the tooling capacity for the required volume. We moved the molds to a vetted partner factory with available capacity and managed the transition over a weekend.',
            results: [
                'Production resumed within 4 days.',
                'Initial batch of 5,000 units completed and shipped in 6 weeks.',
                'Project successfully delivered, restoring creator credibility.'
            ]
        }
    ];

    return (
        <div className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Client Case Studies</h1>
                    <p className="text-xl text-slate-600">
                        Real-world examples of how we solve complex sourcing, quality, and logistical challenges for our clients.
                    </p>
                </div>

                <div className="space-y-16">
                    {cases.map((study) => (
                        <div key={study.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="p-8 md:p-10">
                                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider rounded-md mb-4">
                                    {study.industry}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">{study.title}</h2>
                                
                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                                            <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                                            The Challenge
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {study.challenge}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                                            <ShieldCheck className="h-5 w-5 text-emerald-500 mr-2" />
                                            Our Solution
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {study.solution}
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                                        <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                                        Key Results
                                    </h3>
                                    <ul className="space-y-3">
                                        {study.results.map((result, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex flex-shrink-0 items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</span>
                                                <span className="text-slate-700 font-medium">{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Want to be our next success story?</h2>
                    <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
                        Get a Free Sourcing Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;