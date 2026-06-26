import { Globe2, Users, BadgeCheck, Languages, Clock4, FileLock2 } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader.jsx";

const POINTS = [
  {
    icon: Globe2,
    title: "On the ground in China",
    desc: "Our sourcing and QC teams are based in Shenzhen, with partner offices in Yiwu and Guangzhou — close to the factories you are sourcing from.",
  },
  {
    icon: Users,
    title: "Bilingual account managers",
    desc: "Every client works with a dedicated Mandarin / English account manager who translates, negotiates, and follows up in your time zone.",
  },
  {
    icon: BadgeCheck,
    title: "Verified, not advertised",
    desc: "We only recommend factories we have personally visited, with verified licenses, production capacity, and export history.",
  },
  {
    icon: Languages,
    title: "Transparent communication",
    desc: "Direct quotes from factories, side-by-side comparisons, and weekly photo / video updates from the production line.",
  },
  {
    icon: Clock4,
    title: "Realistic timelines",
    desc: "We confirm lead times against the factory's actual workload before you pay a deposit — and flag risks early.",
  },
  {
    icon: FileLock2,
    title: "NDA & IP protection",
    desc: "We sign NDAs with you and the factory, and we never disclose your product designs or customer information.",
  },
];

export default function TrustPoints() {
  return (
    <section id="trust" className="section bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Why SSourcing China"
          title="Built for buyers who need a partner, not a broker"
          subtitle="Six reasons overseas importers, brand owners, and procurement teams keep working with us order after order."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POINTS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#C8553D]/10 text-[#C8553D]">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-[16px] font-semibold text-[#0F172A]">{title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#475569]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}