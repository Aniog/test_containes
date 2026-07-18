const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-[var(--color-line-dark)] bg-[rgba(245,237,230,0.05)]">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 py-4 text-center text-xs uppercase tracking-[0.28em] text-[var(--color-muted-dark)] md:grid-cols-4 md:px-8">
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  )
}
