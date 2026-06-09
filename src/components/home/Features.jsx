import { Shield, Cpu, Wrench, Globe, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'CNC Precision Control',
    description:
      'Advanced CNC systems deliver repeatable accuracy to ±0.1°, ensuring every fold meets exact specifications across thousands of cycles.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Heavy-duty welded steel frames and precision-ground components ensure decades of reliable operation in demanding industrial environments.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description:
      'Designed for minimal downtime. Accessible service points, modular components, and comprehensive documentation keep your machine running.',
  },
  {
    icon: Globe,
    title: 'Global Support Network',
    description:
      'With service partners in 40+ countries, Artitect provides fast on-site support, spare parts, and remote diagnostics wherever you operate.',
  },
  {
    icon: Award,
    title: 'CE & ISO Certified',
    description:
      'All Artitect machines meet CE safety standards and are manufactured under ISO 9001 quality management systems for guaranteed compliance.',
  },
  {
    icon: Clock,
    title: 'Fast Lead Times',
    description:
      'Streamlined manufacturing and a well-stocked parts inventory mean shorter delivery times and faster commissioning at your facility.',
  },
];

const industries = [
  { name: 'HVAC & Ventilation', icon: '🌬️' },
  { name: 'Roofing & Cladding', icon: '🏗️' },
  { name: 'Automotive', icon: '🚗' },
  { name: 'Aerospace', icon: '✈️' },
  { name: 'Construction', icon: '🏢' },
  { name: 'Electrical Enclosures', icon: '⚡' },
];

export default function Features() {
  return (
    <>
      {/* Why Artitect */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#C8922A]" />
                <span className="text-[#C8922A] text-xs font-heading font-semibold uppercase tracking-[0.25em]">
                  Why Choose Us
                </span>
              </div>
              <h2 className="font-heading font-bold text-[#0D1B2A] text-3xl md:text-4xl mb-6 leading-tight">
                Engineering Excellence in Every Machine
              </h2>
              <p className="text-[#4A5568] text-lg leading-relaxed mb-8">
                For over 25 years, Artitect Machinery has been the trusted partner for metal fabricators worldwide. Our machines combine German engineering principles with cutting-edge technology to deliver unmatched performance.
              </p>

              {/* Highlight bar */}
              <div className="bg-[#F4F6F9] rounded-xl p-6 border-l-4 border-[#C8922A]">
                <p className="text-[#0D1B2A] font-heading font-semibold text-base mb-1">
                  "Precision is not a feature — it's our standard."
                </p>
                <p className="text-[#4A5568] text-sm">— Artitect Engineering Team</p>
              </div>
            </div>

            {/* Right: Feature grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="group p-5 rounded-xl border border-gray-100 hover:border-[#1E6FA5]/30 hover:shadow-md transition-all duration-200 bg-white"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#F4F6F9] group-hover:bg-[#1E6FA5]/10 flex items-center justify-center mb-3 transition-colors">
                      <Icon className="w-5 h-5 text-[#1E6FA5]" />
                    </div>
                    <h3 className="font-heading font-semibold text-[#0D1B2A] text-sm mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-[#4A5568] text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="py-20 bg-[#0D1B2A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C8922A]" />
              <span className="text-[#C8922A] text-xs font-heading font-semibold uppercase tracking-[0.25em]">
                Industries We Serve
              </span>
              <div className="h-px w-10 bg-[#C8922A]" />
            </div>
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl">
              Trusted Across Industries
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C8922A]/40 transition-all duration-200 cursor-default"
              >
                <span className="text-3xl">{industry.icon}</span>
                <span className="text-gray-300 text-xs font-medium text-center leading-tight">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '1999', label: 'Founded', sub: 'Over 25 years of expertise' },
                { value: '500+', label: 'Machines Delivered', sub: 'Worldwide installations' },
                { value: '40+', label: 'Countries', sub: 'Global service network' },
                { value: '99%', label: 'Uptime Rate', sub: 'Industry-leading reliability' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-1"
                >
                  <span className="font-heading font-bold text-[#1E6FA5] text-3xl">{stat.value}</span>
                  <span className="font-heading font-semibold text-[#0D1B2A] text-sm">{stat.label}</span>
                  <span className="text-[#4A5568] text-xs">{stat.sub}</span>
                </div>
              ))}
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-[#C8922A]" />
                <span className="text-[#C8922A] text-xs font-heading font-semibold uppercase tracking-[0.25em]">
                  Our Story
                </span>
              </div>
              <h2 className="font-heading font-bold text-[#0D1B2A] text-3xl md:text-4xl mb-6 leading-tight">
                Crafting the Future of Metal Fabrication
              </h2>
              <div className="flex flex-col gap-4 text-[#4A5568] leading-relaxed">
                <p>
                  Founded in 1999, Artitect Machinery was born from a simple belief: that sheet metal fabricators deserve machines that are as precise as their craft. We set out to build folding machines that combine industrial strength with intuitive operation.
                </p>
                <p>
                  Today, our double folding machines, metal folders, and sheet metal folding systems are trusted by fabricators in over 40 countries — from small workshops to large-scale manufacturing plants.
                </p>
                <p>
                  Every Artitect machine is designed, engineered, and quality-tested in-house, ensuring that when it arrives at your facility, it's ready to perform from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
