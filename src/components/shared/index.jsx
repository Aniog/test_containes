import { Link } from 'react-router-dom';

const SectionHeader = ({ eyebrow, title, subtitle, centered = true, light = false }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    {eyebrow && (
      <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${light ? 'text-gold-accent' : 'text-red-china'}`}>
        {eyebrow}
      </p>
    )}
    <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-blue-navy'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const CtaButton = ({ to = '/contact', label = 'Get a Free Sourcing Quote', variant = 'primary', className = '' }) => {
  const base = 'inline-block font-semibold px-6 py-3 rounded-lg transition-colors text-sm';
  const styles = {
    primary: 'bg-red-china hover:bg-[#a93226] text-white',
    secondary: 'border-2 border-blue-navy text-blue-navy hover:bg-blue-navy hover:text-white',
    white: 'bg-white text-blue-navy hover:bg-gray-100',
    'white-outline': 'border-2 border-white text-white hover:bg-white hover:text-blue-navy',
  };
  return (
    <Link to={to} className={`${base} ${styles[variant]} ${className}`}>
      {label}
    </Link>
  );
};

export { SectionHeader, CtaButton };
