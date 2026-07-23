import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-espresso text-ivory hover:bg-espresso-200 active:bg-espresso-300 border border-espresso",
  gold:
    "bg-gold text-espresso hover:bg-gold-light active:bg-gold-dark border border-gold-dark",
  outline:
    "bg-transparent text-espresso border border-espresso/80 hover:bg-espresso hover:text-ivory",
  ghost:
    "bg-transparent text-espresso hover:text-gold-dark",
  light:
    "bg-ivory text-espresso border border-ivory hover:bg-ivory-200",
};

const sizes = {
  sm: "h-9 px-4 text-[11px]",
  md: "h-11 px-6 text-xs",
  lg: "h-14 px-8 text-sm",
};

export default function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center justify-center gap-2 font-sans font-medium uppercase tracking-widest transition-all duration-300 ease-smooth disabled:opacity-40 disabled:cursor-not-allowed select-none",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
