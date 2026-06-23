import { ClipboardList, Users, Search, Truck, CheckCircle2, Factory } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      title: "1. Tell Us Your Requirements",
      desc: "Submit your product specifications, target price, quantities, and quality standards through our inquiry form.",
    },
    {
      icon: Search,
      title: "2. Supplier Sourcing & Quoting",
      desc: "We identify at least 3-5 capable manufacturers, negotiate terms, and present you with a detailed quotation comparing options.",
    },
    {
      icon: Factory,
      title: "3. Sample Consolidation",
      desc: "We collect samples from short-listed factories, verify them against your specs, and consolidate them into one package to send to you, saving significant shipping costs.",
    },
    {
      icon: Users,
      title: "4. Order Placement & Production",
      desc: "Once you approve a sample, we draft a comprehensive contract with the factory, place the order, and monitor production progress.",
    },
    {
      icon: CheckCircle2,
      title: "5. Quality Inspection",
      desc: "Our inspectors perform rigorous checks during production and before shipping to ensure the final product meets your exact standards.",
    },
    {
      icon: Truck,
      title: "6. Shipping & Delivery",
      desc: "We handle customs clearance and arrange the most cost-effective shipping method (Air/Sea/Express) to your designated destination.",
    }
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How Our Process Works</h1>
          <p className="text-xl text-slate-300">
            A proven, standardized workflow designed to completely mitigate risks when sourcing from China.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-[#c2182b]/10 text-[#c2182b] flex items-center justify-center flex-shrink-0 border-2 border-[#c2182b]/20">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-100 flex-1 relative custom-arrow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-slate-50 p-12 rounded-2xl border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Result? Peace of Mind.</h2>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                  You get the cost benefits of manufacturing in China without the headaches of late deliveries, poor quality, or communication breakdowns.
              </p>
              <Link to="/contact">
                  <Button size="lg" className="bg-[#c2182b] hover:bg-[#a01423] text-white">Start Your Project</Button>
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}