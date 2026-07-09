const trustItems = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

const TrustBar = () => {
  return (
    <section className="hairline bg-ivory">
      <div className="page-shell flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4 text-center text-xs uppercase tracking-[0.24em] text-truffle sm:text-sm">
        {trustItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
