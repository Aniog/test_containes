import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">
              About ARTITECT
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-navy mb-6 leading-tight">
              A Legacy of Precision
              <br />
              <span className="text-steel">Since 1998</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Founded in Frankfurt, Germany, ARTITECT MACHINERY has spent over 25 years at the forefront of sheet metal fabrication technology. We design, manufacture, and support the world's most reliable folding machines.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our engineering team combines traditional craftsmanship with modern innovation — every machine that leaves our factory is a testament to our commitment to quality, precision, and customer success.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { value: '25+', label: 'Years in Business' },
                { value: '80+', label: 'Countries Served' },
                { value: '5,000+', label: 'Machines Installed' },
                { value: '200+', label: 'Team Members' },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-gold pl-4">
                  <div className="font-display font-bold text-3xl text-navy">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-full hover:bg-steel transition-all duration-200"
            >
              Work With Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Visual Panel */}
          <div className="relative">
            <div className="bg-gradient-to-br from-navy to-steel rounded-2xl p-10 text-white">
              <div className="mb-8">
                <div className="w-12 h-1 bg-gold rounded mb-6" />
                <h3 className="font-display font-bold text-2xl mb-4">Our Mission</h3>
                <p className="text-white/70 leading-relaxed">
                  To empower manufacturers worldwide with precision folding technology that maximizes productivity, minimizes waste, and delivers consistent quality — every single bend.
                </p>
              </div>
              <div className="border-t border-white/20 pt-8">
                <div className="w-12 h-1 bg-gold rounded mb-6" />
                <h3 className="font-display font-bold text-2xl mb-4">Our Values</h3>
                <ul className="space-y-3">
                  {[
                    'Precision in every detail',
                    'Integrity in every relationship',
                    'Innovation without compromise',
                    'Support beyond the sale',
                  ].map((value) => (
                    <li key={value} className="flex items-center gap-3 text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-steel/20 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
