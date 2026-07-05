const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-mist/80 bg-velmora-panel/60">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-5 py-3 text-center text-[0.7rem] font-medium uppercase tracking-velmora text-velmora-muted sm:px-8 lg:gap-x-6 lg:px-10">
        {trustItems.map((item, index) => (
          <div key={item} className="flex items-center gap-4 lg:gap-6">
            <span>{item}</span>
            {index < trustItems.length - 1 ? (
              <span className="hidden h-3 w-px bg-velmora-mist lg:block" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
