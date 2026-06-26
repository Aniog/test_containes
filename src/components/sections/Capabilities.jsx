import { capabilities } from "@/data/content";

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-white border-y border-[#E5E7EB]">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C77B3F]">
              Capabilities
            </p>
            <h2
              id="capabilities-title"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E1726] leading-[1.1]"
            >
              The details that make a great folding machine.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-[#3D4A5C]">
              Every ARTITECT machine is built on the same foundation: heavy steel
              frames, multi-axis CNC control, universal tooling, and the kind of
              operator-first ergonomics that turn precision into habit.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E7EB] border border-[#E5E7EB]">
          {capabilities.map((c, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={c.id}
                className="group relative bg-white p-8 md:p-10 transition-colors hover:bg-[#F4F5F7]"
              >
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#C77B3F]">
                  {num}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-[#0E1726] leading-snug">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3D4A5C]">
                  {c.description}
                </p>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#1B3A6B] group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}