import { Award, Globe, Shield, Users, Wrench, Factory } from 'lucide-react';

const milestones = [
  { year: '1998', title: 'Founded', desc: 'ARTITECT MACHINERY established in Detroit with a vision for precision metalworking.' },
  { year: '2005', title: 'Global Expansion', desc: 'Opened distribution centers in Europe and Asia to serve international markets.' },
  { year: '2012', title: 'CNC Innovation', desc: 'Launched our first fully CNC-controlled double folding machine series.' },
  { year: '2018', title: 'IoT Integration', desc: 'Introduced smart connectivity and remote diagnostics across all product lines.' },
  { year: '2023', title: 'Green Manufacturing', desc: 'Achieved ISO 14001 certification and launched energy-efficient machine line.' },
  { year: '2026', title: 'Industry Leader', desc: 'Over 3,000 machines sold across 40+ countries with 99.2% uptime.' },
];

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    desc: 'Every machine undergoes rigorous testing before leaving our facility.',
  },
  {
    icon: Wrench,
    title: 'Engineering Excellence',
    desc: 'Designed by industry veterans with decades of hands-on experience.',
  },
  {
    icon: Users,
    title: 'Customer Partnership',
    desc: 'We work alongside our clients to ensure their long-term success.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'Local support in over 40 countries with a worldwide service network.',
  },
  {
    icon: Award,
    title: 'Certified Excellence',
    desc: 'CE, ISO 9001, and ISO 14001 certified manufacturing processes.',
  },
  {
    icon: Factory,
    title: 'Made to Last',
    desc: 'Heavy-duty construction designed for decades of reliable operation.',
  },
];

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="pt-28 pb-12 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
              Who We Are
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              About ARTITECT MACHINERY
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              For over 25 years, we have been the trusted partner for metal fabricators worldwide, delivering precision-engineered folding solutions that stand the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-600 text-sm font-semibold tracking-widest uppercase">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3 mb-6">
                Engineering Precision, Delivering Trust
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  Founded in 1998 in the heart of Americas manufacturing belt, ARTITECT MACHINERY began with a simple mission: build sheet metal folding machines that fabricators could rely on day after day, year after year.
                </p>
                <p>
                  What started as a small workshop with three engineers has grown into an internationally recognized brand with manufacturing facilities across three continents. Our machines are trusted by industry leaders in automotive, aerospace, construction, and appliance manufacturing.
                </p>
                <p>
                  We believe that the best machinery is born from a deep understanding of the shop floor. Thats why our design team spends hundreds of hours annually visiting client facilities, observing real-world challenges, and refining our products to meet evolving needs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy-900 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-gold-400 mb-1">25+</div>
                <div className="text-sm text-slate-400">Years in Business</div>
              </div>
              <div className="bg-slate-100 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-navy-900 mb-1">3,000+</div>
                <div className="text-sm text-slate-500">Machines Delivered</div>
              </div>
              <div className="bg-slate-100 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-navy-900 mb-1">40+</div>
                <div className="text-sm text-slate-500">Countries Served</div>
              </div>
              <div className="bg-navy-900 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-gold-400 mb-1">150+</div>
                <div className="text-sm text-slate-400">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-600 text-sm font-semibold tracking-widest uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">
              Milestones & Achievements
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />
            <div className="space-y-10 md:space-y-0">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`md:flex md:items-center ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                      <span className="text-gold-600 font-bold text-lg">{m.year}</span>
                      <h3 className="text-lg font-semibold text-navy-900 mt-1 mb-2">{m.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gold-400 rounded-full border-4 border-white shadow" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-gold-600 text-sm font-semibold tracking-widest uppercase">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mt-3">
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="group p-6 rounded-xl border border-slate-100 hover:border-gold-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-900 flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors duration-300">
                  <v.icon className="w-6 h-6 text-gold-400 group-hover:text-navy-900 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
