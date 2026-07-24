import { cn } from "@/lib/utils";

export function Hairline({ className, ...props }) {
  return <div role="separator" className={cn("h-px w-full bg-hairline", className)} {...props} />;
}
