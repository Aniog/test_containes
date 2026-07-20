const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-sand/70 bg-velmora-ivory text-velmora-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-velmora-sand/60 px-4 text-center sm:grid-cols-4 sm:divide-y-0 sm:px-6 lg:px-8">
        {trustItems.map((item) => (
          <p key={item} className="px-3 py-4 text-[11px] font-semibold uppercase tracking-ui text-velmora-bronze sm:text-xs">
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}
