import { Link } from "react-router-dom";
import { MessageSquare, Search, FileCheck, Eye, Ship, Handshake } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Share Your Requirements",
    desc: "Tell us what you need — product specs, target price, quantity, and any supplier preferences.",
  },
  {
    icon: Search,
    num: "02",
    title: "We Source & Shortlist",
    desc: "Our team researches the market and presents 2–5 qualified suppliers with pricing and lead times.",
  },
  {
    icon: FileCheck,
    num: "03",
    title: "Factory Verification",
    desc: "We conduct on-site audits or video inspections to verify the factory before sampling.",
  },
  {
    icon: Eye,
    num: "04",
    title: "Sampling & QC",
    desc: "Samples are reviewed, and once approved, we monitor production with in-process inspections.",
  },
  {
    icon: Ship,
    num: "05",
    title: "Shipping & Logistics",
    desc: "We coordinate freight, customs docs, and delivery to your door or warehouse.",
  },
  {
    icon: Handshake,
    num: "06",
    title: "Ongoing Support",
    desc: "We stay available for reorders, new product development, and continuous supplier management.",
  },
];

export default function HomeProcess() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-primary mb-4">A Simple, Transparent Process</h2>
          <p className="text-slate-600">
            We keep you informed at every stage so you can focus on growing your
            business while we handle the details in China.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-surface rounded-lg p-6 md:p-8 border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-bold text-slate-300">{step.num}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Learn more about our process <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
