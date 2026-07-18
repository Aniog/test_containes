const messages = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-line bg-velmora-porcelain text-velmora-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-velmora-line px-5 text-center sm:px-8 md:grid-cols-4 md:divide-y-0 lg:px-10">
        {messages.map((message) => (
          <p key={message} className="py-4 text-[11px] font-bold uppercase tracking-luxe text-velmora-taupe md:text-xs">
            {message}
          </p>
        ))}
      </div>
    </section>
  )
}
