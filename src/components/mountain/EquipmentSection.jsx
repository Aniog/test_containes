import { useState } from 'react';
import { Package, Shield, Zap, Eye } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'clothing',
    label: 'Clothing & Layering',
    icon: Shield,
    color: 'text-sky-400',
    items: [
      {
        name: 'Down Suit',
        brand: 'Feathered Friends / Rab',
        description: 'An 8000m-rated one-piece suit filled with 900+ fill-power goose down. Essential for extreme cold above the death zone.',
        weight: '1.4 kg',
        temp: '-50°C rated',
      },
      {
        name: 'Base Layer (Merino)',
        brand: 'Icebreaker / Smartwool',
        description: 'Moisture-wicking merino wool next-to-skin layer that regulates temperature and resists odor during multi-day expeditions.',
        weight: '280 g',
        temp: 'All conditions',
      },
      {
        name: 'Hardshell Jacket',
        brand: 'Arc\'teryx / Mammut',
        description: 'Gore-Tex Pro 3-layer shell providing waterproof, windproof protection. Helmet-compatible hood and pit-zip ventilation.',
        weight: '520 g',
        temp: 'Wind & rain',
      },
      {
        name: 'High-Altitude Boots',
        brand: 'La Sportiva / Scarpa',
        description: 'Double-boot system with removable inner boot and rigid outer shell. Compatible with 12-point crampons and rated to -50°C.',
        weight: '2.1 kg/pair',
        temp: '-50°C rated',
      },
    ],
  },
  {
    id: 'technical',
    label: 'Technical Gear',
    icon: Zap,
    color: 'text-amber-400',
    items: [
      {
        name: 'Ice Axe',
        brand: 'Petzl / Black Diamond',
        description: 'A 60–70cm technical ice axe for self-arrest, step cutting, and anchoring. Curved pick for steep ice and mixed terrain.',
        weight: '380 g',
        temp: 'Ice & snow',
      },
      {
        name: '12-Point Crampons',
        brand: 'Grivel / Camp',
        description: 'Rigid steel crampons with front points for vertical ice and mixed climbing. Anti-balling plates prevent snow accumulation.',
        weight: '720 g',
        temp: 'Ice & hard snow',
      },
      {
        name: 'Ascender (Jumar)',
        brand: 'Petzl / Kong',
        description: 'Mechanical rope-gripping device for ascending fixed lines. Ergonomic handle with anti-panic function for safety.',
        weight: '175 g',
        temp: 'Fixed ropes',
      },
      {
        name: 'Harness',
        brand: 'Black Diamond / Petzl',
        description: 'Lightweight alpine harness with padded waist belt and leg loops. Gear loops for rack organization on technical routes.',
        weight: '310 g',
        temp: 'All routes',
      },
    ],
  },
  {
    id: 'survival',
    label: 'Survival & Navigation',
    icon: Eye,
    color: 'text-green-400',
    items: [
      {
        name: 'Supplemental Oxygen',
        brand: 'Poisk / Summit Oxygen',
        description: 'Pressurized oxygen cylinders used above 7,000m to combat altitude sickness. Flow rate of 2–4 L/min extends safe climbing time.',
        weight: '3.2 kg/cylinder',
        temp: 'Above 7000m',
      },
      {
        name: 'GPS Device',
        brand: 'Garmin inReach',
        description: 'Satellite communicator with two-way messaging, SOS capability, and GPS tracking. Works without cell coverage anywhere on Earth.',
        weight: '116 g',
        temp: '-20°C rated',
      },
      {
        name: 'Avalanche Beacon',
        brand: 'Mammut / Ortovox',
        description: 'Digital transceiver for avalanche rescue. Transmits and receives 457 kHz signal. Multiple burial search capability.',
        weight: '250 g',
        temp: 'All conditions',
      },
      {
        name: 'Bivy Sack',
        brand: 'OR / Rab',
        description: 'Emergency waterproof sleeping bag cover for unexpected bivouacs. Breathable Gore-Tex membrane prevents condensation buildup.',
        weight: '340 g',
        temp: 'Emergency use',
      },
    ],
  },
  {
    id: 'camp',
    label: 'Camp & Shelter',
    icon: Package,
    color: 'text-purple-400',
    items: [
      {
        name: 'High-Altitude Tent',
        brand: 'Black Diamond / Hilleberg',
        description: 'Four-season geodesic tent rated for 100+ mph winds. Double-wall construction with vestibule for gear storage.',
        weight: '2.8 kg',
        temp: 'Extreme conditions',
      },
      {
        name: 'Sleeping Bag (-40°C)',
        brand: 'Western Mountaineering / PHD',
        description: 'Expedition-grade mummy bag with 900-fill goose down. Draft collar, zipper baffle, and differential cut for maximum warmth.',
        weight: '1.6 kg',
        temp: '-40°C rated',
      },
      {
        name: 'Stove System',
        brand: 'MSR / Jetboil',
        description: 'Integrated canister stove optimized for high altitude. Pressure regulator maintains performance in cold and at altitude.',
        weight: '450 g',
        temp: 'High altitude',
      },
      {
        name: 'Headlamp',
        brand: 'Petzl Nao / Black Diamond',
        description: 'Reactive lighting headlamp with 750-lumen output. Rechargeable battery with cold-weather performance down to -20°C.',
        weight: '100 g',
        temp: '-20°C rated',
      },
    ],
  },
];

const EquipmentSection = () => {
  const [activeCategory, setActiveCategory] = useState('clothing');
  const category = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <section id="equipment" className="bg-slate-900 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Equipment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Gear That Saves Lives
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Every piece of equipment is chosen for weight, reliability, and performance in the
            most hostile environments on Earth.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {category.items.map((item) => (
            <div
              key={item.name}
              className="bg-slate-950 border border-slate-700 rounded-2xl p-5 hover:border-amber-500/50 transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-slate-800`}>
                {(() => {
                  const Icon = category.icon;
                  return <Icon className={`w-5 h-5 ${category.color}`} />;
                })()}
              </div>
              <h3 className="text-white font-semibold text-base mb-1">{item.name}</h3>
              <p className="text-amber-500/80 text-xs font-medium mb-3">{item.brand}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-lg">
                  {item.weight}
                </span>
                <span className="bg-slate-800 text-slate-300 text-xs px-2.5 py-1 rounded-lg">
                  {item.temp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
