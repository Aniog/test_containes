const SectionHeader = ({ label, title, description, align = "center", light = false }) => {
  const alignClass = align === "left" ? "text-left" : "text-center";

  return (
    <div className={`${alignClass} max-w-3xl ${align === "center" ? "mx-auto" : ""} mb-12 md:mb-16`}>
      {label && (
        <span className="inline-block text-sm font-semibold tracking-wider text-teal-600 uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg md:text-xl ${light ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
