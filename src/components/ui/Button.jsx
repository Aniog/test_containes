export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-velmora-gold text-velmora-base hover:bg-velmora-ivory hover:text-velmora-base',
    outline:
      'border border-velmora-ivory text-velmora-ivory bg-transparent hover:bg-velmora-ivory hover:text-velmora-base',
    ghost:
      'bg-transparent text-velmora-ivory hover:text-velmora-gold',
    dark: 'bg-velmora-base-light text-velmora-ivory border border-velmora-taupe/30 hover:border-velmora-gold',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs uppercase',
    md: 'px-6 py-3 text-sm uppercase',
    lg: 'px-8 py-4 text-sm uppercase',
  }

  return (
    <button
      type="button"
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
