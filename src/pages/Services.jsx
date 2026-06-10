import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import PageHero from '@/components/shared/PageHero';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icons';
import InquiryForm from '@/components/shared/InquiryForm';
import CtaBanner from '@/components/shared/CtaBanner';
import { services } from '@/data/content';

const iconMap = {
  search: Icon.Search,
  'badge-check': Icon.BadgeCheck,
  'clipboard-check': Icon.ClipboardCheck,
  'trending-up': Icon.TrendingUp,
  ship: Icon.Ship,
  package: Icon.Package,
};

export default function Services() {
  const imgRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, imgRef.current);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six core services that cover the full China sourcing journey"
        subtitle="We can be your factory-finder, your QC team, your shipping desk — or all three at once. Every service is run by an in-region project manager who reports to you in English."
        bgId="services-bg-1f4e7a"
        bgQuery="[services-hero-subtitle] [services-hero-title]"
      >
        <span id="services-hero-title" className="sr-only">Six core services</span>
        <span id="services-hero-subtitle" className="sr-only">Sourcing, verification, QC, production, shipping</span>
      </PageHero>

      <section ref={imgRef} className="section">
        <div className="container-x space-y-12">
          {services.map((s, i) => {
            const IconCmp = iconMap[s.icon] || Icon.Search;
            const isReverse = i % 2 === 1;
            return (
              <div
                key={s.id}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className={`lg:col-span-5 ${isReverse ? 'lg:order-2' : ''}`}>
                  <div className="rounded-2xl overflow-hidden border border-[#DDE2EC]">
                    <img
                      alt={s.title}
                      className="w-full h-72 md:h-80 object-cover"
                      data-strk-img-id={s.imageId}
                      data-strk-img={s.image}
                      data-strk-img-ratio="3x2"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-7 ${isReverse ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8743B] mb-3">
                    <span className="w-6 h-px bg-[#E8743B]"></span>
                    {`Service 0${i + 1}`}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1A2230] leading-snug flex items-center gap-3">
                    <span className="w-10 h-10 rounded-md bg-[#EEF1F6] text-[#0B2545] flex items-center justify-center flex-shrink-0">
                      <IconCmp className="w-5 h-5" strokeWidth={2} />
                    </span>
                    {s.title}
                  </h2>
                  <p className="mt-4 text-base text-[#3D4A5C] leading-relaxed">{s.summary}</p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                    {s.deliverables.map((d, di) => (
                      <div key={di} className="flex items-start gap-2.5">
                        <Icon.CheckCircle2 className="w-4 h-4 mt-0.5 text-[#1E8E5A] flex-shrink-0" />
                        <span className="text-sm text-[#3D4A5C] leading-snug">{d}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-md bg-[#F8F9FB] border-l-4 border-[#E8743B]">
                    <p className="text-[11px] uppercase tracking-wider text-[#6B7A90] font-bold mb-1">Deliverable</p>
                    <p className="text-sm text-[#1A2230] font-semibold">{s.deliverable}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionHeader
                align="left"
                eyebrow="Not sure what you need?"
                title="Tell us your situation, and we'll suggest a service plan"
                subtitle="Most buyers start with a free sourcing inquiry. We reply within 1 business day with a recommendation, a shortlist of suppliers, and a clear cost."
              />
              <ul className="mt-6 space-y-3 text-sm text-[#3D4A5C]">
                {['Free supplier shortlist for most categories', 'No commitment to place an order', 'Same reply SLA for small and large buyers', 'A real human project manager, not a chatbot'].map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Icon.CheckCircle2 className="w-4 h-4 mt-0.5 text-[#1E8E5A] flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="card p-6 md:p-8">
                <InquiryForm idPrefix="services-inquiry" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need more than one service? Combine them and save."
        subtitle="Many clients bundle sourcing + QC + shipping. Ask us about project-based pricing in your inquiry."
      />
    </>
  );
}
