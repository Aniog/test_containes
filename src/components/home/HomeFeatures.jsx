import { Ruler, Cpu, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: Ruler,
    title: "Engineered geometry",
    desc: "Every frame is stress-relieved and laser-aligned, so the bend you program is the bend you receive — every single time.",
  },
  {
    icon: Cpu,
    title: "Intelligent CNC",
    desc: "Touchscreen control with 2D and 3D part visualisation. Operators are productive in hours, not weeks.",
  },
  {
    icon: ShieldCheck,
    title: "Built to outlast",
    desc: "Heavy-duty welded steel, sealed bearings and industrial-grade servos. Designed for two-shift operation, year after year.",
  },
  {
    icon: Headphones,
    title: "Lifetime partnership",
    desc: "Direct engineering support, remote diagnostics, and a global spare parts network keep your line running.",
  },
];

export default function HomeFeatures() {
  return (
    <section className="bg-paper py-24 md:py-32 border-y border-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-brass font-medium">
            What sets us apart
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-ink">
            Quiet excellence in every detail.
          </h2>
          <p className="mt-6 text-graphite leading-relaxed">
            We don't compete on noise. We compete on the cleanliness of the
            corner, the consistency of the radius, and the ease with which your
            team produces both.
          </p>
        </div>

        <div className="mt-16 grid gap-px bg-mist md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-paper p-8 md:p-10 flex flex-col gap-4"
            >
              <feature.icon className="w-7 h-7 text-brass" strokeWidth={1.5} />
              <h3 className="font-display text-2xl text-ink">{feature.title}</h3>
              <p className="text-graphite leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
