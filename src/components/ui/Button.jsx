import { cn } from "@/lib/utils";

/**
 * Button — three editorial variants: primary (gold), secondary (outlined ink),
 * and ghost (underlined link). All variants are uppercase, tracked, and
 * shape-sharp (rounded-none) to keep the editorial mood.
 */
export function Button({
  variant = "primary",
  className,
  as: Tag = "button",
  children,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 cta-label transition-all duration-200 ease-out active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants = {
    primary:
      "bg-gold text-ivory hover:-translate-y-px hover:bg-gold-deep focus-visible:outline-gold",
    secondary:
      "border border-ink text-ink hover:bg-ink hover:text-ivory focus-visible:outline-ink",
    ghost:
      "px-0 py-0 text-ink underline underline-offset-[6px] decoration-[0.5px] decoration-gold-soft hover:decoration-gold focus-visible:outline-ink",
  };

  return (
    <Tag
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Button;
