const AboutPage = () => {
  return (
    <main className="bg-brand-canvas px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-stone-200/80 bg-white/70 p-8 shadow-card backdrop-blur-sm sm:p-12">
        <p className="text-xs uppercase tracking-[0.35em] text-brand-gold">About Velmora</p>
        <h1 className="mt-5 font-serif text-5xl leading-none text-brand-text sm:text-6xl">
          Modern demi-fine jewelry, designed to feel quietly special.
        </h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-stone-600">
          <p>
            Velmora Fine Jewelry was imagined for women who want pieces that feel polished, giftable, and easy to wear far beyond a single occasion.
          </p>
          <p>
            We focus on warm metallic finishes, soft editorial styling, and silhouettes that move effortlessly between self-purchase and thoughtful gifting. The result is jewelry that feels elevated without feeling out of reach.
          </p>
        </div>
      </div>
    </main>
  )
}

export default AboutPage
