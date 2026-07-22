import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-espresso text-ivory hover:bg-graphite border border-espresso hover:border-graphite",
  accent:
    "bg-brass text-ivory hover:bg-brass-deep border border-brass hover:border-brass-deep",
  outline:
    "bg-transparent text-espresso border border-espresso hover:bg-espresso hover:text-ivory",
  ghost:
    "bg-transparent text-espresso border border-transparent hover:text-graphite",
  light:
    "bg-ivory text-espresso border border-ivory hover:bg-bone",
  link:
    "bg-transparent text-espresso border-0 p-0 underline-offset-4 hover:underline",
};

const sizes = {
  sm: "px-5 py-2.5 text-[10px]",
  md: "px-8 py-3.5 text-[11px]",
  lg: "px-10 py-4 text-[12px]",
};

export default function Button({
  variant = "primary",
  size = "md",
  as: Tag = "button",
  fullWidth = false,
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center justify-center gap-2 uppercase tracking-label font-medium rounded-none",
        "transition-all duration-300 ease-out-soft",
        "disabled:opacity-40 disabled:pointer-events-none",
        "select-none",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
