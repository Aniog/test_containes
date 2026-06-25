export default function SectionHeader({ label, title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {label && (
        <span className="inline-block text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-[#0d2340]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-blue-100' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
