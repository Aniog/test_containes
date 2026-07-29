const PageHero = ({ title, subtitle, children }) => {
  return (
    <section className="bg-neutral-50 py-16 md:py-20 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}

export default PageHero
