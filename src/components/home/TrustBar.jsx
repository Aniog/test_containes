const points = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-sand bg-velmora-ivory text-velmora-espresso" aria-label="Store benefits">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-3 px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.24em] sm:px-8">
        {points.map((point, index) => (
          <div key={point} className="flex items-center gap-7">
            <span>{point}</span>
            {index < points.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-velmora-champagne sm:block" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </section>
  )
}
