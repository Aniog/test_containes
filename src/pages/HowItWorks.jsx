import React from 'react';

export default function HowItWorks() {
  return (
    <div className="flex flex-col w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">How We Work</h1>
        <p className="text-xl text-slate-600 mb-12">A simple, transparent process to source products safely from China.</p>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {/* Steps will be implemented here */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-sky-50 text-sky-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">1</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">Submit Your Inquiry</div>
                    </div>
                    <div className="text-slate-600">Tell us what you need, including specifications, quantities, and target price.</div>
                </div>
            </div>
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-sky-50 text-sky-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">2</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">Supplier Sourcing & Quotes</div>
                    </div>
                    <div className="text-slate-600">We contact factories, negotiate prices, and provide you with detailed quotations.</div>
                </div>
            </div>
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-sky-50 text-sky-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">3</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">Sampling & Order Placement</div>
                    </div>
                    <div className="text-slate-600">We arrange samples to confirm quality before you place the official bulk order.</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}