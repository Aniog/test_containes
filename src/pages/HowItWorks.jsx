import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { MessageSquare, FileSearch, Box, RefreshCw, ClipboardCheck, Ship } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import strkImgConfig from '@/strk-img-config.json';

const HowItWorks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const steps = [
    {
      icon: <MessageSquare className="w-10 h-10" />,
      title: "1. Specification & Inquiry",
      desc: "Send us your product requirements, including drawings, specs, target price, and volume. We sign an NDA to protect your IP."
    },
    {
      icon: <FileSearch className="w-10 h-10" />,
      title: "2. Supplier Shortlisting",
      desc: "We scan the market and provide a detailed report of potential factories with quotes and background verification."
    },
    {
      icon: <Box className="w-10 h-10" />,
      title: "3. Sampling & Iteration",
      desc: "We manage the sample production and consolidation, shipping them to you for evaluation and feedback."
    },
    {
      icon: <RefreshCw className="w-10 h-10" />,
      title: "4. Order & Production",
      desc: "Once you approve the sample, we finalize the contract and deposits. We follow production weekly with status reports."
    },
    {
      icon: <ClipboardCheck className="w-10 h-10" />,
      title: "5. QC Inspection",
      desc: "Before final payment, our QC team inspects the goods based on your checklist (AQL 2.5/4.0 standards)."
    },
    {
      icon: <Ship className="w-10 h-10" />,
      title: "6. Shipping & Delivery",
      desc: "We coordinate with forwarders, manage customs exports, and ensure the goods reach your warehouse safely."
    }
  ];

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">A streamlined, professional process designed for safety and efficiency.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group p-8 rounded-3xl border border-slate-100 hover:border-secondary hover:shadow-xl transition-all duration-300">
                <div className="text-secondary mb-6 bg-slate-50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{step.desc}</p>
                <div className="absolute top-8 right-8 text-6xl font-black text-slate-100/50 -z-10">{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-8">What Makes Our Process Different?</h2>
            <div className="space-y-6">
              <DifferItem title="No Kickback Policy" desc="Unlike many agents, we do not take hidden commissions from factories. Our only cost is the service fee you pay us." />
              <DifferItem title="Real-time Reporting" desc="Through our proprietary portal, you can see live production updates and inspection photos as they happen." />
              <DifferItem title="Legal Protection" desc="We use bilingual contracts enforceable in Chinese courts, providing you with real legal recourse." />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500">
              <img
                data-strk-img-id="how-works-img"
                data-strk-img="Sourcing agent inspecting electronic products factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Our Process"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Ready to get started?</h2>
          <Button asChild size="lg" className="bg-white text-secondary hover:bg-slate-100 px-10 py-7 text-xl font-bold rounded-2xl shadow-xl">
            <Link to="/contact">Request Your First Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

const DifferItem = ({ title, desc }) => (
  <div className="flex gap-4">
    <div className="mt-1"><ClipboardCheck className="text-secondary w-6 h-6" /></div>
    <div>
      <h4 className="font-bold text-lg text-slate-900 mb-1">{title}</h4>
      <p className="text-slate-600">{desc}</p>
    </div>
  </div>
);

export default HowItWorks;
