import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Button = React.forwardRef(({ 
  className, 
  variant = 'primary',
  size = 'default',
  children, 
  asChild,
  to,
  ...props 
}, ref) => {
  const variants = {
    primary: 'bg-blue-800 text-white hover:bg-blue-900 shadow-md',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
    outline: 'border-2 border-blue-800 text-blue-800 hover:bg-blue-50',
    ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
    accent: 'bg-amber-500 text-white hover:bg-amber-600 shadow-md',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const baseClass = cn(
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    className
  );

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
      </Link>
    );
  }

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(baseClass, children.props.className),
    });
  }

  return (
    <button
      ref={ref}
      className={baseClass}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
