import { cn } from "@/lib/utils";

export default function Container({ className, children, ...rest }) {
  return (
    <div
      className={cn("mx-auto w-full max-w-content px-5 md:px-8", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
