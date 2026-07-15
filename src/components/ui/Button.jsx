import { cn } from '@/lib/utils'

const variants = {
  solid: 'bg-velvet-500 text-cream hover:bg-velvet-600 border border-velvet-500',
  outline: 'bg-transparent text-velvet-500 border border-velvet-500 hover:bg-velvet-500 hover:text-cream',
  ghost: 'bg-transparent text-obsidian-700 hover:bg-velvet-100 border border-transparent',
  dark: 'bg-obsidian-800 text-cream hover:bg-obsidian-900 border border-obsidian-800',
  light: 'bg-cream text-obsidian-800 hover:bg-velvet-100 border border-obsidian-200',
}

const sizes = {
  sm: 'px-4 py-2 text-xs tracking-widest',
  md: 'px-6 py-3 text-xs tracking-widest',
  lg: 'px-8 py-4 text-sm tracking-widest',
  xl: 'px-10 py-4 text-sm tracking-widest',
  icon: 'p-2',
}

export function Button({ variant = 'solid', size = 'md', className, children, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-sans font-medium uppercase transition-all duration-300 ease-luxury disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
