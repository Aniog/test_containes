const messages = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-line bg-velmora-champagne/65 text-velmora-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.18em] sm:px-8 md:grid-cols-4 md:tracking-[0.24em]">
        {messages.map((message) => (
          <div key={message} className="px-3 py-2 md:border-r md:border-velmora-line/70 md:last:border-r-0">
            {message}
          </div>
        ))}
      </div>
    </section>
  )
}
