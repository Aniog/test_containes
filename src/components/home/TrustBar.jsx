const claims = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const TrustBar = () => (
  <section className="border-y border-velmora-line bg-velmora-ivory text-velmora-ink" aria-label="Store benefits">
    <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-velmora-line px-5 text-center md:grid-cols-4 md:divide-y-0 lg:px-10">
      {claims.map((claim) => (
        <p key={claim} className="py-4 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-velmora-forest md:py-5">
          {claim}
        </p>
      ))}
    </div>
  </section>
)

export default TrustBar
