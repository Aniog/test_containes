export default function SectionHeading({ eyebrow, title, description, align = "center", className = "" }) {
  const alignClass = align === "left" ? "text-left" : "text-center";

  return (
    <div className={cn(`${alignClass} mx-auto max-w-3xl`, className)}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-slate-600">{description}</p>
      )}
    </div>
  );
}

function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}
