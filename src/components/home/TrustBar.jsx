const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const TrustBar = () => {
  return (
    <section className="border-y border-velmora-ink/10 bg-velmora-parchment text-velmora-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-velmora-ink/10 px-4 text-center sm:px-6 md:grid-cols-4 md:divide-y-0 lg:px-8">
        {trustItems.map((item) => (
          <p key={item} className="py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-velmora-espresso md:text-xs">
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
