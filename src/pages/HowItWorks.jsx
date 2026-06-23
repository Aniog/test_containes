import React from 'react';
import { 
  ClipboardList, 
  Search, 
  Truck, 
  ShieldCheck, 
  Package, 
  CheckCircle2,
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      id: "step1",
      title: "Tell Us What You Need",
      desc: "Send us your product specifications, budget, and estimated order quantity. We'll analyze your requirements and provide a free feasibility assessment within 24 hours.",
      icon: MessageSquare
    },
    {
      id: "step2",
      title: "Supplier Sourcing & Shortlisting",
      desc: "We research and pre-verify 3-5 reliable manufacturers from our internal database and local market networks. You'll receive a detailed comparison report with quotes.",
      icon: Search
    },
    {
      id: "step3",
      title: "Sample Verification",
      desc: "We coordinate with chosen suppliers to produce samples. We inspect the samples on your behalf or consolidate them for international shipping to your office.",
      icon: Package
    },
    {
      id: "step4",
      title: "Production & Management",
      desc: "Once you place the order, we monitor the entire production process. We visit the factory to resolve any issues and ensure the schedule stays on track.",
      icon: ClipboardList
    },
    {
      id: "step5",
      title: "Final QC & Shipping",
      desc: "Our inspectors conduct a final Pre-Shipment Inspection (PSI). If passed, we manage the logistics, customs documentation, and shipping to your destination.",
      icon: Truck
    }
  ];

  const faqs = [
    {
      q: "Do I pay the factory or SSourcing China?",
      a: "Typically, you pay the factory directly for the goods (to ensure transparency), and pay us our service fee separately. We can help guide you through secure payment methods like Telegraphic Transfer (T/T) or L/C."
    },
    {
      q: "Can you handle custom designs and OEM?",
      a: "Absolutely. Most of our clients require custom branding (private label) or completely new product development. We help manage NDAs and ensure your intellectual property is protected."
    },
    {
      q: "What if the quality is not up to standard?",
      a: "This is where we add the most value. We catch issues during our inspections. If we find defects, we stay at the factory until the problems are resolved or products are remade before any final payment is released."
    },
    {
      q: "How long does the whole process take?",
      a: "Sourcing usually takes 1-2 weeks. Sample production can take 7-15 days. Mass production varies by product but typically ranges from 25-45 days. We provide a detailed timeline at the start."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-24 text-white relative">
        <div 
          className="absolute inset-0 opacity-20 brightness-[0.4] z-0"
          data-strk-bg-id="how-works-bg"
          data-strk-bg="professional business meeting china factory"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Sourcing Process</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A transparent, professional, and risk-free way to source products from China manufacturers.
          </p>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#ff6b00] text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="text-xs">{index + 1}</span>
                </div>
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 bg-white rounded-2xl border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between space-x-2 mb-2">
                    <h3 className="text-xl font-extrabold text-[#1a3d66]">{step.title}</h3>
                    <step.icon className="w-6 h-6 text-[#ff6b00] opacity-50" />
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual / Trust Section */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    data-strk-img-id="how-works-audit-img"
                    data-strk-img="chinese factory production management office"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    alt="Process in action"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block max-w-xs">
                  <div className="flex items-center gap-2 mb-3 text-green-600 font-bold uppercase text-xs">
                    <CheckCircle2 className="w-4 h-4" /> Live Tracking
                  </div>
                  <p className="text-[#1a3d66] text-sm font-semibold">"I can follow every step of my production through their weekly reports. Absolute peace of mind."</p>
                  <p className="text-slate-400 text-xs mt-2">- Marcus K., Amazon Seller</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-[#1a3d66] mb-8">Full Transparency at Every Stage</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-6">
                  <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-[#1a3d66]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a3d66] mb-2 uppercase text-xs tracking-wider">Independent QC</h4>
                    <p className="text-sm text-slate-500">We don't work for factories. We work for you. Our inspections are impartial and rigorous.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-6">
                  <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    <HelpCircle className="w-6 h-6 text-[#ff6b00]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a3d66] mb-2 uppercase text-xs tracking-wider">Expert Consulting</h4>
                    <p className="text-sm text-slate-500">Not just a middleman. We provide strategic advice on material choices and production methods.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion-like Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1a3d66] mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500">Clear answers to your most common concerns about sourcing from China.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                <h3 className="text-lg font-bold text-[#1a3d66] mb-4 flex gap-3">
                  <span className="text-[#ff6b00]">Q:</span> {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed pl-8 border-l-2 border-slate-200">
                  <span className="font-bold text-[#ff6b00] mr-2">A:</span> {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#ff6b00] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white mb-6 underline decoration-white/30 underline-offset-8">Still Have Questions?</h2>
          <p className="text-white/90 text-xl mb-10">Our consultants are ready to answer any specific queries you have about your project.</p>
          <Link to="/contact" className="inline-block px-10 py-5 bg-[#1a3d66] text-white rounded-md font-bold text-lg hover:bg-slate-800 transition-all shadow-xl">
            Schedule a Free Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
