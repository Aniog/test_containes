import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, Package } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';
import Button from '@/components/ui/Button';

const trustBadges = [
  { icon: Globe2, text: '40+ countries served' },
  { icon: ShieldCheck, text: 'No kickbacks from suppliers' },
  { icon: Package, text: 'Free sample consolidation' },
];

export default function Hero() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0B2545] text-white">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-c1d2e3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/97 via-[#0B2545]/92 to-[#0B2545]/70" />

      <div className="relative container-x py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8743B]"></span>
              China-based · English-speaking project managers
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-white">
              China Sourcing Agent <br className="hidden md:block" />
              <span className="text-[#F0B68A]">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="mt-5 text-base md:text-lg lg:text-xl text-[#C7D6EE] leading-relaxed max-w-2xl">
              We find suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can source from China with the same confidence as sourcing locally.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button to="/contact" variant="primary" size="lg" showArrow>
                Get a Free Sourcing Quote
              </Button>
              <Button to="/services" variant="outlineLight" size="lg">
                See Our Services
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {trustBadges.map(({ icon: IconCmp, text }, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[#D7E1F2]">
                  <CheckCircle2 className="w-4 h-4 text-[#6FC18C] flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#E8743B]/15 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#9DB1D2]">Live sourcing workflow</span>
                  <span className="w-2 h-2 rounded-full bg-[#6FC18C] animate-pulse"></span>
                </div>
                <div className="space-y-3.5">
                  {[
                    { step: '01', title: 'Requirement intake', sub: 'Product, MOQ, target price', state: 'done' },
                    { step: '02', title: 'Supplier shortlist', sub: '3–5 pre-vetted factories', state: 'done' },
                    { step: '03', title: 'Sample evaluation', sub: 'Shipped to your office', state: 'active' },
                    { step: '04', title: 'PO placed', sub: 'Deposit & lead time confirmed', state: 'todo' },
                    { step: '05', title: 'PSI & freight', sub: 'Inspection before cargo leaves', state: 'todo' },
                  ].map((row) => (
                    <div key={row.step} className="flex items-center gap-3 p-2.5 rounded-md bg-white/5">
                      <span
                        className={`w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold ${
                          row.state === 'done'
                            ? 'bg-[#1E8E5A] text-white'
                            : row.state === 'active'
                            ? 'bg-[#E8743B] text-white'
                            : 'bg-white/10 text-[#9DB1D2]'
                        }`}
                      >
                        {row.step}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white leading-tight">{row.title}</p>
                        <p className="text-xs text-[#9DB1D2] leading-tight">{row.sub}</p>
                      </div>
                      {row.state === 'done' && <span className="text-[#6FC18C] text-xs font-semibold">Done</span>}
                      {row.state === 'active' && <span className="text-[#F0B68A] text-xs font-semibold">In progress</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
