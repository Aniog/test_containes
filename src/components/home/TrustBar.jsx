const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

const TrustBar = () => {
  return (
    <section className="border-y border-stone-200 bg-stone-50">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 text-center sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustItems.map((item) => (
          <p
            key={item}
            className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-stone-600"
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
