export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-32 text-brand-ink md:px-8 md:pb-24 lg:pb-28">
      <p className="text-xs uppercase tracking-[0.32em] text-brand-mist">About Velmora</p>
      <h1 className="mt-4 font-display text-5xl text-brand-ink md:text-6xl">
        Quiet luxury for the everyday collector
      </h1>
      <div className="mt-8 grid gap-8 rounded-[2rem] border border-brand-line bg-brand-surface p-8 shadow-soft md:grid-cols-2 md:p-10">
        <p className="text-sm leading-8 text-brand-mist">
          Velmora Fine Jewelry creates premium-but-accessible demi-fine pieces for women who want a polished finishing touch without waiting for a special occasion. Our design language is clean, warm, and wearable, with silhouettes that layer easily and gift beautifully.
        </p>
        <p className="text-sm leading-8 text-brand-mist">
          We focus on polished gold tones, gentle sparkle, and comfortable everyday wear. Every order arrives in considered packaging to make self-purchase feel special and gifting feel effortless.
        </p>
      </div>
    </main>
  )
}
