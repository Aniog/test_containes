import React from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function RevealSection({ children, className = '', delay = 0, ...props }) {
  const [ref, isVisible] = useScrollReveal();

  const delayClass = delay ? `reveal-delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} ${delayClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
