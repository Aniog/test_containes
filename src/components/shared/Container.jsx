import { cn } from "@/lib/utils";

export function Container({ children, className }) {
  return <div className={cn("container-x", className)}>{children}</div>;
}

export default Container;
