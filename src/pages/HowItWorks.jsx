import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Tell Us What You Need",
      desc: "Submit your product specifications, target price, quantities, and quality requirements. The more details you provide, the better we can match you with the right suppliers.",
    },
    {
      number: "02",
      title: "Supplier Matching & Quotation",
      desc: "We scan our database and network to find 3-5 suitable factories. We negotiate preliminary prices and present you with a detailed quotation report comparing all options.",
    },
    {
      number: "03",
      title: "Sample Ordering",
      desc: "Once you select a supplier, we arrange for samples. We check the samples at our office first to verify basic quality before sending them to you for final approval.",
    },
    {
      number: "04",
      title: "Contract & Order Placement",
      desc: "After sample approval, we help draft a secure Purchase Order and manufacturing contract in both English and Chinese to protect your interests.",
    },
    {
      number: "05",
      title: "Production Follow-up & QC",
      desc: "We stay in constant contact with the factory to ensure production stays on schedule. We conduct mid-production and pre-shipment inspections to guarantee quality.",
    },
    {
      number: "06",
      title: "Shipping & Delivery",
      desc: "Once goods pass final inspection, we arrange the most cost-effective shipping method, handle export customs clearance, and ensure safe delivery to your destination.",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>How It Works | Sourcing Process | SSourcing China</title>
        <meta name="description" content="Learn about our 6-step China sourcing process. From inquiry to delivery, we manage your supply chain smoothly and securely." />
      </Helmet>

      {/* Header */}
      <section className="bg-slate-900 py-20 border-b border-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Our Sourcing Process</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">A transparent, step-by-step approach to securing your supply chain from China.</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-8">
                {/* Timeline line */}
                {index !== steps.length - 1 && (
                  <div className="absolute top-16 bottom-[-4rem] left-8 w-0.5 bg-slate-100 hidden sm:block"></div>
                )}
                
                <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-full bg-blue-50 border-4 border-white shadow-sm items-center justify-center relative z-10 text-xl font-bold text-blue-600">
                  {step.number}
                </div>
                
                <div className="flex-1 bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="flex items-center gap-4 mb-4 sm:hidden">
                    <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Step 1?</h2>
          <p className="text-xl text-blue-100 mb-10">Send us your product requirements today and get a free initial assessment.</p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-50 font-bold rounded-full px-8">
            <Link to="/contact">Submit Your Inquiry</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}