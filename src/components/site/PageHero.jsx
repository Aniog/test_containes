const PageHero = ({ eyebrow, title, description }) => {
  return (
    <section className="bg-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base md:text-lg text-slate-200 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
