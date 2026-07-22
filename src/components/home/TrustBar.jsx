const messages = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-b border-velmora-mist bg-velmora-porcelain text-velmora-espresso">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-4 text-center text-[0.68rem] font-semibold uppercase tracking-luxury sm:px-8 md:justify-between">
        {messages.map((message, index) => (
          <div key={message} className="flex items-center gap-6">
            <span>{message}</span>
            {index < messages.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-velmora-champagne md:block" />}
          </div>
        ))}
      </div>
    </section>
  )
}
