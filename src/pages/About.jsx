import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <section className="bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="uppercase tracking-[2px] text-xs font-medium text-slate-400 mb-3">ABOUT US</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-none mb-6">
              A sourcing partner, not a middleman
            </h1>
            <p className="text-xl text-slate-300">
              SSourcing China was founded in 2012 in Ningbo, one of China's largest export hubs. We exist to help international buyers source from China with clarity, accountability, and realistic expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-x-10 gap-y-10">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">What we believe</h2>
            <div className="space-y-4 text-slate-700">
              <p>Most problems in China sourcing come from misaligned incentives and poor communication. We fix both.</p>
              <p>We work exclusively for buyers. We do not take commissions from factories. Our recommendations are based on what is best for you, not what generates the highest margin for us.</p>
              <p>We are transparent about risks. If a product is difficult to source well in China, we will tell you. We would rather lose a project than set you up for disappointment.</p>
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">How we are different</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 text-sm">
              <div>
                <div className="font-medium mb-1">We are not a trading company</div>
                <p className="text-slate-600">We do not buy and resell. We represent you in finding and managing real manufacturers.</p>
              </div>
              <div>
                <div className="font-medium mb-1">We do not outsource audits</div>
                <p className="text-slate-600">Our team conducts audits and inspections ourselves. We do not subcontract to third-party inspection companies.</p>
              </div>
              <div>
                <div className="font-medium mb-1">We document everything</div>
                <p className="text-slate-600">Every audit, inspection, and production update comes with written reports and photos. Nothing is verbal only.</p>
              </div>
              <div>
                <div className="font-medium mb-1">We stay involved after shipment</div>
                <p className="text-slate-600">If there are issues after goods arrive, we help you resolve them with the factory. We do not disappear once the container leaves.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight mb-8">Our team</h2>
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="font-medium">Sourcing Specialists</div>
              <p className="text-slate-600 mt-2">Our sourcing team has deep category expertise across consumer goods, industrial components, and OEM projects. They speak fluent English and Mandarin.</p>
            </div>
            <div>
              <div className="font-medium">Quality Engineers</div>
              <p className="text-slate-600 mt-2">Our QC team has backgrounds in manufacturing and quality management. They know what to look for and how to communicate findings clearly.</p>
            </div>
            <div>
              <div className="font-medium">Project Coordinators</div>
              <p className="text-slate-600 mt-2">Every client is assigned a dedicated coordinator who serves as your single point of contact throughout the project lifecycle.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">Want to work with us?</h2>
        <p className="text-slate-600 mb-8">We are selective about the projects we take on. If you value transparency, documentation, and realistic expectations, we would like to hear from you.</p>
        <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800">
          Get a Free Sourcing Quote
        </Link>
      </section>
    </div>
  );
}
