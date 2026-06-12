const SectionHeader = ({ eyebrow, title, description, align = "center" }) => {
  const alignCls =
    align === "left" ? "text-left" : "text-center mx-auto";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-brand">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
