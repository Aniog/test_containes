const PageHeader = ({ eyebrow, title, description, children }) => {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="container-x py-14 md:py-20">
        <div className="max-w-3xl">
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">{description}</p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
