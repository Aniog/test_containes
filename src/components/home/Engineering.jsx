import { process } from "@/lib/content";

export default function Engineering() {
  return (
    <section
      id="engineering"
      className="relative bg-mist py-24 md:py-32 overflow-hidden"
    >
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <p id="engineering-eyebrow" className="eyebrow mb-4">
              How we engineer
            </p>
            <h2
              id="engineering-title"
              className="font-display text-steel-deep text-4xl md:text-5xl leading-tight"
            >
              A four-step process,
              <span className="block text-graphite/70 italic">twenty-seven years in the making.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p
              id="engineering-subtitle"
              className="text-slate2 text-base md:text-lg leading-relaxed"
            >
              From the first conversation to lifetime support, our process is
              built to remove uncertainty at every step of your investment.
            </p>
          </div>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connector line on desktop */}
          <div
            className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-bronze/40"
            aria-hidden="true"
          />
          {process.map((step) => (
            <article
              key={step.step}
              className="relative bg-white border border-mist shadow-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="grid place-items-center w-12 h-12 rounded-full bg-steel-deep text-bronze-light font-display text-lg">
                  {step.step}
                </span>
                <span className="block flex-1 h-px bg-bronze/30 lg:hidden" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl text-steel-deep mb-3">
                {step.title}
              </h3>
              <p className="text-slate2 text-[15px] leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
