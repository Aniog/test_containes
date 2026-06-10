import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icons';
import strkImgConfig from '@/strk-img-config.json';
import { trustPoints } from '@/data/content';

const iconMap = {
  'map-pin': Icon.MapPin,
  users: Icon.Users,
  handshake: Icon.Handshake,
  'clipboard-list': Icon.ClipboardList,
  receipt: Icon.Receipt,
  'globe-2': Icon.Globe2,
};

export default function TrustSection() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="section">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="relative">
              <img
                alt="SSourcing China team meeting with a Chinese factory manager to verify production capacity"
                className="rounded-2xl w-full h-[420px] object-cover"
                data-strk-img-id="trust-img-8a1c3e"
                data-strk-img="[trust-eyebrow] [trust-title] [trust-quote]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute -bottom-5 -right-3 md:-right-5 bg-white border border-[#DDE2EC] rounded-xl p-4 shadow-md max-w-[220px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon.MapPin className="w-4 h-4 text-[#E8743B]" />
                  <span className="text-xs font-bold text-[#0B2545]">In-region auditors</span>
                </div>
                <p className="text-xs text-[#6B7A90] leading-relaxed">
                  Field staff in Guangdong, Zhejiang, Jiangsu, Fujian, and Shandong.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span id="trust-eyebrow" className="eyebrow">Why buyers stay with us</span>
            <h2 id="trust-title" className="mt-3 text-3xl md:text-4xl font-bold text-[#1A2230] leading-tight">
              Six things we do that most sourcing agents don't
            </h2>
            <p id="trust-quote" className="mt-4 text-base text-[#3D4A5C] leading-relaxed">
              We work on long-term retainers, not one-off commissions. That shapes everything about how we operate — from how we pick suppliers, to how we report, to how we get paid.
            </p>

            <ul className="mt-8 space-y-5">
              {trustPoints.map((tp, i) => {
                const IconCmp = iconMap[tp.icon] || Icon.MapPin;
                return (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-[#EEF1F6] text-[#0B2545] flex items-center justify-center flex-shrink-0">
                      <IconCmp className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-bold text-[#1A2230]">{tp.title}</h3>
                      <p className="mt-1 text-sm text-[#3D4A5C] leading-relaxed">{tp.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
