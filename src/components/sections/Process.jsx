import { processSteps } from "@/data/content";

export default function Process() {
  return (
    <section id="process" className="bg-white border-y border-[#E5E7EB]">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C77B3F]">
            Our Process
          </p>
          <h2
            id="process-title"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E1726] leading-[1.1]"
          >
            From first conversation to first fold — handled with care.
          </h2>
        </div>

        <ol className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <li
              key={step.step}
              className="relative rounded-xl border border-[#E5E7EB] bg-white p-7 md:p-8"
            >
              <span className="block text-5xl font-bold tracking-tight text-[#E8EEF5]">
                {step.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#0E1726]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3D4A5C]">
                {step.description}
              </p>
              <span className="absolute right-6 top-6 h-8 w-8 rounded-full border border-[#C77B3F]/40 flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C77B3F]" />
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-14 rounded-2xl bg-[#0E1726] p-8 md:p-12 lg:p-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Ready to engineer your next folding cell?
              </h3>
              <p className="mt-3 text-base md:text-lg text-[#D1D5DB] max-w-2xl leading-relaxed">
                Send us your part drawings, materials, and throughput targets.
                Our engineers will respond within one business day with a
                configuration and quote.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-[#C77B3F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#A86432] transition-colors"
              >
                Start a project
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Browse machines
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}