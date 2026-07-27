export default function PageHero({ badge, title, subtitle, children }) {
  return (
    <section className="bg-brand-navy py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span className="inline-block bg-blue-600/20 text-blue-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-blue-500/30">
            {badge}
          </span>
        )}
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
