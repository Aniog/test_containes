import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icons';
import { services } from '@/data/content';

const iconMap = {
  search: Icon.Search,
  'badge-check': Icon.BadgeCheck,
  'clipboard-check': Icon.ClipboardCheck,
  'trending-up': Icon.TrendingUp,
  ship: Icon.Ship,
  package: Icon.Package,
};

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="What we do"
          title="End-to-end sourcing, from factory search to your warehouse"
          subtitle="Six core services that cover the full journey of a China-sourced order. Use one, or use all — we adapt to your project."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const IconCmp = iconMap[s.icon] || Icon.Search;
            return (
              <article
                key={s.id}
                className="card p-6 md:p-7 flex flex-col h-full"
              >
                <div className="w-11 h-11 rounded-md bg-[#EEF1F6] text-[#0B2545] flex items-center justify-center mb-4">
                  <IconCmp className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-[17px] font-bold text-[#1A2230] leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-[#3D4A5C] leading-relaxed flex-1">{s.summary}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.deliverables.slice(0, 3).map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#3D4A5C]">
                      <Icon.CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-[#1E8E5A] flex-shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button to="/services" variant="secondary" size="md" showArrow>
            See all services in detail
          </Button>
        </div>
      </div>
    </section>
  );
}
