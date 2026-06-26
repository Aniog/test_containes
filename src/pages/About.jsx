import { Award, Users, Globe, Factory } from 'lucide-react'

const milestones = [
  { year: '1998', title: 'Founded', desc: 'Artitect Machinery was established with a vision to revolutionize sheet metal folding.' },
  { year: '2005', title: 'Global Expansion', desc: 'Expanded distribution to Europe and Asia, opening offices in Germany and China.' },
  { year: '2012', title: 'CNC Innovation', desc: 'Launched our first fully CNC-controlled folding machine series.' },
  { year: '2018', title: '1,000th Machine', desc: 'Celebrated the installation of our 1,000th machine worldwide.' },
  { year: '2024', title: 'Smart Factory Ready', desc: 'Introduced IoT-enabled machines with remote diagnostics and reporting.' },
]

const values = [
  {
    icon: Award,
    title: 'Quality First',
    desc: 'Every component is inspected and tested to ensure lasting performance in the toughest environments.',
  },
  {
    icon: Users,
    title: 'Customer Partnership',
    desc: 'We do not just sell machines — we build long-term relationships with our clients through support and service.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    desc: 'Our machines meet or exceed international safety and quality certifications across all markets.',
  },
  {
    icon: Factory,
    title: 'Innovation Driven',
    desc: 'Continuous R&D investment keeps our technology at the cutting edge of sheet metal fabrication.',
  },
]

export default function About() {
  return (
    <div>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 bg-navy-light/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
            Engineering Excellence Since 1998
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            For over two decades, Artitect Machinery has been a trusted name in
            precision sheet metal folding equipment, serving manufacturers across
            the globe.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold text-sm font-semibold tracking-widest uppercase">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-6">
                From a Small Workshop to a Global Brand
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Artitect Machinery started in a modest workshop in Chicago with
                  a single mission: to build folding machines that fabricators could
                  rely on day in and day out. What began as a passion for mechanical
                  precision has grown into a globally recognized brand trusted by
                  thousands of workshops and manufacturing plants.
                </p>
                <p>
                  Today, our machines are at work in over 35 countries, bending
                  everything from thin HVAC ducts to thick structural steel. Our
                  commitment to quality, innovation, and customer support remains
                  the cornerstone of everything we do.
                </p>
                <p>
                  We continue to invest heavily in R&D, bringing smart automation
                  and IoT connectivity to the world of sheet metal folding —
                  because we believe the future of fabrication is connected,
                  efficient, and precise.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-xl h-80 lg:h-full min-h-[320px] flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Factory size={48} className="mx-auto mb-3" />
                <p className="text-sm">Artitect Machinery Headquarters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              Core Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-4">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <v.icon size={26} className="text-gold" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Milestones
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 inline-block w-full md:w-auto">
                      <span className="text-gold font-bold text-lg">{m.year}</span>
                      <h3 className="text-white font-semibold mt-1">{m.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{m.desc}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center shrink-0 z-10 ml-0 md:ml-0" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
