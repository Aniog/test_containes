export default function PageHero({ title, subtitle, children }) {
  return (
    <section className="bg-brand-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
