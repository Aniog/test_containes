import { Shield, Award, Headphones, Globe } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    stat: "500+",
    label: "Factories Vetted",
    desc: "Thoroughly verified manufacturing partners across China.",
  },
  {
    icon: Award,
    stat: "200+",
    label: "Buyers Served",
    desc: "Trusted by importers and businesses from 30+ countries.",
  },
  {
    icon: Headphones,
    stat: "98%",
    label: "On-Time Delivery",
    desc: "Consistently meeting shipping deadlines for our clients.",
  },
  {
    icon: Globe,
    stat: "10+",
    label: "Years Experience",
    desc: "Deep expertise in China sourcing and supply chain management.",
  },
];

export default function TrustSection() {
  return (
    <section className="border-t bg-primary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
            Why Work With SSourcing China
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Experience, transparency, and a track record of delivering results
            for global buyers.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.label}
                className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 text-center backdrop-blur-sm"
              >
                <div className="mx-auto inline-flex rounded-lg bg-primary-foreground/10 p-3 text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-4 text-3xl font-bold text-primary-foreground">
                  {point.stat}
                </div>
                <div className="mt-1 text-sm font-semibold text-primary-foreground/90">
                  {point.label}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-primary-foreground/70">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}