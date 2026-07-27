import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: "01",
    title: "Inquiry & Analysis",
    description: "Tell us your product requirements, target price, and volume. We analyze the feasibility and start the search."
  },
  {
    number: "02",
    title: "Supplier Selection",
    description: "We filter and shortlist top 3-5 reliable suppliers based on price, quality, and factory capacity."
  },
  {
    number: "03",
    title: "Sample Verification",
    description: "We coordinate samples from selected factories to ensure they match your exact specifications."
  },
  {
    number: "04",
    title: "Production Follow-up",
    description: "Once the deposit is paid, we monitor the production schedule daily to prevent delays."
  },
  {
    number: "05",
    title: "Quality Inspection",
    description: "Before final payment, we perform a detailed on-site inspection based on your AQL requirements."
  },
  {
    number: "06",
    title: "Logistics Coordination",
    description: "We handle all documents, booking, and consolidation to get your goods shipped efficiently."
  }
];

const ProcessPreview = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Our Proof-Proven Sourcing <span className="text-primary italic">Process</span>
            </h2>
            <p className="text-slate-400 text-lg">
              A structured approach to ensure everything runs smoothly from concept to delivery.
            </p>
          </div>
          <Link to="/how-it-works">
            <button className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors">
              Full Process Details <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-black text-slate-800 group-hover:text-primary/20 transition-colors leading-none">
                  {step.number}
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight text-slate-100">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
              {/* Vertical line connector for desktop/tablet */}
              {index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-slate-800" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessPreview;
