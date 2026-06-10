import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const variants = {
  primary:
    'bg-[#E8743B] hover:bg-[#CC6230] text-white border border-[#E8743B] hover:border-[#CC6230] shadow-sm',
  secondary:
    'bg-white text-[#0B2545] border border-[#0B2545] hover:bg-[#0B2545] hover:text-white',
  ghost:
    'bg-transparent text-[#0B2545] hover:text-[#E8743B] border border-transparent',
  white:
    'bg-white text-[#0B2545] hover:bg-[#F8F9FB] border border-white shadow-sm',
  outlineLight:
    'bg-transparent text-white border border-white/40 hover:bg-white/10',
};

const sizes = {
  sm: 'text-sm px-4 py-2',
  md: 'text-[15px] px-5 py-2.5',
  lg: 'text-base px-7 py-3.5',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  children,
  showArrow = false,
  className,
  ...rest
}) {
  const cls = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-150',
    variants[variant],
    sizes[size],
    className,
  );
  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" strokeWidth={2.5} />}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}
