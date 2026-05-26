import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const moldTypes = [
  {
    name: 'Plastic Injection Molds',
    desc: 'The most common mold type for mass-producing plastic parts. Suitable for consumer products, electronics housings, automotive components, and more. Available in single-cavity and multi-cavity configurations.',
    industries: ['Consumer Products', 'Electronics', 'Automotive', 'Household'],
    materials: ['ABS', 'PP', 'PC', 'Nylon', 'POM', 'TPU'],
  },
  {
    name: 'Die Casting Molds',
    desc: 'Used for producing metal parts with high dimensional accuracy. Ideal for aluminum, zinc, and magnesium alloy components in automotive, electronics, and industrial applications.',
    industries: ['Automotive', 'Electronics', 'Industrial'],
    materials: ['Aluminum', 'Zinc', 'Magnesium'],
  },
  {
    name: 'Silicone Molds',
    desc: 'Flexible molds used for producing silicone rubber parts. Common in medical devices, kitchenware, baby products, and wearable accessories.',
    industries: ['Medical', 'Kitchenware', 'Baby Products', 'Wearables'],
    materials: ['LSR', 'HTV Silicone'],
  },
  {
    name: 'Rubber Molds',
    desc: 'Used for compression or transfer molding of rubber components. Suitable for seals, gaskets, grips, and industrial rubber parts.',
    industries: ['Industrial', 'Automotive', 'Consumer'],
    materials: ['EPDM', 'NBR', 'NR', 'SBR'],
  },
  {
    name: 'Stamping Molds',
    desc: 'Metal stamping dies used for cutting, bending, and forming sheet metal parts. Common in electronics, automotive, and hardware manufacturing.',
    industries: ['Electronics', 'Automotive', 'Hardware'],
    materials: ['Steel', 'Aluminum', 'Copper'],
  },
  {
    name: 'Compression Molds',
    desc: 'Used for thermoset plastics and rubber. Material is placed directly into the mold cavity and compressed under heat and pressure.',
    industries: ['Electrical', 'Automotive', 'Industrial'],
    materials: ['BMC', 'SMC', 'Rubber'],
  },
  {
    name: 'Blow Molds',
    desc: 'Used for producing hollow plastic parts such as bottles, containers, and tanks. Available in extrusion blow molding and injection blow molding types.',
    industries: ['Packaging', 'Consumer', 'Industrial'],
    materials: ['HDPE', 'PET', 'PP', 'PVC'],
  },
  {
    name: 'Phone Case Molds',
    desc: 'Specialized injection molds for smartphone cases and accessories. Supports complex surface textures, multi-material overmolding, and tight tolerances for precise device fit.',
    industries: ['Consumer Electronics', 'Accessories'],
    materials: ['TPU', 'PC', 'ABS', 'PC+ABS'],
  },
  {
    name: 'Automotive Molds',
    desc: 'Large and precision molds for interior and exterior automotive components. Includes bumpers, dashboards, door panels, lighting housings, and under-hood parts.',
    industries: ['Automotive', 'EV', 'Commercial Vehicles'],
    materials: ['PP', 'ABS', 'PC', 'Nylon', 'Aluminum'],
  },
];

export default function MoldTypes() {
  return (
    <div>
      {/* Hero */}
      <section style={{background: 'linear-gradient(135deg, #1B4F8A 0%, #163F6E 100%)'}} className="text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">Mold Types</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Mold Types We Source &amp; Support
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              We cover a wide range of mold types across industries. Whether you need plastic injection, die casting, silicone, rubber, or specialized molds, we can help you find the right factory and manage the project.
            </p>
          </div>
        </div>
      </section>

      {/* Mold Type Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {moldTypes.map(({ name, desc, industries, materials }) => (
              <div key={name} className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:shadow-md transition-shadow">
                <h2 className="text-[#1A2332] font-bold text-xl mb-3">{name}</h2>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="text-xs font-semibold text-[#4A5568] uppercase tracking-wide">Industries</span>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      {industries.map((ind) => (
                        <span key={ind} className="bg-[#1B4F8A]/10 text-[#1B4F8A] text-xs font-medium px-2.5 py-1 rounded-full">{ind}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#4A5568] uppercase tracking-wide">Common Materials</span>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      {materials.map((mat) => (
                        <span key={mat} className="bg-[#E87722]/10 text-[#E87722] text-xs font-medium px-2.5 py-1 rounded-full">{mat}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-12 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h3 className="text-[#1A2332] font-bold text-xl mb-3">Don't See Your Mold Type?</h3>
          <p className="text-[#4A5568] mb-6 max-w-xl mx-auto">
            We work with a broad network of factories across China. If your mold type isn't listed here, contact us and we'll assess whether we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#E87722] hover:bg-[#C9651A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Ask About Your Mold Type <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
