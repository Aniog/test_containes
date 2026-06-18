import { ClipboardList, Palette, Truck, PartyPopper } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Choose Your Cake',
    desc: 'Browse our menu or describe your dream cake. Pick flavors, size, and design style.',
  },
  {
    icon: Palette,
    step: '02',
    title: 'We Design It',
    desc: 'Our bakers craft a personalized design sketch for your approval before baking begins.',
  },
  {
    icon: Truck,
    step: '03',
    title: 'Baked Fresh',
    desc: 'Your cake is baked fresh on the day of delivery using only the finest ingredients.',
  },
  {
    icon: PartyPopper,
    step: '04',
    title: 'Delivered to You',
    desc: 'We deliver right to your door, perfectly packaged and ready to impress.',
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 px-4 md:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <span className="inline-block bg-[#fce4ec] text-[#c2185b] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          The Process
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#2d1b0e] mb-4">
          How It Works
        </h2>
        <p className="text-[#9e7b6b] max-w-xl mx-auto leading-relaxed">
          Ordering your perfect cake is simple. From first click to first bite, we handle everything.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] right-[-calc(50%-2.5rem)] h-px bg-[#f0ddd4] z-0" />
              )}
              <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#fce4ec] mb-5 group-hover:bg-[#c2185b] transition-colors">
                <Icon className="w-8 h-8 text-[#c2185b] group-hover:text-white transition-colors" />
              </div>
              <span className="block text-xs font-bold text-[#c2185b] uppercase tracking-widest mb-2">
                Step {step.step}
              </span>
              <h3 className="font-playfair text-lg font-semibold text-[#2d1b0e] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#9e7b6b] leading-relaxed">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default HowItWorks;
