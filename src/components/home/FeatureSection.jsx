import { Layers, Gauge, Wrench, ShieldCheck } from "lucide-react";

const features = [
  {
    Icon: Layers,
    title: "True double-folding",
    body: "Twin upper and lower beams fold up and down without flipping the sheet — twice the throughput, half the operator strain.",
  },
  {
    Icon: Gauge,
    title: "± 0.05° repeatability",
    body: "Servo back gauges, hardened tooling and laser-monitored alignment hold tolerances over thousands of cycles.",
  },
  {
    Icon: Wrench,
    title: "Engineered to be serviced",
    body: "Modular subassemblies, clearly labeled wiring, and parts kept in stock for two decades after purchase.",
  },
  {
    Icon: ShieldCheck,
    title: "Five-year mechanical warranty",
    body: "We stand behind every weld and bearing. Our service network covers 62 countries and counting.",
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brass mb-5">
            Why ARTITECT
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink leading-tight">
            Machines that fold straight, every time —{" "}
            <span className="italic text-brass">for years</span>.
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-mist md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ Icon, title, body }) => (
            <div key={title} className="bg-paper p-8 lg:p-10">
              <Icon className="w-7 h-7 text-brass" strokeWidth={1.4} />
              <h3 className="mt-6 font-serif text-2xl text-ink">{title}</h3>
              <p className="mt-3 text-sm text-steel leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
