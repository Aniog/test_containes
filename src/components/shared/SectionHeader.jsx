export default function SectionHeader({ badge, title, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      {badge && (
        <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${light ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-700'}`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-navy-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
