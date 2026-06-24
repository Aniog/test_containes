const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <span
            id="about-eyebrow"
            className="text-xs font-mono uppercase tracking-[0.25em] text-cosmos-accent"
          >
            01 / About the Project
          </span>
          <h2
            id="about-title"
            className="mt-4 font-display text-3xl md:text-5xl tracking-tight text-cosmos-fg"
          >
            A field guide to the world{" "}
            <span className="bg-cosmos-gradient bg-clip-text text-transparent">
              you can&apos;t see.
            </span>
          </h2>
          <p
            id="about-desc"
            className="mt-6 text-cosmos-muted text-base md:text-lg leading-relaxed"
          >
            MicroCosmos pairs scanning electron and brightfield microscopy with patient
            fieldwork. Each specimen is sampled from rivers, mosses, soils, and ocean foam,
            then imaged, annotated, and archived alongside its environmental context — so
            anyone can study the life that surrounds us at scales we rarely consider.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              {
                t: "Wild-sampled, not cultivated",
                d: "Every organism is photographed within hours of collection, while structures and color are still intact.",
              },
              {
                t: "Annotated for learners",
                d: "Specimens come with phylum, scale bar, and a plain-language description of what makes each one remarkable.",
              },
              {
                t: "Open to researchers",
                d: "High-resolution captures and metadata are licensed CC-BY for educational and scientific use.",
              },
            ].map((item) => (
              <li key={item.t} className="flex gap-4">
                <span className="mt-2 w-2 h-2 rounded-full bg-cosmos-accent shadow-[0_0_12px_rgba(124,249,216,0.7)]" />
                <div>
                  <p className="font-display text-cosmos-fg">{item.t}</p>
                  <p className="text-sm text-cosmos-muted leading-relaxed">{item.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-cosmos-gradient opacity-20 blur-3xl rounded-[2rem]" />
          <div className="relative rounded-3xl overflow-hidden border border-cosmos-border bg-cosmos-surface">
            <img
              alt="Microscopic specimen close-up"
              className="w-full h-full object-cover aspect-[4/5]"
              data-strk-img-id="microcosmos-about-img-3a7b22"
              data-strk-img="[about-desc] [about-title] diatom microscope photograph"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-cosmos-bg via-cosmos-bg/70 to-transparent">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cosmos-accent">
                Sample · 002 · Pond water
              </p>
              <p className="mt-1 font-display text-cosmos-fg">
                Stephanodiscus niagarae · 600× brightfield
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
