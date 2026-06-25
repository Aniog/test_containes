import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  href,
  onClick,
  disabled = false,
  type = 'button',
  icon: Icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[#1e3a5f] text-white hover:bg-[#2d4a6f] focus:ring-[#1e3a5f] shadow-md hover:shadow-lg',
    secondary: 'bg-white text-[#1e3a5f] border-2 border-[#1e3a5f] hover:bg-[#f7fafc] focus:ring-[#1e3a5f]',
    outline: 'bg-transparent text-[#1e3a5f] border border-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white focus:ring-[#1e3a5f]',
    ghost: 'bg-transparent text-[#4a6fa5] hover:bg-[#f7fafc] focus:ring-[#4a6fa5]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );
  
  const content = (
    <>
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }
  
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
