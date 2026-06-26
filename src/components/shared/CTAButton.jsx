import { Link } from 'react-router-dom';

const CTAButton = ({ to = '/contact', children = 'Get a Free Sourcing Quote', variant = 'primary', className = '' }) => {
  const base = 'inline-block font-semibold px-6 py-3 rounded-lg text-sm transition-colors no-underline cursor-pointer';
  const variants = {
    primary: 'bg-[#c0392b] hover:bg-[#a93226] text-white',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-[#1a2e4a]',
    outline: 'border-2 border-[#1a2e4a] text-[#1a2e4a] hover:bg-[#1a2e4a] hover:text-white',
  };

  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
};

export default CTAButton;
