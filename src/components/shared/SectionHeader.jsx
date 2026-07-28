const SectionHeader = ({ title, subtitle, centered = true, light = false }) => (
  <div className={`mb-12 lg:mb-16 ${centered ? 'text-center' : ''}`}>
    <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-charcoal'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-body'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;
