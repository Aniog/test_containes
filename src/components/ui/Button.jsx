export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className = '', 
  disabled = false,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gold text-warm-black hover:bg-gold-dark active:scale-[0.98]',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-white',
    ghost: 'text-charcoal hover:text-gold',
    solid: 'bg-warm-black text-white hover:bg-charcoal active:scale-[0.98]'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    full: 'px-6 py-4 text-sm w-full'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
