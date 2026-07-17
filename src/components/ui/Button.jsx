import { cn } from "@/lib/utils";

const variants = {
  primary: "btn-primary",
  gold: "btn-primary btn-gold",
  outline: "btn-outline",
  "outline-on-dark": "btn-outline btn-outline-on-dark",
  ghost: "btn-ghost",
};

const sizes = {
  md: "px-7 py-[0.95rem]",
  sm: "px-5 py-3 text-[10px]",
  lg: "px-9 py-[1.05rem]",
};

export default function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  fullWidth = false,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        variants[variant],
        size === "md" && "px-7 py-[0.95rem]",
        size === "sm" && "px-5 py-3 text-[10px]",
        size === "lg" && "px-9 py-[1.05rem]",
        fullWidth && "w-full",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
