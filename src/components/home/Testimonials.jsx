const testimonials = [
  {
    quote:
      "I've tried dozens of bottled waters and nothing compares to AquaPure. You can actually taste the difference — it's incredibly smooth.",
    name: 'Sarah M.',
    role: 'Nutritionist',
    initials: 'SM',
  },
  {
    quote:
      "As an athlete, hydration is everything. AquaPure's mineral balance keeps me performing at my best. It's the only water I trust.",
    name: 'James R.',
    role: 'Marathon Runner',
    initials: 'JR',
  },
  {
    quote:
      "We switched our entire restaurant to AquaPure. Our guests notice the quality immediately. It elevates every dish and drink we serve.",
    name: 'Elena V.',
    role: 'Restaurant Owner',
    initials: 'EV',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-sky-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cyan-600 text-sm uppercase tracking-widest font-semibold mb-3">
            What People Say
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved by Those Who Know Water
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, name, role, initials }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-sky-100 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed flex-1 mb-6 italic">"{quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{name}</p>
                  <p className="text-slate-500 text-xs">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
