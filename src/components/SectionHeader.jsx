export default function SectionHeader({ eyebrow, title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-darktext'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-blue-200' : 'text-mutedtext'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 w-12 h-1 bg-gold rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
