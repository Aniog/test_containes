import { CheckCircle } from 'lucide-react';

const milestones = [
  { year: '2000', event: 'ARTITECT MACHINERY founded with a focus on precision sheet metal equipment' },
  { year: '2007', event: 'Launched first CNC-controlled double folding machine series' },
  { year: '2013', event: 'Expanded to international markets across Europe and Asia-Pacific' },
  { year: '2018', event: 'Achieved ISO 9001 certification and CE marking across full product range' },
  { year: '2023', event: 'Introduced Industry 4.0 ready smart folding machine platform' },
];

const values = [
  'Uncompromising precision in every machine we build',
  'Transparent partnerships with our customers',
  'Continuous innovation driven by real-world feedback',
  'Sustainable manufacturing practices',
  'Lifetime technical support commitment',
];

const About = () => (
  <section id="about" className="bg-steel-blue py-24">
    <div className="max-w-7xl mx-auto px-6">
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Our Story</span>
          <div className="h-px w-10 bg-gold" />
        </div>
        <h2
          id="about-title-5e8b32"
          className="font-serif font-bold text-4xl md:text-5xl text-off-white mb-4"
        >
          Crafting Precision Since 2000
        </h2>
        <p
          id="about-subtitle-5e8b32"
          className="text-light-gray text-lg max-w-2xl mx-auto leading-relaxed"
        >
          For over two decades, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology — combining engineering expertise with a relentless commitment to quality.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Image + values */}
        <div className="flex flex-col gap-8">
          <div className="relative rounded-2xl overflow-hidden h-72 md:h-96">
            <img
              data-strk-img-id="about-factory-img-9d1c47"
              data-strk-img="[about-subtitle-5e8b32] [about-title-5e8b32]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="ARTITECT MACHINERY factory floor with precision folding machines"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-steel-blue/60 to-transparent" />
            {/* Floating stat */}
            <div className="absolute bottom-6 left-6 bg-navy-deep/90 backdrop-blur rounded-xl px-6 py-4 border border-gold/30">
              <div className="font-serif font-bold text-3xl text-gold">25+</div>
              <div className="text-off-white text-sm mt-0.5">Years of Excellence</div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-navy-deep/50 rounded-2xl p-8 border border-slate-mid/50">
            <h3 className="font-serif font-bold text-xl text-off-white mb-5">Our Core Values</h3>
            <ul className="space-y-3">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-light-gray text-sm leading-relaxed">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Timeline */}
        <div>
          <h3 className="font-serif font-bold text-2xl text-off-white mb-8">Our Journey</h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-mid/60" />

            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div key={milestone.year} className="flex gap-6 relative">
                  {/* Dot */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-navy-deep border-2 border-gold flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                  <div className="pb-2">
                    <div className="text-gold font-bold text-sm tracking-widest mb-1">{milestone.year}</div>
                    <p className="text-light-gray text-sm leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission statement */}
          <div className="mt-10 border-l-4 border-gold pl-6">
            <p className="text-off-white text-lg font-serif italic leading-relaxed">
              "Our mission is to empower fabricators worldwide with machines that combine the precision of fine engineering with the reliability of industrial-grade construction."
            </p>
            <p className="text-gold text-sm font-semibold mt-3 tracking-wide">— ARTITECT MACHINERY Founding Principle</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
