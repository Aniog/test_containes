import { useEffect, useRef } from 'react';
import { Award, Shield, Wrench, Users } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { icon: Award, value: '35+', label: 'Years of Excellence' },
  { icon: Shield, value: '12K+', label: 'Machines Delivered' },
  { icon: Wrench, value: '98%', label: 'Uptime Guarantee' },
  { icon: Users, value: '60+', label: 'Countries Served' },
];

const values = [
  {
    title: 'Precision Engineering',
    description:
      'Every ARTITECT machine is built to tolerances that exceed industry standards. Our frames are stress-relieved, our tools are hardened, and our electronics are calibrated before shipping.',
  },
  {
    title: 'Global Support Network',
    description:
      'With service partners in over 60 countries, help is never far away. We offer remote diagnostics, on-site training, and rapid spare-parts fulfillment to keep your line moving.',
  },
  {
    title: 'Continuous Innovation',
    description:
      'Our R&D team works alongside real fabricators to identify pain points and prototype solutions. The result is machinery that gets better with every generation.',
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-32 bg-[#141416]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#c9a44c] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] tracking-tight mb-4">
            Built on Trust. Engineered to Last.
          </h2>
          <p className="text-[#a0a0a8] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            For over three decades, ARTITECT MACHINERY has been the quiet force behind some of the world&apos;s most demanding metal fabrication shops.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-24">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 md:p-8 bg-[#1c1c1f] border border-[#2a2a2e] rounded-lg"
            >
              <stat.icon className="w-6 h-6 text-[#c9a44c] mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-extrabold text-[#f5f5f5] mb-1">
                {stat.value}
              </div>
              <div className="text-[#a0a0a8] text-xs md:text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#1c1c1f]">
            <img
              alt="ARTITECT factory floor"
              className="w-full h-full object-cover opacity-90"
              data-strk-bg-id="about-factory-bg-9e4d2a"
              data-strk-bg="[about-factory-desc] [about-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#141416]/60 to-transparent" />
          </div>

          <div>
            <h3 id="about-title" className="text-2xl md:text-3xl font-bold text-[#f5f5f5] tracking-tight mb-6">
              Crafted in Our Own Factory
            </h3>
            <p id="about-factory-desc" className="text-[#a0a0a8] text-sm md:text-base leading-relaxed mb-8">
              Every ARTITECT machine begins as raw steel in our Cleveland facility. We mill our own frames, machine our own cylinders, and assemble every control cabinet by hand. This vertical integration means we control quality at every step — and stand behind every machine we ship.
            </p>

            <div className="space-y-6">
              {values.map((value) => (
                <div key={value.title}>
                  <h4 className="text-[#f5f5f5] font-semibold text-sm md:text-base mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#c9a44c] rounded-full shrink-0" />
                    {value.title}
                  </h4>
                  <p className="text-[#a0a0a8] text-sm leading-relaxed pl-3.5">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
