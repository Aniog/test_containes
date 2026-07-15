import { useState } from "react";
import { cn } from "@/lib/utils";

export function HoverRevealImage({
  id,
  alt,
  ratio = "4x3",
  width = "600",
  className,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        data-strk-img-id={`${id}-primary`}
        data-strk-img={`[${id}-query] [${id}-name]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={alt}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
          hovered ? "opacity-0" : "opacity-100"
        )}
      />
      <img
        data-strk-img-id={`${id}-hover`}
        data-strk-img={`[${id}-hover-query] [${id}-name]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={`${alt} - alternate view`}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
          hovered ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}
