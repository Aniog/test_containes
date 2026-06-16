import { cn } from "@/lib/utils";

export default function Container({ as: Tag = "div", className, children, ...rest }) {
  return (
    <Tag
      className={cn("max-w-7xl mx-auto px-6 md:px-10", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
