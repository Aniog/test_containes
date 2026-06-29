const AboutPage = () => {
  return (
    <main className="px-5 pb-24 pt-32 md:px-8 lg:px-12">
      <section className="mx-auto max-w-4xl border border-[var(--color-border-subtle)] bg-[var(--color-card)] px-6 py-12 shadow-[var(--shadow-soft)] md:px-10">
        <p className="text-xs uppercase tracking-[0.38em] text-[var(--color-accent)]">About Velmora</p>
        <h1 className="mt-4 font-serif-display text-5xl leading-none text-[var(--color-text-primary)]">
          Premium demi-fine jewelry, designed for real daily rituals.
        </h1>
        <p className="mt-6 text-base leading-8 text-[var(--color-text-secondary)]">
          Velmora Fine Jewelry creates warm, giftable gold pieces that feel polished yet accessible. This storefront is structured so imagery, product details, and checkout logic can be extended easily as the brand grows.
        </p>
      </section>
    </main>
  )
}

export default AboutPage
