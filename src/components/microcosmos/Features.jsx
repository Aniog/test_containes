import { Aperture, Atom, Layers3, Telescope, FlaskConical, Waves } from "lucide-react";

const features = [
  {
    icon: Aperture,
    title: "Z-stacked imaging",
    desc: "Hundreds of focal slices fused into a single razor-sharp frame, revealing every cilium and chloroplast.",
  },
  {
    icon: Atom,
    title: "Phylogenetic context",
    desc: "Each capture is tagged with kingdom, phylum, and habitat so you understand what you are looking at.",
  },
  {
    icon: Layers3,
    title: "Cross-section maps",
    desc: "Layered diagrams overlay membranes, organelles, and structural details on top of the original photograph.",
  },
  {
    icon: Telescope,
    title: "Scale-aware viewer",
    desc: "Zoom from a millimeter of pond down to a single nanometer of cell wall, with calibrated micrometer markers.",
  },
  {
    icon: FlaskConical,
    title: "Field metadata",
    desc: "GPS, water chemistry, temperature, and time of day are recorded alongside every specimen.",
  },
  {
    icon: Waves,
    title: "Behavior loops",
    desc: "Short cinematographs capture the rhythmic pulses, glides, and flagellar storms of living microorganisms.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cosmos-border to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <span
            id="features-eyebrow"
            className="text-xs font-mono uppercase tracking-[0.25em] text-cosmos-accent"
          >
            02 / What you will find
          </span>
          <h2
            id="features-title"
            className="mt-4 font-display text-3xl md:text-5xl tracking-tight text-cosmos-fg"
          >
            Tools built for slow, careful looking.
          </h2>
          <p
            id="features-subtitle"
            className="mt-5 text-cosmos-muted text-base md:text-lg leading-relaxed"
          >
            Every layer of MicroCosmos is designed to help you stay with a specimen long
            enough to actually see it — from optics to annotations to ambient context.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="group relative rounded-2xl border border-cosmos-border bg-cosmos-surface/70 backdrop-blur-sm p-6 md:p-8 transition hover:border-cosmos-accent/50 hover:bg-cosmos-surface-2"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none">
                  <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-cosmos-accent to-transparent" />
                </div>
                <span className="grid place-items-center w-11 h-11 rounded-xl border border-cosmos-border bg-cosmos-bg text-cosmos-accent">
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="mt-5 font-display text-xl text-cosmos-fg">{f.title}</h3>
                <p className="mt-2 text-sm text-cosmos-muted leading-relaxed">{f.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
