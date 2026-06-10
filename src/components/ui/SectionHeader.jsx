import { cn } from '@/lib/utils';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', className }) {
  const isCenter = align === 'center';
  return (
    <div
      className={cn(
        'flex flex-col gap-3 max-w-3xl',
        isCenter ? 'mx-auto text-center items-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A2230] leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-[#3D4A5C] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
