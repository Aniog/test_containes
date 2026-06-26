import { ClipboardList, Users, PackageCheck, Settings, ShieldCheck, Ship, ArrowRight } from "lucide-react";

export function SourcingProcess() {
  const steps = [
    {
      number: "01",
      title: "Consultation & Quote",
      description: "We understand your product requirements, target price, and evaluate feasibility.",
      icon: <ClipboardList className="h-8 w-8" />
    },
    {
      number: "02",
      title: "Supplier Sourcing",
      description: "We identify and audit the best factories matching your specific needs.",
      icon: <Users className="h-8 w-8" />
    },
    {
      number: "03",
      title: "Sample Approval",
      description: "We collect, inspect, and ship samples to you for final approval.",
      icon: <PackageCheck className="h-8 w-8" />
    },
    {
      number: "04",
      title: "Production Follow-up",
      description: "We monitor manufacturing closely to ensure lead times are met.",
      icon: <Settings className="h-8 w-8" />
    },
    {
      number: "05",
      title: "Quality Control",
      description: "Our inspectors perform rigorous AQL checks before products leave the factory.",
      icon: <ShieldCheck className="h-8 w-8" />
    },
    {
      number: "06",
      title: "Shipping & Logistics",
      description: "We handle customs, documentation, and deliver goods to your door.",
      icon: <Ship className="h-8 w-8" />
    }
  ];

  return (
    <section className="py-16 md:py-24 border-y">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="process-title" className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Sourcing Process</h2>
          <p id="process-desc" className="text-lg text-muted-foreground">
            A proven, step-by-step approach to make importing from China seamless, safe, and highly profitable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center p-6 bg-card rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
