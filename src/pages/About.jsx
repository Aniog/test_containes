import { Link } from 'react-router-dom';
import { ArrowRight, Users, Factory, Globe, Target } from 'lucide-react';

const stats = [
  { value: '1985', label: 'Founded' },
  { value: '5,000+', label: 'Machines Installed' },
  { value: '40+', label: 'Countries Served' },
  { value: '24/7', label: 'Support Available' },
];

const values = [
  { icon: Target, title: 'Precision First', desc: 'Every component is CNC-machined to exacting tolerances. We never compromise on accuracy.' },
  { icon: Factory, title: 'Built in America', desc: 'Our Chicago facility combines skilled craftsmanship with advanced manufacturing technology.' },
  { icon: Globe, title: 'Global Reach', desc: 'Machines exported to over 40 countries with localized service and support networks.' },
  { icon: Users, title: 'Customer Focused', desc: 'From consultation to installation to lifetime support — we partner with you at every step.' },
];

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-navy-800 section-padding">
        <div className="container-wide">
          <div className="w-12 h-0.5 bg-brass-500 mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            About ARTITECT MACHINERY
          </h1>
          <p className="mt-4 text-warm-200 text-lg max-w-2xl leading-relaxed">
            Four decades of engineering excellence in sheet metal fabrication
            machinery.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-warm-100">
        <div className="container-wide max-w-3xl">
          <div className="w-12 h-0.5 bg-brass-500 mb-6" />
          <h2 className="font-display text-3xl font-bold text-navy-800">
            Our Story
          </h2>
          <div className="mt-6 space-y-4 text-navy-700 leading-relaxed">
            <p>
              ARTITECT MACHINERY was founded in 1985 in Chicago, Illinois, with
              a singular mission: to build the most reliable and precise sheet
              metal folding machines in the world.
            </p>
            <p>
              What began as a small machine shop has grown into a global leader
              in industrial folding technology. Our double folding machines,
              sheet metal folders, and metal folding machines are trusted by
              manufacturers across automotive, aerospace, HVAC, and
              architectural metalwork industries.
            </p>
            <p>
              Today, our 120,000 sq ft facility combines old-world craftsmanship
              with state-of-the-art CNC machining, laser cutting, and automated
              assembly to produce machines that set the standard for the
              industry.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-4 border border-warm-200 rounded-sm bg-white">
                <div className="font-display text-2xl md:text-3xl font-bold text-brass-600">
                  {s.value}
                </div>
                <div className="text-sm text-navy-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="w-12 h-0.5 bg-brass-500 mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-800">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-navy-800 text-brass-400">
                  <v.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800">{v.title}</h3>
                  <p className="mt-1 text-navy-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-800 text-center">
        <div className="container-wide max-w-2xl">
          <div className="w-12 h-0.5 bg-brass-500 mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Let&apos;s Build Something Together
          </h2>
          <p className="mt-4 text-warm-200 text-lg leading-relaxed">
            Whether you need a standard machine or a fully custom solution,
            our team is ready to help.
          </p>
          <Link to="/contact" className="btn-brass text-base mt-8 inline-flex">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
