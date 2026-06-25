const PageHeader = ({ eyebrow, title, description }) => {
  return (
    <section className="bg-bone border-b border-bone-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-5">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-5xl md:text-7xl text-ink tracking-tight leading-[1.05] max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-8 max-w-2xl text-base md:text-lg text-steel leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
