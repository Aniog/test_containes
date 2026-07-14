import { useImageLoader } from "@/hooks/useImageLoader";

export default function About() {
  const containerRef = useImageLoader();

  return (
    <div ref={containerRef} className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.22em] text-gold-600">About</p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl md:text-6xl">
          Quiet luxury, made for everyday.
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-cream-200">
            <img
              src="https://placehold.co/1000x1250/2A211B/DDB96E?text=Velmora+Atelier"
              alt="Velmora atelier"
              className="h-full w-full object-cover"
              loading="lazy"
              data-strk-img-id="about-img"
              data-strk-img="[about-title] [about-body]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2
              id="about-title"
              className="font-serif text-2xl md:text-3xl"
            >
              Designed in small batches. Worn with intention.
            </h2>
            <p id="about-body" className="mt-6 leading-relaxed text-espresso-700">
              Velmora was created for women who want jewelry that feels special
              without trying too hard. Every piece is designed in our studio,
              cast in recycled brass, and plated in thick 18k gold for a warm,
              lasting finish.
            </p>
            <p className="mt-4 leading-relaxed text-espresso-700">
              We skip the trends and focus on silhouettes that outlast seasons —
              pieces you can wear to brunch, to the office, and on your most
              important nights.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-cream-300 pt-8">
              {[
                { label: "18k Gold Plated", value: "Thick plating" },
                { label: "Hypoallergenic", value: "Nickel free" },
                { label: "Responsibly Made", value: "Small batches" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xs uppercase tracking-wider text-gold-600">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-espresso-900">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
