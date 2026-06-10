import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icons';
import { problems } from '@/data/content';

const iconMap = {
  'shield-alert': Icon.ShieldAlert,
  'scan-search': Icon.ScanSearch,
  'calendar-clock': Icon.CalendarClock,
  'message-square-warning': Icon.MessageSquareWarning,
  'file-text': Icon.FileText,
  boxes: Icon.Boxes,
};

export default function ProblemsSection() {
  return (
    <section id="problems" className="section section-alt">
      <div className="container-x">
        <SectionHeader
          eyebrow="Problems we solve"
          title="The 6 most common things that go wrong in China sourcing — and how we fix them"
          subtitle="We hear the same frustrations from new clients every week. Here is how our service is built around preventing them."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((p, i) => {
            const IconCmp = iconMap[p.icon] || Icon.ShieldAlert;
            return (
              <div key={i} className="card p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md bg-[#FBE9DE] text-[#E8743B] flex items-center justify-center flex-shrink-0">
                    <IconCmp className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[16px] font-bold text-[#1A2230] leading-snug">
                      <span className="text-[#C03B2C]">Problem: </span>
                      {p.problem}
                    </h3>
                    <p className="mt-3 text-sm text-[#3D4A5C] leading-relaxed">
                      <span className="font-semibold text-[#0B2545]">How we fix it: </span>
                      {p.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
