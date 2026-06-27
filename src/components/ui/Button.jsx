import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-velmora-gold';

  const variants = {
    primary: 'bg-velmora-black text-white hover:bg-velmora-charcoal active:scale-[0.98]',
    accent: 'bg-velmora-gold text-white hover:bg-velmora-gold-dark active:scale-[0.98]',
    outline: 'border border-velmora-black text-velmora-black hover:bg-velmora-black hover:text-white active:scale-[0.98]',
    ghost: 'text-velmora-black hover:text-velmora-gold-dark',
    link: 'text-velmora-black underline underline-offset-4 decoration-velmora-border hover:decoration-velmora-gold',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs tracking-widest uppercase',
    md: 'px-6 py-3 text-sm tracking-widest uppercase',
    lg: 'px-8 py-4 text-sm tracking-widest uppercase',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
