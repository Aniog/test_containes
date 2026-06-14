import React from 'react';
import { Factory, Users, Globe, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '25+' },
    { label: 'Countries Served', value: '40+' },
    { label: 'Machines Installed', value: '3,500+' },
    { label: 'Patents Held', value: '18' },
  ];

  const values = [
    {
      icon: Factory,
      title: 'Manufacturing Excellence',
      description:
        'Every machine is built in our ISO-certified facility with rigorous quality checks at every stage.',
    },
    {
      icon: Users,
      title: 'Customer Partnership',
      description:
        'We work closely with fabricators to understand real-world challenges and deliver practical solutions.',
    },
    {
      icon: Globe,
      title: 'Global Support',
      description:
        'With distributors and service partners across continents, we keep your equipment running.',
    },
    {
      icon: Award,
      title: 'Innovation Driven',
      description:
        'Continuous R&D investment keeps our folding machines at the forefront of the industry.',
    },
  ];

  return (
    <div>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              About Us
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Precision. Performance. Partnership.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              ARTITECT MACHINERY was founded with a clear mission: to build the most reliable
              and precise sheet metal folding machines in the world. Today, we serve
              manufacturers across more than 40 countries.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Our Story</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Started by mechanical engineers with decades of sheet metal fabrication
                experience, ARTITECT MACHINERY identified a gap in the market for folding
                machines that combined industrial durability with user-friendly operation.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Today, our double folding machines, sheet metal folders, and metal folding
                systems are trusted by OEMs, job shops, and tier-one suppliers worldwide.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">What Sets Us Apart</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We don’t just sell machines. We deliver complete folding solutions, from
                application engineering and installation to operator training and lifecycle
                support.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Our team works directly with production managers to ensure every system
                integrates smoothly into existing workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <item.icon className="h-8 w-8 text-slate-900" />
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
