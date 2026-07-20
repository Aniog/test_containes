const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <section className="bg-espresso text-ivory border-y border-ivory/10">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between divide-y md:divide-y-0 md:divide-x divide-ivory/10 py-4">
          {items.map((item) => (
            <div
              key={item}
              className="flex-1 text-center py-2 md:py-0 md:px-4 text-[11px] uppercase tracking-widest2 text-ivory/80"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
