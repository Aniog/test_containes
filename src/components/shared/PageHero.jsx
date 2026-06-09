export default function PageHero({ tag, title, subtitle, children }) {
  return (
    <section className="bg-brand-blue py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {tag && (
          <span className="inline-block bg-blue-700 text-blue-200 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            {tag}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-blue-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
