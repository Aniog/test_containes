import { cn } from "@/lib/utils";

export default function Container({ className, children, as: Tag = "div", ...rest }) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-7xl px-6 md:px-10", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
