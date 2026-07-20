const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-mist bg-velmora-ivory text-velmora-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-velmora-mist px-5 text-center md:grid-cols-4 md:divide-y-0 md:px-8">
        {trustItems.map((item) => (
          <p key={item} className="py-4 text-[0.68rem] font-semibold uppercase tracking-widest text-velmora-taupe md:text-xs">
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}
