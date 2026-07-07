const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="border-b border-mist/70 bg-porcelain">
      <div className="container-shell flex flex-wrap items-center justify-center gap-x-6 gap-y-3 py-4 text-center text-xs font-semibold uppercase tracking-widest text-espresso/70">
        {trustItems.map((item, index) => (
          <div key={item} className="flex items-center gap-6">
            <span>{item}</span>
            {index < trustItems.length - 1 ? <span className="hidden text-mist sm:block">·</span> : null}
          </div>
        ))}
      </div>
    </section>
  )
}
