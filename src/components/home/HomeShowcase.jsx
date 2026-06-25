export default function HomeShowcase() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.3em] text-brass font-medium">
            The Double Folder Principle
          </p>
          <h2
            id="home-showcase-title"
            className="mt-4 font-display text-4xl md:text-5xl tracking-tight text-ink leading-tight"
          >
            One sheet. Two directions. Zero re-clamping.
          </h2>
          <p
            id="home-showcase-desc"
            className="mt-6 text-graphite leading-relaxed"
          >
            A double folder uses two folding beams — one above the sheet, one
            below — so operators can bend up and down in a single setup. The
            result is dramatically reduced cycle times on complex parts like
            architectural panels, enclosures, and HVAC sections.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              {
                stat: "−45%",
                label: "Average cycle-time reduction on multi-bend parts",
              },
              {
                stat: "1 setup",
                label: "Up and down bends performed without flipping the sheet",
              },
              {
                stat: "±0.05 mm",
                label: "Repeatability backed by servo-driven back gauges",
              },
            ].map((item) => (
              <li key={item.label} className="flex gap-6">
                <div className="font-display text-3xl text-brass min-w-[5rem]">
                  {item.stat}
                </div>
                <p className="text-graphite leading-relaxed pt-1">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 border border-brass hidden md:block" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-ink hidden md:block" />
          <div className="relative aspect-[4/5] bg-mist overflow-hidden rounded-sm">
            <img
              alt="Double folder bending sheet metal"
              data-strk-img-id="home-showcase-img-b6e3d2"
              data-strk-img="[home-showcase-desc] [home-showcase-title] double folder bending metal sheet close up"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
