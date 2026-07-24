const PageHero = ({ eyebrow, title, description, dark = false }) => {
  return (
    <section className={`${dark ? 'bg-velmora-cocoa text-velmora-ivory' : 'bg-velmora-card text-velmora-ink'} px-6 pb-12 pt-32 sm:px-8 lg:px-10 lg:pt-36`}>
      <div className="mx-auto max-w-[1380px]">
        <p className={`text-xs uppercase tracking-luxe ${dark ? 'text-velmora-blush' : 'text-velmora-gold'}`}>
          {eyebrow}
        </p>
        <h1 className={`mt-5 max-w-4xl font-display text-5xl sm:text-6xl lg:text-7xl ${dark ? 'text-velmora-ivory' : 'text-velmora-ink'}`}>
          {title}
        </h1>
        <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${dark ? 'text-velmora-sand' : 'text-velmora-smoke'}`}>
          {description}
        </p>
      </div>
    </section>
  )
}

export default PageHero
