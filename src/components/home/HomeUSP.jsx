const items = [
  {
    eyebrow: "01",
    title: "Engineered Rigidity",
    desc: "Heavy-cast frames and ground beams eliminate deflection across the full bending length.",
  },
  {
    eyebrow: "02",
    title: "Double-Beam Folding",
    desc: "Up and down folds in a single setup — for closed profiles, hems, and architectural panels.",
  },
  {
    eyebrow: "03",
    title: "Effortless Control",
    desc: "Touchscreen control with intuitive graphic programming. Operators are productive within an hour.",
  },
  {
    eyebrow: "04",
    title: "Quietly Powerful",
    desc: "Servo-electric drive systems deliver speed and consistency with a fraction of the energy.",
  },
]

const HomeUSP = () => {
  return (
    <section className="bg-graphite text-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-accent" />
              <p className="text-xs uppercase tracking-[0.35em] text-accent">Why Artitect</p>
            </div>
            <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight">
              Where folded metal becomes <span className="italic text-accent">architecture.</span>
            </h2>
            <p className="mt-6 text-bone/70 leading-relaxed max-w-md">
              Every Artitect folder is built around one belief: a clean, repeatable
              bend is the foundation of beautiful fabrication. Our machines remove
              guesswork from the workshop.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-bone/10">
            {items.map((item) => (
              <div key={item.eyebrow} className="bg-graphite p-7">
                <p className="font-serif text-accent text-2xl">{item.eyebrow}</p>
                <p className="mt-3 font-serif text-xl text-bone">{item.title}</p>
                <p className="mt-3 text-sm text-bone/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeUSP
