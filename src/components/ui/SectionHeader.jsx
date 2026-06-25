export default function SectionHeader({ label, heading, subtext, centered = true }) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {label && (
        <span className="text-[#e8621a] text-sm font-semibold uppercase tracking-wider">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b4e] mt-2 leading-tight">
        {heading}
      </h2>
      {subtext && (
        <p className={`text-gray-600 text-lg mt-4 ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtext}
        </p>
      )}
    </div>
  );
}
