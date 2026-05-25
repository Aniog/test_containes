const gearItems = [
  {
    category: 'Protection',
    items: [
      { name: 'Climbing Helmet', desc: 'Protects against rockfall and impact. Non-negotiable on any technical route.' },
      { name: 'Harness', desc: 'Your connection to the rope system. Must fit snugly and be rated for climbing loads.' },
      { name: 'Crampons', desc: 'Steel spikes that attach to boots for traction on ice and hard snow.' },
    ],
  },
  {
    category: 'Navigation & Tools',
    items: [
      { name: 'Ice Axe', desc: 'Essential for self-arrest on steep snow slopes and for cutting steps in ice.' },
      { name: 'GPS & Compass', desc: 'Navigation tools for whiteout conditions and complex terrain.' },
      { name: 'Altimeter Watch', desc: 'Tracks elevation gain and helps predict weather changes via pressure readings.' },
    ],
  },
  {
    category: 'Clothing & Shelter',
    items: [
      { name: 'Down Jacket', desc: 'High-altitude insulation. Look for 800+ fill power for the best warmth-to-weight ratio.' },
      { name: 'Layering System', desc: 'Base, mid, and shell layers that work together to manage moisture and temperature.' },
      { name: 'Bivouac Sack', desc: 'Emergency shelter that can save your life if you\'re caught out overnight.' },
    ],
  },
];

const Gear = () => (
  <section id="gear" className="py-20 md:py-28 px-6 bg-slate-900 border-t border-slate-800">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block bg-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-sky-500/30">
          Essential Kit
        </span>
        <h2 className="font-bold text-3xl md:text-4xl text-white mb-4">
          Gear That Keeps You Safe
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
          The right equipment is the difference between a successful summit and a dangerous situation.
          Never compromise on quality.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {gearItems.map((group) => (
          <div key={group.category} className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
            <h3 className="font-bold text-sky-400 text-xs uppercase tracking-widest mb-5 pb-3 border-b border-slate-700">
              {group.category}
            </h3>
            <ul className="space-y-5">
              {group.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                    <div>
                      <p className="font-semibold text-white text-sm mb-1">{item.name}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gear;
