const stats = [
  { value: '50K+', label: 'Active builders' },
  { value: '2M+', label: 'Sites generated' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<60s', label: 'Avg. generation time' },
]

const values = [
  {
    title: 'Speed without compromise',
    description: 'We believe the best tools get out of your way. AetherAI is built to be fast, intuitive, and invisible — so you can focus on what matters.',
  },
  {
    title: 'AI as a collaborator',
    description: 'We don\'t replace creativity — we amplify it. Our AI is a partner that handles the tedious work so you can focus on vision and strategy.',
  },
  {
    title: 'Radical transparency',
    description: 'No black boxes. You own your code, your data, and your site. We\'re open about how our models work and what they can and can\'t do.',
  },
]

export default function AboutSection() {
  return (
    <section className="py-32 px-6 border-t border-white/10 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=60&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-[0.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-black p-8 text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/40 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Our Vision</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              The web should be
              <br />
              <span className="text-white/30">for everyone.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              We started AetherAI because we believed that building a professional web presence shouldn't require a team of engineers and designers. It should be as simple as describing what you want.
            </p>
            <p className="text-white/40 leading-relaxed">
              Today, over 50,000 creators, founders, and businesses use AetherAI to launch faster, iterate smarter, and grow their online presence — without writing a single line of code.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-2xl border border-dashed border-white/15 pointer-events-none z-10" />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop"
              alt="Team collaboration"
              className="w-full h-80 object-cover rounded-2xl opacity-50"
            />
          </div>
        </div>

        {/* Values */}
        <div>
          <p className="text-white/40 text-sm uppercase tracking-widest mb-10 text-center">Our Values</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((val, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-white/10 bg-white/[0.02] relative group hover:border-white/20 transition-colors"
              >
                <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-dashed border-white/10 rounded-tr" />
                <span className="text-white/10 text-6xl font-bold block mb-4 tabular-nums">
                  0{i + 1}
                </span>
                <h3 className="text-white font-semibold mb-3">{val.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
