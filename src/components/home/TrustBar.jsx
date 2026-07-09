const messages = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-amber-200 bg-amber-50 text-stone-950">
      <div className="mx-auto flex max-w-7xl snap-x gap-6 overflow-x-auto px-5 py-4 md:grid md:grid-cols-4 md:overflow-visible md:px-8">
        {messages.map((message) => (
          <div key={message} className="flex min-w-max snap-center items-center justify-center gap-6 text-center text-[0.68rem] font-bold uppercase tracking-[0.24em] text-stone-700 md:min-w-0">
            <span>{message}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
