const SectionHeader = ({ label, title, subtitle, light = false, center = true }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && (
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
          style={{
            backgroundColor: light ? 'rgba(255,255,255,0.15)' : '#fef2f2',
            color: light ? '#ffffff' : '#c0392b',
          }}
        >
          {label}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl font-bold mb-4"
        style={{ color: light ? '#ffffff' : '#1a2e4a' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''}`}
          style={{ color: light ? 'rgba(255,255,255,0.75)' : '#4a5568' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
