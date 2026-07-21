const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

const TrustBar = () => {
  return (
    <section className="border-y border-white/10 bg-noir text-ivory">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 text-center text-[11px] uppercase tracking-brand text-ivory/72 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-10">
        {trustItems.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
