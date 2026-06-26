import { industries } from "@/data/content";

export default function Industries() {
  return (
    <section id="industries" className="bg-canvas">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C77B3F]">
              Industries
            </p>
            <h2
              id="industries-title"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E1726] leading-[1.1]"
            >
              Trusted across fabrication, construction, and clean energy.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-lg leading-relaxed text-[#3D4A5C]">
              From HVAC ductwork to architectural cladding and electric vehicle
              battery enclosures, ARTITECT machines fold parts that go into
              products people use every day.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <article
              key={ind.id}
              className="group relative overflow-hidden rounded-xl border border-[#E5E7EB] bg-white hover:border-[#1B3A6B] transition-colors"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-grid-light"
                  data-strk-bg-id={`industry-${ind.id}-bg-2e7c4d`}
                  data-strk-bg={`[${ind.id}-desc] [${ind.id}-name] industrial metal fabrication factory`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="900"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726]/70 via-transparent to-transparent" />
              </div>

              <div className="p-6 md:p-7">
                <h3
                  id={`${ind.id}-name`}
                  className="text-lg md:text-xl font-semibold text-[#0E1726] leading-snug group-hover:text-[#1B3A6B] transition-colors"
                >
                  {ind.name}
                </h3>
                <p
                  id={`${ind.id}-desc`}
                  className="mt-2 text-sm leading-relaxed text-[#3D4A5C]"
                >
                  {ind.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}