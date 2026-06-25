const stats = [
  { value: '10¹²', label: 'Microbes per gram of soil' },
  { value: '0.2 μm', label: 'Smallest known free-living cell' },
  { value: '3.5 B', label: 'Years of microbial evolution' },
  { value: '70%', label: 'Of Earth\'s biomass is microbial' },
]

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">
              Field notes — 01
            </span>
            <h2
              id="about-title"
              className="mt-6 font-serif text-3xl md:text-5xl font-light tracking-tight text-slate-50 leading-[1.1]"
            >
              An empire that fits on a fingertip.
            </h2>
          </div>

          <div className="md:col-span-7 space-y-6 text-slate-300 font-light text-base md:text-lg leading-relaxed">
            <p id="about-lead">
              For most of human history we believed ourselves to be the dominant form
              of life. Then a Dutch lens-grinder pointed a glass tube at a drop of pond
              water and discovered something unsettling: we were never alone, and we
              were never the majority.
            </p>
            <p>
              The microcosmos is a parallel world — older, larger, and stranger than
              ours. It contains predators no bigger than a comma, architects who build
              glass houses from silica, and forms that hover between plant, animal, and
              mineral. This project is a quiet attempt to look at them properly.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-slate-950 p-8 md:p-10">
              <div className="font-serif text-4xl md:text-5xl font-light text-slate-50 tracking-tight">
                {stat.value}
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
