import { cn } from "@/lib/utils";

export default function Card({ className, hover = true, children, ...rest }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-line bg-surface p-6 md:p-8 shadow-card",
        hover && "transition-shadow hover:shadow-card-hover",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
