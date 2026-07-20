import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function AnimatedSection({ 
  children, 
  animation = 'scroll-fade-in',
  delay = 0,
  className = '',
  as = 'div',
  ...props 
}) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const Tag = as;
  
  const delayClass = delay > 0 ? `stagger-${delay}` : '';
  
  return (
    <Tag
      ref={ref}
      className={`${animation} ${isInView ? 'visible' : ''} ${delayClass} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
