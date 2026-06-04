import ScrollReveal from "../shared/ScrollReveal";

const facts = [
  {
    number: "1.5B",
    label: "Hectares",
    desc: "of mycorrhizal networks connect trees in a single forest",
    color: "text-forest-mid",
  },
  {
    number: "99.9%",
    label: "Shared DNA",
    desc: "between humans and chimpanzees — yet we built cities",
    color: "text-sky-mid",
  },
  {
    number: "380T",
    label: "Bacteria",
    desc: "live in and on the human body — we are ecosystems",
    color: "text-skin-warm",
  },
  {
    number: "3.8B",
    label: "Years",
    desc: "of evolution encoded in every living cell on Earth",
    color: "text-forest-mid",
  },
];

export default function LabStats() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <p className="font-dancing text-2xl lg:text-3xl text-skin-light text-center italic mb-16 max-w-2xl mx-auto leading-relaxed">
            "In every walk with nature, one receives far more than he seeks."
            <span className="font-inter text-sm text-parchment/40 not-italic block mt-3">
              — John Muir
            </span>
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <span className={`font-playfair text-4xl lg:text-5xl font-bold ${fact.color} block mb-2`}>
                  {fact.number}
                </span>
                <span className="font-inter text-xs uppercase tracking-widest text-parchment/60 block mb-3">
                  {fact.label}
                </span>
                <p className="font-inter text-sm text-parchment/50 leading-relaxed">
                  {fact.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
