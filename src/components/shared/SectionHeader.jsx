export default function SectionHeader({ eyebrow, title, subtitle, align = "left", light = false }) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`eyebrow ${light ? "!text-[#E8A33D]" : ""}`}>{eyebrow}</p>
      )}
      <h2
        id={title?.toLowerCase().replace(/\s+/g, "-") + "-heading"}
        className={`mt-3 font-display text-3xl md:text-4xl leading-tight font-semibold ${
          light ? "text-white" : "text-[#0F172A]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[16px] md:text-[17px] leading-relaxed ${
            light ? "text-white/80" : "text-[#475569]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}