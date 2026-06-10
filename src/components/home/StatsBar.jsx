import { stats } from '@/data/content';

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-[#EEF1F6]">
      <div className="container-x py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-3xl md:text-4xl font-extrabold text-[#0B2545] tracking-tight">{s.value}</p>
              <p className="text-sm text-[#6B7A90] mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
