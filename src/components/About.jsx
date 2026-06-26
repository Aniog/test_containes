import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'In-house R&D and manufacturing facility',
  'ISO 9001:2015 certified production',
  'Global distribution and support network',
  'Custom configurations for unique requirements',
  'Comprehensive operator training programs',
  '24/7 technical support and spare parts',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden">
              <img
                data-strk-img-id="about-factory-3e8b7c"
                data-strk-img="modern industrial manufacturing factory metal machinery production line clean"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT MACHINERY manufacturing facility"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Accent Block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-sm -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-100 rounded-sm -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">
              About Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mt-4 mb-6">
              Engineering Metal Fabrication's Future
            </h2>
            <p className="text-steel-600 text-lg leading-relaxed mb-6">
              Since 1994, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology. What started as a small workshop has grown into a globally recognized manufacturer of premium double folding machines and metal folders.
            </p>
            <p className="text-steel-500 leading-relaxed mb-8">
              Our commitment to precision engineering, continuous innovation, and exceptional customer service has earned us the trust of over 5,000 workshops worldwide. Every machine that leaves our facility is a testament to our dedication to quality.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-steel-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
