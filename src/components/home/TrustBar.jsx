const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

const TrustBar = () => {
  return (
    <div className="border-y border-velmora-mist/20 bg-white/60">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-3 px-5 py-4 text-center text-[11px] uppercase tracking-[0.32em] text-velmora-ink sm:px-8 lg:px-10">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-5">
            <span>{item}</span>
            {index < items.length - 1 ? (
              <span className="hidden h-3 w-px bg-velmora-mist/40 sm:block" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustBar
