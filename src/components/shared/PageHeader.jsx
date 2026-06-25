const PageHeader = ({ eyebrow, title, description }) => {
  return (
    <section className="bg-[#0B2545] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70 mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
