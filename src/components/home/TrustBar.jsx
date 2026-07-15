const promises = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-linen bg-velmora-pearl text-velmora-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 text-center md:grid-cols-4 md:px-8">
        {promises.map((promise) => (
          <p key={promise} className="py-4 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-velmora-bronze md:text-xs">
            {promise}
          </p>
        ))}
      </div>
    </section>
  )
}
