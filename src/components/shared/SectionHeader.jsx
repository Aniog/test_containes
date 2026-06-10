import React from 'react';

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  id,
}) => {
  const alignment =
    align === 'center'
      ? 'text-center mx-auto items-center'
      : 'text-left items-start';
  return (
    <div className={`flex flex-col ${alignment} max-w-3xl ${className}`}>
      {eyebrow && (
        <span
          className="label-eyebrow brass-bar"
          id={id ? `${id}-eyebrow` : undefined}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          id={id ? `${id}-title` : undefined}
          className="mt-4 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink-900"
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          id={id ? `${id}-desc` : undefined}
          className="mt-6 text-lg md:text-xl text-ink-500 leading-relaxed max-w-2xl"
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
